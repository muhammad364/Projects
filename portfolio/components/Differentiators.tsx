import { SectionWrapper } from "./SectionWrapper";

/**
 * Differentiators — 2-column layout: left code-mock SVG, right bullet list.
 * Server component.
 */

export interface DifferentiatorsProps {
  bullets: string[];
}

export function Differentiators({ bullets }: DifferentiatorsProps) {
  return (
    <SectionWrapper>
      <div className="grid gap-12 md:grid-cols-2 items-center">
        {/* Left: code mock image */}
        <div className="flex justify-center">
          <div className="relative">
            <div className="absolute -inset-4 bg-accent/5 rounded-3xl blur-2xl" aria-hidden="true" />
            <picture>
              <img
                src="/images/code-mock.svg"
                alt="Stylised code editor illustration representing our engineering approach"
                width={560}
                height={400}
                loading="lazy"
                className="relative w-full max-w-md rounded-2xl border border-themed-border"
              />
            </picture>
          </div>
        </div>

        {/* Right: bullet list */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-themed-text mb-8">
            Why Teams Choose IFFAS
          </h2>
          <ul className="space-y-5" role="list">
            {bullets.map((bullet) => (
              <li key={bullet} className="flex items-start gap-4 group">
                <span
                  className="mt-2 h-2 w-2 shrink-0 rounded-full bg-accent group-hover:shadow-card-glow transition-shadow duration-300"
                  aria-hidden="true"
                />
                <span className="text-base md:text-lg text-themed-text-secondary group-hover:text-themed-text transition-colors duration-200">
                  {bullet}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </SectionWrapper>
  );
}
