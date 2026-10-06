import Image from "next/image";
import Reveal from "./Reveal";

export default function Team() {
  const members = [
    {
      name: "Mauricio Zúñiga",
      role: "Director de Tecnología & E-Learning",
      experience:
        "Lidera la estrategia tecnológica y de aprendizaje digital, con más de 15 años de experiencia en desarrollo frontend, diseño y e-learning.",
      image: "/mauricio.webp",
    },
    {
      name: "Gonzalo Peralta",
      role: "Líder de Diseño",
      experience:
        "Diseña experiencias visuales e interactivas centradas en el usuario, integrando creatividad y producción multimedia en cada proyecto.",
      image: "/gonzalo.webp",
    },
  ];

  return (
    <section id="equipo" className="py-24 md:py-28">
      <div className="section-shell">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <span className="eyebrow">Nuestro equipo</span>
          <h2 className="mt-5 text-4xl font-black tracking-[-0.06em] text-on-surface md:text-5xl xl:text-6xl font-headline">
            Creatividad y rigor técnico al servicio de tus metas
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-on-surface-variant md:text-xl">
            Creemos en la colaboración multidisciplinaria. Fusionamos la
            creatividad visual con el desarrollo de ingeniería para entregar
            soluciones impecables, transformadoras y de alto rendimiento.
          </p>
        </div>

        <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
          {members.map((member, index) => (
            <Reveal key={member.name} delay={index * 0.12} className="h-full">
              <article className="panel group h-full rounded-[2rem] p-8 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-brand">
                <div className="relative mx-auto mb-6 h-52 w-52 overflow-hidden rounded-full border border-primary/10 bg-surface-container-high shadow-md">
                  <Image
                    src={member.image}
                    alt={`Foto de perfil de ${member.name}`}
                    fill
                    sizes="208px"
                    className="object-cover grayscale transition-all duration-500 group-hover:scale-105 group-hover:grayscale-0"
                  />
                </div>

                <h3 className="mb-2 text-3xl font-black tracking-[-0.05em] text-on-surface font-headline">
                  {member.name}
                </h3>

                <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-primary">
                  {member.role}
                </p>
                <p className="mx-auto max-w-xs text-base leading-relaxed text-on-surface-variant">
                  {member.experience}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
