import type { Metadata } from 'next';
import HeroSection from './components/HeroSection';
import AllBlogs from './components/AllBlogs';
import { Suspense } from 'react';
import Image from 'next/image';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Blogs - Amer Service',
    description: 'Read the latest updates, tips, and news about UAE government services, visas, and more on Amer Service blog.',
    keywords: ['blogs', 'uae government services blog', 'amer service updates', 'visa tips', 'uae news'],
    openGraph: {
      title: 'Blogs - Amer Service',
      description: 'Read the latest updates, tips, and news about UAE government services, visas, and more on Amer Service blog.',
      url: 'https://www.amerservice.info/blogs',
      siteName: 'Amer Service',
      images: [
        {
          url: 'https://www.amerservice.info/og/amer.webp', // Replace with your actual OG image
          width: 1200,
          height: 630,
          alt: 'Amer Service Blogs',
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Blogs - Amer Service',
      description: 'Read the latest updates, tips, and news about UAE government services, visas, and more on Amer Service blog.',
      images: ['https://www.amerservice.info/og/amer.webp'],
    },
  };
}

const Blog = () => {
  return (
    <>
      <HeroSection />
      <Suspense
        fallback={
          <div className="py-20 text-center">
            <Image
              src="/services/amer.webp"
              alt="Loading..."
              width={50}
              height={50}
              className="animate-spin inline-block"
            />
          </div>
        }
      >
        <AllBlogs />
      </Suspense>
    </>
  );
};

export default Blog;
