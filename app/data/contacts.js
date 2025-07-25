import {
  FaMapMarkerAlt,
  FaWhatsapp,
  FaLinkedinIn,
  FaPhoneAlt,
  FaEnvelope,
} from 'react-icons/fa';

export const contactInfo = [
  {
    icon: FaMapMarkerAlt,
    url: "https://maps.app.goo.gl/QaEWd9by2kYYYs6M9",
  },
  {
    icon: FaLinkedinIn,
    url: "https://www.linkedin.com/",
  },
  {
    icon: FaWhatsapp,
    url: "https://wa.me/+971501113815",
  },
  {
    icon: FaEnvelope,
    url: "mailto:buharionlineservices@gmail.com",
    text: "buharionlineservices@gmail.com",
  },
  {
    icon: FaPhoneAlt,
    url: "tel:+971501113815",
    text: "+971 501113815",
  }
];

export const heroContent = {
  title: "We’re Here to Help — Reach Out Anytime",
  subtitle: "Have questions or need help with a service? Our team is here to assist you — online, by phone, or in person.",
  image: "/contact/hero.webp",
};

export const contactContent = {
  visitUs: {
    heading: 'Visit Us',
    officeAddress: {
      title: 'Office Address:',
      lines: [
        'Expo Road 77, Enoc 24',
        'Jabel Ali Industrial Area',
        'Jafza, Dubai',
        'United Arab Emirates'
      ],
      link: "https://maps.app.goo.gl/QaEWd9by2kYYYs6M9"
    },
    officeTiming: {
      title: 'Office Timing:',
      lines: [
        'Sunday – Thursday: 9 AM to 6 PM',
        'Friday: 9 AM to 12 PM',
        'Saturday: Closed',
      ]
    },
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d233.98680022950794!2d55.108569257291684!3d24.984567128002404!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f0d6236eb1e51%3A0x30cc65aa66ea553d!2sENOC%20%7C%2024%20%7C%20JAFZA!5e0!3m2!1sen!2ssa!4v1753298980689!5m2!1sen!2ssa',
  },
  contactUs: {
    heading: 'Contact Us',
    email: {
      label: 'buharionlineservices@gmail.com',
      link: 'mailto:buharionlineservices@gmail.com'
    },
    phone: {
      label: '+971 50 111 3815',
      link: 'tel:+971501113815'
    },
    whatsapp: 'Message Us',
    whatsapplink: 'https://wa.me/+971501113815'
  },
  messageForm: {
    heading: 'Message / Enquiry',
    inputs: {
      fullName: 'Enter Full Name',
      mobileNumber: 'Enter Mobile Number',
      email: 'Enter Email',
      message: 'Write your message or inquiry here...',
      submit: 'Submit Message'
    }
  },
  formURL: 'https://amer.zeyora.app/crm/forms/wtl/ad758fb8b4af5046304a48f38702a62e'
};

// // Before: import { ..., FaGlobe } from 'react-icons/fa';
// // Add specific icons from react-icons/fa to match what you use in HeaderContacts
// import {
//   FaMapMarkerAlt,
//   FaWhatsapp,
//   FaLinkedinIn,
//   FaPhoneAlt,
//   FaEnvelope,
//   FaGlobe,
// } from 'react-icons/fa';

// export const contactInfo = (lang) => [
//   {
//     icon: FaMapMarkerAlt,
//     url: "https://maps.app.goo.gl/YourActualGoogleMapsLinkHere", // Replace with actual Google Maps link
//     text: { en: "Location", ar: "الموقع" },
//     ariaLabel: { en: "Our Location on Map", ar: "موقعنا على الخريطة" },
//   },
//   {
//     icon: FaLinkedinIn,
//     url: "https://www.linkedin.com/company/amer-tasheel-services", // Replace with actual LinkedIn profile
//     text: { en: "LinkedIn", ar: "لينكد إن" },
//     ariaLabel: { en: "Amer and Tasheel Services LinkedIn Profile", ar: "ملف شركة عامر وتسهيل للخدمات على لينكد إن" },
//   },
//   {
//     icon: FaWhatsapp,
//     url: "https://wa.me/+971563032309",
//     text: { en: "WhatsApp", ar: "واتساب" },
//     ariaLabel: { en: "Message us on WhatsApp", ar: "راسلنا على واتساب" },
//   },
//   {
//     icon: FaEnvelope,
//     url: "mailto:amerandtasheel@gmail.com",
//     text: { en: "Email", ar: "البريد الإلكتروني" },
//     ariaLabel: { en: "Email Amer and Tasheel Services", ar: "البريد الإلكتروني لخدمات عامر وتسهيل" },
//   },
//   {
//     icon: FaPhoneAlt,
//     url: "tel:+971563032309",
//     text: { en: "+971 563032309", ar: "+٩٧١ ٥٦ ٣٠٣ ٢٣٠٩" }, // Localize numbers if preferred
//     ariaLabel: { en: "Call Amer and Tasheel Services", ar: "اتصل بخدمات عامر وتسهيل" },
//   },
//   // The separator and language toggle should be handled outside the map for better control
//   // { text: "|", className: "mx-1" }, // Removed from here
//   // {
//   //   icon: FaGlobe,
//   //   text: { en: "العربية", ar: "English" }, // This will be the language toggle
//   //   id: "language-toggle", // Add a unique ID for the language toggle
//   // },
// ];

// // Note: For the actual language toggle in the header,
// // you'll likely want a separate component or logic
// // that manages the `lang` state and then renders the `FaGlobe` icon
// // with the appropriate text (e.g., "العربية" when in English, "English" when in Arabic).
