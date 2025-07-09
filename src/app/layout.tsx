import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Toaster } from "@/components/ui/sonner";
import NextTopLoader from 'nextjs-toploader';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const satoshi = localFont({
  src: [
    {
      path: "../../public/fonts/Satoshi-Medium.otf",
      weight: "100 900",
      style: "normal",
    },
  ],
  variable: "--font-satoshi",
});

export const metadata: Metadata = {
  title: "Ejegis - Aviation & Industrial Safety Solutions",
  description: "EJEGIS LTD - Specialized aviation and industrial safety consultation services in Nigeria. Expert guidance for helipad infrastructure and safety compliance.",
  keywords: "aviation safety, industrial safety, helipad infrastructure, safety compliance, aviation consulting, industrial consulting, safety standards, Nigeria safety services",
  authors: [{ name: "EJEGIS LTD" }],
  creator: "EJEGIS LTD",
  publisher: "EJEGIS LTD",
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ejegis.com",
    title: "Ejegis - Aviation & Industrial Safety Solutions",
    description: "EJEGIS LTD - Specialized aviation and industrial safety consultation services in Nigeria. Expert guidance for helipad infrastructure and safety compliance.",
    siteName: "EJEGIS LTD",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ejegis - Aviation & Industrial Safety Solutions",
    description: "EJEGIS LTD - Specialized aviation and industrial safety consultation services in Nigeria. Expert guidance for helipad infrastructure and safety compliance.",
    creator: "@ejegis",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${satoshi.variable} antialiased satoshi`}
      >
        <NextTopLoader color="#f54a00" />
        <Navigation />
        {children}
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
