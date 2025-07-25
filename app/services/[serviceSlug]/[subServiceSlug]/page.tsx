// app/services/[serviceSlug]/[subServiceSlug]/page.tsx
import { notFound } from "next/navigation";
import { blogs } from '@/app/data/blogs';
import { type Metadata } from "next";

// Import your sub-components.
import SubServiceHeroSection from './components/SubServiceHeroSection';
import Breadcrumbs from './components/Breadcrumbs';
import SubServiceDetails from './components/Detials'; // Note: Typo here 'Detials' should be 'Details' if not intended
import SubServiceSidebar from './components/Sidebar'; // Renamed to Sidebar for clarity
import ServiceTypes from './components/ServiceTypes';
import { getAllServiceSlugsAndSubServiceSlugs, getServiceBySlug, getSubServiceBySlugs } from "@/app/data/services";
import ServiceFaqs from "../components/ServiceFaqs";
import RelatedBlogs from "../../../components/RelatedBlogs";


// Re-introduce PromiseLike type for compatibility with Next.js internal PageProps
type PromiseLike<T> = T & Promise<T>;

interface PageParams {
  serviceSlug: string;
  subServiceSlug: string;
}

interface SubServicePageProps {
  // params must be PromiseLike<PageParams> to satisfy the type checker
  params: PromiseLike<PageParams>;
  // If searchParams were used, they would also need PromiseLike
  searchParams?: PromiseLike<{ [key: string]: string | string[] | undefined }>;
}

// --- generateStaticParams for SSG ---
export async function generateStaticParams(): Promise<PageParams[]> {
  const allSlugs = getAllServiceSlugsAndSubServiceSlugs();
  return allSlugs;
}

// --- generateMetadata for SEO ---
export async function generateMetadata({ params }: SubServicePageProps): Promise<Metadata> {
  // Await params here to get the actual object
  const actualParams = await params;
  const { serviceSlug, subServiceSlug } = actualParams;

  const parentService = getServiceBySlug(serviceSlug);
  const subService = getSubServiceBySlugs(serviceSlug, subServiceSlug);

  if (!parentService || !subService) {
    return {
      title: "Sub-service Not Found",
      description: "The requested sub-service was not found.",
    };
  }

  return {
    title: `${subService.title} - ${parentService.title} - Amer Service`,
    description: subService.summary,
    alternates: {
      canonical: `https://www.amerservice.info/services/${serviceSlug}/${subServiceSlug}`, // Use absolute URL
    },
    openGraph: {
      title: `${subService.title} - ${parentService.title} - Amer Service`,
      description: subService.summary,
      url: `https://www.amerservice.info/services/${serviceSlug}/${subServiceSlug}`, // Use absolute URL
      siteName: 'Amer Service',
      type: 'website',
      images: [{ url: subService.image || `https://www.amerservice.info/og/amer.webp` }],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${subService.title} - ${parentService.title} - Amer Service`,
      description: subService.summary,
      images: [{ url: subService.image || `https://www.amerservice.info/og/amer.webp` }],
    },
  };
}

// --- Main Page Component (Server Component) ---
export default async function SubServicePage({ params }: SubServicePageProps) {
  // Await params here to get the actual object
  const actualParams = await params;
  const { serviceSlug, subServiceSlug } = actualParams;

  // Fetch data on the server
  const parentService = getServiceBySlug(serviceSlug);
  const subService = getSubServiceBySlugs(serviceSlug, subServiceSlug);

  if (!parentService || !subService) {
    notFound(); // Triggers Next.js's notFound handler
  }

  // Related Blogs logic (can stay here on the server)
  // Ensure 'category' and 'slug' exist on blog and subService objects for filtering.
  // Assuming 'b.category' and 'subService?.category' are strings to compare.
  // Assuming 'b.slug' and 'subService?.slug' are strings to compare for fallback.
  const relatedBlogs = blogs.filter((b) => b.category === subService.category);
  const fallbackBlogs = blogs.filter((b) => b.slug !== subService.slug).slice(0, 3);
  const finalRelatedBlogs = relatedBlogs.length > 0 ? relatedBlogs : fallbackBlogs;

  const breadcrumbItems = [
    { name: 'Services', path: '/services' },
    { name: parentService.title, path: `/services/${parentService.slug}` },
    { name: subService.title, path: `/services/${parentService.slug}/${subService.slug}` },
  ];

  return (
    <div className="bg-lightGray min-h-screen flex flex-col"> {/* Added flex flex-col to ensure content stretches */}
      <Breadcrumbs items={breadcrumbItems} />
      <SubServiceHeroSection subService={subService} />
      {/* Increased padding around the grid for better visual spacing, especially on smaller screens */}
      <div className="grid grid-cols-1 lg:grid-cols-4 xl:grid-cols-5 lg:gap-2 gap-8 p-4 lg:p-8 w-full"> {/* Added flex-grow here to push FAQs/Blogs down */}
        <div className="lg:col-span-1">
          {/* The sticky behavior is defined within ServiceTypes component */}
          <ServiceTypes service={subService.title} serviceType={subService.serviceTypes ?? []} />
        </div>
        <div className="lg:col-span-2 xl:col-span-3">
          <SubServiceDetails subService={subService} />
          {/* You might want to add some padding-bottom or margin-bottom here
              if the details section is often short, to ensure scrolling context for sidebars. */}
        </div>
        <div className="lg:col-span-1">
          {/* The sticky behavior is defined within SubServiceSidebar component */}
          <SubServiceSidebar
            currentSubServiceSlug={subService.slug}
            parentServiceSlug={parentService.slug}
            subServices={parentService.subServices}
          />
        </div>
      </div>
      <ServiceFaqs faqs={subService?.faqs} />
      <RelatedBlogs blogs={finalRelatedBlogs} />
    </div>
  );
}