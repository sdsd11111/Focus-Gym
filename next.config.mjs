/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Configuración del servidor
  server: {
    port: 3001,
    hostname: 'localhost'
  },
  // Configuración para el comando dev
  devServer: {
    port: 3001,
    host: 'localhost'
  }
}

export default nextConfig
