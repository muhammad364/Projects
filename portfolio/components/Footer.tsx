import type { NavLink } from "@/lib/data";

/**
 * Footer — Professional responsive layout with theme-aware designs.
 * Dark theme: Gradient with blue accents
 * Light theme: Clean white background with subtle borders
 * Server component.
 */

export interface FooterProps {
  links: NavLink[];
  bookCallHref: string;
}

export function Footer({ links, bookCallHref }: FooterProps) {
  return (
    <footer className="relative overflow-hidden" role="contentinfo">
      {/* Dark Theme Background */}
      <div className="absolute inset-0 hidden dark:block dark:bg-gradient-to-b dark:from-slate-900 dark:via-slate-950 dark:to-slate-900 pointer-events-none" />
      <div className="absolute inset-0 hidden dark:block dark:bg-blue-500/5 pointer-events-none" />
      <div className="absolute top-0 right-0 w-96 h-96 hidden dark:block dark:bg-blue-500/10 rounded-full blur-3xl -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 hidden dark:block dark:bg-blue-500/5 rounded-full blur-3xl translate-y-1/2 pointer-events-none" />

      {/* Light Theme Background — Professional Dark Footer */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-800 via-slate-900 to-slate-950 dark:hidden pointer-events-none" />
      <div className="absolute top-0 right-0 w-96 h-96 dark:hidden bg-blue-500/5 rounded-full blur-3xl -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 dark:hidden bg-slate-700/20 rounded-full blur-3xl translate-y-1/2 pointer-events-none" />
      
      <div className="relative z-10">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <div className="grid gap-12 md:grid-cols-3">
            {/* Col 1: Brand with Accent */}
            <div className="group">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-1 h-8 dark:bg-gradient-to-b dark:from-blue-400 dark:to-blue-600 bg-gradient-to-b from-blue-400 to-blue-500 rounded-full transition-all group-hover:h-12" />
                <span className="text-2xl font-bold dark:bg-gradient-to-r dark:from-blue-400 dark:via-white dark:to-blue-300 dark:bg-clip-text dark:text-transparent text-white">
                  IFFAS
                </span>
              </div>
              <p className="mt-4 text-sm leading-relaxed dark:text-slate-300 text-slate-200 max-w-xs">
                Digital product engineering studio. We build high-performance
                software that scales with purpose and precision.
              </p>
              {/* Social or accent element */}
              <div className="mt-6 flex gap-4">
                <div className="w-2 h-2 dark:bg-blue-400 bg-blue-400 rounded-full" />
                <div className="w-2 h-2 dark:bg-blue-500 bg-blue-300 rounded-full opacity-60" />
                <div className="w-2 h-2 dark:bg-blue-600 bg-blue-500 rounded-full opacity-40" />
              </div>
            </div>

            {/* Col 2: Navigation with Accent Links */}
            <div>
              <h4 className="text-sm font-semibold dark:text-blue-300 text-blue-300 uppercase tracking-widest mb-6 flex items-center gap-2">
                <span className="w-1.5 h-1.5 dark:bg-blue-400 bg-blue-400 rounded-full" />
                Navigation
              </h4>
              <ul className="space-y-3" role="list">
                {links.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-sm dark:text-slate-400 dark:hover:text-blue-300 text-slate-300 hover:text-blue-200 transition-all duration-300 inline-flex items-center gap-2 group/link"
                    >
                      <span className="w-1 h-1 dark:bg-blue-500 bg-blue-400 rounded-full opacity-0 group-hover/link:opacity-100 transition-opacity" />
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 3: Contact with Action Buttons */}
            <div>
              <h4 className="text-sm font-semibold dark:text-blue-300 text-blue-300 uppercase tracking-widest mb-6 flex items-center gap-2">
                <span className="w-1.5 h-1.5 dark:bg-blue-400 bg-blue-400 rounded-full" />
                Get in Touch
              </h4>
              <ul className="space-y-3" role="list">
                <li>
                  <a
                    href={bookCallHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium dark:text-slate-300 dark:hover:text-white dark:px-4 dark:py-2 dark:rounded-lg dark:bg-blue-600/10 dark:hover:bg-blue-600/20 dark:border dark:border-blue-500/20 dark:hover:border-blue-400/50 px-4 py-2 rounded-lg bg-blue-500/15 hover:bg-blue-500/25 border border-blue-400/40 hover:border-blue-300/60 text-white transition-all duration-300 inline-block"
                  >
                    Book a Call
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:hello@iffas.dev"
                    className="text-sm dark:text-slate-400 dark:hover:text-blue-300 text-slate-300 hover:text-blue-200 transition-all duration-300 inline-flex items-center gap-2 group/link"
                  >
                    <span className="w-1 h-1 dark:bg-blue-500 bg-blue-400 rounded-full opacity-0 group-hover/link:opacity-100 transition-opacity" />
                    hello@iffas.dev
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Divider with Accent */}
          <div className="mt-16 pt-12 dark:border-slate-800/50 border-slate-700/50">
            <div className="border-t dark:border-slate-800/50 border-slate-700/30 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              {/* Copyright */}
              <p className="text-xs dark:text-slate-500 text-slate-400 pt-8">
                &copy; 2026 IFFAS. All rights reserved. | Engineered with precision.
              </p>

              {/* Footer Accent Badges */}
              <div className="flex items-center gap-4 pt-8">
                <span className="text-xs dark:text-slate-600 text-slate-400">Designed for Performance</span>
                <div className="w-8 h-px dark:bg-gradient-to-r dark:from-blue-500/0 dark:via-blue-500/50 dark:to-blue-500/0 bg-gradient-to-r from-blue-500/0 via-blue-400/40 to-blue-500/0" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
