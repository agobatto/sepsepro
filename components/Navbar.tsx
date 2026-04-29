'use client';

import Link from 'next/link';

export default function Navbar() {
  return (
    <nav style={{
      backgroundColor: 'var(--surface)',
      borderBottom: '1px solid var(--border)',
      padding: '1rem 0',
      position: 'sticky',
      top: 0,
      zIndex: 50,
      boxShadow: 'var(--shadow-sm)'
    }}>
      <div className="container" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <div style={{
            width: '32px',
            height: '32px',
            backgroundColor: 'var(--primary)',
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontWeight: 'bold'
          }}>S</div>
          <Link href="/" style={{ fontSize: '1.25rem', fontWeight: 600, color: 'var(--text-main)' }}>
            Sepse<span style={{ color: 'var(--primary)' }}>Pro</span>
          </Link>
        </div>
        
        <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
          <Link href="#features" style={{ fontSize: '0.875rem', fontWeight: 500, color: 'var(--text-muted)' }}>Recursos</Link>
          <Link href="#guidelines" style={{ fontSize: '0.875rem', fontWeight: 500, color: 'var(--text-muted)' }}>SSC 2026</Link>
          <Link href="/login" className="btn btn-primary">Área Médica</Link>
        </div>
      </div>
    </nav>
  );
}
