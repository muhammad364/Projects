/**
 * @jest-environment jsdom
 */
import React from "react";
import { render, screen } from "@testing-library/react";
import { Hero } from "@/components/Hero";

// Mock framer-motion to avoid ESM / browser-API issues in Jest
jest.mock("framer-motion", () => ({
  motion: new Proxy(
    {},
    {
      get: (_target, prop) => {
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

describe("Hero", () => {
  it("renders headline", () => {
    render(<Hero bookCallHref="https://example.com" />);
    expect(
      screen.getByText(
        "Engineering High-Performance Digital Products That Scale"
      )
    ).toBeTruthy();
  });

  it("renders CTA buttons", () => {
    render(<Hero bookCallHref="https://example.com" />);
    expect(screen.getByText("Book a Discovery Call")).toBeTruthy();
    expect(screen.getByText("View Our Work")).toBeTruthy();
  });

  it("links Book a Discovery Call to provided href", () => {
    render(<Hero bookCallHref="https://example.com/book" />);
    const link = screen.getByText("Book a Discovery Call");
    expect(link.getAttribute("href")).toBe("https://example.com/book");
  });
});
