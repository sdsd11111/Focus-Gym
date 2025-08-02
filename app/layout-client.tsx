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
  const [isMounted, setIsMounted] = useState(false);
  const [showSplash, setShowSplash] = useState(true);

  // Handle splash screen and initial routing
  useEffect(() => {
    setIsMounted(true);
    
    // Solo mostrar splash en la carga inicial del sitio, no al recargar
    const isInitialLoad = !sessionStorage.getItem('hasLoadedBefore');
    sessionStorage.setItem('hasLoadedBefore', 'true');
    
    // No mostrar splash si no es la carga inicial
    if (!isInitialLoad) {
      setShowSplash(false);
      return;
    }
    
    // Si es la carga inicial, redirigir a /home si no está ya ahí
    if (pathname === '/') {
      router.push('/home');
    }
  }, [pathname]);

  const handleEnter = () => {
    setShowSplash(false);
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
