export function Testimonials() {
  return (
    <section className="w-full py-16 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">🌟 Testimonios que inspiran</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Nuestros clientes han logrado resultados impactantes. Únete a LEADER⚡GYM y transforma tu vida con nosotros.
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-12">
          <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg">
            {/* Reemplazando el video con una imagen */}
            <div className="w-full h-full relative">
              <img
                src="https://automatizotunegocio.net/leadergym/5.jpg"
                alt="Testimonios LEADER⚡GYM"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <div className="bg-lime-500 rounded-full p-4 shadow-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-12 w-12 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <a
            href="https://wa.me/593990039794"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-lime-500 hover:bg-lime-600 text-white font-bold py-3 px-8 rounded-full text-lg transition-colors mb-6"
          >
            ✨ ¡No lo pienses más, reserva ya!
          </a>
          <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300">
            🤝 Comparte la experiencia de cambio con nosotros.
          </h3>
        </div>
      </div>
    </section>
  )
}

