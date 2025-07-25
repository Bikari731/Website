import HeroSection from './home/HeroSection';
import AboutUs from './home/AboutUs';
import OurServices from './home/OurServices';
import WhyChooseUs from './home/WhyUs';
import BlogHighlights from './home/Blogs';
import GoldenVisa from './home/GoldenVisa';

export const metadata = {
  title: 'Amer Services - UAE Government Services Assistance',
  description: 'Access trusted government services in the UAE with Amer Services. Visa processing, Emirates ID, business setup, attestation, translation & more — all in one place.',
  keywords: ['amer services', 'amer center', 'amer', 'uae government services', 'uae visa', 'dubai visa', 'business setup', 'tasheel services', 'tasheel', 'golden visa', 'family visa', 'certificate attestation', 'emirates id', 'translation services', 'rta', 'dubai police'],

  openGraph: {
    title: 'Amer Services - UAE Government Services Assistance',
    description: 'One-stop solution for UAE visas, business setup, Emirates ID, legal documents, and more. Trusted government service provider in the UAE.',
    url: 'https://www.amerservice.info',
    siteName: 'Amer Services',
    images: [
      {
        url: 'https://www.amerservice.info/og/amer.webp',// ✅ Replace with actual OG image URL
        width: 1200,
        height: 630,
        alt: 'Amer Services - Government Services in UAE',
      },
    ],
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Amer Services - UAE Government Services Assistance',
    description: 'Explore Amer Services for UAE visa, business setup, Emirates ID, and more — all in one place.',
    images: ['https://www.amerservice.info/og/amer.webp'], // ✅ Replace with actual image
  },
};


export default function Home() {
  return (
    <>
      <HeroSection />
      <div className='bg-gray-300 h-[1px] w-[70%] mx-auto'></div>
      <AboutUs />
      <GoldenVisa />
      <WhyChooseUs />
      <div className='bg-gray-300 h-[1px] w-[70%] mx-auto'></div>
      <OurServices />
      <div className='bg-gray-300 h-[1px] w-[70%] mx-auto'></div>
      <BlogHighlights />
    </>
  );
}
