export const metadata = {
  title: "Lokasi Toko | Ansania"
};

export default function StoresPage() {
  return (
    <>
      <div className="page-header" style={{ padding: '4rem 1.5rem' }}>
        <div className="container">
          <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Lokasi Toko Kami</h1>
          <p style={{ fontSize: '1.2rem', color: 'var(--color-text-light)' }}>Kunjungi butik offline Ansania di kota Anda.</p>
        </div>
      </div>

      <section className="section container">
        <div className="grid grid-cols-3">
          <div style={{ background: 'var(--color-surface)', padding: '2rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)' }}>
            <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem', color: 'var(--color-primary)' }}>Ansania Flagship Jakarta</h3>
            <p style={{ marginBottom: '1rem', color: 'var(--color-text-light)', lineHeight: '1.6' }}>Jl. Jend. Sudirman Kav 52-53, SCBD, Jakarta Selatan 12190</p>
            <p style={{ marginBottom: '0.5rem' }}><strong>Jam Buka:</strong> 10:00 - 22:00 WIB</p>
            <p><strong>Telepon:</strong> (021) 1234567</p>
          </div>
          <div style={{ background: 'var(--color-surface)', padding: '2rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)' }}>
            <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem', color: 'var(--color-primary)' }}>Ansania Bandung Raya</h3>
            <p style={{ marginBottom: '1rem', color: 'var(--color-text-light)', lineHeight: '1.6' }}>Jl. L. L. R.E. Martadinata No.10, Citarum, Bandung Wetan 40115</p>
            <p style={{ marginBottom: '0.5rem' }}><strong>Jam Buka:</strong> 09:00 - 21:00 WIB</p>
            <p><strong>Telepon:</strong> (022) 7654321</p>
          </div>
          <div style={{ background: 'var(--color-surface)', padding: '2rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)' }}>
            <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem', color: 'var(--color-primary)' }}>Ansania Surabaya Store</h3>
            <p style={{ marginBottom: '1rem', color: 'var(--color-text-light)', lineHeight: '1.6' }}>Jl. Tunjungan No.88, Genteng, Surabaya 60275</p>
            <p style={{ marginBottom: '0.5rem' }}><strong>Jam Buka:</strong> 10:00 - 21:30 WIB</p>
            <p><strong>Telepon:</strong> (031) 9876543</p>
          </div>
        </div>
      </section>
    </>
  );
}
