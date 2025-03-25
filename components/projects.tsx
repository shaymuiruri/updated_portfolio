"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import Link from "next/link"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Projects() {
  const projects = {
    websites: [
      {
        title: "Portfolio Website",
        description:
          "A personal portfolio website built with Next.js and Tailwind CSS showcasing my projects and skills.",
        image: "/images/portfolio-website.png",
        tags: ["Next.js", "Tailwind CSS", "React"],
        github: "https://github.com/shaymuiruri",
        demo: "https://mitchellemuiruri.netlify.app/",
      },
      {
        title: "Chevening Alumni Website",
        description: "Official website for the Chevening Kenya Alumni Network built with Django.",
        image: "/images/chevening-website.png",
        tags: ["Django", "Python", "Bootstrap"],
        github: "https://github.com/shaymuiruri/cheveningdbtrial",
        demo: "https://cheveningkenya.org/",
      },
      {
        title: "Africost Limited",
        description: "Corporate website for Africost Limited showcasing their services and portfolio.",
        image: "/images/africost-website.png",
        tags: ["HTML", "CSS", "JavaScript"],
        github: "https://github.com/shaymuiruri/africost-ltd-website",
        demo: null,
      },
    ],
    apps: [
      {
        title: "Kusoma Fun",
        description: "An ed-tech application focused on centralizing the world using education.",
        image: "/images/kusoma-fun.png",
        tags: ["React.js", "Django", "Education"],
        github: null,
        demo: null,
      },
      {
        title: "Shop Okoa",
        description: "A fintech mobile application built with React.js, Django, and MySQL.",
        image: "/images/shopokoa-website.png",
        tags: ["React.js", "Django", "MySQL"],
        github: "https://github.com/shaymuiruri/shop-okoa",
        demo: "https://www.shopokoa.com/",
      },
      {
        title: "Soko Beauty",
        description: "A short video mobile app with Mpesa payment integration using Daraja API.",
        image: "/images/sokobeauty-website.png",
        tags: ["Django", "Mpesa API", "Mobile"],
        github: "https://github.com/sharonouma/Sokobeauty_backend",
        demo: "https://sokobeauty.co.ke/",
      },
    ],
    bots: [
      {
        title: "CMD Bot",
        description: "A command-line bot that provides command auto-completion, voice inputs, and command suggestions.",
        image: "/images/cmd-bot.png",
        tags: ["Python", "C++", "CLI", "Voice Recognition"],
        github: "https://github.com/shaymuiruri/cmd_bot",
        demo: null,
      },
    ],
  }

  return (
    <section id="projects" className="py-20 bg-white dark:bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black dark:text-white">
            My <span className="text-red-600">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-red-600 mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto text-lg">
            A showcase of my recent work and projects
          </p>
        </motion.div>

        {/* Project Categories */}
        <Tabs defaultValue="websites" className="mt-12">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="websites">Websites</TabsTrigger>
            <TabsTrigger value="apps">Mobile & Web Apps</TabsTrigger>
            <TabsTrigger value="bots">Bots</TabsTrigger>
          </TabsList>

          <TabsContent value="websites" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.websites.map((project, index) => (
                <ProjectCard key={index} project={project} index={index} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="apps" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.apps.map((project, index) => (
                <ProjectCard key={index} project={project} index={index} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="bots" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.bots.map((project, index) => (
                <ProjectCard key={index} project={project} index={index} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}

interface ProjectProps {
  project: {
    title: string
    description: string
    image: string
    tags: string[]
    github: string | null
    demo: string | null
    period?: string
  }
  index: number
}

function ProjectCard({ project, index }: ProjectProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <Card className="h-full hover:shadow-md transition-shadow overflow-hidden border-t-4 border-t-red-600">
        <div className="h-48 overflow-hidden">
          <img
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            className="w-full h-full object-cover transition-transform hover:scale-105"
          />
        </div>
        <CardHeader>
          <CardTitle className="text-xl text-black dark:text-white">{project.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, tagIndex) => (
              <span
                key={tagIndex}
                className="bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-2 py-1 rounded-full text-xs"
              >
                {tag}
              </span>
            ))}
          </div>
        </CardContent>
        <CardFooter className="flex gap-3">
          {project.github && (
            <Button
              variant="outline"
              size="sm"
              className="border-red-600 text-red-600 hover:bg-red-50 dark:hover:bg-red-950"
            >
              <Link href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <Github size={14} /> Code
              </Link>
            </Button>
          )}
          {project.demo && (
            <Button size="sm" className="bg-red-600 hover:bg-red-700 text-white">
              <Link href={project.demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <ExternalLink size={14} /> Demo
              </Link>
            </Button>
          )}
        </CardFooter>
      </Card>
    </motion.div>
  )
}

