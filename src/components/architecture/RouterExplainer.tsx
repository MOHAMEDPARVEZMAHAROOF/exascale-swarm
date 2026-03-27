'use client';

import React from 'react';
import { motion, useMotionValue, useMotionTemplate } from 'framer-motion';
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
  initial: { opacity: 0, y: 32, scale: 0.98 },
  whileInView: { opacity: 1, y: 0, scale: 1 },
  viewport: { once: true, margin: '-60px' as const },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
};

function InteractiveProcessCard({ step, idx }: { step: any, idx: number }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const background = useMotionTemplate`radial-gradient(400px circle at ${mouseX}px ${mouseY}px, rgba(160, 150, 255, 0.1), transparent 80%)`;

  return (
    <motion.div
      className="glass-2 glass-shine"
      initial="initial"
      whileInView="whileInView"
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
      variants={REVEAL}
      onMouseMove={handleMouseMove}
      whileHover={{ y: -8, scale: 1.02 }}
      style={{
        position: 'relative',
        padding: 'var(--sp-8)',
        borderRadius: 'var(--r-2xl)',
        cursor: 'default',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        boxShadow: 'var(--glass-2-shadow)',
      }}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background,
          position: 'absolute',
          inset: 0,
          zIndex: 0,
          opacity: 0,
          transition: 'opacity 0.4s',
        }}
        onMouseEnter={(e) => { e.currentTarget.style.opacity = '1'; }}
        onMouseLeave={(e) => { e.currentTarget.style.opacity = '0'; }}
      />
      
      <div style={{ position: 'relative', zIndex: 1 }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 'var(--sp-6)',
          }}
        >
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '12px',
              color: 'var(--text-quaternary)',
            }}
          >
            {step.step}
          </span>
          <span
            style={{
              fontFamily: 'var(--font-label)',
              fontSize: '12px',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '3px',
              color: 'var(--accent)',
            }}
          >
            {step.label}
          </span>
        </div>

        <h3
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '32px',
            fontWeight: 700,
            lineHeight: 1.1,
            color: 'var(--text-primary)',
            margin: '0 0 var(--sp-4) 0',
          }}
        >
          {step.title}
        </h3>

        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '16px',
            fontWeight: 400,
            lineHeight: 1.6,
            color: 'var(--text-tertiary)',
            margin: 0,
          }}
        >
          {step.desc}
        </p>
      </div>
    </motion.div>
  );
}

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
          <InteractiveProcessCard key={step.step} step={step} idx={idx} />
        ))}
      </div>
    </section>
  );
}
