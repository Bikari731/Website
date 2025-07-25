// app/blogs/[slug]/page.tsx
import { notFound } from "next/navigation";
import BlogHeroSection from "./components/HeroSection";
import BlogDetails from "./components/Details";
import { blogs } from "../../data/blogs"; // Your local blog data
import { type Metadata } from "next";
import RelatedBlogs from "@/app/components/RelatedBlogs";

// 1. Keep Promise-compatible types
type PromiseLike<T> = T & Promise<T>; // This is the key workaround for Next.js's strict build types

interface BlogParams {
  slug: string;
}

// 2. Page props with Promise-like structure for the type checker
// The `searchParams` might not be explicitly used in this specific page,
// but it's good practice to keep the PromiseLike for type compatibility if present in PageProps.
interface BlogPageProps {
  params: PromiseLike<BlogParams>; // Re-added PromiseLike
  searchParams?: PromiseLike<{ [key: string]: string | string[] | undefined }>; // Re-added PromiseLike
}

// --- generateStaticParams function (This remains crucial and correct for SSG) ---
// This function tells Next.js which [slug] pages to pre-render at build time (SSG)
export async function generateStaticParams() {
  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}
// --- END generateStaticParams ---

export async function generateMetadata({ params }: BlogPageProps): Promise<Metadata> {
  // Await params here as well, to satisfy the type system and get the plain object
  const actualParams = await params;
  const blog = blogs.find((b) => b.slug === actualParams.slug);

  return {
    title: blog?.title || "Blog Not Found",
    description: blog?.excerpt,
    alternates: {
      canonical: blog?.slug ? `https://amerservice.info/blogs/${blog.slug}` : undefined,
    },
    openGraph: {
      title: blog?.title || "Blog Not Found",
      description: blog?.excerpt || "Read the latest blog posts from our website.",
      url: blog?.slug ? `https://amerservice.info/blogs/${blog.slug}` : `https://yourwebsite.com/blogs`,
      siteName: 'Amer Services',
      images: [
        {
          url: blog?.imageUrl || 'https://www.amerservice.info/og/amer.webp',
          width: 1200,
          height: 630,
          alt: blog?.title || 'Blog Post Image',
        },
      ],
      type: 'article',
      publishedTime: blog?.date,
      authors: [blog?.author || 'Amer Services'],
    },
    twitter: {
      card: 'summary_large_image',
      title: blog?.title || "Blog Not Found",
      description: blog?.excerpt || "Read the latest blog posts from our website.",
      images: [blog?.imageUrl || 'https://www.amerservice.info/og/amer.webp'],
    },
  };
}

// 3. Component implementation
export default async function BlogPage({ params }: BlogPageProps) {
  // Safely await params as per the PromiseLike type definition
  const actualParams = await params;
  const blog = blogs.find((b) => b.slug === actualParams.slug);

  if (!blog) {
    notFound();
  }

  const relatedBlogs = blogs.filter(
    (b) => b.category === blog.category && b.slug !== blog.slug
  );
  const relatedSet = new Set(relatedBlogs.map((b) => b.slug));
  const fallbackBlogs = blogs
    .filter((b) => b.slug !== blog.slug && !relatedSet.has(b.slug))
    .slice(0, 3 - relatedBlogs.length);
  const finalRelatedBlogs = [...relatedBlogs, ...fallbackBlogs].slice(0, 3);

  return (
    <>
      <BlogHeroSection blog={blog} />
      <BlogDetails blog={blog} />
      <RelatedBlogs blogs={finalRelatedBlogs} />
    </>
  );
}