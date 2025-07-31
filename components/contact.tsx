"use client"

import type React from "react"

import { useState } from "react"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
    alert("¡Gracias por contactarnos! Te responderemos a la brevedad.")
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    })
  }

  return (
    <section id="contacto" className="w-full py-16 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">📍 Ubicación y Contacto</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Visítanos en el corazón de Loja y comienza tu transformación hoy. Estamos ubicados en una zona céntrica y de fácil acceso.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3987.1234567890123!2d-79.21000000000001!3d-4.000000000000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNMKwMDAnMDAuMCJTIDc5wrAxMiczNi4wIlc!5e0!3m2!1sen!2sec!4v1234567890123!5m2!1sen!2sec"
              width="100%"
              height="350"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación de FOCUS GYM en Loja"
            ></iframe>
          </div>

          <div className="grid gap-6">
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="text-3xl text-lime-500 mr-4">📍</div>
                <div>
                  <h3 className="text-xl font-bold mb-1 dark:text-white">Ubicación</h3>
                  <p className="text-gray-600 dark:text-gray-300">Av. Pío Jaramillo y Venezuela, Edificio Focus, Loja, Ecuador</p>
                </div>
              </div>
              <a
                href="https://maps.app.goo.gl/example123"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-gray-100 hover:bg-gray-200 dark:bg-gray-600 dark:hover:bg-gray-500 text-gray-800 dark:text-white font-medium py-2 px-4 rounded transition-colors flex items-center justify-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                  />
                </svg>
                📥 Descargar ubicación
              </a>
            </div>

            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="text-3xl text-lime-500 mr-4">💬</div>
                <div>
                  <h3 className="text-xl font-bold mb-1 dark:text-white">WhatsApp</h3>
                  <p className="text-gray-600 dark:text-gray-300">Escríbenos para información sobre membresías y horarios.</p>
                </div>
              </div>
              <a
                href="https://wa.me/593991234567"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-gray-100 hover:bg-gray-200 dark:bg-gray-600 dark:hover:bg-gray-500 text-gray-800 dark:text-white font-medium py-2 px-4 rounded transition-colors flex items-center justify-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.498 14.382l-.002-.001h-.002c-1.57 1.52-3.757 2.097-4.925 2.097-.34 0-.57-.038-.78-.077-.13-.024-.25-.047-.36-.047-.33 0-.53.2-.97.62l-.14.14c-.39.39-.76.57-1.17.57-.18 0-.43-.03-.71-.16-.68-.3-1.72-1.1-2.67-2.43-.43-.6-.81-1.33-1.11-2.06-.11-.25-.17-.48-.17-.7 0-.41.18-.78.57-1.17l.14-.14c.18-.18.27-.39.27-.6 0-.12-.01-.23-.03-.34-.05-.2-.09-.4-.09-.58 0-.33.1-.66.29-.96.32-.49.8-.96 1.44-1.41.5-.35 1.07-.59 1.62-.59.16 0 .32.03.46.08.24.09.45.22.6.39.16.17.25.35.25.52 0 .07-.01.14-.03.2-.03.11-.07.23-.1.34-.1.3-.24.72-.24 1.15 0 .24.03.46.1.66.03.08.06.16.1.24.1.23.21.46.36.68.15.22.3.4.46.56.16.16.3.3.46.43.16.13.33.26.5.39.17.13.36.25.55.38.19.13.39.25.59.36.2.11.42.22.65.32.23.1.45.18.67.25.22.07.44.11.65.11.43 0 .85-.14 1.16-.25.1-.03.19-.06.27-.08.07-.02.14-.03.2-.03.17 0 .37.1.56.27.19.18.38.4.53.6.15.2.3.42.43.6.13.19.25.37.35.53.1.16.19.3.26.4.07.1.13.18.17.23.05.06.08.1.1.12.02.02.03.03.04.03l.01.01c.02.02.03.03.03.04.02.02.03.05.03.09 0 .07-.02.15-.05.25-.04.1-.1.23-.18.36-.08.13-.18.28-.29.44-.11.16-.23.33-.36.49-.13.16-.26.32-.39.48z" />
                  <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10c-1.701 0-3.33-.425-4.803-1.217l-5.197 1.5 1.5-5.197c-.792-1.473-1.217-3.102-1.217-4.803 0-5.514 4.486-10 10-10zm0 18c4.411 0 8-3.589 8-8s-3.589-8-8-8-8 3.589-8 8c0 1.473.4 2.873 1.142 4.1l-.8 2.8 2.8-.8c1.227.742 2.627 1.142 4.1 1.142z" />
                </svg>
                Enviar mensaje por WhatsApp
              </a>
            </div>

            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="text-3xl text-lime-500 mr-4">📱</div>
                <div>
                  <h3 className="text-xl font-bold mb-1 dark:text-white">Teléfono</h3>
                  <p className="text-gray-600 dark:text-gray-300">Contáctanos directamente para más información.</p>
                </div>
              </div>
              <a
                href="https://wa.me/593990039794"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded transition-colors flex items-center justify-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                </svg>
                💬 Chatea con nosotros
              </a>
            </div>

            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="text-3xl text-lime-500 mr-4">🕒</div>
                <div>
                  <h3 className="text-xl font-bold mb-1 dark:text-white">Horarios</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Lunes a Viernes: 5:30 am - 10:00 pm; Sábados: 9:00 am - 4:00 pm
                  </p>
                </div>
              </div>
              <a
                href="/horarios"
                className="w-full bg-gray-100 hover:bg-gray-200 dark:bg-gray-600 dark:hover:bg-gray-500 text-gray-800 dark:text-white font-medium py-2 px-4 rounded transition-colors flex items-center justify-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                🗓️ Ver horarios completos
              </a>
            </div>
          </div>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-white dark:bg-gray-700 p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-6 text-center dark:text-white">Formulario de Contacto</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 text-center">
              Si te interesa más información, completa nuestro formulario a continuación.
            </p>

            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 dark:text-gray-200 font-medium mb-2">
                  Nombre
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white rounded-md focus:outline-none focus:ring-2 focus:ring-lime-500"
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 dark:text-gray-200 font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white rounded-md focus:outline-none focus:ring-2 focus:ring-lime-500"
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="phone" className="block text-gray-700 dark:text-gray-200 font-medium mb-2">
                  Teléfono
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white rounded-md focus:outline-none focus:ring-2 focus:ring-lime-500"
                  required
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 dark:text-gray-200 font-medium mb-2">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white rounded-md focus:outline-none focus:ring-2 focus:ring-lime-500"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-lime-500 hover:bg-lime-600 text-white font-bold py-3 px-4 rounded-md transition-colors"
              >
                Enviar Mensaje
              </button>
            </form>
          </div>

          <h3 className="text-xl font-semibold text-center mt-8 dark:text-white">
            ⏰ ¡No esperes más! Tu bienestar te está esperando.
          </h3>
        </div>
      </div>
    </section>
  )
}

