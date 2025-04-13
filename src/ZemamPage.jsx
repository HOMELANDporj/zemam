import React from 'react';
import './ZemamPage.css';
import logo from './logo.png'; // Replace with your logo if needed

export const ZemamPage = () => {
  return (
    <div className="zemam-wrapper">
      <header className="zemam-header">
        <img src={logo} alt="Zemam Technologies Logo" className="zemam-logo" />
        <h1 className="zemam-title">Zemam Technologies</h1>
        <p className="zemam-tagline">Empowering Innovation. Engineering the Future.</p>
      </header>

      <main className="zemam-main">
        <section className="zemam-card">
          <h2>About Us</h2>
          <p>
            At Zemam Technologies, we build intelligent and scalable digital products that drive transformation. 
            We specialize in full-stack development, AI integrations, and enterprise solutions that are secure, fast, and future-ready.
          </p>
        </section>

        <section className="zemam-card">
          <h2>Contact Us</h2>
          <ul className="zemam-contact-list">
            <li><strong>Email:</strong>lemengetnetsami@gmail.com</li>
            <li><strong>Phone:</strong> +251-945400202</li>
            <li><strong>Location:</strong> Addis Ababa, Ethiopia</li>
          </ul>
        </section>
       
      </main>

      <footer className="zemam-footer">
        <p>© {new Date().getFullYear()} Zemam Technologies. All rights reserved.</p>
      </footer>
    </div>
  );
};