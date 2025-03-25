"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Heart } from "lucide-react"

export default function About() {
  return (
    <section id="about" className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black dark:text-white">
            About <span className="text-red-600">Me</span>
          </h2>
          <div className="w-20 h-1 bg-red-600 mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto text-lg">
            I'm a young full-stack developer and leader who is extremely passionate about technology and its use in
            creating social impact.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Following my great passion, I am working on an ed-tech application known as Kusoma Fun which focuses on
              centralizing the world using education. My expertise lies in visually appealing design work, front-end
              development using HTML, CSS, and React.js, and backend development using Python (Django).
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              I believe in making an impact and transforming lives, a code at a time. With a strong foundation in both
              mathematics and computer science, I bring analytical thinking and problem-solving skills to every project
              I undertake.
            </p>
            <p className="text-gray-700 dark:text-gray-300 font-medium">
              "Technology is best when it brings people together." – Matt Mullenweg
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 gap-6"
          >
            <Card className="border-l-4 border-l-red-600">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-red-100 dark:bg-red-900/30 p-3 rounded-lg">
                    <Heart className="h-6 w-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-black dark:text-white mb-1">Passion</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Creating social impact through technology and transforming lives through code. I also enjoy
                      playing indoor games and musical instruments, particularly piano and guitar.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

