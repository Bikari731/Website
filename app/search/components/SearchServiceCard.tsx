import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import {MainServiceCard} from '../../interface/service';

const OurServicesCard = ({ service }: { service: MainServiceCard }) => {
  return (
    <Link
      href={`/services/${service.slug}`}
      className="bg-white group m-auto p-2 relative overflow-hidden flex flex-col justify-between gap-4 w-full border-2 rounded-2xl border-gn transition-transform duration-300 hover:-translate-y-1"
    >
      {/* Animated Overlay */}
      <div className="absolute inset-0 bg-gn opacity-0 group-hover:opacity-100 transition-all duration-500 origin-bottom-left scale-0 group-hover:scale-100 z-0 rounded-xl" style={{ transformOrigin: 'bottom left' }}></div>

      {/* Content */}
      <div className="relative z-10 flex items-center gap-2">
        <Image
          src={service.icon}
          height={80}
          width={80}
          alt={service.title}
          loading="lazy"
        />
        <h6 className="text-2xl font-extrabold text-gray-800 group-hover:text-white transition-colors duration-300">
          {service.title}
        </h6>
      </div>
    </Link>
  );
};

export default OurServicesCard;
