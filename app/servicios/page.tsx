import { Services } from "@/components/services"
import { Features } from "@/components/features"

export default function ServiciosPage() {
  return (
    <main className="flex min-h-screen flex-col items-center pt-24">
      <section className="w-full max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-8">🏋️‍♂️ Nuestros Servicios</h1>
        <p className="text-center text-lg mb-12 max-w-3xl mx-auto">
          En LEADER⚡GYM te ofrecemos una variedad de servicios diseñados para ayudarte a alcanzar tus metas fitness.
        </p>
        <Services />
        <Features />
      </section>
    </main>
  )
}

