'use client';

export default function MeshBackground() {
  return (
    <div
      aria-hidden="true"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 0,
        overflow: 'hidden',
        pointerEvents: 'none',
        background: 'var(--env-base)',
      }}
    >
      {/* Orb 1 — Sky Blue */}
      <div
        style={{
          position: 'absolute',
          left: '25%',
          top: '20%',
          width: '60vw',
          height: '60vw',
          borderRadius: '50%',
          background: 'var(--mesh-1)',
          filter: 'blur(80px)',
          animation: 'mesh-drift-1 18s ease-in-out infinite',
        }}
      />
      {/* Orb 2 — Lavender */}
      <div
        style={{
          position: 'absolute',
          left: '75%',
          top: '35%',
          width: '50vw',
          height: '50vw',
          borderRadius: '50%',
          background: 'var(--mesh-2)',
          filter: 'blur(80px)',
          animation: 'mesh-drift-2 22s ease-in-out infinite',
        }}
      />
      {/* Orb 3 — Mint */}
      <div
        style={{
          position: 'absolute',
          left: '15%',
          top: '70%',
          width: '45vw',
          height: '45vw',
          borderRadius: '50%',
          background: 'var(--mesh-3)',
          filter: 'blur(80px)',
          animation: 'mesh-drift-3 16s ease-in-out infinite',
        }}
      />
      {/* Orb 4 — Warm Amber */}
      <div
        style={{
          position: 'absolute',
          left: '80%',
          top: '80%',
          width: '40vw',
          height: '40vw',
          borderRadius: '50%',
          background: 'var(--mesh-4)',
          filter: 'blur(80px)',
          animation: 'mesh-drift-4 26s ease-in-out infinite',
        }}
      />
      {/* Orb 5 — Soft Pink */}
      <div
        style={{
          position: 'absolute',
          left: '50%',
          top: '50%',
          width: '55vw',
          height: '55vw',
          borderRadius: '50%',
          background: 'var(--mesh-5)',
          filter: 'blur(80px)',
          animation: 'mesh-drift-5 20s ease-in-out infinite',
          transform: 'translate(-50%, -50%)',
        }}
      />
      {/* Noise overlay for micro-texture */}
      <svg width="100%" height="100%" style={{ position: 'absolute', inset: 0, opacity: 0.025 }}>
        <filter id="noise">
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
        </filter>
        <rect width="100%" height="100%" filter="url(#noise)" />
      </svg>
    </div>
  );
}
