'use client';

import { useEffect, useRef } from 'react';

export function VideoHero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Forzar la reproducción silenciada
    const playVideo = () => {
      video.muted = true;
      video.play().catch(error => console.error("Error al reproducir el video:", error));
    };

    // Intentar reproducir inmediatamente
    playVideo();

    // Configurar para intentar de nuevo cuando el video esté listo
    video.addEventListener('canplay', playVideo);
    
    // Limpiar
    return () => {
      video.removeEventListener('canplay', playVideo);
    };
  }, []);

  return (
    <div style={{
      position: 'relative',
      width: '100vw',
      height: '100vh',
      overflow: 'hidden',
      backgroundColor: 'black'
    }}>
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          minWidth: '100%',
          minHeight: '100%',
          width: 'auto',
          height: 'auto',
          transform: 'translate(-50%, -50%)',
          objectFit: 'cover'
        }}
      >
        <source src="/images/Seccion.mp4" type="video/mp4" />
        Tu navegador no soporta el elemento de video.
      </video>
    </div>
  );
}
