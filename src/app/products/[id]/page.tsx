import Link from "next/link";

export default function ProductDetail() {
  return (
    <>
      <div className="page-header">
        <div className="container">
          <h1>Detail Produk</h1>
        </div>
      </div>
      
      <section className="section container">
        <div className="grid grid-cols-2" style={{ gap: '4rem', alignItems: 'start' }}>
          {/* Product Image Gallery Skeleton */}
          <div className="product-image" style={{ aspectRatio: '4/5', borderRadius: 'var(--radius-lg)' }}>
            <img 
              src="https://images.unsplash.com/photo-1596455607563-ad6193f76b17?q=80&w=800&auto=format&fit=crop" 
              alt="Pashmina Silk Premium" 
            />
          </div>
          
          {/* Product Info Skeleton */}
          <div>
            <h2 style={{ fontSize: '2rem', marginBottom: '1rem', color: 'var(--color-text)' }}>Pashmina Silk Premium</h2>
            <p style={{ fontSize: '1.5rem', color: 'var(--color-primary)', fontWeight: '700', marginBottom: '2rem' }}>Rp 149.000</p>
            
            <div style={{ marginBottom: '2rem', color: 'var(--color-text-light)', lineHeight: '1.8' }}>
              <p>Kerudung pashmina berbahan silk premium yang lembut, mudah dibentuk, dan memberikan kesan elegan. Cocok digunakan untuk acara formal maupun gaya kasual yang mewah.</p>
            </div>
            
            <div style={{ marginBottom: '2rem' }}>
              <h4 style={{ marginBottom: '0.5rem' }}>Pilih Warna</h4>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#d3c5b8', cursor: 'pointer', border: '2px solid var(--color-primary)' }}></div>
                <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#b8c1d3', cursor: 'pointer', border: '1px solid var(--color-border)' }}></div>
                <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#d3b8bc', cursor: 'pointer', border: '1px solid var(--color-border)' }}></div>
              </div>
            </div>
            
            <div style={{ display: 'flex', gap: '1rem' }}>
              <Link href="/cart" className="btn-primary" style={{ flex: '1', textAlign: 'center' }}>Tambah ke Keranjang</Link>
              <Link href="/checkout" className="btn-primary" style={{ flex: '1', background: 'transparent', color: 'var(--color-primary)', border: '1px solid var(--color-primary)', textAlign: 'center' }}>
                Beli Sekarang
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
