import React from 'react';
import { motion } from 'framer-motion';
import { FiZap, FiSliders, FiSmartphone } from 'react-icons/fi';
import { BsShieldCheck } from 'react-icons/bs';

const FEATURES = [
  {
    icon: <FiZap style={{ color: '#fff', fontSize: '26px' }} />,
    title: 'Blazing Fast',
    desc: 'Super-fast downloads with optimized servers. No waiting, just instant results.',
    glow: 'rgba(249, 115, 22, 0.15)',
    borderGlow: 'rgba(249, 115, 22, 0.35)',
  },
  {
    icon: <BsShieldCheck style={{ color: '#fff', fontSize: '26px' }} />,
    title: 'Safe & Secure',
    desc: "We don't store your files. 100% secure and your privacy is our priority.",
    glow: 'rgba(236, 72, 153, 0.15)',
    borderGlow: 'rgba(236, 72, 153, 0.35)',
  },
  {
    icon: <FiSliders style={{ color: '#fff', fontSize: '26px' }} />,
    title: 'Custom Quality',
    desc: 'Choose your preferred quality from 144p to 4K and audio formats.',
    glow: 'rgba(249, 115, 22, 0.15)',
    borderGlow: 'rgba(249, 115, 22, 0.35)',
  },
  {
    icon: <FiSmartphone style={{ color: '#fff', fontSize: '26px' }} />,
    title: 'Mobile Friendly',
    desc: 'Fully responsive and works perfectly on all devices. Download on the go!',
    glow: 'rgba(236, 72, 153, 0.15)',
    borderGlow: 'rgba(236, 72, 153, 0.35)',
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
          marginBottom: '48px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div
            style={{
              width: '50px',
              height: '1px',
              background: 'linear-gradient(to left, #f97316, transparent)',
            }}
          />
          <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#f97316', boxShadow: '0 0 10px #f97316' }} />
        </div>
        <h2 style={{ fontSize: '22px', fontWeight: 800, letterSpacing: '-0.02em', color: '#fff', margin: 0 }}>
          Why Choose StreamDrop?
        </h2>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#f97316', boxShadow: '0 0 10px #f97316' }} />
          <div
            style={{
              width: '50px',
              height: '1px',
              background: 'linear-gradient(to right, #f97316, transparent)',
            }}
          />
        </div>
      </div>

      {/* Feature Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '24px',
        }}
      >
        {FEATURES.map((f, idx) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ 
              scale: 1.04, 
              y: -6,
              borderColor: f.borderGlow,
              boxShadow: `0 15px 35px ${f.glow}`,
            }}
            style={{
              display: 'flex',
              flexDirection: 'column',
              padding: '36px 28px',
              borderRadius: '24px',
              background: 'rgba(10, 10, 14, 0.65)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.06)',
              boxShadow: '0 10px 40px rgba(0, 0, 0, 0.4)',
              cursor: 'pointer',
              transition: 'border-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
            }}
          >
            {/* Glow Icon wrapper */}
            <div
              style={{
                width: '60px',
                height: '60px',
                borderRadius: '18px',
                background: 'linear-gradient(135deg, #f97316 0%, #ec4899 100%)',
                boxShadow: '0 4px 15px rgba(249, 115, 22, 0.35)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '24px',
              }}
            >
              {f.icon}
            </div>
            <h3 style={{ 
              fontSize: '18px', 
              fontWeight: 800, 
              color: '#fff', 
              margin: '0 0 10px 0', 
              letterSpacing: '-0.015em' 
            }}>
              {f.title}
            </h3>
            <p style={{ 
              fontSize: '14px', 
              lineHeight: 1.65, 
              color: 'rgba(255, 255, 255, 0.55)', 
              margin: 0 
            }}>
              {f.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
