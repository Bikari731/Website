'use client';
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { heroSlidesContent } from '../data/home';
import CTAButton from '../components/CTAButton';
import AnimateInView from '../components/Animate';
import ServicesCarousel from './ServicesCarousel';

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef<HTMLDivElement | null>(null);

  const scrollToIndex = useCallback((index: number) => {
    if (sliderRef.current) {
      sliderRef.current.scrollTo({
        left: index * sliderRef.current.clientWidth,
        behavior: 'smooth',
      });
    }
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const newIndex =
        currentIndex === heroSlidesContent.length - 1 ? 0 : currentIndex + 1;
      scrollToIndex(newIndex);
    }, 4000);
    return () => clearInterval(interval);
  }, [currentIndex, scrollToIndex]);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const handleScroll = () => {
      const index = Math.round(slider.scrollLeft / slider.clientWidth);
      if (index !== currentIndex) setCurrentIndex(index);
    };

    slider.addEventListener('scroll', handleScroll, { passive: true });
    return () => slider.removeEventListener('scroll', handleScroll);
  }, [currentIndex]);

  return (
    <div className="relative w-full h-[82vh] overflow-hidden">
      {/* Hero Slider */}
      <div
        ref={sliderRef}
        className="flex h-full overflow-x-auto scroll-smooth no-scrollbar"
        style={{ scrollSnapType: 'x mandatory' }}
      >
        {heroSlidesContent.map((slide, index) => (
          <div
            key={index}
            className="relative flex-shrink-0 min-w-full h-full snap-start overflow-hidden"
          >
            {/* Background Image Zoom Effect */}
            <div
              className="absolute inset-0 z-0 pointer-events-none will-change-transform transition-transform duration-[4000ms] ease-in-out bg-center bg-cover"
              style={{
                backgroundImage: `url(${slide.src})`,
                transform: currentIndex === index ? 'scale(1.1)' : 'scale(1)',
              }}
              aria-hidden="true"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black opacity-60 z-10" />

            {/* Text & Buttons */}
            <div className="absolute inset-0 z-20 flex flex-col gap-3 text-white md:w-[80%] lg:w-[60%] px-5 leading-relaxed md:px-6 mx-auto my-10">
              <AnimateInView direction="down" duration={1} delay={0.1} triggerOnce={false}>
                <h1 className="text-4xl sm:text-6xl font-bold">
                  {slide.heading}
                </h1>
              </AnimateInView>

              <AnimateInView direction="down" duration={1} delay={0.3} triggerOnce={false}>
                <p className="text-xl">{slide.subheading}</p>
              </AnimateInView>

              <AnimateInView direction="up" duration={1} delay={0.5} triggerOnce={false}>
                <div className="flex flex-col md:flex-row md:items-center justify-start gap-2">
                  {slide.buttons.map((btn, i) => (
                    <CTAButton
                      key={i}
                      label={btn.label}
                      href={btn.link}
                      icon={btn.icon}
                      type="primary"
                    />
                  ))}
                </div>
              </AnimateInView>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Dots */}
      <div className="absolute top-16 right-0 transform -translate-x-1/2 flex gap-2 z-30">
        {heroSlidesContent.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollToIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentIndex === index ? 'bg-white scale-110' : 'bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Carousel fixed at bottom */}
      <div className="absolute bottom-0 left-0 w-full z-40">
        <ServicesCarousel />
      </div>
    </div>
  );
};

export default HeroSection;
