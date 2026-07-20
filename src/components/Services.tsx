const IconShare = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8" aria-hidden="true">
    <circle cx="18" cy="5" r="3" />
    <circle cx="6" cy="12" r="3" />
    <circle cx="18" cy="19" r="3" />
    <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
    <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
  </svg>
);

const IconVideo = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8" aria-hidden="true">
    <rect x="2" y="3" width="20" height="14" rx="2" />
    <polyline points="8 21 12 17 16 21" />
    <polygon points="10 8 10 13 14 10.5" fill="currentColor" stroke="none" />
  </svg>
);

const IconSignpost = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8" aria-hidden="true">
    <polyline points="3 7 10 3 21 3 21 11 10 11 3 7" />
    <line x1="12" y1="11" x2="12" y2="21" />
    <line x1="9" y1="21" x2="15" y2="21" />
  </svg>
);

const IconMonitor = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8" aria-hidden="true">
    <rect x="2" y="3" width="20" height="14" rx="2" />
    <line x1="8" y1="21" x2="16" y2="21" />
    <line x1="12" y1="17" x2="12" y2="21" />
    <polyline points="8 9 10.5 12 8 15" />
    <line x1="13" y1="15" x2="16" y2="15" />
  </svg>
);

const IconGraduation = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8" aria-hidden="true">
    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
    <path d="M6 12v5c3.33 1.67 8.67 1.67 12 0v-5" />
  </svg>
);

const IconShoppingBag = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8" aria-hidden="true">
    <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
    <line x1="3" y1="6" x2="21" y2="6" />
    <path d="M16 10a4 4 0 0 1-8 0" />
  </svg>
);

const services = [
  {
    id: 1,
    title: "Gestión de Redes Sociales",
    description: "Transformamos tu presencia digital. Creamos, gestionamos y potenciamos tu contenido para conectar con tu audiencia, aumentar tu comunidad y convertir seguidores en clientes fieles.",
    bgColor: "bg-secondary-container",
    iconColor: "text-primary",
    hoverColor: "group-hover:text-primary",
    Icon: IconShare,
  },
  {
    id: 2,
    title: "Diseño y Producción Multimedia",
    description: "Damos vida a tus ideas con diseño gráfico, desarrollo web, producción audiovisual e impresión de alta calidad.",
    bgColor: "bg-orange-100",
    iconColor: "text-orange-500",
    hoverColor: "group-hover:text-orange-500",
    Icon: IconVideo,
  },
  {
    id: 3,
    title: "Señalética Estratégica",
    description: "Diseñamos sistemas de comunicación visual que guían, informan y organizan espacios físicos, mejorando la experiencia del usuario.",
    bgColor: "bg-purple-100",
    iconColor: "text-purple-600",
    hoverColor: "group-hover:text-purple-600",
    Icon: IconSignpost,
  },
  {
    id: 4,
    title: "Diseño y Desarrollo Digital",
    description: "Transformamos ideas en productos digitales de alto impacto. Fusionamos diseño UX/UI estratégico con desarrollo robusto para crear plataformas intuitivas, ultra rápidas y listas para convertir.",
    bgColor: "bg-blue-100",
    iconColor: "text-blue-600",
    hoverColor: "group-hover:text-blue-600",
    Icon: IconMonitor,
  },
  {
    id: 5,
    title: "E-Learning y Entornos Virtuales",
    description: "Desarrollamos plataformas educativas a medida con interfaces intuitivas, diseñadas para una experiencia de aprendizaje inmersiva y efectiva.",
    bgColor: "bg-green-100",
    iconColor: "text-green-600",
    hoverColor: "group-hover:text-green-600",
    Icon: IconGraduation,
  },
  {
    id: 6,
    title: "eCommerce",
    description: "Tiendas online optimizadas para vender más y ofrecer un proceso de compra impecable.",
    bgColor: "bg-pink-100",
    iconColor: "text-pink-600",
    hoverColor: "group-hover:text-pink-600",
    Icon: IconShoppingBag,
  },
];

export default function Services() {
  return (
    <section id="servicios" className="py-32 bg-surface">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-20 space-y-4">
          <h2 className="text-6xl md:text-6xl font-headline font-extrabold text-on-surface">Nuestros Servicios</h2>
          <p className="text-on-surface-variant max-w-2xl mx-auto text-lg">Soluciones integrales diseñadas para elevar tu marca en el ecosistema digital.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map(({ id, title, description, bgColor, iconColor, hoverColor, Icon }) => (
            <div key={id} className="bg-surface-container-lowest p-10 rounded-xl hover:shadow-xl transition-all duration-300 group border border-transparent hover:border-primary/10">
              <div className={`w-16 h-16 mb-8 rounded-2xl ${bgColor} flex items-center justify-center ${iconColor} overflow-hidden shrink-0`}>
                <Icon />
              </div>
              <h3 className={`text-2xl font-headline font-extrabold mb-4 ${hoverColor} transition-colors`}>{title}</h3>
              <p className="text-on-surface-variant leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
