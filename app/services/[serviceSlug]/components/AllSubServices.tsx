import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { SubServiceDetail } from '../../../interface/service';
import { FaChevronRight } from 'react-icons/fa';
import AnimateInView from '@/app/components/Animate';

interface AllSubServicesProps {
  subServices: SubServiceDetail[];
  serviceSlug: string;
}

const AllSubServicesSection: React.FC<AllSubServicesProps> = ({ subServices, serviceSlug }) => {
  return (
    <section className="bg-white">
      <div className='bg-gray-300 h-[1px] w-[70%] mx-auto my-20'></div>
      <div className="mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold md:text-center text-gn md:mb-12 relative pb-4">
          Our <span className="text-rd">Sub-Services</span>
          <span className="block w-24 h-1 bg-primaryRed mx-auto mt-2"></span>
        </h2>

        {/* FLEX version */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8 w-[80%] mx-auto">
          {subServices.map((subService, index) => (
            <AnimateInView key={index} direction="up" duration={0.6} delay={0} className="w-full">
              <Link
                href={`/services/${serviceSlug}/${subService.slug}`}
                className="block h-full"
                aria-label={`Learn more about ${subService.title}`}
              >
                <div className="bg-white rounded-xl shadow-md border-l-4 border-gn hover:shadow-xl transition-all duration-300 p-6 h-full">
                  <div className="mb-4 h-40 w-full relative rounded-lg overflow-hidden">
                    <Image
                      src={subService.image}
                      alt={subService.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">{subService.title}</h3>
                  <p className="text-gray-600 text-sm line-clamp-2">{subService.summary}</p>
                  <div className="mt-4 text-gn text-sm font-semibold flex items-center">
                    Learn More <FaChevronRight className="ml-1" />
                  </div>
                </div>
              </Link>
            </AnimateInView>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllSubServicesSection;
