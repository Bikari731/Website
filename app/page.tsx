import HeroSection from './home/HeroSection';
import AboutUs from './home/AboutUs';
import OurServices from './home/OurServices';
import WhyChooseUs from './home/WhyUs';
import BlogHighlights from './home/Blogs';
import GoldenVisa from './home/GoldenVisa';

export const metadata = {
  title: 'Al Buhari - UAE Government Services & Documents Clearing',
  description: 'Professional assistance with UAE government services at Al Buhari. Visa processing, Emirates ID, business setup, Tasheel, attestation, translation & more — your trusted documents clearing partner.',
  keywords: ['al buhari', 'documents clearing', 'amer services', 'tasheel services', 'uae government services', 'visa processing', 'dubai visa', 'business setup', 'golden visa', 'family visa', 'certificate attestation', 'emirates id', 'translation services', 'rta', 'dubai police'],

  openGraph: {
    title: 'Al Buhari - UAE Government Services & Documents Clearing',
    description: 'One-stop solution for UAE visas, business setup, Emirates ID, Tasheel, legal documents, and more. Trusted government services provider in the UAE.',
    url: 'https://www.amerandtasheel.com',
    siteName: 'Al Buhari Services',
    images: [
      {
        url: 'https://www.amerandtasheel.com/og/albuhari.webp', // ✅ Replace with actual OG image URL
        width: 1200,
        height: 630,
        alt: 'Al Buhari - Government Services & Documents Clearing UAE',
      },
    ],
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Al Buhari - UAE Government Services & Documents Clearing',
    description: 'Explore Al Buhari for UAE visa services, business setup, Emirates ID, attestation, and more — your trusted documents clearing center.',
    images: ['https://www.amerandtasheel.com/og/albuhari.webp'], // ✅ Replace with actual image
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

