import React from 'react';
import { FaBriefcase, FaRocket, FaUsers, FaLaptopCode, FaUserGraduate } from 'react-icons/fa';
import './Careers.css';

const jobs = [
  { title: 'Frontend Developer', type: 'Full-time', location: 'Remote', desc: 'React, TypeScript, UI/UX.' },
  { title: 'AI/ML Engineer', type: 'Full-time', location: 'Addis Ababa / Remote', desc: 'Python, TensorFlow, NLP.' },
  { title: 'UI/UX Designer', type: 'Contract', location: 'Remote', desc: 'Figma, Web & Mobile.' },
  { title: 'DevOps Engineer', type: 'Full-time', location: 'Remote', desc: 'AWS, Docker, CI/CD.' },
  { title: 'Intern - Software', type: 'Internship', location: 'Addis Ababa', desc: 'Recent grads, all stacks.' },
];

const Careers = () => (
  <section className="page-section fade-in-section">
    <h1 className="section-title"><span className="accent-bar"></span>Careers</h1>
    <hr className="section-divider" />
    <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 32, maxWidth: 900, margin: '0 auto'}}>
      {jobs.map((j, i) => (
        <div key={i} className="project-card enhanced fade-in-section" style={{alignItems: 'flex-start', minHeight: 180, background: 'none', color: 'var(--text)'}}>
          <h3 style={{margin: '0 0 8px 0', color: 'var(--teal)', fontWeight: 700, fontSize: '1.18rem'}}>{j.title}</h3>
          <div style={{fontSize: '0.98rem', color: 'var(--teal)', marginBottom: 8}}>{j.type} | {j.location}</div>
          <p style={{color: 'var(--text)', fontSize: '1.05rem', marginBottom: 8, opacity: 0.9}}>{j.desc}</p>
          <button className="project-btn" style={{marginTop: 'auto'}}>Apply</button>
        </div>
      ))}
    </div>
    <div style={{marginTop: 48, maxWidth: 600, marginLeft: 'auto', marginRight: 'auto'}}>
      <h2 className="section-title" style={{marginBottom: 18, marginTop: 32, fontSize: '1.3rem', color: 'var(--gold)'}}><span className="accent-bar"></span>Why Join Zemam?</h2>
      <ul style={{color: 'var(--text)', fontSize: '1.08rem', lineHeight: 1.7, marginBottom: 24}}>
        <li><FaUsers color="#00bfae" style={{marginRight: 8}} /> Diverse, global team</li>
        <li><FaLaptopCode color="#00bfae" style={{marginRight: 8}} /> Remote & flexible work</li>
        <li><FaUserGraduate color="#FFD700" style={{marginRight: 8}} /> Learning & growth opportunities</li>
        <li><FaRocket color="#FFD700" style={{marginRight: 8}} /> Work on cutting-edge tech</li>
      </ul>
      <form style={{background: 'none', borderRadius: 18, boxShadow: 'none', padding: 32, display: 'flex', flexDirection: 'column', gap: 18}}>
        <h3 style={{color: 'var(--teal)', fontWeight: 700, marginBottom: 8}}>Quick Application</h3>
        <input type="text" placeholder="Your Name" required style={{padding: 12, borderRadius: 8, border: '1px solid var(--teal)', fontSize: '1rem', background: 'none', color: 'var(--text)'}} />
        <input type="email" placeholder="Your Email" required style={{padding: 12, borderRadius: 8, border: '1px solid var(--teal)', fontSize: '1rem', background: 'none', color: 'var(--text)'}} />
        <textarea placeholder="Why do you want to join?" required style={{padding: 12, borderRadius: 8, border: '1px solid var(--gold)', fontSize: '1rem', minHeight: 60, background: 'none', color: 'var(--text)'}} />
        <button type="submit" className="project-btn">Submit</button>
      </form>
    </div>
    <footer className="zemam-footer-bg">
      <img src={require('../logo.png')} alt="Zemam Technologies Logo" className="zemam-footer-bg-img" />
      <span>&copy; {new Date().getFullYear()} Zemam Technologies</span>
    </footer>
  </section>
);

export default Careers; 