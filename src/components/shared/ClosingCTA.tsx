'use client';

import { motion } from 'framer-motion';

export default function ClosingCTA() {
  return (
    <section
      style={{
        position: 'relative',
        zIndex: 1,
        minHeight: '100dvh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 'var(--sp-10) var(--sp-4)',
      }}
    >
      <motion.div
        className="glass-1"
        initial={{ opacity: 0, y: 32, scale: 0.97 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        style={{
          maxWidth: '820px',
          width: '100%',
          padding: 'var(--sp-10) var(--sp-12)',
          borderRadius: 'var(--r-2xl)',
          textAlign: 'center',
          overflow: 'hidden',
          position: 'relative',
        }}
      >
        {/* Background "100K" watermark */}
        <span
          aria-hidden="true"
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            fontFamily: 'var(--font-body)',
            fontSize: '300px',
            fontWeight: 900,
            color: 'rgba(43, 92, 230, 0.04)',
            lineHeight: 1,
            letterSpacing: '-10px',
            pointerEvents: 'none',
            userSelect: 'none',
            zIndex: 0,
          }}
        >
          100K
        </span>

        {/* Foreground */}
        <div style={{ position: 'relative', zIndex: 1 }}>
          {/* Eyebrow */}
          <div
            className="glass-4"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '6px 16px',
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
                textTransform: 'uppercase',
                letterSpacing: '2px',
                color: 'var(--text-tertiary)',
              }}
            >
              READY TO BUILD
            </span>
          </div>

          {/* Title */}
          <h2
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'clamp(36px, 5vw, 48px)',
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: '-2px',
              color: 'var(--text-primary)',
              margin: '0 0 var(--sp-4) 0',
            }}
          >
            The future of inference
            <br />
            runs parallel.
          </h2>

          {/* Body */}
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '17px',
              fontWeight: 400,
              lineHeight: 1.8,
              color: 'var(--text-tertiary)',
              maxWidth: '560px',
              margin: '0 auto var(--sp-6) auto',
            }}
          >
            The Exascale MoE Swarm is an open architecture for distributed inference at
            civilisational scale. We&apos;re partnering with infrastructure operators, research
            institutions, and forward-looking capital to build out the full cluster.
          </p>

          {/* Email Capture Bar */}
          <div className="email-capture-bar">
            <input 
              type="email" 
              placeholder="Enter your work email..." 
              aria-label="Email address"
            />
            <button className="btn-primary">
              Request Technical Brief →
            </button>
          </div>
          
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 'var(--sp-8)' }}>
            <button className="btn-secondary" style={{ padding: '12px 24px', fontSize: '14px' }}>
              View on GitHub
            </button>
          </div>

          {/* Partner Logos */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 'var(--sp-2)',
              marginBottom: 'var(--sp-6)',
              flexWrap: 'wrap',
            }}
          >
            <span
              style={{
                fontFamily: 'var(--font-label)',
                fontSize: '12px',
                color: 'var(--text-quaternary)',
                marginRight: 'var(--sp-1)',
              }}
            >
              Powered by
            </span>
            {['GROQ', 'NVIDIA', 'MELLANOX'].map((logo) => (
              <span
                key={logo}
                className="glass-4"
                style={{
                  padding: '6px 16px',
                  borderRadius: 'var(--r-full)',
                  fontFamily: 'var(--font-label)',
                  fontSize: '12px',
                  fontWeight: 600,
                  color: 'var(--text-tertiary)',
                }}
              >
                {logo}
              </span>
            ))}
          </div>

          {/* Footnote */}
          <div
            style={{
              borderTop: '1px solid var(--border-subtle)',
              paddingTop: 'var(--sp-3)',
            }}
          >
            <p
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '12px',
                color: 'var(--text-quaternary)',
                margin: '0 0 4px 0',
              }}
            >
              GLM-5 · MiniMax m2.5 · Kimi k2.5
            </p>
            <p
              style={{
                fontFamily: 'var(--font-label)',
                fontSize: '13px',
                fontStyle: 'italic',
                color: 'var(--text-quaternary)',
                margin: 0,
              }}
            >
              Three models. One architecture. No compromises.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
