"use client";

import { useState } from "react";
import CookieConsentBanner from "./CookieConsentBanner";
import LegalModal from "./LegalModal";

export default function Footer() {
  const [legalOpen, setLegalOpen] = useState(false);
  const [legalType, setLegalType] = useState<
    "privacy" | "terms" | "cookies" | null
  >(null);

  const openLegal = (type: "privacy" | "terms" | "cookies") => {
    setLegalType(type);
    setLegalOpen(true);
  };

  const closeLegal = () => {
    setLegalOpen(false);
    setLegalType(null);
  };

  return (
    <>
      <footer className="border-t border-white/10 bg-primary py-12 text-on-primary">
        <div className="section-shell flex flex-col items-center justify-between gap-6 md:flex-row md:gap-0">
          <div className="flex flex-col items-center gap-4 md:items-start">
            <div className="flex items-center text-xl font-black tracking-[-0.08em] font-headline">
              Mindara
            </div>
            <div className="flex flex-wrap justify-center gap-4 text-sm md:justify-start">
              <button
                type="button"
                onClick={() => openLegal("privacy")}
                className="text-on-primary/80 transition-colors hover:text-on-primary"
              >
                Política de Privacidad
              </button>
              <button
                type="button"
                onClick={() => openLegal("terms")}
                className="text-on-primary/80 transition-colors hover:text-on-primary"
              >
                Términos y Condiciones
              </button>
              <button
                type="button"
                onClick={() => openLegal("cookies")}
                className="text-on-primary/80 transition-colors hover:text-on-primary"
              >
                Política de Cookies
              </button>
            </div>
          </div>

          <p className="text-sm text-on-primary/75">
            © 2026 Mindara. Todos los derechos reservados.
          </p>
        </div>
      </footer>
      <CookieConsentBanner onShowCookiePolicy={() => openLegal("cookies")} />
      <LegalModal open={legalOpen} type={legalType} onClose={closeLegal} />
    </>
  );
}
