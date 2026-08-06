import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Cookies | Mindara",
  description:
    "Política de Cookies de Mindara para el uso de cookies y herramientas de seguimiento.",
};

export default function CookiesPage() {
  return (
    <main className="min-h-[calc(100vh-6rem)] bg-surface py-20 px-6 text-slate-900 sm:px-10">
      <div className="mx-auto w-full max-w-6xl rounded-4xl border border-slate-200 bg-white p-10 shadow-xl">
        <p className="text-sm uppercase tracking-[0.3em] text-primary">
          Última actualización: 6 de agosto de 2026
        </p>
        <h1 className="mt-6 text-4xl font-semibold">Política de Cookies</h1>

        <section className="mt-10 space-y-5 text-base leading-8 text-slate-700">
          <p>
            El sitio web www.mindara.cl utiliza cookies y tecnologías similares
            para mejorar la experiencia de navegación, optimizar las
            funcionalidades de la página y recopilar información analítica sobre
            el uso del sitio.
          </p>

          <div>
            <h2 className="text-2xl font-semibold text-slate-900">
              1. ¿Qué es una Cookie?
            </h2>
            <p className="mt-4">
              Una cookie es un pequeño archivo de texto que se descarga en tu
              dispositivo (computadora, smartphone o tablet) al acceder a
              determinadas páginas web. Permiten que el sitio recuerde
              información sobre tu visita, como tu idioma preferido y otras
              opciones de configuración.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-slate-900">
              2. Tipos de Cookies que Utilizamos
            </h2>
            <p className="mt-4">
              Utilizamos cookies y tecnologías similares para mejorar la
              experiencia de navegación, optimizar las funcionalidades de la
              página y recopilar información analítica sobre el uso del sitio.
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-5">
              <li>
                Cookies Necesarias: Son esenciales para el funcionamiento básico
                del Sitio Web y te permiten navegar y utilizar sus funciones
                principales.
              </li>
              <li>
                Cookies de Rendimiento y Analítica: Nos permiten cuantificar el
                número de usuarios y analizar estadísticamente la utilización
                que hacen de nuestra web.
              </li>
              <li>
                Cookies de Funcionalidad: Permiten recordar las elecciones que
                realizas para ofrecerte una experiencia más personalizada.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-slate-900">
              3. Gestión y Desactivación de Cookies
            </h2>
            <p className="mt-4">
              Puedes permitir, bloquear o eliminar las cookies instaladas en tu
              equipo mediante la configuración de las opciones de tu navegador
              de Internet.
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-5">
              <li>
                Google Chrome: Configuración &gt; Privacidad y seguridad &gt;
                Cookies y otros datos de sitios.
              </li>
              <li>
                Mozilla Firefox: Opciones &gt; Privacidad &amp; Seguridad.
              </li>
              <li>Safari: Preferencias &gt; Privacidad.</li>
              <li>
                Microsoft Edge: Configuración &gt; Permisos del sitio &gt;
                Cookies y datos del sitio.
              </li>
            </ul>
            <p className="mt-4">
              Ten en cuenta que si deshabilitas ciertas cookies, es posible que
              algunas funciones del Sitio Web no funcionen correctamente.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
