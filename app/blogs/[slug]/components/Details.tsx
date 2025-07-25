'use client';
import React, { JSX } from 'react';
import { BlogPost } from '../../../interface/blog';
import Link from 'next/link';
import { FaLinkedin, FaFacebook } from 'react-icons/fa6';
import AnimateInView from '@/app/components/Animate'; // adjust path if needed
import { FaWhatsapp } from 'react-icons/fa';

interface BlogDetailsProps {
  blog: BlogPost;
}

const BlogDetails: React.FC<BlogDetailsProps> = ({ blog }) => {
  const renderContent = () => {
    return blog?.content?.map((block, index) => {
      switch (block.type) {
        case 'paragraph':
          return (
          <AnimateInView key={index} direction="up" duration={0.7} delay={0.1}>
            <p dangerouslySetInnerHTML={{ __html: block.text }} />;
          </AnimateInView>
          )

        case 'heading':
          const HeadingTag = `h${block.level}` as keyof JSX.IntrinsicElements;
          return (
            <AnimateInView direction="up" duration={0.7} delay={0.1} key={index}>
              <HeadingTag className="text-2xl font-bold mt-8 mb-4">{block.text}</HeadingTag>
            </AnimateInView>
          );

        case 'list':
          return (
            <AnimateInView direction="up" duration={0.7} delay={0.1} key={index}>
              <ul className="list-disc list-inside ml-4 mt-2">
                {block.items.map((item, liIndex) => (
                  <li key={liIndex}>{item}</li>
                ))}
              </ul>
            </AnimateInView>
          );

        default:
          console.warn('Unknown blog content block type:', block);
          return null;
      }
    });
  };

  const currentUrl = `https://yourwebsite.com/blogs/${blog.slug}`;

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-12 max-w-5xl mx-auto">
      {/* Blog Content with animation */}
      <div className="prose prose-lg mx-auto text-gray-800 leading-relaxed blog-content">
        {renderContent()}
      </div>

      {/* Share Buttons with animation */}
      <AnimateInView direction="up" duration={0.6} delay={0.3} className="mt-12 pt-8 flex flex-wrap items-center justify-center gap-4">
        <span className="font-semibold text-black">Share this article:</span>
        
        {/* Facebook */}
        <Link
          href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}&display=popup`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-4 py-2 bg-[#1877F2] text-white rounded-md hover:bg-[#166FE5] transition-colors duration-200"
          aria-label="Share on Facebook"
        >
          <FaFacebook className="mr-2" />
          Facebook
        </Link>

        {/* LinkedIn */}
        <Link
          href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl)}&title=${encodeURIComponent(blog.title)}&summary=${encodeURIComponent(blog.excerpt || '')}`}          
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-4 py-2 bg-[#0A66C2] text-white rounded-md hover:bg-[#004182] transition-colors duration-200"
          aria-label="Share on LinkedIn"
        >
          <FaLinkedin className="mr-2" />
          LinkedIn
        </Link>

        {/* WhatsApp */}
        <Link
          href={`https://wa.me/?text=${encodeURIComponent(`${blog.title} - ${currentUrl}`)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-4 py-2 bg-[#25D366] text-white rounded-md hover:bg-[#128C7E] transition-colors duration-200"
          aria-label="Share on WhatsApp"
        >
          <FaWhatsapp className="mr-2" />
          WhatsApp
        </Link>
      </AnimateInView>
          </div>
        );
};

export default BlogDetails;
