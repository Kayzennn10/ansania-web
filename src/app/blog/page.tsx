import Link from 'next/link';

export default function BlogPage() {
  const posts = [
    { id: 1, title: 'Cara Merawat Pashmina Silk Agar Tetap Awet', excerpt: 'Pashmina berbahan silk membutuhkan perawatan khusus. Temukan tips dari ahlinya.', img: 'https://images.unsplash.com/photo-1589994161775-69bc749d21e0?auto=format&fit=crop&q=80&w=600', cat: 'Tips & Trik', date: '5 Ags 2026' },
    { id: 2, title: 'Warna Hijab Terbaik untuk Kulit Sawo Matang', excerpt: 'Padu padan warna yang tepat akan membuat wajah terlihat lebih cerah.', img: 'https://images.unsplash.com/photo-1596455607563-ad6193f76b17?auto=format&fit=crop&q=80&w=600', cat: 'Gaya Hijab', date: '3 Ags 2026' },
    { id: 3, title: 'Koleksi Lebaran 2026: Kembali ke Fitrah', excerpt: 'Mengintip di balik layar pembuatan koleksi spesial Idul Fitri tahun ini.', img: 'https://images.unsplash.com/photo-1623081014197-0dc2212903e1?auto=format&fit=crop&q=80&w=600', cat: 'Berita', date: '1 Ags 2026' }
  ];

  return (
    <main className="container">
      <div className="blg-header">
        <h1 className="blg-title">Jurnal Ansania</h1>
        <div className="blg-tabs">
          <span className="blg-tab active">Semua</span>
          <span className="blg-tab">Gaya Hijab</span>
          <span className="blg-tab">Tips &amp; Trik</span>
          <span className="blg-tab">Inspirasi</span>
          <span className="blg-tab">Berita</span>
        </div>
      </div>

      <div className="blg-featured">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="https://images.unsplash.com/photo-1542031751-24ff0e2776c5?auto=format&fit=crop&q=80&w=1200" alt="Featured" className="blg-featured-img" />
        <div className="blg-featured-content">
          <span className="blg-badge">Inspirasi</span>
          <h2>Gaya Hijab Minimalis untuk Aktivitas Padat</h2>
          <p>Bagi wanita modern, kepraktisan adalah kunci. Temukan inspirasi gaya hijab yang tetap elegan namun nyaman dikenakan sepanjang hari, mulai dari kantor hingga acara makan malam.</p>
          <div className="blg-meta">
            <span>Oleh Sarah Aisha</span>
            <span>&bull;</span>
            <span>7 Ags 2026</span>
            <span>&bull;</span>
            <span>4 min baca</span>
          </div>
        </div>
      </div>

      <div className="blg-grid">
        {posts.map(p => (
          <Link href={`/blog/${p.id}`} key={p.id} className="blg-card">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={p.img} alt={p.title} className="blg-card-img" />
            <span className="blg-badge">{p.cat}</span>
            <h3 className="blg-card-title">{p.title}</h3>
            <p className="blg-card-excerpt">{p.excerpt}</p>
            <div className="blg-meta">
              <span>{p.date}</span>
            </div>
          </Link>
        ))}
      </div>

      <div className="srch-pagination">
        <button className="srch-page-btn active">1</button>
        <button className="srch-page-btn">2</button>
      </div>
    </main>
  );
}
