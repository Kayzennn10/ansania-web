import Link from "next/link";

const FEATURED_PRODUCTS = [
  { id: 1, name: "Pashmina Silk Premium", price: "Rp 149.000", tag: "Best Seller", image: "https://images.unsplash.com/photo-1596455607563-ad6193f76b17?q=80&w=700&auto=format&fit=crop" },
  { id: 2, name: "Voal Ultrafine Signature", price: "Rp 129.000", tag: "New", image: "https://images.unsplash.com/photo-1584042898744-84631379dbda?q=80&w=700&auto=format&fit=crop" },
  { id: 3, name: "Khimar Syar&apos;i Linen", price: "Rp 189.000", tag: null, image: "https://images.unsplash.com/photo-1589718471691-1ec8dc524f22?q=80&w=700&auto=format&fit=crop" },
  { id: 4, name: "Square Paris Exclusive", price: "Rp 99.000", tag: "Sale", image: "https://plus.unsplash.com/premium_photo-1675129654153-f7256191b248?q=80&w=700&auto=format&fit=crop" },
];

const CATEGORIES = [
  { name: "Pashmina", href: "/category?type=pashmina", image: "https://images.unsplash.com/photo-1596455607563-ad6193f76b17?q=80&w=600&auto=format&fit=crop" },
  { name: "Voal", href: "/category?type=voal", image: "https://images.unsplash.com/photo-1584042898744-84631379dbda?q=80&w=600&auto=format&fit=crop" },
  { name: "Khimar", href: "/category?type=khimar", image: "https://images.unsplash.com/photo-1589718471691-1ec8dc524f22?q=80&w=600&auto=format&fit=crop" },
  { name: "Square", href: "/category?type=square", image: "https://plus.unsplash.com/premium_photo-1675129654153-f7256191b248?q=80&w=600&auto=format&fit=crop" },
];

export const metadata = {
  title: "Ansania — Koleksi Hijab Premium untuk Wanita Modern",
  description: "Temukan koleksi kerudung dan hijab premium Ansania. Bahan berkualitas tinggi, desain elegan, nyaman dipakai seharian.",
};

export default function Home() {
  return (
    <div className="home-wrapper">

      {/* ─── HERO ─── */}
      <section className="m-hero">
        <div className="m-hero-bg">
          <img src="https://images.unsplash.com/photo-1607527632617-640a2bb1de6b?q=80&w=2000&auto=format&fit=crop" alt="Ansania Hero" />
          <div className="m-hero-overlay" />
        </div>
        <div className="m-hero-content">
          <p className="m-hero-eyebrow">New Arrival — Koleksi 2026</p>
          <h1 className="m-hero-title">Modest.<br />Elegan.<br />Anda.</h1>
          <p className="m-hero-sub">Koleksi hijab premium yang menemani setiap langkah wanita modern Indonesia.</p>
          <div className="m-hero-actions">
            <Link href="/products" className="m-btn m-btn-light">Belanja Sekarang</Link>
            <Link href="/lookbook" className="m-btn m-btn-ghost">Lihat Lookbook</Link>
          </div>
        </div>
        <div className="m-hero-scroll">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="5" x2="12" y2="19"/><polyline points="19 12 12 19 5 12"/></svg>
          <span>Scroll</span>
        </div>
      </section>

      {/* ─── TRUST BAR ─── */}
      <div className="m-trust">
        <div className="container">
          <div className="m-trust-inner">
            <div className="m-trust-item">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="1" y="3" width="15" height="13" rx="1"/><path d="M16 8h4l3 5v3h-7V8z"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>
              <span>Gratis Ongkir &gt; Rp 300rb</span>
            </div>
            <span className="m-trust-sep">·</span>
            <div className="m-trust-item">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              <span>Garansi 3 Hari Retur</span>
            </div>
            <span className="m-trust-sep">·</span>
            <div className="m-trust-item">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              <span>Proses Pesanan 1×24 Jam</span>
            </div>
            <span className="m-trust-sep">·</span>
            <div className="m-trust-item">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
              <span>10.000+ Pelanggan Puas</span>
            </div>
          </div>
        </div>
      </div>

      {/* ─── KATEGORI (EDITORIAL GRID) ─── */}
      <section className="m-section container">
        <div className="m-section-header">
          <h2 className="m-section-title">Koleksi<br /><em>per Kategori</em></h2>
          <Link href="/category" className="m-link-arrow">
            Lihat Semua
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          </Link>
        </div>
        <div className="m-cat-grid">
          {CATEGORIES.map((cat) => (
            <Link href={cat.href} key={cat.name} className="m-cat-card">
              <div className="m-cat-img">
                <img src={cat.image} alt={cat.name} loading="lazy" />
              </div>
              <div className="m-cat-label">
                <span>{cat.name}</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ─── BRAND STATEMENT ─── */}
      <section className="m-brand-stmt">
        <div className="container">
          <div className="m-brand-stmt-inner">
            <div className="m-brand-stmt-text">
              <span className="m-overline">Tentang Ansania</span>
              <h2>Dibuat dengan Cinta,<br />untuk Wanita Indonesia.</h2>
              <p>Setiap helai kain dipilih dengan teliti. Setiap desain diciptakan untuk memancarkan keanggunan yang tulus — karena kami percaya, busana yang baik lahir dari niat yang baik.</p>
              <Link href="/about" className="m-link-arrow" style={{ marginTop: '1.5rem', display: 'inline-flex' }}>
                Cerita Kami
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </Link>
            </div>
            <div className="m-brand-stmt-img">
              <img src="https://images.unsplash.com/photo-1605364850989-10e3001dd3bd?q=80&w=800&auto=format&fit=crop" alt="Tentang Ansania" />
              <div className="m-brand-badge">
                <strong>Est. 2019</strong>
                <span>Jakarta, Indonesia</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── PRODUK UNGGULAN ─── */}
      <section className="m-section container">
        <div className="m-section-header">
          <h2 className="m-section-title">Produk<br /><em>Terlaris</em></h2>
          <Link href="/products" className="m-link-arrow">
            Semua Produk
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          </Link>
        </div>
        <div className="m-product-grid">
          {FEATURED_PRODUCTS.map((p) => (
            <Link href={`/products/${p.id}`} key={p.id} className="m-product-card">
              <div className="m-product-img">
                <img src={p.image} alt={p.name} loading="lazy" />
                {p.tag && <span className={`m-product-tag ${p.tag === 'Sale' ? 'm-product-tag--red' : ''}`}>{p.tag}</span>}
                <div className="m-product-hover">
                  <button type="button">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>
                    Tambah ke Keranjang
                  </button>
                </div>
              </div>
              <div className="m-product-info">
                <p className="m-product-name">{p.name}</p>
                <p className="m-product-price">{p.price}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ─── FULL BLEED LOOKBOOK ─── */}
      <section className="m-lookbook">
        <div className="m-lookbook-left">
          <img src="https://images.unsplash.com/photo-1589718471691-1ec8dc524f22?q=80&w=900&auto=format&fit=crop" alt="Lookbook Ansania" />
        </div>
        <div className="m-lookbook-right">
          <div className="m-lookbook-content">
            <span className="m-overline">Musim Gugur 2026</span>
            <h2>The New<br />Collection</h2>
            <p>Eksplorasi paduan warna earth tone yang hangat dan bahan-bahan premium pilihan untuk musim ini.</p>
            <Link href="/lookbook" className="m-btn m-btn-dark">Jelajahi Lookbook</Link>
          </div>
          <div className="m-lookbook-img2">
            <img src="https://images.unsplash.com/photo-1584042898744-84631379dbda?q=80&w=600&auto=format&fit=crop" alt="Lookbook 2" />
          </div>
        </div>
      </section>

      {/* ─── TESTIMONI ─── */}
      <section className="m-section container">
        <h2 className="m-section-title" style={{ textAlign: 'center', marginBottom: '3rem' }}>Dipercaya <em>10.000+</em> Wanita</h2>
        <div className="m-review-grid">
          <div className="m-review-card">
            <div className="m-review-stars">★★★★★</div>
            <p>&quot;Pashmina silk-nya benar-benar juara! Bahannya jatuh, gampang diatur, dan nggak bikin gerah seharian.&quot;</p>
            <footer>
              <div className="m-review-avatar">A</div>
              <div><strong>Aisyah R.</strong><em>Membeli: Pashmina Silk Premium</em></div>
            </footer>
          </div>
          <div className="m-review-card">
            <div className="m-review-stars">★★★★★</div>
            <p>&quot;Packaging-nya cantik banget, rasanya sayang buat dibuka. Warnanya persis seperti di foto. Highly recommended!&quot;</p>
            <footer>
              <div className="m-review-avatar">N</div>
              <div><strong>Nadia F.</strong><em>Membeli: Voal Ultrafine</em></div>
            </footer>
          </div>
          <div className="m-review-card">
            <div className="m-review-stars">★★★★★</div>
            <p>&quot;Sudah repeat order 5x, kualitasnya selalu konsisten. Ansania memang beda level dibanding brand lain.&quot;</p>
            <footer>
              <div className="m-review-avatar">S</div>
              <div><strong>Siti M.</strong><em>Membeli: Square Paris</em></div>
            </footer>
          </div>
        </div>
      </section>

      {/* ─── NEWSLETTER ─── */}
      <section className="m-newsletter">
        <div className="container">
          <p className="m-overline" style={{ color: 'rgba(255,255,255,0.6)', textAlign: 'center' }}>Newsletter Ansania</p>
          <h2>Jadilah yang Pertama Tahu.</h2>
          <p>Dapatkan info koleksi terbaru, promo eksklusif, dan tips gaya modest fashion langsung di inbox Anda.</p>
          <form className="m-newsletter-form">
            <input type="email" placeholder="Alamat email Anda..." />
            <button type="button">Berlangganan</button>
          </form>
          <p className="m-newsletter-note">Tanpa spam. Bisa berhenti berlangganan kapan saja.</p>
        </div>
      </section>

    </div>
  );
}
