export default function Header() {
  return (
    <header className="header">
      <div className="container nav">
        <a href="#home" className="logo">
          Panthera<span>Floral Studio</span>
        </a>
        <nav>
          <ul>
            <li><a href="#home">Əsas</a></li>
            <li><a href="#collection">Kolleksiya</a></li>
            <li><a href="#about">Biz kimik</a></li>
            <li><a href="#order">Sifariş</a></li>
          </ul>
        </nav>
        <a href="#order" className="btn btn-gold">Sifariş et</a>
      </div>
    </header>
  );
}
