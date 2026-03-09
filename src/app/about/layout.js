const SITE_URL = "https://secov.com";

export const metadata = {
  title: "About Secov | Compliance Automation for SOC 2, ISO & HIPAA",
  description:
    "Secov helps modern businesses stay audit-ready. Automate SOC 2, ISO 27001 & HIPAA compliance with deep integrations, continuous monitoring, and expert guidance.",
  keywords: [
    "about Secov",
    "compliance automation company",
    "security compliance team",
    "SOC 2 compliance",
    "ISO 27001 certification",
    "HIPAA compliance",
    "compliance automation",
    "GRC platform",
    "security compliance platform",
    "audit automation company",
  ],
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: `${SITE_URL}/about`,
    siteName: "Secov",
    title: "About Secov | Compliance Automation for SOC 2, ISO & HIPAA",
    description:
      "Secov helps modern businesses stay audit-ready. Automate SOC 2, ISO 27001 & HIPAA compliance with integrations and expert guidance.",
    images: [
      {
        url: `${SITE_URL}/og-home.jpg`,
        width: 1200,
        height: 630,
        alt: "About Secov — Compliance Automation Company",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@secov",
    creator: "@secov",
    title: "About Secov | Compliance Automation for SOC 2, ISO & HIPAA",
    description:
      "Secov helps modern businesses stay audit-ready. Automate SOC 2, ISO 27001 & HIPAA compliance.",
    images: [`${SITE_URL}/og-home.jpg`],
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Secov",
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  foundingDate: "2020",
  description:
    "Secov automates security compliance for SOC 2, ISO 27001, HIPAA, GDPR, and PCI-DSS, helping modern businesses stay continuously audit-ready.",
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "Sales",
    email: "sales@secov.com",
  },
  sameAs: [
    "https://twitter.com/secov",
    "https://linkedin.com/company/secov",
    "https://github.com/secov",
  ],
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
      name: "About Us",
      item: `${SITE_URL}/about`,
    },
  ],
};

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${SITE_URL}/about#webpage`,
  url: `${SITE_URL}/about`,
  name: "About Secov | Compliance Automation for SOC 2, ISO & HIPAA",
  description:
    "Secov helps modern businesses stay audit-ready. Automate SOC 2, ISO 27001 & HIPAA compliance with integrations and expert guidance.",
  isPartOf: { "@id": `${SITE_URL}/#website` },
  breadcrumb: { "@id": `${SITE_URL}/about#breadcrumb` },
};

export default function AboutLayout({ children }) {
  return (
    <>
      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: structured data
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
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
      {children}
    </>
  );
}
