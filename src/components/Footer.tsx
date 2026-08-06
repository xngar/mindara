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
      <footer className="bg-slate-50 py-12 border-t border-slate-100">
        <div className="flex flex-col md:flex-row justify-between items-center px-8 max-w-7xl mx-auto space-y-6 md:space-y-0">
          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="text-xl font-bold text-slate-800">Mindara</div>
            <div className="flex flex-wrap gap-4 text-sm">
              <button
                type="button"
                onClick={() => openLegal("privacy")}
                className="text-slate-500 hover:text-primary transition-colors"
              >
                Política de Privacidad
              </button>
              <button
                type="button"
                onClick={() => openLegal("terms")}
                className="text-slate-500 hover:text-primary transition-colors"
              >
                Términos y Condiciones
              </button>
              <button
                type="button"
                onClick={() => openLegal("cookies")}
                className="text-slate-500 hover:text-primary transition-colors"
              >
                Política de Cookies
              </button>
            </div>
          </div>

          <p className="font-['Inter'] text-sm text-slate-500">
            © 2026 Mindara. Todos los derechos reservados.
          </p>
        </div>
      </footer>
      <CookieConsentBanner onShowCookiePolicy={() => openLegal("cookies")} />
      <LegalModal open={legalOpen} type={legalType} onClose={closeLegal} />
    </>
  );
}
