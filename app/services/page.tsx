import type { Metadata } from 'next';
import React from 'react';
import HeroSection from './components/HeroSection';
import AllServices from './components/AllServices';
import { heroSection, mainServiceCards } from '../data/main-services';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Services - Amer Service',
    description: 'Explore comprehensive UAE government services including visas, business setup, document services, and more at Amer Service.',
    keywords: [
      'uae services',
      'government services uae',
      'uae visa services',
      'dubai visa services',
      'visa services',
      'business setup uae',
      'amer services',
      'tasheel services',
      'document attestation',
      'medical services',
      'dubai police services',
      'rta services',
      'economic department services',
    ],
    openGraph: {
      title: 'Services - Amer Service',
      description: 'Explore comprehensive UAE government services including visas, business setup, document services, and more at Amer Service.',
      url: 'https://www.amerservice.info/services',
      siteName: 'Amer Service',
      images: [
        {
          url: 'https://www.amerservice.info/og/amer.webp', // Replace with your OG image URL
          width: 1200,
          height: 630,
          alt: 'Amer Service - Services',
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Services - Amer Service',
      description: 'Explore comprehensive UAE government services including visas, business setup, document services, and more at Amer Service.',
      images: ['https://www.amerservice.info/og/amer.webp'],
    },
  };
}

const ServicesPage: React.FC = () => {
  return (
    <div className="bg-lightGray min-h-screen">
      <HeroSection hero={heroSection} />
      <AllServices cards={mainServiceCards} />
    </div>
  );
};

export default ServicesPage;
