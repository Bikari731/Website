import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HeaderContacts from "./components/HeaderContacts";
import LoadingWrapper from "./components/LoadingWrapper";
import FloatingContactButton from "./components/FloatingContactButton";
import GoogleReviews from "./components/GoogleReview";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.amerandtasheel.com'), // ✅ Your domain
  title: {
    default: 'Al Buhari - UAE Government & Documents Clearing Experts',
    template: '%s | Al Buhari Services',
  },
  description:
    'Al Buhari offers comprehensive UAE government services including visa processing, Emirates ID, business setup, Tasheel, attestation, legal translation, and more. Your trusted documents clearing center.',
  keywords: [
    'al buhari',
    'documents clearing',
    'amer services',
    'tasheel services',
    'uae visa services',
    'business setup dubai',
    'golden visa',
    'family visa',
    'golden visa UAE',
    'family visa UAE',
    'certificate attestation',
    'legal translation',
    'emirates id',
    'medical services',
    'rta services',
  ],
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.amerandtasheel.com',
    siteName: 'Al Buhari Services',
    title: 'Al Buhari - UAE Government & Documents Clearing Experts',
    description:
      'Get reliable UAE visa processing, business setup, Emirates ID, Tasheel services, attestation, translation, and more with Al Buhari. Trusted document clearing specialists.',
    images: [
      {
        url: 'https://www.amerandtasheel.com/og/albuhari.webp', // ✅ Replace with actual OG image
        width: 1200,
        height: 630,
        alt: 'Al Buhari - Government Services & Documents Clearing UAE',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Al Buhari - UAE Government & Documents Clearing Experts',
    description:
      'Simplify your UAE visa, Emirates ID, Tasheel, and business setup with Al Buhari Services. Fast, professional, and government-approved.',
    images: ['https://www.amerandtasheel.com/og/albuhari.webp'],
  },
  alternates: {
    canonical: '/',
    languages: {
      en: '/',
      ar: '/ar',
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <LoadingWrapper>
          <Header />
          <HeaderContacts />
          <GoogleReviews />
          <FloatingContactButton />
          <main className="overflow-x-hidden md:overflow-visible">{children}</main>
          <Footer />
        </LoadingWrapper>
      </body>
    </html>
  );
}

