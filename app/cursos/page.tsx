import Image from "next/image"
import Link from "next/link"

export default function CursosPage() {
  const courses = [
    {
      category: "FUNCIONAL",
      title: "Entrenamiento Funcional",
      description: "Mejora tu condición física general con ejercicios que simulan movimientos cotidianos y optimizan tu rendimiento.",
      image: "/images/Cursos/Entrenamiento Funcional.jpg",
      duration: "8 semanas",
      level: "Todos los niveles",
      buttonText: "¡INSCRIPCIONES ABIERTAS!"
    },
    {
      category: "HIPERTROFIA",
      title: "Hipertrofia Muscular",
      description: "Programa especializado para aumentar el tamaño y la fuerza muscular, diseñado para resultados máximos.",
      image: "/images/Cursos/Hipertrofia Muscular.jpg",
      duration: "12 semanas",
      level: "Intermedio-Avanzado",
      buttonText: "¡INSCRIPCIONES ABIERTAS!"
    },
    {
      category: "CARDIO DANCE",
      title: "Cardio Dance",
      description: "Quema calorías mientras te diviertes con rutinas de baile energéticas y música contagiosa.",
      image: "/images/Cursos/Cardio Dance.jpg",
      duration: "Continuo",
      level: "Todos los niveles",
      buttonText: "¡INSCRIPCIONES ABIERTAS!"
    },
    {
      category: "NUTRICIÓN",
      title: "Nutrición Deportiva",
      description: "Aprende a alimentarte correctamente para optimizar tus resultados en el gimnasio y potenciar tu bienestar.",
      image: "/images/Cursos/Nutrición Deportiva.jpg",
      duration: "4 semanas",
      level: "Todos los niveles",
      buttonText: "¡INSCRIPCIONES ABIERTAS!"
    },
  ]

  return (
    <main className="flex min-h-screen flex-col items-center pt-24">
      <section className="w-full max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-8">🏆 Nuestros Cursos Especializados en Focus Gym</h1>
        <p className="text-center text-lg mb-12 max-w-3xl mx-auto">
          Descubre en Focus Gym de Loja nuestros programas diseñados para potenciar tus habilidades y alcanzar tus objetivos de fitness.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {courses.map((course, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden relative">
              <div className="absolute top-4 right-4 bg-lime-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                {course.category}
              </div>
              <div className="relative h-48">
                <Image src={course.image || "/placeholder.svg"} alt={course.title} fill className="object-cover" />
              </div>
              <div className="p-6">
                <div className="text-right mb-2">
                  <span className="text-sm text-gray-500">Consulta horarios específicos al unirte</span>
                </div>
                <button className="w-full bg-lime-100 text-lime-700 text-xs font-bold py-1 px-3 rounded-full mb-4">
                  {course.buttonText}
                </button>
                <h3 className="text-xl font-bold mb-2 text-gray-800">{course.title}</h3>
                <p className="text-gray-600 mb-4">{course.description}</p>
                <div className="flex justify-between text-sm text-gray-500 mb-4">
                  <span>{course.duration} | {course.level}</span>
                </div>
                <Link
                  href="#"
                  className="block w-full text-center border-2 border-lime-500 text-lime-500 hover:bg-lime-50 font-bold py-2 px-4 rounded transition duration-300"
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

