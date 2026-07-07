"use client";

import { useState } from 'react';
import { Link } from 'react-scroll';

export default function TopNavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={`mt-4 mx-auto w-[95%] max-w-7xl sticky top-4 z-50 bg-surface/80 backdrop-blur-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] text-on-surface transition-all duration-300 ${isOpen ? 'rounded-2xl' : 'rounded-full'}`}>
      <div className="flex justify-between items-center px-6 md:px-8 py-3">
        <div className="text-2xl md:text-4xl font-black text-purple-700 font-headline tracking-tight text-center">MINDARA<br></br> <h3 className='text-[1rem] mt-1 tracking-wider'>Innovación y Desarrollo</h3></div>

        {/* Enlaces de Escritorio */}
        <div className="hidden md:flex items-center space-x-1">
          <Link to="inicio" smooth={true} duration={500} offset={-100} className="cursor-pointer text-purple-700 border-b-2 border-purple-600 pb-1 font-headline font-bold tracking-tight px-4 py-2">Inicio</Link>
          <Link to="nosotros" smooth={true} duration={500} offset={-100} className="cursor-pointer text-slate-600 hover:text-purple-600 flex transition-colors hover:bg-purple-50 rounded-full px-4 py-2 font-headline font-bold tracking-tight">Nosotros</Link>
          <Link to="servicios" smooth={true} duration={500} offset={-100} className="cursor-pointer text-slate-600 hover:text-purple-600 flex transition-colors hover:bg-purple-50 rounded-full px-4 py-2 font-headline font-bold tracking-tight">Servicios</Link>
          <Link to="galeria" smooth={true} duration={500} offset={-100} className="cursor-pointer text-slate-600 hover:text-purple-600 flex transition-colors hover:bg-purple-50 rounded-full px-4 py-2 font-headline font-bold tracking-tight">Galería</Link>
          <Link to="equipo" smooth={true} duration={500} offset={-100} className="cursor-pointer text-slate-600 hover:text-purple-600 flex transition-colors hover:bg-purple-50 rounded-full px-4 py-2 font-headline font-bold tracking-tight">Equipo</Link>
          <Link to="contacto" smooth={true} duration={500} offset={-100} className="cursor-pointer text-slate-600 hover:text-purple-600 flex transition-colors hover:bg-purple-50 rounded-full px-4 py-2 font-headline font-bold tracking-tight">Contacto</Link>
        </div>

        {/* Botón Acción Escritorio */}
        <Link to="contacto" smooth={true} duration={500} offset={-100} className="hidden md:block cursor-pointer bg-primary text-on-primary px-8 py-3 rounded-full font-bold transition-transform scale-95 active:scale-90 hover:shadow-lg">
          Cotizar
        </Link>

        {/* Botón Menú Móvil (Hamburger) */}
        <button
          className="md:hidden flex items-center justify-center p-2 text-slate-600 hover:bg-purple-50 rounded-full transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="material-symbols-outlined">{isOpen ? 'close' : 'menu'}</span>
        </button>
      </div>

      {/* Menú Móvil Desplegable */}
      {isOpen && (
        <div className="md:hidden flex flex-col px-6 pb-6 pt-2 space-y-4 border-t border-slate-100/50">
          <Link to="inicio" onClick={() => setIsOpen(false)} smooth={true} duration={500} offset={-100} className="cursor-pointer text-purple-700 font-headline font-bold tracking-tight py-2 border-b border-purple-100">Inicio</Link>
          <Link to="nosotros" onClick={() => setIsOpen(false)} smooth={true} duration={500} offset={-100} className="cursor-pointer text-slate-600 hover:text-purple-700 font-headline font-bold tracking-tight py-2 border-b border-slate-100">Nosotros</Link>
          <Link to="servicios" onClick={() => setIsOpen(false)} smooth={true} duration={500} offset={-100} className="cursor-pointer text-slate-600 hover:text-purple-700 font-headline font-bold tracking-tight py-2 border-b border-slate-100">Servicios</Link>
          <Link to="galeria" onClick={() => setIsOpen(false)} smooth={true} duration={500} offset={-100} className="cursor-pointer text-slate-600 hover:text-purple-700 font-headline font-bold tracking-tight py-2 border-b border-slate-100">Galería</Link>
          <Link to="equipo" onClick={() => setIsOpen(false)} smooth={true} duration={500} offset={-100} className="cursor-pointer text-slate-600 hover:text-purple-700 font-headline font-bold tracking-tight py-2 border-b border-slate-100">Equipo</Link>
          <Link to="contacto" onClick={() => setIsOpen(false)} smooth={true} duration={500} offset={-100} className="cursor-pointer text-slate-600 hover:text-purple-700 font-headline font-bold tracking-tight py-2 border-b border-slate-100">Contacto</Link>
          <Link to="contacto" onClick={() => setIsOpen(false)} smooth={true} duration={500} offset={-100} className="cursor-pointer bg-primary text-center text-on-primary px-8 py-3 rounded-full font-bold transition-transform active:scale-95 mt-2 shadow-md">
            Cotizar
          </Link>
        </div>
      )}
    </nav>
  );
}
