import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import SupportedPlatforms from './components/SupportedPlatforms';
import WhyChoose from './components/WhyChoose';
import BottomBar from './components/BottomBar';

export default function LandingPage() {
  return (
    <div
      className="min-h-screen text-white overflow-x-hidden"
      style={{ background: '#0a0a0a', fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}
    >
      {/* ── Fixed Navbar ── */}
      <Navbar />

      {/* ── Hero (full viewport) ── */}
      <HeroSection />

      {/* ── Black bg for lower sections ── */}
      <div style={{ background: '#0a0a0a' }}>
        <SupportedPlatforms />
        <WhyChoose />
        <BottomBar />
      </div>
    </div>
  );
}
