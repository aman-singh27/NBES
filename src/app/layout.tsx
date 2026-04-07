import type { Metadata } from "next";
import { Barlow_Condensed, DM_Sans } from "next/font/google";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
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
    default: "NBES",
    template: "NBES | %s",
  },
  metadataBase: new URL("https://nbes.in"),
  alternates: { canonical: "/" },
  description:
    "NBES delivers certified electrical works, precision earthing, integrated security, and technical manpower solutions across India.",
  openGraph: {
    type: "website",
    siteName: "NBES",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "NBES - Electrical & Technical Solutions",
      },
    ],
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${displayFont.variable} ${bodyFont.variable}`}>
      <body className="m-0 bg-white font-body text-black antialiased">
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:left-3 focus:top-3 focus:z-[100] focus:rounded-[3px] focus:bg-white focus:px-3 focus:py-2 focus:text-sm focus:text-black">
          Skip to content
        </a>
        <Navbar />
        <main className="min-h-screen pt-18" id="main-content">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
