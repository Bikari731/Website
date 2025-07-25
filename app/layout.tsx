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
  metadataBase: new URL('https://www.amerservice.info'), // ✅ Your domain
  title: {
    default: 'Amer Services - UAE Government & Business Setup Experts',
    template: '%s | Amer Services',
  },
  description:
    'Trusted UAE government and business service provider. Amer Services offers visa processing, Emirates ID, business setup, attestation, legal translation, and more.',
  keywords: [
    'amer services',
    'amer center',
    'amer',
    'uae visa services',
    'business setup dubai',
    'tahseel',
    'tasheel services',
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
    url: 'https://www.amerservice.info',
    siteName: 'Amer Services',
    title: 'Amer Services - UAE Government Services Assistance',
    description:
      'Get hassle-free UAE visa and government services including Golden Visa, Emirates ID, business setup, attestation, and more. Trusted support at every step.',
    images: [
      {
        url: 'https://www.amerservice.info/og/amer.webp', // ✅ Replace with your actual OG image
        width: 1200,
        height: 630,
        alt: 'Amer Services - Government Services in UAE',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Amer Services - UAE Government Services Assitance',
    description:
      'Streamline your UAE visa, Emirates ID, and business setup with Amer Services. Fast, reliable, and government approved.',
    images: ['https://www.amerservice.info/og/amer.webp'],
  },
  alternates: {
    canonical: '/',
    languages: {
      'en': '/',
      'ar': '/ar', 
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
