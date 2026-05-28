import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import CircularGallery from './CircularGallery';

const shardul = new URL('../shardul.jpeg', import.meta.url).href;
const samar = new URL('../samar.jpeg', import.meta.url).href;
const ojas = new URL('../ojas.jpeg', import.meta.url).href;
const ajeet = new URL('../ajeet.jpeg', import.meta.url).href;
const none = new URL('../none.webp', import.meta.url).href;

const items = [
  { image: shardul, text: 'Shardul Singh' },
  { image: none, text: 'Zaara Zaidi' },
  { image: samar, text: 'Samar Nasir' },
  { image: ojas, text: 'Ojas Srivastava' },
  { image: none, text: 'Tirth Virkar' },
  { image: ajeet, text: 'Ajeet Verma' },
  { image: none, text: 'Gaurav Kalal' }
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
