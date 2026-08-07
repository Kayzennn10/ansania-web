import React from 'react';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="abt-page">
      {/* Hero */}
      <section className="abt-hero">
        <div className="abt-hero-bg">
          <Image src="https://images.unsplash.com/photo-1596455607563-ad6193f76b17?q=80&w=2000&auto=format&fit=crop" alt="Ansania Hero" fill className="object-cover" />
        </div>
        <div className="abt-hero-overlay"></div>
        <h1>Tentang Ansania</h1>
      </section>

      {/* Brand Story */}
      <section className="container abt-story">
        <div className="abt-story-inner">
          <div className="abt-story-text">
            <h2>Kisah Kami</h2>
            <p>Berawal dari sebuah mimpi kecil untuk menghadirkan hijab berkualitas premium dengan harga yang bersahabat, Ansania lahir untuk menemani setiap langkah wanita Indonesia. Kami percaya bahwa keindahan sejati terpancar dari kenyamanan dan kepercayaan diri.</p>
            <p>Setiap helai kain yang kami pilih, setiap jahitan yang kami torehkan, adalah bentuk dedikasi kami untuk memberikan yang terbaik. Ansania bukan sekadar brand, melainkan teman setia dalam perjalanan hijrah dan ekspresi gaya Anda.</p>
          </div>
          <div className="abt-story-img">
            <Image src="https://images.unsplash.com/photo-1589998059171-989d887dda6e?q=80&w=1000&auto=format&fit=crop" alt="Brand Story" width={600} height={750} />
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="abt-stats">
        <div className="container abt-stats-inner">
          <div>
            <div className="abt-stat-num">5+</div>
            <div className="abt-stat-label">Tahun Berdiri</div>
          </div>
          <div>
            <div className="abt-stat-num">10.000+</div>
            <div className="abt-stat-label">Pelanggan</div>
          </div>
          <div>
            <div className="abt-stat-num">145+</div>
            <div className="abt-stat-label">Produk</div>
          </div>
          <div>
            <div className="abt-stat-num">4.9/5</div>
            <div className="abt-stat-label">Rating</div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="abt-values">
        <div className="container">
          <h2 className="m-section-title">Nilai-Nilai <em>Kami</em></h2>
          <div className="abt-values-grid">
            <div className="abt-value-card">
              <div className="abt-value-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
              </div>
              <h3>Kualitas</h3>
              <p>Kami hanya menggunakan material terbaik untuk memastikan setiap produk nyaman dipakai dan tahan lama.</p>
            </div>
            <div className="abt-value-card">
              <div className="abt-value-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
              </div>
              <h3>Kepercayaan</h3>
              <p>Kejujuran dalam berbisnis dan transparansi adalah fondasi utama hubungan kami dengan setiap pelanggan.</p>
            </div>
            <div className="abt-value-card">
              <div className="abt-value-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line></svg>
              </div>
              <h3>Keindahan</h3>
              <p>Desain yang elegan dan timeless, menonjolkan kecantikan alami tanpa mengorbankan nilai kesopanan.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="abt-cta">
        <div className="container">
          <h2>Bergabung dengan Keluarga Ansania</h2>
          <p>Dapatkan update terbaru, promo eksklusif, dan inspirasi gaya hijab terkini.</p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '0', maxWidth: '480px', margin: '0 auto' }}>
            <input type="email" placeholder="Alamat email Anda..." style={{ flex: 1, padding: '1rem', border: '1px solid #ccc', outline: 'none' }} />
            <button type="button" style={{ background: '#1a1a1a', color: '#fff', padding: '0 2rem', fontWeight: 600 }}>DAFTAR</button>
          </div>
        </div>
      </section>
    </div>
  );
}
