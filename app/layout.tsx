import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ParticleBackground } from "@/components/particle-background"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "Pranav Rayaprolu - Data Analyst & AI Developer Portfolio",
    template: "%s | Pranav Rayaprolu",
  },
  description:
    "Aspiring Data Analyst passionate about transforming data into actionable insights. Explore my projects in Python, Java, data analysis, and machine learning.",
  keywords: ["Data Analyst", "Python", "Java", "Machine Learning", "Data Science", "Portfolio", "Pranav Rayaprolu"],
  authors: [{ name: "Pranav Rayaprolu" }],
  creator: "Pranav Rayaprolu",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://pranav-rayaprolu.vercel.app",
    title: "Pranav Rayaprolu - Data Analyst & AI Developer",
    description: "Aspiring Data Analyst passionate about transforming data into actionable insights",
    siteName: "Pranav Rayaprolu Portfolio",
    images: [
      {
        url: "/images/pranav-portrait.jpeg",
        width: 1200,
        height: 630,
        alt: "Pranav Rayaprolu - Data Analyst & AI Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pranav Rayaprolu - Data Analyst & AI Developer",
    description: "Aspiring Data Analyst passionate about transforming data into actionable insights",
    images: ["/images/pranav-portrait.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <ParticleBackground />
          <Navigation />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
