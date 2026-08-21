"use client";

import { useEffect, useRef } from "react";
import TextType from "./TextType";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;

    if (!video) {
      return;
    }

    let playCount = 0;

    const handleEnded = () => {
      playCount += 1;

      if (playCount >= 2) {
        video.pause();
        return;
      }

      video.currentTime = 0;
      video.play().catch(() => undefined);
    };

    video.addEventListener("ended", handleEnded);
    video.play().catch(() => undefined);

    return () => {
      video.removeEventListener("ended", handleEnded);
    };
  }, []);

  return (
    <section
      id="inicio"
      className="w-full mx-auto px-6 md:px-[60px] pt-16 pb-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
    >
      <div className="space-y-8">
        <h1 className="text-5xl md:text-7xl font-headline font-extrabold text-on-surface leading-[1.1] tracking-tight">
<<<<<<< HEAD
          Capacitación, señalética y{" "}
          <TextType
            text="soluciones digitales"
            as="span"
            className="text-primary font-extrabold"
          />{" "}
          para empresas en Chile
        </h1>
        <p className="text-xl text-on-surface-variant max-w-xl leading-relaxed">
          Transformamos información técnica y operativa en cursos, videos,
          material visual, documentación CAD y herramientas digitales que las
          personas pueden comprender y utilizar.
=======
          Transformamos tu Empresa con{" "}
          <TextType
            text="Desarrollo Web"
            as="span"
            className="text-primary font-extrabold"
          />{" "}
          y Diseño Gráfico
        </h1>
        <p className="text-xl text-on-surface-variant max-w-xl leading-relaxed">
          Agencia digital en Chile especializada en desarrollo de software a medida, gestión de redes sociales y diseño UI/UX. Creamos soluciones tecnológicas precisas para hacer crecer tu negocio.
>>>>>>> 70cc74d7eec4a73b46906c5d28a7bcc250654d4e
        </p>
        <div className="flex flex-wrap gap-4">
          <a
            href="#contacto"
            className="inline-flex items-center gap-2 bg-primary text-on-primary px-10 py-5 rounded-xl font-bold text-lg hover:shadow-[0_20px_50px_rgba(107,70,193,0.3)] transition-all"
          >
            Cuéntanos tu necesidad
            <span className="material-symbols-outlined">arrow_forward</span>
          </a>
          <a
            href="#galeria"
            className="inline-flex items-center justify-center bg-surface-container-low text-on-surface px-10 py-5 rounded-xl font-bold text-lg hover:bg-surface-container-high transition-all"
          >
            Ver soluciones
          </a>
        </div>
      </div>
      <div className="relative group w-full max-w-140 mx-auto">
        <div className="absolute -inset-4 rounded-full bg-primary/10 blur-3xl transition-all duration-500 group-hover:scale-110 group-hover:bg-primary/20"></div>
        <div className="absolute inset-6 rounded-[2rem] border border-primary/15 bg-gradient-to-br from-white/10 via-transparent to-primary/10 backdrop-blur-sm"></div>
        <div className="relative aspect-square w-full overflow-hidden rounded-4xl border border-white/15 bg-surface-container-low/70 shadow-[0_24px_80px_rgba(15,23,42,0.16)] ring-1 ring-primary/10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.28),transparent_38%)]"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-transparent to-transparent"></div>
          <div className="absolute inset-3 rounded-[1.5rem] border border-white/10"></div>
          <video
            ref={videoRef}
            className="absolute inset-0 h-full w-full object-cover"
            src="/intro_personaje.mp4"
            poster="/personaje.webp"
            autoPlay
            muted
            playsInline
            preload="auto"
            controls={false}
            style={{
              animation: "hero-video-in 900ms ease-out both",
              filter: "saturate(1.08) contrast(1.03)",
              transform: "scale(1.02)",
              objectPosition: "center",
            }}
          />
        </div>
      </div>

      <style jsx>{`
        @keyframes hero-video-in {
          0% {
            opacity: 0;
            transform: scale(1.04) translateY(10px);
          }
          100% {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
