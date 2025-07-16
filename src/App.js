import React, { useRef, useState, useEffect } from 'react';
import './App.css';
import './pages/ZemamPage.css';
import { BrowserRouter as Router, Routes, Route, NavLink, useLocation } from 'react-router-dom';
import { ZemamPage } from './pages/ZemamPage';
import logo from './logo.png';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import About from './pages/About';
import Services from './pages/Services';
import Projects from './pages/Projects';
import Careers from './pages/Careers';
import Contact from './pages/Contact';
import ErrorBoundary from './components/ErrorBoundary';
import analytics from './utils/analytics';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="main-navbar">
      <div className="nav-container">
        <NavLink to="/" end className="nav-logo" onClick={closeMenu}>
          <img src={logo} alt="Zemam Logo" />
          <span>Zemam</span>
        </NavLink>
        
        <button className="mobile-menu-btn" onClick={toggleMenu} aria-label="Toggle menu">
          <span className={`hamburger ${isMenuOpen ? 'open' : ''}`}></span>
        </button>

        <div className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
          {/* Mobile logo at the top of the menu, full width */}
          <div className="mobile-menu-logo">
            <img src={logo} alt="Zemam Logo" />
          </div>
          <NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''} onClick={closeMenu}>About</NavLink>
          <NavLink to="/services" className={({ isActive }) => isActive ? 'active' : ''} onClick={closeMenu}>Services</NavLink>
          <NavLink to="/projects" className={({ isActive }) => isActive ? 'active' : ''} onClick={closeMenu}>Projects</NavLink>
          <NavLink to="/careers" className={({ isActive }) => isActive ? 'active' : ''} onClick={closeMenu}>Careers</NavLink>
          <NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : ''} onClick={closeMenu}>Contact</NavLink>
        </div>
      </div>
    </nav>
  );
};

function AnimatedRoutes() {
  const location = useLocation();
  const nodeRef = useRef(null);
  
  // Track page views
  useEffect(() => {
    const pageName = location.pathname === '/' ? 'Home' : location.pathname.slice(1);
    analytics.trackPageView(pageName);
  }, [location]);

  return (
    <TransitionGroup component={null}>
      <CSSTransition key={location.pathname} classNames="page-fade" timeout={600} nodeRef={nodeRef}>
        <div ref={nodeRef}>
          <Routes location={location}>
            <Route path="/" element={<ZemamPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </CSSTransition>
    </TransitionGroup>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <Router>
        <Navbar />
        <div style={{marginTop: '70px'}}>
          <AnimatedRoutes />
        </div>
      </Router>
    </ErrorBoundary>
  );
}

export default App;