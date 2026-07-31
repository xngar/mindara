"use client";

import { useState } from "react";

const links = [
  { href: "#inicio", label: "Inicio", active: true },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#servicios", label: "Servicios" },
  { href: "#galeria", label: "Proyectos" },
  { href: "#equipo", label: "Equipo" },
  { href: "#contacto", label: "Contacto" },
];

export default function TopNavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const desktopLinkClasses =
    "cursor-pointer text-slate-600 hover:text-purple-600 flex transition-colors hover:bg-purple-50 rounded-full px-4 py-2 font-headline font-bold tracking-tight";
  const mobileLinkClasses =
    "cursor-pointer text-slate-600 hover:text-purple-700 font-headline font-bold tracking-tight py-2 border-b border-slate-100";

  return (
    <nav
      className={`mt-4 mx-auto w-[95%] max-w-7xl sticky top-4 z-50 bg-surface/80 backdrop-blur-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] text-on-surface transition-all duration-300 ${isOpen ? "rounded-2xl" : "rounded-full"}`}
    >
      <div className="flex justify-between items-center px-6 md:px-8 py-3">
        <div className="text-2xl md:text-4xl font-black text-purple-700 font-headline tracking-tight text-center">
          MINDARA<br></br>{" "}
          <h3 className="text-[1rem] mt-1 tracking-wider">
            Innovación y Desarrollo
          </h3>
        </div>

        <div className="hidden md:flex items-center space-x-1">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`${desktopLinkClasses} ${link.active ? "text-purple-700 border-b-2 border-purple-600 pb-1 rounded-none" : ""}`}
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="#contacto"
          onClick={() => setIsOpen(false)}
          className="hidden md:block cursor-pointer bg-primary text-on-primary px-8 py-3 rounded-full font-bold transition-transform scale-95 active:scale-90 hover:shadow-lg"
        >
          Cotizar
        </a>

        <button
          aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
          className="md:hidden flex items-center justify-center p-2 text-slate-600 hover:bg-purple-50 rounded-full transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="material-symbols-outlined" aria-hidden="true">
            {isOpen ? "close" : "menu"}
          </span>
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden flex flex-col px-6 pb-6 pt-2 space-y-4 border-t border-slate-100/50">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`${mobileLinkClasses} ${link.active ? "text-purple-700" : ""}`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contacto"
            onClick={() => setIsOpen(false)}
            className="cursor-pointer bg-primary text-center text-on-primary px-8 py-3 rounded-full font-bold transition-transform active:scale-95 mt-2 shadow-md"
          >
            Cotizar
          </a>
        </div>
      )}
    </nav>
  );
}
