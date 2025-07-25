'use client';

import { motion, Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect, useState, type ReactNode } from 'react';

interface AnimateInViewProps {
  children: ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right';
  duration?: number;
  delay?: number;
  className?: string;
  triggerOnce?: boolean; // <--- NEW PROP
}

export default function AnimateInView({
  children,
  direction = 'up',
  duration = 0.8,
  delay = 0,
  className = '',
  triggerOnce = true, // <--- DEFAULT VALUE
}: AnimateInViewProps) {
  const [ref, inView] = useInView({
    triggerOnce,
    threshold: 0.2,
  });

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Tailwind's md breakpoint
    };

    handleResize(); // Set on mount
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const adjustedDirection =
    isMobile && (direction === 'up' || direction === 'down') ? 'none' : direction;

  const variants: Variants = {
    hidden: {
      opacity: 0,
      x: adjustedDirection === 'left' ? -50 : adjustedDirection === 'right' ? 50 : 0,
      y: adjustedDirection === 'up' ? 50 : adjustedDirection === 'down' ? -50 : 0,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration,
        delay,
        ease: 'easeOut',
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={variants}
    >
      {children}
    </motion.div>
  );
}
