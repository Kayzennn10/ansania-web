import Link from "next/link";

const WISHLIST_PRODUCTS = [
  { id: 1, name: "Pashmina Silk Premium", price: "Rp 149.000", image: "https://images.unsplash.com/photo-1596455607563-ad6193f76b17?q=80&w=600&auto=format&fit=crop" },
  { id: 3, name: "Instan Khimar Syar'i", price: "Rp 189.000", image: "https://images.unsplash.com/photo-1589718471691-1ec8dc524f22?q=80&w=600&auto=format&fit=crop" }
];

export const metadata = {
  title: "Daftar Keinginan | Ansania"
};

export default function WishlistPage() {
  return (
    <>
      <div className="page-header" style={{ padding: '4rem 1.5rem', background: 'var(--color-surface)', borderBottom: '1px solid var(--color-border)' }}>
        <div className="container">
          <h1>Daftar Keinginan (Wishlist)</h1>
          <p>Produk-produk favorit yang Anda simpan untuk dibeli nanti.</p>
        </div>
      </div>

      <section className="section container">
        {WISHLIST_PRODUCTS.length > 0 ? (
          <div className="grid grid-cols-4">
            {WISHLIST_PRODUCTS.map((product) => (
              <div key={product.id} className="product-card" style={{ position: 'relative' }}>
                <button style={{ position: 'absolute', top: '10px', right: '10px', background: '#fff', borderRadius: '50%', width: '35px', height: '35px', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 10, border: 'none', cursor: 'pointer', boxShadow: 'var(--shadow-sm)' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="var(--color-primary)" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
                </button>
                <Link href={`/products/${product.id}`} style={{ display: 'block' }}>
                  <div className="product-image">
                    <img src={product.image} alt={product.name} loading="lazy" />
                  </div>
                  <div className="product-info">
                    <h3 className="product-title">{product.name}</h3>
                    <p className="product-price">{product.price}</p>
                  </div>
                </Link>
                <div style={{ padding: '0 1.5rem 1.5rem' }}>
                  <button className="btn-primary" style={{ width: '100%', padding: '0.6rem' }}>Tambah ke Keranjang</button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div style={{ textAlign: 'center', padding: '4rem 0' }}>
            <p>Wishlist Anda masih kosong.</p>
          </div>
        )}
      </section>
    </>
  );
}
