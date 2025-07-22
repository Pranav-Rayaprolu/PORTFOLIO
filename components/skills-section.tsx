"use client";

import { motion } from "framer-motion";
import { Progress } from "@/components/ui/progress";

const skills = [
  { name: "Machine Learning", level: 95, category: "AI/ML" },
  { name: "Deep Learning", level: 90, category: "AI/ML" },
  { name: "Python", level: 95, category: "Programming" },
  { name: "TensorFlow", level: 90, category: "Frameworks" },
  { name: "React/Next.js", level: 85, category: "Frontend" },
  { name: "FASTAPI", level: 80, category: "Backend" },
  { name: "Computer Vision", level: 85, category: "AI/ML" },
  { name: "NLP", level: 88, category: "AI/ML" },
];

const categories = [
  "AI/ML",
  "Programming",
  "Frameworks",
  "Frontend",
  "Backend",
];

export function SkillsSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="mb-20"
    >
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Technical{" "}
          <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            Skills
          </span>
        </h2>
        <p className="text-xl text-muted-foreground">
          My expertise across various technologies and domains
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {categories.map((category) => (
          <div key={category} className="glass-card p-6 rounded-2xl">
            <h3 className="text-xl font-semibold mb-6">{category}</h3>
            <div className="space-y-4">
              {skills
                .filter((skill) => skill.category === category)
                .map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="space-y-2"
                  >
                    <div className="flex justify-between">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">
                        {skill.level}%
                      </span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </motion.div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
}
