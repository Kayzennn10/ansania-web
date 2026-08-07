import React from 'react';
import Image from 'next/image';

export default function ReviewsPage() {
  const reviews = [
    { id: 1, name: 'Siti A.', initial: 'S', text: 'Bahannya super lembut dan gampang banget diatur. Warnanya juga pas banget sama ekspektasi, cocok buat daily wear.', product: 'Hijab Paris Premium - Nude', date: '2 hari lalu', stars: 5, img: 'https://images.unsplash.com/photo-1596455607563-ad6193f76b17?q=80&w=400&auto=format&fit=crop' },
    { id: 2, name: 'Rina M.', initial: 'R', text: 'Jahitannya rapi banget! Ini pembelian ke-3 aku di Ansania dan selalu puas sama kualitasnya. Top deh!', product: 'Pashmina Ceruty - Sage', date: '5 hari lalu', stars: 5 },
    { id: 3, name: 'Dewi K.', initial: 'D', text: 'Bagus, lumayan tebal jadi nggak nerawang. Tapi pengirimannya agak lama kali ini, biasanya cepat.', product: 'Bergo Maryam - Black', date: '1 minggu lalu', stars: 4 },
    { id: 4, name: 'Annisa F.', initial: 'A', text: 'Motifnya elegan banget, nggak pasaran. Bikin look kelihatan mewah pas dipakai ke kondangan.', product: 'Voal Motif Premium - Emerald', date: '2 minggu lalu', stars: 5, img: 'https://images.unsplash.com/photo-1589998059171-989d887dda6e?q=80&w=400&auto=format&fit=crop' },
    { id: 5, name: 'Lia R.', initial: 'L', text: 'Warnanya sedikit lebih gelap dari foto, tapi bahannya tetep juara. Dingin dan nyaman dipakai seharian.', product: 'Hijab Paris Premium - Khaki', date: '3 minggu lalu', stars: 4 },
    { id: 6, name: 'Putri S.', initial: 'P', text: 'Super luvvv! Gampang dibentuk dan tegak paripurna di dahi. Bakal repeat order warna lain.', product: 'Pashmina Ceruty - Mocca', date: '1 bulan lalu', stars: 5 },
  ];

  return (
    <div className="rev-page">
      {/* Header */}
      <section className="rev-header">
        <div className="container rev-header-inner">
          <div className="rev-summary">
            <div className="rev-summary-score">4.9</div>
            <div className="rev-summary-stars">★★★★★</div>
            <div className="rev-summary-count">Berdasarkan 1.245 ulasan</div>
          </div>
          <div className="rev-bars">
            <div className="rev-bar-row">
              <span>5 Bintang</span>
              <div className="rev-bar-bg"><div className="rev-bar-fill" style={{ width: '89%' }}></div></div>
              <span>89%</span>
            </div>
            <div className="rev-bar-row">
              <span>4 Bintang</span>
              <div className="rev-bar-bg"><div className="rev-bar-fill" style={{ width: '8%' }}></div></div>
              <span>8%</span>
            </div>
            <div className="rev-bar-row">
              <span>3 Bintang</span>
              <div className="rev-bar-bg"><div className="rev-bar-fill" style={{ width: '2%' }}></div></div>
              <span>2%</span>
            </div>
            <div className="rev-bar-row">
              <span>2 Bintang</span>
              <div className="rev-bar-bg"><div className="rev-bar-fill" style={{ width: '0.5%' }}></div></div>
              <span>0.5%</span>
            </div>
            <div className="rev-bar-row">
              <span>1 Bintang</span>
              <div className="rev-bar-bg"><div className="rev-bar-fill" style={{ width: '0.5%' }}></div></div>
              <span>0.5%</span>
            </div>
          </div>
        </div>
      </section>

      {/* Filters & Grid */}
      <section className="container">
        <div className="rev-filters">
          <button className="rev-chip active">Semua Ulasan</button>
          <button className="rev-chip">Bintang 5</button>
          <button className="rev-chip">Dengan Foto</button>
          <button className="rev-chip">Pembeli Terverifikasi</button>
        </div>

        <div className="rev-grid">
          {reviews.map((r) => (
            <div key={r.id} className="rev-card">
              <div className="rev-card-header">
                <div className="rev-card-stars">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i} style={{ color: i < r.stars ? '#c9a94a' : '#e8e4de' }}>★</span>
                  ))}
                </div>
                <div className="rev-card-date">{r.date}</div>
              </div>
              <p className="rev-card-text">&quot;{r.text}&quot;</p>
              {r.img && (
                <div className="rev-card-photo">
                  <Image src={r.img} alt="Ulasan Foto" width={300} height={200} />
                </div>
              )}
              <div className="rev-card-user">
                <div className="rev-avatar">{r.initial}</div>
                <div className="rev-user-info">
                  <h4>{r.name}</h4>
                  <p>{r.product}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="rev-cta">
        <div className="container">
          <h2>Pernah Berbelanja di Ansania?</h2>
          <p style={{ marginBottom: '2rem', color: 'var(--color-text-light)' }}>Bagikan pengalaman Anda dan dapatkan 50 Poin Loyalty!</p>
          <button className="btn-primary" style={{ background: 'var(--color-primary)', color: '#fff', padding: '1rem 2rem', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 600 }}>Tulis Ulasan Anda</button>
        </div>
      </section>
    </div>
  );
}
