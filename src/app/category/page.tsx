import Link from "next/link";

const ALL_PRODUCTS = [
  { id: 1, name: "Pashmina Silk Premium", price: "Rp 149.000", image: "https://images.unsplash.com/photo-1596455607563-ad6193f76b17?q=80&w=600&auto=format&fit=crop" },
  { id: 2, name: "Voal Ultrafine Signature", price: "Rp 129.000", image: "https://images.unsplash.com/photo-1584042898744-84631379dbda?q=80&w=600&auto=format&fit=crop" },
  { id: 3, name: "Instan Khimar Syar'i", price: "Rp 189.000", image: "https://images.unsplash.com/photo-1589718471691-1ec8dc524f22?q=80&w=600&auto=format&fit=crop" },
  { id: 4, name: "Square Paris Exclusive", price: "Rp 99.000", image: "https://plus.unsplash.com/premium_photo-1675129654153-f7256191b248?q=80&w=600&auto=format&fit=crop" }
];

export const metadata = {
  title: "Kategori Produk | Ansania"
};

export default function CategoryPage() {
  return (
    <>
      <div className="page-header">
        <div className="container">
          <h1>Kategori Kerudung</h1>
          <p>Temukan kerudung yang sesuai dengan gaya dan kebutuhan Anda.</p>
        </div>
      </div>

      <section className="section container" style={{ display: 'flex', gap: '3rem', alignItems: 'flex-start' }}>
        {/* Sidebar Filter */}
        <aside style={{ flex: '0 0 250px', position: 'sticky', top: '100px' }}>
          <div style={{ marginBottom: '2rem' }}>
            <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem', borderBottom: '1px solid var(--color-border)', paddingBottom: '0.5rem' }}>Bahan</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                <input type="checkbox" /> Pashmina Silk
              </label>
              <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                <input type="checkbox" /> Voal Ultrafine
              </label>
              <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                <input type="checkbox" /> Ceruty Babydoll
              </label>
              <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                <input type="checkbox" /> Paris Premium
              </label>
            </div>
          </div>

          <div>
            <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem', borderBottom: '1px solid var(--color-border)', paddingBottom: '0.5rem' }}>Warna</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem' }}>
              <div style={{ width: '30px', height: '30px', borderRadius: '50%', background: '#000', cursor: 'pointer', border: '1px solid var(--color-border)' }}></div>
              <div style={{ width: '30px', height: '30px', borderRadius: '50%', background: '#fff', cursor: 'pointer', border: '1px solid var(--color-border)' }}></div>
              <div style={{ width: '30px', height: '30px', borderRadius: '50%', background: '#d3c5b8', cursor: 'pointer', border: '1px solid var(--color-border)' }}></div>
              <div style={{ width: '30px', height: '30px', borderRadius: '50%', background: '#b8c1d3', cursor: 'pointer', border: '1px solid var(--color-border)' }}></div>
              <div style={{ width: '30px', height: '30px', borderRadius: '50%', background: '#d3b8bc', cursor: 'pointer', border: '1px solid var(--color-border)' }}></div>
              <div style={{ width: '30px', height: '30px', borderRadius: '50%', background: '#5d6854', cursor: 'pointer', border: '1px solid var(--color-border)' }}></div>
            </div>
          </div>
        </aside>

        {/* Product Grid */}
        <div style={{ flex: '1' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
            <span style={{ color: 'var(--color-text-light)' }}>Menampilkan 4 produk</span>
            <select style={{ padding: '0.6rem 1rem', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-sm)', background: 'var(--color-surface)', outline: 'none' }}>
              <option>Paling Sesuai</option>
              <option>Harga: Rendah ke Tinggi</option>
              <option>Harga: Tinggi ke Rendah</option>
              <option>Terbaru</option>
            </select>
          </div>
          
          <div className="grid grid-cols-3">
            {ALL_PRODUCTS.map((product) => (
              <Link href={`/products/${product.id}`} key={product.id} className="product-card">
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
        </div>
      </section>
    </>
  );
}
