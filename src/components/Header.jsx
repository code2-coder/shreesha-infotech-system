import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HiMenuAlt3, HiX, HiShieldCheck } from 'react-icons/hi';
import './Header.css';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="header">
      <div className="container header-container">
        <Link to="/" className="brand" style={{ display: 'flex', alignItems: 'center' }} onClick={closeMenu}>
          <img src="/logo.png" alt="Shreesha Infotech" style={{ height: '50px', marginRight: '10px' }} />
          <span className="brand-text">SHREESHA <span className="brand-highlight">INFOTECH</span></span>
        </Link>
        <nav className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`} onClick={closeMenu}>Home</Link>
          <Link to="/about" className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`} onClick={closeMenu}>About</Link>
          <Link to="/services" className={`nav-link ${location.pathname === '/services' ? 'active' : ''}`} onClick={closeMenu}>Services</Link>
          <Link to="/quote" className={`nav-link ${location.pathname === '/quote' ? 'active' : ''}`} onClick={closeMenu}>Contact</Link>
          <Link to="/quote" className="btn btn-primary ml-2" onClick={closeMenu}>Get a Quote</Link>
        </nav>
        <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle menu">
          {isOpen ? <HiX size={28} /> : <HiMenuAlt3 size={28} />}
        </button>
      </div>
    </header>
  );
};

export default Header;
