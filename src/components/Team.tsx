import Image from "next/image";

export default function Team() {
  const members = [
    {
      name: "Mauricio Zúñiga",
      role: "Director de Tecnología & E-Learning",
      experience:
        "Lidera la estrategia tecnológica y de aprendizaje digital, con más de 15 años de experiencia en desarrollo frontend, diseño y e-learning.",
      image: "/mauricio.webp",
      icon: "",
    },
    {
      name: "Gonzalo Peralta",
      role: "Líder de Diseño",
      experience:
        "Diseña experiencias visuales e interactivas centradas en el usuario, integrando creatividad y producción multimedia en cada proyecto.",
      image: "/gonzalo.webp",
      icon: "",
    },
  ];

  return (
    <section id="equipo" className="bg-surface py-32 border-t border-outline/5">
      <div className="w-full mx-auto px-6 md:px-[60px]">
        {/* Encabezado: Título, párrafo y acento centrados */}
        <div className="max-w-3xl mx-auto mb-24 text-center space-y-6">
          <div className="space-y-4">
            <h2 className="text-5xl md:text-6xl font-headline font-black tracking-tight text-on-surface">
              Nuestro Equipo
            </h2>
            <div className="w-16 h-1 bg-primary rounded-full mx-auto"></div>
          </div>
          <p className="text-on-surface-variant text-lg leading-relaxed">
            Creemos en el poder de la colaboración multidisciplinaria.
            Fusionamos la creatividad visual con el desarrollo de ingeniería
            para entregar soluciones impecables, transformadoras y de alto
            rendimiento.
          </p>
        </div>

        {/* Rejilla del Equipo: 2 Columnas Centradas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 text-center max-w-3xl mx-auto">
          {members.map((member, index) => (
            <div key={index} className="flex flex-col items-center group">
              {/* Icono superior en azul
              <div className="w-10 h-10 mb-6 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300">
                <span className="material-symbols-outlined text-xl">{member.icon}</span>
              </div> */}

              {/* Retrato Circular en Blanco y Negro (Con transición a color en hover) */}
              <div className="relative w-48 h-48 mb-6 rounded-full overflow-hidden border border-outline/10 bg-surface-container-high shadow-md transition-all duration-500 group-hover:shadow-lg group-hover:scale-[1.02]">
                <Image
                  src={member.image}
                  alt={`Foto de perfil de ${member.name}`}
                  fill
                  sizes="192px"
                  className="object-cover grayscale transition-all duration-500 group-hover:grayscale-0"
                />
              </div>

              {/* Nombre con tipografía robusta */}
              <h3 className="text-2xl font-headline font-extrabold text-on-surface mb-2 tracking-tight group-hover:text-primary transition-colors">
                {member.name}
              </h3>

              {/* Cargo y Experiencia Simulada */}
              <p className="text-on-surface-variant text-xs font-bold uppercase tracking-wider mb-2">
                {member.role}
              </p>
              <p className="text-outline text-xs leading-relaxed max-w-xs">
                {member.experience}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
