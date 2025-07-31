"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Appointment } from "./appointment"
import { ThemeToggle } from "./theme-toggle"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isAppointmentOpen, setIsAppointmentOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  const openAppointment = () => {
    setIsAppointmentOpen(true)
    closeMenu()
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? "bg-gray-900 shadow-md py-2" : "bg-gray-900/90 py-4"
        }`}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <div className="relative h-12 w-36">
              <Image
                src="/logo Focus Gym.jpg"
                alt="Focus GYM"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link
              href="/"
              className={`font-medium transition-colors ${
                pathname === "/" ? "text-lime-500" : "text-gray-200 hover:text-lime-500"
              }`}
            >
              Inicio
            </Link>
            <Link
              href="/servicios"
              className={`font-medium transition-colors ${
                pathname === "/servicios" ? "text-lime-500" : "text-gray-200 hover:text-lime-500"
              }`}
            >
              Servicios
            </Link>
            <Link
              href="/cursos"
              className={`font-medium transition-colors ${
                pathname === "/cursos" ? "text-lime-500" : "text-gray-200 hover:text-lime-500"
              }`}
            >
              Cursos
            </Link>
            <Link
              href="/horarios"
              className={`font-medium transition-colors ${
                pathname === "/horarios" ? "text-lime-500" : "text-gray-200 hover:text-lime-500"
              }`}
            >
              Horarios
            </Link>
            <Link
              href="/blog"
              className={`font-medium transition-colors ${
                pathname === "/blog" ? "text-lime-500" : "text-gray-200 hover:text-lime-500"
              }`}
            >
              Blog
            </Link>
            <ThemeToggle />
            <button
              onClick={openAppointment}
              className="bg-lime-500 hover:bg-lime-600 text-white font-medium py-2 px-4 rounded-full transition-colors"
            >
              Clase Gratis
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={openAppointment}
              className="bg-lime-500 hover:bg-lime-600 text-white font-medium py-2 px-4 rounded-full transition-colors mr-4"
            >
              Clase Gratis
            </button>
            <button
              onClick={toggleMenu}
              className="bg-gray-800 p-2 rounded-md focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6 text-white" /> : <Menu className="h-6 w-6 text-white" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden absolute top-full left-0 w-full bg-gray-800 shadow-md transition-all duration-300 ${
            isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link
              href="/"
              onClick={closeMenu}
              className={`font-medium py-2 ${pathname === "/" ? "text-lime-500" : "text-gray-200"}`}
            >
              Inicio
            </Link>
            <Link
              href="/servicios"
              onClick={closeMenu}
              className={`font-medium py-2 ${pathname === "/servicios" ? "text-lime-500" : "text-gray-200"}`}
            >
              Servicios
            </Link>
            <Link
              href="/cursos"
              onClick={closeMenu}
              className={`font-medium py-2 ${pathname === "/cursos" ? "text-lime-500" : "text-gray-200"}`}
            >
              Cursos
            </Link>
            <Link
              href="/horarios"
              onClick={closeMenu}
              className={`font-medium py-2 ${pathname === "/horarios" ? "text-lime-500" : "text-gray-200"}`}
            >
              Horarios
            </Link>
            <Link
              href="/blog"
              onClick={closeMenu}
              className={`font-medium py-2 ${pathname === "/blog" ? "text-lime-500" : "text-gray-200"}`}
            >
              Blog
            </Link>
            <div className="flex items-center">
              <ThemeToggle />
            </div>
          </div>
        </div>
      </header>

      {/* Appointment Modal */}
      {isAppointmentOpen && <Appointment onClose={() => setIsAppointmentOpen(false)} />}
    </>
  )
}

