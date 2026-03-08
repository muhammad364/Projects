import { SectionWrapper } from "./SectionWrapper";
import type { CaseStudy } from "@/lib/data";

/**
 * CaseStudies — project cards with performance metrics.
 * Server component.
 */

export interface CaseStudiesProps {
  studies: CaseStudy[];
}

export function CaseStudies({ studies }: CaseStudiesProps) {
  return (
    <SectionWrapper id="work">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-themed-text">
          Selected Work
        </h2>
        <p className="mt-4 text-base md:text-lg text-themed-text-secondary max-w-2xl mx-auto">
          Real results from real projects — measured in load times,
          Lighthouse scores, and business impact.
        </p>
      </div>

      <div className="flex flex-col gap-10">
        {studies.map((study) => (
          <article
            key={study.name}
            className="group relative bg-themed-card rounded-2xl p-8 md:p-10 border border-themed-border
              hover:border-themed-border-hover hover:shadow-card-hover
              transition-all duration-300 overflow-hidden"
          >
            {/* Gradient accent stripe at top */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-2xl" aria-hidden="true" />

            {/* Header row */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
              <div>
                <h3 className="text-xl md:text-2xl font-semibold text-themed-text">{study.name}</h3>
                <span className="text-xs font-medium text-accent uppercase tracking-wider">{study.tagline}</span>
              </div>
              {/* Tech stack badges */}
              <div className="flex flex-wrap gap-2">
                {study.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="inline-block rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Description */}
            <p className="text-sm md:text-base text-themed-text-secondary leading-relaxed mb-6">
              {study.description}
            </p>

            {/* Challenge & Solution — 2 columns on desktop */}
            <div className="grid gap-6 md:grid-cols-2 mb-8">
              <div className="bg-themed-surface rounded-xl p-5 border border-themed-border">
                <h4 className="text-xs font-semibold text-themed-text-muted uppercase tracking-wider mb-2">
                  The Challenge
                </h4>
                <p className="text-sm text-themed-text-secondary leading-relaxed">
                  {study.challenge}
                </p>
              </div>
              <div className="bg-themed-surface rounded-xl p-5 border border-themed-border">
                <h4 className="text-xs font-semibold text-themed-text-muted uppercase tracking-wider mb-2">
                  Our Solution
                </h4>
                <p className="text-sm text-themed-text-secondary leading-relaxed">
                  {study.solution}
                </p>
              </div>
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center p-4 rounded-xl bg-themed-surface border border-themed-border">
                <p className="text-xs text-themed-text-muted uppercase tracking-wide mb-1">
                  Load Time
                </p>
                <p className="text-lg font-bold text-themed-text">
                  <span className="text-themed-text-muted line-through text-sm mr-1">{study.metrics.loadTimeBefore}</span>
                  {study.metrics.loadTimeAfter}
                </p>
              </div>
              <div className="text-center p-4 rounded-xl bg-themed-surface border border-themed-border">
                <p className="text-xs text-themed-text-muted uppercase tracking-wide mb-1">
                  Lighthouse
                </p>
                <p className="text-lg font-bold text-themed-text">
                  <span className="text-themed-text-muted line-through text-sm mr-1">{study.metrics.lighthouseBefore}</span>
                  {study.metrics.lighthouseAfter}
                </p>
              </div>
              <div className="text-center p-4 rounded-xl bg-accent/10 border border-accent/20">
                <p className="text-xs text-accent uppercase tracking-wide mb-1">
                  Perf Gain
                </p>
                <p className="text-lg font-bold text-accent">
                  +{study.metrics.performanceGain}
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </SectionWrapper>
  );
}
