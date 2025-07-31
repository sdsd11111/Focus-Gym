import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import PopupManager from "@/components/popup-manager"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Focus GYM",
  description:
    "Focus GYM - Tu gimnasio de confianza en Loja. Entrenamiento personalizado, clases dinámicas y resultados reales. ¡Comienza tu transformación hoy!",
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          <div className="dark">
            <Header />
            {children}
            <Footer />
            <PopupManager />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}

