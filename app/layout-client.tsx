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

  // Manejar el splash screen y el enrutamiento inicial
  useEffect(() => {
    setIsMounted(true);
    
    // Verificar si es la primera visita
    const isFirstVisit = !sessionStorage.getItem('hasVisited');
    
    // Verificar si es una recarga
    const navEntries = performance.getEntriesByType('navigation');
    const isReload = navEntries.length > 0 && 
                    'type' in navEntries[0] && 
                    (navEntries[0] as PerformanceNavigationTiming).type === 'reload';
    
    // Mostrar splash solo si es la primera visita o si estamos en la ruta raíz
    if (isFirstVisit) {
      sessionStorage.setItem('hasVisited', 'true');
      setShowSplash(true);
      if (pathname === '/') {
        router.push('/home');
      }
    } else if (pathname === '/') {
      // Si no es la primera visita pero estamos en la raíz, mostrar splash
      setShowSplash(true);
    } else {
      // Si estamos en cualquier otra ruta, no mostrar splash
      setShowSplash(false);
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
