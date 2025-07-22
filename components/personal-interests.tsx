"use client"

import { motion } from "framer-motion"
import { Book, Camera, Code, Music, Plane, Users } from "lucide-react"

const interests = [
  {
    icon: Code,
    title: "Open Source",
    description: "Contributing to AI and ML libraries",
  },
  {
    icon: Book,
    title: "Technical Writing",
    description: "Sharing knowledge through blogs and articles",
  },
  {
    icon: Users,
    title: "Mentoring",
    description: "Helping aspiring developers grow",
  },
  {
    icon: Camera,
    title: "Photography",
    description: "Capturing moments and landscapes",
  },
  {
    icon: Music,
    title: "Music Production",
    description: "Creating electronic music with AI tools",
  },
  {
    icon: Plane,
    title: "Travel",
    description: "Exploring new cultures and technologies",
  },
]

export function PersonalInterests() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Personal{" "}
          <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">Interests</span>
        </h2>
        <p className="text-xl text-muted-foreground">What I'm passionate about beyond coding</p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {interests.map((interest, index) => (
          <motion.div
            key={interest.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="glass-card p-6 rounded-2xl text-center space-y-4 hover:scale-105 transition-transform duration-300"
          >
            <div className="w-12 h-12 mx-auto bg-gradient-to-r from-blue-400 to-purple-600 rounded-full flex items-center justify-center">
              <interest.icon className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold">{interest.title}</h3>
            <p className="text-muted-foreground text-sm">{interest.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}
