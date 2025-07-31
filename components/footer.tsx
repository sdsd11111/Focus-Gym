import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 dark:bg-gray-800 dark:text-gray-200">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm">
          © 2025 Diseñado por{" "}
          <Link
            href="https://cesarreyesjaramillo.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lime-400 hover:text-lime-300 transition-colors dark:text-lime-500 dark:hover:text-lime-400"
          >
            Automatizotunegocio
          </Link>
          . Todos los derechos reservados.
        </p>
      </div>
    </footer>
  )
}

