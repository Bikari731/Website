import Link from 'next/link';
import React from 'react';

interface CTAButtonProps {
  href: string;
  label: string;
  icon?: React.ElementType;
  type?: 'primary' | 'secondary' | 'golden';
  external?: boolean;
  className?: string;
}

export default function CTAButton({
  href,
  label,
  icon,
  type = 'primary',
  external = false,
  className = '',
}: CTAButtonProps) {
  const isExternal = external || href.startsWith('http');

  const baseStyles =
    'relative flex overflow-hidden justify-center items-center font-bold px-4 py-2 rounded-lg group transition-all duration-300 w-[200px] text-center text-sm';
  const primaryStyles =
    'bg-gn text-white border-2 border-gn hover:bg-white hover:text-gn';
  const secondaryStyles =
    'bg-white text-gre border-2 border-gre hover:bg-gre hover:text-white border-2 hover:border-white';
  const goldenStyles =
    'bg-[#ad813c] text-white border-2 border-[#bb7e34] hover:bg-white hover:text-[#bb7e34]'
  

  const primarySpan = 'bg-white';
  const secondarySpan = 'bg-gn text-gre';
  const goldenSpan = 'bg-white' 

  const mergedStyles = `${baseStyles} ${type === 'primary' ? `${primaryStyles}` :
    type === 'secondary' ? `${secondaryStyles}` :
    type === 'golden' ? `${goldenStyles}` : ''} ${className}`;

  return (
    <Link href={href} target={isExternal ? '_blank' : '_self'} rel={isExternal ? 'noopener noreferrer' : undefined} className={mergedStyles}>
      <span className="relative z-10 flex items-center gap-1 group-hover:text-inherit">
        {label}
        {icon && React.createElement(icon)}
      </span>
      <span className={`absolute rounded-lg left-0 top-0 w-0 h-full z-0 transition-all duration-300 group-hover:w-full ${type === 'primary' ? `${primarySpan}` : type === 'secondary' ? `${secondarySpan}` : type === 'golden' ? `${goldenSpan}` : ''}`} />
    </Link>
  );
}