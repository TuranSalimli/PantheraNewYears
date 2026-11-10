import { categories } from '../data/categories.js';

export default function Home() {
  return (
    <div className="cats">
      {categories.map((c) => (
        <a key={c.id} href={`#/${c.id}`} className="cat">
          <div className="cat-img">
            {c.cover ? <img src={c.cover} alt={c.title} /> : <span>{c.title}</span>}
          </div>
          <div className="cat-cap">
            <h2>{c.title}</h2>
            <span>{c.images.length} iş</span>
          </div>
        </a>
      ))}
    </div>
  );
}
