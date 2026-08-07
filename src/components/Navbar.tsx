"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Halaman yang memiliki background hero gelap di atas sehingga butuh navbar transparan
  const isTransparentPage = pathname === '/' || pathname === '/lookbook' || pathname === '/about' || pathname === '/category';
  

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div className="announcement-bar">
        ✨ Gratis Ongkir ke Seluruh Indonesia untuk pembelanjaan di atas Rp 300.000 ✨
      </div>
      <nav className={`navbar ${isTransparentPage ? 'navbar-hero' : 'navbar-solid'} ${scrolled ? 'scrolled' : ''}`}>
        <div className="container navbar-content">
          <Link href="/" className="nav-logo">
            ANSANIA
          </Link>
          <div className="nav-links">
            <Link href="/products">KOLEKSI PRODUK</Link>
            <Link href="/category" className="nav-link-dropdown">KATEGORI <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polyline points="6 9 12 15 18 9"></polyline></svg></Link>
            <Link href="/lookbook" className="nav-link-dropdown">KOLEKSI <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polyline points="6 9 12 15 18 9"></polyline></svg></Link>
            <Link href="/promos">FLASH SALE</Link>
            <Link href="/about">TENTANG ANSANIA</Link>
          </div>
          <div className="nav-actions">
            <button className="btn-search" aria-label="Search">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
            </button>
            <Link href="/wishlist" className="btn-icon icon-wrapper" aria-label="Wishlist">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
            </Link>
            <Link href="/cart" className="btn-icon icon-wrapper" aria-label="Cart">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>
              <span className="badge-dot"></span>
            </Link>
            <div className="nav-lang">
              <span className="lang-active">ID ID</span>
              <span className="lang-inactive">US EN</span>
            </div>
            <Link href="/profile" className="btn-icon" aria-label="Account">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
