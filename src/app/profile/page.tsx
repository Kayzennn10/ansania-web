'use client';
import Link from 'next/link';

export default function ProfilePage() {
  return (
    <div className="container">
      <div className="prof-layout">
        <aside className="prof-sidebar">
          <div className="prof-user-brief">
            <div className="prof-avatar">A</div>
            <div className="prof-name">Aisha Zahra</div>
            <div className="prof-tier">Silver Member</div>
          </div>
          <nav className="prof-nav">
            <Link href="/profile" className="prof-nav-link active">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
              Profil Saya
            </Link>
            <Link href="#" className="prof-nav-link">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>
              Riwayat Pesanan
            </Link>
            <Link href="/wishlist" className="prof-nav-link">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
              Wishlist
            </Link>
            <Link href="#" className="prof-nav-link">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
              Alamat
            </Link>
            <Link href="#" className="prof-nav-link">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
              Keamanan
            </Link>
            <Link href="#" className="prof-nav-link" style={{ marginTop: '2rem', color: '#d9534f' }}>
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" /></svg>
              Logout
            </Link>
          </nav>
        </aside>

        <main className="prof-main">
          <div className="prof-card">
            <h2 className="prof-card-title">Ringkasan Akun</h2>
            <div className="prof-stats">
              <div className="prof-stat-box">
                <div className="prof-stat-label">Total Pesanan</div>
                <div className="prof-stat-value">12</div>
              </div>
              <div className="prof-stat-box">
                <div className="prof-stat-label">Total Belanja</div>
                <div className="prof-stat-value">Rp 2.450k</div>
              </div>
              <div className="prof-stat-box">
                <div className="prof-stat-label">Poin Loyalty</div>
                <div className="prof-stat-value">450</div>
              </div>
            </div>
          </div>

          <div className="prof-card">
            <h2 className="prof-card-title">Edit Profil</h2>
            <form className="prof-form-grid">
              <div className="auth-input-group">
                <label className="auth-label">Nama Lengkap</label>
                <input type="text" className="auth-input" defaultValue="Aisha Zahra" />
              </div>
              <div className="auth-input-group">
                <label className="auth-label">Email</label>
                <input type="email" className="auth-input" defaultValue="aisha.z@example.com" />
              </div>
              <div className="auth-input-group">
                <label className="auth-label">Nomor Telepon</label>
                <input type="tel" className="auth-input" defaultValue="081234567890" />
              </div>
              <div className="auth-input-group">
                <label className="auth-label">Tanggal Lahir</label>
                <input type="date" className="auth-input" defaultValue="1995-08-15" />
              </div>
              <div className="auth-input-group" style={{ gridColumn: '1 / -1' }}>
                <button type="button" className="auth-btn" style={{ width: 'max-content', padding: '0.8rem 2rem' }}>Simpan Perubahan</button>
              </div>
            </form>
          </div>

          <div className="prof-card">
            <h2 className="prof-card-title">Pesanan Terakhir</h2>
            <div style={{ overflowX: 'auto' }}>
              <table className="prof-table">
                <thead>
                  <tr>
                    <th>No. Order</th>
                    <th>Tanggal</th>
                    <th>Status</th>
                    <th>Total</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>#ANS-20230915</td>
                    <td>15 Sep 2023</td>
                    <td><span className="prof-badge dikirim">Dikirim</span></td>
                    <td>Rp 350.000</td>
                  </tr>
                  <tr>
                    <td>#ANS-20230802</td>
                    <td>02 Aug 2023</td>
                    <td><span className="prof-badge selesai">Selesai</span></td>
                    <td>Rp 425.000</td>
                  </tr>
                  <tr>
                    <td>#ANS-20230718</td>
                    <td>18 Jul 2023</td>
                    <td><span className="prof-badge selesai">Selesai</span></td>
                    <td>Rp 210.000</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
