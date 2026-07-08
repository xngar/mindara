import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import TopNavBar from '../components/TopNavBar';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import FontLoader from '../components/FontLoader';

const inter = Inter({ subsets: ["latin"], display: 'swap', variable: '--font-inter', preload: true });
const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], display: 'swap', variable: '--font-jakarta', preload: true });

export const metadata: Metadata = {
  metadataBase: new URL('https://www.mindara.cl'),
  title: {
    default: "Mindara Chile | Desarrollo Web, Software y Diseño Gráfico",
    template: "%s | Mindara"
  },
  description: "Creamos software a medida, gestionamos tus redes sociales, potenciamos tu marca con publicidad digital y diseño gráfico profesional. Impulsa tu negocio con Mindara.",
  alternates: {
    canonical: '/',
  },
  keywords: ["desarrollo de software", "diseño gráfico", "redes sociales", "manejo de instagram", "publicidad digital", "marketing digital", "desarrollo web Chile", "agencia digital Chile"],
  openGraph: {
    title: "Mindara Chile | Desarrollo Web, Software y Diseño Gráfico",
    description: "Software a medida, gestión de redes sociales, publicidad digital y diseño gráfico profesional para potenciar tu negocio.",
    url: "https://www.mindara.cl",
    siteName: "Mindara",
    locale: "es_CL",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Mindara - Software, Redes Sociales y Diseño Gráfico",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mindara Chile | Desarrollo Web, Software y Diseño Gráfico",
    description: "Software a medida, gestión de redes sociales y diseño gráfico profesional para tu negocio.",
    images: ["/og-image.jpg"],
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "SculptedAgency",
    "url": "https://sculpted.agency",
    "logo": "https://sculpted.agency/logo.png",
    "description": "Agencia boutique especializada en diseño de productos digitales y estrategia.",
    "sameAs": [
      "https://linkedin.com/company/sculptedagency",
      "https://instagram.com/sculptedagency"
    ]
  };

  return (
    <html lang="es" className={`${inter.variable} ${jakarta.variable}`}>
      <head>
        {/* Preconnect to Google Fonts for faster DNS/TLS — non-blocking */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-surface font-body text-on-surface antialiased">
        <TopNavBar />
        {children}
        <Footer />
        <WhatsAppButton />
        {/* Loads Material Symbols asynchronously post-render — avoids render-blocking */}
        <FontLoader />
      </body>
    </html>
  );
}
