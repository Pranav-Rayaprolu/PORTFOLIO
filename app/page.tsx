import { HeroSection } from "@/components/hero-section";
import { AboutBrief } from "@/components/about-brief";
import { FeaturedProjects } from "@/components/featured-projects";

import { ContactCTA } from "@/components/contact-cta";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <AboutBrief />
      <FeaturedProjects />
      <ContactCTA />
    </main>
  );
}
