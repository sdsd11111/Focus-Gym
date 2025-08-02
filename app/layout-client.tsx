'use client';

import { useState, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import SplashScreen from '@/components/splash-screen';
import Header from '@/components/header';
import Footer from '@/components/footer';
import PopupManager from '@/components/popup-manager';
import { ThemeProvider } from '@/components/theme-provider';

export default function LayoutClient({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const router = useRouter();
  const [showSplash, setShowSplash] = useState(true);

  // Only check if we've seen the splash before
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const hasSeenSplash = sessionStorage.getItem('hasSeenSplash');
      if (hasSeenSplash) {
        setShowSplash(false);
      } else {
        sessionStorage.setItem('hasSeenSplash', 'true');
      }
    }
  }, []);

  const handleEnter = () => {
    setShowSplash(false);
    if (pathname === '/') {
      router.push('/home');
    }
  };

  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
      {showSplash ? (
        <SplashScreen onEnter={handleEnter} />
      ) : (
        <>
          <Header />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
          <PopupManager />
        </>
      )}
    </ThemeProvider>
  );
}
