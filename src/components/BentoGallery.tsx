'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';

interface GalleryImage {
  src: string;
  alt: string;
}

const images: GalleryImage[] = [
  { src: '/001.png', alt: 'Proyecto 1' },
  { src: '/002.png', alt: 'Proyecto 2' },
  { src: '/003.png', alt: 'Proyecto 3' },
  { src: '/004.png', alt: 'Proyecto 4' },
  { src: '/005.png', alt: 'Proyecto 5' },
  { src: '/006.png', alt: 'Proyecto 6' },
  { src: '/007.png', alt: 'Proyecto 7' },
];

/**
 * Distribución Bento para 7 imágenes en un grid de 4 columnas / 3 filas:
 *
 *  ┌──────────┬────┬────┐
 *  │  001(2x2)│ 002│ 003│
 *  │          ├────┴────┤
 *  │          │  004(2x1)│
 *  ├────┬─────┴──┬───── ┤
 *  │ 005│  006   │  007 │
 *  └────┴────────┴──────┘
 */
const bentoStyles: React.CSSProperties[] = [
  { gridColumn: '1 / 3', gridRow: '1 / 3' },      // 001 — 2×2
  { gridColumn: '3 / 4', gridRow: '1 / 2' },      // 002 — 1×1
  { gridColumn: '4 / 5', gridRow: '1 / 2' },      // 003 — 1×1
  { gridColumn: '3 / 5', gridRow: '2 / 3' },      // 004 — 2×1
  { gridColumn: '1 / 2', gridRow: '3 / 4' },      // 005 — 1×1
  { gridColumn: '2 / 4', gridRow: '3 / 4' },      // 006 — 2×1
  { gridColumn: '4 / 5', gridRow: '3 / 4' },      // 007 — 1×1
];

export default function BentoGallery() {
  const [selected, setSelected] = useState<GalleryImage | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number>(-1);
  const [isClosing, setIsClosing] = useState(false);

  const openModal = (img: GalleryImage, idx: number) => {
    setSelected(img);
    setSelectedIndex(idx);
    setIsClosing(false);
  };

  const closeModal = useCallback(() => {
    setIsClosing(true);
    setTimeout(() => {
      setSelected(null);
      setSelectedIndex(-1);
      setIsClosing(false);
    }, 250);
  }, []);

  const navigate = useCallback(
    (dir: 1 | -1) => {
      const next = (selectedIndex + dir + images.length) % images.length;
      setSelectedIndex(next);
      setSelected(images[next]);
    },
    [selectedIndex]
  );

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (!selected) return;
      if (e.key === 'Escape') closeModal();
      if (e.key === 'ArrowRight') navigate(1);
      if (e.key === 'ArrowLeft') navigate(-1);
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [selected, closeModal, navigate]);

  // Bloquear scroll cuando el modal está abierto
  useEffect(() => {
    document.body.style.overflow = selected ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [selected]);

  return (
    <section id="galeria" className="py-32 bg-surface-container-low">
      <div className="max-w-7xl mx-auto px-8">

        {/* Encabezado */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-5xl md:text-6xl font-headline font-extrabold text-on-surface">
            Nuestro Trabajo
          </h2>
          <p className="text-on-surface-variant max-w-2xl mx-auto text-lg">
            Una selección de proyectos que reflejan nuestra pasión por el diseño y la innovación digital.
          </p>
        </div>

        {/* Grid Bento */}
        <div
          className="grid gap-4"
          style={{
            gridTemplateColumns: 'repeat(4, 1fr)',
            gridTemplateRows: 'repeat(3, 220px)',
          }}
        >
          {images.map((img, idx) => (
            <button
              key={img.src}
              id={`gallery-item-${idx + 1}`}
              onClick={() => openModal(img, idx)}
              className="relative overflow-hidden rounded-2xl group cursor-pointer focus:outline-none focus-visible:ring-4 focus-visible:ring-primary/60"
              style={bentoStyles[idx]}
              aria-label={`Ver ${img.alt} en grande`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
              />

              {/* Overlay degradado */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Etiqueta hover */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <span className="text-white font-headline font-bold text-sm tracking-wide drop-shadow">
                  {img.alt}
                </span>
                <span className="material-symbols-outlined text-white text-xl drop-shadow">
                  zoom_in
                </span>
              </div>

              {/* Borde brillante */}
              <div className="absolute inset-0 rounded-2xl ring-0 group-hover:ring-2 ring-primary/40 transition-all duration-300 pointer-events-none" />
            </button>
          ))}
        </div>
      </div>

      {/* ── Modal / Lightbox ── */}
      {selected && (
        <div
          id="gallery-lightbox"
          className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-all duration-250 ${
            isClosing ? 'opacity-0' : 'opacity-100'
          }`}
          onClick={closeModal}
          role="dialog"
          aria-modal="true"
          aria-label={`Imagen ampliada: ${selected.alt}`}
        >
          {/* Fondo oscuro con blur */}
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

          {/* Contenedor de la imagen — solo la imagen para que el flex centre correctamente */}
          <div
            className={`relative z-10 max-w-5xl w-full transition-all duration-300 ${
              isClosing ? 'scale-95 opacity-0' : 'scale-100 opacity-100'
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className="relative w-full rounded-2xl overflow-hidden shadow-2xl"
              style={{ aspectRatio: '16/9' }}
            >
              <Image
                src={selected.src}
                alt={selected.alt}
                fill
                sizes="100vw"
                className="object-contain"
                priority
              />
            </div>
          </div>

          {/* Pie del modal — anclado absolutamente fuera del flujo de centrado */}
          <div
            className="absolute bottom-16 left-1/2 -translate-x-1/2 z-20 flex items-center gap-6 px-4"
            onClick={(e) => e.stopPropagation()}
          >
            <span className="text-white/80 font-headline font-semibold text-base whitespace-nowrap">
              {selected.alt}
            </span>
            <span className="text-white/40 text-sm tabular-nums">
              {selectedIndex + 1} / {images.length}
            </span>
          </div>

          {/* Botón cerrar */}
          <button
            id="gallery-close-btn"
            onClick={closeModal}
            className="absolute top-5 right-5 z-20 w-11 h-11 rounded-full bg-white/10 hover:bg-white/25 backdrop-blur-sm flex items-center justify-center text-white transition-colors duration-200 cursor-pointer"
            aria-label="Cerrar galería"
          >
            <span className="material-symbols-outlined text-2xl">close</span>
          </button>

          {/* Botón anterior */}
          <button
            id="gallery-prev-btn"
            onClick={(e) => { e.stopPropagation(); navigate(-1); }}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/10 hover:bg-white/25 backdrop-blur-sm flex items-center justify-center text-white transition-colors duration-200 cursor-pointer"
            aria-label="Imagen anterior"
          >
            <span className="material-symbols-outlined text-3xl">chevron_left</span>
          </button>

          {/* Botón siguiente */}
          <button
            id="gallery-next-btn"
            onClick={(e) => { e.stopPropagation(); navigate(1); }}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/10 hover:bg-white/25 backdrop-blur-sm flex items-center justify-center text-white transition-colors duration-200 cursor-pointer"
            aria-label="Imagen siguiente"
          >
            <span className="material-symbols-outlined text-3xl">chevron_right</span>
          </button>

          {/* Indicadores de puntos */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
            {images.map((_, i) => (
              <button
                key={i}
                id={`gallery-dot-${i + 1}`}
                onClick={(e) => { e.stopPropagation(); setSelectedIndex(i); setSelected(images[i]); }}
                className={`w-2 h-2 rounded-full transition-all duration-200 cursor-pointer ${
                  i === selectedIndex
                    ? 'bg-white scale-125'
                    : 'bg-white/40 hover:bg-white/70'
                }`}
                aria-label={`Ir a imagen ${i + 1}`}
              />
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
