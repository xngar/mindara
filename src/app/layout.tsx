import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import TopNavBar from "../components/TopNavBar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import FontLoader from "../components/FontLoader";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  preload: true,
  fallback: ["system-ui", "arial"],
});
const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jakarta",
  preload: true,
  fallback: ["system-ui", "arial"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.mindara.cl"),
  title: {
    default: "Mindara Chile | Capacitación, Señalética y Soluciones Digitales",
    template: "%s | Mindara",
  },
  description:
    "Diseñamos capacitación, señalética, material de seguridad, documentación CAD/3D y soluciones digitales para empresas en Chile.",
  alternates: {
    canonical: "/",
  },
  keywords: [
    "desarrollo de software",
    "capacitación HSE",
    "material de capacitación empresarial",
    "señalética de seguridad",
    "señalética industrial",
    "digitalización de planos",
    "diseño CAD",
    "diseño 3D para empresas",
    "material de prevención de riesgos",
    "diseño gráfico",
    "redes sociales",
    "manejo de instagram",
    "publicidad digital",
    "marketing digital",
    "desarrollo web Chile",
    "agencia digital Chile",
  ],
  openGraph: {
    title: "Mindara Chile | Capacitación, Señalética y Soluciones Digitales",
    description:
      "Capacitación visual, señalética de seguridad, documentación CAD/3D y soluciones digitales para empresas en Chile.",
    url: "https://www.mindara.cl",
    siteName: "Mindara",
    locale: "es_CL",
    type: "website",
    images: [
      {
        url: "/og-mindara.jpg",
        width: 1200,
        height: 630,
        alt: "Mindara - Capacitación, señalética y soluciones digitales para empresas",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mindara Chile | Capacitación, Señalética y Soluciones Digitales",
    description:
      "Capacitación visual, señalética de seguridad, documentación CAD/3D y soluciones digitales para empresas en Chile.",
    images: ["/og-mindara.jpg"],
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Mindara",
      url: "https://www.mindara.cl",
      logo: "https://www.mindara.cl/og-mindara.jpg",
      description:
<<<<<<< HEAD
        "Mindara ayuda a empresas en Chile a comunicar, capacitar y operar mejor mediante capacitación visual, señalética, material de seguridad, documentación CAD/3D y soluciones digitales.",
=======
        "Agencia digital chilena especializada en desarrollo de software a medida, diseño gráfico, gestión de redes sociales y publicidad digital.",
>>>>>>> 70cc74d7eec4a73b46906c5d28a7bcc250654d4e
      sameAs: ["https://www.instagram.com/mindara.cl"],
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "Mindara",
      url: "https://www.mindara.cl",
<<<<<<< HEAD
    },
=======
    }
>>>>>>> 70cc74d7eec4a73b46906c5d28a7bcc250654d4e
  ];

  return (
    <html lang="es" className={`${inter.variable} ${jakarta.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          as="image"
          href="/personaje.webp"
          type="image/webp"
        />
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
        <FontLoader />
      </body>
    </html>
  );
}
