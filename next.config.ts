import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Servir AVIF y WebP automáticamente cuando el navegador los soporte
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
      },
    ],
  },
};

export default nextConfig;
