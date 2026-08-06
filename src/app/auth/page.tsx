import Link from "next/link";

export const metadata = {
  title: "Masuk / Daftar | Ansania"
};

export default function AuthPage() {
  return (
    <section className="section container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '80vh' }}>
      <div style={{ background: 'var(--color-surface)', padding: '3.5rem', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-md)', width: '100%', maxWidth: '450px' }}>
        
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <h1 style={{ fontSize: '2rem', color: 'var(--color-primary)', marginBottom: '0.5rem' }}>Selamat Datang</h1>
          <p style={{ color: 'var(--color-text-light)' }}>Masuk ke akun Ansania Anda</p>
        </div>
        
        <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Email</label>
            <input type="email" placeholder="contoh@email.com" style={{ width: '100%', padding: '1rem', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-sm)' }} />
          </div>
          <div>
            <label style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', fontWeight: 500 }}>
              <span>Password</span>
              <a href="#" style={{ color: 'var(--color-primary)', fontSize: '0.9rem' }}>Lupa Password?</a>
            </label>
            <input type="password" placeholder="••••••••" style={{ width: '100%', padding: '1rem', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-sm)' }} />
          </div>
          
          <button className="btn-primary" style={{ width: '100%', marginTop: '1rem', padding: '1rem' }}>Masuk</button>
        </form>
        
        <div style={{ textAlign: 'center', marginTop: '2.5rem', color: 'var(--color-text-light)' }}>
          Belum punya akun? <Link href="#" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Daftar di sini</Link>
        </div>
      </div>
    </section>
  );
}
