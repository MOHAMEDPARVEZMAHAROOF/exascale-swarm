'use client';

import { ReactNode } from 'react';

interface SectionLabelProps {
  children: ReactNode;
  className?: string;
}

export default function SectionLabel({ children, className = '' }: SectionLabelProps) {
  return (
    <span
      className={className}
      style={{
        fontFamily: 'var(--font-label)',
        fontSize: '11px',
        fontWeight: 600,
        textTransform: 'uppercase',
        letterSpacing: '3px',
        color: 'var(--accent)',
        display: 'block',
        marginBottom: 'var(--sp-2)',
      }}
    >
      {children}
    </span>
  );
}
