export const metadata = {
  title: "Checkout | Ansania"
};

export default function CheckoutPage() {
  return (
    <>
      <div className="page-header">
        <div className="container">
          <h1>Checkout Pesanan</h1>
        </div>
      </div>

      <section className="section container">
        <div className="grid grid-cols-2" style={{ gap: '4rem', alignItems: 'start' }}>
          {/* Form Pengiriman */}
          <div>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>Informasi Pengiriman</h2>
            <form style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
              <div style={{ display: 'flex', gap: '1.2rem' }}>
                <input type="text" placeholder="Nama Depan" style={{ width: '100%', padding: '1rem', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-sm)' }} />
                <input type="text" placeholder="Nama Belakang" style={{ width: '100%', padding: '1rem', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-sm)' }} />
              </div>
              <input type="email" placeholder="Email" style={{ padding: '1rem', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-sm)' }} />
              <input type="tel" placeholder="Nomor Telepon" style={{ padding: '1rem', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-sm)' }} />
              <textarea placeholder="Alamat Lengkap" rows={4} style={{ padding: '1rem', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-sm)' }}></textarea>
              <div style={{ display: 'flex', gap: '1.2rem' }}>
                <input type="text" placeholder="Provinsi" style={{ width: '100%', padding: '1rem', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-sm)' }} />
                <input type="text" placeholder="Kota" style={{ width: '100%', padding: '1rem', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-sm)' }} />
              </div>
              <input type="text" placeholder="Kode Pos" style={{ padding: '1rem', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-sm)' }} />
            </form>
          </div>

          {/* Ringkasan Pesanan */}
          <div style={{ background: 'var(--color-surface)', padding: '2.5rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)' }}>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>Ringkasan Pesanan</h2>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem', borderBottom: '1px solid var(--color-border)', paddingBottom: '1rem' }}>
              <div>
                <h4 style={{ fontWeight: 600, fontSize: '1.1rem' }}>Pashmina Silk Premium</h4>
                <p style={{ color: 'var(--color-text-light)', fontSize: '0.9rem', marginTop: '0.5rem' }}>Qty: 1 | Warna: Cream</p>
              </div>
              <div style={{ fontWeight: 600 }}>Rp 149.000</div>
            </div>
            
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.8rem' }}>
              <span style={{ color: 'var(--color-text-light)' }}>Subtotal</span>
              <span>Rp 149.000</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1.5rem', borderBottom: '1px solid var(--color-border)', paddingBottom: '1.5rem' }}>
              <span style={{ color: 'var(--color-text-light)' }}>Ongkos Kirim</span>
              <span>Rp 15.000</span>
            </div>
            
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '2.5rem', fontWeight: 700, fontSize: '1.4rem', color: 'var(--color-primary)' }}>
              <span>Total Keseluruhan</span>
              <span>Rp 164.000</span>
            </div>
            
            <button className="btn-primary" style={{ width: '100%', padding: '1.2rem' }}>Selesaikan Pembayaran</button>
          </div>
        </div>
      </section>
    </>
  );
}
