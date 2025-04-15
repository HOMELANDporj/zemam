import React, { useState, useEffect } from 'react';
import './ZemamPage.css';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram,FaTiktok, FaYoutube } from 'react-icons/fa';  // Import react-icons
import logo from './logo.png';

export const ZemamPage = () => {
  const [theme, setTheme] = useState('dark');
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

  return (
    <div className={`zemam-wrapper ${theme}`}>
      <header className="zemam-header">
        <button className="theme-toggle" onClick={toggleTheme}>
          {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
        </button>
        <img src={logo} alt="Zemam Technologies Logo" className="zemam-logo" />
      </header>

      <main className="zemam-main">
        <section className="zemam-card">
          <h2>About Us</h2>
          <p>
            At Zemam Technologies, we build intelligent and scalable digital products that drive transformation. We
            specialize in full-stack development, AI integrations, and enterprise solutions that are secure, fast, and
            future-ready.
          </p>
        </section>

        <section className="zemam-stats">
          <div>
            <h2>+15</h2>
            <p>Completed Projects</p>
          </div>
          <div>
            <h2>+3</h2>
            <p>Years Experience</p>
          </div>
          <div>
            <h2>+10</h2>
            <p>Clients Served</p>
          </div>
        </section>

        <section className="tech-stack">
          <h2 className="project-title">Tech Stack</h2>
          <div className="tech-icons">
            <span>⚛️ React</span>
            <span>🔥 Firebase</span>
            <span>🧠 TensorFlow</span>
            <span>💡 Python</span>
            <span>📱 Flutter</span>
            <span>🌐 Node.js</span>
            <span>🗄️ SQL</span> {/* Add SQL here */}
            <span>🖥️ Express js</span> {/* Add Express here */}
            <span>🔗 API Development</span> {/* Add API Development here */}
          </div>
        </section>

        <section className="project-section">
          <h2 className="project-title">Previous Projects</h2>
          <div className="project-marquee">
            <div className="project-marquee-track">
              {[
                {
                  title: 'Homeland Logistics',
                  desc: 'Mobile app for car owners, drivers & users to manage logistics services.'
                },
                {
                  title: 'Marik landing page',
                  desc: 'A landing page for marik industrial group'
                },
                {
                  title: 'Marik reporting app',
                  desc: 'A mobile app for internal reporting system for marik industrial group'
                },
                {
                  title: 'Online Bus Reservation',
                  desc: 'Web platform for booking and managing bus trips with ease.'
                },
                {
                  title: 'Sign Language Translator',
                  desc: 'AI model translating Ethiopian sign language to readable text.'
                },
                {
                  title: 'Store Management',
                  desc: 'Inventory and sales system tailored for SMEs.'
                },
                {
                  title: 'Job Agency Portal',
                  desc: 'Web & mobile job marketplace connecting employers and job seekers.'
                },
              ].map((proj, idx) => (
                <div key={idx} className="project-card">
                  <h3>{proj.title}</h3>
                  <p>{proj.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="zemam-testimonials">
          <div className="testimonial">
            <p>
              "Zemam Technologies delivered exactly what we needed — fast, secure, and scalable. Highly recommend their
              team!"
            </p>
            <h4>— A Happy Client</h4>
          </div>
          <div className="testimonial">
            <p>
              "Zemam's AI-powered solutions are transforming industries. We have seen measurable improvements."
            </p>
            <h4>— Industry Partner</h4>
          </div>
          <div className="testimonial">
            <p>
              "Their tech team is top-notch. Highly collaborative, always ready to adapt, and proactive in finding solutions."
            </p>
            <h4>— A Long-term Client</h4>
          </div>
        </section>

        <section className="zemam-card">
          <h2>Contact Us</h2>
          <ul className="zemam-contact-list">
            <li><strong>Email:</strong> lemengetnetsami@gmail.com</li>
            <li><strong>Phone:</strong> +251-945400202</li>
            <li><strong>Location:</strong> Addis Ababa, Ethiopia</li>
          </ul>

          <div className="social-media">
            <h3>Follow Us:</h3>
            <ul className="social-media-icons">
              <li>
                <a href="https://www.facebook.com/zemamtech" target="_blank" rel="noreferrer">
                  <FaFacebook size={32} />
                </a>
              </li>
              <li>
                <a href="https://twitter.com/zemamtech" target="_blank" rel="noreferrer">
                  <FaTwitter size={32}  />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/company/zemamtech" target="_blank" rel="noreferrer">
                  <FaLinkedin size={32} />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/zemamtech" target="_blank" rel="noreferrer">
                  <FaInstagram size={32}  />
                </a>
              </li>
              <li>
                <a href="https://www.tiktok.com/@zemamtech" target="_blank" rel="noreferrer">
                  <FaTiktok size={32} />
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com/c/ZemamTech" target="_blank" rel="noreferrer">
                  <FaYoutube size={32} />
                </a>
              </li>
            </ul>
          </div>

          <form className="contact-form">
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message"></textarea>
            <button type="submit">Send Message</button>
          </form>
        </section>
      </main>

      <footer className="zemam-footer">
        <p>© {year} Zemam Technologies. All rights reserved.</p>
      </footer>

      <a href="https://t.me/Sami_Eagle" className="chat-fab" target="_blank" rel="noreferrer">
        💬
      </a>
    </div>
  );
};

export default ZemamPage;