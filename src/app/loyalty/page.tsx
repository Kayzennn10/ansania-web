import React from 'react';

export default function LoyaltyPage() {
  return (
    <div className="loy-page">
      {/* Hero */}
      <section className="loy-hero">
        <div className="container">
          <h1>Ansania Loyalty Program</h1>
          <p>Kumpulkan poin di setiap pembelanjaan dan nikmati berbagai keuntungan eksklusif khusus untuk Anda.</p>
        </div>
      </section>

      {/* Tiers */}
      <section className="container loy-tiers">
        <div className="loy-tier-card">
          <div className="loy-tier-icon">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg>
          </div>
          <h3 className="loy-tier-name">SILVER</h3>
          <p className="loy-tier-pts">0 - 999 Poin</p>
          <div className="loy-tier-list">
            <div className="loy-tier-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
              <span>Dapat mengumpulkan poin</span>
            </div>
            <div className="loy-tier-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
              <span>Voucher ulang tahun Rp 20.000</span>
            </div>
          </div>
          <button className="btn-outline" style={{ width: '100%', padding: '0.8rem', border: '1px solid var(--color-primary)', background: 'transparent', color: 'var(--color-primary)', fontWeight: 600, cursor: 'pointer' }}>GABUNG SEKARANG</button>
        </div>

        <div className="loy-tier-card loy-gold">
          <div className="loy-tier-badge">PALING POPULER</div>
          <div className="loy-tier-icon">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
          </div>
          <h3 className="loy-tier-name">GOLD</h3>
          <p className="loy-tier-pts">1.000 - 4.999 Poin</p>
          <div className="loy-tier-list">
            <div className="loy-tier-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
              <span>Diskon 5% setiap pembelanjaan</span>
            </div>
            <div className="loy-tier-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
              <span>Gratis ongkir (Maks Rp 20.000)</span>
            </div>
            <div className="loy-tier-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
              <span>Akses awal promo flash sale</span>
            </div>
            <div className="loy-tier-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
              <span>Voucher ulang tahun Rp 50.000</span>
            </div>
          </div>
          <button className="btn-primary" style={{ width: '100%', padding: '0.8rem', background: '#c9a94a', color: '#fff', border: 'none', fontWeight: 600, cursor: 'pointer' }}>TINGKATKAN TIER</button>
        </div>

        <div className="loy-tier-card">
          <div className="loy-tier-icon">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>
          </div>
          <h3 className="loy-tier-name">VIP PLATINUM</h3>
          <p className="loy-tier-pts">5.000+ Poin</p>
          <div className="loy-tier-list">
            <div className="loy-tier-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
              <span>Diskon 10% setiap pembelanjaan</span>
            </div>
            <div className="loy-tier-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
              <span>Gratis ongkir tanpa batas</span>
            </div>
            <div className="loy-tier-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
              <span>Prioritas layanan pelanggan</span>
            </div>
            <div className="loy-tier-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
              <span>Hadiah ulang tahun eksklusif</span>
            </div>
          </div>
          <button className="btn-outline" style={{ width: '100%', padding: '0.8rem', border: '1px solid var(--color-primary)', background: 'transparent', color: 'var(--color-primary)', fontWeight: 600, cursor: 'pointer' }}>TINGKATKAN TIER</button>
        </div>
      </section>

      {/* How it works */}
      <section className="loy-how">
        <div className="container">
          <h2>Cara Kerja Ansania Loyalty</h2>
          <div className="loy-steps">
            <div className="loy-step">
              <div className="loy-step-num">1</div>
              <h3>Belanja</h3>
              <p>Lakukan pembelian produk Ansania melalui website resmi kami.</p>
            </div>
            <div className="loy-step">
              <div className="loy-step-num">2</div>
              <h3>Kumpulkan Poin</h3>
              <p>Dapatkan 1 Poin untuk setiap pembelanjaan Rp 1.000.</p>
            </div>
            <div className="loy-step">
              <div className="loy-step-num">3</div>
              <h3>Nikmati Keuntungan</h3>
              <p>Tukar poin Anda atau capai tier lebih tinggi untuk keuntungan maksimal.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Calculator */}
      <section className="loy-calc">
        <div className="container">
          <div className="loy-calc-inner">
            <h2>Kalkulator Poin</h2>
            <p>Masukkan estimasi belanja Anda untuk melihat poin yang akan didapat.</p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
              <input type="number" placeholder="Rp 500.000" style={{ padding: '1rem', borderRadius: '4px', border: '1px solid var(--color-border)', flex: 1, maxWidth: '250px', outline: 'none' }} />
              <button style={{ padding: '0 2rem', background: 'var(--color-text)', color: '#fff', border: 'none', borderRadius: '4px', fontWeight: 600, cursor: 'pointer' }}>HITUNG</button>
            </div>
            <div style={{ marginTop: '2rem', fontSize: '1.2rem', fontWeight: 600 }}>
              Estimasi Poin: <span style={{ color: 'var(--color-primary)', fontSize: '1.5rem' }}>500 Poin</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
