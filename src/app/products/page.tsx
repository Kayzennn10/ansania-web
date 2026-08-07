import Link from "next/link";

const ALL_PRODUCTS = [
  { id: 1, name: "Pashmina Silk Premium", price: "Rp 149.000", originalPrice: null, tag: "Best Seller", color: "Dusty Rose", material: "Silk", image: "https://images.unsplash.com/photo-1596455607563-ad6193f76b17?q=80&w=700&auto=format&fit=crop" },
  { id: 2, name: "Voal Ultrafine Signature", price: "Rp 129.000", originalPrice: null, tag: "New", color: "Sage Green", material: "Voal", image: "https://images.unsplash.com/photo-1584042898744-84631379dbda?q=80&w=700&auto=format&fit=crop" },
  { id: 3, name: "Khimar Linen Syar&apos;i", price: "Rp 169.000", originalPrice: null, tag: null, color: "Ivory", material: "Linen", image: "https://images.unsplash.com/photo-1589718471691-1ec8dc524f22?q=80&w=700&auto=format&fit=crop" },
  { id: 4, name: "Square Paris Exclusive", price: "Rp 75.000", originalPrice: "Rp 99.000", tag: "Sale", color: "Caramel", material: "Paris", image: "https://plus.unsplash.com/premium_photo-1675129654153-f7256191b248?q=80&w=700&auto=format&fit=crop" },
  { id: 5, name: "Bergo Maryam Daily", price: "Rp 89.000", originalPrice: null, tag: null, color: "Stone", material: "Jersey", image: "https://images.unsplash.com/photo-1607527632617-640a2bb1de6b?q=80&w=700&auto=format&fit=crop" },
  { id: 6, name: "Pashmina Ceruty Babydoll", price: "Rp 75.000", originalPrice: null, tag: null, color: "Mocha", material: "Ceruty", image: "https://images.unsplash.com/photo-1605364850989-10e3001dd3bd?q=80&w=700&auto=format&fit=crop" },
  { id: 1, name: "Pashmina Wool Cashmere", price: "Rp 249.000", originalPrice: null, tag: "Premium", color: "Charcoal", material: "Wool", image: "https://images.unsplash.com/photo-1596455607563-ad6193f76b17?q=80&w=700&auto=format&fit=crop" },
  { id: 2, name: "Instant Khimar Jersey", price: "Rp 115.000", originalPrice: null, tag: null, color: "Navy", material: "Jersey", image: "https://images.unsplash.com/photo-1584042898744-84631379dbda?q=80&w=700&auto=format&fit=crop" },
];

const FILTERS = {
  material: ["Semua", "Silk", "Voal", "Linen", "Jersey", "Paris", "Ceruty", "Wool"],
  sort: ["Terbaru", "Harga: Rendah ke Tinggi", "Harga: Tinggi ke Rendah", "Best Seller"],
};

export const metadata = {
  title: "Koleksi | Ansania — Premium Hijab",
  description: "Eksplorasi seluruh koleksi hijab dan kerudung premium Ansania. Filter berdasarkan bahan, warna, dan harga.",
};

export default function ProductsPage() {
  return (
    <div className="catalog-wrapper">
      {/* ─── COLLECTION HEADER ─── */}
      <div className="catalog-header">
        <div className="container">
          <p className="catalog-overline">ANSANIA COLLECTION</p>
          <h1>Koleksi.</h1>
          <p className="catalog-header-sub">Menampilkan 145 produk premium untuk Anda</p>
        </div>
      </div>

      {/* ─── FILTER BAR ─── */}
      <div className="catalog-filter-bar">
        <div className="container">
          <div className="filter-bar-inner">
            <div className="filter-chips-scroll">
              <button className="filter-chip filter-chip--active">SEMUA</button>
              {FILTERS.material.filter(m => m !== 'Semua').map((m) => (
                <button key={m} className="filter-chip">{m.toUpperCase()}</button>
              ))}
            </div>
            <div className="filter-bar-right">
              <div className="filter-sort">
                <span>URUTKAN:</span>
                <select>
                  {FILTERS.sort.map((s) => <option key={s}>{s.toUpperCase()}</option>)}
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ─── MAIN CONTENT: EDITORIAL GRID ─── */}
      <div className="catalog-body container">
        <div className="catalog-main">
          <div className="catalog-grid">
            {ALL_PRODUCTS.map((p, i) => (
              <Link href={`/products/${p.id}`} key={i} className="cat-product-card">
                <div className="cat-product-img">
                  <img src={p.image} alt={p.name} loading="lazy" />
                  {p.tag && (
                    <span className="cat-product-tag">
                      {p.tag}
                    </span>
                  )}
                  <div className="cat-product-overlay">
                    <button type="button" className="cat-add-btn">
                      TAMBAH KE KERANJANG
                    </button>
                  </div>
                </div>
                <div className="cat-product-info">
                  <h3 className="cat-product-name">{p.name}</h3>
                  <div className="cat-product-pricing">
                    <span className="cat-product-price">{p.price}</span>
                    {p.originalPrice && <span className="cat-product-original">{p.originalPrice}</span>}
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* PAGINATION */}
          <div className="catalog-pagination">
            <button className="page-btn page-btn--active">1</button>
            <button className="page-btn">2</button>
            <button className="page-btn">3</button>
            <span className="page-dots">···</span>
            <button className="page-btn">8</button>
          </div>
        </div>
      </div>
    </div>
  );
}
