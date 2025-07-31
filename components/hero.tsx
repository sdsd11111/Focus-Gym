import Link from "next/link"
import { HeroSlider } from "@/components/hero-slider"

export function Hero() {
  return (
    <section className="w-full min-h-screen flex items-center">
      <div className="w-full max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:grid md:grid-cols-2 md:gap-16 items-center">
          {/* Imagen - Aparece primero en móvil */}
          <div className="order-1 md:order-2 w-full h-full md:absolute md:right-0 md:top-0 md:w-1/2 md:h-full md:pl-8">
            <div className="relative h-[50vh] md:h-full w-full rounded-lg md:rounded-none overflow-hidden shadow-xl md:shadow-2xl">
              <HeroSlider />
            </div>
          </div>

          {/* Texto - Aparece segundo en móvil */}
          <div className="order-2 md:order-1 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight dark:text-white">
              ¡Alcanza tu maximo potencial con <span className="text-lime-500">FOCUS GYM</span>!
            </h1>
            <p className="hidden md:block text-lg md:text-xl mb-8 text-gray-700 dark:text-gray-300">
              💪Transforma tu cuerpo y mente en Loja. ¡Tu bienestar comienza hoy!
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

