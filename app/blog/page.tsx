import Image from "next/image"
import Link from "next/link"

export default function BlogPage() {
  const posts = [
    {
      title: "Cómo Maximizar Tus Resultados en el Gimnasio",
      excerpt: "Descubre las estrategias más efectivas para optimizar tu entrenamiento y lograr resultados visibles más rápido con Focus Gym.",
      date: "30 Jul 2025",
      image: "/images/Blog/Cómo Maximizar Tus Resultados en el Gimnasio.jpg",
      category: "Entrenamiento",
    },
    {
      title: "Nutrición Pre y Post Entrenamiento",
      excerpt: "La alimentación adecuada antes y después de entrenar puede marcar una gran diferencia en tus resultados fitness.",
      date: "28 Jul 2025",
      image: "/images/Blog/Nutrición Pre y Post Entrenamiento.jpg",
      category: "Nutrición",
    },
    {
      title: "Beneficios del Entrenamiento de Fuerza para Mujeres",
      excerpt: "Desmitificamos los mitos sobre el entrenamiento de fuerza en mujeres y explicamos sus numerosos beneficios.",
      date: "25 Jul 2025",
      image: "/images/Blog/Beneficios del Entrenamiento de Fuerza para Mujeres.jpg",
      category: "Fitness",
    },
    {
      quote: "Los resultados no llegan de la noche a la mañana, pero cada día cuenta.",
      title: "Cómo Mantener la Motivación en Tu Rutina de Ejercicios",
      excerpt: "Estrategias prácticas para mantener la constancia y no abandonar tus objetivos de fitness en Focus Gym.",
      date: "20 Jul 2025",
      image: "/images/Blog/Cómo Mantener la Motivación en Tu Rutina de Ejercicios.jpg",
      category: "Motivación",
    },
    {
      title: "Los Mejores Suplementos para Aumentar Masa Muscular",
      excerpt: "Guía completa sobre los suplementos más efectivos para quienes buscan hipertrofia muscular y recuperación.",
      date: "15 Jul 2025",
      image: "/images/Blog/Los Mejores Suplementos para Aumentar Masa Muscular.jpg",
      category: "Suplementación",
    },
    {
      title: "Rutinas de Entrenamiento para Principiantes",
      excerpt: "Si estás comenzando en el mundo del fitness, estas rutinas te ayudarán a establecer una base sólida y segura.",
      date: "10 Jul 2025",
      image: "/images/Blog/Rutinas de Entrenamiento para Principiantes.jpg",
      category: "Entrenamiento",
    },
  ]

  return (
    <main className="flex min-h-screen flex-col items-center pt-24">
      <section className="w-full max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-8">📝 Nuestro Blog de Focus Gym</h1>
        <p className="text-center text-lg mb-12 max-w-3xl mx-auto">
          Artículos, consejos prácticos y las últimas novedades sobre fitness, nutrición y bienestar para potenciar tus resultados en Loja.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-48">
                <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-semibold px-2 py-1 bg-lime-100 text-lime-800 rounded-full">
                    {post.category}
                  </span>
                  <span className="text-xs text-gray-500">{post.date}</span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-800">{post.title}</h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <Link
                  href="#"
                  className="text-lime-600 hover:text-lime-800 font-medium inline-flex items-center transition duration-300"
                >
                  Leer Más →
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}

