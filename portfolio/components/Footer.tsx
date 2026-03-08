import type { NavLink } from "@/lib/data";

/**
 * Footer — 3-column layout with black background and copyright.
 * Server component.
 */

export interface FooterProps {
  links: NavLink[];
  bookCallHref: string;
}

export function Footer({ links, bookCallHref }: FooterProps) {
  return (
    <footer className="bg-themed-footer border-t border-themed-border" role="contentinfo">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Col 1: Brand */}
          <div>
            <span className="text-xl font-bold text-themed-text">IFFAS</span>
            <p className="mt-3 text-sm text-themed-text-muted leading-relaxed max-w-xs">
              Digital product engineering studio. We build high-performance
              software that scales.
            </p>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <h4 className="text-sm font-semibold text-themed-text-secondary uppercase tracking-wider mb-4">
              Navigation
            </h4>
            <ul className="space-y-2" role="list">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-themed-text-muted hover:text-themed-text transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Contact */}
          <div>
            <h4 className="text-sm font-semibold text-themed-text-secondary uppercase tracking-wider mb-4">
              Get in Touch
            </h4>
            <ul className="space-y-2" role="list">
              <li>
                <a
                  href={bookCallHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-themed-text-muted hover:text-themed-text transition-colors"
                >
                  Book a Call
                </a>
              </li>
              <li>
                <a
                  href="mailto:hello@iffas.dev"
                  className="text-sm text-themed-text-muted hover:text-themed-text transition-colors"
                >
                  hello@iffas.dev
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 border-t border-themed-border pt-8 text-center">
          <p className="text-xs text-themed-text-muted">
            &copy; 2026 IFFAS. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
