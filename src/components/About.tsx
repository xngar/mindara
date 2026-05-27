import CountUp from './CountUp';

export default function About() {
  return (
    <section id="nosotros" className="bg-surface-container-low py-32">
      <div className="max-w-6xl mx-auto px-8 flex flex-col items-center text-center space-y-16">



        {/* Encabezado y Subencabezado */}
        <div className="space-y-4 max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-headline font-extrabold text-on-surface leading-tight">
            Potenciamos tu proyecto con <span className="text-primary">diseño</span> y <span className="text-tertiary">programación inteligente</span>
          </h2>
          <p className="text-xl md:text-2xl text-on-surface-variant font-medium leading-relaxed">
            19 años optimizando el aprendizaje corporativo
          </p>
        </div>

        {/* Pilares Estratégicos en Tarjetas Premium */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full pt-4">

          {/* Pilar 1 */}
          <div className="bg-surface-container-lowest p-8 rounded-2xl border border-outline/5 hover:border-primary/20 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center group">
            <div className="w-14 h-14 mb-6 rounded-2xl bg-purple-50 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300">
              <span className="material-symbols-outlined text-3xl">trending_up</span>
            </div>
            <h3 className="text-xl font-headline font-extrabold mb-3 text-on-surface group-hover:text-primary transition-colors">Estrategia Integral</h3>
            <p className="text-on-surface-variant leading-relaxed text-sm">
              Desde el concepto hasta la ejecución operativa, asegurando un camino claro y estructurado hacia el éxito.
            </p>
          </div>

          {/* Pilar 2 */}
          <div className="bg-surface-container-lowest p-8 rounded-2xl border border-outline/5 hover:border-secondary/20 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center group">
            <div className="w-14 h-14 mb-6 rounded-2xl bg-orange-50 flex items-center justify-center text-secondary group-hover:scale-110 transition-transform duration-300">
              <span className="material-symbols-outlined text-3xl">bolt</span>
            </div>
            <h3 className="text-xl font-headline font-extrabold mb-3 text-on-surface group-hover:text-secondary transition-colors">Eficiencia Real</h3>
            <p className="text-on-surface-variant leading-relaxed text-sm">
              Reducimos tus costos operativos integrando tecnología avanzada, optimización de procesos y automatización de vanguardia.
            </p>
          </div>

          {/* Pilar 3 */}
          <div className="bg-surface-container-lowest p-8 rounded-2xl border border-outline/5 hover:border-tertiary/20 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center group">
            <div className="w-14 h-14 mb-6 rounded-2xl bg-green-50 flex items-center justify-center text-tertiary group-hover:scale-110 transition-transform duration-300">
              <span className="material-symbols-outlined text-3xl">eco</span>
            </div>
            <h3 className="text-xl font-headline font-extrabold mb-3 text-on-surface group-hover:text-tertiary transition-colors">Sustentabilidad</h3>
            <p className="text-on-surface-variant leading-relaxed text-sm">
              Desarrollamos soluciones digitales amigables con el medio ambiente, reduciendo la huella de carbono y optimizando recursos.
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
            <div className="text-5xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-tertiary to-primary mb-2">
              <CountUp to={10} direction="up" duration={2} delay={0.5} className="inline-block" />+
            </div>
            <div className="text-xs md:text-sm font-bold uppercase tracking-wider text-outline">Años de Experiencia</div>
          </div>
        </div>

      </div>
    </section>
  );
}
