"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Github, Linkedin, FileText } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export default function Hero() {
  const [typedText, setTypedText] = useState("")
  const fullText = "Full-Stack Developer & Tech Enthusiast"
  const [textIndex, setTextIndex] = useState(0)

  useEffect(() => {
    if (textIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText(typedText + fullText[textIndex])
        setTextIndex(textIndex + 1)
      }, 100)
      return () => clearTimeout(timeout)
    }
  }, [typedText, textIndex])

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 pb-8 bg-white dark:bg-black">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-6 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="order-2 md:order-1"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-black dark:text-white">
            Hi, I'm <span className="text-red-600 inline-block">Mitchelle Muiruri</span>
          </h1>
          <h2 className="text-xl md:text-2xl font-medium mb-6 text-gray-700 dark:text-gray-300 h-8">
            {typedText}
            <span className="animate-blink">|</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8 text-lg max-w-lg">
            A passionate full-stack developer focused on creating social impact through technology. I specialize in
            building visually appealing and functional web applications.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button className="bg-red-600 hover:bg-red-700 text-white">
              <Link href="#projects" className="flex items-center gap-2">
                View Projects <ArrowRight size={16} />
              </Link>
            </Button>
            <Button variant="outline" className="border-red-600 text-red-600 hover:bg-red-50 dark:hover:bg-red-950">
              <Link href="#contact" className="flex items-center gap-2">
                Contact Me
              </Link>
            </Button>
          </div>
          <div className="flex gap-4 mt-8">
            <Link
              href="https://github.com/shaymuiruri"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-red-600 dark:text-gray-300 dark:hover:text-red-600 transition-colors"
            >
              <Github size={24} />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link
              href="https://www.linkedin.com/in/mitchelle-muiruri-477559269/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-red-600 dark:text-gray-300 dark:hover:text-red-600 transition-colors"
            >
              <Linkedin size={24} />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-red-600 dark:text-gray-300 dark:hover:text-red-600 transition-colors"
            >
              <FileText size={24} />
              <span className="sr-only">Resume</span>
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="order-1 md:order-2 flex justify-center"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-red-600">
            <img src="/images/mitchelle-headshot.jpeg" alt="Mitchelle Muiruri" className="w-full h-full object-cover" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

