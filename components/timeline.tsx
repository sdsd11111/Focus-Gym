import Image from "next/image"
import Link from "next/link"

export function Timeline() {
  const timelineEvents = [
    {
      year: "2022",
      title: "Apertura de Focus Gym",
      description: "Iniciamos nuestra misión de transformar vidas a través del fitness en Loja.",
    },
    {
      year: "2023",
      title: "Expansión de Servicios",
      description: "Incorporamos clases de cardio y yoga, ampliando nuestras opciones de entrenamiento.",
    },
    {
      year: "2024",
      title: "Integración Nutricional",
      description: "Creamos un enfoque más integral, añadiendo asesorías de nutrición personalizada.",
    },
  ]

  const partners = [
    {
      name: "Proteína Plus",
      logo: "/partner-protein.jpg",
    },
    {
      name: "SportFit Wear",
      logo: "/partner-sportswear.jpg",
    },
    {
      name: "NutriVida",
      logo: "/partner-nutrition.jpg",
    },
  ]

  return (
    <section className="w-full py-16 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">🏆 Experiencia y Trayectoria</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Más de 3 años comprometidos con el bienestar de nuestros miembros en Loja.
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-16">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-lime-200 dark:bg-lime-800"></div>

            {/* Timeline events */}
            {timelineEvents.map((event, index) => (
              <div key={index} className="relative mb-12">
                <div className={`md:flex items-center ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                  {/* Year bubble */}
                  <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-lime-500 text-white flex items-center justify-center font-bold z-10">
                    {index + 1}
                  </div>

                  {/* Content */}
                  <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                    <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
                      <div className="text-lime-500 dark:text-lime-400 font-bold text-xl mb-2">{event.year}</div>
                      <h3 className="text-xl font-bold mb-2 dark:text-white">{event.title}</h3>
                      <p className="text-gray-600 dark:text-gray-300">{event.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-12">
          <h3 className="text-2xl font-bold text-center mb-8 dark:text-white">Nuestros Aliados Estratégicos</h3>
          <div className="flex flex-wrap justify-center gap-8">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md flex flex-col items-center"
              >
                <div className="relative h-16 w-40 mb-4">
                  <Image src={partner.logo || "/placeholder.svg"} alt={partner.name} fill className="object-contain" />
                </div>
                <h3 className="text-lg font-semibold dark:text-white">{partner.name}</h3>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <Link
            href="#contacto"
            className="inline-block bg-lime-500 hover:bg-lime-600 text-white font-bold py-3 px-8 rounded-full text-lg transition-colors"
          >
            ✨ ¡Únete a la familia FOCUS GYM!
          </Link>
        </div>
      </div>
    </section>
  )
}

