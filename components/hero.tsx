import Image from "next/image"
import Link from "next/link"

export function Hero() {
  return (
    <section className="w-full pt-24 md:pt-32 lg:pt-40 pb-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:grid md:grid-cols-2 md:gap-16 items-center">
          {/* Imagen - Aparece primero en móvil */}
          <div className="order-1 md:order-2 w-full mb-8 md:mb-0">
            <div className="relative h-[300px] md:h-[400px] lg:h-[500px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="https://automatizotunegocio.net/leadergym/4.jpg"
                alt="Entrenamiento en LEADER⚡GYM"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Texto - Aparece segundo en móvil */}
          <div className="order-2 md:order-1 text-center md:text-left">
            <p className="text-lg md:text-xl mb-4 text-gray-700 dark:text-gray-300">
              💪 ¡Imagina alcanzar tu máximo potencial!
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight dark:text-white">
              🏋️‍♂️ LEADER⚡GYM <span className="block text-2xl md:text-3xl mt-2 text-lime-500">Figura Extrema</span>
            </h1>
            <p className="text-xl mb-8 text-gray-700 dark:text-gray-300">
              Te ayudaremos a transformar tu cuerpo y mente.
            </p>
            <h3 className="text-xl md:text-2xl font-semibold mb-8 text-yellow-400">⚠️ ¡El mañana es hoy!</h3>
            <Link
              href="https://wa.me/593990039794"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-lime-500 hover:bg-lime-600 text-white font-bold py-3 px-8 rounded-full text-lg transition-colors"
            >
              🚀 ¡Quiero reservar ahora!
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

