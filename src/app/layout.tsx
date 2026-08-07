import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-display",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-body",
});

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
      <body className={`${cormorant.variable} ${dmSans.variable}`}>
        <Navbar />

        <main>
          {children}
        </main>

        <footer className="footer">
          <div className="container">
            <div className="footer-grid">
              <div className="footer-brand">
                <h2>Ansania.</h2>
                <p style={{ marginBottom: '1.5rem' }}>Elegansi dalam setiap balutan. Kami menghadirkan koleksi kerudung premium untuk wanita modern yang mengutamakan kenyamanan dan gaya.</p>
                <div style={{ display: 'flex', gap: '1.2rem', marginTop: '1.5rem' }}>
                  <a href="#" style={{ color: '#fff', opacity: 0.8, transition: 'opacity 0.2s' }} aria-label="Instagram"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg></a>
                  <a href="#" style={{ color: '#fff', opacity: 0.8, transition: 'opacity 0.2s' }} aria-label="TikTok"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path></svg></a>
                  <a href="#" style={{ color: '#fff', opacity: 0.8, transition: 'opacity 0.2s' }} aria-label="Facebook"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg></a>
                </div>
              </div>
              <div className="footer-links">
                <h3>Eksplorasi</h3>
                <ul>
                  <li><Link href="/products">Koleksi Terbaru</Link></li>
                  <li><Link href="/promos">Promo & Flash Sale</Link></li>
                  <li><Link href="/lookbook">Lookbook</Link></li>
                  <li><Link href="/loyalty">Ansania Loyalty</Link></li>
                  <li><Link href="/blog">Jurnal Ansania</Link></li>
                  <li><Link href="/reviews">Ulasan Pelanggan</Link></li>
                  <li><Link href="/stores">Lokasi Toko</Link></li>
                </ul>
              </div>
              <div className="footer-links">
                <h3>Bantuan & Layanan</h3>
                <ul>
                  <li><Link href="/faq">FAQ & Bantuan</Link></li>
                  <li><Link href="/track-order">Lacak Pesanan</Link></li>
                  <li><Link href="/returns">Pengembalian (Retur)</Link></li>
                  <li><Link href="/size-guide">Panduan Ukuran</Link></li>
                  <li><Link href="/contact">Hubungi Kami</Link></li>
                </ul>
              </div>
              <div className="footer-links">
                <h3>Dapatkan Info Promo</h3>
                <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.9rem', marginBottom: '1rem', lineHeight: '1.5' }}>Berlangganan newsletter kami untuk info diskon eksklusif.</p>
                <form style={{ display: 'flex', gap: '0.5rem', marginBottom: '2rem' }}>
                  <input type="email" placeholder="Email Anda" style={{ width: '100%', padding: '0.6rem 1rem', borderRadius: 'var(--radius-sm)', border: 'none', outline: 'none', color: '#333' }} />
                  <button type="button" style={{ padding: '0.6rem 1rem', borderRadius: 'var(--radius-sm)', border: 'none', background: 'var(--color-secondary)', color: 'var(--color-primary)', fontWeight: 'bold', cursor: 'pointer' }}>Kirim</button>
                </form>
                <h3>Metode Pembayaran</h3>
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                  <div style={{ background: '#fff', padding: '0.2rem 0.5rem', borderRadius: '4px', fontSize: '0.75rem', color: '#000', fontWeight: 'bold' }}>VISA</div>
                  <div style={{ background: '#fff', padding: '0.2rem 0.5rem', borderRadius: '4px', fontSize: '0.75rem', color: '#000', fontWeight: 'bold' }}>MasterCard</div>
                  <div style={{ background: '#fff', padding: '0.2rem 0.5rem', borderRadius: '4px', fontSize: '0.75rem', color: '#000', fontWeight: 'bold' }}>BCA</div>
                  <div style={{ background: '#fff', padding: '0.2rem 0.5rem', borderRadius: '4px', fontSize: '0.75rem', color: '#000', fontWeight: 'bold' }}>GoPay</div>
                  <div style={{ background: '#fff', padding: '0.2rem 0.5rem', borderRadius: '4px', fontSize: '0.75rem', color: '#000', fontWeight: 'bold' }}>QRIS</div>
                </div>
              </div>
            </div>
            <div className="footer-bottom" style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', alignItems: 'center' }}>
              <p>&copy; {new Date().getFullYear()} Ansania. Hak Cipta Dilindungi.</p>
              <div style={{ display: 'flex', gap: '1.5rem', fontSize: '0.9rem' }}>
                <Link href="#" style={{ color: 'rgba(255,255,255,0.7)', transition: 'color 0.2s' }}>Kebijakan Privasi</Link>
                <Link href="#" style={{ color: 'rgba(255,255,255,0.7)', transition: 'color 0.2s' }}>Syarat & Ketentuan</Link>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
