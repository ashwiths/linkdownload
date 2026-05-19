import React from 'react';
import { motion } from 'framer-motion';
import { FiLink, FiLayers, FiSliders, FiDownloadCloud } from 'react-icons/fi';

const STEPS = [
  {
    step: '01',
    icon: <FiLink style={{ color: '#fff', fontSize: '24px' }} />,
    title: 'Paste Video Link',
    desc: 'Copy the URL of the video or audio you wish to download and paste it into the input field at the top.',
    glow: 'rgba(249, 115, 22, 0.2)',
  },
  {
    step: '02',
    icon: <FiLayers style={{ color: '#fff', fontSize: '24px' }} />,
    title: 'Choose Format',
    desc: 'Select whether you want to save the media as a Video (MP4) or extract the Audio (MP3).',
    glow: 'rgba(236, 72, 153, 0.2)',
  },
  {
    step: '03',
    icon: <FiSliders style={{ color: '#fff', fontSize: '24px' }} />,
    title: 'Select Quality',
    desc: 'Choose your desired resolution or quality, ranging from standard quality up to high-definition 4K.',
    glow: 'rgba(249, 115, 22, 0.2)',
  },
  {
    step: '04',
    icon: <FiDownloadCloud style={{ color: '#fff', fontSize: '24px' }} />,
    title: 'Download Instantly',
    desc: 'Click download and watch our high-speed servers process and deliver your file in seconds.',
    glow: 'rgba(236, 72, 153, 0.2)',
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '80px 24px',
        position: 'relative',
        zIndex: 10,
        fontFamily: "'Space Grotesk', sans-serif",
      }}
    >
      {/* Title */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '18px',
          marginBottom: '64px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div
            style={{
              width: '70px',
              height: '2px',
              background: 'linear-gradient(to left, #f97316, transparent)',
              boxShadow: '0 0 8px rgba(249, 115, 22, 0.5)',
            }}
          />
          <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#f97316', boxShadow: '0 0 12px #f97316' }} />
        </div>
        <h2 style={{ 
          fontSize: '24px', 
          fontWeight: 800, 
          letterSpacing: '-0.02em', 
          color: '#fff', 
          margin: 0,
          textShadow: '0 0 20px rgba(255,255,255,0.1)'
        }}>
          How It Works
        </h2>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#f97316', boxShadow: '0 0 12px #f97316' }} />
          <div
            style={{
              width: '70px',
              height: '2px',
              background: 'linear-gradient(to right, #f97316, transparent)',
              boxShadow: '0 0 8px rgba(249, 115, 22, 0.5)',
            }}
          />
        </div>
      </div>

      {/* Grid Container */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '24px',
          position: 'relative',
        }}
      >
        {STEPS.map((s, idx) => (
          <motion.div
            key={s.step}
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ 
              scale: 1.04, 
              y: -6,
              borderColor: idx % 2 === 0 ? 'rgba(249, 115, 22, 0.45)' : 'rgba(236, 72, 153, 0.45)',
              boxShadow: `0 15px 35px ${s.glow}`,
            }}
            style={{
              display: 'flex',
              flexDirection: 'column',
              padding: '36px 28px',
              borderRadius: '24px',
              background: 'rgba(8, 8, 12, 0.78)',
              backdropFilter: 'blur(24px)',
              WebkitBackdropFilter: 'blur(24px)',
              border: '1px solid rgba(255, 255, 255, 0.06)',
              boxShadow: '0 10px 40px rgba(0, 0, 0, 0.7)',
              cursor: 'pointer',
              position: 'relative',
              transition: 'border-color 0.3s ease, box-shadow 0.3s ease, transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
            }}
          >
            {/* Step Number in Background */}
            <div style={{
              position: 'absolute',
              top: '24px',
              right: '28px',
              fontSize: '44px',
              fontWeight: 900,
              color: 'rgba(255, 255, 255, 0.03)',
              fontFamily: "'Space Grotesk', sans-serif",
              userSelect: 'none',
            }}>
              {s.step}
            </div>

            {/* Icon Wrapper with background blur glow */}
            <div style={{ position: 'relative', marginBottom: '24px', width: '56px', height: '56px' }}>
              <div style={{
                position: 'absolute',
                top: '-3px', left: '-3px',
                width: '62px', height: '62px',
                borderRadius: '16px',
                background: idx % 2 === 0 ? 'rgba(249, 115, 22, 0.35)' : 'rgba(236, 72, 153, 0.35)',
                filter: 'blur(8px)',
                opacity: 0.7,
              }} />
              <div style={{
                position: 'relative',
                width: '56px',
                height: '56px',
                borderRadius: '14px',
                background: 'linear-gradient(135deg, #f97316 0%, #ec4899 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 4px 15px rgba(249, 115, 22, 0.3)',
              }}>
                {s.icon}
              </div>
            </div>

            {/* Content */}
            <h3 style={{
              fontSize: '18px',
              fontWeight: 800,
              color: '#fff',
              marginBottom: '10px',
              letterSpacing: '-0.015em',
            }}>
              {s.title}
            </h3>
            <p style={{
              fontSize: '14px',
              lineHeight: 1.65,
              color: 'rgba(255, 255, 255, 0.6)',
              margin: 0,
              fontFamily: "'Plus Jakarta Sans', sans-serif",
            }}>
              {s.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
