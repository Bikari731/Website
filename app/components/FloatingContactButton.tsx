import Link from 'next/link';
import { FaWhatsapp } from 'react-icons/fa6';

export default function FloatingContactButton() {
  return (
    <Link
      href="https://wa.me/+971501113815"
      target='_blank'
      className="fixed bottom-52 right-6 z-[9999] hover:bg-white text-white p-1 rounded-full hover:shadow-2xl transition duration-300 border-2 border-white"
      aria-label="Call Us"
    >
      <div className='bg-gn rounded-full p-3'>
        <FaWhatsapp className="text-xl" />
      </div>
    </Link>
  );
}


