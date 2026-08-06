"use client";

import { useEffect, useState } from "react";

type CookieConsentBannerProps = {
  onShowCookiePolicy: () => void;
};

const STORAGE_KEY = "mindara_cookie_consent";

export default function CookieConsentBanner({
  onShowCookiePolicy,
}: CookieConsentBannerProps) {
  const [consent, setConsent] = useState<boolean | null>(null);

  useEffect(() => {
    const storedValue = window.localStorage.getItem(STORAGE_KEY);
    const timeoutId = window.setTimeout(
      () => setConsent(storedValue === "accepted"),
      0,
    );
    return () => window.clearTimeout(timeoutId);
  }, []);

  const acceptCookies = () => {
    window.localStorage.setItem(STORAGE_KEY, "accepted");
    setConsent(true);
  };

  if (consent === null || consent) {
    return null;
  }

  return (
    <div className="fixed bottom-6 left-1/2 z-[55] w-[min(95vw,42rem)] -translate-x-1/2 rounded-4xl border border-slate-200 bg-white/95 p-5 shadow-2xl backdrop-blur-sm">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="space-y-2">
          <p className="text-sm font-semibold text-slate-950">
            Acepta cookies para mejorar tu experiencia.
          </p>
          <p className="text-sm leading-6 text-slate-600">
            Utilizamos cookies necesarias, analíticas y de funcionalidad para
            ofrecer un sitio más rápido y personalizado.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <button
            type="button"
            onClick={acceptCookies}
            className="rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white transition hover:bg-primary/90"
          >
            Aceptar cookies
          </button>
          <button
            type="button"
            onClick={onShowCookiePolicy}
            className="rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
          >
            Ver política
          </button>
        </div>
      </div>
    </div>
  );
}
