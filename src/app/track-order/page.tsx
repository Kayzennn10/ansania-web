import React from 'react';

export default function TrackOrderPage() {
  return (
    <div className="trk-container">
      <div className="trk-header">
        <h1 className="m-section-title">Lacak Pesanan</h1>
        <p className="trk-subtitle">Pantau status pengiriman pesanan Anda secara real-time.</p>
      </div>

      <div className="trk-card">
        <form className="trk-search-form">
          <div className="trk-input-wrapper">
            <svg className="trk-icon-search" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input type="text" className="trk-search-input" placeholder="Masukkan Nomor Resi atau Nomor Pesanan" />
          </div>
          <button type="submit" className="m-btn m-btn-dark trk-search-btn">Lacak</button>
        </form>

        <div className="trk-result">
          <div className="trk-result-header">
            <div>
              <p className="trk-result-label">Nomor Resi</p>
              <h3 className="trk-result-value">JX8890213890ID</h3>
            </div>
            <div style={{textAlign: 'right'}}>
              <p className="trk-result-label">Kurir</p>
              <h3 className="trk-result-value">JNE Express (REG)</h3>
            </div>
          </div>
          
          <div className="trk-timeline">
            <div className="trk-step">
              <div className="trk-step-dot"></div>
              <div className="trk-step-content">
                <p className="trk-step-title">Pesanan Dibuat</p>
                <p className="trk-step-time">12 Agustus 2026, 09:40</p>
              </div>
            </div>
            <div className="trk-line"></div>
            <div className="trk-step">
              <div className="trk-step-dot"></div>
              <div className="trk-step-content">
                <p className="trk-step-title">Dikemas</p>
                <p className="trk-step-time">12 Agustus 2026, 11:20</p>
              </div>
            </div>
            <div className="trk-line"></div>
            <div className="trk-step">
              <div className="trk-step-dot"></div>
              <div className="trk-step-content">
                <p className="trk-step-title">Dikirim</p>
                <p className="trk-step-time">12 Agustus 2026, 15:30</p>
              </div>
            </div>
            <div className="trk-line trk-line-active"></div>
            <div className="trk-step trk-step-active">
              <div className="trk-step-dot trk-step-dot-active"></div>
              <div className="trk-step-content">
                <p className="trk-step-title">Dalam Perjalanan</p>
                <p className="trk-step-time">13 Agustus 2026, 08:15 (Sortation Center Jakarta)</p>
              </div>
            </div>
            <div className="trk-line trk-line-pending"></div>
            <div className="trk-step trk-step-pending">
              <div className="trk-step-dot trk-step-dot-pending"></div>
              <div className="trk-step-content">
                <p className="trk-step-title">Terkirim</p>
                <p className="trk-step-time">Estimasi: 14 Agustus 2026</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="trk-recent">
        <h4 className="trk-recent-title">Pencarian Terakhir</h4>
        <div className="trk-recent-tags">
          <button className="trk-recent-tag">ANS-889021</button>
          <button className="trk-recent-tag">JX8890213890ID</button>
          <button className="trk-recent-tag">ANS-773829</button>
        </div>
      </div>
    </div>
  );
}
