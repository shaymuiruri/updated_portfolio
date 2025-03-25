"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Send, Linkedin, Github } from "lucide-react"
import Link from "next/link"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitSuccess(true)
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      })

      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false)
      }, 5000)
    }, 1500)
  }

  return (
    <section id="contact" className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black dark:text-white">
            Get In <span className="text-red-600">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-red-600 mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto text-lg">
            Feel free to reach out to me for collaborations or just to say hello
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="text-2xl text-black dark:text-white">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-red-100 dark:bg-red-900/30 p-3 rounded-lg">
                    <Mail className="h-6 w-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-black dark:text-white mb-1">Email</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      <a href="mailto:muiruri003michelle@gmail.com" className="hover:text-red-600 transition-colors">
                        muiruri003michelle@gmail.com
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-red-100 dark:bg-red-900/30 p-3 rounded-lg">
                    <Phone className="h-6 w-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-black dark:text-white mb-1">Phone</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      <a href="tel:+254725423289" className="hover:text-red-600 transition-colors">
                        +254 725 423 289
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-red-100 dark:bg-red-900/30 p-3 rounded-lg">
                    <MapPin className="h-6 w-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-black dark:text-white mb-1">Location</h3>
                    <p className="text-gray-600 dark:text-gray-400">Nairobi, Kenya</p>
                  </div>
                </div>

                <div className="pt-6">
                  <h3 className="text-lg font-semibold text-black dark:text-white mb-4">Connect with me</h3>
                  <div className="flex gap-4">
                    <Link
                      href="https://www.linkedin.com/in/mitchelle-muiruri-477559269/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-red-100 dark:bg-red-900/30 p-3 rounded-lg text-red-600 hover:bg-red-200 dark:hover:bg-red-900/50 transition-colors"
                    >
                      <Linkedin className="h-6 w-6" />
                      <span className="sr-only">LinkedIn</span>
                    </Link>
                    <Link
                      href="https://github.com/shaymuiruri"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-red-100 dark:bg-red-900/30 p-3 rounded-lg text-red-600 hover:bg-red-200 dark:hover:bg-red-900/50 transition-colors"
                    >
                      <Github className="h-6 w-6" />
                      <span className="sr-only">GitHub</span>
                    </Link>
                    <Link
                      href="mailto:muiruri003michelle@gmail.com"
                      className="bg-red-100 dark:bg-red-900/30 p-3 rounded-lg text-red-600 hover:bg-red-200 dark:hover:bg-red-900/50 transition-colors"
                    >
                      <Mail className="h-6 w-6" />
                      <span className="sr-only">Email</span>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="text-2xl text-black dark:text-white">Send Me a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Your Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Your Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      required
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                    >
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Project Inquiry"
                      required
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                    >
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Hello, I'd like to talk about..."
                      required
                      className="w-full min-h-[150px]"
                    />
                  </div>

                  {submitSuccess && (
                    <div className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 p-3 rounded-md">
                      Your message has been sent successfully! I'll get back to you soon.
                    </div>
                  )}

                  <Button
                    type="submit"
                    className="w-full bg-red-600 hover:bg-red-700 text-white"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <svg
                          className="animate-spin h-4 w-4 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <Send size={16} /> Send Message
                      </span>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

