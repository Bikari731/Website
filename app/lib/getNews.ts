import { ApiBlog } from "../interface/ApiBlog";
import BlogPost from "../interface/blog";

export async function getApiBlogs() {

  const apiKey = process.env.NEXT_PUBLIC_NEWS_API;
  const res = await fetch(
    `https://api.worldnewsapi.com/search-news?source-country=ae&text=uae&api-key=${apiKey}&language=en`,
    {
      cache: 'force-cache',
      next: { revalidate: 86400 }, // Revalidate every 24 hours
    }
  );

  if (!res.ok) {
    const errorBody = await res.text().catch(() => "No response body");
    console.error(`API Fetch Error: Status ${res.status}`, `Response: ${errorBody}`);
    throw new Error(`Failed to fetch news: Status ${res.status}`);
  }

  const data = await res.json();
  const apiBlogs: BlogPost[] = data.news.map((item: ApiBlog) => ({
    id: item.id,
    link: item.url,
    title: item.title,
    category: 'News',
    date: item.publish_date || new Date().toISOString(),
    author: item.author || 'News Source',
    imageUrl: item.image || '/default-blog.jpg',
    tags: item.keywords || ['UAE', 'News'],
    type: "api",
    excerpt: item.text
  }));

  return apiBlogs;
}