import { useEffect, useRef } from 'react';

export default function Snow() {
  const ref = useRef(null);

  useEffect(() => {
    const c = ref.current;
    const x = c.getContext('2d');
    let W, H, raf;
    const resize = () => {
      W = c.width = window.innerWidth;
      H = c.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const flakes = Array.from({ length: 70 }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      r: Math.random() * 2.6 + 0.8,
      s: Math.random() * 0.8 + 0.3,
      d: Math.random() * Math.PI * 2,
    }));

    const draw = () => {
      x.clearRect(0, 0, W, H);
      x.fillStyle = 'rgba(255,255,255,.75)';
      flakes.forEach((f) => {
        f.y += f.s;
        f.d += 0.01;
        f.x += Math.sin(f.d) * 0.4;
        if (f.y > H) {
          f.y = -5;
          f.x = Math.random() * W;
        }
        x.beginPath();
        x.arc(f.x, f.y, f.r, 0, Math.PI * 2);
        x.fill();
      });
      raf = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return <canvas id="snow" ref={ref} />;
}
