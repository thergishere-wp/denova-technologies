import type { Metadata } from "next";
import { IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const ibmPlexSans = IBM_Plex_Sans({
  variable: "--font-ibm-plex-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "DeNova Technologies Ltd | Advanced Manufacturing Solutions",
  description:
    "Authorized distributor of DOCAD, Özer Makina, JINGWEI, C-TEX, MU Big Data and KASU — advanced machinery and software for apparel manufacturers in Sri Lanka & Bangladesh.",
  keywords:
    "DeNova Technologies, apparel machinery, CAD software, cutting systems, Sri Lanka, Bangladesh, manufacturing",
  openGraph: {
    title: "DeNova Technologies Ltd | Advanced Manufacturing Solutions",
    description:
      "Authorized distributor of DOCAD, Özer Makina, JINGWEI, C-TEX, MU Big Data and KASU — advanced machinery and software for apparel manufacturers.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${ibmPlexSans.variable} ${ibmPlexMono.variable} h-full`}
    >
      <body className="min-h-full flex flex-col antialiased">{children}</body>
    </html>
  );
}
