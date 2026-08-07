import Link from 'next/link';

export default function LookbookPage() {
  const images = [
    { img: 'https://images.unsplash.com/photo-1589994161775-69bc749d21e0?auto=format&fit=crop&q=80&w=800', title: 'Serene Beige' },
    { img: 'https://images.unsplash.com/photo-1623081014197-0dc2212903e1?auto=format&fit=crop&q=80&w=800', title: 'Desert Rose' },
    { img: 'https://images.unsplash.com/photo-1596455607563-ad6193f76b17?auto=format&fit=crop&q=80&w=800', title: 'Olive Dream' },
    { img: 'https://images.unsplash.com/photo-1610427351660-fae9b387ba94?auto=format&fit=crop&q=80&w=800', title: 'Sage Minimal' },
    { img: 'https://images.unsplash.com/photo-1589994160783-daeb5b1db320?auto=format&fit=crop&q=80&w=800', title: 'Terracotta' },
  ];

  return (
    <main>
      <div className="container">
        <div className="lkbk-hero">
          <h1 className="lkbk-hero-title">Lookbook.</h1>
          <div className="lkbk-tabs">
            <span className="lkbk-tab active">MUSIM SEMI</span>
            <span className="lkbk-tab">MUSIM PANAS</span>
            <span className="lkbk-tab">MUSIM GUGUR</span>
            <span className="lkbk-tab">MUSIM DINGIN</span>
          </div>
        </div>

        <div className="lkbk-feature">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="https://images.unsplash.com/photo-1542031751-24ff0e2776c5?auto=format&fit=crop&q=80&w=1200" alt="Featured Look" className="lkbk-feature-img" />
          <div className="lkbk-feature-content">
            <p className="lkbk-feature-overline">KOLEKSI EKSKLUSIF</p>
            <h3>Napas Musim Semi</h3>
            <p>Eksplorasi warna-warna bumi yang hangat, menghadirkan kenyamanan dan keanggunan dalam setiap helai benang. Koleksi musim ini merayakan kecantikan natural dan siluet modern yang timeless.</p>
            <Link href="/catalog" className="lkbk-feature-link">
              EKSPLORASI KOLEKSI
            </Link>
          </div>
        </div>

        <div className="lkbk-masonry">
          {images.map((item, i) => (
            <div key={i} className="lkbk-item">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={item.img} alt={item.title} className="lkbk-item-img" />
              <div className="lkbk-item-overlay">
                <h3 className="lkbk-item-name">{item.title}</h3>
                <Link href="/catalog" className="lkbk-item-link">Lihat Produk</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
