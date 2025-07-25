'use client';
import { useSearchParams, useRouter, usePathname } from 'next/navigation';
import { MESSAGES, PAGINATION_LABELS } from '../../data/blogs';
import BlogPostCard from './BlogCard';
import { BlogPost } from '@/app/interface/blog';
import AnimateInView from '@/app/components/Animate';

const POSTS_PER_PAGE = 6;

export default function BlogListingClient({ initialBlogs }: { initialBlogs: BlogPost[] }) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const pageParam = parseInt(searchParams.get('page') || '1', 10);
  const currentPage = isNaN(pageParam) || pageParam < 1 ? 1 : pageParam;

  const totalPages = Math.ceil(initialBlogs.length / POSTS_PER_PAGE);
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const blogsToDisplay = initialBlogs.slice(startIndex, startIndex + POSTS_PER_PAGE);

  const handlePageChange = (page: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('page', String(page));
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };

  if (initialBlogs.length === 0) {
    return <NoPostsState />;
  }

  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8 mt-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-16">
          {blogsToDisplay.map((blog, idx) => (
            <AnimateInView key={blog.id} direction="up" delay={idx * 0.1}>
              <BlogPostCard blog={blog} />
            </AnimateInView>
          ))}
        </div>

        {totalPages > 1 && (
          <Pagination currentPage={currentPage} totalPages={totalPages} handlePageChange={handlePageChange} />
        )}
      </div>
    </section>
  );
}

function NoPostsState() {
  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8 mt-10">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-xl text-gray-700">{MESSAGES.noPostsFound}</p>
      </div>
    </section>
  );
}

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  handlePageChange: (page: number) => void;
}

function Pagination({ currentPage, totalPages, handlePageChange }: PaginationProps){
  
  const getPagesToShow = () => {
    if (totalPages <= 5) return Array.from({ length: totalPages }, (_, i) => i + 1);
    if (currentPage === 1) return [1, 2, 3];
    if (currentPage === totalPages) return [totalPages - 2, totalPages - 1, totalPages];
    return [currentPage - 1, currentPage, currentPage + 1];
  };

  const pagesToShow = getPagesToShow();

  return (
    <div className="flex justify-center items-center gap-2 mt-8 flex-wrap">
      {/* Previous Button */}
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-4 py-2 rounded-lg border border-gn text-gn hover:bg-green-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
      >
        {PAGINATION_LABELS.previous}
      </button>

      {/* Page Number Buttons */}
      {pagesToShow.map((page) => (
        <button
          key={page}
          onClick={() => handlePageChange(page)}
          className={`px-4 py-2 rounded-lg border transition-colors duration-200 ${
            page === currentPage
              ? 'bg-green-100 text-gn font-bold border-gn'
              : 'border-gn text-gn hover:bg-green-50'
          }`}
        >
          {page}
        </button>
      ))}

      {/* Next Button */}
      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-4 py-2 rounded-lg border border-gn text-gn hover:bg-green-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
      >
        {PAGINATION_LABELS.next}
      </button>
    </div>

  );
}
