import React, { useState, useEffect } from 'react';
import './ZemamPage.css';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaTiktok, FaYoutube, FaCheckCircle, FaProjectDiagram, FaUserFriends, FaAward, FaReact, FaNodeJs, FaPython, FaDatabase, FaCloud, FaMobileAlt, FaBrain, FaServer, FaChevronUp, FaMapMarkerAlt, FaFileAlt, FaRocket, FaShieldAlt, FaLightbulb, FaHandshake, FaClock, FaUsers } from 'react-icons/fa';
import logo from '../logo.png';

const coreValues = [
  {
    icon: <FaRocket color="#00bfae" size={32} />,
    title: "Innovation First",
    description: "Cutting-edge solutions that push technological boundaries"
  },
  {
    icon: <FaShieldAlt color="#FFD700" size={32} />,
    title: "Security & Reliability",
    description: "Enterprise-grade security with 99.9% uptime guarantee"
  },
  {
    icon: <FaLightbulb color="#00bfae" size={32} />,
    title: "Creative Excellence",
    description: "Unique designs that stand out in the digital landscape"
  },
  {
    icon: <FaHandshake color="#FFD700" size={32} />,
    title: "Client Partnership",
    description: "Long-term relationships built on trust and results"
  },
  {
    icon: <FaClock color="#00bfae" size={32} />,
    title: "Fast Delivery",
    description: "Quick turnaround times without compromising quality"
  },
  {
    icon: <FaUsers color="#FFD700" size={32} />,
    title: "Expert Team",
    description: "Skilled professionals with years of industry experience"
  }
];

const projectData = [
  {
    title: 'User Homeland Logistics',
    desc: 'Mobile app for car owners, drivers & users to manage logistics services.',
    img: require('../assets/user-homeland-logistics.jpg'),
  },
  {
    title: 'Car Owner Homeland Logistics',
    desc: 'Mobile app for car owners to manage their vehicles in the logistics network.',
    img: require('../assets/car-owner-homeland-logistics.jpg'),
  },
  {
    title: 'Driver Homeland Logistics',
    desc: 'Mobile app for drivers to manage logistics operations and trips.',
    img: require('../assets/driver-homeland-logistics.jpg'),
  },
  {
    title: 'Marik Reporting',
    desc: 'Industrial reporting and analytics platform for Marik Group.',
    img: require('../assets/marik-reporting.png'),
  },
  {
    title: 'Online Bus Reservation',
    desc: 'Web platform for booking and managing bus trips with ease.',
    img: require('../assets/online-bus-reservation.png'),
  },
  {
    title: 'Ethiopian Orthodox Church Mezmur Lyrics',
    desc: 'Mobile app for Ethiopian Orthodox Church hymns and liturgical texts.',
    img: require('../assets/orthodox-mezmur-lyrics.jpg'),
  },
  {
    title: 'Digital Menu',
    desc: 'Interactive digital menu system for restaurants and food establishments.',
    img: require('../assets/digital-menu.jpg'),
  },
  {
    title: 'Dembel City Center Shop Management',
    desc: 'Vue.js-based shop management system for Dembel City Center.',
    img: require('../assets/dembel-shop-management.jpg'),
  },
];

const testimonials = [
  {
    text: 'Zemam Technologies delivered exactly what we needed — fast, secure, and scalable. Highly recommend their team!',
    author: 'A Happy Client',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    text: 
      "Zemam's AI-powered solutions are transforming industries. We have seen measurable improvements.",
    author: 'Industry Partner',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
];

export const ZemamPage = () => {
  const [theme, setTheme] = useState('dark');
  const [testimonialIdx, setTestimonialIdx] = useState(0);
  const [modalProject, setModalProject] = useState(null);
  const [showCV, setShowCV] = useState(false);
  const year = new Date().getFullYear();

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    document.body.classList.toggle('light', newTheme === 'light');
  };

  useEffect(() => {
    if (theme === 'light') {
      document.body.classList.add('light');
    } else {
      document.body.classList.remove('light');
    }
  }, [theme]);

  // Scroll to top button
  const [showScroll, setShowScroll] = useState(false);
  useEffect(() => {
    const onScroll = () => setShowScroll(window.scrollY > 200);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Testimonial carousel
  useEffect(() => {
    const timer = setTimeout(() => setTestimonialIdx((i) => (i + 1) % testimonials.length), 5000);
    return () => clearTimeout(timer);
  }, [testimonialIdx]);

  return (
    <div className={`zemam-wrapper ${theme}`}>
      <header className="zemam-header">
        <nav className="zemam-navbar" aria-label="Main Navigation">
          {/* Remove logo from navbar, will be in footer */}
          {/* <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
            {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
          </button> */}
        </nav>
        <section className="zemam-hero fade-in-section">
          <div className="hero-banner-bg">
            <img src={require('../assets/banner.jpg')} alt="Zemam Technologies Banner" className="hero-banner-img" />
          </div>
          <div className="hero-content">
            <h1 className="zemam-hero-title">Empowering Digital Transformation</h1>
            <p className="zemam-hero-subtitle">Intelligent, scalable, and secure solutions for a connected world.</p>
            <div className="hero-cta-group">
              <a href="#contact" className="zemam-cta">Get in Touch</a>
              <a href="#projects" className="zemam-cta secondary btn-outline">See Our Work</a>
            </div>
          </div>
        </section>
        <div className="core-values-bar fade-in-section">
          <div className="core-values-grid">
            {coreValues.map((value, i) => (
              <div key={i} className="core-value-item">
                <div className="value-icon">
                  {value.icon}
                </div>
                <h3 className="value-title">{value.title}</h3>
                <p className="value-description">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </header>

      <main className="zemam-main">
        <hr className="section-divider" />
        <section className="zemam-card about-section fade-in-section" aria-label="About Zemam Technologies">
          <h2 className="section-title"><span className="accent-bar"></span>About Us</h2>
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
        </section>

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
        <hr className="section-divider" />
        <section className="zemam-stats fade-in-section" aria-label="Company Stats">
          <div>
            <FaProjectDiagram color="#FFD700" size={32} style={{marginBottom: 8}} />
            <h2>+15</h2>
            <p>Completed Projects</p>
          </div>
          <div>
            <FaAward color="#00bfae" size={32} style={{marginBottom: 8}} />
            <h2>+1</h2>
            <p>Years Experience</p>
          </div>
          <div>
            <FaUserFriends color="#FFD700" size={32} style={{marginBottom: 8}} />
            <h2>+10</h2>
            <p>Clients Served</p>
          </div>
        </section>
        <hr className="section-divider" />
        <section className="tech-stack fade-in-section" aria-label="Tech Stack">
          <h2 className="section-title"><span className="accent-bar"></span>Tech Stack</h2>
          <div className="tech-icons">
            <span title="React"><FaReact color="#00bfae" size={24} style={{marginRight: 8}} />React</span>
            <span title="Firebase"><FaCloud color="#FFD700" size={24} style={{marginRight: 8}} />Firebase</span>
            <span title="TensorFlow"><FaBrain color="#00bfae" size={24} style={{marginRight: 8}} />TensorFlow</span>
            <span title="Python"><FaPython color="#FFD700" size={24} style={{marginRight: 8}} />Python</span>
            <span title="Flutter"><FaMobileAlt color="#00bfae" size={24} style={{marginRight: 8}} />Flutter</span>
            <span title="Node.js"><FaNodeJs color="#00bfae" size={24} style={{marginRight: 8}} />Node.js</span>
            <span title="SQL"><FaDatabase color="#FFD700" size={24} style={{marginRight: 8}} />SQL</span>
            <span title="Express.js"><FaServer color="#00bfae" size={24} style={{marginRight: 8}} />Express.js</span>
            <span title="API Development"><FaCheckCircle color="#FFD700" size={24} style={{marginRight: 8}} />API Development</span>
          </div>
        </section>
        <hr className="section-divider" />
        {/* Interactive Floating Projects Gallery */}
        <section className="project-section fade-in-section" id="projects" aria-label="Previous Projects">
          <h2 className="section-title"><span className="accent-bar"></span>Previous Projects</h2>
          <div className="floating-projects-gallery">
            {projectData.map((proj, idx) => (
              <div
                key={idx}
                className="floating-project-card"
                style={{ 
                  animationDelay: `${idx * 0.2}s`,
                  transform: `translateY(${idx % 2 === 0 ? '0px' : '20px'})`
                }}
                tabIndex={0}
                role="button"
                aria-label={`View details for ${proj.title}`}
                onClick={() => setModalProject(proj)}
                onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') setModalProject(proj); }}
              >
                <div className="project-card-inner">
                  <div className="project-image-wrapper">
                    <img src={proj.img} alt={proj.title + ' screenshot'} className="project-card-image" />
                    <div className="project-overlay">
                      <div className="project-overlay-content">
                        <h3 className="project-overlay-title">{proj.title}</h3>
                        <p className="project-overlay-desc">{proj.desc}</p>
                        <span className="project-overlay-btn">View Details</span>
                      </div>
                    </div>
                  </div>
                  <div className="project-card-info">
                    <h3 className="project-card-title">{proj.title}</h3>
                    <p className="project-card-desc">{proj.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
        {modalProject && (
          <div className="project-modal-overlay" onClick={() => setModalProject(null)}>
            <div className="project-modal" onClick={e => e.stopPropagation()}>
              <button className="modal-close" onClick={() => setModalProject(null)} aria-label="Close project details">&times;</button>
              <img src={modalProject.img} alt={modalProject.title + ' screenshot'} className="modal-img" />
              <h3>{modalProject.title}</h3>
              <p>{modalProject.desc}</p>
            </div>
          </div>
        )}
        <hr className="section-divider" />
        {/* Brand showcase: make logos larger, no border */}
        <div className="brand-showcase">
          <img src={require('../assets/logo.png')} alt="Zemam Logo Colored" className="brand-logo colored" />
          <img src={require('../logo.png')} alt="Zemam Logo Transparent" className="brand-logo transparent" />
        </div>
        {/* Contact section with map and reply note */}
        <section className="zemam-card contact-section fade-in-section" id="contact" aria-label="Contact Us">
          <h2 className="section-title"><span className="accent-bar"></span>Contact Us</h2>
          <ul className="zemam-contact-list">
            <li><strong>Email:</strong> lemengetnetsami@gmail.com</li>
            <li><strong>Phone:</strong> +251-933831252</li>
            <li><strong>Location:</strong> Addis Ababa, Ethiopia</li>
          </ul>
          <div className="contact-map-row">
            <div className="contact-map">
              <FaMapMarkerAlt color="#00bfae" size={28} style={{marginBottom: 8}} />
              <img src="https://maps.googleapis.com/maps/api/staticmap?center=Addis+Ababa,Ethiopia&zoom=12&size=300x120&key=AIzaSyDUMMYKEY" alt="Addis Ababa map" className="map-img" />
            </div>
            <div className="contact-reply-note">We reply within <b>1 business day</b>.</div>
          </div>

          <div className="social-media">
            <h3>Follow Us:</h3>
            <ul className="social-media-icons">
              <li>
                <a href="https://www.facebook.com/zemamtech" target="_blank" rel="noreferrer" aria-label="Facebook">
                  <FaFacebook size={32} />
                </a>
              </li>
              <li>
                <a href="https://twitter.com/zemamtech" target="_blank" rel="noreferrer" aria-label="Twitter">
                  <FaTwitter size={32} />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/company/zemamtech" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                  <FaLinkedin size={32} />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/zemamtech" target="_blank" rel="noreferrer" aria-label="Instagram">
                  <FaInstagram size={32} />
                </a>
              </li>
              <li>
                <a href="https://www.tiktok.com/@zemamtech" target="_blank" rel="noreferrer" aria-label="TikTok">
                  <FaTiktok size={32} />
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com/@zemamtech" target="_blank" rel="noreferrer" aria-label="YouTube">
                  <FaYoutube size={32} />
                </a>
              </li>
            </ul>
          </div>
        </section>
      </main>
      <footer className="zemam-footer-cover">
        <span>&copy; {year} Zemam Technologies</span>
      </footer>
    </div>
  );
}

export default ZemamPage;