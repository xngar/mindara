import Image from "next/image";
import TextType from "./TextType";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="max-w-7xl mx-auto px-8 pt-16 pb-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
    >
      <div className="space-y-8">
        <h1 className="text-5xl md:text-7xl font-headline font-extrabold text-on-surface leading-[1.1] tracking-tight">
          Diseñamos{" "}
          <TextType
            text="Productos Digitales"
            as="span"
            className="text-primary font-extrabold"
          />{" "}
          Excepcionales
        </h1>
        <p className="text-xl text-on-surface-variant max-w-xl leading-relaxed">
          Transformamos ideas audaces en experiencias digitales memorables
          mediante diseño centrado en el usuario y desarrollo de alta precisión.
        </p>
        <div className="flex flex-wrap gap-4">
          <button className="bg-primary text-on-primary px-10 py-5 rounded-xl font-bold text-lg hover:shadow-[0_20px_50px_rgba(107,70,193,0.3)] transition-all flex items-center gap-2">
            Comenzar
            <span className="material-symbols-outlined">arrow_forward</span>
          </button>
          <button className="bg-surface-container-low text-on-surface px-10 py-5 rounded-xl font-bold text-lg hover:bg-surface-container-high transition-all">
            Ver Portafolio
          </button>
        </div>
      </div>
      <div className="relative group w-full max-w-[560px] mx-auto">
        <div className="absolute -inset-4 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors"></div>
        <div className="relative aspect-square w-full">
          <Image
            alt="Personaje 3D de Smart Brain sosteniendo una laptop y celebrando"
            className="w-full h-full drop-shadow-2xl object-contain"
            src="/personaje.webp"
            width={640}
            height={640}
            priority
            fetchPriority="high"
            quality={60}
            sizes="(max-width: 640px) 85vw, (max-width: 1024px) 45vw, 560px"
          />
        </div>
      </div>
    </section>
  );
}
