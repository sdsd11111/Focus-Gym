export function Testimonials() {
  return (
    <section className="w-full py-16 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">🌟 Historias de Éxito que Inspiran</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Descubre cómo nuestros miembros en Loja han transformado sus vidas con Focus Gym. ¡Tu historia de éxito te espera!
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-12">
          <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/-cCM1MK59Nw?autoplay=0&controls=1&showinfo=0&rel=0"
              title="Historias de éxito en Focus Gym Loja"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
        </div>

        <div className="text-center">
          <a
            href="#contacto"
            className="inline-block bg-lime-500 hover:bg-lime-600 text-white font-bold py-3 px-8 rounded-full text-lg transition-colors mb-6"
          >
            ¡Decídete y Empieza Hoy Tu Transformación! 💪
          </a>
          <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300">
            Tu viaje hacia una mejor versión comienza hoy en Focus Gym Loja
          </h3>
        </div>
      </div>
    </section>
  )
}

