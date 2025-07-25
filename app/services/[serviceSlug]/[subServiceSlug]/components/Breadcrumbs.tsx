// components/Breadcrumbs.tsx (New component)
import React from 'react';
import Link from 'next/link';

interface BreadcrumbItem {
  name: string;
  path: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
  return (
    <nav className="container px-4 sm:px-12 md:px-14 lg:px-20 xl:px-56 py-10 text-xs xl:text-sm text-gray-600" aria-label="Breadcrumb">
      <ol className="list-none p-0 inline-flex">
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            {index > 0 && (
              <svg className="w-4 h-4 mx-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
            )}
            {index < items.length - 1 ? (
              <Link href={item.path} className="text-primaryGreen hover:underline">
                {item.name}
              </Link>
            ) : (
              <span className="text-gn border-b-2 border-gn font-semibold">{item.name}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;