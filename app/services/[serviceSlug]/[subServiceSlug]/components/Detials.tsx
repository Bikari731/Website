import React from 'react';
import { SubServiceDetail, ContentParagraph, ContentHeading, ContentHeadingWithList } from '../../../../interface/service';
import { FaRegEdit, FaWhatsapp } from 'react-icons/fa';
import AnimateInView from '@/app/components/Animate';
import CTAButton from '@/app/components/CTAButton';

interface SubServiceDetailsProps {
  subService: SubServiceDetail;
}

const SubServiceDetails: React.FC<SubServiceDetailsProps> = ({ subService }) => {
  const renderContent = () => {
    return subService.content.map((block, index) => {
      if ('paragraph' in block && !('heading' in block)) {
        const paragraphBlock = block as ContentParagraph;
        return (
          <AnimateInView
            key={index}
            direction="up"
            duration={0.6}
            className="mb-4"
          >
            <p dangerouslySetInnerHTML={{ __html: paragraphBlock.paragraph }} />
          </AnimateInView>
        );
      } else if ('heading' in block && 'list' in block) {
        const listBlock = block as ContentHeadingWithList;
        return (
          <AnimateInView
            key={index}
            direction="up"
            duration={0.7}
            className="mb-8"
          >
            <h3 className="text-2xl font-bold text-darkGray mt-8 mb-4">{listBlock.heading}</h3>
            {listBlock.paragraph && <p className="mb-4" dangerouslySetInnerHTML={{ __html: listBlock.paragraph }} />}
            {listBlock.list && (
              <ul className="list-disc list-inside ml-4 mt-2 text-mediumGray">
                {listBlock.list.map((item, liIndex) => (
                  <li key={liIndex} className="mb-2">
                    <strong>{item.text}</strong> {item.description}
                  </li>
                ))}
              </ul>
            )}
          </AnimateInView>
        );
      } else if ('heading' in block) {
        const headingBlock = block as ContentHeading;
        return (
          <AnimateInView
            key={index}
            direction="up"
            duration={0.7}
            className="mb-8"
          >
            <h3 className="text-2xl font-bold text-darkGray mt-8 mb-4">{headingBlock.heading}</h3>
            {headingBlock.paragraph && <p className="mb-4" dangerouslySetInnerHTML={{ __html: headingBlock.paragraph }} />}
          </AnimateInView>
        );
      }
      return null;
    });
  };

  return (
    <div className="bg-white py-10 sm:px-12 md:px-14">
      <h2>{subService.description}</h2>
      {/* Dynamic Service Types */}
      {subService.serviceTypes && subService.serviceTypes.length > 0 && (
        <AnimateInView direction="up" duration={0.7} className="mt-6">
          <h4 className="text-xl font-semibold text-darkGray mb-6">Service Types:</h4>
          <div className="flex flex-col gap-6 border-l-2 border-primaryRed pl-4">
            {subService.serviceTypes.map((type, index) => (
              <div key={index}>
                <h5 className="text-lg font-bold text-darkGray mb-1">{type.type}</h5>
                <p className="text-sm text-mediumGray leading-relaxed">{type.description}</p>
              </div>
            ))}
          </div>
        </AnimateInView>
      )}

      {renderContent()}

      {/* Call to Action at the bottom */}
      <AnimateInView direction="up" duration={0.7} className="flex flex-col sm:flex-row gap-4 pt-4">
        <CTAButton href='/apply-online' label='Apply Online' icon={FaRegEdit}/>
        <CTAButton href='https://wa.me/+971563032309' label='Apply Online' icon={FaWhatsapp}/>
      </AnimateInView>
    </div>
  );
};

export default SubServiceDetails;
