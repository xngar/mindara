'use client';

import { useActionState, useState, useEffect } from 'react';
import { sendContactEmail } from '@/app/actions';

export default function ContactForm() {
  const [state, formAction, pending] = useActionState(sendContactEmail, null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (state?.success) {
      setIsSubmitted(true);
    }
  }, [state]);

  const handleSendAnother = () => {
    setIsSubmitted(false);
  };

  return (
    <section id="contacto" className="py-32 bg-surface-container-low">
      <div className="max-w-4xl mx-auto px-8">
        <div className="bg-surface-container-lowest rounded-xl p-12 clay-shadow transition-all duration-500">
          {isSubmitted ? (
            <div className="text-center py-12 flex flex-col items-center justify-center space-y-6">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center text-primary animate-bounce">
                <span className="material-symbols-outlined text-5xl">check_circle</span>
              </div>
              <div className="space-y-2">
                <h3 className="text-3xl font-headline font-extrabold text-on-surface">¡Mensaje Enviado!</h3>
                <p className="text-on-surface-variant max-w-md mx-auto">
                  {state?.message || 'Hemos recibido tu mensaje correctamente. Nos pondremos en contacto contigo lo antes posible.'}
                </p>
              </div>
              <button
                onClick={handleSendAnother}
                className="bg-primary hover:bg-primary-dim text-on-primary px-8 py-4 rounded-xl font-bold transition-all duration-300 hover:shadow-md active:scale-95 cursor-pointer"
              >
                Enviar otro mensaje
              </button>
            </div>
          ) : (
            <>
              <div className="text-center mb-12">
                <h2 className="text-4xl font-headline font-extrabold text-on-surface mb-4">Hablemos de tu Proyecto</h2>
                <p className="text-on-surface-variant">Estamos listos para darle forma a tus ideas.</p>
              </div>
              
              <form action={formAction} className="space-y-6">
                {state?.error && (
                  <div className="p-4 bg-error/10 border border-error/20 text-error rounded-lg flex items-start gap-3">
                    <span className="material-symbols-outlined text-xl flex-shrink-0">error</span>
                    <span className="text-sm font-medium">{state.error}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2 flex flex-col">
                    <label htmlFor="name" className="text-sm font-bold text-on-surface px-1">Nombre</label>
                    <input
                      id="name"
                      name="name"
                      required
                      className="w-full bg-surface-container-low border-none rounded-lg focus:ring-2 focus:ring-primary py-4 px-6 text-on-surface transition-all"
                      placeholder="Tu nombre completo"
                      type="text"
                    />
                  </div>
                  <div className="space-y-2 flex flex-col">
                    <label htmlFor="email" className="text-sm font-bold text-on-surface px-1">Email</label>
                    <input
                      id="email"
                      name="email"
                      required
                      className="w-full bg-surface-container-low border-none rounded-lg focus:ring-2 focus:ring-primary py-4 px-6 text-on-surface transition-all"
                      placeholder="hola@tuempresa.com"
                      type="email"
                    />
                  </div>
                </div>
                <div className="space-y-2 flex flex-col">
                  <label htmlFor="subject" className="text-sm font-bold text-on-surface px-1">Asunto</label>
                  <input
                    id="subject"
                    name="subject"
                    required
                    className="w-full bg-surface-container-low border-none rounded-lg focus:ring-2 focus:ring-primary py-4 px-6 text-on-surface transition-all"
                    placeholder="¿En qué podemos ayudarte?"
                    type="text"
                  />
                </div>
                <div className="space-y-2 flex flex-col">
                  <label htmlFor="message" className="text-sm font-bold text-on-surface px-1">Mensaje</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    className="w-full bg-surface-container-low border-none rounded-lg focus:ring-2 focus:ring-primary py-4 px-6 text-on-surface transition-all"
                    placeholder="Cuéntanos más sobre tu visión..."
                    rows={5}
                  ></textarea>
                </div>
                <button
                  className="w-full bg-primary text-on-primary py-5 rounded-xl font-bold text-lg hover:shadow-lg transition-all active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 cursor-pointer"
                  type="submit"
                  disabled={pending}
                >
                  {pending ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-on-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Enviando...
                    </>
                  ) : (
                    'Enviar Mensaje'
                  )}
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
