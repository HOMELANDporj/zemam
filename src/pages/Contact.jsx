import React from 'react';
import ContactForm from '../components/ContactForm';
import './Contact.css';

const Contact = () => (
  <section className="page-section fade-in-section">
    <h1 className="section-title"><span className="accent-bar"></span>Contact Us</h1>
    <hr className="section-divider" />
    
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px', alignItems: 'start' }}>
      <div>
        <h2 style={{ color: 'var(--teal)', marginBottom: '24px' }}>Get in Touch</h2>
        <p style={{ fontSize: '1.1rem', lineHeight: '1.7', marginBottom: '32px', opacity: 0.9 }}>
          Ready to start your next project? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
        </p>
        
        <div style={{ marginBottom: '32px' }}>
          <h3 style={{ color: 'var(--gold)', marginBottom: '16px' }}>Contact Information</h3>
          <ul className="contact-info">
            <li><strong>Email:</strong> lemengetnetsami@gmail.com</li>
            <li><strong>Phone:</strong> +251-933831252</li>
            <li><strong>Location:</strong> Addis Ababa, Ethiopia</li>
            <li><strong>Business Hours:</strong> Mon-Fri 9:00 AM - 6:00 PM EAT</li>
          </ul>
        </div>
        
        <div>
          <h3 style={{ color: 'var(--gold)', marginBottom: '16px' }}>Why Choose Us?</h3>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li style={{ marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ color: 'var(--teal)', fontWeight: 'bold' }}>✓</span>
              Fast response time (within 24 hours)
            </li>
            <li style={{ marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ color: 'var(--teal)', fontWeight: 'bold' }}>✓</span>
              Free consultation and project estimation
            </li>
            <li style={{ marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ color: 'var(--teal)', fontWeight: 'bold' }}>✓</span>
              Transparent pricing and project timeline
            </li>
            <li style={{ marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ color: 'var(--teal)', fontWeight: 'bold' }}>✓</span>
              Ongoing support and maintenance
            </li>
          </ul>
        </div>
      </div>
      
      <div>
        <ContactForm />
      </div>
    </div>
    
    <footer className="zemam-footer-bg">
      <img src={require('../logo.png')} alt="Zemam Technologies Logo" className="zemam-footer-bg-img" />
      <span>&copy; {new Date().getFullYear()} Zemam Technologies</span>
    </footer>
  </section>
);

export default Contact;
 