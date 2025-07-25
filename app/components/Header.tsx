'use client';

import React, { useEffect, useState } from 'react';
import { FaBars, FaChevronDown, FaChevronRight, FaRegEdit, FaSearch, FaTimes } from 'react-icons/fa';
import { IoMdClose } from 'react-icons/io';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import CTAButton from './CTAButton';

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSubMenu, setActiveSubMenu] = useState<string | null>(null);
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();

  const handleSearch = () => {
    const trimmed = searchQuery.trim();
    if (trimmed) {
      router.push(`/search?query=${encodeURIComponent(trimmed)}`);
      setShowSearchBar(false);
      setSearchQuery('')
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setShowSearchBar(false);
      setIsMobileMenuOpen(false);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : 'auto';
  }, [isMobileMenuOpen]);

  const navitems = {
    home: "Home",
    about: "About",
    services: "Services",
    blogs: "Blogs",
    contact: "Contact",
  }

  const services = [
    {
      title: 'Amer Services',
      sub: ['Golden Visa', 'Family Visa', 'Employment Visa', 'Tourist Visa', 'Visit Visa', 'Emirates ID', 'Medical Services', 'Status Change', 'Data Modification'],
    },
    {
      title: 'Tasheel Services',
      sub: ['Work Permit', 'Signature Card', 'Establishment File', 'Job Offer Letter', 'MOL Insurance', 'Labour Contract', 'PRO Card', 'Employee Reports'],
    },    
    {
      title: 'Business Setup Services',
      sub: ['Mainland', 'Free Zone', 'Trade License', 'MOA Issuance', 'PRO Services', 'Office Space and Ejari', 'Bank Account'],
    },
    { title: 'Economic Department' },
    { 
      title: 'Document Legal Services',
      sub: ['Certificate Attestation', 'Legal Translation', 'Notary Services', 'Power of Attorney', 'Affidavit', 'Memorandum']
    },
    { title: 'Dubai Police Services' },
    { title: 'RTA Services' },
  ];

  return (
    <div className="h-[100px] sticky top-0 z-[100] bg-gn text-white my-auto">
      <div className="w-full h-[100px] flex items-center justify-around">
        <Link href="/" className="flex items-center justify-start px-2 ">
          <Image src="/logo.webp" alt="Logo" width={150} height={84} style={{ height: 'auto' }} priority className="lg:w-[200px] object-cover" />
       </Link>
       <div className='flex flex-col items-end justify-center w-[70%] gap-3 h-full'>
          <div className='flex items-center justify-end md:justify-between w-full px-4'>
            <ul className=" hidden md:flex text-sm bg font-medium items-center gap-4 lg:gap-10 xl:gap-16 relative z-50">
              <li className="relative group cursor-pointer flex items-center">
                <Link href="/" className="inline-block h-full transition-colors duration-300 hover:text-black">
                  {navitems.home}
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-black transition-all duration-500 group-hover:w-full" />
                </Link>
              </li>
              <li className="relative group cursor-pointer flex items-center">
                <Link href="/about" className="inline-block h-full  transition-colors duration-300 hover:text-black">
                  {navitems.about}
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-black transition-all duration-500 group-hover:w-full" />
                </Link>
              </li>

              <li
                className="relative group cursor-pointer"
                onMouseEnter={() => {
                  setIsDropdownOpen(true);
                  setShowSearchBar(false);
                }}
                onMouseLeave={() => {
                  setIsDropdownOpen(false);
                  setActiveSubMenu(null);
                }}
              >
                <Link
                  href="/services"
                  className="flex items-center gap-2 h-full transition-colors group-hover:text-black duration-300"
                  aria-expanded={isDropdownOpen}
                >
                  <span>{navitems.services}</span>
                  <FaChevronDown size={12} className="ml-1 mt-[2px]" />
                </Link>

                {isDropdownOpen && (
                  <ul
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-gn text-white shadow-lg py-2 w-56 z-50"
                    // Add padding-top to close the gap visually
                    style={{ marginTop: '0px', paddingTop: '12px' }} 
                  >
                    {services.map((service) => (
                      <li
                        key={service.title}
                        className="relative px-4 py-2 hover:bg-white hover:text-black flex justify-between items-center"
                        onMouseEnter={() => service.sub && setActiveSubMenu(service.title)}
                        onMouseLeave={() => setActiveSubMenu(null)}
                      >
                        <Link
                          href={`/services/${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                          onClick={() => {
                            setIsDropdownOpen(false);
                            setActiveSubMenu(null);
                          }}
                          className="block w-full h-full"
                        >
                          {service.title}
                        </Link>
                        {service.sub && <FaChevronRight size={10} />}
                        {activeSubMenu === service.title && service.sub && (
                          <ul className="absolute left-full top-0 bg-gn shadow-lg w-48">
                            {service.sub.map((item) => (
                              <li key={item} className="px-4 py-2 hover:bg-gray-100 hover:text-gn w-full h-full">
                                <Link href={`/services/${service.title.toLowerCase().replace(/\s+/g, '-')}/${item.toLowerCase().replace(/\s+/g, '-')}`} className='h-full w-full'>{item}</Link>
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    ))}
                  </ul>
                )}
              </li>


              <li className="relative group cursor-pointer flex items-center">
                <Link href="/blogs" className="inline-block h-full transition-colors duration-300 hover:text-black">
                  {navitems.blogs}
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-black transition-all duration-500 group-hover:w-full" />
                </Link>
              </li>
              <li className="relative group cursor-pointer flex items-center">
                <Link href="/contact" className="inline-block h-full transition-colors duration-300 hover:text-black">
                  {navitems.contact}
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-black transition-all duration-500 group-hover:w-full" />
                </Link>
              </li>
            </ul>

            {/* Right side buttons */}
            <div className="flex items-center gap-2 lg:gap-6">
              <button
                aria-label="Toggle Search Bar"
                className="relative pb-2 py-2 text-xs text-gre px-2 group transition-colors duration-300"
                onClick={() => {
                  setShowSearchBar((prev) => !prev);
                  setIsMobileMenuOpen(false);
                }}
              >
                <FaSearch size={14} className="text-white group-hover:text-black" />
              </button>
              <CTAButton label="Apply Online" href="/apply-online" type="secondary" className='hidden sm:flex' icon={FaRegEdit}/>

              <div
                className="md:hidden cursor-pointer"
                aria-label="Open mobile menu"
                onClick={() => {
                  setIsMobileMenuOpen(true);
                  setShowSearchBar(false);
                }}
              >
                <FaBars />
              </div>
            </div>
          </div>
       </div>
    </div>
      

      {/* Gradient divider */}
      <div
        className="w-full h-[2px] bg-gn"
      />

      {/* Search Bar */}
      {showSearchBar && (
      <div className="bg-black bg-opacity-50 w-full px-4 py-4 animate-slide-down">
        <div className="relative w-[80%] lg:max-w-2xl flex items-center bg-white rounded-full mx-auto">
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
            className="w-full px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gre"
            autoFocus
          />
          <button
            aria-label="Submit search"
            className="absolute right-10 bg-gre text-white rounded-full px-3 py-2"
            onClick={handleSearch}
          >
            <FaSearch size={14} />
          </button>
          <button
            aria-label="Close search"
            className="absolute right-2"
            onClick={() => setShowSearchBar(false)}
          >
            <IoMdClose size={20} className="text-black" />
          </button>
        </div>
      </div>
    )}


      {/* Mobile Sidebar */}
      {isMobileMenuOpen && (
        <div
          className="fixed -right-1 top-0 w-64 h-full bg-gn text-white shadow-2xl z-[1000] overflow-y-auto"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile menu"
        >
          <div className="flex w-full justify-end items-center px-4 py-3 border-b">
            <FaTimes
              className="cursor-pointer"
              aria-label="Close mobile menu"
              onClick={() => setIsMobileMenuOpen(false)} />
          </div>
          <ul className="flex flex-col px-4 py-2 gap-4 text-sm">
            <li className='h-10 flex items-center'>
              <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
                Home
              </Link>
            </li>
            <li className='h-10 flex items-center'>
              <Link href="/about" onClick={() => setIsMobileMenuOpen(false)}>
                About
              </Link>
            </li>

            <li>
              <div className="flex justify-between items-center  h-10">
                <Link href="/services" onClick={() => setIsMobileMenuOpen(false)} className="text-base font-medium">
                  Services
                </Link>
                <button
                  aria-expanded={isDropdownOpen}
                  aria-controls="mobile-services-submenu"
                  onClick={(e) => {
                    e.preventDefault();
                    setIsDropdownOpen(!isDropdownOpen);
                  } }
                  className="ml-2 focus:outline-none"
                  aria-label="Toggle services submenu"
                >
                  <FaChevronDown size={16} className={`transform transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : 'rotate-0'}`} />
                </button>
              </div>
              {isDropdownOpen && (
                <ul
                  id="mobile-services-submenu"
                  className="p-2 text-sm flex flex-col gap-4 bg-gn"
                >
                  {services.map((service) => (
                    <li key={service.title} className=''>
                      {service.sub ? (
                        <MobileSubMenu
                          service={service}
                          closeMenu={() => setIsMobileMenuOpen(false)} />
                      ) : (
                        <Link
                          href={`/services/${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className='h-8 flex items-center justify-between'
                        >
                          {service.title}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </li>

            <li className='h-10 flex items-center'>
              <Link href="/blogs" onClick={() => setIsMobileMenuOpen(false)}>
                Blogs
              </Link>
            </li>
            <li className='h-10 flex items-center'>
              <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                Contact
              </Link>
            </li>
          </ul>
          <div className='bg-gray-300 h-[1px] w-[70%] mx-auto my-10'></div>
          <CTAButton label="Apply Online" href="/apply-online" type="secondary" className='mx-auto' icon={FaRegEdit}/>
        </div>
      )}
    </div>
  );
};

interface MobileSubMenuProps {
  service: {
    title: string;
    sub?: string[];
  };
  closeMenu: () => void;
}

const MobileSubMenu: React.FC<MobileSubMenuProps> = ({ service, closeMenu }) => {
  const [isOpen, setIsOpen] = useState(false);

  if (!service.sub) {
    return (
      <Link
        href={`/services/${service.title.toLowerCase().replace(/\s+/g, '-')}`}
        onClick={closeMenu}
      >
        {service.title}
      </Link>
    );
  }

  return (
    <div>
      <div className="flex justify-between items-center h-8 cursor-pointer">
        <Link href={`/services/${service.title.toLowerCase().replace(/\s+/g, '-')}`}>
          {service.title}
        </Link>
        <FaChevronDown className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}  onClick={() => setIsOpen(!isOpen)}/>
      </div>
      {isOpen && (
        <ul className="py-4 px-2 mt-2 flex flex-col gap-2 bg-gn">
          {service.sub.map((subItem) => (
            <li key={subItem} className='p-2 h-8 flex items-center justify-between active:bg-gn'>
              <Link href={`/services/${service.title.toLowerCase().replace(/\s+/g, '-')}/${subItem.toLowerCase().replace(/\s+/g, '-')}`} onClick={closeMenu}>
                {subItem}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Header;