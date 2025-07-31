"use client";

import { useEffect, useRef } from 'react';

export function VideoSection() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            video.play().catch(error => console.log("Autoplay prevented:", error));
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(video);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section className="w-full h-[500px] relative overflow-hidden my-12">
      <video
        ref={videoRef}
        className="absolute top-0 left-0 w-full h-full object-cover"
        loop
        muted
        playsInline
      >
        <source src="/images/Seccion.mp4" type="video/mp4" />
        Tu navegador no soporta el elemento de video.
      </video>
    </section>
  );
}
