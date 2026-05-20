import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { FaHeart, FaCoffee } from 'react-icons/fa';

const SOCIAL_LINKS = [
  {
    icon: <FiGithub />,
    href: 'https://github.com/ashwiths',
    label: 'GitHub',
  },
  {
    icon: <FiLinkedin />,
    href: 'https://www.linkedin.com/in/infantashil',
    label: 'LinkedIn',
  },
  {
    icon: <FiMail />,
    href: 'mailto:infantashil@gmail.com',
    label: 'Email',
  },
];

export default function Footer() {
  return (
    <motion.footer
      id="about-us"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      style={{
        borderTop: '1px solid rgba(255,255,255,0.06)',
        background: 'rgba(2, 2, 4, 0.95)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        padding: '22px 32px',
        fontFamily: "'Space Grotesk', sans-serif",
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '16px',
        }}
      >
        {/* Left — Name + tagline */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
          <a
            href="https://www.ashil.space"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: "'Pacifico', cursive, 'Space Grotesk', sans-serif",
              fontSize: '17px',
              fontWeight: 700,
              color: '#ec4899',
              textDecoration: 'none',
              letterSpacing: '0.01em',
              transition: 'opacity 0.2s',
            }}
            onMouseEnter={e => (e.currentTarget.style.opacity = '0.8')}
            onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
          >
            Infant Ashil A
          </a>
          <span
            style={{
              fontSize: '12.5px',
              color: 'rgba(255,255,255,0.45)',
              display: 'flex',
              alignItems: 'center',
              gap: '5px',
            }}
          >
            Made with{' '}
            <FaHeart style={{ color: '#ec4899', fontSize: '11px' }} />
            {' '}and a lot of{' '}
            <FaCoffee style={{ color: '#f97316', fontSize: '11px' }} />
          </span>
        </div>

        {/* Center — Social Icons */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          {SOCIAL_LINKS.map(({ icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              whileHover={{ scale: 1.15, borderColor: 'rgba(249,115,22,0.6)' }}
              whileTap={{ scale: 0.93 }}
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '10px',
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'rgba(255,255,255,0.65)',
                fontSize: '16px',
                textDecoration: 'none',
                transition: 'color 0.2s ease',
              }}
              onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.65)')}
            >
              {icon}
            </motion.a>
          ))}
        </div>

        {/* Right — Copyright */}
        <span
          style={{
            fontSize: '12.5px',
            color: 'rgba(255,255,255,0.35)',
            letterSpacing: '0.01em',
          }}
        >
          © 2026 Infant Ashil A
        </span>
      </div>
    </motion.footer>
  );
}
