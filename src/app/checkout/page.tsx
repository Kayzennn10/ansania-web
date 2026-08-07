import Link from 'next/link';

export default function CheckoutPage() {
  return (
    <main className="chk-container">
      <div className="chk-breadcrumb">
        <Link href="/cart">Keranjang</Link> <span>&rarr;</span> 
        <strong>Pengiriman &amp; Pembayaran</strong>
      </div>

      <div className="chk-layout">
        <div className="chk-forms">
          <div className="chk-section">
            <h2 className="chk-section-title">1. Data Pengiriman</h2>
            <div className="chk-form-grid">
              <input type="text" placeholder="Nama Lengkap" className="chk-input chk-form-full" />
              <input type="email" placeholder="Email" className="chk-input" />
              <input type="tel" placeholder="Nomor Telepon" className="chk-input" />
              <textarea placeholder="Alamat Lengkap" className="chk-input chk-form-full" rows={3}></textarea>
              <input type="text" placeholder="Provinsi" className="chk-input" />
              <input type="text" placeholder="Kota / Kabupaten" className="chk-input" />
              <input type="text" placeholder="Kecamatan" className="chk-input" />
              <input type="text" placeholder="Kode Pos" className="chk-input" />
            </div>
          </div>

          <div className="chk-section">
            <h2 className="chk-section-title">2. Metode Pengiriman</h2>
            <div className="chk-radio-cards">
              <label className="chk-radio-card active">
                <input type="radio" name="shipping" defaultChecked />
                <div className="chk-radio-title">JNE REG</div>
                <div className="chk-radio-desc">Estimasi 2-3 Hari</div>
                <div className="chk-radio-title" style={{ marginTop: 8 }}>Rp 15.000</div>
              </label>
              <label className="chk-radio-card">
                <input type="radio" name="shipping" />
                <div className="chk-radio-title">JNE YES</div>
                <div className="chk-radio-desc">Estimasi 1 Hari</div>
                <div className="chk-radio-title" style={{ marginTop: 8 }}>Rp 25.000</div>
              </label>
              <label className="chk-radio-card">
                <input type="radio" name="shipping" />
                <div className="chk-radio-title">SiCepat REG</div>
                <div className="chk-radio-desc">Estimasi 2-3 Hari</div>
                <div className="chk-radio-title" style={{ marginTop: 8 }}>Rp 14.000</div>
              </label>
            </div>
          </div>

          <div className="chk-section">
            <h2 className="chk-section-title">3. Metode Pembayaran</h2>
            <div className="chk-pay-tabs">
              <button className="chk-pay-tab active">Transfer Bank</button>
              <button className="chk-pay-tab">E-Wallet</button>
              <button className="chk-pay-tab">COD</button>
            </div>
            <div className="chk-radio-cards">
              <label className="chk-radio-card active">
                <input type="radio" name="payment" defaultChecked />
                <div className="chk-radio-title">BCA Virtual Account</div>
              </label>
              <label className="chk-radio-card">
                <input type="radio" name="payment" />
                <div className="chk-radio-title">Mandiri Virtual Account</div>
              </label>
              <label className="chk-radio-card">
                <input type="radio" name="payment" />
                <div className="chk-radio-title">BNI Virtual Account</div>
              </label>
            </div>
          </div>
        </div>

        <div>
          <div className="chk-summary">
            <h2 className="chk-section-title" style={{ border: 'none', padding: 0 }}>Ringkasan Pesanan</h2>
            
            <div className="chk-item-list">
              {[1, 2].map((i) => (
                <div key={i} className="chk-item">
                  <div className="chk-item-img" />
                  <div className="chk-item-info">
                    <div className="chk-item-title">Ansania Pashmina Silk</div>
                    <div className="chk-item-variant">Latte / Standar &times; 1</div>
                    <div className="chk-item-price">Rp 129.000</div>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 12, fontSize: '0.875rem' }}>
              <span>Subtotal</span>
              <span>Rp 258.000</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 12, fontSize: '0.875rem' }}>
              <span>Ongkos Kirim</span>
              <span>Rp 15.000</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 16, paddingTop: 16, borderTop: '1px solid var(--color-border)', fontWeight: 600, fontSize: '1.125rem', marginBottom: 24 }}>
              <span>Total Pembayaran</span>
              <span>Rp 273.000</span>
            </div>

            <button className="chk-submit-btn">
              Konfirmasi Pesanan
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
