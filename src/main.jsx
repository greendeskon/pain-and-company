import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import CircularGallery from './CircularGallery';

const shardul = new URL('../shardul.jpeg', import.meta.url).href;
const daksh = new URL('../daksh.jpeg', import.meta.url).href;
const neel = new URL('../neel.jpeg', import.meta.url).href;
const samidha = new URL('../samidha.jpeg', import.meta.url).href;
const manan = new URL('../manan.jpeg', import.meta.url).href
const items = [
  { image: shardul, text: 'Shardul Singh' },
  { image: daksh, text: 'Daksh Rampuria' },
  { image: neel, text: 'Neel Rawat' },
  { image: samidha, text: 'Samidha' },
  { image: manan, text: 'Manan Chaddha' }
];

const rootElement = document.getElementById('team-gallery');

if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <CircularGallery
        items={items}
        bend={1}
        textColor="#ffffff"
        borderRadius={0.05}
        scrollSpeed={2}
        scrollEase={0.05}
        font="600 30px 'Inter'"
      />
    </StrictMode>
  );
}
