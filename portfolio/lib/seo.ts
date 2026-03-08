import type { Metadata } from "next";

/**
 * SEO configuration interface.
 * Pass these props to generateSeoMetadata() to produce Next.js Metadata.
 */
export interface SeoProps {
  title?: string;
  description?: string;
  ogImage?: string;
  url?: string;
  siteName?: string;
}

const defaults: Required<SeoProps> = {
  title: "IFFAS — Digital Product Engineering Studio",
  description:
    "We engineer high-performance digital products that scale. Web apps, mobile platforms, and cloud-native systems built for speed, reliability, and growth.",
  ogImage: "https://yourdomain.com/images/og-default.jpg",
  url: "https://yourdomain.com",
  siteName: "IFFAS",
};

/**
 * Generates a Next.js Metadata object with SEO & Open Graph tags.
 * Usage: export const metadata = generateSeoMetadata({ title: "..." });
 */
export function generateSeoMetadata(props: SeoProps = {}): Metadata {
  const seo = { ...defaults, ...props };

  return {
    title: seo.title,
    description: seo.description,
    metadataBase: new URL(seo.url),
    openGraph: {
      title: seo.title,
      description: seo.description,
      url: seo.url,
      siteName: seo.siteName,
      images: [
        {
          url: seo.ogImage,
          width: 1200,
          height: 630,
          alt: seo.title,
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: seo.title,
      description: seo.description,
      images: [seo.ogImage],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}
