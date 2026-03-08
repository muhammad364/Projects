import { type ReactNode } from "react";

/**
 * SectionWrapper — applies consistent section padding, max-width container,
 * and semantic <section> tag with an optional HTML id for anchor links.
 *
 * Server component by default (no "use client").
 */
export interface SectionWrapperProps {
  id?: string;
  children: ReactNode;
  className?: string;
  /** Override default background */
  bgClassName?: string;
}

export function SectionWrapper({
  id,
  children,
  className = "",
  bgClassName = "",
}: SectionWrapperProps) {
  return (
    <section id={id} className={`py-24 ${bgClassName}`}>
      <div className={`max-w-6xl mx-auto px-6 ${className}`}>{children}</div>
    </section>
  );
}
