import { FaChevronRight, FaRegEdit, FaWhatsapp } from 'react-icons/fa';

export const heroSlidesContent = [
  {
    src: '/home/Hero2.webp',
    heading: 'Popular Visas Made Simple: Family, Employment and Tourist.',
    subheading: 'Apply for the UAE’s most sought-after visas with confidence and expert support from our team.',
    buttons: [
      {
        label: 'Family Visa',
        variant: 'primary',
        icon: FaChevronRight,
        link: '/services/amer-services/family-visa'
      },
      {
        label: 'Employment Visa',
        variant: 'whatsapp',
        icon: FaChevronRight,
        link: '/services/amer-services/employment-visa'
      },
      {
        label: 'Tourist Visa',
        variant: 'whatsapp',
        icon: FaChevronRight,
        link: '/services/amer-services/employment-visa'
      }
    ],
  },
  {
    src: '/home/Hero3.webp',
    heading: 'Your One-Stop Destination for All Government Services.',
    subheading: 'From visa applications to labor contracts, get all your government services handled hassle-free.',
    buttons: [
      {
        label: 'Apply Online',
        variant: 'primary',
        icon: FaRegEdit,
        link: '/apply-online'
      },
      {
        label: 'Contact Us',
        variant: 'whatsapp',
        icon: FaWhatsapp,
        link: 'https://wa.me/+971563032309'
      },
    ],
  },
  {
    src: '/home/Hero1.webp',
    heading: 'Golden Visa – For Professionals, Investors & Families',
    subheading: '10-Year UAE Residency | Fast-Tracked Application | 100% Expert Support',
    buttons: [
      {
        label: 'Know More',
        variant: 'primary',
        icon: FaChevronRight,
        link: '/services/amer-services/golden-visa'
      },
      {
        label: 'Apply Now',
        variant: 'whatsapp',
        icon: FaChevronRight,
        link: '/apply-online'
      }
    ],
  },
  {
    src: '/home/Hero4.webp',
    heading: 'Official Dubai & UAE Services, Delivered with Pride.',
    subheading: 'We handle the paperwork — you focus on your future. Trusted for visas, labor, Emirates ID & more.',
    buttons: [
      {
        label: 'Amer Services',
        variant: 'primary',
        icon: FaChevronRight,
        link: '/services/amer-services'
      },
      {
        label: 'Tas-heel Services',
        variant: 'whatsapp',
        icon: FaChevronRight,
        link: '/services/tasheel-services'
      },
      {
        label: 'Other Services',
        variant: 'whatsapp',
        icon: FaChevronRight,
        link: '/services'
      }
    ],
  },
  {
    src: '/home/Hero5.webp',
    heading: 'Business Setup in UAE – Start Your Dream Startup',
    subheading: 'Mainland & Freezone | 100% Ownership | Expert PRO & Legal Support',
    buttons: [
      {
        label: 'Know More',
        variant: 'primary',
        icon: FaChevronRight,
        link: '/services/business-setup'
      },
      {
        label: 'Apply Now',
        variant: 'whatsapp',
        icon: FaChevronRight,
        link: '/apply-online'
      }
    ],
  },
];

export const aboutUsContent = {
  heading: {
    title: "Fast.",
    highlight: "Simple.",
    subtitle: "Government Services Simplified."
  },
  description: `We assist individuals and businesses with a full range of UAE government services — starting with the Golden Visa, Family Visa, Employment Visa, and extending to all visa-related processes, Emirates ID Registration, Medical Services, PRO Services, and more. Whether you're securing long-term residency, setting up a company, or managing official paperwork, our team ensures smooth, error-free processing — every step of the way.`,
  buttonText: "Know More",
  icon: FaChevronRight,
  image: {
    src: "/home/about.webp",
    alt: "Government services"
  }
};

export const goldenVisaData = {
  title: "UAE Golden Visa",
  button: {
    learnmore: 'Learn More',
    applynow: 'Apply Now',
  },
  description:
    "Secure long-term residency in the UAE with the prestigious Golden Visa — ideal for investors, professionals, entrepreneurs, and exceptional talents.",
  benefits: [
    "10-year residency",
    "Available for investors, professionals, and entrepreneurs",
    "Family sponsorship included",
  ],
  link: "/visa/golden-visa",
  image: "/home/golden-visa.webp",
  icon: FaChevronRight
};

export const blogSectionContent = {
  headingParts: [
    { text: 'Helpful ', className: '' },
    { text: 'Insights', className: 'text-gn' },
    { text: ' & ', className: '' },
    { text: 'Updates', className: 'text-rd' }
  ],
  subheading: 'Stay informed with tips, updates, and guides on UAE government processes.',
  cta: {
    text: 'Learn More',
    href: '/blogs'
  }
};

export const whyUsSectionContent = {
  intro: 'Why Choose Us?',
  headingParts: [
    { text: 'Smart', className: 'text-rd' },
    { text: ', ' },
    { text: 'Fast', className: 'text-gn' },
    { text: ', and Reliable — That’s Our Promise' }
  ],
  subheading: 'Trusted by professionals, families, and businesses across the UAE.',
  icon: FaChevronRight,
  button: {
    label: 'Know More',
    href: '/about'
  }
};

export const ourServicesContent = {
  heading: 'Our Services',
  subheading:
    'We provide complete government support services in the Dubai and UAE — from visa applications and Emirates ID to business setup and legal documentation.',
  buttons: {
    viewAll: 'View All Services',
    applyOnline: 'Apply Online',
  },
  icon: FaChevronRight,
  ariaLabels: {
    viewAll: 'Browse all available services',
    applyOnline: 'Apply for services online',
  },
};
