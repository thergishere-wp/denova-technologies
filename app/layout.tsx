import type { Metadata } from "next";
import { IBM_Plex_Sans, IBM_Plex_Sans_Condensed } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const ibmPlexSans = IBM_Plex_Sans({
  variable: "--font-ibm-plex-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const ibmPlexSansCondensed = IBM_Plex_Sans_Condensed({
  variable: "--font-ibm-plex-condensed",
  subsets: ["latin"],
  weight: ["600", "700"],
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://denova-technologies.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Denova Technologies Ltd | Industrial Machinery Solutions — Sri Lanka & Bangladesh",
    template: "%s | Denova Technologies Ltd",
  },
  description:
    "Authorized reseller and distributor of industrial machinery and software for apparel manufacturers in Sri Lanka and Bangladesh. 25+ years expertise. StyleCAD, automatic cutting systems, fabric inspection, smart factory solutions.",
  keywords: [
    "industrial machinery Sri Lanka",
    "fabric cutting machine",
    "StyleCAD",
    "fabric spreading machine",
    "garment machinery Bangladesh",
    "automatic cutting system",
    "fabric inspection machine",
    "MU Technology",
    "apparel manufacturing equipment",
    "Denova Technologies",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Denova Technologies Ltd",
    title: "Denova Technologies Ltd | Industrial Machinery Solutions",
    description:
      "Authorized reseller and distributor of industrial machinery and software for apparel manufacturers in Sri Lanka and Bangladesh.",
    images: [
      {
        url: "/images/hero/hero-factory-floor.jpg",
        width: 1200,
        height: 630,
        alt: "Denova Technologies — Industrial Machinery Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Denova Technologies Ltd | Industrial Machinery Solutions",
    description:
      "Authorized reseller and distributor of industrial machinery for apparel manufacturers in Sri Lanka and Bangladesh.",
    images: ["/images/hero/hero-factory-floor.jpg"],
  },
  alternates: {
    canonical: siteUrl,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Denova Technologies Ltd",
  description:
    "Authorized reseller of industrial machinery for apparel manufacturers in Sri Lanka and Bangladesh",
  url: "https://denovatec.com",
  telephone: ["+64275555880", "+94777395884", "+8801817079822"],
  email: "sales@DeNovatec.com",
  areaServed: ["Sri Lanka", "Bangladesh"],
  foundingLocation: "New Zealand",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${ibmPlexSans.variable} ${ibmPlexSansCondensed.variable}`}
      style={{ fontFamily: "var(--font-ibm-plex-sans), system-ui, sans-serif" }}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
