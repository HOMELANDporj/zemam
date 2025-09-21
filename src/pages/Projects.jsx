import React, { useState } from 'react';
import { FaExternalLinkAlt, FaMobile, FaGlobe, FaBrain, FaStore, FaBriefcase, FaMusic, FaUtensils, FaTimes } from 'react-icons/fa';
import './Projects.css';

const projects = [
  { 
    title: 'User Homeland Logistics app', 
    desc: 'Mobile logistics platform for car owners, drivers, and users.', 
    stack: 'Flutter, Firebase', 
    link: '#',
    category: 'Mobile App',
    icon: <FaMobile color="#00bfae" size={24} />,
    image: 'user-homeland-logistics.jpg',
    fullDesc: 'A comprehensive mobile logistics platform designed for seamless coordination between car owners, drivers, and end users. Features include real-time tracking, payment integration, driver verification, and route optimization. Built with Flutter for cross-platform compatibility and Firebase for backend services including authentication, real-time database, and cloud functions.'
  },
  { 
    title: 'Car owner Homeland Logistics App', 
    desc: 'Mobile logistics platform for car owners, drivers, and users.', 
    stack: 'Flutter, Firebase', 
    link: '#',
    category: 'Mobile App',
    icon: <FaMobile color="#00bfae" size={24} />,
    image: 'car-owner-homeland-logistics.jpg',
    fullDesc: 'Specialized mobile application for car owners to manage their vehicles in the logistics network. Includes features for vehicle registration, driver assignment, earnings tracking, maintenance scheduling, and insurance management. Built with Flutter for native performance and Firebase for scalable backend infrastructure.'
  },
  { 
    title: 'Driver Homeland Logistics app', 
    desc: 'Mobile logistics platform for car owners, drivers, and users.', 
    stack: 'Flutter, Firebase', 
    link: '#',
    category: 'Mobile App',
    icon: <FaMobile color="#00bfae" size={24} />,
    image: 'driver-homeland-logistics.jpg',
    fullDesc: 'Driver-focused mobile application for logistics operations. Features include trip acceptance, navigation integration, earnings tracking, vehicle inspection checklists, and communication tools. Designed with Flutter for smooth performance and Firebase for real-time data synchronization and push notifications.'
  },
  { 
    title: 'Marik Reporting', 
    desc: 'Industrial reporting app for Marik Group.', 
    stack: 'React, Node.js', 
    link: '#',
    category: 'Web App',
    icon: <FaGlobe color="#FFD700" size={24} />,
    image: 'https://source.unsplash.com/400x200/?dashboard,analytics',
    fullDesc: 'Comprehensive industrial reporting and analytics platform for Marik Group. Features include real-time data visualization, automated report generation, KPI tracking, and executive dashboards. Built with React for responsive UI and Node.js for robust backend services with data processing capabilities.'
  },
  { 
    title: 'Online Bus Reservation', 
    desc: 'Web booking system for bus trips.', 
    stack: 'HTML, CSS, JavaScript, SQL', 
    link: '#',
    category: 'Web App',
    icon: <FaGlobe color="#00bfae" size={24} />,
    image: 'https://source.unsplash.com/400x200/?bus,booking',
    fullDesc: 'Complete web-based bus reservation system with seat selection, payment processing, and booking management. Features include user registration, route planning, ticket generation, and admin panel for bus operators. Built with vanilla web technologies for maximum compatibility and SQL for reliable data management.'
  },
  { 
    title: 'Sign Language Translator', 
    desc: 'AI for Ethiopian sign language.', 
    stack: 'Python, TensorFlow', 
    link: '#',
    category: 'AI/ML',
    icon: <FaBrain color="#FFD700" size={24} />,
    image: 'https://source.unsplash.com/400x200/?ai,sign-language',
    fullDesc: 'Innovative AI-powered sign language translation system specifically designed for Ethiopian sign language. Features include real-time hand gesture recognition, text-to-sign conversion, and educational modules. Built with Python and TensorFlow for advanced machine learning capabilities and computer vision processing.'
  },
  { 
    title: 'Store Management', 
    desc: 'SME inventory & sales system.', 
    stack: 'React, SQL', 
    link: '#',
    category: 'Web App',
    icon: <FaStore color="#00bfae" size={24} />,
    image: 'https://source.unsplash.com/400x200/?store,inventory',
    fullDesc: 'Comprehensive store management system for small and medium enterprises. Features include inventory tracking, sales analytics, customer management, supplier management, and financial reporting. Built with React for modern UI and SQL for reliable data storage and complex querying capabilities.'
  },
  { 
    title: 'Job Agency Portal', 
    desc: 'Job marketplace for employers and seekers.', 
    stack: 'Flutter, Firebase', 
    link: '#',
    category: 'Web App',
    icon: <FaBriefcase color="#FFD700" size={24} />,
    image: 'https://source.unsplash.com/400x200/?job,portal',
    fullDesc: 'Full-featured job marketplace connecting employers with job seekers. Features include job posting, application tracking, resume builder, interview scheduling, and employer verification. Built with Flutter for cross-platform compatibility and Firebase for scalable backend services and real-time notifications.'
  },
  { 
    title: 'Ethiopian Orthodox Church Mezmur Lyrics', 
    desc: 'Mobile app for Ethiopian Orthodox Church hymns and lyrics.', 
    stack: 'Flutter, Firebase', 
    link: '#',
    category: 'Mobile App',
    icon: <FaMusic color="#FFD700" size={24} />,
    image: 'https://source.unsplash.com/400x200/?church,music',
    fullDesc: 'Dedicated mobile application for Ethiopian Orthodox Church hymns and liturgical texts. Features include searchable lyrics database, audio playback, offline access, bookmarking, and liturgical calendar integration. Built with Flutter for smooth performance and Firebase for content management and user preferences.'
  },
  { 
    title: 'Digital Menu', 
    desc: 'Interactive digital menu system for restaurants.', 
    stack: 'Flutter, Firebase', 
    link: '#',
    category: 'Mobile App',
    icon: <FaUtensils color="#00bfae" size={24} />,
    image: 'https://source.unsplash.com/400x200/?restaurant,menu',
    fullDesc: 'Interactive digital menu system designed for restaurants and food establishments. Features include dynamic menu updates, allergen information, nutritional details, order integration, and multi-language support. Built with Flutter for responsive design and Firebase for real-time menu management and analytics.'
  },
  { 
    title: 'Dembel City Center Shop Management', 
    desc: 'Vue.js-based shop management system for Dembel City Center.', 
    stack: 'Vue.js, Firebase', 
    link: '#',
    category: 'Web App',
    icon: <FaStore color="#FFD700" size={24} />,
    image: 'https://source.unsplash.com/400x200/?shop,management',
    fullDesc: 'Comprehensive shop management system specifically designed for Dembel City Center retail operations. Features include inventory management, sales tracking, customer relationship management, reporting dashboards, and multi-store support. Built with Vue.js for reactive UI and Firebase for scalable backend services and real-time data synchronization.'
  },
];

const categories = ['All', 'Mobile App', 'Web App', 'AI/ML'];

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [modalProject, setModalProject] = useState(null);
  
  console.log('Projects component loaded');
  console.log('Projects data:', projects);
  
  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === selectedCategory);

  const handleProjectClick = (project) => {
    console.log('Project clicked:', project.title);
    setModalProject(project);
  };

  const closeModal = () => {
    setModalProject(null);
  };

  return (
    <section className="page-section fade-in-section">
      <h1 className="section-title"><span className="accent-bar"></span>Our Projects</h1>
      <hr className="section-divider" />
      
      <p style={{textAlign: 'center', marginBottom: '20px', color: 'var(--text)'}}>
        Total Projects: {projects.length} | Filtered: {filteredProjects.length}
      </p>
      
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
          <div 
            key={i} 
            className="project-card-enhanced fade-in-section" 
            style={{ animationDelay: `${i * 0.1}s` }}
            onClick={() => handleProjectClick(p)}
          >
            <div className="project-image-container">
              <img 
                src={p.image.startsWith('http') ? p.image : require(`../assets/${p.image}`)} 
                alt={p.title} 
                className="project-image"
                onError={(e) => {
                  console.log('Image failed to load:', p.image);
                  e.target.src = 'https://source.unsplash.com/400x200/?technology';
                }}
              />
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
              <div className="project-btn">
                View Details <FaExternalLinkAlt size={14} />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Project Modal */}
      {modalProject && (
        <div className="project-modal-overlay" onClick={closeModal}>
          <div className="project-modal" onClick={e => e.stopPropagation()}>
            <button className="project-modal-close" onClick={closeModal}>
              <FaTimes size={20} />
            </button>
            <div className="project-modal-content">
              <div className="project-modal-image-container">
                <img 
                  src={modalProject.image.startsWith('http') ? modalProject.image : require(`../assets/${modalProject.image}`)} 
                  alt={modalProject.title} 
                  className="project-modal-image"
                  onError={(e) => {
                    console.log('Modal image failed to load:', modalProject.image);
                    e.target.src = 'https://source.unsplash.com/400x200/?technology';
                  }}
                />
                <div className="project-modal-category">
                  {modalProject.icon}
                  <span>{modalProject.category}</span>
                </div>
              </div>
              <div className="project-modal-details">
                <h2 className="project-modal-title">{modalProject.title}</h2>
                <div className="project-modal-stack">
                  <strong>Technology Stack:</strong> {modalProject.stack}
                </div>
                <p className="project-modal-description">{modalProject.fullDesc}</p>
                <a href={modalProject.link} className="project-modal-btn" target="_blank" rel="noopener noreferrer">
                  View Project <FaExternalLinkAlt size={14} />
                </a>
              </div>
            </div>
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

export default Projects; 