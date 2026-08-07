import React from 'react';

export default function FAQPage() {
  return (
    <div className="faq-container">
      <div className="faq-header">
        <h1 className="m-section-title">Pertanyaan yang Sering Diajukan</h1>
        <div className="faq-search-wrapper">
          <svg className="faq-icon-search" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input type="text" className="faq-search-input" placeholder="Cari pertanyaan..." />
        </div>
      </div>

      <div className="faq-category-pills">
        <button className="faq-pill faq-pill-active">Pemesanan</button>
        <button className="faq-pill">Pengiriman</button>
        <button className="faq-pill">Pembayaran</button>
        <button className="faq-pill">Retur</button>
        <button className="faq-pill">Produk</button>
      </div>

      <div className="faq-grid">
        <div className="faq-accordion">
          {[
            { q: "Bagaimana cara melakukan pemesanan?", a: "Anda dapat memilih produk yang diinginkan, menambahkannya ke keranjang belanja, dan melanjutkan ke halaman checkout untuk mengisi detail pengiriman dan pembayaran." },
            { q: "Apakah saya perlu membuat akun untuk berbelanja?", a: "Tidak, Anda dapat berbelanja sebagai tamu (guest). Namun, membuat akun akan memudahkan Anda dalam melacak pesanan dan mempercepat proses checkout di masa mendatang." },
            { q: "Apakah stok produk selalu tersedia?", a: "Kami selalu berusaha memastikan ketersediaan stok yang akurat di website. Namun, jika terjadi kesalahan dan produk yang Anda pesan kosong, kami akan segera menghubungi Anda." },
            { q: "Bagaimana cara mengubah atau membatalkan pesanan?", a: "Jika pesanan belum diproses (status 'Menunggu Pembayaran'), Anda dapat membatalkannya melalui halaman akun Anda. Jika sudah diproses, silakan hubungi Customer Service kami secepatnya." },
            { q: "Apakah Ansania menerima pesanan dalam jumlah besar (grosir)?", a: "Ya, kami menerima pesanan grosir. Silakan hubungi tim B2B kami melalui halaman Kontak untuk informasi lebih lanjut mengenai harga dan syarat ketentuan." }
          ].map((item, i) => (
            <details key={i} className="faq-accordion-item" name="faq">
              <summary className="faq-accordion-summary">
                {item.q}
                <svg className="faq-accordion-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="faq-accordion-content">
                <p>{item.a}</p>
              </div>
            </details>
          ))}
        </div>
      </div>

      <div className="faq-contact-cta">
        <h2 className="faq-cta-title">Masih ada pertanyaan?</h2>
        <p className="faq-cta-text">Tim Customer Service kami siap membantu Anda.</p>
        <a href="/contact" className="m-btn m-btn-dark faq-cta-btn">Hubungi Kami</a>
      </div>
    </div>
  );
}
