import Image from "next/image";
import { heroContent } from "../../data/blogs";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] bg-black text-white overflow-hidden">
      <Image
        src={heroContent.image}
        alt="Dubai Skyline"
        fill
        className="object-cover object-center opacity-30"
        priority
      />

      <div className="absolute inset-0 flex items-center justify-center md:text-center px-6">
        <div className="animate-fadeInUp"> {/* Animation added here */}
          <h1 className="text-4xl sm:text-6xl font-extrabold leading-snug">
            {heroContent.title}
          </h1>
          <p className="mt-4 text-lg sm:text-2xl">
            {heroContent.subtitle}
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
