import { Github, Linkedin, Twitter, Mail } from "lucide-react"
import Link from "next/link"

const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/Pranav-Rayaprolu",
    icon: Github,
    color: "hover:text-gray-400",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/pranav-rayaprolu/",
    icon: Linkedin,
    color: "hover:text-blue-400",
  },
  {
    name: "Twitter",
    url: "https://twitter.com",
    icon: Twitter,
    color: "hover:text-blue-400",
  },
  {
    name: "Email",
    url: "mailto:pranav.rayaprolu@gmail.com",
    icon: Mail,
    color: "hover:text-green-400",
  },
]

export function SocialLinks() {
  return (
    <div className="glass-card p-8 rounded-2xl">
      <h3 className="text-2xl font-bold mb-6">Connect With Me</h3>
      <div className="grid grid-cols-2 gap-4">
        {socialLinks.map((link) => (
          <Link
            key={link.name}
            href={link.url}
            className={`flex items-center gap-3 p-4 rounded-lg bg-muted/50 transition-colors ${link.color}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <link.icon className="w-5 h-5" />
            <span className="font-medium">{link.name}</span>
          </Link>
        ))}
      </div>
    </div>
  )
}
