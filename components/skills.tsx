"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Code, Database, Layout, Server, Terminal, Figma, GitBranch, Cpu } from "lucide-react"

export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Layout className="h-6 w-6 text-red-600" />,
      skills: ["HTML", "CSS", "React.js", "Next.js", "Tailwind CSS"],
    },
    {
      title: "Backend Development",
      icon: <Server className="h-6 w-6 text-red-600" />,
      skills: ["Python (Django)", "JavaScript"],
    },
    {
      title: "Design",
      icon: <Figma className="h-6 w-6 text-red-600" />,
      skills: ["Figma", "Canva", "Adobe", "Sketch"],
    },
    {
      title: "Database Management",
      icon: <Database className="h-6 w-6 text-red-600" />,
      skills: ["MySQL", "MongoDB", "SQLite", "PostgreSQL"],
    },
    {
      title: "Operating Systems",
      icon: <Terminal className="h-6 w-6 text-red-600" />,
      skills: ["Linux Ubuntu"],
    },
    {
      title: "Version Control",
      icon: <GitBranch className="h-6 w-6 text-red-600" />,
      skills: ["Git"],
    },
    {
      title: "Programming",
      icon: <Code className="h-6 w-6 text-red-600" />,
      skills: ["Problem Solving", "Algorithm Design", "Object-Oriented Programming"],
    },
    {
      title: "Computer Science",
      icon: <Cpu className="h-6 w-6 text-red-600" />,
      skills: ["Data Structures", "Algorithms", "Strong Analytical & Debugging Skills"],
    },
  ]

  return (
    <section id="skills" className="py-16 bg-white dark:bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black dark:text-white">
            My <span className="text-red-600">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-red-600 mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto text-lg">
            I've developed a diverse set of technical and soft skills throughout my career
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-md transition-shadow border-t-4 border-t-red-600">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    {category.icon}
                    <h3 className="text-lg font-semibold text-black dark:text-white">{category.title}</h3>
                  </div>
                  <ul className="space-y-2">
                    {category.skills.map((skill, skillIndex) => (
                      <li key={skillIndex} className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                        <div className="w-2 h-2 rounded-full bg-red-600"></div>
                        {skill}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Soft Skills and Languages sections removed as requested */}
      </div>
    </section>
  )
}

