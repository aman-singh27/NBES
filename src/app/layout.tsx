import type { Metadata } from "next";
import { Barlow_Condensed, DM_Sans } from "next/font/google";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { OrganizationSchema } from "@/components/seo/JsonLd";
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
      "New Bharat Engineer Services | Industrial Electrical, Earthing & Security Solutions India",
    template: "%s | NBES — New Bharat Engineer Services",
  },
  metadataBase: new URL("https://nbes.vercel.app"),
  alternates: {
    canonical: "https://nbes.vercel.app",
  },
  description:
    "NBES delivers certified electrical works, IS 3043 earthing systems, CCTV & access control security, and ITI-certified technical manpower for industrial, commercial, and government projects across India.",
  keywords: [
    "electrical contractor India",
    "industrial earthing solutions",
    "IS 3043 chemical earthing",
    "HT LT panel installation",
    "technical manpower India",
    "CCTV security installation",
    "electrical works Maharashtra",
    "New Bharat Engineer Services",
    "NBES",
  ],
  authors: [{ name: "New Bharat Engineer Services" }],
  creator: "NBES",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://nbes.vercel.app",
    siteName: "New Bharat Engineer Services",
    title:
      "New Bharat Engineer Services | Electrical, Earthing & Security Solutions India",
    description:
      "Certified electrical works, IS 3043 earthing, integrated security systems, and technical manpower for industrial and commercial projects across India.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "NBES — New Bharat Engineer Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "New Bharat Engineer Services | Electrical & Earthing Solutions India",
    description:
      "Industrial electrical works, IS 3043 earthing, CCTV security, and certified manpower across India.",
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
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
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
