import React from 'react';


export default function PromosPage() {
  const products = [
    { id: 1, name: 'Hijab Segiempat Paris Premium - Nude', oldPrice: 'Rp 85.000', price: 'Rp 45.000', discount: '47%', img: 'https://images.unsplash.com/photo-1596455607563-ad6193f76b17?q=80&w=600&auto=format&fit=crop' },
    { id: 2, name: 'Pashmina Ceruty Babydoll - Sage', oldPrice: 'Rp 95.000', price: 'Rp 55.000', discount: '42%', img: 'https://images.unsplash.com/photo-1589998059171-989d887dda6e?q=80&w=600&auto=format&fit=crop' },
    { id: 3, name: 'Bergo Maryam Instan - Black', oldPrice: 'Rp 75.000', price: 'Rp 39.000', discount: '48%', img: 'https://images.unsplash.com/photo-1610484749215-680c2f81deeb?q=80&w=600&auto=format&fit=crop' },
    { id: 4, name: 'Hijab Voal Motif Premium - Emerald', oldPrice: 'Rp 120.000', price: 'Rp 79.000', discount: '34%', img: 'https://images.unsplash.com/photo-1580914619441-26cce428a1ce?q=80&w=600&auto=format&fit=crop' },
  ];

  return (
    <div className="promo-page">
      {/* Hero */}
      <section className="promo-hero">
        <div className="container">
          <h1>Flash Sale Berakhir Dalam</h1>
          <div className="promo-timer">
            <div className="promo-time-box">
              23
              <div className="promo-time-label">JAM</div>
            </div>
            <div className="promo-time-box">
              45
              <div className="promo-time-label">MENIT</div>
            </div>
            <div className="promo-time-box">
              59
              <div className="promo-time-label">DETIK</div>
            </div>
          </div>
          <p className="promo-hero-text">Diskon Spesial Hingga 70% + Ekstra Voucher!</p>
        </div>
      </section>

      <section className="container">
        {/* Tabs */}
        <div className="promo-tabs">
          <div className="promo-tab active">Flash Sale</div>
          <div className="promo-tab">Diskon Spesial</div>
          <div className="promo-tab">Bundle</div>
          <div className="promo-tab">Member Price</div>
        </div>

        {/* Grid */}
        <div className="promo-grid">
          {products.map((p) => (
            <div key={p.id} className="promo-card">
              <div className="promo-card-img">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={p.img} alt={p.name} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                <div className="promo-badge">-{p.discount}</div>
              </div>
              <div className="promo-card-body">
                <h3 className="promo-card-title">{p.name}</h3>
                <div>
                  <span className="promo-price-old">{p.oldPrice}</span>
                  <span className="promo-price-new">{p.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Vouchers */}
      <section className="promo-vouchers">
        <div className="container">
          <h2>Voucher Aktif</h2>
          <div className="promo-voucher-grid">
            <div className="promo-voucher-card">
              <div className="promo-voucher-info">
                <h3>Potongan Rp 20.000</h3>
                <p>Min. belanja Rp 150.000</p>
              </div>
              <div className="promo-voucher-code">
                ANSANIA20K
                <button type="button" aria-label="Copy Voucher Code">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                </button>
              </div>
            </div>
            <div className="promo-voucher-card">
              <div className="promo-voucher-info">
                <h3>Gratis Ongkir Sepuasnya</h3>
                <p>Tanpa min. belanja (P. Jawa)</p>
              </div>
              <div className="promo-voucher-code">
                FREESHIP
                <button type="button" aria-label="Copy Voucher Code">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
