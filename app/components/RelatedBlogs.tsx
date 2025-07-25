import React from 'react';
import { BlogPost } from '../interface/blog';
import BlogPostCard from '../blogs/components/BlogCard';
import AnimateInView from '@/app/components/Animate';

interface RelatedBlogsProps {
  blogs: BlogPost[];
}

const RelatedBlogs: React.FC<RelatedBlogsProps> = ({ blogs }) => {
  if (blogs.length === 0) return null;

  return (
    <div className="mt-20 pt-12 border-t border-gray-200 w-[70%] mx-auto min-h-[600px]">
      <h2 className="text-3xl font-extrabold text-black text-center mb-10">
        <span className="text-gn">Related</span>{' '}
        <span className="text-rd">Blogs</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog, idx) => (
          <AnimateInView key={blog.id} direction="up" duration={0.6} delay={idx * 0.1}>
            <BlogPostCard blog={blog} />
          </AnimateInView>
        ))}
      </div>
    </div>
  );
};

export default RelatedBlogs;
