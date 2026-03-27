'use client';

import { useRef, useEffect, useCallback } from 'react';

interface SwarmCanvasProps {
  className?: string;
}

interface Particle {
  x: number;
  y: number;
  pathIndex: number;
  pathProgress: number;
  speed: number;
}

interface GridNode {
  x: number;
  y: number;
}

interface Trace {
  from: GridNode;
  to: GridNode;
  active: boolean;
  fadeState: number; // 0-1
}

export default function SwarmCanvas({ className = '' }: SwarmCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animFrameRef = useRef<number>(0);
  const offsetRef = useRef(0);

  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const w = canvas.clientWidth;
    const h = canvas.clientHeight;

    if (canvas.width !== w * dpr || canvas.height !== h * dpr) {
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.scale(dpr, dpr);
    }

    ctx.clearRect(0, 0, w, h);

    const isMobile = w < 768;
    const gridSize = isMobile ? 20 : 40;
    const spacing = isMobile ? 32 : 24;
    const particleCount = isMobile ? 80 : 300;

    offsetRef.current += 0.015;
    const offset = offsetRef.current;

    // Draw PCB traces — manhattan grid
    const nodes: GridNode[] = [];
    for (let gx = 0; gx < gridSize; gx++) {
      for (let gy = 0; gy < gridSize; gy++) {
        nodes.push({
          x: (gx * spacing) - (offset * 20) % spacing + spacing,
          y: gy * spacing + spacing,
        });
      }
    }

    // Horizontal traces
    ctx.strokeStyle = '#2A2A2A';
    ctx.lineWidth = 0.5;
    ctx.beginPath();
    for (let gy = 0; gy < gridSize; gy++) {
      for (let gx = 0; gx < gridSize - 1; gx++) {
        const hash = (gx * 7919 + gy * 104729) % 100;
        if (hash < 35) {
          const x1 = (gx * spacing) - (offset * 20) % spacing + spacing;
          const y1 = gy * spacing + spacing;
          const x2 = ((gx + 1) * spacing) - (offset * 20) % spacing + spacing;
          ctx.moveTo(x1, y1);
          ctx.lineTo(x2, y1);
        }
      }
    }
    ctx.stroke();

    // Vertical traces
    ctx.beginPath();
    for (let gx = 0; gx < gridSize; gx++) {
      for (let gy = 0; gy < gridSize - 1; gy++) {
        const hash = (gx * 104729 + gy * 7919) % 100;
        if (hash < 35) {
          const x1 = (gx * spacing) - (offset * 20) % spacing + spacing;
          const y1 = gy * spacing + spacing;
          const y2 = (gy + 1) * spacing + spacing;
          ctx.moveTo(x1, y1);
          ctx.lineTo(x1, y2);
        }
      }
    }
    ctx.stroke();

    // Active gold paths (20% of traces)
    ctx.strokeStyle = 'rgba(196, 154, 60, 0.35)';
    ctx.lineWidth = 0.8;
    ctx.beginPath();
    for (let gy = 0; gy < gridSize; gy++) {
      for (let gx = 0; gx < gridSize - 1; gx++) {
        const hash = (gx * 7919 + gy * 104729 + Math.floor(offset * 0.5) * 31) % 100;
        if (hash < 7) {
          const x1 = (gx * spacing) - (offset * 20) % spacing + spacing;
          const y1 = gy * spacing + spacing;
          const x2 = ((gx + 1) * spacing) - (offset * 20) % spacing + spacing;
          ctx.moveTo(x1, y1);
          ctx.lineTo(x2, y1);
        }
      }
    }
    for (let gx = 0; gx < gridSize; gx++) {
      for (let gy = 0; gy < gridSize - 1; gy++) {
        const hash = (gx * 104729 + gy * 7919 + Math.floor(offset * 0.5) * 31) % 100;
        if (hash < 7) {
          const x1 = (gx * spacing) - (offset * 20) % spacing + spacing;
          const y1 = gy * spacing + spacing;
          const y2 = (gy + 1) * spacing + spacing;
          ctx.moveTo(x1, y1);
          ctx.lineTo(x1, y2);
        }
      }
    }
    ctx.stroke();

    // Gold particles — deliberate, slow
    for (let i = 0; i < particleCount; i++) {
      const seed = i * 7919 + 42;
      const px = ((seed * 104729 + offset * 18 * (1 + (i % 3) * 0.3)) % (w + 100)) - 50;
      const py = ((seed * 7919 + offset * 12 * (1 + (i % 5) * 0.2)) % (h + 100)) - 50;

      // Snap to grid
      const snappedX = Math.round(px / spacing) * spacing + spacing;
      const snappedY = Math.round(py / spacing) * spacing + spacing;

      ctx.fillStyle = '#D4AA50';
      ctx.fillRect(snappedX - 1, snappedY - 1, 2, 2);
    }

    animFrameRef.current = requestAnimationFrame(draw);
  }, []);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      // Draw once for static
      draw();
      return;
    }

    animFrameRef.current = requestAnimationFrame(draw);
    return () => {
      if (animFrameRef.current) {
        cancelAnimationFrame(animFrameRef.current);
      }
    };
  }, [draw]);

  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        opacity: 0.6,
      }}
    />
  );
}
