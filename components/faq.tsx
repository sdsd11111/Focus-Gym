"use client"

import { useState } from "react"

interface FaqItemProps {
  question: string
  answer: string
}

function FaqItem({ question, answer }: FaqItemProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border-b border-gray-200 dark:border-gray-700 py-4">
      <button
        className="flex justify-between items-center w-full text-left font-medium text-gray-900 dark:text-white focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{question}</span>
        <svg
          className={`w-5 h-5 text-gray-500 dark:text-gray-400 transition-transform ${isOpen ? "transform rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </button>
      <div
        className={`mt-2 text-gray-600 dark:text-gray-300 overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <p className="py-2">{answer}</p>
      </div>
    </div>
  )
}

export function Faq() {
  const faqs = [
    {
      question: "¿Qué servicios ofrece LEADER⚡GYM?",
      answer:
        "En LEADER⚡GYM ofrecemos una amplia gama de servicios que incluyen entrenamiento personalizado, clases de cardio dance, planes de suplementación y venta de ropa deportiva.",
    },
    {
      question: "¿Cómo puedo agendar una cita en LEADER⚡GYM?",
      answer:
        "Puedes agendar una cita fácilmente a través de nuestro WhatsApp o utilizando el botón de 'Clase Gratis' en nuestra página web.",
    },
    {
      question: "¿Qué experiencia tiene LEADER⚡GYM?",
      answer:
        "Contamos con más de 5 años de experiencia transformando vidas en Loja. Nuestro gimnasio se distingue por la calidad de nuestros servicios y el uso de equipamiento moderno.",
    },
  ]

  return (
    <section className="w-full py-16 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center dark:text-white">❓ Preguntas Frecuentes</h2>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            {faqs.map((faq, index) => (
              <FaqItem key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

