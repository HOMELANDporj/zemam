import React, { useState } from 'react';
import { FaProjectDiagram, FaExternalLinkAlt, FaMobile, FaGlobe, FaBrain, FaStore, FaBriefcase } from 'react-icons/fa';
import './Projects.css';

const projects = [
  { 
    title: 'Homeland Logistics', 
    desc: 'Mobile logistics platform for car owners, drivers, and users.', 
    stack: 'Flutter, Firebase', 
    link: '#',
    category: 'Mobile App',
    icon: <FaMobile color="#00bfae" size={24} />,
    image: 'https://source.unsplash.com/400x200/?mobile,logistics'
  },
  { 
    title: 'Marik Reporting', 
    desc: 'Industrial reporting app for Marik Group.', 
    stack: 'React, Node.js', 
    link: '#',
    category: 'Web App',
    icon: <FaGlobe color="#FFD700" size={24} />,
    image: 'https://source.unsplash.com/400x200/?dashboard,analytics'
  },
  { 
    title: 'Online Bus Reservation', 
    desc: 'Web booking system for bus trips.', 
    stack: 'React, Express, SQL', 
    link: '#',
    category: 'Web App',
    icon: <FaGlobe color="#00bfae" size={24} />,
    image: 'https://source.unsplash.com/400x200/?bus,booking'
  },
  { 
    title: 'Sign Language Translator', 
    desc: 'AI for Ethiopian sign language.', 
    stack: 'Python, TensorFlow', 
    link: '#',
    category: 'AI/ML',
    icon: <FaBrain color="#FFD700" size={24} />,
    image: 'https://source.unsplash.com/400x200/?ai,sign-language'
  },
  { 
    title: 'Store Management', 
    desc: 'SME inventory & sales system.', 
    stack: 'Flutter, Firebase', 
    link: '#',
    category: 'Mobile App',
    icon: <FaStore color="#00bfae" size={24} />,
    image: 'https://source.unsplash.com/400x200/?store,inventory'
  },
  { 
    title: 'Job Agency Portal', 
    desc: 'Job marketplace for employers and seekers.', 
    stack: 'React, Node.js', 
    link: '#',
    category: 'Web App',
    icon: <FaBriefcase color="#FFD700" size={24} />,
    image: 'https://source.unsplash.com/400x200/?job,portal'
  },
];

const categories = ['All', 'Mobile App', 'Web App', 'AI/ML'];

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === selectedCategory);

  return (
    <section className="page-section fade-in-section">
      <h1 className="section-title"><span className="accent-bar"></span>Our Projects</h1>
      <hr className="section-divider" />
      
      {/* Category Filter */}
      <div className="projects-filter">
        {categories.map(cat => (
          <button
            key={cat}
            className={`filter-btn ${selectedCategory === cat ? 'active' : ''}`}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>
      
      {/* Projects Grid */}
      <div className="projects-grid">
        {filteredProjects.map((p, i) => (
          <div key={i} className="project-card-enhanced fade-in-section" style={{ animationDelay: `${i * 0.1}s` }}>
            <div className="project-image-container">
              <img src={p.image} alt={p.title} className="project-image" />
              <div className="project-category">
                {p.icon}
                <span>{p.category}</span>
              </div>
            </div>
            <div className="project-content">
              <h3 className="project-title">{p.title}</h3>
              <p className="project-desc">{p.desc}</p>
              <div className="project-stack">
                <strong>Stack:</strong> {p.stack}
              </div>
              <a href={p.link} className="project-btn" target="_blank" rel="noopener noreferrer">
                View Project <FaExternalLinkAlt size={14} />
              </a>
            </div>
          </div>
        ))}
      </div>
      
      <footer className="zemam-footer-bg">
        <img src={require('../logo.png')} alt="Zemam Technologies Logo" className="zemam-footer-bg-img" />
        <span>&copy; {new Date().getFullYear()} Zemam Technologies</span>
      </footer>
    </section>
  );
};

export default Projects; 