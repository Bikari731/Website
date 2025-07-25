import OurServicesCard from '../components/OurServicesCard';
import { mainServiceCards } from '../data/main-services';
import { ourServicesContent } from '../data/home';
import CTAButton from '../components/CTAButton';
import AnimateInView from '../components/Animate';

const OurServices = () => {
  const services = mainServiceCards.slice(5, 10);
  const { heading, subheading, buttons, icon } = ourServicesContent;

  return (
    <section className="w-full bg-black bg-opacity-90 py-16 px-4 overflow-x-hidden">
      <div className="max-w-6xl mx-auto flex flex-col gap-10 ">

        {/* Header Section */}
        <AnimateInView direction="up">
          <div className="text-center flex flex-col gap-4">
            <h1 className="text-5xl font-bold text-white ">{heading}</h1>
            <div className="w-24 h-1 bg-rd mx-auto"></div>
            <p className="text-lg text-white max-w-3xl mx-auto">
              {subheading}
            </p>

            <div className="flex flex-wrap justify-start xs:justify-center gap-4 pt-4">
              <CTAButton label={buttons.viewAll} href="/services" icon={icon} type="primary" />
              <CTAButton label={buttons.applyOnline} href="/apply-online" icon={icon} type="primary" />
            </div>
          </div>
        </AnimateInView>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 justify-items-center ">
          {services.map((service, i) => (
            <AnimateInView key={service.id} direction="up" delay={i * 0.1}>
              <OurServicesCard service={service} />
            </AnimateInView>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;
