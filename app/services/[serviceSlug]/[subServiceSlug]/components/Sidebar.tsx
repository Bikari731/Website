// components/SubServiceSidebar.tsx
import React from 'react';
import Link from 'next/link';
// Assuming the correct path for SubServiceDetail
import { SubServiceDetail } from '../../../../interface/service'; // Adjust path if necessary
import AnimateInView from '@/app/components/Animate'; // Adjust path if necessary
import { FaChevronRight } from 'react-icons/fa';

interface SubServiceSidebarProps {
  subServices: SubServiceDetail[];
  parentServiceSlug: string;
  currentSubServiceSlug: string;
}

const SubServiceSidebar: React.FC<SubServiceSidebarProps> = ({
  subServices,
  parentServiceSlug,
  currentSubServiceSlug,
}) => {
  if (!subServices || subServices.length === 0) {
    return null; // Don't render if no sub-services are provided
  }

  return (
    // 'sticky top-[72px]' is correctly applied to AnimateInView's root element
    // Ensure 'm-10' (margin) doesn't push it too far into the top, potentially off-screen initially
    <AnimateInView
      direction="left"
      className="sticky top-[72px] mb-10 mx-auto lg:m-0 min-w-[220px] rounded-xl bg-gn text-white p-4 shadow-md" // Adjusted margin, added shadow, and default bg
    >
      <h4 className="text-xl font-bold text-white my-2 mb-4">Other Services</h4> {/* Title color is white */}
      <nav>
        <ul className="space-y-2"> {/* Reduced space for a slightly tighter list */}
          {subServices.map((subService) => (
            <li key={subService.slug}>
              <Link
                href={`/services/${parentServiceSlug}/${subService.slug}`}
                className={`flex items-center justify-between px-3 py-2 rounded-lg transition-colors duration-200 ${
                  currentSubServiceSlug === subService.slug
                    ? 'bg-white text-gn font-semibold shadow-md' // Active state styling
                    : 'text-white hover:bg-gn' // Inactive state styling, hover is slightly darker green
                }`}
              >
                <span>{subService.title}</span>
                <FaChevronRight/>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </AnimateInView>
  );
};

export default SubServiceSidebar;