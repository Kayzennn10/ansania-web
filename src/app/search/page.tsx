import Link from 'next/link';

export default function SearchPage() {
  const chips = ['Pashmina', 'Voal', 'Terbaru', 'Syar\'i', 'Earth Tones', 'Silk'];
  const products = [
    { id: 1, name: 'Premium Voal Sahara', price: 'Rp 149.000', img: 'https://images.unsplash.com/photo-1589994161775-69bc749d21e0?auto=format&fit=crop&q=80&w=600' },
    { id: 2, name: 'Voal Signature Olive', price: 'Rp 169.000', img: 'https://images.unsplash.com/photo-1596455607563-ad6193f76b17?auto=format&fit=crop&q=80&w=600' },
    { id: 3, name: 'Classic Voal Nude', price: 'Rp 129.000', img: 'https://images.unsplash.com/photo-1623081014197-0dc2212903e1?auto=format&fit=crop&q=80&w=600' },
    { id: 4, name: 'Voal Motif Bloom', price: 'Rp 199.000', img: 'https://images.unsplash.com/photo-1626245084930-b384ff8b261b?auto=format&fit=crop&q=80&w=600' }
  ];

  return (
    <main className="container">
      <div className="srch-header">
        <div className="srch-bar">
          <input type="text" className="srch-input" defaultValue="Voal" placeholder="Cari koleksi..." />
          <button className="srch-btn">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
          </button>
        </div>
        <p className="srch-subtitle">Menampilkan hasil untuk &quot;Voal&quot;</p>
      </div>

      <div className="srch-filters">
        {chips.map((chip, i) => (
          <button key={i} className={`srch-chip ${i === 1 ? 'active' : ''}`}>{chip}</button>
        ))}
      </div>

      <div className="srch-grid">
        {products.map((p) => (
          <Link href={`/product/${p.id}`} key={p.id} className="m-product-card">
            <div className="m-product-img">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={p.img} alt={p.name} />
              <div className="m-product-hover">
                <button>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
                  Tambah
                </button>
              </div>
            </div>
            <h3 className="m-product-name">{p.name}</h3>
            <span className="m-product-price">{p.price}</span>
          </Link>
        ))}
      </div>

      <div className="srch-pagination">
        <button className="srch-page-btn active">1</button>
        <button className="srch-page-btn">2</button>
        <button className="srch-page-btn">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m9 18 6-6-6-6"/></svg>
        </button>
      </div>
    </main>
  );
}
