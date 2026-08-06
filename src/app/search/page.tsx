import Link from "next/link";

const SEARCH_RESULTS = [
  { id: 2, name: "Voal Ultrafine Signature", price: "Rp 129.000", image: "https://images.unsplash.com/photo-1584042898744-84631379dbda?q=80&w=600&auto=format&fit=crop" }
];

export const metadata = {
  title: "Hasil Pencarian | Ansania"
};

export default function SearchPage() {
  return (
    <>
      <div className="page-header" style={{ padding: '4rem 1.5rem', background: 'var(--color-surface)', borderBottom: '1px solid var(--color-border)' }}>
        <div className="container">
          <p style={{ color: 'var(--color-text-light)', marginBottom: '0.5rem' }}>Hasil pencarian untuk:</p>
          <h1>"Voal"</h1>
          <p style={{ marginTop: '1rem' }}>Ditemukan 1 produk yang sesuai.</p>
        </div>
      </div>

      <section className="section container">
        <div className="grid grid-cols-4">
          {SEARCH_RESULTS.map((product) => (
            <Link href={`/products/${product.id}`} key={product.id} className="product-card">
              <div className="product-image">
                <img src={product.image} alt={product.name} loading="lazy" />
              </div>
              <div className="product-info">
                <h3 className="product-title">{product.name}</h3>
                <p className="product-price">{product.price}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
