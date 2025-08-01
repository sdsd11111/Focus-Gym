"use client"

import Image from "next/image"
import Link from "next/link"
import { useRef, useEffect } from "react"

export function Portfolio() {
  const projects = [
    {
      category: "Transformación",
      title: "De principiante a competidor en 6 meses",
      link: "#transformacion-mateo",
      image: "/images/Inicio/De principiante a competidor en 6 meses.jpg",
    },
    {
      category: "Historia de Éxito",
      title: "El viaje de Sofía: Transformación física y mental",
      link: "#historia-sofia",
      image: "/images/Inicio/El viaje de Sofía Transformación física y mental.jpg",
    },
  ]

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

  return (
    <section className="w-full py-16 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">✨ Portafolio de Éxitos</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Transformaciones Reales, Resultados Comprobados en Focus Gym Loja
          </p>
        </div>

        {/* Mobile Slider */}
        <div className="md:hidden overflow-x-auto pb-4 -mx-4 px-4 snap-x snap-mandatory">
          <div ref={sliderRef} className="flex space-x-4 w-max">
            {projects.map((project, index) => (
              <div key={index} className="w-[85vw] flex-shrink-0 snap-center">
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
                  <div className="relative h-64">
                    <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
                  </div>
                  <div className="p-6">
                    <span className="inline-block px-3 py-1 text-sm font-semibold bg-lime-100 text-lime-800 dark:bg-lime-900 dark:text-lime-200 rounded-full mb-2">
                      {project.category}
                    </span>
                    <h3 className="text-xl font-bold mb-4 dark:text-white">{project.title}</h3>
                    <Link
                      href={project.link}
                      className="inline-flex items-center text-lime-600 hover:text-lime-800 dark:text-lime-400 dark:hover:text-lime-300 font-medium"
                    >
                      Ver proyecto
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 ml-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-64">
                <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
              </div>
              <div className="p-6">
                <span className="inline-block px-3 py-1 text-sm font-semibold bg-lime-100 text-lime-800 dark:bg-lime-900 dark:text-lime-200 rounded-full mb-2">
                  {project.category}
                </span>
                <h3 className="text-xl font-bold mb-4 dark:text-white">{project.title}</h3>
                <Link
                  href={project.link}
                  className="inline-flex items-center text-lime-600 hover:text-lime-800 dark:text-lime-400 dark:hover:text-lime-300 font-medium"
                >
                  Ver proyecto
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

