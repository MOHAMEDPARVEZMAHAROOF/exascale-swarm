'use client';

import { motion } from 'framer-motion';
import SectionLabel from '../shared/SectionLabel';

const STEPS = [
  {
    step: '01',
    label: 'INGESTION',
    title: 'Token ingestion',
    desc: 'The incoming request is tokenised at the edge. Tokens stream into the Skeleton Router at wire speed — no buffering, no queueing.',
  },
  {
    step: '02',
    label: 'SEGMENTATION',
    title: 'Semantic segmentation',
    desc: 'The router analyses token semantics in real-time. Each token is classified into structural, creative, or retrieval segments in under 2ms.',
  },
  {
    step: '03',
    label: 'DISPATCH',
    title: 'Parallel dispatch',
    desc: 'Segmented token streams are dispatched to all three expert models simultaneously. Zero cross-expert contention. Maximum hardware utilisation.',
  },
  {
    step: '04',
    label: 'ASSEMBLY',
    title: 'Coherent assembly',
    desc: 'Expert outputs are merged token-by-token. The assembler resolves conflicts, ensures coherence, and produces a unified output stream.',
  },
];

const REVEAL = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' as const },
  transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
};

export default function RouterExplainer() {
  return (
    <section
      style={{
        position: 'relative',
        zIndex: 1,
        padding: 'var(--sp-20) var(--sp-4)',
      }}
    >
      <motion.div
        {...REVEAL}
        style={{ textAlign: 'center', marginBottom: 'var(--sp-8)' }}
      >
        <SectionLabel>THE PROCESS</SectionLabel>
        <h2
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'clamp(28px, 3vw, 40px)',
            fontWeight: 700,
            lineHeight: 1.15,
            letterSpacing: '-1.5px',
            color: 'var(--text-primary)',
            maxWidth: '600px',
            margin: '0 auto',
          }}
        >
          How the Skeleton Router thinks.
        </h2>
      </motion.div>

      <div
        className="router-explainer-grid"
        style={{
          maxWidth: '1000px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: 'var(--sp-4)',
        }}
      >
        {STEPS.map((step, idx) => (
          <motion.div
            key={step.step}
            className="glass-2 glass-shine"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
            style={{
              padding: 'var(--sp-6)',
              borderRadius: 'var(--r-xl)',
              cursor: 'default',
              overflow: 'hidden',
              transition: 'transform 400ms cubic-bezier(0.16,1,0.3,1), box-shadow 400ms cubic-bezier(0.16,1,0.3,1)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.boxShadow = '0 16px 48px rgba(100,90,140,0.18), 0 4px 12px rgba(100,90,140,0.10), inset 0 1px 0 rgba(255,255,255,1.0)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'var(--glass-2-shadow)';
            }}
          >
            {/* Step Header */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                marginBottom: 'var(--sp-3)',
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '11px',
                  color: 'var(--text-quaternary)',
                }}
              >
                {step.step}
              </span>
              <span
                style={{
                  fontFamily: 'var(--font-label)',
                  fontSize: '11px',
                  fontWeight: 500,
                  textTransform: 'uppercase',
                  letterSpacing: '3px',
                  color: 'var(--accent)',
                }}
              >
                {step.label}
              </span>
            </div>

            {/* Title */}
            <h3
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '28px',
                fontWeight: 700,
                lineHeight: 1.2,
                color: 'var(--text-primary)',
                margin: '0 0 var(--sp-2) 0',
              }}
            >
              {step.title}
            </h3>

            {/* Description */}
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '15px',
                fontWeight: 400,
                lineHeight: 1.7,
                color: 'var(--text-tertiary)',
                margin: 0,
              }}
            >
              {step.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
