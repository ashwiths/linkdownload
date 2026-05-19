import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronDown } from 'react-icons/fi';

const FAQ_ITEMS = [
  {
    q: 'Is StreamDrop free?',
    a: 'Yes, StreamDrop is completely free to use. There are no hidden fees, premium subscriptions, or limits on the number of downloads you can perform.',
  },
  {
    q: 'Which platforms are supported?',
    a: 'We support all major video sharing and social media websites, including YouTube, Instagram, TikTok, Facebook, Reddit, Vimeo, and Twitter (X).',
  },
  {
    q: 'Can I download MP3?',
    a: 'Absolutely! You can easily convert video files to high-quality audio formats (MP3) directly through our converter dashboard.',
  },
  {
    q: 'Is registration required?',
    a: 'No sign up or account creation is required to use StreamDrop. You can start downloading and converting videos instantly.',
  },
  {
    q: 'What quality formats are available?',
    a: 'We offer multiple download options depending on the source video. This ranges from standard formats (144p, 360p, 720p, 1080p Full HD) up to ultra-high-definition 4K resolutions.',
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section
      id="faq"
      style={{
        maxWidth: '850px',
        margin: '0 auto',
        padding: '80px 24px 120px',
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
          marginBottom: '56px',
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
          Frequently Asked Questions
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

      {/* Accordion Wrapper */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {FAQ_ITEMS.map((item, idx) => {
          const isOpen = openIndex === idx;
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              style={{
                borderRadius: '16px',
                background: 'rgba(8, 8, 12, 0.75)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                border: isOpen ? '1px solid rgba(249, 115, 22, 0.35)' : '1px solid rgba(255, 255, 255, 0.05)',
                boxShadow: isOpen ? '0 10px 30px rgba(249, 115, 22, 0.06)' : '0 4px 20px rgba(0,0,0,0.4)',
                overflow: 'hidden',
                transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
              }}
            >
              {/* Question Header */}
              <button
                onClick={() => toggle(idx)}
                style={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '24px 28px',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  color: '#fff',
                  textAlign: 'left',
                  outline: 'none',
                }}
              >
                <span style={{ 
                  fontSize: '16.5px', 
                  fontWeight: 700, 
                  letterSpacing: '-0.015em',
                  fontFamily: "'Space Grotesk', sans-serif" 
                }}>
                  {item.q}
                </span>
                <motion.div
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: isOpen ? '#f97316' : 'rgba(255,255,255,0.4)',
                    fontSize: '18px',
                  }}
                >
                  <FiChevronDown />
                </motion.div>
              </button>

              {/* Answer content */}
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <div style={{
                      padding: '0 28px 24px',
                      fontSize: '14.5px',
                      lineHeight: 1.7,
                      color: 'rgba(255,255,255,0.6)',
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                    }}>
                      {item.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
