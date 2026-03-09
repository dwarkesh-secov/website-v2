import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SITE_URL = "https://secov.com";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Secov Compliance Automation | SOC 2, ISO 27001, HIPAA",
    template: "%s | Secov",
  },
  description:
    "Achieve SOC 2, ISO 27001, HIPAA & PCI-DSS faster with Secov. 5+ years expertise, 7.3K controls tested, 10K+ data users. Stay audit-ready with automation.",
  keywords: [
    "compliance automation platform",
    "SOC 2 compliance automation",
    "ISO 27001 certification",
    "HIPAA compliance software",
    "GDPR compliance tools",
    "PCI-DSS compliance",
    "security risk management",
    "compliance monitoring",
    "automated security assessments",
    "DevSecOps compliance",
    "continuous compliance monitoring",
    "audit automation",
    "security compliance platform",
    "vendor risk management",
    "information security management",
    "Drata alternative",
    "Secureframe alternative",
    "Vanta alternative",
    "compliance management software",
    "cloud security compliance",
    "compliance evidence collection",
    "GRC platform",
    "governance risk compliance",
  ],
  authors: [{ name: "Secov Team" }],
  creator: "Secov",
  publisher: "Secov",
  category: "technology",
  classification: "Business",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "Secov",
    title: "Secov Compliance Automation | SOC 2, ISO 27001, HIPAA",
    description:
      "Achieve SOC 2, ISO 27001, HIPAA & PCI-DSS faster with Secov. 5+ years expertise, 7.3K controls tested, 10K+ data users. Stay audit-ready with automation.",
    images: [
      {
        url: `${SITE_URL}/og-home.jpg`,
        width: 1200,
        height: 630,
        alt: "Secov - Automate Compliance & Security Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@secov",
    creator: "@secov",
    title: "Secov Compliance Automation | SOC 2, ISO 27001, HIPAA",
    description:
      "Achieve SOC 2, ISO 27001, HIPAA & PCI-DSS faster with Secov. Stay audit-ready with automation.",
    images: [`${SITE_URL}/og-home.jpg`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  other: {
    "application-name": "Secov",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-title": "Secov",
    "format-detection": "telephone=no",
    "mobile-web-app-capable": "yes",
    "google-site-verification": "yAW6THYguDsweAEnRAUTR0ypXqfGP1a33tj22Co0TUc",
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
    "Secov automates security compliance for SOC 2, ISO 27001, HIPAA, GDPR, and PCI-DSS.",
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

const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Secov Compliance Platform",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  url: SITE_URL,
  description:
    "All-in-one compliance automation platform for SOC 2, ISO 27001, HIPAA, GDPR, and PCI-DSS.",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
    description: "Free demo available",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    ratingCount: "150",
    bestRating: "5",
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Secov",
  url: SITE_URL,
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${SITE_URL}/search?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased text-slate-900 bg-white`}
      >
        <script
          type="application/ld+json"
          // biome-ignore lint/security/noDangerouslySetInnerHtml: structured data
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          // biome-ignore lint/security/noDangerouslySetInnerHtml: structured data
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(softwareApplicationSchema),
          }}
        />
        <script
          type="application/ld+json"
          // biome-ignore lint/security/noDangerouslySetInnerHtml: structured data
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        {children}
      </body>
    </html>
  );
}
