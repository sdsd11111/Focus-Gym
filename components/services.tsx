"use client"

import { useRef, useEffect } from "react"
import Image from "next/image"

export function Services() {
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

  const services = [
    {
      icon: "🏋️‍♂️",
      title: "Entrenamiento Personalizado",
      description: "Nos ajustamos a tus necesidades y metas específicas.",
      image: "https://i.pinimg.com/736x/7c/71/d0/7c71d08155fa6d1f4570294f5b373f83.jpg",
    },
    {
      icon: "💃",
      title: "Clases de Cardio Dance",
      description: "Diviértete mientras te mantienes en forma con música y baile.",
      image: "https://i.pinimg.com/736x/3f/e7/0d/3fe70dfa03b62781432e0e38953c3b93.jpg",
    },
    {
      icon: "🏆",
      title: "Planes de Suplementación",
      description: "Potencia tu entrenamiento con nuestros suplementos recomendados.",
      image: "https://i.pinimg.com/736x/cc/d3/59/ccd35984f964c06ebc884cc00f9c5f73.jpg",
    },
    {
      icon: "👕",
      title: "Ropa Deportiva",
      description: "Viste bien mientras te mueves con nuestros productos de calidad.",
      image: "https://i.pinimg.com/736x/49/ca/01/49ca01887a47e45100ce77ffc5c4a418.jpg",
    },
  ]

  return (
    <section className="w-full py-16 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div
          ref={sliderRef}
          className="md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 slider-container flex md:flex-wrap overflow-x-auto pb-4 md:pb-0 -mx-4 px-4 md:mx-0 md:px-0 snap-x snap-mandatory"
        >
          {services.map((service, index) => (
            <div
              key={index}
              className="slider-item md:w-auto bg-white dark:bg-gray-700 rounded-lg shadow-md overflow-hidden flex flex-col mb-4 md:mb-0 snap-center"
            >
              <div className="relative h-48">
                <Image src={service.image || "/placeholder.svg"} alt={service.title} fill className="object-cover" />
              </div>
              <div className="p-6 flex flex-col items-center text-center flex-grow">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-2 dark:text-white">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{service.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <h3 className="text-xl font-semibold mb-6 dark:text-white">
            📲 ¡Contáctanos por WhatsApp para más información!
          </h3>
          <a
            href="https://wa.me/593990039794"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-full text-lg transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
            </svg>
            🤗 ¡Reserva por WhatsApp!
          </a>
        </div>
      </div>
    </section>
  )
}

