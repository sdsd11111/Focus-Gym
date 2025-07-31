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
      title: "Resultados visibles",
      description: "Con entrenamiento continuo, notarás cambios drásticos.",
    },
    {
      icon: "🏋️‍♀️",
      title: "Asesoramiento profesional",
      description: "Entrenadores capacitados para guiarte en cada paso.",
    },
    {
      icon: "🕒",
      title: "Horarios flexibles",
      description: "Entrena a la hora que mejor te convenga.",
    },
    {
      icon: "🎉",
      title: "Comunidad acogedora",
      description: "Forma parte de un grupo que te apoyará en tu camino.",
    },
    {
      icon: "💯",
      title: "Equipamiento de calidad",
      description: "Máquinas modernas para un entrenamiento efectivo.",
    },
    {
      icon: "🥇",
      title: "Programas personalizados",
      description: "Rutinas adaptadas a tus objetivos específicos.",
    },
  ]

  return (
    <section className="w-full py-16 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">🤔 ¿Estás listo para el cambio?</h2>
          <h3 className="text-xl md:text-2xl font-semibold mb-8 dark:text-gray-200">
            ¿Cuáles son tus verdaderas metas de fitness?
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
            Descuidar estos aspectos puede significar perder la motivación y los resultados deseados.
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">😊 TRANQUILO, ESTO LO HACEMOS POR TI</h2>
        </div>
      </div>
    </section>
  )
}

