'use client';

import Link from "next/link";
import { useEffect, useRef } from 'react';
import Image from "next/image";

export function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Intentar reproducir el video automáticamente
    const playPromise = video.play().catch(error => {
      console.log("Autoplay prevented:", error);
    });

    return () => {
      if (playPromise !== undefined) {
        playPromise.then(() => {
          video.pause();
        });
      }
    };
  }, []);

  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* Video de fondo */}
      <video
        ref={videoRef}
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/images/Seccion.mp4" type="video/mp4" />
        Tu navegador no soporta el elemento de video.
      </video>

      {/* Capa oscura para mejorar la visibilidad */}
      <div className="absolute inset-0 bg-black bg-opacity-40 z-10"></div>

      {/* Contenido centrado */}
      <div className="relative z-20 text-center px-4">
        {/* Logo */}
        <div className="mb-8 flex justify-center">
          <Image 
            src="/images/logo.jpg" 
            alt="Focus Gym" 
            width={300} 
            height={200}
            className="rounded-full border-4 border-white shadow-2xl"
            priority
          />
        </div>
        
        {/* Botón Iniciar */}
        <Link
          href="#main-content"
          className="inline-block bg-lime-500 hover:bg-lime-600 text-white font-bold py-4 px-12 rounded-full text-xl transition-all transform hover:scale-105 shadow-lg"
        >
          Iniciar
        </Link>
      </div>
    </section>
  );
}
