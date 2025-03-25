"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import ThemeToggle from "./theme-toggle"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    setIsOpen(false)

    const element = document.querySelector(href)
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      })
    }
  }

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/90 dark:bg-black/90 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-red-600">
          Mitchelle<span className="text-black dark:text-white">.dev</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="text-black dark:text-white hover:text-red-600 dark:hover:text-red-600 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <ThemeToggle />
          <Button className="bg-red-600 hover:bg-red-700 text-white">
            <Link href="/resume.pdf" target="_blank" rel="noopener noreferrer">
              Resume
            </Link>
          </Button>
        </nav>

        {/* Mobile Navigation Toggle */}
        <div className="flex items-center md:hidden space-x-4">
          <ThemeToggle />
          <button
            onClick={toggleMenu}
            className="text-black dark:text-white focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-black shadow-lg">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-black dark:text-white hover:text-red-600 dark:hover:text-red-600 transition-colors py-2"
              >
                {link.name}
              </a>
            ))}
            <Button className="bg-red-600 hover:bg-red-700 text-white w-full">
              <Link href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                Resume
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}

