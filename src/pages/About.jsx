import React, { useState } from 'react';
import { FaUsers, FaTrophy, FaGlobe, FaCogs, FaLightbulb, FaHandshake, FaRocket, FaHeart, FaCalendarAlt, FaAward, FaDatabase, FaCube, FaFileAlt } from 'react-icons/fa';
import './About.css';
import Footer from '../components/Footer';

const values = [
  { icon: <FaLightbulb color="#FFD700" size={32} />, title: 'Innovation', desc: 'We embrace new ideas and technologies to drive progress.' },
  { icon: <FaHandshake color="#00bfae" size={32} />, title: 'Integrity', desc: 'We act with honesty, transparency, and respect.' },
  { icon: <FaRocket color="#FFD700" size={32} />, title: 'Excellence', desc: 'We deliver high-quality solutions and exceed expectations.' },
  { icon: <FaHeart color="#00bfae" size={32} />, title: 'Passion', desc: 'We are passionate about technology and our clients’ success.' },
  { icon: <FaUsers color="#FFD700" size={32} />, title: 'Teamwork', desc: 'We collaborate effectively to achieve exceptional results together.' },
  { icon: <FaAward color="#00bfae" size={32} />, title: 'Quality', desc: 'We maintain the highest standards in everything we deliver.' },
  { icon: <FaGlobe color="#FFD700" size={32} />, title: 'Customer Focus', desc: 'Our clients’ success is at the heart of everything we do.' },
  { icon: <FaCogs color="#00bfae" size={32} />, title: 'Continuous Learning', desc: 'We stay ahead by constantly learning and adapting to new technologies.' },
];

const timeline = [
  { year: '2024, March', event: 'Zemam Technologies founded' },
  { year: '2024', event: 'First international client' },
  { year: '2024', event: '10+ projects delivered' },
  { year: '2024', event: 'Recognized for AI innovation' },
];

const stats = [
  { icon: <FaTrophy color="#FFD700" size={32} />, label: 'Projects', value: 15 },
  { icon: <FaGlobe color="#00bfae" size={32} />, label: 'Countries', value: 5 },
  { icon: <FaUsers color="#FFD700" size={32} />, label: 'Team', value: 10 },
  { icon: <FaAward color="#00bfae" size={32} />, label: 'Awards', value: 3 },
];

const About = () => {
  const [showCV, setShowCV] = useState(false);

  return (
    <section className="page-section fade-in-section">
      <h1 className="section-title"><span className="accent-bar"></span>About Us</h1>
      <hr className="section-divider" />
      {/* Mission & Vision */}
      <div className="about-mv-row">
        <div className="about-mv-card fade-in-section">
          <h2 className="section-title"><span className="accent-bar"></span>Our Mission</h2>
          <p>To empower organizations worldwide with innovative, scalable, and intelligent technology solutions that drive digital transformation and create lasting impact.</p>
        </div>
        <div className="about-mv-card fade-in-section">
          <h2 className="section-title"><span className="accent-bar"></span>Our Vision</h2>
          <p>To be a global leader in tech innovation, recognized for excellence, integrity, and a commitment to shaping the future.</p>
        </div>
      </div>
      <hr className="section-divider" />
      <div className="about-flex" style={{ cursor: 'pointer' }} onClick={() => setShowCV(true)}>
        <img src={require('../assets/founder.jpg')} alt="Samuel Getnet" className="about-ceo-img" />
        <div className="about-bio-block">
          <p>
            At Zemam Technologies, we build intelligent and scalable digital products that drive transformation. We
            specialize in full-stack development, AI integrations, and enterprise solutions that are secure, fast, and
            future-ready.
          </p>
          <div className="ceo-bio">
            <div className="ceo-name">Samuel Getnet</div>
            <div className="ceo-role">Founder & CEO</div>
            <div className="ceo-desc">Bachelor's degree in Software Engineering. Very passionate about tech and innovation.</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '8px', color: 'var(--teal)', fontSize: '0.9rem', opacity: 0.8 }}>
              <FaFileAlt size={16} />
              <span>Click to view CV</span>
            </div>
          </div>
        </div>
      </div>
      <hr className="section-divider" />
      {/* Animated Company Stats */}
      <div className="about-stats-row">
        {stats.map((s, i) => (
          <div className="about-stat-card fade-in-section" key={i} style={{ animationDelay: `${i * 0.1 + 0.1}s` }}>
            {s.icon}
            <div className="about-stat-value">{s.value}+</div>
            <div className="about-stat-label">{s.label}</div>
          </div>
        ))}
      </div>
      <hr className="section-divider" />
      {/* Core Values */}
      <h2 className="section-title"><span className="accent-bar"></span>Our Core Values</h2>
      <div className="about-values-row">
        {values.map((v, i) => (
          <div className="about-value-card fade-in-section" key={i} style={{ animationDelay: `${i * 0.1 + 0.1}s` }}>
            {v.icon}
            <div className="about-value-title">{v.title}</div>
            <div className="about-value-desc">{v.desc}</div>
          </div>
        ))}
      </div>
      <hr className="section-divider" />
      {/* Timeline */}
      <h2 className="section-title"><span className="accent-bar"></span>Our Story</h2>
      <div className="about-timeline">
        {timeline.map((t, i) => (
          <div className="about-timeline-item fade-in-section" key={i} style={{ animationDelay: `${i * 0.1 + 0.1}s` }}>
            <div className="about-timeline-dot"></div>
            <div className="about-timeline-year">{t.year}</div>
            <div className="about-timeline-event">{t.event}</div>
          </div>
        ))}
      </div>
      <hr className="section-divider" />
      
      {/* CV Modal */}
      {showCV && (
        <div className="cv-modal-overlay" onClick={() => setShowCV(false)}>
          <div className="cv-modal" onClick={e => e.stopPropagation()}>
            <button className="cv-modal-close" onClick={() => setShowCV(false)} aria-label="Close CV">&times;</button>
            <div className="cv-content">
              <img src={require('../assets/samuel.jpg')} alt="Samuel Getnet CV" className="cv-image" />
            </div>
          </div>
        </div>
      )}
      
      {/* <footer className="zemam-footer-bg">
        <img src={require('../logo.png')} alt="Zemam Technologies Logo" className="zemam-footer-bg-img" />
        <span>&copy; {new Date().getFullYear()} Zemam Technologies</span>
      </footer> */}
   
    </section>
    
  );
};

export default About; 