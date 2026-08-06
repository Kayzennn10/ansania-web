import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '60vh', textAlign: 'center' }}>
      <h1 style={{ fontSize: '6rem', color: 'var(--color-primary)', fontWeight: 800, lineHeight: 1 }}>404</h1>
      <h2 style={{ fontSize: '2rem', marginBottom: '1rem', color: 'var(--color-text)' }}>Halaman Tidak Ditemukan</h2>
      <p style={{ fontSize: '1.2rem', color: 'var(--color-text-light)', marginBottom: '2.5rem', maxWidth: '500px' }}>
        Maaf, halaman yang Anda cari mungkin telah dihapus, namanya diubah, atau sementara tidak tersedia.
      </p>
      <Link href="/" className="btn-primary" style={{ padding: '1rem 3rem' }}>
        Kembali ke Beranda
      </Link>
    </section>
  );
}
