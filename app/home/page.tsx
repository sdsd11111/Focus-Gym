import { Hero } from "@/components/hero"
import { Testimonials } from "@/components/testimonials"
import { Features } from "@/components/features"
import { Services } from "@/components/services"
import { Portfolio } from "@/components/portfolio"
import { SatisfiedClients } from "@/components/satisfied-clients"
import { Contact } from "@/components/contact"
import { Faq } from "@/components/faq"
import { VideoSection } from "@/components/video-section"

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero />
      <Testimonials />
      <VideoSection />
      <Features />
      <Services />
      <Portfolio />
      <SatisfiedClients />
      <Contact />
      <Faq />
    </main>
  )
}
