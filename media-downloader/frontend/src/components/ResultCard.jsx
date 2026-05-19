import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiClock, FiUser, FiDownload, FiMusic, FiVideo } from 'react-icons/fi';

export default function ResultCard({ videoInfo }) {
  const [selectedFormat, setSelectedFormat] = useState(null);

  if (!videoInfo) return null;

  const { title, thumbnail, duration, uploader, formats = [] } = videoInfo;

  // For demonstration, let's group formats if they are provided,
  // or use the exact requested buttons if we need to filter them.
  // Assuming 'formats' contains an array with 'resolution', 'ext', etc.
  
  // We will simulate the requested format buttons by filtering or just providing the UI 
  // as per requirement: 360p, 720p, 1080p, MP3 Audio.
  
  const requestedQualities = ['360p', '720p', '1080p'];
  
  const handleFormatSelect = (fmt) => {
    setSelectedFormat(fmt);
  };

  const handleDownload = () => {
    if (selectedFormat && selectedFormat.url) {
      window.open(selectedFormat.url, '_blank');
    } else {
      alert("Please select a format to download or format URL is unavailable.");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      style={{
        marginTop: '30px',
        width: '100%',
        maxWidth: '820px',
        background: 'rgba(10, 10, 15, 0.85)',
        borderRadius: '24px',
        border: '1px solid rgba(236,72,153,0.3)',
        boxShadow: '0 20px 50px rgba(0,0,0,0.8), 0 0 30px rgba(236,72,153,0.15)',
        backdropFilter: 'blur(30px)',
        WebkitBackdropFilter: 'blur(30px)',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
        {/* Thumbnail Section */}
        <div style={{
          flex: '1 1 300px',
          position: 'relative',
          padding: '20px',
        }}>
          <div style={{
            position: 'relative',
            width: '100%',
            aspectRatio: '16/9',
            borderRadius: '16px',
            overflow: 'hidden',
            boxShadow: '0 10px 30px rgba(0,0,0,0.5)'
          }}>
            <img 
              src={thumbnail || 'https://via.placeholder.com/640x360?text=No+Thumbnail'} 
              alt={title || "Video Thumbnail"} 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
            {/* Duration Badge */}
            <div style={{
              position: 'absolute',
              bottom: '10px', right: '10px',
              background: 'rgba(0,0,0,0.7)',
              color: '#fff',
              padding: '4px 8px',
              borderRadius: '8px',
              fontSize: '12px',
              fontWeight: 600,
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              backdropFilter: 'blur(4px)',
            }}>
              <FiClock /> {duration || '0:00'}
            </div>
          </div>
        </div>

        {/* Info & Formats Section */}
        <div style={{
          flex: '2 1 400px',
          padding: '20px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}>
          <h2 style={{
            margin: '0 0 10px 0',
            fontSize: '22px',
            color: '#fff',
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 700,
            lineHeight: 1.3,
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
          }}>
            {title || 'Unknown Title'}
          </h2>
          
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            color: 'rgba(255,255,255,0.6)',
            fontSize: '14px',
            marginBottom: '20px',
            fontFamily: "'Plus Jakarta Sans', sans-serif",
          }}>
            <FiUser style={{ color: '#f97316' }} />
            <span>{uploader || 'Unknown Uploader'}</span>
          </div>

          {/* Format Buttons */}
          <div style={{ marginBottom: '20px' }}>
            <h3 style={{ fontSize: '14px', color: '#fff', marginBottom: '12px', opacity: 0.8 }}>Available Qualities</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
              
              {/* If real formats exist, map them. Otherwise show requested ones as mock/placeholders or try to match them */}
              {requestedQualities.map((q) => {
                const isSelected = selectedFormat?.label === q;
                return (
                  <motion.button
                    key={q}
                    whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(249,115,22,0.4)' }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleFormatSelect({ label: q, type: 'video' })}
                    style={{
                      padding: '8px 16px',
                      borderRadius: '12px',
                      background: isSelected ? 'linear-gradient(135deg, #f97316 0%, #ec4899 100%)' : 'rgba(255,255,255,0.05)',
                      border: isSelected ? '1px solid transparent' : '1px solid rgba(255,255,255,0.1)',
                      color: isSelected ? '#fff' : 'rgba(255,255,255,0.8)',
                      fontSize: '14px',
                      fontWeight: 600,
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      transition: 'all 0.3s ease',
                    }}
                  >
                    <FiVideo /> {q}
                  </motion.button>
                );
              })}

              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(236,72,153,0.4)' }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleFormatSelect({ label: 'MP3 Audio', type: 'audio' })}
                style={{
                  padding: '8px 16px',
                  borderRadius: '12px',
                  background: selectedFormat?.label === 'MP3 Audio' ? 'linear-gradient(135deg, #ec4899 0%, #8b5cf6 100%)' : 'rgba(255,255,255,0.05)',
                  border: selectedFormat?.label === 'MP3 Audio' ? '1px solid transparent' : '1px solid rgba(255,255,255,0.1)',
                  color: selectedFormat?.label === 'MP3 Audio' ? '#fff' : 'rgba(255,255,255,0.8)',
                  fontSize: '14px',
                  fontWeight: 600,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  transition: 'all 0.3s ease',
                }}
              >
                <FiMusic /> MP3 Audio
              </motion.button>
            </div>
          </div>

          {/* Action Button */}
          <motion.button
            whileHover={{ scale: 1.02, boxShadow: '0 0 20px rgba(249,115,22,0.4)' }}
            whileTap={{ scale: 0.98 }}
            onClick={handleDownload}
            disabled={!selectedFormat}
            style={{
              width: '100%',
              padding: '16px',
              borderRadius: '14px',
              background: selectedFormat ? 'linear-gradient(135deg, #f97316 0%, #ec4899 100%)' : 'rgba(255,255,255,0.1)',
              border: 'none',
              color: selectedFormat ? '#fff' : 'rgba(255,255,255,0.4)',
              fontSize: '16px',
              fontWeight: 700,
              cursor: selectedFormat ? 'pointer' : 'not-allowed',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              fontFamily: "'Space Grotesk', sans-serif",
              transition: 'all 0.3s ease',
            }}
          >
            <FiDownload style={{ fontSize: '18px' }} />
            {selectedFormat ? `Download ${selectedFormat.label}` : 'Select a format'}
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}
