import Image from 'next/image';
import { aboutUsContent } from '../data/home';
import CTAButton from '../components/CTAButton';
import AnimateInView from '../components/Animate';

const AboutUs = () => {
  const { heading, description, buttonText, image, icon } = aboutUsContent;

  return (
    <section className="bg-white flex items-center px-4 xl:mx-20 overflow-x-hidden py-24 pt-30">
      <div className="grid lg:grid-cols-2 gap-12 items-center w-full">

        {/* IMAGE */}
        <AnimateInView direction="left">
          <div className="md:mt-20 lg:mt-0 rounded-2xl overflow-hidden shadow-lg order-1 relative h-[400px]">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes='(min-width: 1024px) 60vw, 100vw'
              className="w-full h-full object-cover"
              priority
            />
          </div>
        </AnimateInView>

        {/* RIGHT CONTENT */}
        <AnimateInView direction="right">
          <div
            className=""
          >
            <h1 className="text-6xl font-extrabold leading-tight ">
              <span className="text-rd">{heading.title}</span>{' '}
              <span className="text-gn">{heading.highlight}</span>
            </h1>
            <h2 className="text-3xl font-semibold text-black">{heading.subtitle}</h2>
            <div className="border-t-4 border-gn w-20 my-4"></div>
            <p className="text-gray-700 mt-2 text-sm lg:text-lg leading-relaxed">{description}</p>
            <CTAButton label={buttonText} href="/about" icon={icon} type="primary" className='mt-4' />
          </div>
        </AnimateInView>
        
      </div>
    </section>
  );
};

export default AboutUs;
