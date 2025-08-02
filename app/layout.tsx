import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import LayoutClient from "./layout-client"

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
    <html lang="es" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={inter.className}>
        <LayoutClient>
          {children}
        </LayoutClient>
      </body>
    </html>
  )
}

