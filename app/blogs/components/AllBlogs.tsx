// app/blogs/page.tsx
// This is a Server Component by default

import { getApiBlogs } from '@/app/lib/getNews'; // Assuming this fetches blog data
import { blogs as localBlogs } from '../../data/blogs'; // Your local blog data
import { BlogPost } from '@/app/interface/blog';
import BlogListingClient from '../components/BlogListingClient'; // Import the new client component
import { Suspense } from 'react'; // For loading state
import Image from 'next/image';

// You might consider adding `revalidate` if your API blogs change frequently
// For pure SSG, ensure getApiBlogs fetches from a source that can be built statically
// export const revalidate = 3600; // Revalidate data every hour (ISR)

async function getAllSortedBlogs(): Promise<BlogPost[]> {
  try {
    const apiBlogs = await getApiBlogs();
    const combinedBlogs = [...apiBlogs, ...localBlogs];
    return combinedBlogs.sort((a, b) => {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });
  } catch (error) {
    console.error("Failed to fetch API blogs on server:", error);
    // Fallback to only local blogs if API fails during build/server render
    return [...localBlogs].sort((a, b) => {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });
  }
}

export default async function AllBlogs() {
  // Fetch all blogs on the server
  // This function will be called at build time for SSG, or request time for SSR/ISR.
  const allBlogs = await getAllSortedBlogs();

  // Determine initial page based on search params, though this can also be handled client-side
  // For full SSG, you might even generate static pages for each pagination number using generateStaticParams
  // However, pagination with query params like `?page=X` typically implies client-side interaction
  // unless you use catch-all routes and generate params for each page number.
  // For simplicity with searchParams, the current setup passes all data to client.

  return (
    <Suspense fallback={<LoadingState />}>
      {/* Pass the fully fetched and sorted blogs to the client component */}
      <BlogListingClient initialBlogs={allBlogs} />
    </Suspense>
  );
}


// These helper components can remain here or be moved to a shared `ui` folder if used elsewhere
// Make sure Image import is correct and /services/amer.webp path is valid in your public folder.
function LoadingState() {
  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8 mt-10">
      <div className="max-w-7xl mx-auto text-center py-10">
        <Image
          src="/services/amer.webp" // Ensure this path is correct and accessible
          alt="Loading..."
          width={50}
          height={50}
          className="animate-spin"
        />
      </div>
    </section>
  );
}