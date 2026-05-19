import React from 'react';
import { motion } from 'framer-motion';
import { FaRocket, FaHeart } from 'react-icons/fa';
import { BsShieldCheck } from 'react-icons/bs';

const BOTTOM_FEATURES = [
  {
    icon: <FaRocket style={{ color: '#fff', fontSize: '20px' }} />,
    title: 'No Limit',
    desc: 'Download unlimited videos without any restrictions.',
    glow: 'rgba(249, 115, 22, 0.12)',
  },
  {
    icon: <BsShieldCheck style={{ color: '#fff', fontSize: '20px' }} />,
    title: 'No Registration',
    desc: 'No sign up required. Start downloading instantly.',
    glow: 'rgba(236, 72, 153, 0.12)',
  },
  {
    icon: <FaHeart style={{ color: '#fff', fontSize: '20px' }} />,
    title: '100% Free',
    desc: 'Completely free forever. No hidden charges.',
    glow: 'rgba(249, 115, 22, 0.12)',
  },
];

export default function BottomBar() {
  return (
    <section
      style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 24px 110px',
        position: 'relative',
        zIndex: 10,
        fontFamily: "'Space Grotesk', sans-serif",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
        style={{
          borderRadius: '26px',
          background: 'rgba(8, 8, 12, 0.78)',
          backdropFilter: 'blur(30px)',
          WebkitBackdropFilter: 'blur(30px)',
          border: '1px solid rgba(249, 115, 22, 0.35)',
          boxShadow: '0 20px 50px rgba(0, 0, 0, 0.8), 0 0 40px rgba(249, 115, 22, 0.1)',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          }}
        >
          {BOTTOM_FEATURES.map((f, idx) => (
            <motion.div
              key={f.title}
              whileHover={{ 
                background: 'rgba(255, 255, 255, 0.02)',
                boxShadow: `inset 0 0 20px ${f.glow}`,
              }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '24px',
                padding: '36px 40px',
                borderRight: idx < BOTTOM_FEATURES.length - 1 ? '1px solid rgba(255, 255, 255, 0.06)' : 'none',
                borderBottom: 'none',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
              }}
              className="bottom-bar-col"
            >
              {/* Icon Container */}
              <div
                style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '16px',
                  background: 'linear-gradient(135deg, #f97316 0%, #ec4899 100%)',
                  boxShadow: '0 4px 15px rgba(249, 115, 22, 0.35)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                {f.icon}
              </div>
              
              <div>
                <h4 style={{ 
                  fontSize: '17px', 
                  fontWeight: 800, 
                  color: '#fff', 
                  margin: '0 0 5px 0', 
                  letterSpacing: '-0.02em',
                  fontFamily: "'Space Grotesk', sans-serif" 
                }}>
                  {f.title}
                </h4>
                <p style={{ 
                  fontSize: '14px', 
                  color: 'rgba(255, 255, 255, 0.6)', 
                  margin: 0, 
                  lineHeight: 1.6,
                  fontFamily: "'Plus Jakarta Sans', sans-serif" 
                }}>
                  {f.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
