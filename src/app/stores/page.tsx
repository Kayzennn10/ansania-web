import React from 'react';

export default function StoresPage() {
  return (
    <div className="str-container">
      <div className="str-header">
        <h1 className="m-section-title">Lokasi Toko</h1>
        <p className="str-subtitle">Temukan butik Ansania terdekat di kota Anda dan rasakan kualitas material premium kami secara langsung.</p>
      </div>

      <div className="str-map-wrapper">
        <div className="str-map-placeholder">
          <svg className="str-map-hero-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
          </svg>
          <span>Peta Interaktif - Menampilkan Lokasi Toko</span>
        </div>
      </div>

      <div className="str-content">
        <div className="str-filters">
          <button className="str-filter-btn str-filter-active">Semua</button>
          <button className="str-filter-btn">Jakarta</button>
          <button className="str-filter-btn">Bandung</button>
          <button className="str-filter-btn">Surabaya</button>
          <button className="str-filter-btn">Yogyakarta</button>
        </div>

        <div className="str-grid">
          {[
            { name: "Ansania Flagship Senayan", city: "Jakarta", address: "Senayan City Mall, Lantai 2 Unit 45, Jl. Asia Afrika, Jakarta Pusat", phone: "+62 21-555-0198", hours: "Senin - Minggu (10:00 - 22:00)" },
            { name: "Ansania Boutique PIM", city: "Jakarta", address: "Pondok Indah Mall 2, Lantai 1, Jl. Metro Pondok Indah, Jakarta Selatan", phone: "+62 21-555-0201", hours: "Senin - Minggu (10:00 - 22:00)" },
            { name: "Ansania Store PVJ", city: "Bandung", address: "Paris Van Java, Resort Level, Jl. Sukajadi No. 131-139, Bandung", phone: "+62 22-777-8902", hours: "Senin - Minggu (10:00 - 22:00)" },
            { name: "Ansania Tunjungan Plaza", city: "Surabaya", address: "Tunjungan Plaza 4, Lantai 3, Jl. Jend. Basuki Rachmat, Surabaya", phone: "+62 31-888-3421", hours: "Senin - Minggu (10:00 - 22:00)" }
          ].map((store, i) => (
            <div key={i} className="str-card">
              <div className="str-card-header">
                <h3 className="str-card-title">{store.name}</h3>
                <span className="str-badge">{store.city}</span>
              </div>
              <div className="str-card-content">
                <div className="str-info-row">
                  <svg className="str-pin-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <p className="str-card-address">{store.address}</p>
                </div>
                <div className="str-info-row">
                  <svg className="str-pin-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <p className="str-card-contact">{store.phone}</p>
                </div>
                <div className="str-info-row">
                  <svg className="str-pin-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="str-card-hours">{store.hours}</p>
                </div>
              </div>
              <a href="#" className="str-card-link">Lihat di Maps &rarr;</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
