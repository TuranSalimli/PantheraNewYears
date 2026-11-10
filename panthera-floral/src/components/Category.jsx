import { useState } from 'react';
import Lightbox from './Lightbox.jsx';

export default function Category({ category }) {
  const [open, setOpen] = useState(null);
  const { images, title, folder } = category;

  return (
    <section>
      <a href="#/" className="back">← Kataloq</a>
      <div className="cat-head">
        <h1>{title}</h1>
        <span>{images.length} iş</span>
      </div>

      {images.length > 0 ? (
        <div className="grid">
          {images.map((src, i) => (
            <button key={src} className="tile" onClick={() => setOpen(i)} aria-label={`${title} ${i + 1}`}>
              <img src={src} alt={`${title} ${i + 1}`} loading="lazy" />
            </button>
          ))}
        </div>
      ) : (
        <p className="empty">
          Şəkillər <code>src/assets/categories/{folder}/</code> qovluğuna əlavə olunacaq.
        </p>
      )}

      {open !== null && (
        <Lightbox
          images={images}
          index={open}
          title={title}
          onChange={setOpen}
          onClose={() => setOpen(null)}
        />
      )}
    </section>
  );
}
