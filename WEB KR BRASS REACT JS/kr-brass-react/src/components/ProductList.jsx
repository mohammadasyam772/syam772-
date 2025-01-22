// src/components/ProductList.jsx
import React from 'react';
import '../styles/ProductList.css';

function ProductList() {
  const products = [
    {
      id: 1,
      name: 'Kursi Kayu Jati',
      description: 'Kursi kuat dan elegan dari kayu jati asli.',
      price: 'Rp 1.500.000',
      image: 'kursi.jpg',
    },
    {
      id: 2,
      name: 'Meja Makan Minimalis',
      description: 'Meja makan minimalis untuk ruang makan modern.',
      price: 'Rp 2.000.000',
      image: 'meja.jpg',
    },
    {
      id: 3,
      name: 'Lemari Pakaian',
      description: 'Lemari pakaian dengan desain klasik dan bahan kayu terbaik.',
      price: 'Rp 3.000.000',
      image: 'lemari.jpg',
    }
  ];

  return (
    <section className="product-list" id="products">
      <h2>Produk Kami</h2>
      <div className="products">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>{product.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProductList;
