import "@/styles/globals.css";
import type { ReactNode } from "react";
import { generateSeoMetadata } from "@/lib/seo";
import { ThemeProvider } from "@/components/ThemeProvider";

/* Generate root metadata — Next.js will inject <title>, og tags, etc. */
export const metadata = generateSeoMetadata();

/**
 * Root layout — server component shell.
 * ThemeProvider (client) wraps children to manage light/dark class on <html>.
 * The `suppressHydrationWarning` on <html> prevents mismatch from
 * the class being set client-side before hydration.
 */
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="dark scroll-smooth" suppressHydrationWarning>
      <head>
        {/* Inline script to prevent FOUC — reads theme before paint */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem("iffas-theme");if(t==="light"||t==="dark"){document.documentElement.className=t+" scroll-smooth"}else if(window.matchMedia("(prefers-color-scheme:light)").matches){document.documentElement.className="light scroll-smooth"}}catch(e){}})()`,
          }}
        />
        <link
          rel="preload"
          href="/fonts/Inter-Regular.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/Inter-Bold.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="font-sans antialiased transition-colors duration-300">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
