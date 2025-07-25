'use client';

import React from 'react';
import Image from 'next/image';
import { BlogPost } from '../../../interface/blog';
import AnimateInView from '@/app/components/Animate'; // Update this path if needed

interface BlogHeroSectionProps {
  blog: BlogPost;
}

const BlogHeroSection: React.FC<BlogHeroSectionProps> = ({ blog }) => {
  const formattedDate = new Date(blog.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <section className="text-center mb-12 px-4 sm:px-6 lg:px-8 py-12 max-w-5xl mx-auto">
      <AnimateInView direction="up" delay={0.1}>
        <p className="text-sm font-bold uppercase text-green-600 tracking-wider mb-2">
          {blog.category}
        </p>
      </AnimateInView>

      <AnimateInView direction="up" delay={0.2}>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-black leading-tight mb-6">
          {blog.title}
        </h1>
      </AnimateInView>

      <AnimateInView direction="up" delay={0.3}>
        <div className="flex justify-center items-center text-gray-600 text-sm space-x-4">
          <span>
            By <span className="font-semibold text-green-700">{blog.author}</span>
          </span>
          <span aria-hidden="true">•</span>
          <time dateTime={blog.date}>{formattedDate}</time>
        </div>
      </AnimateInView>

      <AnimateInView direction="up" delay={0.4}>
        <div className="mt-4 flex flex-wrap justify-center gap-2">
          {blog.keywords?.map((tag, index) => (
            <span
              key={index}
              className="bg-gray-100 text-gray-800 text-xs font-medium px-3 py-1 rounded-full"
            >
              #{tag}
            </span>
          ))}
        </div>
      </AnimateInView>

      <div className="relative w-full h-80 sm:h-96 lg:h-[500px] rounded-xl overflow-hidden shadow-xl mt-12">
        <Image
          src={blog.imageUrl}
          alt={blog.title}
          fill
          priority
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
        />
      </div>
    </section>
  );
};

export default BlogHeroSection;
