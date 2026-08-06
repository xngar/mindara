import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidad | Mindara",
  description:
    "Política de Privacidad de Mindara para protección de datos y tratamiento de información personal.",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-[calc(100vh-6rem)] bg-surface py-20 px-6 text-slate-900 sm:px-10">
      <div className="mx-auto w-full max-w-6xl rounded-4xl border border-slate-200 bg-white p-10 shadow-xl">
        <p className="text-sm uppercase tracking-[0.3em] text-primary">
          Última actualización: 6 de agosto de 2026
        </p>
        <h1 className="mt-6 text-4xl font-semibold">Política de Privacidad</h1>

        <section className="mt-10 space-y-5 text-base leading-8 text-slate-700">
          <p>
            En www.mindara.cl (en adelante, &quot;el Sitio Web&quot;), nos
            comprometemos a proteger y respetar la privacidad de nuestros
            usuarios. Esta Política de Privacidad describe cómo recopilamos,
            utilizamos, almacenamos y protegemos la información personal que nos
            proporcionas al navegar y utilizar nuestros servicios, en
            conformidad con la legislación chilena (Ley N° 19.628 sobre
            Protección de la Vida Privada).
          </p>

          <div>
            <h2 className="text-2xl font-semibold text-slate-900">
              1. Información que Recopilamos
            </h2>
            <p className="mt-4">
              Podemos recopilar y procesar los siguientes datos personales:
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-5">
              <li>
                Información de contacto: Nombre, dirección de correo
                electrónico, número de teléfono y cualquier otro dato
                proporcionado mediante formularios de contacto, registro o
                cotización.
              </li>
              <li>
                Datos de navegación: Dirección IP, tipo de navegador, páginas
                visitadas y tiempo de permanencia en el sitio.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-slate-900">
              2. Uso de la Información
            </h2>
            <p className="mt-4">
              La información recopilada se utiliza para las siguientes
              finalidades:
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-5">
              <li>
                Responder a tus consultas, solicitudes de información o
                cotizaciones.
              </li>
              <li>Proveer y gestionar los servicios solicitados.</li>
              <li>
                Mejorar la experiencia de usuario y la navegación en el Sitio
                Web.
              </li>
              <li>
                Enviar comunicaciones informativas o comerciales, siempre que
                hayas dado tu consentimiento expreso para ello.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-slate-900">
              3. Protección y Almacenamiento de Datos
            </h2>
            <p className="mt-4">
              Implementamos medidas de seguridad técnicas y organizativas
              adecuadas para evitar el acceso no autorizado, pérdida, alteración
              o divulgación de tu información personal. No vendemos, alquilamos
              ni cedemos tus datos personales a terceros, salvo mandato legal o
              judicial.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-slate-900">
              4. Derechos del Usuario
            </h2>
            <p className="mt-4">
              De acuerdo con la legislación vigente, tienes derecho a acceder,
              rectificar, cancelar u oponerte (derechos ARCO) al tratamiento de
              tus datos personales. Para ejercer estos derechos, puedes enviar
              un correo electrónico a nuestro equipo de soporte a través de los
              canales de contacto publicados en el sitio.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-slate-900">
              5. Modificaciones a la Política
            </h2>
            <p className="mt-4">
              Nos reservamos el derecho de modificar esta Política de Privacidad
              en cualquier momento. Cualquier cambio será publicado en esta
              misma página con la fecha de actualización correspondiente.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
