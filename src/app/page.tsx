import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Hero from "../components/Hero";
import Reveal from "../components/Reveal";

const About = dynamic(() => import("../components/About"));
const Team = dynamic(() => import("../components/Team"));
const Services = dynamic(() => import("../components/Services"));
const ContactForm = dynamic(() => import("../components/ContactForm"));
const BentoGallery = dynamic(() => import("../components/BentoGallery"));

export const metadata: Metadata = {
  title: "Mindara | Capacitación, señalética y soluciones digitales",
  description:
    "Capacitación para empresas, señalética industrial, diseño CAD/3D y soluciones digitales para Chile.",
  alternates: {
    canonical: "/",
  },
  keywords: [
    "Mindara Chile",
    "capacitación para empresas",
    "señalética industrial",
    "material de seguridad",
    "diseño CAD 3D Chile",
    "documentación técnica",
    "e-learning",
    "soluciones digitales para empresas",
    "desarrollo web para empresas",
    "agencia digital Chile",
  ],
  openGraph: {
    title: "Mindara | Capacitación, señalética y soluciones digitales",
    description:
      "Soluciones para empresas en Chile: capacitación, señalética, documentación técnica y desarrollo digital.",
    url: "https://www.mindara.cl",
    siteName: "Mindara",
    locale: "es_CL",
    type: "website",
  },
};

export default function Home() {
  return (
    <>
      <main>
        {/* Hero sin Reveal para garantizar LCP óptimo — el contenido debe ser visible desde SSR */}
        <Hero />
        <Reveal delay={0.1}>
          <About />
        </Reveal>

        <Reveal delay={0.1}>
          <Services />
        </Reveal>
        <Reveal delay={0.1}>
          <BentoGallery />
        </Reveal>
        <Reveal delay={0.1}>
          <Team />
        </Reveal>
        <Reveal delay={0.1}>
          <ContactForm />
        </Reveal>
      </main>
    </>
  );
}
