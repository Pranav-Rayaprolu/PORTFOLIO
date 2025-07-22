"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    id: 1,
    title: "AI Engineer Intern",
    company: "Intraintech",
    location: "Hyderabad, India",
    period: "May 2024 - Jun 2024",
    description:
      "Leading AI research and development initiatives, building scalable machine learning systems that serve millions of users.",
    achievements: [
      "Developed an AI-integrated backend, boosting NLP response accuracy by 20%",
      "Created interactive data dashboards, enhancing analytical insights by 15%",
      "Led a cross- sectional team of 6 members utilising ability to communicate and collaborate, decision- making and strategic-thinking to achieve project goals and ensuring to meet deadlines effectively",
      "Implemented Agile methodologies, ensuring on-time feature rollouts and refining data visualisation for actionable insights.",
    ],
  },
  {
    id: 3,
    title: "Published a research paper",
    Title:
      " Enhancing Recruitment Efficiency with Generative AI, demonstrating improvement in contextual understanding for automated interview systems",
    location: "VITAP University",
    period: "2023 - 2024",
    description:
      "Conducted research on deep learning applications in computer vision and contributed to open-source projects.",
    achievements: [
      "Co-authored paper on novel CNN architecture",
      "Contributed to PyTorch and TensorFlow ecosystems",
      "Presented research at international conferences",
    ],
  },
];

export function ExperienceTimeline() {
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
          Professional{" "}
          <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            Experience
          </span>
        </h2>
        <p className="text-xl text-muted-foreground">
          My journey in AI and software development
        </p>
      </div>

      <div className="relative">
        <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 to-purple-600"></div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`relative flex items-center ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
            >
              <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 w-4 h-4 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full border-4 border-background"></div>

              <div
                className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-8" : "md:pl-8"}`}
              >
                <div className="glass-card p-6 rounded-2xl">
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-bold">{exp.title}</h3>
                      <p className="text-lg text-blue-400 font-semibold">
                        {exp.company}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {exp.period}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {exp.location}
                      </div>
                    </div>

                    <p className="text-muted-foreground">{exp.description}</p>

                    <div>
                      <h4 className="font-semibold mb-2">Key Achievements:</h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0"></span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
