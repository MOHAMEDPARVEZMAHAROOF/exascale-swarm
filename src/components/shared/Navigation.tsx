'use client';

import { useState, useEffect } from 'react';

const NAV_LINKS = [
  { label: 'Architecture', href: '#architecture' },
  { label: 'Models', href: '#models' },
  { label: 'Infrastructure', href: '#infrastructure' },
  { label: 'Demo', href: '#demonstration' },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: '68px',
        zIndex: 1000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 var(--sp-8)',
        background: scrolled ? 'var(--glass-2-fill)' : 'transparent',
        backdropFilter: scrolled ? 'var(--glass-2-blur)' : 'none',
        WebkitBackdropFilter: scrolled ? 'var(--glass-2-blur)' : 'none',
        borderBottom: scrolled ? '1px solid var(--border-glass)' : '1px solid transparent',
        transition: 'background var(--dur-normal) var(--ease-smooth), border-color var(--dur-normal) var(--ease-smooth)',
      }}
    >
      {/* Wordmark — stacked */}
      <a href="#" style={{ textDecoration: 'none', lineHeight: 1 }}>
        <div
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '18px',
            fontWeight: 700,
            letterSpacing: '-0.5px',
            color: 'var(--text-primary)',
          }}
        >
          EXASCALE
        </div>
        <div
          style={{
            fontFamily: 'var(--font-label)',
            fontSize: '10px',
            fontWeight: 500,
            textTransform: 'uppercase',
            letterSpacing: '3px',
            color: 'var(--text-quaternary)',
          }}
        >
          MOE SWARM
        </div>
      </a>

      {/* Center Nav Links */}
      <div className="nav-desktop-links" style={{ display: 'flex', gap: 'var(--sp-5)', alignItems: 'center' }}>
        {NAV_LINKS.map((link) => (
          <a
            key={link.label}
            href={link.href}
            style={{
              fontFamily: 'var(--font-label)',
              fontSize: '13px',
              fontWeight: 500,
              letterSpacing: '0.3px',
              color: 'var(--text-tertiary)',
              textDecoration: 'none',
              transition: 'color var(--dur-micro) var(--ease-smooth)',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text-primary)')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-tertiary)')}
          >
            {link.label}
          </a>
        ))}
      </div>

      {/* Right Group */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--sp-2)' }}>
        {/* LIVE badge */}
        <div
          className="nav-live-badge"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            background: 'var(--glass-4-fill)',
            backdropFilter: 'var(--glass-4-blur)',
            WebkitBackdropFilter: 'var(--glass-4-blur)',
            border: '1px solid var(--border-glass-b)',
            borderRadius: 'var(--r-full)',
            padding: '6px 14px',
          }}
        >
          <span className="live-dot" />
          <span
            style={{
              fontFamily: 'var(--font-label)',
              fontSize: '11px',
              fontWeight: 500,
              textTransform: 'uppercase',
              letterSpacing: '2px',
              color: 'var(--text-tertiary)',
            }}
          >
            LIVE
          </span>
        </div>

        {/* CTA */}
        <button className="btn-primary nav-cta-desktop" style={{ padding: '8px 20px', fontSize: '13px' }}>
          Request Access
        </button>
      </div>

      {/* Mobile hamburger */}
      <button
        className="nav-mobile-toggle"
        onClick={() => setMobileOpen(!mobileOpen)}
        aria-label="Toggle navigation"
        style={{
          display: 'none',
          color: 'var(--text-primary)',
          fontSize: '20px',
          fontFamily: 'var(--font-mono)',
        }}
      >
        {mobileOpen ? '✕' : '☰'}
      </button>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          className="glass-1"
          style={{
            position: 'absolute',
            top: '68px',
            left: 0,
            right: 0,
            padding: 'var(--sp-3) var(--sp-4)',
            display: 'flex',
            flexDirection: 'column',
            gap: 'var(--sp-2)',
          }}
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              style={{
                fontFamily: 'var(--font-label)',
                fontSize: '14px',
                fontWeight: 500,
                color: 'var(--text-secondary)',
                textDecoration: 'none',
                padding: '12px 0',
                borderBottom: '1px solid var(--border-subtle)',
              }}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}

    </nav>
  );
}
