import { ProjectGrid } from "@/components/project-grid"
import { ProjectFilters } from "@/components/project-filters"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Projects by Pranav Rayaprolu",
  description:
    "Explore Pranav Rayaprolu's data analysis and programming projects including Python learning, Java DSA implementations, and data science notebooks.",
}

export default function ProjectsPage() {
  return (
    <main className="min-h-screen pt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            My Projects
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore my data analysis and programming projects with source code and documentation
          </p>
        </div>
        <ProjectFilters />
        <ProjectGrid />
      </div>
    </main>
  )
}
