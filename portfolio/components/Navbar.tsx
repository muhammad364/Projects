"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import type { NavLink } from "@/lib/data";
import { ThemeToggle } from "./ThemeToggle";

/**
 * Navbar — sticky header with transparent → solid background on scroll.
 * Includes theme toggle button on the right.
 */

export interface NavbarProps {
  links: NavLink[];
  bookCallHref: string;
}

export function Navbar({ links, bookCallHref }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const toggleBtnRef = useRef<HTMLButtonElement>(null);

  /* Track scroll position to toggle solid background */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll(); // initial check
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Close mobile menu on resize to desktop */
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768 && menuOpen) setMenuOpen(false);
    };
    window.addEventListener("resize", onResize, { passive: true });
    return () => window.removeEventListener("resize", onResize);
  }, [menuOpen]);

  /* Focus trap inside mobile menu */
  useEffect(() => {
    if (!menuOpen) return;
    const menu = menuRef.current;
    if (!menu) return;

    const focusable = menu.querySelectorAll<HTMLElement>(
      'a[href], button, [tabindex]:not([tabindex="-1"])'
    );
    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    const trap = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
        toggleBtnRef.current?.focus();
        return;
      }
      if (e.key !== "Tab") return;
      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault();
          last?.focus();
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault();
          first?.focus();
        }
      }
    };

    document.addEventListener("keydown", trap);
    first?.focus();
    return () => document.removeEventListener("keydown", trap);
  }, [menuOpen]);

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 h-[72px] transition-all duration-300 ${
        scrolled || menuOpen
          ? "bg-themed-bg/95 backdrop-blur-md border-b border-themed-border shadow-sm"
          : "bg-transparent"
      }`}
      role="banner"
    >
      <nav
        className="max-w-6xl mx-auto px-6 h-full flex items-center justify-between"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <a
          href="#"
          className="text-xl font-bold tracking-tight text-themed-text select-none"
          aria-label="IFFAS — home"
        >
          IFFAS
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-themed-text-secondary hover:text-themed-text transition-colors"
            >
              {link.label}
            </a>
          ))}
          <ThemeToggle />
          <a
            href={bookCallHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-lg bg-accent px-5 py-2.5 text-sm font-medium text-white hover:bg-accent-hover transition-colors focus-visible:ring-2 focus-visible:ring-accent"
          >
            Book a Call
          </a>
        </div>

        {/* Mobile: theme toggle + hamburger */}
        <div className="flex md:hidden items-center gap-2">
          <ThemeToggle />
          <button
            ref={toggleBtnRef}
            type="button"
            className="flex flex-col justify-center items-center w-10 h-10 gap-1.5"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span
              className={`block h-0.5 w-6 bg-themed-text transition-transform duration-300 ${
                menuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-themed-text transition-opacity duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-themed-text transition-transform duration-300 ${
                menuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile full-screen slide-down menu */}
      <div
        id="mobile-menu"
        ref={menuRef}
        role="dialog"
        aria-modal={menuOpen ? "true" : undefined}
        aria-label="Mobile navigation"
        className={`md:hidden fixed inset-x-0 top-[72px] bottom-0 bg-themed-bg/98 backdrop-blur-md flex flex-col items-center justify-center gap-8 transition-all duration-300 ${
          menuOpen
            ? "opacity-100 pointer-events-auto translate-y-0"
            : "opacity-0 pointer-events-none -translate-y-4"
        }`}
      >
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={closeMenu}
            className="text-2xl text-themed-text-secondary hover:text-themed-text transition-colors"
          >
            {link.label}
          </a>
        ))}
        <a
          href={bookCallHref}
          target="_blank"
          rel="noopener noreferrer"
          onClick={closeMenu}
          className="inline-flex items-center justify-center rounded-lg bg-accent px-8 py-3 text-lg font-medium text-white hover:bg-accent-hover transition-colors"
        >
          Book a Call
        </a>
      </div>
    </header>
  );
}
