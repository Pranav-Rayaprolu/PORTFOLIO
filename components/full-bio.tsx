"use client"

import Image from "next/image"
import { motion } from "framer-motion"

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
            About <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">Me</span>
          </h1>
          <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
            <p>
              I'm Pranav Rayaprolu, an aspiring Data Analyst who is passionate about contributing to the world through
              data-driven insights that help improve life for humans. My journey in data science combines analytical
              thinking with technical expertise to solve real-world problems.
            </p>
            <p>
              Currently, I'm focused on mastering data structures and algorithms, building my expertise in Python and
              Java, and developing practical skills in data analysis and machine learning. I believe in the power of
              data to drive meaningful change and innovation.
            </p>
            <p>
              When I'm not analyzing data or coding, you can find me working on personal projects, contributing to
              open-source initiatives, or exploring the latest trends in data science and artificial intelligence.
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
  )
}
