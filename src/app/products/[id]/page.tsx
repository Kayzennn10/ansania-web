import Link from 'next/link';


export default function ProductDetailPage() {
  return (
    <main className="pd-container">
      <div className="pd-layout">
        <div className="pd-gallery">
          <div className="pd-gallery-main">
            {/* Main Image placeholder */}
          </div>
          <div className="pd-gallery-thumbs">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className={`pd-thumb ${i === 1 ? 'active' : ''}`} />
            ))}
          </div>
        </div>
        
        <div className="pd-info">
          <div className="pd-material">SILK PREMIUM</div>
          <h1 className="pd-title">Ansania Pashmina Silk</h1>
          
          <div className="pd-rating">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" color="var(--color-primary)">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" color="var(--color-primary)">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" color="var(--color-primary)">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" color="var(--color-primary)">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" color="var(--color-primary)">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
            <span>4.8 &middot; 128 ulasan</span>
          </div>

          <div className="pd-price-wrap">
            <span className="pd-price">Rp 129.000</span>
            <span className="pd-price-strike">Rp 199.000</span>
          </div>

          <div className="pd-section-label">Warna</div>
          <div className="pd-colors">
            {['#E6D5C3', '#B8A89A', '#7A6B61', '#4A5D4E', '#1C2B2D', '#D9B4A3'].map((color, i) => (
              <div 
                key={color} 
                className={`pd-color-circle ${i === 0 ? 'active' : ''}`}
                style={{ backgroundColor: color }}
                title={`Warna ${i + 1}`}
              />
            ))}
          </div>

          <div className="pd-section-label">Ukuran</div>
          <div className="pd-sizes">
            <button className="pd-size-chip active">Standar (175x75)</button>
            <button className="pd-size-chip">Syar&apos;i (200x75)</button>
          </div>

          <div className="pd-section-label">Kuantitas</div>
          <div className="pd-qty">
            <button className="pd-qty-btn">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="5" y1="12" x2="19" y2="12"></line>
              </svg>
            </button>
            <span>1</span>
            <button className="pd-qty-btn">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <line x1="5" y1="12" x2="19" y2="12"></line>
              </svg>
            </button>
          </div>

          <div className="pd-actions">
            <button className="pd-btn-primary">Tambah ke Keranjang</button>
            <button className="pd-btn-outline" title="Wishlist">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
              </svg>
            </button>
          </div>

          <div className="pd-trust">
            <div className="pd-trust-item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="1" y="3" width="15" height="13"></rect>
                <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
                <circle cx="5.5" cy="18.5" r="2.5"></circle>
                <circle cx="18.5" cy="18.5" r="2.5"></circle>
              </svg>
              Pengiriman Cepat
            </div>
            <div className="pd-trust-item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
              Bahan Premium
            </div>
            <div className="pd-trust-item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              </svg>
              Garansi 3 Hari
            </div>
          </div>

          <div className="pd-tabs">
            <button className="pd-tab active">Deskripsi</button>
            <button className="pd-tab">Ulasan (128)</button>
            <button className="pd-tab">Panduan Ukuran</button>
          </div>

          <div className="pd-tab-content">
            <p>Pashmina berbahan silk premium dengan karakteristik lembut, jatuh, dan memiliki kilau mewah yang pas (tidak berlebihan). Cocok digunakan untuk acara formal maupun daily wear. Mudah dibentuk dan tegak di dahi.</p>
          </div>
        </div>
      </div>

      <div className="pd-similar">
        <h2 className="pd-similar-title">Produk Serupa</h2>
        <div className="pd-similar-grid">
          {[1, 2, 3, 4].map((i) => (
            <Link href="/products/1" key={i} className="pd-card">
              <div className="pd-card-img" />
              <div className="pd-card-title">Ansania Voal Premium</div>
              <div className="pd-card-price">Rp 89.000</div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
