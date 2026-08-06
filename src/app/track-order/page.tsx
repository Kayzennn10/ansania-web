export const metadata = {
  title: "Lacak Pesanan | Ansania"
};

export default function TrackOrderPage() {
  return (
    <>
      <div className="page-header" style={{ padding: '4rem 1.5rem' }}>
        <div className="container">
          <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Lacak Pesanan</h1>
          <p style={{ fontSize: '1.2rem', color: 'var(--color-text-light)' }}>Cek status pengiriman paket Anda secara real-time.</p>
        </div>
      </div>

      <section className="section container" style={{ display: 'flex', justifyContent: 'center' }}>
        <div style={{ background: 'var(--color-surface)', padding: '3rem', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-md)', width: '100%', maxWidth: '600px' }}>
          <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Nomor Resi / ID Pesanan</label>
              <input type="text" placeholder="Masukkan nomor resi atau ID pesanan..." style={{ width: '100%', padding: '1rem', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-sm)' }} />
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Email Pengguna (Opsional)</label>
              <input type="email" placeholder="contoh@email.com" style={{ width: '100%', padding: '1rem', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-sm)' }} />
            </div>
            <button className="btn-primary" style={{ width: '100%', marginTop: '1rem', padding: '1rem' }}>Lacak Sekarang</button>
          </form>

          {/* Skeleton Status Placeholder */}
          <div style={{ marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid var(--color-border)' }}>
            <h3 style={{ marginBottom: '1.5rem', textAlign: 'center' }}>Status Terakhir</h3>
            <div style={{ padding: '1.5rem', background: 'var(--color-background)', borderRadius: 'var(--radius-sm)', textAlign: 'center', color: 'var(--color-text-light)' }}>
              Silakan masukkan nomor resi untuk melihat status pesanan.
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
