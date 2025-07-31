"use client"

import { useRef, useEffect } from "react"
import Image from "next/image"

export function SatisfiedClients() {
  const sliderRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && sliderRef.current) {
        sliderRef.current.scrollLeft = 0
      }
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const clients = [
    {
      name: "Carlos Mendoza",
      testimonial: "Gracias a Focus Gym logré transformar mi cuerpo en solo 6 meses. Los entrenadores son excelentes profesionales que realmente se preocupan por tu progreso.",
      image: "/images/Inicio/Carlos Mendoza.jpg",
    },
    {
      name: "María Fernández",
      testimonial: "Las clases de cardio dance son increíbles. He perdido 12kg y ganado mucha confianza en mí misma. ¡El mejor gimnasio de Loja!",
      image: "/images/Inicio/María Fernández.jpg",
    },
    {
      name: "Juan Pérez",
      testimonial: "El ambiente en Focus Gym es inigualable. La combinación de entrenamiento personalizado y la atención al detalle hacen la diferencia.",
      image: "/images/Inicio/Juan Pérez.jpg",
    },
    {
      name: "Lucía Sánchez",
      testimonial: "Los planes de nutrición personalizados cambiaron mi vida. En Focus Gym encontré el apoyo que necesitaba para alcanzar mis metas.",
      image: "/images/Inicio/Lucía Sánchez.jpg",
    },
  ]

  return (
    <section className="w-full py-16 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <a
            href="#contacto"
            className="inline-block bg-lime-500 hover:bg-lime-600 text-white font-bold py-3 px-6 rounded-full text-lg mb-8 transition-colors"
          >
            ✨ ¡Únete a la familia FOCUS GYM!
          </a>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">Clientes Satisfechos</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Conoce las experiencias de quienes ya forman parte de nuestra familia fitness en Loja.
          </p>
        </div>

        <div
          ref={sliderRef}
          className="md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 slider-container flex md:flex-wrap overflow-x-auto pb-4 md:pb-0 -mx-4 px-4 md:mx-0 md:px-0 snap-x snap-mandatory"
        >
          {clients.map((client, index) => (
            <div
              key={index}
              className="slider-item md:w-auto bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden flex flex-col mb-4 md:mb-0 snap-center"
            >
              <div className="relative h-64">
                <Image src={client.image || "/placeholder.svg"} alt={client.name} fill className="object-cover" />
              </div>
              <div className="p-6 flex flex-col items-center text-center flex-grow">
                <h3 className="text-xl font-bold mb-2 dark:text-white">{client.name}</h3>
                <p className="text-gray-600 dark:text-gray-300 italic">"{client.testimonial}"</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

