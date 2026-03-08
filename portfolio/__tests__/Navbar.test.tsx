/**
 * @jest-environment jsdom
 */
import React from "react";
import { render, screen } from "@testing-library/react";
import { Navbar } from "@/components/Navbar";

// Mock framer-motion to avoid ESM issues in Jest
jest.mock("framer-motion", () => ({
  motion: new Proxy(
    {},
    {
      get: (_target, prop) => {
        // Return a forwardRef component for any HTML element (motion.div, motion.a, etc.)
        return React.forwardRef((props: any, ref: any) => {
          const { initial, animate, variants, whileHover, whileTap, custom, ...rest } = props;
          const Tag = prop as any;
          return <Tag ref={ref} {...rest} />;
        });
      },
    }
  ),
  AnimatePresence: ({ children }: any) => children,
}));

const links = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
];

describe("Navbar", () => {
  it("renders logo text", () => {
    render(<Navbar links={links} bookCallHref="https://example.com" />);
    expect(screen.getByText("IFFAS")).toBeTruthy();
  });

  it("renders navigation links", () => {
    render(<Navbar links={links} bookCallHref="https://example.com" />);
    expect(screen.getByText("Services")).toBeTruthy();
    expect(screen.getByText("Work")).toBeTruthy();
  });

  it("renders Book a Call button", () => {
    render(<Navbar links={links} bookCallHref="https://example.com" />);
    const bookCallBtns = screen.getAllByText("Book a Call");
    expect(bookCallBtns.length).toBeGreaterThan(0);
  });

  it("has accessible hamburger button", () => {
    render(<Navbar links={links} bookCallHref="https://example.com" />);
    const btn = screen.getByLabelText("Open menu");
    expect(btn).toBeTruthy();
    expect(btn.getAttribute("aria-expanded")).toBe("false");
  });
});
