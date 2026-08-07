import Link from 'next/link';

export default function CategoryPage() {
  const categories = [
    { name: "Pashmina", count: 42, img: "https://images.unsplash.com/photo-1589994161775-69bc749d21e0?auto=format&fit=crop&q=80&w=800" },
    { name: "Voal", count: 28, img: "https://images.unsplash.com/photo-1596455607563-ad6193f76b17?auto=format&fit=crop&q=80&w=800" },
    { name: "Khimar Syar'i", count: 19, img: "https://images.unsplash.com/photo-1623081014197-0dc2212903e1?auto=format&fit=crop&q=80&w=800" },
    { name: "Square", count: 35, img: "https://images.unsplash.com/photo-1626245084930-b384ff8b261b?auto=format&fit=crop&q=80&w=800" },
    { name: "Bergo", count: 21, img: "https://images.unsplash.com/photo-1589994160783-daeb5b1db320?auto=format&fit=crop&q=80&w=800" },
    { name: "Instan", count: 18, img: "https://images.unsplash.com/photo-1610427351660-fae9b387ba94?auto=format&fit=crop&q=80&w=800" },
  ];

  return (
    <main>
      <header className="catpg-header">
        <div className="catpg-header-bg">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="https://images.unsplash.com/photo-1542031751-24ff0e2776c5?auto=format&fit=crop&q=80&w=2000" alt="Category Hero" />
        </div>
        <h1 className="catpg-title">Temukan Koleksi Anda</h1>
      </header>
      
      <div className="container">
        <div className="catpg-grid">
          {categories.map((cat, i) => (
            <Link href={`/catalog?category=${cat.name.toLowerCase()}`} key={i} className="catpg-card">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={cat.img} alt={cat.name} className="catpg-img" />
              <div className="catpg-overlay">
                <h2 className="catpg-name">{cat.name}</h2>
                <span className="catpg-count">{cat.count} Item</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
