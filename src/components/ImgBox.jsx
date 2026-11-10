import { useState } from 'react';

// Şəkil yoxdursa və ya yüklənmirsə, gradient fon qalır.
export default function ImgBox({ src, alt = '', className = '', children, onClick }) {
  const [failed, setFailed] = useState(false);
  return (
    <div className={`img-box ${className}`} onClick={onClick}>
      {src && !failed && <img src={src} alt={alt} loading="lazy" onError={() => setFailed(true)} />}
      {children}
    </div>
  );
}
