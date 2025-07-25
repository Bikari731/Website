// app/services/[serviceSlug]/page.tsx

import { getServiceBySlug, allServices } from '../../data/services';
import ServiceHeroSection from './components/HeroSection';
import AllSubServicesSection from './components/AllSubServices';
import ServiceFaqs from './components/ServiceFaqs';
import { notFound } from 'next/navigation';
import RelatedBlogs from '../../components/RelatedBlogs';
import { blogs } from '@/app/data/blogs';
import { Metadata } from 'next';
import SubServicesSection from './components/SubServicesSection';

type PromiseLike<T> = T & Promise<T>;

interface ServiceParams {
  serviceSlug: string;
}

interface ServicePageProps {
  params: PromiseLike<ServiceParams>;
  searchParams?: PromiseLike<{ [key: string]: string | string[] | undefined }>;
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { serviceSlug } = await params;
  const service = getServiceBySlug(serviceSlug);

  if (!service) {
    return {
      title: "Service Not Found",
      description: "The requested service was not found on Amer Service.",
    };
  }

  return {
    title: service.title,
    description: service.description,
    openGraph: {
      title: service.title,
      description: service.description,
      url: `https://www.amerservice.info/services/${service.slug}`,
      siteName: 'Amer Service',
      images: [
        {
          url: service?.imageUrl || 'https://www.amerservice.info/og/amer.webp',
          width: 1200,
          height: 630,
          alt: service?.title || 'Service Post Image',
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: service.title,
      description: service.description,
      images: [service?.imageUrl || 'https://www.amerservice.info/og/amer.webp'],
    },
  };
}


export function generateStaticParams() {
  return allServices.map((service) => ({
    serviceSlug: service.slug,
  }));
}

export default async function ServicePage({ params }: ServicePageProps) {
  const actualParams = await params;
  const service = getServiceBySlug(actualParams.serviceSlug);

  if (!service) {
    notFound();
  }

  const relatedBlogs = blogs.filter((b) => b.category === service?.category);
  const fallbackBlogs = blogs.filter((b) => b.slug !== service?.slug).slice(0, 3);
  const finalRelatedBlogs = relatedBlogs.length > 0 ? relatedBlogs : fallbackBlogs;


  return (
    <div className="overflow-hidden">
      <ServiceHeroSection service={service} />
      {service.id === 'amer-services' || service.id === 'tasheel-services' || service.id === 'business-setup-services' || service.id === 'document-legal-services' ? (
        <AllSubServicesSection subServices={service.subServices} serviceSlug={service.slug} />
      ) : (
        <SubServicesSection subServices={service.subServices} service={service.title} />
      )}
      {service.faqs && <ServiceFaqs faqs={service.faqs} />}
      <RelatedBlogs blogs={finalRelatedBlogs}/>
    </div>
  );
}
