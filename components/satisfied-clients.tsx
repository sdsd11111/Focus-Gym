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
      testimonial: "Gracias a LEADER GYM logré transformar mi cuerpo en solo 6 meses. Los entrenadores son excelentes.",
      image: "https://automatizotunegocio.net/leadergym/6.jpg",
    },
    {
      name: "María Fernández",
      testimonial: "Las clases de cardio dance son increíbles. He perdido peso y me divierto muchísimo.",
      image: "https://automatizotunegocio.net/leadergym/4.jpg",
    },
    {
      name: "Juan Pérez",
      testimonial:
        "El ambiente del gimnasio es muy motivador. Me encanta entrenar aquí y los resultados hablan por sí solos.",
      image: "https://automatizotunegocio.net/leadergym/3.jpg",
    },
    {
      name: "Lucía Sánchez",
      testimonial: "Los planes personalizados realmente funcionan. En LEADER GYM encontré el apoyo que necesitaba.",
      image: "https://automatizotunegocio.net/leadergym/5.jpg",
    },
  ]

  return (
    <section className="w-full py-16 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">Clientes Satisfechos</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Conoce las experiencias de quienes ya forman parte de nuestra familia fitness.
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

