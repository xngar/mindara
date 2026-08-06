"use client";

import { useEffect } from "react";

type LegalType = "privacy" | "terms" | "cookies";

const legalTexts: Record<
  LegalType,
  {
    title: string;
    sections: Array<{ title: string; paragraphs: string[]; list?: string[] }>;
  }
> = {
  privacy: {
    title: "Política de Privacidad",
    sections: [
      {
        title: "1. Información que Recopilamos",
        paragraphs: [
          "Podemos recopilar y procesar los siguientes datos personales:",
          "Información de contacto: Nombre, dirección de correo electrónico, número de teléfono y cualquier otro dato proporcionado mediante formularios de contacto, registro o cotización.",
          "Datos de navegación: Dirección IP, tipo de navegador, páginas visitadas y tiempo de permanencia en el sitio.",
        ],
      },
      {
        title: "2. Uso de la Información",
        paragraphs: [
          "La información recopilada se utiliza para las siguientes finalidades:",
        ],
        list: [
          "Responder a tus consultas, solicitudes de información o cotizaciones.",
          "Proveer y gestionar los servicios solicitados.",
          "Mejorar la experiencia de usuario y la navegación en el Sitio Web.",
          "Enviar comunicaciones informativas o comerciales, siempre que hayas dado tu consentimiento expreso para ello.",
        ],
      },
      {
        title: "3. Protección y Almacenamiento de Datos",
        paragraphs: [
          "Implementamos medidas de seguridad técnicas y organizativas adecuadas para evitar el acceso no autorizado, pérdida, alteración o divulgación de tu información personal.",
          "No vendemos, alquilamos ni cedemos tus datos personales a terceros, salvo mandato legal o judicial.",
        ],
      },
      {
        title: "4. Derechos del Usuario",
        paragraphs: [
          "De acuerdo con la legislación vigente, tienes derecho a acceder, rectificar, cancelar u oponerte (derechos ARCO) al tratamiento de tus datos personales.",
          "Para ejercer estos derechos, puedes enviar un correo electrónico a nuestro equipo de soporte a través de los canales de contacto publicados en el sitio.",
        ],
      },
      {
        title: "5. Modificaciones a la Política",
        paragraphs: [
          "Nos reservamos el derecho de modificar esta Política de Privacidad en cualquier momento. Cualquier cambio será publicado en esta misma página con la fecha de actualización correspondiente.",
        ],
      },
    ],
  },
  terms: {
    title: "Términos y Condiciones de Servicio",
    sections: [
      {
        title: "1. Propiedad Intelectual",
        paragraphs: [
          "Todos los contenidos presentados en www.mindara.cl, incluyendo textos, imágenes, logotipos, marcas, diseños, código fuente y material audiovisual, son propiedad exclusiva de Mindara o cuentan con las licencias correspondientes.",
          "Queda prohibida su reproducción, distribución o modificación sin autorización previa y por escrito.",
        ],
      },
      {
        title: "2. Uso Permitido del Sitio",
        paragraphs: [
          "El usuario se compromete a hacer un uso adecuado y lícito del Sitio Web. Queda estrictamente prohibido:",
        ],
        list: [
          "Realizar actos que dañen, inhabiliten o sobrecarguen la infraestructura del sitio.",
          "Introducir virus, programas maliciosos o código malintencionado.",
          "Intentar acceder sin autorización a áreas restringidas o datos de otros usuarios.",
        ],
      },
      {
        title: "3. Limitación de Responsabilidad",
        paragraphs: [
          "Mindara realiza esfuerzos continuos para asegurar que la información del sitio sea precisa y actualizada. Sin embargo, no garantiza la ausencia de errores ni la interrupción continua del servicio.",
          "Mindara no se hace responsable por daños o perjuicios directos o indirectos derivados del uso o la imposibilidad de uso del sitio.",
        ],
      },
      {
        title: "4. Enlaces a Terceros",
        paragraphs: [
          "Este sitio puede contener enlaces a sitios web de terceros. Mindara no ejerce control ni asume responsabilidad sobre los contenidos, políticas de privacidad o prácticas de dichos sitios externos.",
        ],
      },
      {
        title: "5. Legislación Aplicable y Jurisdicción",
        paragraphs: [
          "Estos Términos y Condiciones se rigen e interpretan de conformidad con las leyes de la República de Chile.",
          "Cualquier controversia derivada del uso de este sitio será sometida a la jurisdicción de los tribunales ordinarios de justicia de Chile.",
        ],
      },
    ],
  },
  cookies: {
    title: "Política de Cookies",
    sections: [
      {
        title: "1. ¿Qué es una Cookie?",
        paragraphs: [
          "Una cookie es un pequeño archivo de texto que se descarga en tu dispositivo (computadora, smartphone o tablet) al acceder a determinadas páginas web.",
          "Permiten que el sitio recuerde información sobre tu visita, como tu idioma preferido y otras opciones de configuración.",
        ],
      },
      {
        title: "2. Tipos de Cookies que Utilizamos",
        paragraphs: [
          "Utilizamos cookies y tecnologías similares para mejorar la experiencia de navegación, optimizar las funcionalidades de la página y recopilar información analítica sobre el uso del sitio.",
        ],
        list: [
          "Cookies Necesarias: Son esenciales para el funcionamiento básico del Sitio Web y te permiten navegar y utilizar sus funciones principales.",
          "Cookies de Rendimiento y Analítica: Nos permiten cuantificar el número de usuarios y analizar estadísticamente la utilización que hacen de nuestra web.",
          "Cookies de Funcionalidad: Permiten recordar las elecciones que realizas para ofrecerte una experiencia más personalizada.",
        ],
      },
      {
        title: "3. Gestión y Desactivación de Cookies",
        paragraphs: [
          "Puedes permitir, bloquear o eliminar las cookies instaladas en tu equipo mediante la configuración de las opciones de tu navegador de Internet.",
          "Ten en cuenta que si deshabilitas ciertas cookies, es posible que algunas funciones del Sitio Web no funcionen correctamente.",
        ],
        list: [
          "Google Chrome: Configuración > Privacidad y seguridad > Cookies y otros datos de sitios.",
          "Mozilla Firefox: Opciones > Privacidad & Seguridad.",
          "Safari: Preferencias > Privacidad.",
          "Microsoft Edge: Configuración > Permisos del sitio > Cookies y datos del sitio.",
        ],
      },
    ],
  },
};

export default function LegalModal({
  open,
  type,
  onClose,
}: {
  open: boolean;
  type: LegalType | null;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!open) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open || !type) {
    return null;
  }

  const content = legalTexts[type];

  return (
    <div className="fixed inset-0 z-60 flex items-center justify-center px-4 py-6">
      <div
        className="absolute inset-0 bg-slate-950/70 backdrop-blur-sm"
        onClick={onClose}
      />

      <div className="relative z-10 mx-auto max-h-[90vh] w-full max-w-5xl overflow-y-auto rounded-4xl border border-slate-200 bg-white p-8 shadow-2xl">
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-primary">
              Última actualización: 6 de agosto de 2026
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-slate-950">
              {content.title}
            </h2>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-200"
          >
            Cerrar
          </button>
        </div>

        <div className="mt-8 space-y-10">
          {content.sections.map((section) => (
            <section key={section.title}>
              <h3 className="text-xl font-semibold text-slate-900">
                {section.title}
              </h3>
              <div className="mt-4 space-y-4 text-base leading-7 text-slate-700">
                {section.paragraphs.map((paragraph, index) => (
                  <p key={`${section.title}-${index}`}>{paragraph}</p>
                ))}
                {section.list && (
                  <ul className="mt-2 list-disc space-y-2 pl-5 text-slate-700">
                    {section.list.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                )}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
