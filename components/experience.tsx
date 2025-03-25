"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Briefcase, Calendar, MapPin, GraduationCap } from "lucide-react"

export default function Experience() {
  const experiences = [
    {
      title: "Software Developer Intern",
      company: "Dukatech Solutions",
      period: "Feb 2024 - May 2024",
      location: "Nairobi, Kenya",
      type: "work",
      description: [
        "Took part in developing a fintech application, employing full-stack development skills with React.js and Django Python.",
        "Worked on payment integration on a short video application, performing a successful STK push using Mpesa Daraja APIs.",
        "Worked as a tech team lead for a project, distributing roles, setting KPIs, and ensuring deadlines were met.",
        "Took part in pitching application products, achieving second place at Hult-prize and third place at Enactus Kenya.",
        "Led a team in organizing events and hackathons for the company and represented the company in various tech spaces.",
      ],
    },
    {
      title: "Freelancer",
      company: "Upwork",
      period: "Apr 2022 - Present",
      location: "Remote",
      type: "work",
      description: [
        "Contributed to an AI/ML project by unify Ivy AI, writing mathematical formulas with a 98% success rate.",
        "Worked on various client projects involving design work and web development.",
        "Troubleshot and provided Linux-based Operating System solutions for clients.",
      ],
    },
    {
      title: "Software Engineering Certificate - Front End Specialization",
      company: "Holberton School, ALX Program",
      period: "Mar 2023 - Mar 2024",
      location: "",
      type: "education",
      description: [],
    },
    {
      title: "BSc. Mathematics & Computer Science",
      company: "Kenyatta University",
      period: "Sep 2024 - Present",
      location: "Nairobi, Kenya",
      type: "education",
      description: [],
    },
  ]

  return (
    <section id="experience" className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black dark:text-white">
            My <span className="text-red-600">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-red-600 mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto text-lg">
            My professional journey and educational background
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-red-200 dark:bg-red-900/30"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
              >
                <div className="md:w-1/2"></div>
                <div className="absolute left-0 md:left-1/2 transform -translate-y-1/2 md:-translate-x-1/2 w-8 h-8 rounded-full bg-red-600 z-10 flex items-center justify-center">
                  {exp.type === "work" ? (
                    <Briefcase className="h-4 w-4 text-white" />
                  ) : (
                    <GraduationCap className="h-4 w-4 text-white" />
                  )}
                </div>
                <div className="md:w-1/2 pl-12 md:pl-0 md:pr-12 md:pl-12">
                  <Card className="border-l-4 border-l-red-600 hover:shadow-md transition-shadow">
                    <CardHeader>
                      <CardTitle className="text-xl text-black dark:text-white">{exp.title}</CardTitle>
                      <CardDescription className="text-gray-600 dark:text-gray-400 flex flex-col gap-1">
                        <span className="flex items-center gap-1">
                          <Briefcase className="h-4 w-4 text-red-600" />
                          {exp.company}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="h-4 w-4 text-red-600" />
                          {exp.period}
                        </span>
                        {exp.location && (
                          <span className="flex items-center gap-1">
                            <MapPin className="h-4 w-4 text-red-600" />
                            {exp.location}
                          </span>
                        )}
                      </CardDescription>
                    </CardHeader>
                    {exp.description.length > 0 && (
                      <CardContent>
                        <ul className="list-disc pl-5 space-y-1 text-gray-600 dark:text-gray-400">
                          {exp.description.map((item, i) => (
                            <li key={i}>{item}</li>
                          ))}
                        </ul>
                      </CardContent>
                    )}
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

