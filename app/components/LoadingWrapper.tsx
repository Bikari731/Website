'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function LoadingWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [initialLoad, setInitialLoad] = useState(true); // Tracks the very first load of the app
  const [navigationLoading, setNavigationLoading] = useState(false); // Tracks loading during navigation
  const [previousPathname, setPreviousPathname] = useState<string | null>(null);

  useEffect(() => {
    // Logic for the initial load of the application
    if (initialLoad) {
      const timer = setTimeout(() => {
        setInitialLoad(false);
      }, 300); // 1 second for initial load
      return () => clearTimeout(timer);
    }
  }, [initialLoad]);

  useEffect(() => {
    // Logic for navigation
    if (previousPathname !== null && pathname !== previousPathname) {
      // If we're navigating to a new path
      setNavigationLoading(true);
      const timer = setTimeout(() => {
        setNavigationLoading(false);
      }, 1000); // 2 seconds for navigation
      return () => clearTimeout(timer);
    }
    // Update the previous pathname after the effect runs
    setPreviousPathname(pathname);
  }, [pathname, previousPathname]);

  const isLoading = initialLoad || navigationLoading;

  return (
    <>
      {isLoading && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white bg-opacity-80">
          <Image
            src="/load.webp"
            alt="Loading"
            width={30}
            height={30}
            className="animate-pulse"
            priority
          />
        </div>
      )}
      <div className={isLoading ? 'opacity-0' : 'opacity-100 transition-opacity duration-300'}>
        {children}
      </div>
    </>
  );
}