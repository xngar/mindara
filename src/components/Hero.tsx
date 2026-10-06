"use client";

import { useEffect, useRef } from "react";
import StrokeText from "./StrokeText";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const strokeTextStyle = {
    fontWeight: 800,
    letterSpacing: -5,
    strokeColor: "var(--brand-secondary)",
    fillColor: "var(--brand-primary)",
    drawDuration: 1.2,
    stagger: 0.025,
  };

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
      className="section-shell pb-20 pt-10 md:pb-28 md:pt-14"
    >
      <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
        <div className="space-y-8">
          <h1 className="max-w-xl text-5xl font-black leading-[0.96] tracking-[-0.07em] text-on-surface md:text-6xl xl:text-7xl font-headline">
            <div className="hidden md:block">
              <StrokeText
                text="Capacitación y"
                fontSize={72}
                {...strokeTextStyle}
              />
              <StrokeText
                text="soluciones digitales"
                fontSize={72}
                {...strokeTextStyle}
              />
              <StrokeText
                text="para empresas"
                fontSize={72}
                {...strokeTextStyle}
              />
            </div>
            <div className="md:hidden">
              <StrokeText
                text="Capacitación y"
                fontSize={48}
                {...strokeTextStyle}
              />
              <StrokeText
                text="soluciones"
                fontSize={48}
                {...strokeTextStyle}
              />
              <StrokeText text="digitales" fontSize={48} {...strokeTextStyle} />
              <StrokeText
                text="para empresas"
                fontSize={48}
                {...strokeTextStyle}
              />
            </div>
          </h1>

          <p className="max-w-lg text-lg leading-relaxed text-on-surface-variant md:text-xl">
            Diseñamos cursos, señalética, documentación técnica y experiencias
            digitales para comunicar mejor, entrenar mejor y operar con mayor
            seguridad.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#contacto"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-4 text-base font-extrabold text-on-primary shadow-brand transition-all duration-200 hover:-translate-y-0.5 hover:bg-primary-dim"
            >
              Consulta tu proyecto
              <span className="material-symbols-outlined">arrow_forward</span>
            </a>
            <a
              href="#galeria"
              className="inline-flex items-center justify-center rounded-full border border-primary/15 bg-white/70 px-7 py-4 text-base font-extrabold text-on-surface transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/30 hover:bg-white"
            >
              Ver soluciones
            </a>
          </div>

          <div className="grid max-w-xl gap-3 pt-2 sm:grid-cols-3">
            {[
              ["35+", "proyectos"],
              ["10+", "años"],
              ["100%", "foco"],
            ].map(([value, label]) => (
              <div
                key={label}
                className="panel rounded-2xl px-4 py-3 text-left"
              >
                <div className="text-2xl font-black tracking-[-0.06em] text-primary font-headline">
                  {value}
                </div>
                <div className="text-xs font-bold uppercase tracking-[0.14em] text-on-surface-variant">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[560px]">
          <div className="absolute -inset-4 rounded-full bg-secondary/20 blur-3xl" />
          <div className="absolute -right-5 top-8 h-24 w-24 rounded-full bg-primary/10 blur-2xl" />

          <div className="panel relative overflow-hidden rounded-[2rem] border border-primary/10 bg-gradient-to-br from-white/60 to-primary/5 p-3">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.6),transparent_30%)]" />
            <div className="relative overflow-hidden rounded-[1.5rem] border border-white/30 bg-surface-container-low">
              <video
                ref={videoRef}
                className="h-[540px] w-full object-cover"
                src="/intro_personaje.mp4"
                poster="/personaje.webp"
                autoPlay
                muted
                playsInline
                preload="auto"
                controls={false}
                style={{
                  filter: "saturate(1.06) contrast(1.04)",
                  objectPosition: "center",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
