import Link from "next/link";

export const metadata = {
  title: "Profil Akun | Ansania"
};

export default function ProfilePage() {
  return (
    <>
      <div className="page-header" style={{ padding: '4rem 1.5rem', background: 'var(--color-primary)', color: '#fff' }}>
        <div className="container">
          <h1 style={{ color: '#fff' }}>Akun Saya</h1>
          <p style={{ color: 'rgba(255,255,255,0.8)' }}>Kelola informasi profil, pesanan, dan alamat Anda.</p>
        </div>
      </div>

      <section className="section container">
        <div className="grid" style={{ gridTemplateColumns: '250px 1fr', gap: '3rem', alignItems: 'start' }}>
          {/* Sidebar Profil */}
          <aside style={{ background: 'var(--color-surface)', borderRadius: 'var(--radius-md)', padding: '1.5rem', border: '1px solid var(--color-border)' }}>
            <div style={{ textAlign: 'center', marginBottom: '2rem', paddingBottom: '1.5rem', borderBottom: '1px solid var(--color-border)' }}>
              <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'var(--color-secondary)', margin: '0 auto 1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '2rem', fontWeight: 600 }}>A</div>
              <h3 style={{ fontSize: '1.1rem' }}>Aisyah Maharani</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--color-text-light)' }}>Member sejak 2026</p>
            </div>
            
            <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <Link href="#" style={{ padding: '0.8rem 1rem', borderRadius: 'var(--radius-sm)', background: 'rgba(139, 115, 85, 0.1)', color: 'var(--color-primary)', fontWeight: 600 }}>Profil Saya</Link>
              <Link href="#" style={{ padding: '0.8rem 1rem', borderRadius: 'var(--radius-sm)', color: 'var(--color-text)' }}>Riwayat Pesanan</Link>
              <Link href="/wishlist" style={{ padding: '0.8rem 1rem', borderRadius: 'var(--radius-sm)', color: 'var(--color-text)' }}>Daftar Keinginan</Link>
              <Link href="#" style={{ padding: '0.8rem 1rem', borderRadius: 'var(--radius-sm)', color: 'var(--color-text)' }}>Alamat Pengiriman</Link>
              <Link href="/" style={{ padding: '0.8rem 1rem', borderRadius: 'var(--radius-sm)', color: '#d9534f', marginTop: '1rem' }}>Keluar</Link>
            </nav>
          </aside>

          {/* Konten Utama Profil */}
          <div style={{ background: 'var(--color-surface)', borderRadius: 'var(--radius-md)', padding: '2.5rem', border: '1px solid var(--color-border)' }}>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '2rem', borderBottom: '1px solid var(--color-border)', paddingBottom: '1rem' }}>Informasi Pribadi</h2>
            
            <form style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Nama Depan</label>
                <input type="text" defaultValue="Aisyah" style={{ width: '100%', padding: '0.8rem', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-sm)' }} />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Nama Belakang</label>
                <input type="text" defaultValue="Maharani" style={{ width: '100%', padding: '0.8rem', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-sm)' }} />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Email</label>
                <input type="email" defaultValue="aisyah@example.com" style={{ width: '100%', padding: '0.8rem', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-sm)' }} />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Nomor Telepon</label>
                <input type="tel" defaultValue="08123456789" style={{ width: '100%', padding: '0.8rem', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-sm)' }} />
              </div>
              
              <div style={{ gridColumn: 'span 2', marginTop: '1rem' }}>
                <button className="btn-primary">Simpan Perubahan</button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
