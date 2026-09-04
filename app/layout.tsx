// src/app/layout.tsx
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

// 1. Configure Heading Font
const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["600", "700", "800"],
});

// 2. Configure Body Font
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Grand Africa Portfolio | Innovative Digital Solutions',
  description: 'Explore Grand Africa Portfolio - showcasing cutting-edge software development, enterprise applications, and modern web solutions across Africa.',
  metadataBase: new URL('https://yourdomain.com'),
  openGraph: {
    title: 'Grand Africa Portfolio | Innovative Digital Solutions',
    description: 'Explore Grand Africa Portfolio - showcasing cutting-edge software development, enterprise applications, and modern web solutions across Africa.',
    url: 'https://yourdomain.com',
    siteName: 'Grand Africa Portfolio',
    images: [
      {
        url: '/og-image.png', // Placed in public/og-image.png
        width: 1200,
        height: 630,
        alt: 'Grand Africa Portfolio Preview Banner',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Grand Africa Portfolio | Innovative Digital Solutions',
    description: 'Explore Grand Africa Portfolio - showcasing cutting-edge software development, enterprise applications, and modern web solutions across Africa.',
    images: ['/og-image.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${plusJakarta.variable} ${inter.variable}`}>
      <body className="font-sans bg-background text-foreground antialiased">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
