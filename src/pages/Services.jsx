import React, { useState } from 'react';
import { FaCogs, FaBrain, FaCloud, FaLock, FaChartLine, FaPlug, FaShoppingCart, FaUsers, FaDatabase, FaAward, FaCube } from 'react-icons/fa';
import './Services.css';

const services = [
  {
    icon: <FaCogs color="#00bfae" size={32} />, title: 'Full-Stack Development',
    desc: 'Web & mobile apps using the latest frameworks and best practices.',
    fullDesc: 'We build robust, scalable, and maintainable web and mobile applications using modern frameworks (React, Flutter, Node.js, etc.). Our team covers everything from UI/UX to backend APIs, ensuring seamless integration and a premium user experience.'
  },
  {
    icon: <FaBrain color="#FFD700" size={32} />, title: 'AI & Machine Learning',
    desc: 'Custom AI models, NLP, computer vision, and automation.',
    fullDesc: 'Our AI/ML services include custom model development, natural language processing, computer vision, and intelligent automation. We help you unlock insights and automate processes using the latest in artificial intelligence.'
  },
  {
    icon: <FaCloud color="#00bfae" size={32} />, title: 'Cloud & DevOps',
    desc: 'Cloud architecture, CI/CD, and scalable infrastructure.',
    fullDesc: 'We design and manage cloud-native architectures, set up CI/CD pipelines, and ensure your infrastructure is secure, scalable, and cost-effective. Our DevOps practices accelerate your development and deployment cycles.'
  },
  {
    icon: <FaLock color="#FFD700" size={32} />, title: 'Cybersecurity',
    desc: 'Security audits, compliance, and robust protection.',
    fullDesc: 'We provide comprehensive cybersecurity services: security audits, penetration testing, compliance consulting, and implementation of best practices to protect your data and systems from threats.'
  },
  {
    icon: <FaChartLine color="#00bfae" size={32} />, title: 'Digital Transformation',
    desc: 'Consulting and strategy for digital growth.',
    fullDesc: 'Our experts guide you through digital transformation: process automation, technology adoption, and strategic consulting to help your business thrive in the digital era.'
  },
  {
    icon: <FaPlug color="#FFD700" size={32} />, title: 'API & Integration',
    desc: 'Seamless system and third-party integrations.',
    fullDesc: 'We build and integrate APIs for internal systems and third-party services, ensuring smooth data flow and interoperability across your digital ecosystem.'
  },
  {
    icon: <FaShoppingCart color="#00bfae" size={32} />, title: 'E-commerce & SaaS',
    desc: 'Online stores and SaaS platforms built for scale.',
    fullDesc: 'We develop scalable e-commerce platforms and SaaS solutions, focusing on performance, security, and a seamless customer experience.'
  },
  {
    icon: <FaCogs color="#FFD700" size={32} />, title: 'Requirement Engineering',
    desc: 'Thorough analysis and documentation of client needs.',
    fullDesc: 'We conduct comprehensive requirement analysis, create detailed specifications, and ensure clear communication between stakeholders. Our systematic approach helps build robust solutions that meet your exact needs.'
  },
  {
    icon: <FaUsers color="#00bfae" size={32} />, title: 'Graphics Design',
    desc: 'Modern, creative, and user-centered visual design.',
    fullDesc: 'Our design team creates stunning, intuitive, and user-friendly interfaces. We focus on modern design principles, accessibility, and creating memorable brand experiences across all digital platforms.'
  },
  {
    icon: <FaDatabase color="#FFD700" size={32} />, title: 'Database Design',
    desc: 'Efficient, scalable, and secure data modeling.',
    fullDesc: 'We design and implement robust database architectures that are scalable, secure, and optimized for performance. Our expertise covers both SQL and NoSQL solutions for any business need.'
  },
  {
    icon: <FaAward color="#00bfae" size={32} />, title: 'System Architecture',
    desc: 'Designing scalable, maintainable, and high-performance systems.',
    fullDesc: 'We architect complex systems that are scalable, maintainable, and future-proof. Our architectural decisions ensure your systems can grow with your business while maintaining performance and reliability.'
  },
  {
    icon: <FaCube color="#FFD700" size={32} />, title: 'Web3 & Blockchain',
    desc: 'Building decentralized, secure, and future-ready solutions.',
    fullDesc: 'We develop cutting-edge Web3 applications, smart contracts, and blockchain solutions. Our expertise includes DeFi, NFTs, DAOs, and other decentralized technologies that are shaping the future of the web.'
  },
];

const Services = () => {
  const [modalService, setModalService] = useState(null);
  const [modalPos, setModalPos] = useState(null);

  // Helper to calculate modal position within viewport
  const getModalStyle = () => {
    if (!modalPos) return {};
    const modalWidth = 380; // px, should match or be less than max-width in CSS
    const modalHeight = 320; // px, estimate
    let left = modalPos.x;
    let top = modalPos.y;
    // Prevent overflow right
    if (left + modalWidth > window.innerWidth) left = window.innerWidth - modalWidth - 16;
    // Prevent overflow bottom
    if (top + modalHeight > window.innerHeight) top = window.innerHeight - modalHeight - 16;
    // Prevent negative
    if (left < 8) left = 8;
    if (top < 8) top = 8;
    return {
      position: 'absolute',
      left,
      top,
      zIndex: 1100,
      maxWidth: '98vw',
      width: '380px',
      boxSizing: 'border-box',
    };
  };

  const handleCardClick = (s, e) => {
    // Get click position relative to viewport
    setModalService(s);
    setModalPos({ x: e.clientX, y: e.clientY });
  };

  return (
    <section className="page-section fade-in-section">
      <h1 className="section-title"><span className="accent-bar"></span>Our Services</h1>
      <hr className="section-divider" />
      <div className="services-list">
        {services.map((s, i) => (
          <div
            key={i}
            className="project-card enhanced fade-in-section"
            style={{ alignItems: 'center', minHeight: 220, background: 'none', color: 'var(--text)', cursor: 'pointer' }}
            onClick={e => handleCardClick(s, e)}
            tabIndex={0}
            role="button"
            aria-label={`View details for ${s.title}`}
            onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') setModalService(s); }}
          >
            {s.icon}
            <h3 style={{ margin: '18px 0 8px 0', color: 'var(--teal)', fontWeight: 700, fontSize: '1.18rem' }}>{s.title}</h3>
            <p style={{ color: 'var(--text)', fontSize: '1.05rem', textAlign: 'center', opacity: 0.9 }}>{s.desc}</p>
          </div>
        ))}
      </div>
      {modalService && modalPos && (
        <div className="service-modal-overlay" onClick={() => { setModalService(null); setModalPos(null); }} style={{position:'fixed',top:0,left:0,width:'100vw',height:'100vh',zIndex:1000}}>
          <div className="service-modal" style={getModalStyle()} onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={() => { setModalService(null); setModalPos(null); }} aria-label="Close service details">&times;</button>
            <div style={{ display: 'flex', alignItems: 'center', gap: 18, marginBottom: 18 }}>
              {modalService.icon}
              <h2 style={{ margin: 0, color: 'var(--teal)' }}>{modalService.title}</h2>
            </div>
            <p style={{ fontSize: '1.13rem', color: 'var(--text)', opacity: 0.95 }}>{modalService.fullDesc}</p>
          </div>
        </div>
      )}
      <footer className="zemam-footer-bg">
        <img src={require('../logo.png')} alt="Zemam Technologies Logo" className="zemam-footer-bg-img" />
        <span>&copy; {new Date().getFullYear()} Zemam Technologies</span>
      </footer>
    </section>
  );
};

export default Services; 