"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, Play } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

interface Project {
  id: number
  title: string
  description: string
  videoUrl?: string
  githubUrl: string
  demoUrl?: string
  technologies: string[]
  category: string
  featured: boolean
  image: string
}

const categories = ["All", "Learning", "Programming", "Challenge", "Resources", "Data Science"]

export function ProjectGrid() {
  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [selectedCategory, setSelectedCategory] = useState("All")

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch("/api/projects")
        if (!response.ok) {
          throw new Error("Failed to fetch projects")
        }
        const data = await response.json()
        setProjects(Array.isArray(data) ? data : [])
      } catch (error) {
        console.error("Failed to fetch projects:", error)
        setError("Failed to load projects")
        setProjects([])
      } finally {
        setLoading(false)
      }
    }

    fetchProjects()
  }, [])

  const filteredProjects =
    selectedCategory === "All" ? projects : projects.filter((project) => project?.category === selectedCategory)

  if (loading) {
    return (
      <div className="flex justify-center items-center py-20">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-400"></div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="text-center py-20">
        <p className="text-red-500 text-lg">{error}</p>
        <Button onClick={() => window.location.reload()} className="mt-4">
          Try Again
        </Button>
      </div>
    )
  }

  if (projects.length === 0) {
    return (
      <div className="text-center py-20">
        <p className="text-muted-foreground text-lg">No projects found.</p>
      </div>
    )
  }

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap gap-2 justify-center">
        {categories.map((category) => (
          <Button
            key={category}
            variant={selectedCategory === category ? "default" : "outline"}
            onClick={() => setSelectedCategory(category)}
            className="mb-2"
          >
            {category}
          </Button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project, index) => {
          if (!project || !project.id) return null

          return (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              layout
            >
              <Card className="glass-card border-0 overflow-hidden group hover:scale-105 transition-all duration-300 h-full">
                <div className="relative overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg?height=300&width=500"}
                    alt={project.title || "Project"}
                    width={500}
                    height={300}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    {project.videoUrl && (
                      <Button size="sm" className="mr-2">
                        <Play className="w-4 h-4 mr-2" />
                        Demo
                      </Button>
                    )}
                  </div>
                  {project.featured && (
                    <Badge className="absolute top-4 left-4 bg-gradient-to-r from-blue-400 to-purple-600">
                      Featured
                    </Badge>
                  )}
                </div>
                <CardContent className="p-6 space-y-4 flex-1 flex flex-col">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2">{project.title || "Untitled Project"}</h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      {project.description || "No description available"}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies &&
                        Array.isArray(project.technologies) &&
                        project.technologies.map((tech) => (
                          <span key={tech} className="px-2 py-1 bg-muted rounded-md text-xs font-medium">
                            {tech}
                          </span>
                        ))}
                    </div>
                  </div>
                  <div className="flex gap-2 pt-2">
                    {project.demoUrl && (
                      <Button size="sm" variant="outline" asChild className="flex-1">
                        <Link href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Demo
                        </Link>
                      </Button>
                    )}
                    {project.githubUrl && (
                      <Button size="sm" variant="outline" asChild className="flex-1">
                        <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4 mr-2" />
                          Code
                        </Link>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )
        })}
      </div>

      {filteredProjects.length === 0 && selectedCategory !== "All" && (
        <div className="text-center py-10">
          <p className="text-muted-foreground">No projects found in the "{selectedCategory}" category.</p>
        </div>
      )}
    </div>
  )
}
