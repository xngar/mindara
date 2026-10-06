"use client";

import { useActionState } from "react";
import { sendContactEmail } from "@/app/actions";

export default function ContactForm() {
  const [state, formAction, pending] = useActionState(sendContactEmail, null);

  const handleSendAnother = () => {
    window.location.reload();
  };

  return (
    <section id="contacto" className="py-24 md:py-28">
      <div className="section-shell">
        <div className="panel mx-auto max-w-6xl overflow-hidden rounded-[2rem] p-6 md:p-8 xl:p-10">
          {state?.success ? (
            <div className="flex flex-col items-center justify-center space-y-6 py-12 text-center">
              <div className="space-y-2">
                <h3 className="text-3xl font-black tracking-[-0.05em] text-on-surface font-headline">
                  ¡Mensaje enviado!
                </h3>
                <p className="mx-auto max-w-md text-base text-on-surface-variant">
                  {state?.message ||
                    "Hemos recibido tu mensaje correctamente. Nos pondremos en contacto contigo lo antes posible."}
                </p>
              </div>
              <button
                onClick={handleSendAnother}
                className="cursor-pointer rounded-full bg-primary px-8 py-4 text-base font-extrabold text-on-primary transition-all duration-200 hover:-translate-y-0.5 hover:bg-primary-dim"
              >
                Enviar otro mensaje
              </button>
            </div>
          ) : (
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.3fr]">
              <div className="rounded-[1.5rem] bg-primary px-6 py-8 text-on-primary md:p-8">
                <span className="eyebrow !border-white/15 !bg-white/5 !text-on-primary">
                  Hablemos
                </span>
                <h2 className="mt-5 text-4xl font-black tracking-[-0.06em] font-headline">
                  Cuéntanos qué necesitas comunicar, enseñar o mejorar
                </h2>
                <p className="mt-4 text-base leading-relaxed text-on-primary/80">
                  Prepararemos una orientación inicial para tu operación, equipo
                  o proyecto.
                </p>

                <ul className="mt-8 space-y-3 text-sm font-medium text-on-primary/85">
                  {[
                    "Capacitación visual para equipos",
                    "Señalética y contenidos de seguridad",
                    "Diseño técnico y documentación",
                    "Experiencias digitales para tu marca",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/10 text-sm">
                        ✓
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <form action={formAction} className="space-y-5 p-2 md:p-3">
                {state?.error && (
                  <div className="flex items-start gap-3 rounded-2xl border border-error/20 bg-error/10 p-4 text-sm font-medium text-error-dim">
                    <span className="material-symbols-outlined shrink-0 text-xl">
                      error
                    </span>
                    <span>{state.error}</span>
                  </div>
                )}

                <div className="grid gap-5 md:grid-cols-2">
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="name"
                      className="px-1 text-sm font-bold text-on-surface"
                    >
                      Nombre
                    </label>
                    <input
                      id="name"
                      name="name"
                      required
                      className="w-full rounded-2xl border border-primary/10 bg-surface-container-low px-4 py-3.5 text-on-surface outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20"
                      placeholder="Tu nombre completo"
                      type="text"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="email"
                      className="px-1 text-sm font-bold text-on-surface"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      required
                      className="w-full rounded-2xl border border-primary/10 bg-surface-container-low px-4 py-3.5 text-on-surface outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20"
                      placeholder="hola@tuempresa.com"
                      type="email"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="service"
                    className="px-1 text-sm font-bold text-on-surface"
                  >
                    ¿Qué necesitas desarrollar?
                  </label>
                  <select
                    id="service"
                    name="service"
                    className="w-full rounded-2xl border border-primary/10 bg-surface-container-low px-4 py-3.5 text-on-surface outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Selecciona una opción
                    </option>
                    <option value="Capacitación y contenido interactivo">
                      Capacitación y contenido interactivo
                    </option>
                    <option value="Señalética y material de seguridad">
                      Señalética y material de seguridad
                    </option>
                    <option value="Diseño técnico 3D y CAD">
                      Diseño técnico 3D y CAD
                    </option>
                    <option value="Presencia digital para empresas">
                      Presencia digital para empresas
                    </option>
                    <option value="Otro proyecto">Otro proyecto</option>
                  </select>
                </div>

                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="subject"
                    className="px-1 text-sm font-bold text-on-surface"
                  >
                    Asunto
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    required
                    className="w-full rounded-2xl border border-primary/10 bg-surface-container-low px-4 py-3.5 text-on-surface outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20"
                    placeholder="¿En qué podemos ayudarte?"
                    type="text"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="message"
                    className="px-1 text-sm font-bold text-on-surface"
                  >
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    className="w-full rounded-2xl border border-primary/10 bg-surface-container-low px-4 py-3.5 text-on-surface outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20"
                    placeholder="Cuéntanos más sobre tu visión..."
                    rows={5}
                  ></textarea>
                </div>

                <button
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-4 text-base font-extrabold text-on-primary transition-all duration-200 hover:-translate-y-0.5 hover:bg-primary-dim disabled:cursor-not-allowed disabled:opacity-50"
                  type="submit"
                  disabled={pending}
                >
                  {pending ? (
                    <>
                      <svg
                        className="mr-2 h-5 w-5 animate-spin text-on-primary"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                      </svg>
                      Enviando...
                    </>
                  ) : (
                    "Enviar mensaje"
                  )}
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
