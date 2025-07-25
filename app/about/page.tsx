import type { Metadata } from 'next';
import React from 'react';
import HeroSection from './components/HeroSection';
import AboutUs from './components/AboutUs';
import OurServices from './components/OurServices';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'About Us - Amer Service',
    description: 'Learn more about Amer Service, our mission, vision, and the services we provide.',
    keywords: ['about amer service', 'about us', 'amer services', 'uae government services', 'business setup'],
    openGraph: {
      title: 'About Us - Amer Service',
      description: 'Learn more about Amer Service, our mission, vision, and the services we provide.',
      url: 'https://www.amerservice.info/about',
      siteName: 'Amer Service',
      images: [
        {
          url: 'https://www.amerservice.info/og/amer.webp', // Replace with actual OG image URL
          width: 1200,
          height: 630,
          alt: 'Amer Service About Us',
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'About Us - Amer Service',
      description: 'Learn more about Amer Service, our mission, vision, and the services we provide.',
      images: ['https://www.amerservice.info/og/amer.webp'], // Replace accordingly
    },
  };
}

const About = () => {
  return (
    <>
      <HeroSection />
      <AboutUs />
      <OurServices />
    </>
  );
};

export default About;
