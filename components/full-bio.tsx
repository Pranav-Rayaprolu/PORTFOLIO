"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function FullBio() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="mb-20"
    >
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold">
            About{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              Me
            </span>
          </h1>
          <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
            <p>
              I'm <strong>Pranav Rayaprolu</strong> from Andhra Pradesh,
              currently pursuing my B.Tech in Computer Science and Engineering
              at
              <strong>Vellore Institute of Technology</strong>. I started my
              academic journey with Java and gradually expanded into web
              development and AI, which led me to intern as an{" "}
              <strong>AI Engineer at INTRAINTECH</strong>, where I worked on
              real-world AI-powered solutions.
            </p>

            <p>
              One of my proudest achievements is building{" "}
              <strong>LifeSync</strong>, a personal companion app that enhances
              work-life balance through intelligent task organization. I also
              developed a smart assistant, similar to Alexa, with
              <strong>contextual awareness</strong>, earning me a{" "}
              <strong>₹3000 cash prize</strong> in a university competition.
              Another project I led focuses on turning meeting discussions into{" "}
              <strong>actionable insights</strong> to improve corporate
              productivity.
            </p>

            <p>
              I'm passionate about building{" "}
              <strong>user-centric applications</strong> that solve real-world
              problems. My strengths include a strong{" "}
              <strong>curiosity to learn</strong>, adaptability, and effective
              collaboration. While I strive for perfection in every task, I'm
              actively working on improving <strong>task prioritization</strong>{" "}
              in fast-paced environments.
            </p>

            <p>
              Beyond tech, I'm an avid <strong>singer</strong>, enjoy{" "}
              <strong>sketching</strong>, and love to{" "}
              <strong>teach and share knowledge</strong>. I'm eager to
              contribute to a <strong>forward-thinking organization</strong>{" "}
              where I can leverage both my technical and management skills while
              growing with emerging technologies.
            </p>
          </div>
        </div>

        <div className="relative">
          <div className="relative w-full max-w-md mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-600 rounded-3xl blur-3xl opacity-30"></div>
            <div className="relative glass-card p-8 rounded-3xl">
              <Image
                src="/images/pranav-portrait.jpeg"
                alt="Pranav Rayaprolu"
                width={400}
                height={500}
                className="rounded-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
