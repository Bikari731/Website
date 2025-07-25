import Link from 'next/link';
import React from 'react';
import { FaWhatsapp, FaEnvelope, FaPhone } from 'react-icons/fa6';
import { contactContent } from '../../data/contacts';
import { MdLocationOn } from 'react-icons/md';
import AnimateInView from '@/app/components/Animate';
import CTAButton from '@/app/components/CTAButton';

const ContactUsSection = () => {

  return (
    <section className="m-2 lg:m-10 xl:m-20">
      <div className="flex flex-col lg:flex-row justify-center bg-white shadow-2xl overflow-hidden">
        {/* Left Section */}
        <AnimateInView direction='left' className="bg-gre text-white p-8 relative flex-1">
          <h2 className="text-lg text-white font-bold border-b-[3px] w-fit border-white uppercase tracking-widest mb-8">
            {contactContent.visitUs.heading.split(' ')[0]}{' '}
            <span className="text-rd">{contactContent.visitUs.heading.split(' ')[1]}</span>
          </h2>

          <div className='flex flex-col md:flex-row lg:flex-col xl:flex-row items-center xs:items-start md:items-center lg:items-start justify-between w-full'>
            <div className='flex flex-col items-start justify-center'>
              <div className="mb-10">
                <h3 className="text-xl font-bold mb-4">{contactContent.visitUs.officeAddress.title}</h3>
                <p className="flex items-start gap-2">
                  <MdLocationOn className="mt-1" />
                  <Link
                    href={contactContent.visitUs.officeAddress.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    {contactContent.visitUs.officeAddress.lines.map((line, idx) => (
                      <React.Fragment key={idx}>
                        {line}
                        <br />
                      </React.Fragment>
                    ))}
                  </Link>
                </p>
              </div>

              <div className="mb-10">
                <h3 className="text-xl font-bold mb-4">{contactContent.visitUs.officeTiming.title}</h3>
                <p className="text-sm leading-relaxed">
                  {contactContent.visitUs.officeTiming.lines.map((line, i) => (
                    <span key={i}>{line}<br /></span>
                  ))}
                </p>
              </div>
            </div>

            <div className="relative h-60 w-60 rounded-lg overflow-hidden mb-10 shadow-lg border-2 border-green-500">
              <iframe
                src={contactContent.visitUs.mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Office Location Map"
              ></iframe>
            </div>
          </div>

          <div className="space-y-6 mb-10">
            <h3 className="text-lg border-b-[3px] w-fit border-white font-bold text-white uppercase tracking-widest">
              {contactContent.contactUs.heading.split(' ')[0]}{' '}
              <span className="text-rd">{contactContent.contactUs.heading.split(' ')[1]}</span>
            </h3>

            <div className='flex flex-col md:flex-row lg:flex-col xl:flex-row gap-10 xl:gap-0 items-center xs:items-start lg:items-start justify-between'>
              <div className='flex flex-col items-start justify-center gap-4'>
                <Link href={contactContent.contactUs.email.link} className="flex items-center gap-4 text-white hover:underline group">
                  <FaEnvelope />
                  {contactContent.contactUs.email.label}
                </Link>
                <Link href={contactContent.contactUs.phone.link} className="flex items-center text-white hover:underline group gap-4">
                  <FaPhone />
                  {contactContent.contactUs.phone.label}
                </Link>
              </div>
              <CTAButton href={contactContent.contactUs.whatsapplink} icon={FaWhatsapp} type='secondary' label={contactContent.contactUs.whatsapp}/>
            </div>
          </div>
        </AnimateInView>

        {/* Right Section */}
        <AnimateInView direction='right' className="p-8 bg-gray-50 flex flex-col justify-start relative flex-1 min-h-[600px] no-scrollbar">
          <h3 className="text font-bold border-b-[3px] border-rd w-fit uppercase tracking-widest mb-8 text-center lg:text-left">
            <span className='text-rd'>{contactContent.messageForm.heading.split(' / ')[0]}</span> / <span className='text-gre'>{contactContent.messageForm.heading.split(' / ')[1]}</span>
          </h3>
          <iframe
            src={contactContent.formURL}
            className="absolute top-20 left-0 w-[120%] xl:scale-1 min-h-[800px] scale-[80%] origin-top-left border-0"
            style={{ transformOrigin: 'top left' }}
          ></iframe>
        </AnimateInView>
      </div>
    </section>
  );
};

export default ContactUsSection;
