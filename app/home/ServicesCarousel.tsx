'use client';

import Image from 'next/image';
import Link from 'next/link';
import { mainServiceCards } from '../data/main-services';
import Marquee from 'react-fast-marquee';

const cardDesigns = [
  {
    mainBg: 'bg-white bg-opacity-20 backdrop-blur-sm',
    iconBg: 'bg-white bg-opacity-20 backdrop-blur-sm',
    titleColor: 'text-white uppercase',
    border: 'border-gn',
    hoverEffect: 'hover:shadow-lg hover:scale-[1.01]',
  },
  {
    mainBg: 'bg-white bg-opacity-20 backdrop-blur-sm',
    iconBg: 'bg-white bg-opacity-20 backdrop-blur-sm',
    titleColor: 'text-white uppercase',
    border: 'border-gn',
    hoverEffect: 'hover:shadow-lg hover:scale-[1.01]',
  },
  {
    mainBg: 'bg-white bg-opacity-20 backdrop-blur-sm',
    iconBg: 'bg-white bg-opacity-20 backdrop-blur-sm',
    titleColor: 'text-white uppercase font-bold',
    border: 'border-gn',
    hoverEffect: 'hover:shadow-lg hover:scale-[1.01]',
  },
];

const CARD_SIZE = { width: 140, height: 140 };

const ServicesCarousel = () => {
  return (
    <Marquee
      gradient={false}
      speed={50}
      pauseOnHover={true}
      direction="left"
      className="py-8 relative overflow-hidden"
    >
      <div id="services-carousel" className="flex gap-4 px-4 xl:px-24">
        {mainServiceCards.map((service, index) => {
          const design = cardDesigns[index % cardDesigns.length];
          return (
            <Link
              key={service.id}
              href={`/services/${service.slug}`}
              data-aos="fade-right"
              data-aos-delay={index * 50}
              style={{ width: `${CARD_SIZE.width}px`, height: `${CARD_SIZE.height}px` }}
              className={`flex-shrink-0 rounded-xl ${design.border} border-2 ${design.mainBg} ${design.hoverEffect} shadow-md transition-all duration-300 ease-in-out overflow-hidden relative group cursor-pointer`}
              aria-label={`View details for ${service.title}`}
            >
              <div className={`h-2/3 ${design.iconBg} flex items-center justify-center p-2 group-hover:p-1`}>
                <div className="relative w-full h-full group-hover:scale-105 transition-transform duration-300">
                  <Image
                    src={service.icon}
                    alt={service.title}
                    fill
                    sizes={`${CARD_SIZE.width}px`}
                    className="object-contain"
                  />
                </div>
              </div>
              <div className={`h-1/3 ${design.mainBg} flex flex-col justify-center items-center px-1 py-0.5`}>
                <h3 className={`text-xs font-semibold ${design.titleColor} text-center leading-tight`}>
                  {service.title}
                </h3>
              </div>
            </Link>
          );
        })}
      </div>
    </Marquee>
  );
};

export default ServicesCarousel;
