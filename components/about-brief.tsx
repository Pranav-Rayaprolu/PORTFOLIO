"use client";

import { Badge } from "@/components/ui/badge";
import { Brain, Code, Zap } from "lucide-react";
import { motion } from "framer-motion";

const skills = [
  "Data Analysis",
  "Machine Learning",
  "Python",
  "Java",
  "Data Structures & Algorithms",
  "Power BI",
  "SQL",
  "R",
  "Statistics",
];

export function AboutBrief() {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center space-y-12"
        >
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold">
              About{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                Me
              </span>
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              I am a results-driven AI Developer with expertise in Machine
              Learning, Deep Learning, Natural Language Processing (NLP), and
              Large Language Model (LLM) integration. I specialize in building
              scalable, data-driven applications using frameworks like React,
              and FastAPI to solve complex problems and drive business growth.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass-card p-6 rounded-2xl space-y-4">
              <Brain className="w-12 h-12 text-blue-400 mx-auto" />
              <h3 className="text-xl font-semibold">AI Research</h3>
              <p className="text-muted-foreground">
                Developing cutting-edge algorithms and models for complex
                problem-solving
              </p>
            </div>
            <div className="glass-card p-6 rounded-2xl space-y-4">
              <Code className="w-12 h-12 text-purple-400 mx-auto" />
              <h3 className="text-xl font-semibold">Full-Stack Development</h3>
              <p className="text-muted-foreground">
                Building scalable applications that integrate AI seamlessly into
                user experiences
              </p>
            </div>
            <div className="glass-card p-6 rounded-2xl space-y-4">
              <Zap className="w-12 h-12 text-pink-400 mx-auto" />
              <h3 className="text-xl font-semibold">Innovation</h3>
              <p className="text-muted-foreground">
                Pushing boundaries with creative solutions and emerging
                technologies
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl font-semibold">Core Technologies</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {skills.map((skill) => (
                <Badge
                  key={skill}
                  variant="secondary"
                  className="px-4 py-2 text-sm"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
