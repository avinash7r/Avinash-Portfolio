"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Education", href: "#education" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ]

  // Handle scroll event to update navbar style
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    setMounted(true)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <motion.header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "py-3 bg-[#0C0950]/90 backdrop-blur-md shadow-lg" : "py-5 bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="text-2xl font-bold text-white font-poppins">
            <span className="text-[#FBE4D6]">Avinash</span>
            <span>.dev</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-gray-300 hover:text-[#FBE4D6] transition-colors duration-300 relative nav-link"
              >
                {link.name}
              </a>
            ))}

          </nav>

          {/* Mobile Navigation Toggle Button */}
          <div className="md:hidden flex items-center">

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="bg-[#261FB3]/50 p-2 rounded-full hover:bg-[#261FB3] transition-colors duration-300"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? <X className="h-6 w-6 text-[#FBE4D6]" /> : <Menu className="h-6 w-6 text-[#FBE4D6]" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 top-[72px] bg-[#0C0950]/95 backdrop-blur-lg z-40"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="container mx-auto px-6 py-8">
              <nav className="flex flex-col space-y-6">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.href}
                    className="text-xl font-medium text-white hover:text-[#FBE4D6] transition-colors duration-300"
                    onClick={() => setIsMenuOpen(false)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {link.name}
                  </motion.a>
                ))}
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

export default Navbar

