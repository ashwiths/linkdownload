import React from 'react';
import { motion } from 'framer-motion';

export default function Loader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.4 }}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '40px',
        marginTop: '30px',
        background: 'rgba(8, 8, 12, 0.6)',
        borderRadius: '20px',
        border: '1px solid rgba(249,115,22,0.2)',
        boxShadow: '0 0 30px rgba(0,0,0,0.5)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
      }}
    >
      <div style={{ position: 'relative', width: '60px', height: '60px' }}>
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
          style={{
            position: 'absolute',
            inset: 0,
            borderRadius: '50%',
            border: '4px solid transparent',
            borderTopColor: '#f97316',
            borderRightColor: '#ec4899',
            boxShadow: '0 0 15px rgba(249,115,22,0.5)',
          }}
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
          style={{
            position: 'absolute',
            inset: '10px',
            borderRadius: '50%',
            border: '4px solid transparent',
            borderBottomColor: '#f97316',
            borderLeftColor: '#ec4899',
          }}
        />
      </div>
      <motion.p
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        style={{
          marginTop: '20px',
          color: '#fff',
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: '16px',
          fontWeight: 500,
          letterSpacing: '1px',
        }}
      >
        Fetching formats...
      </motion.p>
    </motion.div>
  );
}
