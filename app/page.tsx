import { Hero } from "@/components/hero"
import { Testimonials } from "@/components/testimonials"
import { Features } from "@/components/features"
import { Services } from "@/components/services"
import { Portfolio } from "@/components/portfolio"
import { Timeline } from "@/components/timeline"
import { SatisfiedClients } from "@/components/satisfied-clients"
import { Contact } from "@/components/contact"
import { Faq } from "@/components/faq"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Hero />
      <Testimonials />
      <Features />
      <Services />
      <Portfolio />
      <Timeline />
      <SatisfiedClients />
      <Contact />
      <Faq />
    </main>
  )
}

