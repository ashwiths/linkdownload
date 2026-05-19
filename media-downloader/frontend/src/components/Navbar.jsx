import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiDownload, FiSun, FiMenu, FiX } from 'react-icons/fi';
import { FaGithub } from 'react-icons/fa';

const NAV_LINKS = ['Home', 'How It Works', 'Supported', 'Features', 'FAQ'];

export default function Navbar() {
  const [active, setActive] = useState('Home');
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  const navStyle = {
    position: 'fixed',
    top: 0, left: 0, right: 0,
    zIndex: 100,
    background: scrolled ? 'rgba(10,10,10,0.95)' : 'rgba(10,10,10,0.55)',
    backdropFilter: 'blur(20px)',
    WebkitBackdropFilter: 'blur(20px)',
    borderBottom: '1px solid rgba(255,255,255,0.06)',
    transition: 'background 0.3s ease',
    fontFamily: "'Plus Jakarta Sans', sans-serif",
  };

  const innerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 32px',
    height: '64px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  };

  const logoIconStyle = {
    width: '36px', height: '36px',
    borderRadius: '10px',
    background: 'linear-gradient(135deg, #f97316 0%, #ec4899 100%)',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    boxShadow: '0 0 16px rgba(249,115,22,0.35)',
    flexShrink: 0,
  };

  return (
    <nav style={navStyle}>
      <div style={innerStyle}>

        {/* Logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={logoIconStyle}>
            <FiDownload style={{ color: '#fff', fontSize: '17px', strokeWidth: 2.5 }} />
          </div>
          <span style={{ fontSize: '20px', fontWeight: 800, letterSpacing: '-0.02em' }}>
            <span style={{ color: '#ffffff' }}>Stream</span>
            <span style={{ color: '#f97316' }}>Drop</span>
          </span>
        </div>

        {/* Center Nav — Desktop */}
        <ul style={{
          display: 'flex', alignItems: 'center', gap: '4px',
          listStyle: 'none', margin: 0, padding: 0,
        }}
          className="hidden md:flex"
        >
          {NAV_LINKS.map((link) => (
            <li key={link}>
              <button
                onClick={() => setActive(link)}
                style={{
                  position: 'relative',
                  padding: '8px 16px',
                  fontSize: '14px',
                  fontWeight: 500,
                  color: active === link ? '#ffffff' : 'rgba(255,255,255,0.55)',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  transition: 'color 0.2s',
                }}
              >
                {link}
                {active === link && (
                  <motion.div
                    layoutId="nav-ul"
                    style={{
                      position: 'absolute',
                      bottom: 0, left: '16px', right: '16px',
                      height: '2px',
                      borderRadius: '2px',
                      background: 'linear-gradient(90deg, #f97316, #ec4899)',
                    }}
                  />
                )}
              </button>
            </li>
          ))}
        </ul>

        {/* Right */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <button style={{
            padding: '8px', background: 'none', border: 'none',
            color: 'rgba(255,255,255,0.4)', cursor: 'pointer', borderRadius: '8px',
          }}>
            <FiSun style={{ fontSize: '18px' }} />
          </button>

          <motion.a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{
              display: 'flex', alignItems: 'center', gap: '8px',
              padding: '9px 20px',
              borderRadius: '999px',
              background: 'linear-gradient(135deg, #f97316 0%, #ec4899 100%)',
              color: '#fff',
              fontSize: '14px', fontWeight: 700,
              textDecoration: 'none',
              boxShadow: '0 0 20px rgba(249,115,22,0.25)',
              fontFamily: "'Plus Jakarta Sans', sans-serif",
            }}
          >
            <FaGithub style={{ fontSize: '15px' }} />
            GitHub
          </motion.a>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            style={{
              display: 'none', padding: '8px', background: 'none',
              border: 'none', color: '#fff', cursor: 'pointer',
            }}
            className="flex md:hidden"
          >
            {mobileOpen ? <FiX style={{ fontSize: '22px' }} /> : <FiMenu style={{ fontSize: '22px' }} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            style={{
              borderTop: '1px solid rgba(255,255,255,0.06)',
              padding: '8px 20px 16px',
              display: 'flex', flexDirection: 'column', gap: '4px',
            }}
          >
            {NAV_LINKS.map((link) => (
              <button
                key={link}
                onClick={() => { setActive(link); setMobileOpen(false); }}
                style={{
                  textAlign: 'left', padding: '12px 16px',
                  borderRadius: '10px', fontSize: '14px', fontWeight: 500,
                  color: active === link ? '#f97316' : 'rgba(255,255,255,0.65)',
                  background: active === link ? 'rgba(249,115,22,0.07)' : 'transparent',
                  border: 'none', cursor: 'pointer',
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                }}
              >
                {link}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
