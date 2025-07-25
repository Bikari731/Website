import React from 'react';
import Image from 'next/image';
import { applyOnlineContent } from '../../data/applyonline';
import AnimateInView from '@/app/components/Animate';

const ApplyOnlineForm = () => {
  const { heading, description, label, image, formUrl } = applyOnlineContent;

  return (
    <section className='flex flex-col lg:flex-row justify-center m-2 lg:m-10 xl:m-20'>
      
      {/* Left Panel */}
      <AnimateInView direction='left'
        className="relative p-4 lg:p-16 flex flex-col justify-center bg-black rounded-3xl w-full min-h-[500px] overflow-hidden"
      >
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes='100vw'
          priority // ✅ keep hero image as priority
          className="absolute object-cover object-center inset-0 opacity-30 rounded-3xl"
        />
        <div className='relative z-10 p-6 lg:p-0'>
          <h2 className="text-3xl lg:text-5xl md:text-6xl font-extrabold mb-6 leading-loose text-white drop-shadow-md">
            {heading.map((line, idx) => (
              <span key={idx} className={`${line.className} block`}>
                {line.text}
              </span>
            ))}
          </h2>
          <p className="md:text-2xl font-semibold text-white drop-shadow-md max-w-3xl">
            {description}
          </p>
        </div>
      </AnimateInView>

      {/* Right Panel */}
      <AnimateInView direction='right' className="w-full mt-10 min-h-[650px]" data-aos="fade-left">
        <p className='text-rd text-xs lg:text-lg font-bold border-b-[3px] border-rd w-fit ml-10 mb-6'>
          {label.main} <span className='text-gn'>{label.highlight}</span>
        </p>
        <div className="relative">
          <iframe
            title="Apply Online Form"
            src={formUrl}
            className="absolute top-0 left-0 w-[120%] xl:scale-1 min-h-[800px] scale-[80%] origin-top-left border-0"
            style={{ transformOrigin: 'top left' }}
          ></iframe>
        </div>
      </AnimateInView>
    </section>
  );
};

export default ApplyOnlineForm;
