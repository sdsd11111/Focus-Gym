import { redirect } from 'next/navigation';

export default function Home() {
  // Redirigir a /home cuando se accede a la raíz
  redirect('/home');
  
  // Este return no se ejecutará debido a la redirección
  return null;
}

