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
                src="/images/Inicio/Hero.jpg"
                alt="Entrenamiento en Focus Gym Loja"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Texto - Aparece segundo en móvil */}
          <div className="order-2 md:order-1 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight dark:text-white">
              ¡Imagina Alcanzar Tu Máximo Potencial con <span className="text-lime-500">FOCUS GYM</span>!
            </h1>
            <p className="text-xl mb-8 text-gray-700 dark:text-gray-300">
              Transforma tu cuerpo y mente en Loja. ¡Tu bienestar comienza hoy!
            </p>
            <p className="text-lg md:text-xl mb-4 text-gray-700 dark:text-gray-300">
              💪 ¡El cambio que buscas está al alcance de tu mano!
            </p>
            <Link
              href="#contacto"
              className="inline-block bg-lime-500 hover:bg-lime-600 text-white font-bold py-3 px-8 rounded-full text-lg transition-colors"
            >
              ¡Reserva tu Clase Gratis Ahora! ✨
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

