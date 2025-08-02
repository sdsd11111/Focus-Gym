import Link from "next/link"
import { HeroSlider } from "@/components/hero-slider"

export function Hero() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 h-screen flex items-center">
      <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-16 w-full items-center">
        {/* Texto */}
        <div className="order-2 lg:order-1 text-center lg:text-left z-10 lg:pr-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 tracking-tight dark:text-white">
            ¡Alcanza tu máximo potencial con <span className="text-lime-500">FOCUS GYM</span>!
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl mb-8 text-gray-700 dark:text-gray-300">
            💪Transforma tu cuerpo y mente en Loja. ¡Tu bienestar comienza hoy!
          </p>
          <Link
            href="#contacto"
            className="inline-block bg-lime-500 hover:bg-lime-600 text-white font-bold py-4 px-10 rounded-full text-lg lg:text-xl transition-colors transform hover:scale-105 duration-200"
          >
            ¡Reserva tu Clase Gratis Ahora! ✨
          </Link>
        </div>

        {/* Slider - Aumentado el tamaño */}
        <div className="order-1 lg:order-2 w-full h-[60vh] lg:h-[80vh] rounded-2xl overflow-hidden shadow-2xl lg:shadow-3xl transform hover:scale-[1.02] transition-transform duration-300">
          <HeroSlider />
        </div>
      </div>
    </div>
  )
}

