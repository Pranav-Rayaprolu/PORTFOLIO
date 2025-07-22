import { FullBio } from "@/components/full-bio"
import { SkillsSection } from "@/components/skills-section"
import { ExperienceTimeline } from "@/components/experience-timeline"
import { PersonalInterests } from "@/components/personal-interests"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Pranav Rayaprolu",
  description:
    "Learn about Pranav Rayaprolu's journey as an aspiring Data Analyst, his skills in Python, Java, and data analysis, and his passion for transforming data into insights.",
}

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-20">
      <div className="container mx-auto px-4 py-12">
        <FullBio />
        <SkillsSection />
        <ExperienceTimeline />
        <PersonalInterests />
      </div>
    </main>
  )
}
