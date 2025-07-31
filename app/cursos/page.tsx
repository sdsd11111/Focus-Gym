import Image from "next/image"
import Link from "next/link"

export default function CursosPage() {
  const courses = [
    {
      title: "Entrenamiento Funcional",
      description: "Mejora tu condición física general con ejercicios que simulan movimientos cotidianos.",
      image: "https://automatizotunegocio.net/leadergym/1.jpg",
      duration: "8 semanas",
      level: "Todos los niveles",
    },
    {
      title: "Hipertrofia Muscular",
      description: "Programa especializado para aumentar el tamaño y la fuerza muscular.",
      image: "https://automatizotunegocio.net/leadergym/1.jpg",
      duration: "12 semanas",
      level: "Intermedio-Avanzado",
    },
    {
      title: "Cardio Dance",
      description: "Quema calorías mientras te diviertes con rutinas de baile energéticas.",
      image: "https://automatizotunegocio.net/leadergym/1.jpg",
      duration: "Continuo",
      level: "Todos los niveles",
    },
    {
      title: "Nutrición Deportiva",
      description: "Aprende a alimentarte correctamente para optimizar tus resultados en el gimnasio.",
      image: "https://automatizotunegocio.net/leadergym/1.jpg",
      duration: "4 semanas",
      level: "Todos los niveles",
    },
  ]

  return (
    <main className="flex min-h-screen flex-col items-center pt-24">
      <section className="w-full max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-8">🏆 Nuestros Cursos</h1>
        <p className="text-center text-lg mb-12 max-w-3xl mx-auto">
          Descubre nuestros programas especializados para alcanzar tus objetivos fitness.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {courses.map((course, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-48">
                <Image src={course.image || "/placeholder.svg"} alt={course.title} fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-800">{course.title}</h3>
                <p className="text-gray-600 mb-4">{course.description}</p>
                <div className="flex justify-between text-sm text-gray-500 mb-4">
                  <span>⏱️ {course.duration}</span>
                  <span>📊 {course.level}</span>
                </div>
                <Link
                  href="#"
                  className="block w-full text-center bg-lime-500 hover:bg-lime-600 text-white font-bold py-2 px-4 rounded transition duration-300"
                >
                  Más Información
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}

