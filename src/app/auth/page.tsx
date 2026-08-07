'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function AuthPage() {
  const [activeTab, setActiveTab] = useState<'masuk' | 'daftar'>('masuk');

  return (
    <div className="auth-split">
      <div className="auth-left">
        <Image 
          src="https://images.unsplash.com/photo-1596455607563-ad6193f76b17?q=80&w=2000&auto=format&fit=crop" 
          alt="Hijab Model" 
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
        <div className="auth-overlay">
          <h2>Selamat Datang<br/>di Ansania</h2>
        </div>
      </div>
      
      <div className="auth-right">
        <div className="auth-form-container">
          <div className="auth-tabs">
            <button 
              className={`auth-tab ${activeTab === 'masuk' ? 'active' : ''}`}
              onClick={() => setActiveTab('masuk')}
            >
              Masuk
            </button>
            <button 
              className={`auth-tab ${activeTab === 'daftar' ? 'active' : ''}`}
              onClick={() => setActiveTab('daftar')}
            >
              Daftar
            </button>
          </div>

          {activeTab === 'masuk' ? (
            <form className="auth-form" onSubmit={(e) => e.preventDefault()}>
              <div className="auth-input-group">
                <label className="auth-label">Email</label>
                <input type="email" className="auth-input" placeholder="Masukkan email" />
              </div>
              <div className="auth-input-group">
                <label className="auth-label">Password</label>
                <input type="password" className="auth-input" placeholder="Masukkan password" />
              </div>
              <Link href="#" className="auth-forgot">Lupa password?</Link>
              <button type="submit" className="auth-btn">Masuk</button>
            </form>
          ) : (
            <form className="auth-form" onSubmit={(e) => e.preventDefault()}>
              <div className="auth-input-group">
                <label className="auth-label">Nama Lengkap</label>
                <input type="text" className="auth-input" placeholder="Masukkan nama" />
              </div>
              <div className="auth-input-group">
                <label className="auth-label">Email</label>
                <input type="email" className="auth-input" placeholder="Masukkan email" />
              </div>
              <div className="auth-input-group">
                <label className="auth-label">Password</label>
                <input type="password" className="auth-input" placeholder="Buat password" />
              </div>
              <div className="auth-input-group">
                <label className="auth-label">Konfirmasi Password</label>
                <input type="password" className="auth-input" placeholder="Ulangi password" />
              </div>
              <button type="submit" className="auth-btn">Daftar</button>
            </form>
          )}

          <div className="auth-divider">atau lanjutkan dengan</div>

          <div className="auth-social">
            <button className="auth-social-btn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.16v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.16C1.43 8.55 1 10.22 1 12s.43 3.45 1.16 4.93l3.68-2.84z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.16 7.07l3.68 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              Google
            </button>
            <button className="auth-social-btn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="black" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.05 2.2.68 2.74.68.54 0 1.3-.63 2.74-.68 1.45-.05 2.62.43 3.3 1.22-3.8 2.22-3.12 7.18.66 8.58-.76 1.37-1.63 2.5-2.44 3.17zm-3.64-13.6c-.23-1.74 1.2-3.38 2.92-3.68.3 1.83-1.4 3.44-2.92 3.68z"/>
              </svg>
              Apple
            </button>
          </div>

          <div className="auth-footer">
            Dengan mendaftar, Anda menyetujui <Link href="#">Syarat &amp; Ketentuan</Link> dan <Link href="#">Kebijakan Privasi</Link> kami.
          </div>
        </div>
      </div>
    </div>
  );
}
