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
      icon: "💪",
      title: "Entrenamiento Personalizado",
      description: "Creamos planes a tu medida, ajustándonos a tus necesidades y metas específicas de fitness.",
      image: "/images/Servicios/Entrenamiento Personalizado.jpg",
    },
    {
      icon: "💃",
      title: "Clases de Cardio Dance",
      description: "Diviértete y quema calorías con nuestras dinámicas clases, al ritmo de la música y el baile.",
      image: "/images/Servicios/Clases de Cardio Dance.jpg",
    },
    {
      icon: "🥗",
      title: "Asesoría en Suplementación",
      description: "Potencia tus resultados con nuestros planes y recomendaciones de suplementos de alta calidad.",
      image: "/images/Servicios/Asesoría en Suplementación.heic",
    },
    {
      icon: "👕",
      title: "Tienda de Ropa Deportiva",
      description: "Encuentra la vestimenta perfecta para tus entrenamientos, cómoda y con estilo, para que te muevas libremente.",
      image: "/images/Servicios/Tienda de Ropa Deportiva.jpg",
    },
  ]

  return (
    <section className="w-full py-16 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">Nuestros Servicios en Focus Gym</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            En Focus Gym de Loja, te ofrecemos una amplia variedad de servicios diseñados para ayudarte a alcanzar tus metas de fitness y bienestar.
          </p>
        </div>

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

        <div className="mt-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">¿Estás Listo para un Cambio Real?</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            ¿Cuáles son tus verdaderas metas de fitness? En Focus Gym te guiamos hacia ellas.
          </p>
          
          {/* Mobile Slider */}
          <div className="md:hidden overflow-x-auto pb-4 -mx-4 px-4 snap-x snap-mandatory">
            <div className="flex space-x-4 w-max">
              {[
                { title: "Resultados Visibles", description: "Con entrenamiento constante y nuestra guía, notarás cambios drásticos en tu cuerpo y bienestar." },
                { title: "Asesoramiento Profesional", description: "Entrenadores capacitados y dedicados te brindan el apoyo necesario en cada paso de tu rutina." },
                { title: "Horarios Flexibles", description: "Entrena a la hora que mejor te convenga, adaptándonos a tu ritmo de vida." },
                { title: "Comunidad Acogedora", description: "Forma parte de un grupo que te apoyará y motivará en tu camino hacia la mejor versión de ti." },
                { title: "Equipamiento de Calidad", description: "Máquinas modernas y seguras garantizan un entrenamiento efectivo y seguro en nuestras instalaciones." },
                { title: "Programas Personalizados", description: "Rutinas diseñadas específicamente para ti, adaptadas a tus objetivos de fitness individuales." },
              ].map((item, index) => (
                <div key={index} className="w-[85vw] flex-shrink-0 snap-center">
                  <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md h-full">
                    <h3 className="text-xl font-bold mb-2 dark:text-white">{item.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Desktop Grid */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              { title: "Resultados Visibles", description: "Con entrenamiento constante y nuestra guía, notarás cambios drásticos en tu cuerpo y bienestar." },
              { title: "Asesoramiento Profesional", description: "Entrenadores capacitados y dedicados te brindan el apoyo necesario en cada paso de tu rutina." },
              { title: "Horarios Flexibles", description: "Entrena a la hora que mejor te convenga, adaptándonos a tu ritmo de vida." },
              { title: "Comunidad Acogedora", description: "Forma parte de un grupo que te apoyará y motivará en tu camino hacia la mejor versión de ti." },
              { title: "Equipamiento de Calidad", description: "Máquinas modernas y seguras garantizan un entrenamiento efectivo y seguro en nuestras instalaciones." },
              { title: "Programas Personalizados", description: "Rutinas diseñadas específicamente para ti, adaptadas a tus objetivos de fitness individuales." },
            ].map((item, index) => (
              <div key={index} className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-2 dark:text-white">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
              </div>
            ))}
          </div>

          <p className="text-xl font-semibold mb-6 dark:text-white">
            No dejes que la falta de guía detenga tu progreso. ¡En Focus Gym, lo hacemos posible para ti!
          </p>
          <p className="text-2xl font-bold text-lime-500 mb-8">TRANQUILO, ESTO LO HACEMOS POR TI</p>
          
          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-6 dark:text-white">
              💬 ¡Contáctanos por WhatsApp para más información!
            </h3>
            <a
              href="#contacto"
              className="inline-flex items-center bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-full text-lg transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
              </svg>
              ¡Chatea con Nosotros Ahora!
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

