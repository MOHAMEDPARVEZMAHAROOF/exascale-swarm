'use client';

import { motion } from 'framer-motion';
import SectionLabel from '../shared/SectionLabel';
import dynamic from 'next/dynamic';

const SwarmFlowMap = dynamic(() => import('./SwarmFlowMap'), {
  ssr: false,
  loading: () => (
    <div
      className="glass-2"
      style={{
        height: 'min(600px, 70vh)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 'var(--r-2xl)',
      }}
    >
      <span style={{ fontFamily: 'var(--font-label)', fontSize: '13px', color: 'var(--text-quaternary)' }}>
        Loading architecture…
      </span>
    </div>
  ),
});

const REVEAL = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' as const },
  transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
};

const MODEL_LINKS = [
  { name: 'GLM-5', role: 'Structural Generation Engine', accent: 'var(--model-glm)' },
  { name: 'MiniMax m2.5', role: 'Creative Narrative Engine', accent: 'var(--model-minimax)' },
  { name: 'Kimi k2.5', role: 'Retrieval & Synthesis Engine', accent: 'var(--model-kimi)' },
];

export default function ArchSection() {
  return (
    <section
      id="architecture"
      style={{
        position: 'relative',
        zIndex: 1,
        padding: 'var(--sp-20) var(--sp-4)',
      }}
    >
      <div
        className="arch-grid"
        style={{
          maxWidth: '1400px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1fr 1.6fr',
          gap: 'var(--sp-8)',
          alignItems: 'start',
        }}
      >
        {/* Left Column — Sticky text */}
        <motion.div
          {...REVEAL}
          className="arch-sticky"
          style={{
            position: 'sticky',
            top: '120px',
          }}
        >
          <SectionLabel>THE ARCHITECTURE</SectionLabel>
          <h2
            style={{
              fontFamily: 'var(--font-body)',
              fontWeight: 700,
              fontSize: 'clamp(28px, 3vw, 40px)',
              lineHeight: 1.15,
              letterSpacing: '-1.5px',
              color: 'var(--text-primary)',
              margin: '0 0 var(--sp-3) 0',
            }}
          >
            The Skeleton Router.
            <br />
            <span style={{ color: 'var(--text-tertiary)', fontWeight: 400 }}>
              One decision. Three experts.
              <br />
              One voice.
            </span>
          </h2>
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '16px',
              fontWeight: 400,
              lineHeight: 1.8,
              color: 'var(--text-tertiary)',
              margin: '0 0 var(--sp-5) 0',
            }}
          >
            The Skeleton Router operates at the token level—not the query level. Each incoming
            request is decomposed into structural, creative, and retrieval segments before being
            dispatched to the most capable expert. This happens in under 2 milliseconds, with zero
            cross-expert contention.
          </p>

          {/* Model links */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--sp-2)' }}>
            {MODEL_LINKS.map((m) => (
              <a
                key={m.name}
                href="#models"
                className="glass-3 glass-hover"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  padding: 'var(--sp-2) var(--sp-3)',
                  textDecoration: 'none',
                  borderRadius: 'var(--r-lg)',
                  gap: 'var(--sp-2)',
                }}
              >
                <div
                  style={{
                    width: '3px',
                    height: '40px',
                    borderRadius: '2px',
                    background: m.accent,
                    flexShrink: 0,
                  }}
                />
                <div style={{ flex: 1 }}>
                  <div
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '20px',
                      fontWeight: 600,
                      color: 'var(--text-primary)',
                    }}
                  >
                    {m.name}
                  </div>
                  <div
                    style={{
                      fontFamily: 'var(--font-label)',
                      fontSize: '12px',
                      color: 'var(--text-quaternary)',
                    }}
                  >
                    {m.role}
                  </div>
                </div>
                <span
                  style={{
                    fontFamily: 'var(--font-label)',
                    fontSize: '16px',
                    color: 'var(--text-quaternary)',
                    transition: 'transform 200ms var(--ease-smooth)',
                  }}
                >
                  →
                </span>
              </a>
            ))}
          </div>
        </motion.div>

        {/* Right Column — ReactFlow Diagram */}
        <motion.div
          initial={{ opacity: 0, y: 32, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="glass-1"
          style={{
            height: 'min(600px, 70vh)',
            borderRadius: 'var(--r-2xl)',
            overflow: 'hidden',
          }}
        >
          <SwarmFlowMap />
        </motion.div>
      </div>

    </section>
  );
}
