'use client';

import Image from 'next/image';
import { useState } from 'react';

interface SplashScreenProps {
  onEnter: () => void;
}

export default function SplashScreen({ onEnter }: SplashScreenProps) {
  const [isLoading, setIsLoading] = useState(false);

  const handleEnter = () => {
    setIsLoading(true);
    onEnter();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/images/Seccion.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-[#2D3250] bg-opacity-70 flex flex-col items-center justify-center">
        {/* Logo */}
        <div className="mb-8 animate-fadeIn">
          <Image
            src="/logo Focus Gym.jpg"
            alt="Focus Gym Logo"
            width={300}
            height={150}
            className="w-auto h-32 md:h-40 object-contain drop-shadow-lg"
            priority
          />
        </div>

        {/* Enter Button */}
        <button
          onClick={handleEnter}
          disabled={isLoading}
          className={`group relative w-20 h-20 md:w-24 md:h-24 rounded-full transition-all duration-300 flex items-center justify-center shadow-lg transform hover:scale-110 focus:outline-none focus:ring-4 focus:ring-opacity-50 ${
            isLoading 
              ? 'bg-[#8BCF00] cursor-wait' 
              : 'bg-[#A0E600] hover:bg-[#8CF000] focus:ring-[#A0E600] cursor-pointer'
          }`}
          aria-label={isLoading ? 'Cargando...' : 'Entrar a Focus Gym'}
        >
          {isLoading ? (
            <div className="w-8 h-8 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
          ) : (
            <div className="w-0 h-0 border-t-8 border-b-8 border-l-16 border-t-transparent border-b-transparent border-l-white ml-1 group-hover:border-l-[#2D3250] transition-colors duration-300"></div>
          )}
        </button>

        {/* Enter Text */}
        <button
          onClick={handleEnter}
          disabled={isLoading}
          className={`mt-8 text-white text-sm md:text-base font-medium transition-opacity ${
            isLoading ? 'opacity-50 cursor-wait' : 'opacity-80 hover:opacity-100'
          }`}
        >
          {isLoading ? 'Cargando...' : 'Toca para Entrar'}
        </button>
      </div>
    </div>
  );
}
