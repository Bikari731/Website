'use client';

import { useSearchParams } from 'next/navigation';
import { filterByKeyword } from '../../lib/search';
import { mainServiceCards } from '../../data/main-services';
import { blogs } from '../../data/blogs';
import SearchServicesCard from './SearchServiceCard';
import SearchBlogsCard from './SearchBlogsCard';
import SearchBar from './SearchBar';

export default function SearchPage() {
  const searchParams = useSearchParams();
  const query = searchParams.get('query') || '';

  const matchedServices = filterByKeyword(mainServiceCards, query);
  const matchedBlogs = filterByKeyword(blogs, query);

  return (
    <div className="p-6">
      <SearchBar query={query} />
      <div className='bg-gray-300 h-[1px] w-[70%] mx-auto my-10'></div>
      <h2 className="text-sm sm:text-base mb-4">
        Search results for: <span className="font-semibold">{query}</span>
      </h2>
      {matchedServices.length > 0 && (
        <>
          <h3 className="text-2xl text-gn border-b-4 w-fit border-rd mb-2 font-bold">Services</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 my-8">
            {matchedServices.map((item, i) => (
              <SearchServicesCard key={i} service={item} />
            ))}
          </div>
        </>
      )}
      <div className='bg-gray-300 h-[1px] w-[70%] mx-auto my-16'></div>
      {matchedBlogs.length > 0 && (
        <>
          <h3 className="text-2xl text-gn border-b-4 w-fit border-rd font-bold mb-2">Blogs</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 my-8">
            {matchedBlogs.map((item, i) => (
              <SearchBlogsCard key={i} blog={item} />
            ))}
          </div>
        </>
      )}

      {matchedServices.length === 0 && matchedBlogs.length === 0 && (
        <div className="mt-20 text-center text-gray-700">
          <h2 className="text-3xl font-bold text-red-600 mb-4">No results found</h2>
          <p className="text-lg mb-2">
            Sorry, we couldn&rsquo;t find any result for &quot;<span className="font-semibold">{query}</span>&quot;.
          </p>
          <p className="text-sm text-gray-500">
            Check the spelling or try searching for a different keyword.
          </p>
        </div>
      )}
    </div>
  );
}
