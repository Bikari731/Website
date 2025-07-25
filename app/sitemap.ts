// app/sitemap.ts (This is the CORRECT default export format for Next.js App Router)
import { MetadataRoute } from 'next';

// Assuming these imports provide accurate 'updatedAt' for all relevant data
import {
  allServices,
  getAllServiceSlugsAndSubServiceSlugs,
  getSubServiceBySlugs
} from '@/app/data/services';
import { blogs } from '@/app/data/blogs';

// Use an environment variable for the site URL
const siteUrl = 'https://www.amerservice.info'; // Ensure this matches your actual deployed site URL

/**
 * Formats a date string or Date object into YYYY-MM-DD format for sitemaps.
 * @param {string | Date} date The date to format.
 * @returns {string} The formatted date string.
 */
function formatDate(date: string | number | Date): string {
  const d = new Date(date);
  const year = d.getFullYear();
  const month = (d.getMonth() + 1).toString().padStart(2, '0');
  const day = d.getDate().toString().padStart(2, '0');
  return `${year}-${month}-${day}`;
}

// This is the REQUIRED default export function for app/sitemap.ts
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const today = formatDate(new Date());

  // --- Static pages with lastmod ---
  const staticPages = [
    { url: '', priority: 1.0, changeFrequency: 'daily', lastModified: today },
    { url: 'about', priority: 0.8, changeFrequency: 'monthly', lastModified: today },
    { url: 'contact', priority: 0.7, changeFrequency: 'monthly', lastModified: today },
    { url: 'apply-online', priority: 0.7, changeFrequency: 'monthly', lastModified: today },
    { url: 'blogs', priority: 0.8, changeFrequency: 'daily', lastModified: today },
    { url: 'services', priority: 0.9, changeFrequency: 'weekly', lastModified: today },
    { url: 'search', priority: 0.5, changeFrequency: 'daily', lastModified: today },
  ];

  // --- Dynamic Services and Sub-services ---
  const servicePages = allServices.map(service => ({
    url: `services/${service.slug}`,
    lastModified: service.updatedAt ? formatDate(service.updatedAt) : today,
    priority: 0.9,
    changeFrequency: 'weekly',
  }));

  const subServiceSlugs = getAllServiceSlugsAndSubServiceSlugs();
  const subServicePages = subServiceSlugs
    .filter(({ serviceSlug, subServiceSlug }) => serviceSlug && subServiceSlug) // ✅ avoids undefined
    .map(({ serviceSlug, subServiceSlug }) => {
      const subServiceData = getSubServiceBySlugs(serviceSlug, subServiceSlug);
      return {
        url: `services/${serviceSlug}/${subServiceSlug}`,
        lastModified: subServiceData?.updatedAt ? formatDate(subServiceData.updatedAt) : today,
        priority: 0.8,
        changeFrequency: 'weekly',
      };
    }
  );

  // --- Blogs ---
  const blogPages = blogs.map(blog => ({
    url: `blogs/${blog.slug}`,
    lastModified: blog.updatedAt ? formatDate(blog.updatedAt) : today,
    priority: 0.7,
    changeFrequency: 'monthly',
  }));

  // --- Combine all URLs ---
  const allPages = [...staticPages, ...servicePages, ...subServicePages, ...blogPages];

  // Map to the MetadataRoute.Sitemap format required by Next.js
  return allPages.map(page => ({
    url: `${siteUrl}/${page.url}`,
    lastModified: page.lastModified ? new Date(page.lastModified) : new Date(today), // Convert lastModified to Date object
    changeFrequency: page.changeFrequency as 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never', // Explicitly cast to valid enum
    priority: page.priority,
  }));
}