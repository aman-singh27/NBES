import type { Metadata } from "next";
import { Barlow_Condensed, DM_Sans } from "next/font/google";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { OrganizationSchema } from "@/components/seo/JsonLd";
import { SITE_URL } from "@/lib/constants";
import "./globals.css";

const displayFont = Barlow_Condensed({
  weight: ["700", "800"],
  subsets: ["latin"],
  variable: "--font-display",
});

const bodyFont = DM_Sans({
  weight: ["300", "400", "500"],
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: {
    default:
      "New Bharat Engineering Services | Electrical & Facility Management Delhi-NCR",
    template: "%s | NBES — New Bharat Engineering Services",
  },
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: SITE_URL,
  },
  description:
    "NBES (New Bharat Engineering Services) delivers electrical, plumbing, civil, CCTV, earthing, carpentry, and interior facility services for corporate offices across Delhi-NCR. Trusted by HCL, Nestle, Deloitte, and more since 2003.",
  keywords: [
    "electrical services Delhi NCR",
    "facility management Gurgaon",
    "corporate electrical contractor Delhi",
    "CCTV installation Gurgaon",
    "earthing services Delhi",
    "plumbing services Noida",
    "facility services Gurgaon",
    "New Bharat Engineering Services",
    "NBES",
    "electrical contractor Gurgaon",
  ],
  authors: [{ name: "New Bharat Engineering Services" }],
  creator: "NBES",
  openGraph: {
    type: "website",
    locale: "en_IN",
    alternateLocale: ["en_US"],
    url: SITE_URL,
    siteName: "New Bharat Engineering Services",
    title:
      "New Bharat Engineering Services | Facility & Electrical Services Delhi-NCR",
    description:
      "NBES delivers electrical and facility services for corporate offices across Delhi-NCR, including plumbing, civil works, CCTV, earthing, carpentry, and interiors.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "NBES — New Bharat Engineering Services",
      },
    ],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "New Bharat Engineering Services | Electrical & Facility Services Delhi-NCR",
    description:
      "Electrical, plumbing, civil, CCTV, earthing, carpentry, and interior facility services for Delhi-NCR corporate offices.",
    images: ["/og-image.jpg"],
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${displayFont.variable} ${bodyFont.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <meta name="theme-color" content="#0047CC" />
        <meta name="color-scheme" content="light" />
      </head>
      <body className="m-0 bg-white font-body text-black antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-3 focus:top-3 focus:z-[100] focus:rounded-[3px] focus:bg-white focus:px-3 focus:py-2 focus:text-sm focus:text-black"
        >
          Skip to content
        </a>
        <Navbar />
        <OrganizationSchema />
        <main className="min-h-screen pt-18" id="main-content">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
