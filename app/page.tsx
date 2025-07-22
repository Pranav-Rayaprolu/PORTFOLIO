import { HeroSection } from "@/components/hero-section"
import { AboutBrief } from "@/components/about-brief"
import { FeaturedProjects } from "@/components/featured-projects"
import { Testimonials } from "@/components/testimonials"
import { ContactCTA } from "@/components/contact-cta"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <AboutBrief />
      <FeaturedProjects />
      <Testimonials />
      <ContactCTA />
    </main>
  )
}
