import React from 'react';
import { motion } from 'framer-motion';
import { FaRocket, FaHeart } from 'react-icons/fa';
import { BsShieldCheck } from 'react-icons/bs';

const BOTTOM_FEATURES = [
  {
    icon: <FaRocket style={{ color: '#fff', fontSize: '18px' }} />,
    title: 'No Limit',
    desc: 'Download unlimited videos without any restrictions.',
  },
  {
    icon: <BsShieldCheck style={{ color: '#fff', fontSize: '18px' }} />,
    title: 'No Registration',
    desc: 'No sign up required. Start downloading instantly.',
  },
  {
    icon: <FaHeart style={{ color: '#fff', fontSize: '18px' }} />,
    title: '100% Free',
    desc: 'Completely free forever. No hidden charges.',
  },
];

export default function BottomBar() {
  return (
    <section
      style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 24px 100px',
        position: 'relative',
        zIndex: 10,
        fontFamily: "'Plus Jakarta Sans', sans-serif",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
        style={{
          borderRadius: '24px',
          background: 'rgba(10, 10, 14, 0.6)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          border: '1px solid rgba(249, 115, 22, 0.3)',
          boxShadow: '0 10px 40px rgba(0, 0, 0, 0.4), 0 0 35px rgba(249, 115, 22, 0.08)',
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
            <div
              key={f.title}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '20px',
                padding: '32px 36px',
                borderRight: idx < BOTTOM_FEATURES.length - 1 ? '1px solid rgba(255, 255, 255, 0.08)' : 'none',
                borderBottom: 'none',
              }}
              className="bottom-bar-col"
            >
              <div
                style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: '14px',
                  background: 'linear-gradient(135deg, #f97316 0%, #ec4899 100%)',
                  boxShadow: '0 4px 12px rgba(249, 115, 22, 0.25)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                {f.icon}
              </div>
              <div>
                <h4 style={{ fontSize: '16px', fontWeight: 800, color: '#fff', margin: '0 0 4px 0', letterSpacing: '-0.015em' }}>
                  {f.title}
                </h4>
                <p style={{ fontSize: '13.5px', color: 'rgba(255, 255, 255, 0.55)', margin: 0, lineHeight: 1.55 }}>
                  {f.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
