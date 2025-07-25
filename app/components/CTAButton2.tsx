// components/CTAButton.tsx
import Link from 'next/link';
import React from 'react';

interface CTAButtonProps {
  href: string;
  label: string;
  icon?: React.ElementType;
  external?: boolean;
}

export default function CTAButton2({
  href,
  label,
  icon,
  external = false,
}: CTAButtonProps) {
  const isExternal = external || href.startsWith('http');

  return (
    <Link href={href}  target={isExternal ? '_blank' : '_self'} rel={isExternal ? 'noopener noreferrer' : undefined} className="inline-block pb-1 text-gn transition-colors duration-300">
        <span className='flex items-center text-sm gap-1 pl-1'>
            {label} 
            {icon && React.createElement(icon)}
        </span>
        <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gn transition-all duration-500 group-hover:w-full"></span>
    </Link>
  );
}
