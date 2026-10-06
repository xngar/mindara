"use client";

import { useEffect, useState } from "react";

const links = [
  { href: "#inicio", label: "Inicio", active: true },
  { href: "#nosotros", label: "Experiencia" },
  { href: "#servicios", label: "Soluciones" },
  { href: "#galeria", label: "Casos" },
  { href: "#equipo", label: "Equipo" },
  { href: "#contacto", label: "Contacto" },
];

export default function TopNavBar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const desktopMedia = window.matchMedia("(min-width: 768px)");
    const closeOnDesktop = (event: MediaQueryListEvent) => {
      if (event.matches) setIsOpen(false);
    };

    desktopMedia.addEventListener("change", closeOnDesktop);
    return () => desktopMedia.removeEventListener("change", closeOnDesktop);
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [isOpen]);

  const desktopLinkClasses =
    "cursor-pointer text-on-primary/80 hover:text-on-primary flex transition-all duration-200 hover:bg-white/8 rounded-full px-4 py-2 font-headline font-bold tracking-tight";
  const mobileLinkClasses =
    "cursor-pointer text-on-primary/80 hover:text-on-primary font-headline font-bold tracking-tight py-2 border-b border-on-primary/15";

  return (
    <nav
      className={`text-on-primary shadow-brand-lg backdrop-blur-xl ${isOpen ? "fixed inset-0 m-0 flex h-dvh max-w-none flex-col rounded-none border-0 pt-[env(safe-area-inset-top)] pb-[env(safe-area-inset-bottom)]" : "sticky top-4 z-50 mx-auto mt-4 w-[calc(100%-32px)] rounded-full border border-white/10 bg-primary/90 md:w-[calc(100%-120px)]"}`}
      style={
        isOpen
          ? { zIndex: 100, backgroundColor: "var(--brand-primary)" }
          : undefined
      }
    >
      <div className="flex shrink-0 items-center justify-between px-5 py-3 md:px-8">
        <a
          href="#inicio"
          onClick={() => setIsOpen(false)}
          className="flex items-center gap-2 text-left"
        >
          <span className="inline-flex h-2.5 w-2.5 rounded-full bg-secondary shadow-[0_0_0_4px_rgba(247,183,74,0.2)]" />
          <span className="text-xl font-black tracking-[-0.08em] text-on-primary md:text-3xl font-headline">
            MINDARA
          </span>
        </a>

        <div className="hidden items-center space-x-1 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`${desktopLinkClasses} ${link.active ? "text-on-primary bg-white/8" : ""}`}
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="#contacto"
          onClick={() => setIsOpen(false)}
          className="hidden cursor-pointer rounded-full bg-secondary px-6 py-2.5 text-sm font-bold text-on-secondary transition-all duration-200 hover:scale-[1.02] hover:bg-secondary-bright hover:text-on-secondary md:block"
        >
          Hablemos
        </a>

        <button
          aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={isOpen}
          className="flex size-11 items-center justify-center rounded-full text-on-primary transition-colors hover:bg-white/8 md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="material-symbols-outlined" aria-hidden="true">
            {isOpen ? "close" : "menu"}
          </span>
        </button>
      </div>

      {isOpen && (
        <div
          className="flex min-h-0 flex-col border-t border-white/10 px-6 pb-6 pt-6 md:hidden"
          style={{ flex: "1 1 auto" }}
        >
          <div className="flex flex-col overflow-y-auto">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`${mobileLinkClasses} ${link.active ? "text-on-primary" : ""}`}
              >
                {link.label}
              </a>
            ))}
          </div>
          <a
            href="#contacto"
            onClick={() => setIsOpen(false)}
            className="inline-flex min-h-12 shrink-0 items-center justify-center rounded-full bg-secondary px-8 py-3 text-center font-bold text-on-secondary"
            style={{ marginTop: "auto" }}
          >
            Hablemos
          </a>
        </div>
      )}
    </nav>
  );
}
