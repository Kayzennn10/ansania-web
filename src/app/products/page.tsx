import Link from "next/link";

const ALL_PRODUCTS = [
  { id: 1, name: "Pashmina Silk Premium", price: "Rp 149.000", image: "https://images.unsplash.com/photo-1596455607563-ad6193f76b17?q=80&w=600&auto=format&fit=crop" },
  { id: 2, name: "Voal Ultrafine Signature", price: "Rp 129.000", image: "https://images.unsplash.com/photo-1584042898744-84631379dbda?q=80&w=600&auto=format&fit=crop" },
  { id: 3, name: "Instan Khimar Syar'i", price: "Rp 189.000", image: "https://images.unsplash.com/photo-1589718471691-1ec8dc524f22?q=80&w=600&auto=format&fit=crop" },
  { id: 4, name: "Square Paris Exclusive", price: "Rp 99.000", image: "https://plus.unsplash.com/premium_photo-1675129654153-f7256191b248?q=80&w=600&auto=format&fit=crop" },
  { id: 5, name: "Bergo Maryam Daily", price: "Rp 89.000", image: "https://images.unsplash.com/photo-1607527632617-640a2bb1de6b?q=80&w=600&auto=format&fit=crop" },
  { id: 6, name: "Pashmina Ceruty Babydoll", price: "Rp 75.000", image: "https://images.unsplash.com/photo-1605364850989-10e3001dd3bd?q=80&w=600&auto=format&fit=crop" }
];

export const metadata = {
  title: "Koleksi Terbaru | Ansania"
};

export default function ProductsPage() {
  return (
    <>
      <div className="page-header">
        <div className="container">
          <h1>Koleksi Kerudung Terbaru</h1>
          <p>Eksplorasi gaya Anda dengan koleksi hijab terbaik kami.</p>
        </div>
      </div>

      <section className="section container">
        <div className="grid grid-cols-4">
          {ALL_PRODUCTS.map((product) => (
            <Link href={`#`} key={product.id} className="product-card">
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
      </section>
    </>
  );
}
