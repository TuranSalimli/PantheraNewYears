import ImgBox from './ImgBox.jsx';

const features = [
  { icon: '❀', title: 'Təzə çiçəklər', text: 'Hər səhər seçilən, təzə çiçəklərdən hazırlanır.' },
  { icon: '✦', title: 'Fərdi dizayn', text: 'Rəng və üslubu siz seçirsiniz, biz onu həyata keçiririk.' },
  { icon: '➤', title: 'Çatdırılma', text: 'Bayram günlərində vaxtında və ehtiyatla çatdırılır.' },
];

export default function About() {
  return (
    <section id="about" className="about">
      <div className="container about-grid">
        {/* public/images/about.jpg */}
        <ImgBox className="about-img" src="/images/about.jpg" alt="Panthera Floral Studio" />
        <div>
          <span className="tag">✦ Panthera Floral Studio</span>
          <h2>Hər buket bir hekayədir</h2>
          <p className="lead">
            Biz çiçəyi sadəcə bəzək kimi yox, hiss çatdırmaq vasitəsi kimi görürük.
            Yeni il isə bunun üçün ən gözəl bəhanədir.
          </p>
          <div className="feat">
            {features.map((f) => (
              <div key={f.title}>
                <i>{f.icon}</i>
                <div>
                  <h4>{f.title}</h4>
                  <span>{f.text}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
