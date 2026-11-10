import ImgBox from './ImgBox.jsx';

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container hero-grid">
        <div>
          <span className="tag">✦ Yeni İl Kolleksiyası</span>
          <h1>Yeni ilə <em>çiçəklərlə</em> girin</h1>
          <p>
            Qar, şam ağacı, qızılı detallar və təzə çiçəklər. Panthera Floral Studio
            sevdiklərinizə bayram əhval-ruhiyyəsini ən zərif formada çatdırır.
          </p>
          <div className="hero-actions">
            <a href="#collection" className="btn btn-gold">Kolleksiyaya bax</a>
            <a href="#order" className="btn btn-line">Sifariş ver</a>
          </div>
        </div>
        {/* public/images/hero.jpg */}
        <ImgBox className="hero-img" src="/images/hero.jpg" alt="Yeni İl buketi" />
      </div>
    </section>
  );
}
