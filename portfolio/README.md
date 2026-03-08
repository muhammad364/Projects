# IFFAS — Digital Product Engineering Studio

Static landing site built with **Next.js (App Router)**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

---

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Run development server
npm run dev
# → http://localhost:3000

# 3. Build static export
npm run build
# → Output in /out
```

## Self-Hosting Inter Fonts

The project expects self-hosted Inter `.woff2` files in `public/fonts/`:

| File                    | Weight |
|-------------------------|--------|
| `Inter-Regular.woff2`   | 400    |
| `Inter-Medium.woff2`    | 500    |
| `Inter-SemiBold.woff2`  | 600    |
| `Inter-Bold.woff2`      | 700    |

Download from [rsms.me/inter](https://rsms.me/inter/) or [google-webfonts-helper](https://gwfh.mranftl.com/fonts/inter).

Until the font files are added, the site falls back to `system-ui, sans-serif`.

---

## Project Structure

```
app/
  layout.tsx          # Root layout, font preloads, SEO metadata
  page.tsx            # Composes all sections
components/
  Navbar.tsx          # Sticky nav, mobile menu (use client)
  Hero.tsx            # Full-viewport hero with Framer Motion fade-up
  Services.tsx        # Service cards grid
  Differentiators.tsx # 2-col: code mock + bullets
  Process.tsx         # 5-step workflow
  CaseStudies.tsx     # Project cards with metrics
  Pricing.tsx         # 3-tier pricing
  CTA.tsx             # Final call-to-action
  Footer.tsx          # 3-column footer
  SectionWrapper.tsx  # Shared section padding/container
lib/
  seo.ts              # Reusable SEO metadata generator
  data.ts             # All editable content (services, pricing, etc.)
styles/
  globals.css         # @font-face + Tailwind directives
public/
  fonts/              # Self-hosted Inter .woff2 files
  images/             # Static images & SVGs
  robots.txt          # Crawl rules
  sitemap.xml         # Static sitemap
```

---

## Deployment (Static Host / cPanel)

1. Run `npm run build` — this produces the `/out` directory.
2. Upload the **contents** of `/out` to your web host's `public_html` (or document root).
3. Ensure your server serves `index.html` as the default document.

### Updating Content

All copy, pricing, services, and case-study data lives in [`lib/data.ts`](lib/data.ts).  
Edit that file and rebuild → deploy.

### Updating CTA Links

The primary CTA URL (`bookCallHref`) is defined in `lib/data.ts`.  
Change it to your Calendly, Cal.com, or mailto link.

---

## Testing

### Unit Tests (Jest + React Testing Library)

```bash
npm test
```

### E2E Tests (Playwright)

```bash
# Install browsers (first time)
npx playwright install --with-deps chromium

# Build then run E2E
npm run build
npm run test:e2e
```

### Lighthouse (Local)

```bash
npm run build
npx serve out -l 8080
# In another terminal:
npx @lhci/cli autorun --config=lighthouserc.json
```

Target: **Performance ≥ 95**, Accessibility ≥ 90, Best Practices ≥ 90, SEO ≥ 90.

---

## CI / GitHub Actions

The included `.github/workflows/ci.yml` runs:

1. Lint (`next lint`)
2. Unit tests
3. Static build
4. Lighthouse CI check (≥ 95 performance)

---

## Tech Decisions

| Decision | Rationale |
|----------|-----------|
| Static export (`output: "export"`) | No server required; deploy anywhere |
| Self-hosted Inter | Avoids Google Fonts CDN latency; preloaded for fast FCP |
| Framer Motion (minimal) | Only fade-up + button micro-interactions; <5 KB gzipped |
| Server components by default | Keeps JS bundle small; only Navbar + Hero need client JS |
| All content in `data.ts` | Single source of truth; easy for juniors to update |

---

## License

© 2026 IFFAS. All rights reserved.
