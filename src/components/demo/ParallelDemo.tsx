'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionLabel from '../shared/SectionLabel';
import { generateBlocks } from '@/lib/mockGenerator';

type Phase = 'idle' | 'running' | 'assembling' | 'complete';

const GRID_SIZE = 100;

export default function ParallelDemo() {
  const [phase, setPhase] = useState<Phase>('idle');
  const [progress, setProgress] = useState<number[]>(new Array(GRID_SIZE).fill(0));
  const [inputText, setInputText] = useState('Write a comprehensive analysis of distributed AI inference architectures');
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const runDemo = useCallback(() => {
    setPhase('running');
    setProgress(new Array(GRID_SIZE).fill(0));

    let tick = 0;
    timerRef.current = setInterval(() => {
      tick++;
      setProgress((prev) =>
        prev.map((p, i) => {
          const offset = (i % 10) * 3 + Math.floor(i / 10) * 2;
          const val = Math.min(100, Math.max(0, ((tick - offset) / 40) * 100));
          return val;
        })
      );
      if (tick > 80) {
        if (timerRef.current) clearInterval(timerRef.current);
        setPhase('assembling');
        setTimeout(() => setPhase('complete'), 500);
      }
    }, 50);
  }, []);

  const reset = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    setPhase('idle');
    setProgress(new Array(GRID_SIZE).fill(0));
  }, []);

  useEffect(() => {
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  const modelLabel = (i: number) => (i < 33 ? 'G' : i < 66 ? 'M' : 'K');
  const modelAccent = (i: number) =>
    i < 33 ? 'var(--model-glm)' : i < 66 ? 'var(--model-minimax)' : 'var(--model-kimi)';

  return (
    <section
      id="demonstration"
      style={{
        position: 'relative',
        zIndex: 1,
        padding: 'var(--sp-20) var(--sp-4)',
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        style={{
          textAlign: 'center',
          maxWidth: '600px',
          margin: '0 auto var(--sp-6)',
        }}
      >
        <SectionLabel>THE DEMONSTRATION</SectionLabel>
        <h2
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'clamp(28px, 3vw, 40px)',
            fontWeight: 700,
            lineHeight: 1.15,
            letterSpacing: '-1.5px',
            color: 'var(--text-primary)',
          }}
        >
          Parallel thought,
          <br />
          assembled in real time.
        </h2>
      </motion.div>

      {/* Input Interface */}
      <AnimatePresence mode="wait">
        {phase === 'idle' && (
          <motion.div
            key="input"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.4 }}
            className="glass-1"
            style={{
              maxWidth: '700px',
              margin: '0 auto var(--sp-6)',
              padding: 'var(--sp-4)',
              borderRadius: 'var(--r-2xl)',
            }}
          >
            <textarea
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              style={{
                width: '100%',
                minHeight: '88px',
                background: 'var(--glass-3-fill)',
                backdropFilter: 'var(--glass-3-blur)',
                WebkitBackdropFilter: 'var(--glass-3-blur)',
                border: '1px solid var(--glass-3-border)',
                borderRadius: 'var(--r-md)',
                padding: 'var(--sp-2)',
                fontFamily: 'var(--font-mono)',
                fontSize: '14px',
                color: 'var(--text-secondary)',
                resize: 'vertical',
                outline: 'none',
              }}
              placeholder="Enter your query..."
            />
            <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 'var(--sp-2)' }}>
              <button className="btn-primary" onClick={runDemo}>
                ● Dispatch to Swarm
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 10×10 Grid */}
      {(phase === 'running' || phase === 'assembling') && (
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{
            opacity: phase === 'assembling' ? 0.3 : 1,
            scale: phase === 'assembling' ? 0.92 : 1,
            filter: phase === 'assembling' ? 'blur(4px)' : 'blur(0)',
          }}
          transition={{ duration: 0.4 }}
          style={{
            maxWidth: '700px',
            margin: '0 auto var(--sp-4)',
            display: 'grid',
            gridTemplateColumns: 'repeat(10, 1fr)',
            gap: '4px',
          }}
        >
          {progress.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.5, y: 10 }}
              animate={{
                opacity: p > 0 ? 0.5 + (p / 100) * 0.5 : 0.4,
                scale: 1,
                y: 0,
                boxShadow: p > 0 && p < 100 ? `inset 0 0 12px ${modelAccent(i).replace('0.70', '0.40')}` : 'none'
              }}
              transition={{
                opacity: { duration: 0.15 },
                boxShadow: { duration: 0.15 },
                scale: { delay: i * 0.005, type: 'spring', stiffness: 300, damping: 20 },
                y: { delay: i * 0.005, type: 'spring', stiffness: 300, damping: 20 }
              }}
              className={`glass-3 ${phase === 'assembling' ? 'glass-shine' : ''}`}
              style={{
                aspectRatio: '1',
                borderRadius: 'var(--r-sm)',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* Model badge */}
              <span
                style={{
                  position: 'absolute',
                  top: '3px',
                  right: '4px',
                  fontFamily: 'var(--font-label)',
                  fontSize: '8px',
                  fontWeight: 600,
                  color: modelAccent(i),
                  opacity: 0.7,
                }}
              >
                {modelLabel(i)}
              </span>
              {/* Fill indicator */}
              <div
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: `${p}%`,
                  background: `linear-gradient(to top, ${modelAccent(i)}, transparent)`,
                  opacity: 0.15,
                  transition: 'height 100ms',
                }}
              />
              {p >= 100 && (
                <span
                  style={{
                    position: 'absolute',
                    bottom: '2px',
                    right: '3px',
                    fontSize: '8px',
                    opacity: 0.3,
                    color: 'var(--text-secondary)',
                  }}
                >
                  ✓
                </span>
              )}
            </motion.div>
          ))}
        </motion.div>
      )}

      {/* Complete state */}
      <AnimatePresence>
        {phase === 'complete' && (
          <motion.div
            key="result"
            className="glass-1"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            style={{
              maxWidth: '700px',
              margin: '0 auto',
              padding: 'var(--sp-5) var(--sp-6)',
              borderRadius: 'var(--r-2xl)',
              minHeight: '240px',
            }}
          >
            <SectionLabel>ASSEMBLED OUTPUT</SectionLabel>
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '15px',
                lineHeight: 1.8,
                color: 'var(--text-secondary)',
                margin: '0 0 var(--sp-4) 0',
              }}
            >
              {generateBlocks(1)[0]}
            </p>

            {/* Stats row */}
            <div style={{ display: 'flex', gap: 'var(--sp-2)', flexWrap: 'wrap', marginBottom: 'var(--sp-3)' }}>
              {[
                'Generated in 1.47s',
                '104,857 tokens/sec',
                '99.7% coherence',
                '3 experts, 0 conflicts',
              ].map((stat, idx) => (
                <motion.span
                  key={stat}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + idx * 0.1, duration: 0.4 }}
                  className="glass-4"
                  style={{
                    padding: '4px 12px',
                    borderRadius: 'var(--r-full)',
                    fontFamily: 'var(--font-label)',
                    fontSize: '12px',
                    color: 'var(--text-tertiary)',
                  }}
                >
                  {stat}
                </motion.span>
              ))}
            </div>

            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <button className="btn-ghost" onClick={reset}>
                ↺ Run again
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
