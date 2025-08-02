'use client';

import { useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
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

  // Redirigir de la raíz a /home
  useEffect(() => {
    if (pathname === '/') {
      router.push('/home');
    }
  }, [pathname, router]);

  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
      <Header />
      <main className="min-h-screen">
        {children}
      </main>
      <Footer />
      <PopupManager />
    </ThemeProvider>
  );
}
