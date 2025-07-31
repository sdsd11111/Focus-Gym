"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

export default function PopupManager() {
  const [showPopup, setShowPopup] = useState(false)
  const [hasShown, setHasShown] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (hasShown) return

      const scrollHeight = document.documentElement.scrollHeight
      const scrollTop = window.scrollY
      const clientHeight = document.documentElement.clientHeight

      // Show popup when scrolled 50% of the page
      if (scrollTop > (scrollHeight - clientHeight) * 0.5) {
        setShowPopup(true)
        setHasShown(true)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [hasShown])

  const closePopup = () => {
    setShowPopup(false)
  }

  if (!showPopup) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 animate-fadeIn">
      <div className="relative bg-white dark:bg-gray-800 rounded-lg shadow-xl w-full max-w-md p-6 animate-slideUp">
        <button
          onClick={closePopup}
          className="absolute top-3 right-3 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
          aria-label="Cerrar"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4 dark:text-white">OBTÉN UNA CLASE GRATIS</h2>
          <p className="mb-6 text-gray-600 dark:text-gray-300">
            ¡Prueba una sesión de entrenamiento sin compromiso y descubre por qué somos el mejor gimnasio de Loja!
          </p>
          <Link
            href="https://wa.me/593990039794"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-lime-500 hover:bg-lime-600 text-white font-bold py-3 px-6 rounded-full transition-colors"
          >
            Reservar por WhatsApp
          </Link>
        </div>
      </div>
    </div>
  )
}

