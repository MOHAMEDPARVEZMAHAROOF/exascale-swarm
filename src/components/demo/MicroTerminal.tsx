'use client';

interface MicroTerminalProps {
  text: string;
  done: boolean;
  index: number;
  className?: string;
}

export default function MicroTerminal({ text, done, index, className = '' }: MicroTerminalProps) {
  return (
    <div
      className={className}
      style={{
        background: 'var(--carbon)',
        padding: '4px 6px',
        overflow: 'hidden',
        height: '100%',
        minHeight: '48px',
        position: 'relative',
        transition: 'opacity 300ms var(--ease-precise)',
      }}
    >
      <pre
        style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '8px',
          lineHeight: 1.5,
          color: done ? 'var(--snow)' : 'var(--silver)',
          margin: 0,
          whiteSpace: 'pre-wrap',
          wordBreak: 'break-all',
          overflow: 'hidden',
          maxHeight: '100%',
          transition: 'color 300ms var(--ease-precise)',
        }}
      >
        {text}
        {!done && text.length > 0 && (
          <span
            style={{
              display: 'inline-block',
              width: '4px',
              height: '8px',
              background: 'var(--gold)',
              marginLeft: '2px',
              animation: 'pulse-dot 1s ease infinite',
            }}
          />
        )}
      </pre>
    </div>
  );
}
