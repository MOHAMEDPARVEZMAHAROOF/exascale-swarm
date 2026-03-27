'use client';

const ITEMS = [
  'GLM-5',
  '•',
  'MINIMAX M2.5',
  '•',
  'KIMI K2.5',
  '•',
  '100,000+ TPS',
  '•',
  'PARALLEL MOE',
  '•',
  'GROQ LPU',
  '•',
  'H100 SXM5',
  '•',
  '3.2 PB HBM3e',
  '•',
  '800G INFINIBAND',
  '•',
  'ZERO BOTTLENECK',
  '•',
  'SKELETON ROUTER',
  '•',
  '< 12ms LATENCY',
  '•',
];

export default function MarqueeStrip() {
  return (
    <div
      aria-hidden="true"
      style={{
        position: 'relative',
        width: '100%',
        height: '48px',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        borderTop: '1px solid var(--border-subtle)',
        borderBottom: '1px solid var(--border-subtle)',
        background: 'var(--glass-4-fill)',
        backdropFilter: 'var(--glass-4-blur)',
        WebkitBackdropFilter: 'var(--glass-4-blur)',
        zIndex: 1,
      }}
    >
      <div className="marquee-track">
        {[0, 1].map((half) => (
          <div
            key={half}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 'var(--sp-3)',
              paddingRight: 'var(--sp-3)',
              whiteSpace: 'nowrap',
            }}
          >
            {ITEMS.map((item, i) => (
              <span
                key={`${half}-${i}`}
                style={{
                  fontFamily: item === '•' ? 'var(--font-label)' : 'var(--font-mono)',
                  fontSize: item === '•' ? '8px' : '12px',
                  fontWeight: item === '•' ? 400 : 500,
                  letterSpacing: item === '•' ? '0' : '2px',
                  color: item === '•' ? 'var(--text-quaternary)' : 'var(--text-tertiary)',
                }}
              >
                {item}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
