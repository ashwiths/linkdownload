import React from 'react';
import { motion } from 'framer-motion';
import {
  FaYoutube, FaInstagram, FaTiktok, FaFacebook,
  FaRedditAlien, FaVimeoV
} from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { FiMoreHorizontal } from 'react-icons/fi';

const PLATFORMS = [
  {
    name: 'YouTube',
    icon: <FaYoutube style={{ color: '#FF0000', fontSize: '26px' }} />,
    color: '#FF0000',
    bg: 'rgba(255, 0, 0, 0.05)',
    border: 'rgba(255, 0, 0, 0.2)',
    glow: 'rgba(255, 0, 0, 0.25)',
  },
  {
    name: 'Instagram',
    icon: (
      <div
        style={{
          width: '28px',
          height: '28px',
          borderRadius: '8px',
          background: 'linear-gradient(135deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <FaInstagram style={{ color: '#fff', fontSize: '16px' }} />
      </div>
    ),
    color: '#E1306C',
    bg: 'rgba(225, 48, 108, 0.05)',
    border: 'rgba(225, 48, 108, 0.2)',
    glow: 'rgba(225, 48, 108, 0.25)',
  },
  {
    name: 'TikTok',
    icon: <FaTiktok style={{ color: '#ffffff', fontSize: '24px' }} />,
    color: '#ffffff',
    bg: 'rgba(255, 255, 255, 0.03)',
    border: 'rgba(255, 255, 255, 0.1)',
    glow: 'rgba(255, 255, 255, 0.15)',
  },
  {
    name: 'Facebook',
    icon: (
      <div
        style={{
          width: '28px',
          height: '28px',
          borderRadius: '50%',
          background: '#1877F2',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <FaFacebook style={{ color: '#fff', fontSize: '16px' }} />
      </div>
    ),
    color: '#1877F2',
    bg: 'rgba(24, 119, 242, 0.05)',
    border: 'rgba(24, 119, 242, 0.2)',
    glow: 'rgba(24, 119, 242, 0.25)',
  },
  {
    name: 'X (Twitter)',
    icon: <FaXTwitter style={{ color: '#ffffff', fontSize: '24px' }} />,
    color: '#ffffff',
    bg: 'rgba(255, 255, 255, 0.03)',
    border: 'rgba(255, 255, 255, 0.1)',
    glow: 'rgba(255, 255, 255, 0.15)',
  },
  {
    name: 'Reddit',
    icon: <FaRedditAlien style={{ color: '#FF4500', fontSize: '26px' }} />,
    color: '#FF4500',
    bg: 'rgba(255, 69, 0, 0.05)',
    border: 'rgba(255, 69, 0, 0.2)',
    glow: 'rgba(255, 69, 0, 0.25)',
  },
  {
    name: 'Vimeo',
    icon: <FaVimeoV style={{ color: '#1AB7EA', fontSize: '24px' }} />,
    color: '#1AB7EA',
    bg: 'rgba(26, 183, 234, 0.05)',
    border: 'rgba(26, 183, 234, 0.2)',
    glow: 'rgba(26, 183, 234, 0.25)',
  },
  {
    name: 'More',
    icon: <FiMoreHorizontal style={{ color: '#a1a1aa', fontSize: '26px' }} />,
    color: '#f97316',
    bg: 'rgba(255, 255, 255, 0.02)',
    border: 'rgba(255, 255, 255, 0.08)',
    glow: 'rgba(249, 115, 22, 0.2)',
  },
];

export default function SupportedPlatforms() {
  return (
    <section
      id="supported"
      style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 24px 80px',
        position: 'relative',
        zIndex: 10,
        fontFamily: "'Space Grotesk', sans-serif",
      }}
    >
      {/* Section Divider Line & Heading */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '16px',
          marginBottom: '48px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div
            style={{
              width: '60px',
              height: '1px',
              background: 'linear-gradient(to left, #f97316, transparent)',
            }}
          />
          <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#f97316', boxShadow: '0 0 10px #f97316' }} />
        </div>
        <h2 style={{ fontSize: '23px', fontWeight: 700, letterSpacing: '-0.02em', color: '#fff', margin: 0 }}>
          Supported Platforms
        </h2>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#f97316', boxShadow: '0 0 10px #f97316' }} />
          <div
            style={{
              width: '60px',
              height: '1px',
              background: 'linear-gradient(to right, #f97316, transparent)',
            }}
          />
        </div>
      </div>

      {/* Grid Layout */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
          gap: '20px',
        }}
      >
        {PLATFORMS.map((p, idx) => (
          <motion.div
            key={p.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.05, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ 
              scale: 1.08, 
              y: -6,
              boxShadow: `0 15px 30px ${p.glow}`,
              borderColor: p.color,
              background: 'rgba(10, 10, 15, 0.9)',
            }}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '30px 18px',
              borderRadius: '20px',
              background: 'rgba(8, 8, 12, 0.7)',
              backdropFilter: 'blur(16px)',
              WebkitBackdropFilter: 'blur(16px)',
              border: `1px solid ${p.border}`,
              cursor: 'pointer',
              boxShadow: '0 10px 30px rgba(0,0,0,0.6)',
              transition: 'border-color 0.25s ease, box-shadow 0.25s ease, background 0.25s ease',
            }}
          >
            <div
              style={{
                height: '44px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '16px',
              }}
            >
              {p.icon}
            </div>
            <span style={{ 
              fontSize: '13.5px', 
              fontWeight: 600, 
              color: 'rgba(255, 255, 255, 0.9)', 
              letterSpacing: '-0.01em',
              fontFamily: "'Space Grotesk', sans-serif" 
            }}>
              {p.name}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
