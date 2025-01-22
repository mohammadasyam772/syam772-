// src/components/Header.jsx
import React from 'react';
import '../styles/Header.css';

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src="logo.png" alt="Mebel Keren" />
      </div>
      <nav>
        <ul className="nav-list">
          <li><a href="#hero">Home</a></li>
          <li><a href="#products">Produk</a></li>
          <li><a href="#contact">Kontak</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
