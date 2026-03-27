'use client';

import { useEffect, useRef, useState } from 'react';

interface TpsCounterProps {
  target?: number;
  className?: string;
}

export default function TpsCounter({ target = 104857, className = '' }: TpsCounterProps) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) setHasStarted(true);
      },
      { threshold: 0.5 }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;
    const duration = 2000;
    const startTime = performance.now();
    const animate = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(animate);
      else setCount(target);
    };
    requestAnimationFrame(animate);
  }, [hasStarted, target]);

  const formatted = count.toLocaleString('en-US');

  return (
    <div ref={ref} className={className}>
      <span
        style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '28px',
          fontWeight: 600,
          color: 'var(--text-primary)',
          fontVariantNumeric: 'tabular-nums',
          background: hasStarted
            ? 'linear-gradient(135deg, var(--accent) 0%, var(--accent-soft) 100%)'
            : 'none',
          WebkitBackgroundClip: hasStarted ? 'text' : 'unset',
          WebkitTextFillColor: hasStarted ? 'transparent' : 'var(--text-primary)',
          backgroundClip: hasStarted ? 'text' : 'unset',
        }}
      >
        {formatted}
      </span>
    </div>
  );
}
