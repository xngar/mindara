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
      <footer className="bg-secondary py-12 border-t border-on-secondary/15">
        <div className="flex flex-col md:flex-row justify-between items-center px-6 md:px-[60px] w-full mx-auto space-y-6 md:space-y-0">
          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="text-xl font-bold text-on-secondary">Mindara</div>
            <div className="flex flex-wrap gap-4 text-sm">
              <button
                type="button"
                onClick={() => openLegal("privacy")}
                className="text-on-secondary/80 hover:text-on-secondary transition-colors"
              >
                Política de Privacidad
              </button>
              <button
                type="button"
                onClick={() => openLegal("terms")}
                className="text-on-secondary/80 hover:text-on-secondary transition-colors"
              >
                Términos y Condiciones
              </button>
              <button
                type="button"
                onClick={() => openLegal("cookies")}
                className="text-on-secondary/80 hover:text-on-secondary transition-colors"
              >
                Política de Cookies
              </button>
            </div>
          </div>

          <p className="font-['Inter'] text-sm text-on-secondary/80">
            © 2026 Mindara. Todos los derechos reservados.
          </p>
        </div>
      </footer>
      <CookieConsentBanner onShowCookiePolicy={() => openLegal("cookies")} />
      <LegalModal open={legalOpen} type={legalType} onClose={closeLegal} />
    </>
  );
}
