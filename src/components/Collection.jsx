import { useEffect, useState, useCallback } from 'react';
import { categories } from '../data/categories.js';
import ImgBox from './ImgBox.jsx';

export default function Collection() {
  const [activeId, setActiveId] = useState(categories[0].id);
  const [lightbox, setLightbox] = useState(null); // şəklin indeksi
  const active = categories.find((c) => c.id === activeId);
  const imgs = active.images;

  const close = () => setLightbox(null);
  const step = useCallback(
    (d) => setLightbox((i) => (i === null ? i : (i + d + imgs.length) % imgs.length)),
    [imgs.length]
  );

  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowRight') step(1);
      if (e.key === 'ArrowLeft') step(-1);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [lightbox, step]);

  const choose = (id) => {
    setActiveId(id);
    setLightbox(null);
  };

  return (
    <section id="collection" className="collection">
      <div className="container">
        <div className="sec-head">
          <h2>Bayram Kolleksiyası</h2>
          <p>Yeni il üçün xüsusi hazırlanmış işlər. Kateqoriyanı seçin və bütün nümunələrə baxın.</p>
        </div>

        <div className="tabs" role="tablist">
          {categories.map((c) => (
            <button
              key={c.id}
              role="tab"
              aria-selected={c.id === activeId}
              className={`tab ${c.id === activeId ? 'on' : ''}`}
              onClick={() => choose(c.id)}
            >
              {c.title}
              <small>{c.images.length}</small>
            </button>
          ))}
        </div>

        <div className="cat-info">
          <div>
            <h3>{active.name}</h3>
            <p>{active.text}</p>
          </div>
          <div className="cat-actions">
            <span className="price-tag">{active.price}</span>
            <a href="#order" className="btn btn-gold">Sifariş et</a>
          </div>
        </div>

        {imgs.length > 0 ? (
          <div className="gallery">
            {imgs.map((src, i) => (
              <ImgBox
                key={src}
                src={src}
                alt={`${active.title} ${i + 1}`}
                className="g-item"
                onClick={() => setLightbox(i)}
              />
            ))}
          </div>
        ) : (
          <div className="empty">
            Bu kateqoriya üçün şəkillər hələ əlavə olunmayıb.
            <br />
            <code>src/assets/categories/{active.folder}/</code> qovluğuna şəkil atın.
          </div>
        )}
      </div>

      {lightbox !== null && (
        <div className="lightbox" onClick={close}>
          <button className="lb-close" onClick={close} aria-label="Bağla">✕</button>
          <button className="lb-nav prev" onClick={(e) => { e.stopPropagation(); step(-1); }} aria-label="Əvvəlki">‹</button>
          <img src={imgs[lightbox]} alt="" onClick={(e) => e.stopPropagation()} />
          <button className="lb-nav next" onClick={(e) => { e.stopPropagation(); step(1); }} aria-label="Növbəti">›</button>
          <span className="lb-count">{lightbox + 1} / {imgs.length}</span>
        </div>
      )}
    </section>
  );
}
