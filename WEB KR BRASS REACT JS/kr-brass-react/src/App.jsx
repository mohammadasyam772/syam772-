// src/App.jsx
import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ProductList from './components/ProductList';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="container">
      <Header />
      <HeroSection />
      <ProductList />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
