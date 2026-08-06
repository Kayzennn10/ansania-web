export const metadata = {
  title: "Tentang Kami | Ansania"
};

export default function AboutPage() {
  return (
    <>
      <div className="page-header" style={{ padding: '6rem 1.5rem' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <h1 style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>Cerita Ansania</h1>
          <p style={{ fontSize: '1.2rem', lineHeight: '1.8' }}>Menghadirkan keanggunan dalam setiap balutan sejak 2026. Kami percaya bahwa setiap wanita berhak tampil percaya diri dengan kerudung berkualitas premium yang nyaman digunakan sepanjang hari.</p>
        </div>
      </div>

      <section className="section container">
        <div className="grid grid-cols-2" style={{ gap: '4rem', alignItems: 'center', marginBottom: '6rem' }}>
          <div>
            <img 
              src="https://images.unsplash.com/photo-1589718471691-1ec8dc524f22?q=80&w=800&auto=format&fit=crop" 
              alt="Misi Ansania" 
              style={{ width: '100%', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-md)' }} 
            />
          </div>
          <div>
            <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: 'var(--color-primary)' }}>Visi & Misi</h2>
            <p style={{ marginBottom: '1rem', lineHeight: '1.8', color: 'var(--color-text-light)' }}>
              Visi kami adalah menjadi pelopor modest fashion yang tidak hanya mengedepankan nilai estetika, tetapi juga kenyamanan dan keberlanjutan.
            </p>
            <p style={{ lineHeight: '1.8', color: 'var(--color-text-light)' }}>
              Misi kami di Ansania adalah merancang setiap helai kerudung dengan dedikasi tinggi, memilih bahan-bahan terbaik, dan memastikan proses produksi yang etis untuk menghadirkan kualitas tak tertandingi ke tangan Anda.
            </p>
          </div>
        </div>

        <div style={{ textAlign: 'center', padding: '4rem', background: 'var(--color-primary)', color: '#fff', borderRadius: 'var(--radius-lg)' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Bergabunglah Bersama Kami</h2>
          <p style={{ fontSize: '1.1rem', marginBottom: '2rem', opacity: 0.9 }}>Jadilah bagian dari perjalanan kami dalam merajut keanggunan.</p>
          <button style={{ padding: '1rem 2.5rem', background: '#fff', color: 'var(--color-primary)', border: 'none', borderRadius: 'var(--radius-full)', fontWeight: 600, fontSize: '1rem', cursor: 'pointer' }}>
            Lihat Koleksi Kami
          </button>
        </div>
      </section>
    </>
  );
}
