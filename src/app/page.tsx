import Link from "next/link";

// Dummy data for skeleton
const FEATURED_PRODUCTS = [
  { id: 1, name: "Pashmina Silk Premium", price: "Rp 149.000", image: "https://images.unsplash.com/photo-1596455607563-ad6193f76b17?q=80&w=600&auto=format&fit=crop" },
  { id: 2, name: "Voal Ultrafine Signature", price: "Rp 129.000", image: "https://images.unsplash.com/photo-1584042898744-84631379dbda?q=80&w=600&auto=format&fit=crop" },
  { id: 3, name: "Instan Khimar Syar'i", price: "Rp 189.000", image: "https://images.unsplash.com/photo-1589718471691-1ec8dc524f22?q=80&w=600&auto=format&fit=crop" },
  { id: 4, name: "Square Paris Exclusive", price: "Rp 99.000", image: "https://plus.unsplash.com/premium_photo-1675129654153-f7256191b248?q=80&w=600&auto=format&fit=crop" }
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Elegansi Dalam Setiap Balutan</h1>
          <p>Temukan koleksi kerudung terbaru dengan bahan premium yang nyaman untuk menemani aktivitas harian Anda dengan gaya.</p>
          <Link href="/products" className="btn-primary">
            Belanja Sekarang
          </Link>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="section container">
        <h2 className="section-title">Koleksi <span>Terbaru</span></h2>
        
        <div className="grid grid-cols-4">
          {FEATURED_PRODUCTS.map((product) => (
            <Link href={`/products`} key={product.id} className="product-card">
              <div className="product-image">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  loading="lazy"
                />
              </div>
              <div className="product-info">
                <h3 className="product-title">{product.name}</h3>
                <p className="product-price">{product.price}</p>
              </div>
            </Link>
          ))}
        </div>
        
        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <Link href="/products" className="btn-primary" style={{ backgroundColor: 'transparent', color: 'var(--color-primary)', border: '1px solid var(--color-primary)' }}>
            Lihat Semua Koleksi
          </Link>
        </div>
      </section>
    </>
  );
}
