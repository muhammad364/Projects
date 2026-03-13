import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Differentiators } from "@/components/Differentiators";
import { Process } from "@/components/Process";
import { CaseStudies } from "@/components/CaseStudies";
import { Pricing } from "@/components/Pricing";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";

import {
  navLinks,
  bookCallHref,
  services,
  differentiators,
  processSteps,
  caseStudies,
  pricingPlans,
} from "@/lib/data";

/**
 * Home page — composes all sections in the specified order.
 * Server component; child components opt in to "use client" only when needed.
 */
export default function Home() {
  return (
    <>
      <Navbar links={navLinks} bookCallHref={bookCallHref} />

      <main>
        <Hero bookCallHref={bookCallHref} />
        <Services items={services} />
        <Differentiators bullets={differentiators} />
        <Process steps={processSteps} />
        <CaseStudies studies={caseStudies} />
        <Pricing plans={pricingPlans} />
        <CTA bookCallHref={bookCallHref} />
      </main>

      <Footer links={navLinks} bookCallHref={bookCallHref} />

      {/* Floating scroll-to-top button */}
      <ScrollToTop />
    </>
  );
}
