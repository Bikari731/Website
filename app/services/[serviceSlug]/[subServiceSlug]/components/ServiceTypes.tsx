// components/ServiceTypes.tsx
import React from 'react';
import Link from 'next/link';
// Assuming the correct path for ServiceType
import { ServiceType } from '../../../../interface/service'; // Adjust path if necessary
import { BiChevronRight } from 'react-icons/bi';
import AnimateInView from '@/app/components/Animate'; // Adjust path if necessary

interface ServiceTypesProps { // Renamed from SubServiceSidebarProps for clarity
  service: string;
  serviceType: ServiceType[];
}

const ServiceTypes: React.FC<ServiceTypesProps> = ({ service, serviceType }) => {
  if (!serviceType || serviceType.length === 0) {
    return null; // Don't render if no service types are provided
  }

  return (
    // 'sticky top-[62px]' is correctly applied to AnimateInView's root element
    // Ensure 'm-10' (margin) doesn't push it too far into the top, potentially off-screen initially
    <AnimateInView
      direction="right"
      className="md:sticky top-[62px] mb-10 mx-auto lg:m-0 min-w-[200px] bg-white rounded-xl p-4" // Adjusted margin for responsiveness and added shadow/padding
    >
      <nav>
        <ul className="flex flex-col items-center"> {/* Removed justify-between as it's not useful here */}
          {serviceType.map((type) => (
            <li key={type.type} className="w-full mb-3 last:mb-0"> {/* Added margin-bottom */}
              <Link
                href={`https://wa.me/971563032309?text=${encodeURIComponent(`I am interested in the ${type.type} - ${service}`)}`}
                target="_blank"
                className="flex flex-col items-center justify-center p-2 rounded-xl border-2 border-gn text-white bg-gn transition-all duration-300 transform hover:scale-[1.1]" // Enhanced styling
                rel="noopener noreferrer" // Good practice for target="_blank"
              >
                <span className="text-xl font-extrabold text-center mb-1">{type.type}</span>
                <div className="flex items-center gap-1 text-xs"> {/* Reduced font size for "Apply Now" */}
                  <span>Apply Now</span>
                  <BiChevronRight className="w-4 h-4" /> {/* Adjusted icon size */}
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </AnimateInView>
  );
};

export default ServiceTypes;