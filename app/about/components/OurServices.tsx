// app/components/OurServices.tsx
import OurServicesCard from '@/app/components/OurServicesCard';
import { mainServiceCards } from '@/app/data/main-services';
import { ourServicesContent } from '@/app/data/home';
import CTAButton from '@/app/components/CTAButton';
import AnimateInView from '@/app/components/Animate';

export default function OurServices() {
  const { heading, subheading, buttons, icon } = ourServicesContent;
  const selectedService = mainServiceCards.slice(0, 5);

  return (
    <section className="w-full bg-white py-16 px-4" aria-labelledby="our-services-heading">
      <div className="max-w-6xl mx-auto flex flex-col gap-10">
        
        {/* Header Section */}
        <AnimateInView direction="up">
          <div className="flex flex-col gap-4">
            <h1 id="our-services-heading" className="text-5xl font-bold text-gray-800 ">{heading}</h1>
            <div className="w-24 h-1 bg-rd" aria-hidden="true"></div>
            <p className="text-lg text-gray-600 max-w-3xl">{subheading}</p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <CTAButton label={buttons.viewAll} href="/services" icon={icon} type="primary" />
              <CTAButton label={buttons.applyOnline} href="/apply-online" icon={icon} type="primary" />
            </div>
          </div>
        </AnimateInView>

        {/* Services Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 justify-items-center " role="list">
          {selectedService.map((service, index) => (
            <AnimateInView key={service.id} direction="up" delay={index * 0.1}>
              <div role="listitem" className="w-full">
                <OurServicesCard service={service} />
              </div>
            </AnimateInView>
          ))}
        </div>
      </div>
    </section>
  );
}
