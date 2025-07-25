"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, Github, Play } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "Life Sync AI",
    description:
      "An intelligent companion that redefines the way we interact with digital devices uses GROQ and Gemini in the backend.",
    image:
      "https://camo.githubusercontent.com/ff518ae271a38d5c943ea73075c87caeb3a11cb909da4256b3a59bf45b2ddfe0/68747470733a2f2f64726976652e676f6f676c652e636f6d2f75633f69643d31617a746c5853796e424558536268776a4b75776d703854754677443472386434",
    technologies: [
      "Python",
      "GROQ",
      "FastAPI",
      "React",
      "Google AI Studio",
      "Sentimental Analysis",
      "Productivity Enchancer",
    ],
    demoUrl: "https://github.com/Pranav-Rayaprolu/LifeSync.ai.git",
    githubUrl: "https://github.com/Pranav-Rayaprolu/LifeSync.ai.git",
    featured: true,
  },
  {
    id: 2,
    title: "AI Meeting Summarizer",
    description:
      "Real-time object detection and tracking system for retail analytics and security applications.",
    image:
      "https://raw.githubusercontent.com/Pranav-Rayaprolu/AI-meeting-summriser/refs/heads/main/assets/summariser.png",
    technologies: [
      "React",
      "Langchain",
      "Docker",
      "FASTAPI",
      "MongoDB",
      "PostgreSQL",
    ],
    demoUrl: "https://ai-meeting-summriser.vercel.app/login",
    githubUrl:
      "https://github.com/Pranav-Rayaprolu/AI-meeting-summriser/tree/main",
    featured: true,
  },
  {
    id: 3,
    title: "AI SQL Query Generator",
    description:
      "Advanced Query generation backed by Gemini 2.5 pro is used to query a database in natural language without learning SQL.",
    image:
      "https://camo.githubusercontent.com/c2a09a0742bc5262780bd11e59c215a368d6066d31d712bbf14b1238c946dee1/68747470733a2f2f64726976652e676f6f676c652e636f6d2f75633f6578706f72743d766965772669643d317a66713637412d3861714c302d4c49393334566c6d446d73486a6f464c676b39",
    technologies: ["React", "FASTAPI", "GoogleAI Studio", "MySQL"],
    demoUrl:
      "https://drive.google.com/file/d/13-qYKHUwmuwDBXPykH0hN2T9CJ2LV7T2/view?usp=sharing",
    githubUrl: "#",
    featured: true,
  },
];

export function FeaturedProjects() {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore some of my most impactful AI projects with live demos and
            detailed documentation
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="glass-card border-0 overflow-hidden group hover:scale-105 transition-transform duration-300">
                <div className="relative overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={500}
                    height={300}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"></div>
                </div>
                <CardContent className="p-6 space-y-4">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <p className="text-muted-foreground">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-muted rounded-md text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-2 pt-2">
                    <Button size="sm" variant="outline" asChild>
                      <Link href={project.demoUrl}>
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Demo
                      </Link>
                    </Button>
                    <Button size="sm" variant="outline" asChild>
                      <Link href={project.githubUrl}>
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Button asChild size="lg">
            <Link href="/projects">View All Projects</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
