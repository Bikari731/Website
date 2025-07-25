'use client';

import { useRouter } from 'next/navigation';
import React, { useState, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';

type SearchBarProps = {
  query?: string;
};

const SearchBar = ({ query = '' }: SearchBarProps) => {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState(query);

  useEffect(() => {
    setSearchQuery(query); // sync prop if it changes
  }, [query]);

  const handleSearch = () => {
    const trimmed = searchQuery.trim();
    if (trimmed) {
      router.push(`/search?query=${encodeURIComponent(trimmed)}`);
      setSearchQuery('');
    }
  };

  return (
    <div className="w-full">
      <div className="relative w-full md:w-[60%] lg:max-w-2xl flex items-center bg-white rounded-full my-5 mx-auto">
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
          className="w-full px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gn"
          autoFocus
        />
        <button
          aria-label="Submit search"
          className="absolute right-2 bg-gre text-white rounded-full px-3 py-2"
          onClick={handleSearch}
        >
          <FaSearch size={14} />
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
