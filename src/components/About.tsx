import CountUp from "./CountUp";
import Reveal from "./Reveal";

const IconTrendingUp = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.75"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-7 w-7"
    aria-hidden="true"
  >
    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
    <polyline points="17 6 23 6 23 12" />
  </svg>
);

const IconBolt = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.75"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-7 w-7"
    aria-hidden="true"
  >
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>
);

const IconSparkle = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.75"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-7 w-7"
    aria-hidden="true"
  >
    <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z" />
  </svg>
);

export default function About() {
  const pillars = [
    {
      title: "Claridad técnica",
      copy: "Ordenamos conceptos, procedimientos y riesgos para convertirlos en materiales visuales fáciles de entender y aplicar.",
      Icon: IconTrendingUp,
      tone: "bg-primary-container text-primary",
    },
    {
      title: "Experiencia aplicada",
      copy: "Diseñamos junto a las necesidades reales de tus equipos, espacios y procesos operativos.",
      Icon: IconBolt,
      tone: "bg-secondary-container text-secondary-dim",
    },
    {
      title: "Soluciones conectadas",
      copy: "Integramos capacitación, señalética, documentación técnica y herramientas digitales en una experiencia coherente.",
      Icon: IconSparkle,
      tone: "bg-tertiary-container text-tertiary-dim",
    },
  ];

  return (
    <section id="nosotros" className="py-24 md:py-28">
      <div className="section-shell flex flex-col items-center text-center">
        <div className="mb-12 max-w-4xl space-y-5">
          <span className="eyebrow">Nuestra forma de trabajar</span>
          <h2 className="text-4xl font-black tracking-[-0.06em] text-on-surface md:text-5xl xl:text-6xl font-headline">
            Te ayudamos a{" "}
            <span className="text-primary">
              comunicar, entrenar y operar mejor
            </span>
          </h2>
          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-on-surface-variant md:text-2xl">
            Mindara combina capacitación, señalética, diseño técnico y
            soluciones digitales para empresas en Chile.
          </p>
        </div>

        <div className="grid w-full gap-6 md:grid-cols-3">
          {pillars.map(({ title, copy, Icon, tone }, index) => (
            <Reveal key={title} delay={index * 0.1} className="h-full">
              <article className="panel group h-full rounded-[1.75rem] p-7 text-left transition-all duration-300 hover:-translate-y-1 hover:shadow-brand">
                <div
                  className={`mb-6 flex h-14 w-14 items-center justify-center rounded-2xl ${tone} transition-transform duration-300 group-hover:-translate-y-1 group-hover:rotate-3`}
                >
                  <Icon />
                </div>
                <h3 className="mb-3 text-2xl font-extrabold tracking-[-0.05em] text-on-surface font-headline">
                  {title}
                </h3>
                <p className="text-base leading-relaxed text-on-surface-variant">
                  {copy}
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="mt-14 grid w-full max-w-3xl gap-8 border-t border-primary/10 pt-10 sm:grid-cols-2">
          <div className="flex flex-col items-center justify-start">
            <div className="mb-2 flex min-h-[72px] items-end text-5xl font-black tracking-[-0.08em] text-primary md:text-6xl font-headline">
              <CountUp
                to={35}
                direction="up"
                duration={2}
                className="inline-block"
              />
              <span className="ml-1">+</span>
            </div>
            <div className="text-xs font-bold uppercase tracking-[0.18em] text-on-surface-variant">
              Proyectos Exitosos
            </div>
          </div>
          <div className="flex flex-col items-center justify-start">
            <div className="mb-2 flex min-h-[72px] items-end text-5xl font-black tracking-[-0.08em] text-primary md:text-6xl font-headline">
              <CountUp
                to={10}
                direction="up"
                duration={2}
                delay={0.5}
                className="inline-block"
              />
              <span className="ml-1">+</span>
            </div>
            <div className="text-xs font-bold uppercase tracking-[0.18em] text-on-surface-variant">
              Años de Experiencia
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
