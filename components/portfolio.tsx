import Image from "next/image"
import Link from "next/link"

export function Portfolio() {
  const projects = [
    {
      category: "Transformaciones",
      title: "Transformación de Carlos",
      link: "#",
      image: "https://automatizotunegocio.net/leadergym/4.jpg",
    },
    {
      category: "Testimonios",
      title: "El viaje de Mariana",
      link: "#",
      image: "https://automatizotunegocio.net/leadergym/5.jpg",
    },
  ]

  return (
    <section className="w-full py-16 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">📂 Portafolio de Éxitos</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Mira nuestros proyectos de transformación física y mejora personal.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
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

