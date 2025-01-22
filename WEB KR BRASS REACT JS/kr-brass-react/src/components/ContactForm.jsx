// src/components/ContactForm.jsx
import React, { useState } from 'react';
import '../styles/ContactForm.css';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
    // Di sini kamu bisa tambahkan logika untuk mengirim data form ke server atau API
  };

  return (
    <section className="contact-form" id="contact">
      <h2>Hubungi Kami</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Nama:
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </label>
        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </label>
        <label>
          Pesan:
          <textarea name="message" value={formData.message} onChange={handleChange} required></textarea>
        </label>
        <button type="submit">Kirim Pesan</button>
      </form>
    </section>
  );
}

export default ContactForm;
