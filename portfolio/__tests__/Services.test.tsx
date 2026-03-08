/**
 * @jest-environment jsdom
 */
import React from "react";
import { render, screen } from "@testing-library/react";
import { Services } from "@/components/Services";
import type { ServiceItem } from "@/lib/data";

const mockServices: ServiceItem[] = [
  {
    title: "Web Development",
    description: "Building fast web apps.",
    icon: "🌐",
  },
  {
    title: "Mobile Apps",
    description: "Cross-platform mobile.",
    icon: "📱",
  },
];

describe("Services", () => {
  it("renders all service cards", () => {
    render(<Services items={mockServices} />);
    expect(screen.getByText("Web Development")).toBeTruthy();
    expect(screen.getByText("Mobile Apps")).toBeTruthy();
  });

  it("renders descriptions", () => {
    render(<Services items={mockServices} />);
    expect(screen.getByText("Building fast web apps.")).toBeTruthy();
  });

  it("renders section heading", () => {
    render(<Services items={mockServices} />);
    expect(screen.getByText("What We Build")).toBeTruthy();
  });
});
