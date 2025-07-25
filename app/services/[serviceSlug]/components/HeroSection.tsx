// components/ServiceHeroSection.tsx
import React from 'react';
import Image from 'next/image';
import { Service } from '../../../interface/service';
import { FaRegEdit, FaWhatsapp } from 'react-icons/fa';
import CTAButton from '@/app/components/CTAButton';

interface ServiceHeroProps {
  service: Service;
}

const ServiceHeroSection: React.FC<ServiceHeroProps> = ({ service }) => {
  return (
    <section className= "flex flex-col md:flex-row justify-center mt-5 lg:px-32 text-black">
      <div className="flex flex-col gap-5">
        <div className='flex items-center justify-start'>
          <div className='relative w-20 h-[100px] md:w-40 md:h-[200px]'>
            <Image
              src={service.imageUrl}
              alt={service.imageAlt}
              fill
              className="object-contain "
            />
          </div>
          <h1 className="text-3xl md:text-6xl ml-2 font-extrabold">
            {service.title}
          </h1>
        </div>
        <p className="text-sm md:text-lg font-medium px-4">
          {service.heroExcerpt}
        </p>
        <p className="text-sm md:text-lg px-4">
          {service.description}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 px-4">
            <CTAButton href='/apply-online' label='Apply Online' icon={FaRegEdit}/>
            <CTAButton href='https://wa.me/+971563032309' label='Contact Us' icon={FaWhatsapp}/>
          </div>
      </div>
    </section>
  );
};

export default ServiceHeroSection;