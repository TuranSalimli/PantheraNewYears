import { useEffect, useRef } from 'react';
import { WHATSAPP, INSTAGRAM } from '../config.js';

// Yuxarıdakı nazik zolaqda yavaş yağan qar: yeganə bayram detalı.
function SnowBand() {
  const ref = useRef(null);

  useEffect(() => {
    const c = ref.current;
    const ctx = c.getContext('2d');
    let W, H, raf;
    const resize = () => {
      W = c.width = c.parentElement.clientWidth;
      H = c.height = c.parentElement.clientHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const flakes = Array.from({ length: 34 }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      r: Math.random() * 1.4 + 0.6,
      s: Math.random() * 0.35 + 0.15,
      d: Math.random() * Math.PI * 2,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      ctx.fillStyle = 'rgba(255,255,255,.8)';
      flakes.forEach((f) => {
        f.y += f.s;
        f.d += 0.012;
        f.x += Math.sin(f.d) * 0.25;
        if (f.y > H + 3) {
          f.y = -3;
          f.x = Math.random() * W;
        }
        ctx.beginPath();
        ctx.arc(f.x, f.y, f.r, 0, Math.PI * 2);
        ctx.fill();
      });
      raf = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return <canvas ref={ref} className="snow" />;
}

export default function Topbar() {
  return (
    <header>
      <div className="band">
        <SnowBand />
        <span>Yeni il kolleksiyası</span>
      </div>
      <div className="container bar">
        <a href="#/" className="logo">
          Panthera<small>Floral Studio</small>
        </a>
        <nav className="links">
          <a href={`https://instagram.com/${INSTAGRAM}`} target="_blank" rel="noreferrer">Instagram</a>
          <a href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noreferrer">WhatsApp</a>
        </nav>
      </div>
    </header>
  );
}
