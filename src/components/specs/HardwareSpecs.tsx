'use client';

import { motion } from 'framer-motion';
import SectionLabel from '../shared/SectionLabel';

const SPEC_ROWS = [
  { label: 'COMPUTE', value: '100× GROQ LPU RACKS + 40× NVIDIA H100 SXM5' },
  { label: 'INTERCONNECT', value: '800G INFINIBAND NDR (MELLANOX QUANTUM-2)' },
  { label: 'AGGREGATE MEMORY', value: '3.2 PETABYTES HBM3e' },
  { label: 'HOT STORAGE', value: '48 TB NVMe GEN5 (PROMPT CACHE)' },
  { label: 'NETWORK EGRESS', value: '1.6 TBPS BONDED' },
  { label: 'PEAK THROUGHPUT', value: '104,857 TOKENS / SECOND', highlight: true },
  { label: 'THEORETICAL MAX', value: '262,144 TOKENS / SECOND' },
  { label: 'POWER DRAW', value: '~18 MW @ PUE 1.08' },
  { label: 'COOLING', value: 'DIRECT LIQUID · 40°C DELTA-T' },
  { label: 'REDUNDANCY', value: 'N+2 CRITICAL PATHS · 99.999% SLA' },
];

const STAT_CARDS = [
  { number: '100+', label: 'GROQ LPU RACKS' },
  { number: '3.2 PB', label: 'HBM3e AGGREGATE MEMORY' },
  { number: '18 MW', label: 'PEAK POWER DRAW' },
];

const REVEAL = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' as const },
  transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
};

export default function HardwareSpecs() {
  return (
    <section
      id="infrastructure"
      style={{
        position: 'relative',
        zIndex: 1,
        padding: 'var(--sp-20) var(--sp-4)',
      }}
    >
      <motion.div
        className="glass-1"
        {...REVEAL}
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: 'var(--sp-10)',
          borderRadius: 'var(--r-2xl)',
          display: 'grid',
          gridTemplateColumns: '2fr 3fr',
          gap: 'var(--sp-8)',
          alignItems: 'start',
        }}
      >
        {/* Left Column */}
        <div>
          <SectionLabel>THE HARDWARE</SectionLabel>
          <h2
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'clamp(28px, 3vw, 36px)',
              fontWeight: 700,
              lineHeight: 1.15,
              letterSpacing: '-1.5px',
              color: 'var(--text-primary)',
              margin: '0 0 var(--sp-3) 0',
            }}
          >
            What a 100,000 TPS cluster looks like.
          </h2>
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '15px',
              fontWeight: 400,
              lineHeight: 1.8,
              color: 'var(--text-tertiary)',
              margin: '0 0 var(--sp-5) 0',
            }}
          >
            Purpose-built from the rack up. Every component is selected for maximum sustained
            throughput — not peak benchmarks. This is infrastructure designed to run at capacity
            indefinitely, with N+2 redundancy across all critical paths.
          </p>

          {/* Stat cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--sp-2)' }}>
            {STAT_CARDS.map((card) => (
              <div
                key={card.label}
                className="glass-3"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 'var(--sp-2)',
                  padding: 'var(--sp-2) var(--sp-3)',
                  borderRadius: 'var(--r-lg)',
                  height: '60px',
                }}
              >
                <div
                  style={{
                    width: '3px',
                    height: '60%',
                    background: 'var(--accent)',
                    borderRadius: '2px',
                    flexShrink: 0,
                  }}
                />
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '24px',
                    fontWeight: 600,
                    color: 'var(--text-primary)',
                    minWidth: '100px',
                  }}
                >
                  {card.number}
                </span>
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
                  {card.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column — Spec Table */}
        <div>
          {SPEC_ROWS.map((row, i) => (
            <div
              key={row.label}
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                height: '72px',
                borderBottom: i < SPEC_ROWS.length - 1 ? '1px solid var(--border-subtle)' : 'none',
                paddingLeft: 'var(--sp-3)',
                background: row.highlight ? 'var(--accent-fill-6)' : 'transparent',
                borderLeft: row.highlight ? '3px solid var(--accent)' : '3px solid transparent',
                borderRadius: row.highlight ? 'var(--r-sm)' : '0',
                paddingRight: row.highlight ? 'var(--sp-2)' : '0',
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
                {row.label}
              </span>
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: row.highlight ? '16px' : '13px',
                  fontWeight: 500,
                  color: row.highlight ? 'var(--accent)' : 'var(--text-secondary)',
                  fontVariantNumeric: 'tabular-nums',
                  textAlign: 'right',
                }}
              >
                {row.value}
              </span>
            </div>
          ))}
        </div>
      </motion.div>

    </section>
  );
}
