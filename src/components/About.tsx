import CountUp from './CountUp';

const IconTrendingUp = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7" aria-hidden="true">
    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
    <polyline points="17 6 23 6 23 12" />
  </svg>
);

const IconBolt = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7" aria-hidden="true">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>
);

const IconSparkle = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7" aria-hidden="true">
    <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z" />
  </svg>
);

export default function About() {
  return (
    <section id="nosotros" className="bg-surface-container-low py-32">
      <div className="max-w-6xl mx-auto px-8 flex flex-col items-center text-center space-y-16">

        {/* Encabezado y Subencabezado */}
        <div className="space-y-4 max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-headline font-extrabold text-on-surface leading-tight">
            Potenciamos tu proyecto con <span className="text-primary">diseño</span> y <span className="text-primary">programación inteligente</span>
          </h2>
          <p className="text-xl md:text-2xl text-on-surface-variant font-medium leading-relaxed">
            19 años optimizando el aprendizaje corporativo
          </p>
        </div>

        {/* Pilares Estratégicos en Tarjetas Premium */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full pt-4">

          {/* Pilar 1 — Estrategia Integral */}
          <div className="bg-surface-container-lowest p-8 rounded-2xl border border-outline/5 hover:border-primary/20 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center group">
            <div className="w-14 h-14 mb-6 rounded-2xl bg-purple-50 flex items-center justify-center text-primary overflow-hidden shrink-0 group-hover:scale-110 transition-transform duration-300">
              <IconTrendingUp />
            </div>
            <h3 className="text-xl font-headline font-extrabold mb-3 text-on-surface group-hover:text-primary transition-colors">Estrategia Integral</h3>
            <p className="text-on-surface-variant leading-relaxed text-sm">
              Desde el concepto hasta la ejecución operativa, asegurando un camino claro y estructurado hacia el éxito.
            </p>
          </div>

          {/* Pilar 2 — Eficiencia Real */}
          <div className="bg-surface-container-lowest p-8 rounded-2xl border border-outline/5 hover:border-secondary/20 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center group">
            <div className="w-14 h-14 mb-6 rounded-2xl bg-orange-50 flex items-center justify-center text-secondary overflow-hidden shrink-0 group-hover:scale-110 transition-transform duration-300">
              <IconBolt />
            </div>
            <h3 className="text-xl font-headline font-extrabold mb-3 text-on-surface group-hover:text-secondary transition-colors">Eficiencia Real</h3>
            <p className="text-on-surface-variant leading-relaxed text-sm">
              Reducimos tus costos operativos integrando tecnología avanzada, optimización de procesos y automatización de vanguardia.
            </p>
          </div>

          {/* Pilar 3 — Experiencia que Convierte */}
          <div className="bg-surface-container-lowest p-8 rounded-2xl border border-outline/5 hover:border-tertiary/20 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center group">
            <div className="w-14 h-14 mb-6 rounded-2xl bg-green-50 flex items-center justify-center text-tertiary overflow-hidden shrink-0 group-hover:scale-110 transition-transform duration-300">
              <IconSparkle />
            </div>
            <h3 className="text-xl font-headline font-extrabold mb-3 text-on-surface group-hover:text-tertiary transition-colors">Experiencia que Convierte</h3>
            <p className="text-on-surface-variant leading-relaxed text-sm">
              Diseñamos interfaces intuitivas que mejoran la adopción de tus productos y la satisfacción de tus usuarios.
            </p>
          </div>

        </div>

        {/* Estadísticas Centradas y Rediseñadas */}
        <div className="grid grid-cols-2 gap-12 md:gap-24 pt-12 w-full max-w-2xl mx-auto border-t border-outline/10">
          <div className="flex flex-col items-center">
            <div className="text-5xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary mb-2">
              <CountUp to={35} direction="up" duration={2} className="inline-block" />+
            </div>
            <div className="text-xs md:text-sm font-bold uppercase tracking-wider text-outline">Proyectos Exitosos</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-5xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary mb-2">
              <CountUp to={10} direction="up" duration={2} delay={0.5} className="inline-block" />+
            </div>
            <div className="text-xs md:text-sm font-bold uppercase tracking-wider text-outline">Años de Experiencia</div>
          </div>
        </div>

      </div>
    </section>
  );
}
