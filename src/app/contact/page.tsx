import React from 'react';

export default function ContactPage() {
  return (
    <div className="ctc-container">
      <div className="ctc-header">
        <h1 className="m-section-title">Hubungi Kami</h1>
        <p className="ctc-subtitle">Kami senang mendengar dari Anda. Silakan tinggalkan pesan, dan tim kami akan segera menghubungi Anda kembali.</p>
      </div>

      <div className="ctc-grid">
        <div className="ctc-form-col">
          <form className="ctc-form">
            <div className="ctc-form-group">
              <label className="ctc-label" htmlFor="name">Nama Lengkap</label>
              <input type="text" id="name" className="ctc-input" placeholder="Masukkan nama Anda" required />
            </div>
            <div className="ctc-form-group">
              <label className="ctc-label" htmlFor="email">Alamat Email</label>
              <input type="email" id="email" className="ctc-input" placeholder="alamat@email.com" required />
            </div>
            <div className="ctc-form-group">
              <label className="ctc-label" htmlFor="subject">Subjek</label>
              <select id="subject" className="ctc-select" required>
                <option value="">Pilih Subjek</option>
                <option value="pesanan">Pertanyaan Pesanan</option>
                <option value="retur">Retur &amp; Penukaran</option>
                <option value="produk">Informasi Produk</option>
                <option value="kemitraan">Kemitraan &amp; Grosir</option>
                <option value="lainnya">Lainnya</option>
              </select>
            </div>
            <div className="ctc-form-group">
              <label className="ctc-label" htmlFor="message">Pesan</label>
              <textarea id="message" className="ctc-textarea" rows={5} placeholder="Tulis pesan Anda di sini..." required></textarea>
            </div>
            <button type="submit" className="m-btn m-btn-dark ctc-submit-btn">Kirim Pesan</button>
            <p className="ctc-response-note">Kami akan merespons dalam 1x24 jam.</p>
          </form>
        </div>

        <div className="ctc-info-col">
          <div className="ctc-info-card">
            <h3 className="ctc-info-title">Informasi Kontak</h3>
            <div className="ctc-info-list">
              <div className="ctc-info-item">
                <svg className="ctc-info-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div className="ctc-info-text">
                  <strong>Kantor Pusat Ansania</strong>
                  <p>Jl. Jend. Sudirman No. Kav 21, Jakarta Selatan<br/>DKI Jakarta 12920</p>
                </div>
              </div>
              <div className="ctc-info-item">
                <svg className="ctc-info-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <div className="ctc-info-text">
                  <strong>Telepon / WhatsApp</strong>
                  <p>+62 811-2345-6789</p>
                </div>
              </div>
              <div className="ctc-info-item">
                <svg className="ctc-info-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <div className="ctc-info-text">
                  <strong>Email</strong>
                  <p>hello@ansania.com</p>
                </div>
              </div>
              <div className="ctc-info-item">
                <svg className="ctc-info-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div className="ctc-info-text">
                  <strong>Jam Operasional</strong>
                  <p>Senin - Jumat: 09:00 - 17:00 WIB<br/>Sabtu - Minggu: Libur</p>
                </div>
              </div>
            </div>

            <div className="ctc-socials">
              <a href="#" className="ctc-social-link">Instagram</a>
              <a href="#" className="ctc-social-link">TikTok</a>
              <a href="#" className="ctc-social-link">Shopee</a>
            </div>
          </div>

          <div className="ctc-map-placeholder">
            <svg className="ctc-map-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
            </svg>
            <span>Peta Lokasi</span>
          </div>
        </div>
      </div>
    </div>
  );
}
