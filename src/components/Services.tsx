import Reveal from "./Reveal";

const IconShare = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.75"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-8 w-8"
    aria-hidden="true"
  >
    <circle cx="18" cy="5" r="3" />
    <circle cx="6" cy="12" r="3" />
    <circle cx="18" cy="19" r="3" />
    <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
    <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
  </svg>
);

const IconVideo = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.75"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-8 w-8"
    aria-hidden="true"
  >
    <rect x="2" y="3" width="20" height="14" rx="2" />
    <polyline points="8 21 12 17 16 21" />
    <polygon points="10 8 10 13 14 10.5" fill="currentColor" stroke="none" />
  </svg>
);

const IconSignpost = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.75"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-8 w-8"
    aria-hidden="true"
  >
    <polyline points="3 7 10 3 21 3 21 11 10 11 3 7" />
    <line x1="12" y1="11" x2="12" y2="21" />
    <line x1="9" y1="21" x2="15" y2="21" />
  </svg>
);

const IconMonitor = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.75"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-8 w-8"
    aria-hidden="true"
  >
    <rect x="2" y="3" width="20" height="14" rx="2" />
    <line x1="8" y1="21" x2="16" y2="21" />
    <line x1="12" y1="17" x2="12" y2="21" />
    <polyline points="8 9 10.5 12 8 15" />
    <line x1="13" y1="15" x2="16" y2="15" />
  </svg>
);

const IconGraduation = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.75"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-8 w-8"
    aria-hidden="true"
  >
    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
    <path d="M6 12v5c3.33 1.67 8.67 1.67 12 0v-5" />
  </svg>
);

const IconShoppingBag = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.75"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-8 w-8"
    aria-hidden="true"
  >
    <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
    <line x1="3" y1="6" x2="21" y2="6" />
    <path d="M16 10a4 4 0 0 1-8 0" />
  </svg>
);

const services = [
  {
    title: "Capacitación y Contenido Interactivo",
    description:
      "Cursos y materiales visuales para que tu equipo aprenda más rápido y mejor.",
    bgColor: "bg-primary-container",
    iconColor: "text-primary",
    Icon: IconShare,
  },
  {
    title: "Diseño Técnico 3D y CAD",
    description:
      "Digitalizamos, vectorizamos y actualizamos planos, planimetría, diagramas y documentación técnica para que tu equipo trabaje con información ordenada y vigente.",
    bgColor: "bg-secondary-container",
    iconColor: "text-secondary-dim",
    Icon: IconVideo,
  },
  {
    title: "Señalética y Material de Seguridad",
    description:
      "Soluciones visuales para orientar, prevenir riesgos y reforzar la seguridad.",
    bgColor: "bg-tertiary-container",
    iconColor: "text-tertiary-dim",
    Icon: IconSignpost,
  },
  {
    title: "Presencia Digital para Empresas",
    description:
      "Sitios y experiencias digitales que conectan mejor tu marca con tu equipo y clientes.",
    bgColor: "bg-primary-container",
    iconColor: "text-primary",
    Icon: IconMonitor,
  },
  {
    title: "E-Learning y Entornos Virtuales",
    description:
      "Plataformas y contenidos digitales para capacitar sin fricción ni pérdida de tiempo.",
    bgColor: "bg-secondary-container",
    iconColor: "text-secondary-dim",
    Icon: IconGraduation,
  },
  {
    title: "Desarrollo de eCommerce",
    description:
      "Tiendas online pensadas para vender mejor y facilitar la compra.",
    bgColor: "bg-tertiary-container",
    iconColor: "text-tertiary-dim",
    Icon: IconShoppingBag,
  },
];

export default function Services() {
  return (
    <section id="servicios" className="py-24 md:py-28">
      <div className="section-shell">
        <div className="mb-12 text-center md:mb-16">
          <span className="eyebrow">Soluciones para empresas</span>
          <h2 className="mt-5 text-4xl font-black tracking-[-0.06em] text-on-surface md:text-5xl xl:text-6xl font-headline">
            Diseñamos lo que hace crecer tu operación
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg leading-relaxed text-on-surface-variant md:text-xl">
            Diseño técnico, capacitación, señalética y soluciones digitales para
            comunicar mejor y operar con seguridad.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map(
            ({ title, description, bgColor, iconColor, Icon }, index) => (
              <Reveal key={title} delay={index * 0.08} className="h-full">
                <article className="service-card panel group h-full rounded-[1.75rem] p-7">
                  <div
                    className={`mb-6 flex h-14 w-14 items-center justify-center rounded-2xl ${bgColor} ${iconColor} shadow-brand transition-transform duration-300 group-hover:scale-105`}
                  >
                    <Icon />
                  </div>
                  <h3 className="mb-3 text-2xl font-extrabold tracking-[-0.05em] text-on-surface font-headline">
                    {title}
                  </h3>
                  <p className="text-base leading-relaxed text-on-surface-variant">
                    {description}
                  </p>
                </article>
              </Reveal>
            ),
          )}
        </div>
      </div>
    </section>
  );
}
