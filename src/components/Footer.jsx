import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaTiktok, FaYoutube, FaTelegram } from 'react-icons/fa';
import logo from '../assets/logo2.png';
import './Footer.css';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="shared-footer">
      <div className="footer-content">
        <div className="footer-section">
          <div className="footer-brand">
            <img src={logo} alt="Zemam Technologies Logo" className="footer-logo" />
            <span>&copy; {year} Zemam Technologies</span>
          </div>
        </div>
        <div className="footer-section">
          <h3>Follow Us:</h3>
          <ul className="social-media-icons">
            <li>
              <a href="https://t.me/Sami_Eagle" target="_blank" rel="noreferrer" aria-label="Telegram">
                <FaTelegram size={32} />
              </a>
            </li>
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
      </div>
    </footer>
  );
};

export default Footer; 