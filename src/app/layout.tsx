import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Ansania | Premium Hijab Collection",
  description: "Temukan koleksi kerudung eksklusif dan premium dari Ansania.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={inter.variable}>
        <nav className="navbar">
          <div className="container navbar-content">
            <Link href="/" className="nav-logo">
              Ansania.
            </Link>
            <div className="nav-links">
              <Link href="/">Beranda</Link>
              <Link href="/products">Koleksi Terbaru</Link>
              <Link href="/category">Kategori</Link>
              <Link href="/about">Tentang Kami</Link>
            </div>
            <div className="nav-actions">
              <Link href="/auth" className="btn-icon" aria-label="Account">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
              </Link>
              <button className="btn-icon" aria-label="Search">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
              </button>
              <Link href="/cart" className="btn-icon" aria-label="Cart">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>
              </Link>
            </div>
          </div>
        </nav>

        <main>
          {children}
        </main>

        <footer className="footer">
          <div className="container">
            <div className="footer-grid">
              <div className="footer-brand">
                <h2>Ansania.</h2>
                <p>Elegansi dalam setiap balutan. Kami menghadirkan koleksi kerudung premium untuk wanita modern yang mengutamakan kenyamanan dan gaya.</p>
              </div>
              <div className="footer-links">
                <h3>Eksplorasi</h3>
                <ul>
                  <li><Link href="/products">Koleksi Terbaru</Link></li>
                  <li><Link href="/lookbook">Lookbook</Link></li>
                  <li><Link href="/blog">Jurnal Ansania</Link></li>
                  <li><Link href="/stores">Lokasi Toko</Link></li>
                </ul>
              </div>
              <div className="footer-links">
                <h3>Bantuan & Layanan</h3>
                <ul>
                  <li><Link href="/faq">FAQ & Bantuan</Link></li>
                  <li><Link href="/track-order">Lacak Pesanan</Link></li>
                  <li><Link href="/size-guide">Panduan Ukuran</Link></li>
                  <li><Link href="#">Syarat & Ketentuan</Link></li>
                </ul>
              </div>
            </div>
            <div className="footer-bottom">
              <p>&copy; {new Date().getFullYear()} Ansania. Hak Cipta Dilindungi.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
