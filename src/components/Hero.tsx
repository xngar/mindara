import Image from 'next/image';
import TextType from './TextType';

export default function Hero() {
  return (
    <section id="inicio" className="max-w-7xl mx-auto px-8 pt-16 pb-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <div className="space-y-8">

        <h1 className="text-5xl md:text-7xl font-headline font-extrabold text-on-surface leading-[1.1] tracking-tight">
          Diseñamos <TextType text="Productos Digitales" as="span" className="text-primary font-extrabold" loop={true} /> Excepcionales
        </h1>
        <p className="text-xl text-on-surface-variant max-w-xl leading-relaxed">
          Transformamos ideas audaces en experiencias digitales memorables mediante diseño centrado en el usuario y desarrollo de alta precisión.
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
      <div className="relative group">
        <div className="absolute -inset-4 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors"></div>
        <div className="relative aspect-square">
          <Image
            alt="Diseño de producto digital moderno para agencias"
            className="relative w-full h-auto drop-shadow-2xl object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuA-3YcL_b6rKA5lrUwxpBGZZIHhlEglAGPUMQ9na3eR68u9hDCbX7xA1FymC2oBX_eCD805DUlLKJp5baChDdBeW3Pkuq11Zrx9tIEkIlzGlaBWIWEYDE2xsnRYDVTMGDQTxnPM-17nY8O0XVtze57CwYH2gM4d67MCe7fa8nqgABj3exbo1zqetH2U4qDECUjps93BLtgCbCi_ke1AKthux4gOHFZzyWNEezgZtlDTXD--7Do_BpsQI5zp90WvMCo4Tz5tGY0wXCQ"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>
    </section>
  );
}
