"use client"

import { useRef, useEffect } from "react"

export function Features() {
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

  const features = [
    {
      icon: "🏆",
      title: "Resultados Comprobados",
      description: "Con un plan de entrenamiento constante, verás cambios significativos y duraderos.",
    },
    {
      icon: "👨‍🏫",
      title: "Asesoramiento de Expertos",
      description: "Entrenadores certificados y dedicados te guiarán en cada etapa de tu progreso.",
    },
    {
      icon: "⏰",
      title: "Horarios a tu Medida",
      description: "Entrena cuando mejor te convenga con nuestras amplias opciones de horarios.",
    },
    {
      icon: "🤝",
      title: "Comunidad y Apoyo",
      description: "Únete a un grupo que te inspirará y te motivará en tu camino hacia el bienestar.",
    },
    {
      icon: "🏋️",
      title: "Instalaciones de Primer Nivel",
      description: "Máquinas modernas y seguras para un entrenamiento eficaz y completo.",
    },
    {
      icon: "🎯",
      title: "Entrenamientos Personalizados",
      description: "Rutinas diseñadas específicamente para tus objetivos y nivel de fitness.",
    },
  ]

  return (
    <section className="w-full py-16 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">💪 ¿Estás listo para transformar tu vida?</h2>
          <h3 className="text-xl md:text-2xl font-semibold mb-8 dark:text-gray-200">
            En Focus Gym Loja, no solo entrenas, evolucionas
          </h3>
        </div>

        <div
          ref={sliderRef}
          className="md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 slider-container flex md:flex-wrap overflow-x-auto pb-4 md:pb-0 -mx-4 px-4 md:mx-0 md:px-0 snap-x snap-mandatory"
        >
          {features.map((feature, index) => (
            <div
              key={index}
              className="slider-item md:w-auto p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md flex flex-col items-center text-center mb-4 md:mb-0 snap-center"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2 dark:text-white">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
            No dejes que la falta de guía detenga tu progreso. ¡Nosotros estamos aquí para ti!
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">✨ Tu transformación comienza hoy en Focus Gym Loja</h2>
        </div>
      </div>
    </section>
  )
}

