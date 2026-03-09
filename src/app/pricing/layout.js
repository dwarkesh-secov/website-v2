const SITE_URL = "https://secov.com";

export const metadata = {
  title: "Pricing | Simple, Transparent Compliance Plans",
  description:
    "Secov pricing plans for every stage — from your first SOC 2 Type I audit to enterprise-wide multi-framework compliance. Get audit-ready faster with transparent, scalable pricing.",
  keywords: [
    "Secov pricing",
    "SOC 2 compliance pricing",
    "compliance automation cost",
    "SOC 2 audit cost",
    "compliance platform pricing",
    "Vanta alternative pricing",
    "Drata alternative pricing",
    "Secureframe alternative pricing",
    "compliance software cost",
    "GRC platform pricing",
    "audit automation pricing",
  ],
  alternates: {
    canonical: "/pricing",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: `${SITE_URL}/pricing`,
    siteName: "Secov",
    title: "Pricing | Simple, Transparent Compliance Plans — Secov",
    description:
      "Secov pricing plans for every stage — from your first SOC 2 Type I audit to enterprise-wide multi-framework compliance.",
    images: [
      {
        url: `${SITE_URL}/og-home.jpg`,
        width: 1200,
        height: 630,
        alt: "Secov Pricing — Compliance Automation Plans",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@secov",
    creator: "@secov",
    title: "Pricing | Simple, Transparent Compliance Plans — Secov",
    description:
      "Secov pricing plans for every stage of your compliance journey.",
    images: [`${SITE_URL}/og-home.jpg`],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
    {
      "@type": "ListItem",
      position: 2,
      name: "Pricing",
      item: `${SITE_URL}/pricing`,
    },
  ],
};

export default function PricingLayout({ children }) {
  return (
    <>
      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: structured data
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {children}
    </>
  );
}
