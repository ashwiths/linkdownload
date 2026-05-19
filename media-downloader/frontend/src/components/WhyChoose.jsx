import React from 'react';
import { motion } from 'framer-motion';
import { FiZap, FiSliders, FiSmartphone } from 'react-icons/fi';
import { BsShieldCheck } from 'react-icons/bs';

const FEATURES = [
  {
    icon: <FiZap style={{ color: '#f97316', fontSize: '24px' }} />,
    title: 'Blazing Fast',
    desc: 'Super-fast downloads with optimized servers. No waiting, just instant results.',
  },
  {
    icon: <BsShieldCheck style={{ color: '#f97316', fontSize: '24px' }} />,
    title: 'Safe & Secure',
    desc: "We don't store your files. 100% secure and your privacy is our priority.",
  },
  {
    icon: <FiSliders style={{ color: '#f97316', fontSize: '24px' }} />,
    title: 'Custom Quality',
    desc: 'Choose your preferred quality from 144p to 4K and audio formats.',
  },
  {
    icon: <FiSmartphone style={{ color: '#f97316', fontSize: '24px' }} />,
    title: 'Mobile Friendly',
    desc: 'Fully responsive and works perfectly on all devices. Download on the go!',
  },
];

export default function WhyChoose() {
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
          Why Choose StreamDrop?
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

      {/* Feature cards */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '20px',
        }}
      >
        {FEATURES.map((f, idx) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.08 }}
            whileHover={{ scale: 1.03, y: -4 }}
            style={{
              display: 'flex',
              flexDirection: 'column',
              padding: '30px 24px',
              borderRadius: '24px',
              background: 'rgba(15, 15, 20, 0.55)',
              backdropFilter: 'blur(16px)',
              WebkitBackdropFilter: 'blur(16px)',
              border: '1px solid rgba(255, 255, 255, 0.06)',
              boxShadow: '0 4px 30px rgba(0, 0, 0, 0.25)',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
            }}
          >
            <div
              style={{
                width: '56px',
                height: '56px',
                borderRadius: '16px',
                background: 'rgba(249, 115, 22, 0.08)',
                border: '1px solid rgba(249, 115, 22, 0.18)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '20px',
              }}
            >
              {f.icon}
            </div>
            <h3 style={{ fontSize: '17px', fontWeight: 700, color: '#fff', margin: '0 0 8px 0', letterSpacing: '-0.01em' }}>
              {f.title}
            </h3>
            <p style={{ fontSize: '14px', lineHeight: 1.6, color: 'rgba(255, 255, 255, 0.5)', margin: 0 }}>
              {f.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
