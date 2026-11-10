import { useEffect } from 'react';
import { WHATSAPP } from '../config.js';

export default function Lightbox({ images, index, title, onChange, onClose }) {
  const n = images.length;
  const go = (d) => onChange((index + d + n) % n);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') go(1);
      if (e.key === 'ArrowLeft') go(-1);
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  });

  const text = encodeURIComponent(`Salam! "${title}" kateqoriyasından ${index + 1} nömrəli işlə maraqlanıram.`);

  return (
    <div className="lb" onClick={onClose}>
      <button className="lb-btn lb-close" onClick={onClose} aria-label="Bağla">✕</button>
      {n > 1 && (
        <button className="lb-btn lb-prev" onClick={(e) => { e.stopPropagation(); go(-1); }} aria-label="Əvvəlki">‹</button>
      )}
      <figure onClick={(e) => e.stopPropagation()}>
        <img src={images[index]} alt={`${title} ${index + 1}`} />
        <figcaption>
          <span>{index + 1} / {n}</span>
          <a href={`https://wa.me/${WHATSAPP}?text=${text}`} target="_blank" rel="noreferrer">
            WhatsApp ilə soruş
          </a>
        </figcaption>
      </figure>
      {n > 1 && (
        <button className="lb-btn lb-next" onClick={(e) => { e.stopPropagation(); go(1); }} aria-label="Növbəti">›</button>
      )}
    </div>
  );
}
