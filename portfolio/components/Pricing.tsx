import { SectionWrapper } from "./SectionWrapper";
import type { PricingPlan } from "@/lib/data";

/**
 * Pricing — 3-column pricing cards with middle plan highlighted.
 * Server component.
 */

export interface PricingProps {
  plans: PricingPlan[];
}

export function Pricing({ plans }: PricingProps) {
  return (
    <SectionWrapper id="pricing">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-themed-text">Pricing</h2>
        <p className="mt-4 text-base md:text-lg text-themed-text-secondary max-w-2xl mx-auto">
          Transparent pricing. No surprise invoices. Pick the plan that fits
          your stage.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-3 items-stretch">
        {plans.map((plan) => (
          <article
            key={plan.name}
            className={`group relative flex flex-col rounded-2xl border overflow-hidden
              transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover ${
              plan.highlighted
                ? "bg-themed-card border-accent shadow-lg shadow-accent/10"
                : "bg-themed-card border-themed-border hover:border-themed-border-hover"
            }`}
          >
            {/* Prominent "Most Popular" banner at card top */}
            {plan.highlighted && (
              <div className="w-full bg-gradient-to-r from-accent to-blue-500 py-2.5 text-center">
                <span className="text-xs font-bold uppercase tracking-widest text-white">
                  ★ Most Popular
                </span>
              </div>
            )}

            <div className={`flex flex-col flex-1 p-8 ${plan.highlighted ? "" : "pt-8"}`}>
            <h3 className="text-xl font-semibold text-themed-text">{plan.name}</h3>
            <p className="mt-2 text-sm text-themed-text-muted">{plan.description}</p>

            <div className="mt-6">
              <span className="text-4xl font-bold text-themed-text">
                {plan.price}
              </span>
              <span className="ml-2 text-sm text-themed-text-muted">{plan.period}</span>
            </div>

            <ul className="mt-8 space-y-3 flex-1" role="list">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <svg
                    className="mt-0.5 h-5 w-5 shrink-0 text-accent"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-sm text-themed-text-secondary">{feature}</span>
                </li>
              ))}
            </ul>

            <a
              href={plan.ctaHref}
              target="_blank"
              rel="noopener noreferrer"
              className={`mt-8 inline-flex items-center justify-center rounded-lg px-6 py-3 text-sm font-medium transition-all duration-200 ${
                plan.highlighted
                  ? "bg-accent text-white hover:bg-accent-hover shadow-lg shadow-accent/20 hover:shadow-accent/30"
                  : "border border-themed-border text-themed-text-secondary hover:text-themed-text hover:border-themed-border-hover hover:bg-themed-surface"
              }`}
            >
              {plan.cta}
            </a>
            </div>
          </article>
        ))}
      </div>
    </SectionWrapper>
  );
}
