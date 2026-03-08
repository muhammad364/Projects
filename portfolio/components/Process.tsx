import { SectionWrapper } from "./SectionWrapper";
import type { ProcessStep } from "@/lib/data";

/**
 * Process — 5-step horizontal timeline on desktop, stacked on mobile.
 * Server component.
 */

export interface ProcessProps {
  steps: ProcessStep[];
}

export function Process({ steps }: ProcessProps) {
  return (
    <SectionWrapper>
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-themed-text">
          Our Process
        </h2>
        <p className="mt-4 text-base md:text-lg text-themed-text-secondary max-w-2xl mx-auto">
          A proven five-step workflow that takes you from idea to production.
        </p>
      </div>

      {/* Desktop: horizontal timeline, Mobile: stacked cards */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
        {steps.map((s, idx) => (
          <div
            key={s.step}
            className="group relative bg-themed-card rounded-2xl p-6 border border-themed-border
              hover:border-themed-border-hover hover:shadow-card-hover hover:-translate-y-1
              transition-all duration-300 text-center lg:text-left"
          >
            {/* Connector line (desktop only, between cards) */}
            {idx < steps.length - 1 && (
              <div className="hidden lg:block absolute top-5 -right-3 w-6 h-px bg-themed-border" aria-hidden="true" />
            )}
            <span className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-accent/15 text-accent text-sm font-bold mb-4 group-hover:bg-accent/25 transition-colors duration-300">
              {s.step}
            </span>
            <h3 className="text-lg font-semibold text-themed-text">{s.title}</h3>
            <p className="mt-2 text-sm text-themed-text-muted leading-relaxed">
              {s.description}
            </p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
