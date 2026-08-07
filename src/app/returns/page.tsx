import React from 'react';

export default function ReturnsPage() {
  return (
    <div className="ret-container">
      <div className="ret-header">
        <h1 className="m-section-title">Kebijakan Retur &amp; Penukaran</h1>
        <p className="ret-subtitle">Kepuasan Anda adalah prioritas kami. Jika Anda tidak sepenuhnya puas dengan pembelian Anda, kami siap membantu.</p>
      </div>

      <div className="ret-content">
        <div className="ret-steps-col">
          <h2 className="ret-section-title">Cara Melakukan Retur</h2>
          <div className="ret-steps">
            {[
              { title: "Ajukan Permohonan", desc: "Hubungi Customer Service kami melalui WhatsApp atau email dalam waktu maksimal 7 hari setelah pesanan diterima, dengan menyertakan nomor pesanan dan alasan retur." },
              { title: "Tunggu Konfirmasi", desc: "Tim kami akan meninjau permohonan Anda dan memberikan instruksi selanjutnya serta alamat pengembalian dalam waktu 1x24 jam kerja." },
              { title: "Kemas Produk", desc: "Kemas produk dengan aman dalam kemasan aslinya, pastikan semua label masih terpasang." },
              { title: "Kirimkan Produk", desc: "Kirimkan produk ke alamat yang telah diberikan menggunakan jasa ekspedisi pilihan Anda. Simpan nomor resi sebagai bukti pengiriman." },
              { title: "Proses Selesai", desc: "Setelah produk kami terima dan periksa, kami akan memproses pengembalian dana atau penukaran produk baru sesuai dengan permintaan Anda." }
            ].map((step, i) => (
              <div key={i} className="ret-step">
                <div className="ret-step-number">{i + 1}</div>
                <div className="ret-step-content">
                  <h3 className="ret-step-title">{step.title}</h3>
                  <p className="ret-step-desc">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="ret-conditions-col">
          <div className="ret-conditions-card">
            <h2 className="ret-conditions-title">Syarat &amp; Ketentuan</h2>
            <ul className="ret-condition-list">
              <li className="ret-condition-item">
                <svg className="ret-icon-check" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Produk belum pernah dipakai, dicuci, atau diubah dengan cara apapun.</span>
              </li>
              <li className="ret-condition-item">
                <svg className="ret-icon-check" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Label harga dan hangtag Ansania masih terpasang pada produk.</span>
              </li>
              <li className="ret-condition-item">
                <svg className="ret-icon-check" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Batas waktu pengajuan maksimal 7 hari kalender sejak barang diterima.</span>
              </li>
              <li className="ret-condition-item">
                <svg className="ret-icon-x" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
                <span>Barang diskon atau promo (Sale) tidak dapat ditukar atau dikembalikan.</span>
              </li>
              <li className="ret-condition-item">
                <svg className="ret-icon-x" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
                <span>Produk aksesoris dan inner tidak dapat dikembalikan demi alasan kebersihan.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="ret-timeline-wrapper">
        <h2 className="ret-section-title" style={{textAlign: 'center', marginBottom: '2rem'}}>Estimasi Waktu Proses</h2>
        <div className="ret-timeline">
          <div className="ret-timeline-stage">
            <div className="ret-timeline-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h4 className="ret-timeline-title">Pemeriksaan Barang</h4>
            <p className="ret-timeline-desc">1-2 Hari Kerja</p>
          </div>
          <div className="ret-timeline-stage">
            <div className="ret-timeline-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
            </div>
            <h4 className="ret-timeline-title">Proses Penukaran</h4>
            <p className="ret-timeline-desc">2-3 Hari Kerja</p>
          </div>
          <div className="ret-timeline-stage">
            <div className="ret-timeline-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h4 className="ret-timeline-title">Pengembalian Dana</h4>
            <p className="ret-timeline-desc">3-5 Hari Kerja</p>
          </div>
        </div>
      </div>

      <div className="ret-contact-cta">
        <p>Butuh bantuan lebih lanjut terkait pengembalian?</p>
        <a href="/contact" className="m-link-arrow">Hubungi Customer Service</a>
      </div>
    </div>
  );
}
