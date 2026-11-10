import { useState } from 'react';
import { categories } from '../data/categories.js';
import ImgBox from './ImgBox.jsx';

// Öz WhatsApp nömrənizi yazın (ölkə kodu ilə, + olmadan)
const WHATSAPP = '994XXXXXXXXX';

export default function Order() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    item: categories[0].title,
    date: '',
    note: '',
  });

  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    const msg =
      `Salam! Yeni il sifarişi:\n` +
      `Ad: ${form.name}\nTelefon: ${form.phone}\nKateqoriya: ${form.item}\n` +
      `Tarix: ${form.date || '-'}\nQeyd: ${form.note || '-'}`;
    window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <section id="order" className="order">
      <div className="container">
        <div className="sec-head">
          <h2>Bayram Sifarişi</h2>
          <p>Yeni il ərəfəsində sifarişlər çoxalır. Tarixi öncədən bildirin ki, vaxtında hazır olsun.</p>
        </div>
        <div className="order-grid">
          {/* public/images/order.jpg */}
          <ImgBox className="order-img" src="/images/order.jpg" alt="Sifariş">
            <div className="order-overlay">
              <h3>Xoşbəxt Yeni İl!</h3>
              <p>Sevdiklərinizi çiçəklə sevindirin.</p>
            </div>
          </ImgBox>

          <div>
            <form onSubmit={submit}>
              <div className="row">
                <div>
                  <label>Adınız</label>
                  <input required placeholder="Ad Soyad" value={form.name} onChange={set('name')} />
                </div>
                <div>
                  <label>Telefon</label>
                  <input required placeholder="+994 XX XXX XX XX" value={form.phone} onChange={set('phone')} />
                </div>
              </div>
              <div className="row">
                <div>
                  <label>Kateqoriya</label>
                  <select value={form.item} onChange={set('item')}>
                    {categories.map((c) => (
                      <option key={c.id}>{c.title}</option>
                    ))}
                    <option>Fərdi sifariş</option>
                  </select>
                </div>
                <div>
                  <label>Çatdırılma tarixi</label>
                  <input type="date" value={form.date} onChange={set('date')} />
                </div>
              </div>
              <div>
                <label>Qeyd</label>
                <textarea placeholder="Ünvan, rəng istəkləri, kart mətni..." value={form.note} onChange={set('note')} />
              </div>
              <button className="btn btn-gold" type="submit">WhatsApp ilə göndər</button>
            </form>

            <div className="contacts">
              <div><b>Telefon:</b> +994 XX XXX XX XX</div>
              <div><b>Instagram:</b> @pantherafloralstudio</div>
              <div><b>Ünvan:</b> Bakı, Azərbaycan</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
