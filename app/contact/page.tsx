import type { Metadata } from 'next';
import React from 'react';
import HeroSection from './components/HeroSection';
import ContactUsSection from './components/ContactUsSection';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Contact Us - Amer Service',
    description: 'Get in touch with Amer Service for all your UAE government service needs. We are here to assist you.',
    keywords: ['contact us', 'amer service contact', 'uae government services support', 'customer support uae'],
    openGraph: {
      title: 'Contact Us - Amer Service',
      description: 'Get in touch with Amer Service for all your UAE government service needs. We are here to assist you.',
      url: 'https://www.amerservice.info/contact',
      siteName: 'Amer Service',
      images: [
        {
          url: 'https://www.amerservice.info/og/amer.webp', // Replace with your actual OG image URL
          width: 1200,
          height: 630,
          alt: 'Contact Amer Service',
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Contact Us - Amer Service',
      description: 'Get in touch with Amer Service for all your UAE government service needs. We are here to assist you.',
      images: ['https://www.amerservice.info/og/amer.webp'], // Replace accordingly
    },
  };
}

const Contact = () => {
  return (
    <>
      <HeroSection />
      <ContactUsSection />
    </>
  );
};

export default Contact;
