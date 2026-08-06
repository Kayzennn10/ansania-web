import Link from "next/link";

const ARTICLES = [
  { id: 1, title: "Tren Modest Fashion Musim Ini", category: "Fashion Trend", date: "24 Okt 2026", image: "https://images.unsplash.com/photo-1596455607563-ad6193f76b17?q=80&w=600&auto=format&fit=crop" },
  { id: 2, title: "Tutorial Hijab Pashmina Silk untuk Acara Formal", category: "Tutorial", date: "15 Okt 2026", image: "https://images.unsplash.com/photo-1607527632617-640a2bb1de6b?q=80&w=600&auto=format&fit=crop" },
  { id: 3, title: "Mengenal Bahan Voal Ultrafine", category: "Material Guide", date: "02 Okt 2026", image: "https://images.unsplash.com/photo-1589718471691-1ec8dc524f22?q=80&w=600&auto=format&fit=crop" }
];

export const metadata = {
  title: "Blog & Artikel | Ansania"
};

export default function BlogPage() {
  return (
    <>
      <div className="page-header" style={{ padding: '4rem 1.5rem' }}>
        <div className="container">
          <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Jurnal Ansania</h1>
          <p style={{ fontSize: '1.2rem', color: 'var(--color-text-light)' }}>Tips gaya, tutorial, dan inspirasi modest fashion terbaru.</p>
        </div>
      </div>

      <section className="section container">
        <div className="grid grid-cols-3">
          {ARTICLES.map((article) => (
            <Link href={`#`} key={article.id} style={{ display: 'block', background: 'var(--color-surface)', borderRadius: 'var(--radius-md)', overflow: 'hidden', boxShadow: 'var(--shadow-sm)' }}>
              <div style={{ aspectRatio: '16/10', overflow: 'hidden', position: 'relative' }}>
                <img src={article.image} alt={article.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} loading="lazy" />
              </div>
              <div style={{ padding: '1.5rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem', fontSize: '0.85rem' }}>
                  <span style={{ color: 'var(--color-primary)', fontWeight: 600 }}>{article.category}</span>
                  <span style={{ color: 'var(--color-text-light)' }}>{article.date}</span>
                </div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', lineHeight: '1.4', color: 'var(--color-text)' }}>{article.title}</h3>
                <span style={{ color: 'var(--color-primary)', fontWeight: 600, fontSize: '0.9rem' }}>Baca Selengkapnya &rarr;</span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
