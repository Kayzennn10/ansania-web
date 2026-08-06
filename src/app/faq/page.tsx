export const metadata = {
  title: "FAQ & Pusat Bantuan | Ansania"
};

export default function FAQPage() {
  return (
    <>
      <div className="page-header" style={{ padding: '5rem 1.5rem' }}>
        <div className="container">
          <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Pusat Bantuan & FAQ</h1>
          <p style={{ fontSize: '1.2rem', color: 'var(--color-text-light)' }}>Temukan jawaban untuk pertanyaan yang paling sering diajukan.</p>
        </div>
      </div>

      <section className="section container" style={{ maxWidth: '800px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          
          <div style={{ background: 'var(--color-surface)', padding: '1.5rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)', boxShadow: 'var(--shadow-sm)' }}>
            <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem', color: 'var(--color-primary)' }}>Bagaimana cara merawat bahan Pashmina Silk?</h3>
            <p style={{ color: 'var(--color-text-light)', lineHeight: '1.6' }}>Cuci dengan tangan menggunakan air dingin dan deterjen cair yang lembut. Hindari penggunaan mesin cuci dan mesin pengering. Jemur di tempat teduh dan setrika dengan suhu rendah.</p>
          </div>
          
          <div style={{ background: 'var(--color-surface)', padding: '1.5rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)', boxShadow: 'var(--shadow-sm)' }}>
            <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem', color: 'var(--color-primary)' }}>Berapa lama estimasi pengiriman?</h3>
            <p style={{ color: 'var(--color-text-light)', lineHeight: '1.6' }}>Pengiriman reguler memakan waktu 2-4 hari kerja untuk area Jabodetabek, dan 3-7 hari kerja untuk di luar Jabodetabek. Pengiriman instan tersedia untuk area tertentu.</p>
          </div>
          
          <div style={{ background: 'var(--color-surface)', padding: '1.5rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)', boxShadow: 'var(--shadow-sm)' }}>
            <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem', color: 'var(--color-primary)' }}>Apakah ada kebijakan pengembalian produk?</h3>
            <p style={{ color: 'var(--color-text-light)', lineHeight: '1.6' }}>Ya, kami menerima pengembalian produk maksimal 3 hari setelah barang diterima, dengan syarat tag belum dilepas, belum dicuci, dan menyertakan video unboxing.</p>
          </div>
          
        </div>
        
        <div style={{ textAlign: 'center', marginTop: '4rem' }}>
          <p style={{ marginBottom: '1rem', fontSize: '1.1rem' }}>Masih punya pertanyaan?</p>
          <button className="btn-primary">Hubungi Customer Service</button>
        </div>
      </section>
    </>
  );
}
