// app/search/page.tsx
'use client';

import { Suspense } from 'react';
import SearchContent from './components/SearchContent';

export default function SearchPage() {
  return (
    <Suspense fallback={<div className="text-center p-10">Loading search results...</div>}>
      <SearchContent />
    </Suspense>
  );
}
