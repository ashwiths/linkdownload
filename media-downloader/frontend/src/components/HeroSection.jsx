import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiZap, FiLink, FiDownload } from 'react-icons/fi';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (d = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.8, delay: d, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function HeroSection() {
  const [url, setUrl] = useState('');
  const [inputFocused, setInputFocused] = useState(false);

  const handleDownload = (e) => {
    e.preventDefault();
  };

  return (
    <section style={{
      position: 'relative',
      minHeight: '105vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      padding: '120px 24px 80px',
      overflow: 'hidden',
      fontFamily: "'Plus Jakarta Sans', sans-serif",
      background: '#050507',
    }}>

      {/* ── Cinematic Eclipse Background Image ── */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: 'url(/hero-bg.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center 15%',
        backgroundRepeat: 'no-repeat',
        opacity: 0.85,
        zIndex: 0,
      }} />

      {/* ── Vignette & Depth Overlays ── */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'radial-gradient(circle at center, transparent 20%, rgba(5,5,7,0.4) 50%, rgba(5,5,7,0.95) 85%, #050507 100%)',
        zIndex: 1,
        pointerEvents: 'none',
      }} />

      {/* ── Gradient Blending Bottom ── */}
      <div style={{
        position: 'absolute',
        left: 0, right: 0, bottom: 0,
        height: '350px',
        background: 'linear-gradient(to bottom, transparent, rgba(5,5,7,0.85) 60%, #050507 100%)',
        zIndex: 1,
        pointerEvents: 'none',
      }} />

      {/* ── Floating Glow Effects ── */}
      <div 
        className="animate-float-glow-1"
        style={{
          position: 'absolute',
          top: '15%', left: '10%',
          width: '450px', height: '450px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(249,115,22,0.14) 0%, transparent 70%)',
          filter: 'blur(80px)',
          zIndex: 2,
          pointerEvents: 'none',
        }} 
      />
      <div 
        className="animate-float-glow-2"
        style={{
          position: 'absolute',
          bottom: '20%', right: '5%',
          width: '500px', height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(236,72,153,0.12) 0%, transparent 70%)',
          filter: 'blur(90px)',
          zIndex: 2,
          pointerEvents: 'none',
        }} 
      />

      {/* ── Content Container ── */}
      <div style={{
        position: 'relative',
        zIndex: 10,
        width: '100%',
        maxWidth: '820px',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}>

        {/* Badge */}
        <motion.div custom={0} initial="hidden" animate="visible" variants={fadeUp} style={{ marginBottom: '32px' }}>
          <span style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '10px',
            padding: '10px 24px',
            borderRadius: '999px',
            background: 'rgba(255,255,255,0.06)',
            border: '1px solid rgba(255,255,255,0.12)',
            boxShadow: '0 4px 20px rgba(0,0,0,0.4)',
            fontSize: '12px',
            fontWeight: 600,
            color: '#fff',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
          }}>
            <FiZap style={{ color: '#f97316', fontSize: '14px' }} />
            Fast • Secure • Unlimited
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          custom={0.08}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          style={{
            margin: 0,
            lineHeight: 1.15,
            fontWeight: 900,
            letterSpacing: '-0.03em',
            fontSize: 'clamp(2.5rem, 6.5vw, 4.2rem)',
            textShadow: '0 10px 30px rgba(0,0,0,0.5)',
          }}
        >
          <span style={{ color: '#ffffff', display: 'block' }}>
            Download Videos &amp; Audio
          </span>
          <span style={{
            display: 'inline-block',
            background: 'linear-gradient(90deg, #f97316 0%, #f43f5e 40%, #ec4899 75%, #f97316 100%)',
            backgroundSize: '200% auto',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            animation: 'shimmer 4.5s linear infinite',
            paddingBottom: '4px',
          }}>
            From Any Platform
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          custom={0.16}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          style={{
            margin: '24px 0 0',
            fontSize: '17px',
            lineHeight: 1.75,
            color: 'rgba(255,255,255,0.65)',
            maxWidth: '560px',
            textShadow: '0 2px 10px rgba(0,0,0,0.3)',
          }}
        >
          Paste the link of any video from YouTube, Instagram, TikTok,
          Facebook, and more. Download in MP4, MP3 with your preferred quality.
        </motion.p>

        {/* ── Downloader Card ── */}
        <motion.div
          custom={0.24}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          style={{ marginTop: '44px', width: '100%', maxWidth: '720px' }}
        >
          <div style={{
            borderRadius: '24px',
            padding: '24px 28px',
            background: 'rgba(10,10,13,0.72)',
            backdropFilter: 'blur(36px)',
            WebkitBackdropFilter: 'blur(36px)',
            border: '1px solid rgba(249,115,22,0.35)',
            boxShadow: '0 0 0 1px rgba(249,115,22,0.08), 0 10px 50px rgba(249,115,22,0.12), 0 30px 80px rgba(0,0,0,0.75)',
          }}>

            {/* Input Row */}
            <form onSubmit={handleDownload} style={{ display: 'flex', gap: '14px', alignItems: 'center' }}>
              <div style={{ flex: 1, position: 'relative' }}>
                <div style={{
                  position: 'absolute',
                  top: '50%', left: '18px',
                  transform: 'translateY(-50%)',
                  pointerEvents: 'none',
                  display: 'flex',
                  alignItems: 'center',
                }}>
                  <FiLink style={{ color: 'rgba(255,255,255,0.4)', fontSize: '17px' }} />
                </div>
                <input
                  type="url"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  placeholder="Paste your video link here..."
                  onFocus={() => setInputFocused(true)}
                  onBlur={() => setInputFocused(false)}
                  style={{
                    width: '100%',
                    paddingLeft: '50px',
                    paddingRight: '18px',
                    paddingTop: '17px',
                    paddingBottom: '17px',
                    borderRadius: '14px',
                    background: 'rgba(255,255,255,0.03)',
                    border: inputFocused
                      ? '1px solid rgba(249,115,22,0.7)'
                      : '1px solid rgba(255,255,255,0.08)',
                    boxShadow: inputFocused 
                      ? '0 0 20px rgba(249,115,22,0.15), inset 0 2px 4px rgba(0,0,0,0.4)' 
                      : 'inset 0 2px 4px rgba(0,0,0,0.2)',
                    color: '#fff',
                    fontSize: '15px',
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    outline: 'none',
                    transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
                    boxSizing: 'border-box',
                  }}
                />
              </div>

              {/* Submit button */}
              <motion.button
                whileHover={{ 
                  scale: 1.03, 
                  boxShadow: '0 0 32px rgba(249,115,22,0.5)',
                  background: 'linear-gradient(135deg, #f97316 0%, #ff4b91 100%)'
                }}
                whileTap={{ scale: 0.97 }}
                type="submit"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  padding: '17px 32px',
                  borderRadius: '14px',
                  background: 'linear-gradient(135deg, #f97316 0%, #ec4899 100%)',
                  border: 'none',
                  color: '#fff',
                  fontSize: '15px',
                  fontWeight: 700,
                  cursor: 'pointer',
                  whiteSpace: 'nowrap',
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  boxShadow: '0 4px 20px rgba(249,115,22,0.3)',
                  transition: 'background 0.3s ease',
                  flexShrink: 0,
                }}
              >
                Download
                <FiDownload style={{ fontSize: '16px', strokeWidth: 2.5 }} />
              </motion.button>
            </form>

            {/* Example Link */}
            <p style={{ margin: '16px 0 0', fontSize: '13px', textAlign: 'left', display: 'flex', gap: '6px' }}>
              <span style={{ color: '#f97316', fontWeight: 600 }}>Example: </span>
              <span style={{ color: 'rgba(255,255,255,0.4)', wordBreak: 'break-all' }}>
                https://www.youtube.com/watch?v=dQw4w9WgXcQ
              </span>
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
