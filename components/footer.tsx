import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Link href="/" className="text-2xl font-bold text-red-600">
              Mitchelle<span className="text-white">.dev</span>
            </Link>
            <p className="mt-4 text-gray-400">
              A passionate full-stack developer focused on creating social impact through technology.
            </p>
            <div className="flex gap-4 mt-6">
              <Link
                href="https://github.com/shaymuiruri"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-red-600 transition-colors"
              >
                <Github size={20} />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link
                href="https://www.linkedin.com/in/mitchelle-muiruri-477559269/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-red-600 transition-colors"
              >
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link
                href="mailto:muiruri003michelle@gmail.com"
                className="text-gray-400 hover:text-red-600 transition-colors"
              >
                <Mail size={20} />
                <span className="sr-only">Email</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#home" className="text-gray-400 hover:text-red-600 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-gray-400 hover:text-red-600 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="#skills" className="text-gray-400 hover:text-red-600 transition-colors">
                  Skills
                </Link>
              </li>
              <li>
                <Link href="#experience" className="text-gray-400 hover:text-red-600 transition-colors">
                  Experience
                </Link>
              </li>
              <li>
                <Link href="#projects" className="text-gray-400 hover:text-red-600 transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-400 hover:text-red-600 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Nairobi, Kenya</li>
              <li>
                <a href="mailto:muiruri003michelle@gmail.com" className="hover:text-red-600 transition-colors">
                  muiruri003michelle@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+254725423289" className="hover:text-red-600 transition-colors">
                  +254 725 423 289
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500">
          <p>&copy; {currentYear} Mitchelle Muiruri. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

