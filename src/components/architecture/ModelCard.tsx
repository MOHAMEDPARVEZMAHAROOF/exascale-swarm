'use client';

import { motion } from 'framer-motion';
import SectionLabel from '../shared/SectionLabel';

const MODELS = [
  {
    index: '01',
    name: 'GLM-5',
    role: 'Structural Generation',
    accent: 'rgba(43, 92, 230, 0.70)',
    accentFill: 'rgba(43, 92, 230, 0.12)',
    accentBorder: 'rgba(43, 92, 230, 0.25)',
    accentGradient: 'linear-gradient(135deg, rgba(43,92,230,0.15) 0%, rgba(255,255,255,0.0) 100%)',
    specs: [
      { label: 'CONTEXT WINDOW', value: '512K TOKENS' },
      { label: 'ARCHITECTURE', value: 'BIDIRECTIONAL GLM + [MASK]' },
      { label: 'DEPLOYMENT', value: 'GROQ LPU CLUSTER' },
      { label: 'MEMORY BANDWIDTH', value: '12.8 TB/S' },
      { label: 'SWARM CONTRIBUTION', value: '38,420 TPS AVERAGE', highlight: true },
    ],
  },
  {
    index: '02',
    name: 'MiniMax',
    role: 'Narrative & Creative',
    accent: 'rgba(147, 51, 234, 0.70)',
    accentFill: 'rgba(147, 51, 234, 0.12)',
    accentBorder: 'rgba(147, 51, 234, 0.25)',
    accentGradient: 'linear-gradient(135deg, rgba(147,51,234,0.15) 0%, rgba(255,255,255,0.0) 100%)',
    specs: [
      { label: 'CONTEXT WINDOW', value: '400K TOKENS' },
      { label: 'ARCHITECTURE', value: 'HAI-MoE · 32 ACTIVE OF 256' },
      { label: 'DEPLOYMENT', value: 'H100 SXM5 CLUSTER' },
      { label: 'MEMORY BANDWIDTH', value: '10.4 TB/S' },
      { label: 'SWARM CONTRIBUTION', value: '34,228 TPS AVERAGE', highlight: true },
    ],
  },
  {
    index: '03',
    name: 'Kimi',
    role: 'Retrieval & Synthesis',
    accent: 'rgba(5, 150, 105, 0.70)',
    accentFill: 'rgba(5, 150, 105, 0.12)',
    accentBorder: 'rgba(5, 150, 105, 0.25)',
    accentGradient: 'linear-gradient(135deg, rgba(5,150,105,0.15) 0%, rgba(255,255,255,0.0) 100%)',
    specs: [
      { label: 'CONTEXT WINDOW', value: '512K TOKENS' },
      { label: 'ARCHITECTURE', value: 'MUON-OPTIMISED MoE' },
      { label: 'DEPLOYMENT', value: 'GROQ LPU + H100 HYBRID' },
      { label: 'MEMORY BANDWIDTH', value: '8.2 TB/S' },
      { label: 'SWARM CONTRIBUTION', value: '32,209 TPS AVERAGE', highlight: true },
    ],
  },
];

const REVEAL = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' as const },
  transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
};

export default function ModelCard() {
  return (
    <section
      id="models"
      style={{
        position: 'relative',
        zIndex: 1,
        padding: 'var(--sp-16) var(--sp-4)',
      }}
    >
      {/* Header */}
      <motion.div
        {...REVEAL}
        style={{
          textAlign: 'center',
          maxWidth: '600px',
          margin: '0 auto var(--sp-8)',
        }}
      >
        <SectionLabel>THE THREE EXPERTS</SectionLabel>
        <h2
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'clamp(32px, 4vw, 44px)',
            fontWeight: 700,
            lineHeight: 1.15,
            letterSpacing: '-1.5px',
            color: 'var(--text-primary)',
            margin: 0,
          }}
        >
          Specialized intelligence,
          <br />
          unified output.
        </h2>
      </motion.div>

      {/* Cards Grid */}
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
          gap: 'var(--sp-4)',
        }}
      >
        {MODELS.map((model, idx) => (
          <motion.div
            key={model.name}
            className="glass-1 glass-shine"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
            style={{
              overflow: 'hidden',
              cursor: 'default',
              transition: 'transform 400ms cubic-bezier(0.16,1,0.3,1), box-shadow 400ms cubic-bezier(0.16,1,0.3,1)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-6px)';
              e.currentTarget.style.boxShadow = '0 24px 64px rgba(100,90,140,0.22), 0 8px 24px rgba(100,90,140,0.14), inset 0 1px 0 rgba(255,255,255,1.0)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'var(--glass-1-shadow)';
            }}
          >
            {/* Card Top Zone */}
            <div
              style={{
                position: 'relative',
                height: '240px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                background: model.accentGradient,
                padding: 'var(--sp-4)',
              }}
            >
              {/* Index */}
              <span
                style={{
                  position: 'absolute',
                  top: 'var(--sp-3)',
                  left: 'var(--sp-4)',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '13px',
                  color: model.accent,
                  opacity: 0.5,
                }}
              >
                {model.index}
              </span>

              {/* Model Name */}
              <span
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '64px',
                  fontWeight: 700,
                  letterSpacing: '-3px',
                  color: 'var(--text-primary)',
                  lineHeight: 1,
                }}
              >
                {model.name}
              </span>

              {/* Role Badge */}
              <div
                style={{
                  marginTop: 'var(--sp-2)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  background: model.accentFill,
                  border: `1px solid ${model.accentBorder}`,
                  borderRadius: 'var(--r-full)',
                  padding: '5px 14px',
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-label)',
                    fontSize: '12px',
                    textTransform: 'uppercase',
                    letterSpacing: '2px',
                    fontWeight: 500,
                    color: model.accent,
                  }}
                >
                  {model.role}
                </span>
              </div>
            </div>

            {/* Divider */}
            <div style={{ height: '1px', background: 'var(--border-subtle)' }} />

            {/* Spec Table */}
            <div style={{ padding: 'var(--sp-4) var(--sp-5)' }}>
              {model.specs.map((spec, si) => (
                <div
                  key={spec.label}
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    height: '56px',
                    borderBottom: si < model.specs.length - 1 ? '1px solid var(--border-subtle)' : 'none',
                    background: spec.highlight ? 'var(--accent-fill-6)' : 'transparent',
                    borderRadius: spec.highlight ? 'var(--r-sm)' : '0',
                    padding: spec.highlight ? '0 var(--sp-2)' : '0',
                  }}
                >
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
                    {spec.label}
                  </span>
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: spec.highlight ? '16px' : '13px',
                      fontWeight: 500,
                      color: spec.highlight ? model.accent : 'var(--text-secondary)',
                      fontVariantNumeric: 'tabular-nums',
                    }}
                  >
                    {spec.value}
                  </span>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div
              className="glass-3"
              style={{
                height: '72px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '0 var(--sp-5)',
                borderRadius: '0 0 var(--r-2xl) var(--r-2xl)',
                borderTop: '1px solid var(--border-subtle)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span className="live-dot" />
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
                  ACTIVE IN SWARM
                </span>
              </div>
              <span
                style={{
                  fontFamily: 'var(--font-label)',
                  fontSize: '13px',
                  color: 'var(--accent)',
                  cursor: 'pointer',
                }}
              >
                Technical brief →
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
