'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const mockWishlist = [
  { id: 1, name: 'Pashmina Silk Premium', price: 'Rp 125.000', image: 'https://images.unsplash.com/photo-1618164435735-414d50f83350?q=80&w=800&auto=format&fit=crop' },
  { id: 2, name: 'Voal Miracle Plain', price: 'Rp 85.000', image: 'https://images.unsplash.com/photo-1599839619722-39751411ea63?q=80&w=800&auto=format&fit=crop' },
  { id: 3, name: 'Instan Bergo Maryam', price: 'Rp 65.000', image: 'https://images.unsplash.com/photo-1589467383656-785d038dc795?q=80&w=800&auto=format&fit=crop' },
];

export default function WishlistPage() {
  const [items, setItems] = useState(mockWishlist);

  const handleRemove = (id: number) => {
    setItems(items.filter(item => item.id !== id));
  };

  return (
    <div className="container">
      <div className="wish-header">
        <h1 className="wish-title">Wishlist Saya</h1>
        <p className="wish-count">{items.length} produk tersimpan</p>
      </div>

      {items.length === 0 ? (
        <div className="wish-empty">
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
          <h2 className="wish-empty-title">Wishlist Anda Kosong</h2>
          <p className="wish-empty-text">Temukan koleksi hijab favorit Anda dan simpan di sini.</p>
          <Link href="/koleksi" className="btn-primary">
            Mulai Belanja
          </Link>
        </div>
      ) : (
        <>
          <div className="wish-bar">
            <div className="auth-input-group" style={{ flexDirection: 'row', alignItems: 'center', gap: '1rem' }}>
              <label className="auth-label" style={{ marginBottom: 0 }}>Urutkan:</label>
              <select className="auth-input" style={{ padding: '0.4rem 1rem' }}>
                <option>Terbaru Ditambahkan</option>
                <option>Harga: Rendah ke Tinggi</option>
                <option>Harga: Tinggi ke Rendah</option>
              </select>
            </div>
          </div>
          
          <div className="wish-grid">
            {items.map(item => (
              <div key={item.id} className="wish-card">
                <button 
                  className="wish-remove" 
                  onClick={() => handleRemove(item.id)}
                  aria-label="Hapus dari wishlist"
                >
                  <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
                <Link href={`/koleksi/${item.id}`} className="m-product-card">
                  <div className="m-product-img">
                    <Image src={item.image} alt={item.name} fill style={{ objectFit: 'cover' }} sizes="(max-width: 768px) 50vw, 25vw" />
                  </div>
                  <h3 className="m-product-name">{item.name}</h3>
                  <p className="m-product-price">{item.price}</p>
                </Link>
                <button className="wish-add-btn">
                  Tambah ke Keranjang
                </button>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
