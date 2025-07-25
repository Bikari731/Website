import type { Metadata } from 'next';
import React from 'react';
import ApplyOnlineForm from './components/ApplyOnlineForm';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Apply Online - Amer Service',
    description: 'Submit your application online for UAE government-related services quickly and securely.',
    keywords: ['apply online', 'uae services application', 'amer service online form', 'government application uae'],
    openGraph: {
      title: 'Apply Online - Amer Service',
      description: 'Submit your application online for UAE government-related services quickly and securely.',
      url: 'https://www.amerservice.info/apply-online',
      siteName: 'Amer Service',
      images: [
        {
          url: 'https://www.amerservice.info/og/amer.webp', // Replace with your OG image URL
          width: 1200,
          height: 630,
          alt: 'Apply Online - Amer Service',
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Apply Online - Amer Service',
      description: 'Submit your application online for UAE government-related services quickly and securely.',
      images: ['https://www.amerservice.info/og/amer.webp'], // Replace accordingly
    },
  };
}

const ApplyOnlinePage = () => {
  return <ApplyOnlineForm />;
};

export default ApplyOnlinePage;
