import { SectionWrapper } from "./SectionWrapper";

/**
 * CTA — full-width call-to-action banner.
 * Server component.
 */

export interface CTAProps {
  bookCallHref: string;
}

export function CTA({ bookCallHref }: CTAProps) {
  return (
    <SectionWrapper id="contact" bgClassName="bg-themed-surface">
      <div className="relative text-center flex flex-col items-center gap-6 py-8">
        {/* Background glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-accent/5 via-accent/10 to-accent/5 rounded-3xl blur-xl" aria-hidden="true" />
        <div className="relative">
          <h2 className="text-3xl md:text-4xl font-bold text-themed-text max-w-3xl">
            Ready to Build Something That Scales?
          </h2>
          <p className="mt-4 text-base md:text-lg text-themed-text-secondary max-w-xl mx-auto">
            Let&apos;s talk about your project, your goals, and how we can ship
            something exceptional — fast.
          </p>
          <a
            href={bookCallHref}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center justify-center rounded-lg bg-accent px-8 py-3.5 text-base font-medium text-white hover:bg-accent-hover transition-colors shadow-lg shadow-accent/20"
          >
            Schedule a Call
          </a>
        </div>
      </div>
    </SectionWrapper>
  );
}
