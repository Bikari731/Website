import React from 'react';
import Image from 'next/image';
import { SubServiceDetail } from '../../../../interface/service';

interface SubServiceHeroProps {
  subService: SubServiceDetail;
}

const SubServiceHeroSection: React.FC<SubServiceHeroProps> = ({ subService }) => {
  return (
    <section className="text-black p-4 xl:px-40">
      <div className="flex flex-col sm:items-center justify-between gap-5 sm:mx-auto sm:w-[80%] pb-10 relative z-10 sm:text-center">
        <h1 className="text-3xl sm:text-6xl text-gn font-extrabold leading-tight">
          {subService.title}
        </h1>
        {subService.heroText && (
          <p className="text-lg sm:text-xl font-bold">
            {subService.heroText}
          </p>
        )}
        <p className="text-sm sm:text-base">
          {subService.summary}
        </p>
      </div>
      <div className="relative h-96 w-full sm:w-[90%] m-auto rounded-3xl">
        <Image
          src={subService.image} // Using the specific image for the sub-service
          alt={subService.title}
          fill
          className="z-0 object-cover rounded-3xl"
        />
      </div>
    </section>
  );
};

export default SubServiceHeroSection;
