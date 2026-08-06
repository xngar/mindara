import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Términos y Condiciones | Mindara",
  description:
    "Términos y condiciones de servicio para el sitio web de Mindara.",
};

export default function TermsPage() {
  return (
    <main className="min-h-[calc(100vh-6rem)] bg-surface py-20 px-6 text-slate-900 sm:px-10">
      <div className="mx-auto w-full max-w-6xl rounded-4xl border border-slate-200 bg-white p-10 shadow-xl">
        <p className="text-sm uppercase tracking-[0.3em] text-primary">
          Última actualización: 6 de agosto de 2026
        </p>
        <h1 className="mt-6 text-4xl font-semibold">
          Términos y Condiciones de Servicio
        </h1>

        <section className="mt-10 space-y-5 text-base leading-8 text-slate-700">
          <p>
            Bienvenido a www.mindara.cl. El acceso y uso de este sitio web están
            sujetos a los siguientes Términos y Condiciones de Servicio y a la
            legislación chilena vigente. Al navegar o utilizar nuestros
            servicios, aceptas expresamente cumplir con estos términos.
          </p>

          <div>
            <h2 className="text-2xl font-semibold text-slate-900">
              1. Propiedad Intelectual
            </h2>
            <p className="mt-4">
              Todos los contenidos presentados en www.mindara.cl, incluyendo
              textos, imágenes, logotipos, marcas, diseños, código fuente y
              material audiovisual, son propiedad exclusiva de Mindara o cuentan
              con las licencias correspondientes. Queda prohibida su
              reproducción, distribución o modificación sin autorización previa
              y por escrito.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-slate-900">
              2. Uso Permitido del Sitio
            </h2>
            <p className="mt-4">
              El usuario se compromete a hacer un uso adecuado y lícito del
              Sitio Web. Queda estrictamente prohibido:
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-5">
              <li>
                Realizar actos que dañen, inhabiliten o sobrecarguen la
                infraestructura del sitio.
              </li>
              <li>
                Introducir virus, programas maliciosos o código malintencionado.
              </li>
              <li>
                Intentar acceder sin autorización a áreas restringidas o datos
                de otros usuarios.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-slate-900">
              3. Limitación de Responsabilidad
            </h2>
            <p className="mt-4">
              Mindara realiza esfuerzos continuos para asegurar que la
              información del sitio sea precisa y actualizada. Sin embargo, no
              garantiza la ausencia de errores ni la interrupción continua del
              servicio. Mindara no se hace responsable por daños o perjuicios
              directos o indirectos derivados del uso o la imposibilidad de uso
              del sitio.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-slate-900">
              4. Enlaces a Terceros
            </h2>
            <p className="mt-4">
              Este sitio puede contener enlaces a sitios web de terceros.
              Mindara no ejerce control ni asume responsabilidad sobre los
              contenidos, políticas de privacidad o prácticas de dichos sitios
              externos.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-slate-900">
              5. Legislación Aplicable y Jurisdicción
            </h2>
            <p className="mt-4">
              Estos Términos y Condiciones se rigen e interpretan de conformidad
              con las leyes de la República de Chile. Cualquier controversia
              derivada del uso de este sitio será sometida a la jurisdicción de
              los tribunales ordinarios de justicia de Chile.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
