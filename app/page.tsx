import { redirect } from 'next/navigation';

export default function Home() {
  // Redirigir a /home solo si estamos en la raíz
  // Si el usuario recarga una página específica, permanecerá en esa página
  if (typeof window !== 'undefined') {
    // Verificar si es la primera carga o una recarga
    const navigationEntries = window.performance.getEntriesByType('navigation');
    const isReload = navigationEntries.length > 0 && 
                    'type' in navigationEntries[0] && 
                    (navigationEntries[0] as PerformanceNavigationTiming).type === 'reload';
    
    if (!isReload) {
      redirect('/home');
    }
  } else {
    // En el servidor, redirigir normalmente
    redirect('/home');
  }
  
  // Retornar null temporalmente mientras se procesa la redirección
  return null;
}

