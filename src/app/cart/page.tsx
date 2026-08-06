import Link from "next/link";

export const metadata = {
  title: "Keranjang Belanja | Ansania"
};

export default function CartPage() {
  return (
    <>
      <div className="page-header">
        <div className="container">
          <h1>Keranjang Belanja</h1>
        </div>
      </div>

      <section className="section container">
        <div className="cart-empty">
          <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="var(--color-border)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ margin: '0 auto 1.5rem', display: 'block' }}>
            <circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/>
          </svg>
          <p>Keranjang belanja Anda masih kosong.</p>
          <Link href="/products" className="btn-primary">
            Mulai Belanja
          </Link>
        </div>
      </section>
    </>
  );
}
