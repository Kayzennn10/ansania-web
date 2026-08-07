import React from 'react';

export default function SizeGuidePage() {
  return (
    <div className="sz-container">
      <div className="sz-header">
        <h1 className="m-section-title">Panduan Ukuran</h1>
        <p className="sz-subtitle">Temukan ukuran yang paling sesuai untuk gaya hijab Anda.</p>
      </div>

      <div className="sz-tabs">
        <button className="sz-tab sz-tab-active">Pashmina</button>
        <button className="sz-tab">Square</button>
        <button className="sz-tab">Khimar</button>
      </div>

      <div className="sz-table-wrapper">
        <table className="sz-table">
          <thead>
            <tr>
              <th>Ukuran</th>
              <th>Panjang (cm)</th>
              <th>Lebar (cm)</th>
              <th>Rekomendasi Gaya</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Standard</td>
              <td>175</td>
              <td>75</td>
              <td>Gaya lilit rapi, sehari-hari</td>
            </tr>
            <tr>
              <td>Long (Syari)</td>
              <td>200</td>
              <td>75</td>
              <td>Menutup dada, flowy</td>
            </tr>
            <tr>
              <td>Extra Wide</td>
              <td>180</td>
              <td>90</td>
              <td>Gaya bervolume, formal</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="sz-measure-section">
        <h2 className="sz-section-title">Cara Memilih Ukuran yang Tepat</h2>
        <div className="sz-measure-grid">
          <div className="sz-measure-img-placeholder">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span>Ilustrasi Pengukuran</span>
          </div>
          <div className="sz-measure-tips">
            <div className="sz-measure-tip">
              <div className="sz-measure-num">1</div>
              <p><strong>Pertimbangkan Postur Tubuh:</strong> Jika Anda memiliki postur tubuh tinggi, pashmina ukuran Long (200x75cm) akan memberikan drape yang lebih indah dan proporsional.</p>
            </div>
            <div className="sz-measure-tip">
              <div className="sz-measure-num">2</div>
              <p><strong>Tujuan Pemakaian:</strong> Untuk acara formal yang membutuhkan styling bervolume, pilih Extra Wide. Untuk aktivitas kasual yang aktif, ukuran Standard adalah pilihan terbaik.</p>
            </div>
            <div className="sz-measure-tip">
              <div className="sz-measure-num">3</div>
              <p><strong>Gaya Personal:</strong> Jika Anda lebih suka gaya hijab yang menutupi bagian dada sepenuhnya, pastikan memilih pashmina dengan panjang minimal 180cm.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="sz-care-section">
        <h2 className="sz-care-title">Panduan Perawatan</h2>
        <div className="sz-care-grid">
          <div className="sz-care-item">
            <svg className="sz-care-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
            <p className="sz-care-label">Cuci menggunakan tangan (Hand wash only)</p>
          </div>
          <div className="sz-care-item">
            <svg className="sz-care-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v18m0-18l-4 4m4-4l4 4M7 21h10" />
            </svg>
            <p className="sz-care-label">Jemur di tempat teduh, hindari sinar matahari langsung</p>
          </div>
          <div className="sz-care-item">
            <svg className="sz-care-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <p className="sz-care-label">Setrika dengan suhu rendah (Low heat)</p>
          </div>
        </div>
      </div>
    </div>
  );
}
