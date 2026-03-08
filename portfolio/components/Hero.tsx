"use client";

import { motion } from "framer-motion";

/**
 * Hero — full-viewport intro section with fade-up animation.
 * Uses "use client" because Framer Motion requires browser APIs.
 * Animation: simple fade-up over 0.6 s on mount. No scroll-jacking.
 */

export interface HeroProps {
  bookCallHref: string;
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
  }),
};

export function Hero({ bookCallHref }: HeroProps) {
  return (
    <section
      className="min-h-screen flex items-center justify-center relative"
      aria-label="Hero"
    >
      <div className="max-w-6xl mx-auto px-6 text-center flex flex-col items-center gap-6 pt-[72px]">
        {/* Optional badge */}
        <motion.span
          className="inline-block rounded-full border border-themed-border px-4 py-1.5 text-xs font-medium text-themed-text-secondary tracking-wide uppercase bg-themed-surface"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0}
        >
          Digital Product Engineering Studio
        </motion.span>

        {/* H1 */}
        <motion.h1
          className="text-5xl md:text-6xl font-bold leading-tight tracking-tight text-themed-text max-w-4xl"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={1}
        >
          Engineering High-Performance Digital Products That Scale
        </motion.h1>

        {/* Subheading */}
        <motion.p
          className="text-base md:text-lg text-themed-text-secondary max-w-2xl"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={2}
        >
          We design, build, and optimise web and mobile experiences that load
          fast, convert better, and grow with your business.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 mt-4"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={3}
        >
          <motion.a
            href={bookCallHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-lg bg-accent px-8 py-3.5 text-base font-medium text-white hover:bg-accent-hover transition-colors shadow-lg shadow-accent/20"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            Book a Discovery Call
          </motion.a>
          <motion.a
            href="#work"
            className="inline-flex items-center justify-center rounded-lg border border-themed-border px-8 py-3.5 text-base font-medium text-themed-text-secondary hover:text-themed-text hover:border-themed-border-hover transition-colors"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            View Our Work
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
