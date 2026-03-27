'use client';

import { motion } from 'framer-motion';
import TpsCounter from './TpsCounter';

export default function HeroSection() {
  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        width: '100%',
        minHeight: '100dvh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1,
        padding: '120px var(--sp-4) var(--sp-10)',
        textAlign: 'center',
      }}
    >
      {/* Eyebrow Pill */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, delay: 0.2 }}
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          background: 'var(--accent-fill-10)',
          border: '1px solid rgba(43, 92, 230, 0.20)',
          backdropFilter: 'blur(8px)',
          WebkitBackdropFilter: 'blur(8px)',
          padding: '6px 16px 6px 10px',
          borderRadius: 'var(--r-full)',
          marginBottom: 'var(--sp-5)',
        }}
      >
        <span className="live-dot" />
        <span
          style={{
            fontFamily: 'var(--font-label)',
            fontSize: '12px',
            fontWeight: 500,
            color: 'var(--text-secondary)',
          }}
        >
          Next-generation parallel inference · Active
        </span>
      </motion.div>

      {/* Headline */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        style={{
          fontFamily: 'var(--font-body)',
          fontSize: 'clamp(56px, 7vw, 96px)',
          fontWeight: 700,
          lineHeight: 1.0,
          letterSpacing: '-3px',
          color: 'var(--text-primary)',
          margin: '0 0 var(--sp-1) 0',
        }}
      >
        <span
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 'clamp(64px, 8vw, 108px)',
            fontWeight: 300,
            letterSpacing: '-4px',
            background: 'linear-gradient(135deg, var(--accent) 0%, var(--accent-soft) 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          100,000
        </span>{' '}
        Tokens
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
        style={{
          fontFamily: 'var(--font-body)',
          fontSize: 'clamp(48px, 6vw, 96px)',
          fontWeight: 300,
          lineHeight: 1.0,
          letterSpacing: '-3px',
          color: 'var(--text-secondary)',
          margin: '0 0 var(--sp-5) 0',
        }}
      >
        Per Second
        <span style={{ color: 'var(--accent)', fontWeight: 700 }}>.</span>
      </motion.p>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        style={{
          fontFamily: 'var(--font-body)',
          fontSize: '19px',
          fontWeight: 400,
          color: 'var(--text-tertiary)',
          lineHeight: 1.6,
          maxWidth: '520px',
          margin: '0 0 var(--sp-5) 0',
        }}
      >
        Three expert models in parallel. One architecture. Zero bottlenecks.
      </motion.p>

      {/* CTA Row */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 1.1 }}
        style={{ display: 'flex', gap: 'var(--sp-2)', marginBottom: 'var(--sp-8)', flexWrap: 'wrap', justifyContent: 'center' }}
      >
        <a href="#architecture" className="btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
          Witness the Architecture <span style={{ fontSize: '16px' }}>→</span>
        </a>
        <a href="#demonstration" className="btn-secondary" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ fontSize: '10px' }}>▶</span> Live Demo
        </a>
      </motion.div>

      {/* Metrics Bar — Glass-1 floating card */}
      <motion.div
        className="glass-1"
        initial={{ opacity: 0, y: 32, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, delay: 1.3, ease: [0.16, 1, 0.3, 1] }}
        style={{
          width: 'min(860px, 90vw)',
          height: '88px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '0 var(--sp-5)',
          gap: 0,
        }}
      >
        {[
          { Component: TpsCounter, target: 104857, label: 'TOKENS / SECOND' },
          { value: '913,000', label: 'COMBINED CONTEXT' },
          { value: '< 12ms', label: 'E2E LATENCY' },
          { value: '3', label: 'EXPERT MODELS' },
        ].map((item, i) => (
          <div
            key={i}
            style={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '4px',
              borderRight: i < 3 ? '1px solid var(--border-subtle)' : 'none',
              padding: '0 var(--sp-2)',
            }}
          >
            {'Component' in item && item.Component ? (
              <item.Component target={item.target} />
            ) : (
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '28px',
                  fontWeight: 600,
                  color: 'var(--text-primary)',
                  fontVariantNumeric: 'tabular-nums',
                }}
              >
                {item.value}
              </span>
            )}
            <span
              style={{
                fontFamily: 'var(--font-label)',
                fontSize: '11px',
                fontWeight: 500,
                textTransform: 'uppercase',
                letterSpacing: '2px',
                color: 'var(--text-quaternary)',
              }}
            >
              {item.label}
            </span>
          </div>
        ))}
      </motion.div>

      {/* Scroll indicator */}
      <motion.a
        href="#architecture"
        initial={{ opacity: 0, y: 20, x: '-50%' }}
        animate={{ opacity: 1, y: 0, x: '-50%' }}
        transition={{ duration: 0.8, delay: 2, ease: [0.16, 1, 0.3, 1] }}
        whileHover={{ y: -4, opacity: 1, scale: 1.1, filter: 'drop-shadow(0 4px 12px rgba(43, 92, 230, 0.4))' }}
        whileTap={{ scale: 0.95 }}
        onClick={(e) => {
          e.preventDefault();
          const target = document.getElementById('architecture');
          if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }}
        style={{
          position: 'absolute',
          bottom: 'var(--sp-5)',
          left: '50%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '4px',
          animation: 'scroll-bounce 2s ease-in-out infinite',
          cursor: 'pointer',
          textDecoration: 'none',
        }}
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M3 6L8 11L13 6" stroke="var(--text-quaternary)" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ opacity: 0.4 }}>
          <path d="M3 6L8 11L13 6" stroke="var(--text-quaternary)" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </motion.a>
    </section>
  );
}
