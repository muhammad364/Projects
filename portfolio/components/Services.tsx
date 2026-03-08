import { SectionWrapper } from "./SectionWrapper";
import type { ServiceItem } from "@/lib/data";

/**
 * Services — grid of service cards.
 * Server component (no "use client").
 */

export interface ServicesProps {
  items: ServiceItem[];
}

export function Services({ items }: ServicesProps) {
  return (
    <SectionWrapper id="services">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-themed-text">
          What We Build
        </h2>
        <p className="mt-4 text-base md:text-lg text-themed-text-secondary max-w-2xl mx-auto">
          End-to-end engineering for products that demand speed, reliability,
          and scale.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((service) => (
          <article
            key={service.title}
            className="group relative bg-themed-card rounded-2xl p-8 border border-themed-border
              hover:border-themed-border-hover hover:shadow-card-hover hover:-translate-y-1
              transition-all duration-300 overflow-hidden"
          >
            {/* Subtle gradient overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" aria-hidden="true" />
            <div className="relative">
              <span className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-accent/10 text-2xl mb-4" role="img" aria-hidden="true">
                {service.icon}
              </span>
              <h3 className="text-lg font-semibold text-themed-text">
                {service.title}
              </h3>
              <p className="mt-2 text-sm text-themed-text-muted leading-relaxed">
                {service.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </SectionWrapper>
  );
}
