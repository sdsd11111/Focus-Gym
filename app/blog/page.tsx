import Image from "next/image"
import Link from "next/link"

export default function BlogPage() {
  const posts = [
    {
      title: "Cómo maximizar tus resultados en el gimnasio",
      excerpt:
        "Descubre las estrategias más efectivas para optimizar tu entrenamiento y lograr resultados visibles más rápido.",
      date: "15 Mar 2025",
      image: "https://i.pinimg.com/736x/f2/6b/3a/f26b3a672f62aaabe69149876894cd9d.jpg",
      category: "Entrenamiento",
    },
    {
      title: "Nutrición pre y post entrenamiento",
      excerpt:
        "La alimentación adecuada antes y después de entrenar puede marcar una gran diferencia en tus resultados.",
      date: "10 Mar 2025",
      image: "https://i.pinimg.com/736x/e8/1d/bb/e81dbb7365ece466d680d4911ed7ebcc.jpg",
      category: "Nutrición",
    },
    {
      title: "Beneficios del entrenamiento de fuerza para mujeres",
      excerpt:
        "Desmitificamos los mitos sobre el entrenamiento de fuerza en mujeres y explicamos sus numerosos beneficios.",
      date: "5 Mar 2025",
      image: "https://i.pinimg.com/736x/28/ff/42/28ff425249a9fe8a9ec9066a80182570.jpg",
      category: "Fitness",
    },
    {
      title: "Cómo mantener la motivación en tu rutina de ejercicios",
      excerpt: "Estrategias prácticas para mantener la constancia y no abandonar tus objetivos fitness.",
      date: "28 Feb 2025",
      image: "https://i.pinimg.com/736x/fd/07/c4/fd07c469e59e8359fae2f2ec42e5cd6a.jpg",
      category: "Motivación",
    },
    {
      title: "Los mejores suplementos para aumentar masa muscular",
      excerpt: "Guía completa sobre los suplementos más efectivos para quienes buscan hipertrofia muscular.",
      date: "20 Feb 2025",
      image: "https://i.pinimg.com/736x/64/e7/fa/64e7fae47ea47b453233049765d29521.jpg",
      category: "Suplementación",
    },
    {
      title: "Rutinas de entrenamiento para principiantes",
      excerpt: "Si estás comenzando en el mundo del fitness, estas rutinas te ayudarán a establecer una base sólida.",
      date: "15 Feb 2025",
      image: "https://i.pinimg.com/736x/35/e7/0e/35e70eaba7b2988185013f00b4887f38.jpg",
      category: "Entrenamiento",
    },
  ]

  return (
    <main className="flex min-h-screen flex-col items-center pt-24">
      <section className="w-full max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-8">📝 Nuestro Blog</h1>
        <p className="text-center text-lg mb-12 max-w-3xl mx-auto">
          Artículos, consejos y novedades sobre fitness, nutrición y bienestar.
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
                  Leer más
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

