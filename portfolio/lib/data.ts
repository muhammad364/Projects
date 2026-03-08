/* ------------------------------------------------------------------ */
/*  Centralised placeholder data for all sections.                    */
/*  A junior dev can edit content here without touching components.    */
/* ------------------------------------------------------------------ */

/* ---- Services ---------------------------------------------------- */
export interface ServiceItem {
  title: string;
  description: string;
  icon: string; // emoji or SVG path — kept simple for now
}

export const services: ServiceItem[] = [
  {
    title: "Web Application Development",
    description:
      "Scalable, server-rendered web apps built with modern frameworks. Optimised for Core Web Vitals and conversion.",
    icon: "🌐",
  },
  {
    title: "Mobile & Cross-Platform",
    description:
      "Native-quality mobile experiences on iOS and Android using React Native and Flutter, shipped fast.",
    icon: "📱",
  },
  {
    title: "Cloud & DevOps",
    description:
      "Infrastructure as code, CI/CD pipelines, and auto-scaling architectures on AWS, GCP, or Azure.",
    icon: "☁️",
  },
  {
    title: "Performance Engineering",
    description:
      "Deep Lighthouse audits, bundle analysis, and runtime profiling to hit 95+ scores consistently.",
    icon: "⚡",
  },
];

/* ---- Process ----------------------------------------------------- */
export interface ProcessStep {
  step: number;
  title: string;
  description: string;
}

export const processSteps: ProcessStep[] = [
  {
    step: 1,
    title: "Discovery",
    description: "We audit your goals, users, and tech stack to define the scope.",
  },
  {
    step: 2,
    title: "Architecture",
    description: "System design, tech selection, and a detailed roadmap.",
  },
  {
    step: 3,
    title: "Build",
    description: "Agile sprints with weekly demos and transparent progress.",
  },
  {
    step: 4,
    title: "Optimise",
    description: "Performance tuning, accessibility fixes, and QA hardening.",
  },
  {
    step: 5,
    title: "Launch & Support",
    description: "Zero-downtime deployment with ongoing monitoring and iteration.",
  },
];

/* ---- Case Studies ------------------------------------------------ */
export interface CaseStudy {
  name: string;
  tagline: string;
  description: string;
  challenge: string;
  solution: string;
  techStack: string[];
  metrics: {
    loadTimeBefore: string;
    loadTimeAfter: string;
    lighthouseBefore: number;
    lighthouseAfter: number;
    performanceGain: string;
  };
}

export const caseStudies: CaseStudy[] = [
  {
    name: "FinFlow Dashboard",
    tagline: "Fintech · Real-time Analytics",
    description:
      "A Series-B fintech startup was losing enterprise clients due to a sluggish legacy dashboard that took over 4 seconds to load and frequently dropped WebSocket connections during market hours.",
    challenge:
      "The existing jQuery + Rails monolith couldn't handle 50K concurrent users. Page loads exceeded 4s, Lighthouse sat at 52, and the bundle had grown to 2.4 MB uncompressed.",
    solution:
      "We rebuilt the entire platform as a server-rendered Next.js app with incremental static regeneration for reports, real-time streaming via Server-Sent Events, and a design system in Tailwind that cut CSS by 80%. Lazy-loaded heavy charting libraries behind route-based code splitting.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "D3.js", "Redis", "AWS"],
    metrics: {
      loadTimeBefore: "4.2 s",
      loadTimeAfter: "1.1 s",
      lighthouseBefore: 52,
      lighthouseAfter: 98,
      performanceGain: "74%",
    },
  },
  {
    name: "ShopEase E-Commerce",
    tagline: "Retail · Headless Commerce",
    description:
      "A mid-market DTC brand was struggling with a Shopify Liquid theme that scored 41 on Lighthouse. Conversion rates had plateaued at 1.8% and mobile bounce rates exceeded 65%.",
    challenge:
      "The monolithic Shopify theme loaded 1.2 MB of render-blocking scripts, had no image optimisation pipeline, and delivered an unresponsive mobile experience that drove away 40% of mobile shoppers.",
    solution:
      "We migrated to a headless architecture using Next.js + Shopify Storefront API. Implemented edge caching with Vercel, automatic AVIF/WebP image conversion, predictive prefetching for product pages, and a fully responsive mobile-first checkout flow that cut abandonment by 34%.",
    techStack: ["Next.js", "Shopify API", "Vercel Edge", "Tailwind CSS", "Stripe"],
    metrics: {
      loadTimeBefore: "5.8 s",
      loadTimeAfter: "1.4 s",
      lighthouseBefore: 41,
      lighthouseAfter: 96,
      performanceGain: "76%",
    },
  },
  {
    name: "MediConnect Portal",
    tagline: "Healthcare · Patient Platform",
    description:
      "A healthcare SaaS company needed to modernise their patient portal to meet strict HIPAA accessibility standards while reducing operational costs from their aging .NET infrastructure.",
    challenge:
      "The legacy ASP.NET portal failed WCAG 2.1 AA compliance audits, averaged 6.1s load times on mobile, and required a dedicated DevOps team of 3 just to manage deployments and scaling.",
    solution:
      "We architected a JAMstack solution with Next.js static generation for public pages and authenticated SSR for patient data. Implemented end-to-end encryption, WCAG 2.1 AA compliance across all flows, and a CI/CD pipeline that reduced deployment time from 45 minutes to under 3.",
    techStack: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Docker", "Azure"],
    metrics: {
      loadTimeBefore: "6.1 s",
      loadTimeAfter: "1.3 s",
      lighthouseBefore: 38,
      lighthouseAfter: 97,
      performanceGain: "79%",
    },
  },
];

/* ---- Pricing ----------------------------------------------------- */
export interface PricingPlan {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  highlighted: boolean;
  cta: string;
  ctaHref: string;
}

export const pricingPlans: PricingPlan[] = [
  {
    name: "Starter",
    price: "$4,900",
    period: "per project",
    description: "Perfect for MVPs and landing pages.",
    features: [
      "Up to 5 pages",
      "Responsive design",
      "Basic SEO setup",
      "1 round of revisions",
      "Lighthouse ≥ 90",
    ],
    highlighted: false,
    cta: "Get Started",
    ctaHref: "https://calendly.com/iffas/discovery",
  },
  {
    name: "Growth",
    price: "$12,500",
    period: "per project",
    description: "For scaling products that need performance and polish.",
    features: [
      "Up to 15 pages / screens",
      "Custom design system",
      "Advanced SEO & analytics",
      "Performance engineering",
      "3 rounds of revisions",
      "Lighthouse ≥ 95",
    ],
    highlighted: true,
    cta: "Book a Call",
    ctaHref: "https://calendly.com/iffas/discovery",
  },
  {
    name: "Scale",
    price: "Custom",
    period: "retainer / project",
    description: "Enterprise-grade builds with dedicated engineering support.",
    features: [
      "Unlimited pages / features",
      "Architecture & DevOps",
      "CI/CD & monitoring",
      "Dedicated team",
      "Priority support",
      "SLA-backed delivery",
    ],
    highlighted: false,
    cta: "Contact Us",
    ctaHref: "mailto:hello@iffas.dev",
  },
];

/* ---- Differentiators --------------------------------------------- */
export const differentiators: string[] = [
  "Lighthouse 95+ on every delivery — guaranteed.",
  "Static-first architecture for instant page loads.",
  "Accessibility baked in, not bolted on (WCAG 2.1 AA).",
  "Transparent weekly sprints with live staging links.",
  "No vendor lock-in — you own every line of code.",
  "Post-launch performance monitoring included.",
];

/* ---- Navigation -------------------------------------------------- */
export interface NavLink {
  label: string;
  href: string;
}

export const navLinks: NavLink[] = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

/** Primary CTA link — swap with your Calendly or scheduling URL */
export const bookCallHref = "https://calendly.com/iffas/discovery";
