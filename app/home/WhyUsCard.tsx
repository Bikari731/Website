import Image from 'next/image';
import React from 'react';

type Feature = {
  img: string;
  heading: string;
  description: string;
};

type WhyUsCardProps = {
  feature: Feature;
};

const WhyUsCard = ({ feature }: WhyUsCardProps) => {
  return (
    // Main card container: horizontal flex, border, rounded, overflow hidden for clean edges
    <div className="flex flex-row border-2 border-gray-200 rounded-lg overflow-hidden h-[150px] w-full">
      {/* Image section: Fixed width, centered content, light background for contrast */}
      <div className="w-1/3 flex items-center justify-center bg-gray-50 p-3 flex-shrink-0">
        <Image
          src={feature.img}
          height={70} // Icon size for horizontal layout
          width={70}  // Icon size for horizontal layout
          alt={feature.heading}
          className="object-contain"
        />
      </div>
      {/* Text content section: Takes remaining width, left-aligned, centered vertically */}
      <div className="w-2/3 p-4 flex flex-col justify-center bg-gn">
        {/* Heading: Bold and slightly darker, small bottom margin */}
        <h6 className="text-lg font-bold text-white mb-1 ">{feature.heading}</h6>
        {/* Description: Standard text color and size */}
        <p className="text-sm text-white line-clamp-3">{feature.description}</p> {/* line-clamp to prevent overflow */}
      </div>
    </div>
  );
};

export default WhyUsCard;