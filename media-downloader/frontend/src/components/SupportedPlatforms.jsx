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
    icon: <FaYoutube style={{ color: '#FF0000', fontSize: '24px' }} />,
    bg: 'rgba(255, 0, 0, 0.05)',
    border: 'rgba(255, 0, 0, 0.15)',
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
        <FaInstagram style={{ color: '#white', fontSize: '16px' }} />
      </div>
    ),
    bg: 'rgba(225, 48, 108, 0.05)',
    border: 'rgba(225, 48, 108, 0.15)',
  },
  {
    name: 'TikTok',
    icon: <FaTiktok style={{ color: '#ffffff', fontSize: '22px' }} />,
    bg: 'rgba(255, 255, 255, 0.03)',
    border: 'rgba(255, 255, 255, 0.08)',
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
    bg: 'rgba(24, 119, 242, 0.05)',
    border: 'rgba(24, 119, 242, 0.15)',
  },
  {
    name: 'X (Twitter)',
    icon: <FaXTwitter style={{ color: '#ffffff', fontSize: '22px' }} />,
    bg: 'rgba(255, 255, 255, 0.03)',
    border: 'rgba(255, 255, 255, 0.08)',
  },
  {
    name: 'Reddit',
    icon: <FaRedditAlien style={{ color: '#FF4500', fontSize: '24px' }} />,
    bg: 'rgba(255, 69, 0, 0.05)',
    border: 'rgba(255, 69, 0, 0.15)',
  },
  {
    name: 'Vimeo',
    icon: <FaVimeoV style={{ color: '#1AB7EA', fontSize: '22px' }} />,
    bg: 'rgba(26, 183, 234, 0.05)',
    border: 'rgba(26, 183, 234, 0.15)',
  },
  {
    name: 'More',
    icon: <FiMoreHorizontal style={{ color: '#a1a1aa', fontSize: '24px' }} />,
    bg: 'rgba(255, 255, 255, 0.02)',
    border: 'rgba(255, 255, 255, 0.06)',
  },
];

export default function SupportedPlatforms() {
  return (
    <section
      style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 24px 80px',
        position: 'relative',
        zIndex: 10,
        fontFamily: "'Plus Jakarta Sans', sans-serif",
      }}
    >
      {/* Heading */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '16px',
          marginBottom: '40px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <div
            style={{
              width: '40px',
              height: '1px',
              background: 'linear-gradient(to left, #f97316, transparent)',
            }}
          />
          <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#f97316' }} />
        </div>
        <h2 style={{ fontSize: '20px', fontWeight: 700, letterSpacing: '-0.02em', color: '#fff', margin: 0 }}>
          Supported Platforms
        </h2>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#f97316' }} />
          <div
            style={{
              width: '40px',
              height: '1px',
              background: 'linear-gradient(to right, #f97316, transparent)',
            }}
          />
        </div>
      </div>

      {/* Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(110px, 1fr))',
          gap: '16px',
        }}
      >
        {PLATFORMS.map((p, idx) => (
          <motion.div
            key={p.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.05 }}
            whileHover={{ scale: 1.05, y: -4 }}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '24px 16px',
              borderRadius: '16px',
              background: p.bg,
              border: `1px solid ${p.border}`,
              cursor: 'pointer',
              boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
              transition: 'all 0.2s ease',
            }}
          >
            <div
              style={{
                height: '40px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '12px',
              }}
            >
              {p.icon}
            </div>
            <span style={{ fontSize: '13px', fontWeight: 500, color: 'rgba(255, 255, 255, 0.8)' }}>
              {p.name}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
