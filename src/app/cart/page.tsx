import Link from 'next/link';

export default function CartPage() {
  return (
    <main className="cart-container">
      <h1 className="cart-title">Keranjang Belanja</h1>
      
      <div className="cart-layout">
        <div className="cart-items">
          {[1, 2].map((i) => (
            <div key={i} className="cart-item">
              <div className="cart-item-img" />
              <div className="cart-item-info">
                <div className="cart-item-title">Ansania Pashmina Silk</div>
                <div className="cart-item-variant">Latte / Standar (175x75)</div>
                <div className="cart-item-actions">
                  <div className="cart-qty">
                    <button className="cart-qty-btn">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                      </svg>
                    </button>
                    <span className="cart-qty-val">1</span>
                    <button className="cart-qty-btn">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <line x1="12" y1="5" x2="12" y2="19"></line>
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                      </svg>
                    </button>
                  </div>
                  <button className="cart-remove">Hapus</button>
                </div>
              </div>
              <div className="cart-item-price">Rp 129.000</div>
            </div>
          ))}
        </div>

        <div>
          <div className="cart-summary">
            <h2 className="cart-summary-title">Ringkasan Pesanan</h2>
            
            <div className="cart-summary-row">
              <span>Subtotal (2 barang)</span>
              <span>Rp 258.000</span>
            </div>
            <div className="cart-summary-row">
              <span>Estimasi Pengiriman</span>
              <span>Gratis</span>
            </div>

            <div className="cart-promo">
              <input type="text" placeholder="Kode Diskon" className="cart-promo-input" />
              <button className="cart-promo-btn">Gunakan</button>
            </div>

            <div className="cart-summary-total">
              <span>Total</span>
              <span>Rp 258.000</span>
            </div>

            <Link href="/checkout" className="cart-checkout-btn">
              Lanjut ke Pembayaran
            </Link>
          </div>
          <Link href="/" className="cart-continue">
            Lanjutkan Belanja
          </Link>
        </div>
      </div>
    </main>
  );
}
