'use client';

import { useEffect } from 'react';

/**
 * Loads only the specific Material Symbols icons used across the site.
 * Using `icon_names` reduces the download from ~500KB to ~30KB.
 * Loaded asynchronously after initial render to avoid blocking FCP.
 */
export default function FontLoader() {
  useEffect(() => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    // Only load the icons actually used: arrow_forward, close, chevron_left,
    // chevron_right, zoom_in, menu, phone, check, star
    link.href =
      'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&icon_names=arrow_forward,chevron_left,chevron_right,close,menu,phone,star,zoom_in&display=swap';
    document.head.appendChild(link);
  }, []);

  return null;
}
