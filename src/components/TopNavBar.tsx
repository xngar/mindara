"use client";

import { useState } from "react";

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

  const desktopLinkClasses =
    "cursor-pointer text-on-primary/80 hover:text-on-primary flex transition-colors hover:bg-on-primary/10 rounded-full px-4 py-2 font-headline font-bold tracking-tight";
  const mobileLinkClasses =
    "cursor-pointer text-on-primary/80 hover:text-on-primary font-headline font-bold tracking-tight py-2 border-b border-on-primary/15";

  return (
    <nav
      className={`mt-4 mx-auto w-[calc(100%-32px)] md:w-[calc(100%-120px)] sticky top-4 z-50 bg-primary/95 backdrop-blur-xl shadow-depth text-on-primary transition-all duration-300 ${isOpen ? "rounded-2xl" : "rounded-full"}`}
    >
      <div className="flex justify-between items-center px-6 md:px-8 py-3">
        <div className="text-2xl md:text-4xl font-black text-on-primary font-headline tracking-tight text-center">
          MINDARA
        </div>

        <div className="hidden md:flex items-center space-x-1">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`${desktopLinkClasses} ${link.active ? "text-on-primary border-b-2 border-on-primary pb-1 rounded-none" : ""}`}
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="#contacto"
          onClick={() => setIsOpen(false)}
          className="hidden md:block cursor-pointer bg-secondary text-on-secondary px-8 py-3 rounded-full font-bold transition-all scale-95 active:scale-90 hover:bg-on-primary hover:text-primary hover:shadow-brand"
        >
          Hablemos
        </a>

        <button
          aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
          className="md:hidden flex items-center justify-center p-2 text-on-primary hover:bg-on-primary/10 rounded-full transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="material-symbols-outlined" aria-hidden="true">
            {isOpen ? "close" : "menu"}
          </span>
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden flex flex-col px-6 pb-6 pt-2 space-y-4 border-t border-on-primary/15">
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
          <a
            href="#contacto"
            onClick={() => setIsOpen(false)}
            className="cursor-pointer bg-secondary text-center text-on-secondary px-8 py-3 rounded-full font-bold transition-all active:scale-95 mt-2 hover:bg-on-primary hover:text-primary"
          >
            Hablemos
          </a>
        </div>
      )}
    </nav>
  );
}
