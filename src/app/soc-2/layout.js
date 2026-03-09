const SITE_URL = "https://secov.com";

export const metadata = {
  title: "SOC 2 Compliance Services | Get Audit-Ready Faster",
  description:
    "Get audit-ready in weeks with our SOC 2 compliance services. Strengthen security, accelerate sales, and gain a competitive edge with Secov's automated SOC 2 platform.",
  keywords: [
    "SOC 2 compliance",
    "SOC 2 automation",
    "SOC 2 Type I",
    "SOC 2 Type II",
    "SOC 2 certification",
    "automated SOC 2",
    "SOC 2 audit preparation",
    "continuous SOC 2 monitoring",
    "SOC 2 Type II audit",
    "SOC 2 controls",
    "trust service criteria",
    "security compliance",
    "compliance automation",
    "audit-ready compliance",
    "GRC platform",
    "governance risk compliance",
  ],
  alternates: {
    canonical: "/soc-2",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: `${SITE_URL}/soc-2`,
    siteName: "Secov",
    title: "SOC 2 Compliance Services | Get Audit-Ready Faster",
    description:
      "Get audit-ready in weeks with our SOC 2 compliance services. Strengthen security, accelerate sales, and gain a competitive edge in today's market.",
    images: [
      {
        url: `${SITE_URL}/og-soc-2.jpg`,
        width: 1200,
        height: 630,
        alt: "SOC 2 Compliance Automation Platform — Secov",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@secov",
    creator: "@secov",
    title: "SOC 2 Compliance Services | Get Audit-Ready Faster",
    description:
      "Get audit-ready in weeks with Secov's SOC 2 compliance services. Strengthen security and gain a competitive edge.",
    images: [`${SITE_URL}/og-soc-2.jpg`],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: SITE_URL,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "SOC 2 Compliance",
      item: `${SITE_URL}/soc-2`,
    },
  ],
};

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${SITE_URL}/soc-2#webpage`,
  url: `${SITE_URL}/soc-2`,
  name: "SOC 2 Compliance Services | Get Audit-Ready Faster",
  description:
    "Get audit-ready in weeks with our SOC 2 compliance services. Strengthen security, accelerate sales, and gain a competitive edge in today's market.",
  isPartOf: { "@id": `${SITE_URL}/#website` },
  breadcrumb: { "@id": `${SITE_URL}/soc-2#breadcrumb` },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is SOC 2 compliance?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "SOC 2 (System and Organization Controls 2) is an auditing standard developed by the AICPA that evaluates a service organization's controls related to security, availability, processing integrity, confidentiality, and privacy of customer data.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between SOC 2 Type I and Type II?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "SOC 2 Type I is a point-in-time assessment that verifies controls are designed appropriately. SOC 2 Type II covers a period of time (typically 6–12 months) and verifies that controls are operating effectively over time.",
      },
    },
    {
      "@type": "Question",
      name: "How long does it take to get SOC 2 certified?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "With Secov's automation platform, companies can become audit-ready in as little as 21 days. The full SOC 2 Type II process typically takes 6–12 months depending on your organization's readiness.",
      },
    },
    {
      "@type": "Question",
      name: "How much does SOC 2 compliance cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "SOC 2 compliance costs vary based on organization size and scope. With Secov, automation significantly reduces the cost by eliminating manual evidence collection and reducing audit preparation time. Book a demo to get a tailored quote.",
      },
    },
  ],
};

export default function Soc2Layout({ children }) {
  return (
    <>
      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: structured data
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: structured data
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: structured data
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {children}
    </>
  );
}
