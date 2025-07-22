import { NextResponse } from "next/server"

const projects = [
  {
    id: 1,
    title: "Learning Python",
    description:
      "Comprehensive Python learning journey covering fundamentals, data structures, and advanced concepts for data analysis and machine learning.",
    videoUrl: "https://example.com/video1.mp4",
    githubUrl: "https://github.com/Pranav-Rayaprolu/Learning-Python",
    demoUrl: null,
    technologies: ["Python", "Jupyter Notebook", "Data Analysis"],
    category: "Learning",
    featured: true,
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    id: 2,
    title: "Data Structures & Algorithms in Java",
    description:
      "Implementation of fundamental data structures and algorithms in Java, focusing on problem-solving and optimization techniques.",
    videoUrl: "https://example.com/video2.mp4",
    githubUrl: "https://github.com/Pranav-Rayaprolu/dsa_in_java",
    demoUrl: null,
    technologies: ["Java", "Data Structures", "Algorithms"],
    category: "Programming",
    featured: true,
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    id: 3,
    title: "100 Days of Code Challenge",
    description:
      "Daily coding practice covering various programming concepts, algorithms, and project implementations over 100 days.",
    videoUrl: "https://example.com/video3.mp4",
    githubUrl: "https://github.com/Pranav-Rayaprolu/-100days-of-code.git",
    demoUrl: null,
    technologies: ["Java", "Problem Solving", "Daily Practice"],
    category: "Challenge",
    featured: true,
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    id: 4,
    title: "Microsoft PowerUP Resources",
    description:
      "Collection of resources and materials from Microsoft PowerUP program, focusing on cloud technologies and development skills.",
    videoUrl: "https://example.com/video4.mp4",
    githubUrl: "https://github.com/Pranav-Rayaprolu/Microsoft-PowerUP-Resources",
    demoUrl: null,
    technologies: ["Microsoft Azure", "Cloud Computing", "Resources"],
    category: "Resources",
    featured: false,
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    id: 5,
    title: "Data Analysis Notes",
    description:
      "Comprehensive notes and examples covering data analysis techniques, statistical methods, and visualization using R.",
    videoUrl: "https://example.com/video5.mp4",
    githubUrl: "https://github.com/Pranav-Rayaprolu/My-Data-Analysis-Notes",
    demoUrl: null,
    technologies: ["R", "Data Analysis", "Statistics", "Visualization"],
    category: "Data Science",
    featured: false,
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    id: 6,
    title: "DSA in 100 Days",
    description:
      "Structured approach to mastering Data Structures and Algorithms over 100 days with daily practice and implementation.",
    videoUrl: "https://example.com/video6.mp4",
    githubUrl: "https://github.com/Pranav-Rayaprolu/DSAin100days",
    demoUrl: null,
    technologies: ["Java", "Data Structures", "Algorithms", "Problem Solving"],
    category: "Programming",
    featured: false,
    image: "/placeholder.svg?height=300&width=500",
  },
]

export async function GET() {
  try {
    return NextResponse.json(projects, { status: 200 })
  } catch (error) {
    console.error("Projects API error:", error)
    return NextResponse.json({ error: "Failed to fetch projects" }, { status: 500 })
  }
}
