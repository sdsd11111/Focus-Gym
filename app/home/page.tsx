import { VideoHero } from "@/components/video-hero"
import { Hero } from "@/components/hero"
import { Testimonials } from "@/components/testimonials"
import { Features } from "@/components/features"
import { Services } from "@/components/services"
import { Portfolio } from "@/components/portfolio"
import { SatisfiedClients } from "@/components/satisfied-clients"
import { Contact } from "@/components/contact"
import { Faq } from "@/components/faq"

export default function HomePage() {
  return (
    <main className="flex flex-col">
      {/* Nuevo Hero con video a pantalla completa */}
      <VideoHero />
      
      {/* Contenido original del Hero (ahora ocupa toda la pantalla) */}
      <section className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900">
        <div className="w-full">
          <Hero />
        </div>
      </section>
      
      {/* Resto de secciones */}
      <Testimonials />
      <Features />
      <Services />
      <Portfolio />
      <SatisfiedClients />
      <Contact />
      <Faq />
    </main>
  )
}
