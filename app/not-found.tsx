import { FaArrowRight } from 'react-icons/fa';
import CTAButton from './components/CTAButton';

export default function NotFound() {
  return (
    <div className="min-h-[55vh] flex flex-col justify-center items-center text-center p-6 bg-white text-gray-800">
      <h1 className="text-5xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="text-lg mb-6">
        Sorry, the page you’re looking for doesn’t exist or has been moved.
      </p>
      <CTAButton href='/' label='Go to Homepage' icon={FaArrowRight} />
    </div>
  );
}
