import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Servir AVIF y WebP automáticamente cuando el navegador los soporte
    formats: ['image/avif', 'image/webp'],
    // Breakpoints más granulares para mobile — evita servir 750px cuando se necesitan 400px
    deviceSizes: [375, 414, 640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 400],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
      },
    ],
  },
};

export default nextConfig;
