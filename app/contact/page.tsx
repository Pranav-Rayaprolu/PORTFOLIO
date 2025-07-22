import { ContactForm } from "@/components/contact-form"
import { SocialLinks } from "@/components/social-links"
import { Mail, MapPin } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Pranav Rayaprolu",
  description:
    "Get in touch with Pranav Rayaprolu for data analysis projects, collaborations, or career opportunities.",
}

export default function ContactPage() {
  return (
    <main className="min-h-screen pt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            Get In Touch
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Let's collaborate on data analysis projects or discuss opportunities
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="space-y-8">
            <ContactForm />
          </div>

          <div className="space-y-8">
            <div className="glass-card p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <Mail className="w-5 h-5 text-blue-400" />
                  <span>pranav.rayaprolu@gmail.com</span>
                </div>
                <div className="flex items-center gap-4">
                  <MapPin className="w-5 h-5 text-blue-400" />
                  <span>Available for Remote Work</span>
                </div>
              </div>
            </div>

            <SocialLinks />
          </div>
        </div>
      </div>
    </main>
  )
}
