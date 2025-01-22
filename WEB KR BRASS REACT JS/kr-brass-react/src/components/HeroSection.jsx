// src/components/HeroSection.jsx
import React from 'react';
import '../styles/HeroSection.css';

function HeroSection() {
  return (
    <section className="hero" id="hero">
      <div className="hero-content">
        <h1>Selamat Datang di Mebel Keren</h1>
        <p>Mebel berkualitas untuk rumah idaman Anda</p>
        <button>Jelajahi Produk</button>
      </div>
      <div className="hero-image">
        <img src="hero-image.jpg" alt="Mebel Keren" />
      </div>
    </section>
  );
}

export default HeroSection;
