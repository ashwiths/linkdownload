import React from 'react';
import { motion } from 'framer-motion';
import { FaRocket, FaHeart } from 'react-icons/fa';
import { BsShieldCheck } from 'react-icons/bs';

const BOTTOM_FEATURES = [
  {
    icon: <FaRocket style={{ color: '#f97316', fontSize: '18px' }} />,
    title: 'No Limit',
    desc: 'Download unlimited videos without any restrictions.',
  },
  {
    icon: <BsShieldCheck style={{ color: '#f97316', fontSize: '18px' }} />,
    title: 'No Registration',
    desc: 'No sign up required. Start downloading instantly.',
  },
  {
    icon: <FaHeart style={{ color: '#ec4899', fontSize: '18px' }} />,
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
        padding: '0 24px 80px',
        position: 'relative',
        zIndex: 10,
        fontFamily: "'Plus Jakarta Sans', sans-serif",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={{
          borderRadius: '24px',
          background: 'rgba(15, 15, 20, 0.6)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          border: '1px solid rgba(249, 115, 22, 0.25)',
          boxShadow: '0 0 30px rgba(249, 115, 22, 0.08)',
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
                gap: '16px',
                padding: '24px 28px',
                borderRight: idx < BOTTOM_FEATURES.length - 1 ? '1px solid rgba(255, 255, 255, 0.06)' : 'none',
                borderBottom: 'none',
              }}
              className="bottom-bar-col"
            >
              <div
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '12px',
                  background: 'rgba(249, 115, 22, 0.08)',
                  border: '1px solid rgba(249, 115, 22, 0.18)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                {f.icon}
              </div>
              <div>
                <h4 style={{ fontSize: '15px', fontWeight: 700, color: '#fff', margin: '0 0 4px 0' }}>
                  {f.title}
                </h4>
                <p style={{ fontSize: '13px', color: 'rgba(255, 255, 255, 0.45)', margin: 0, lineHeight: 1.5 }}>
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
