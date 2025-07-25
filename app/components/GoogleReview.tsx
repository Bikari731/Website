import Link from 'next/link';
import { FaStar, FaStarHalf } from 'react-icons/fa';
import { FaGoogle } from 'react-icons/fa6';

export default function FloatingContactButton() {
  return (
    <Link
      href="https://g.page/r/CRlpBVjSi-wJEBM/review"
      className="fixed bottom-24 right-6 z-[9999] hover:bg-white text-white border-2 border-white p-1 rounded-full shadow-2xl flex flex-col-reverse justify-center items-center group "
      aria-label="Review Us"
      target='_blank'
      rel="noopener noreferrer"
    >
      <div className='bg-gn rounded-full p-3'>
        <FaGoogle className="text-xl" />
      </div>
      <div>
          <div className='text-yellow-500 m-2 text-xl flex-col-reverse hidden group-hover:flex'><FaStar/><FaStar/><FaStar/><FaStar/><FaStarHalf/></div>
      </div>
    </Link>
  );
}


