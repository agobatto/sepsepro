'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const isAntibiotics = pathname.includes('/antibiotics');

  return (
    <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: 'var(--background)' }}>
      {/* Sidebar */}
      <aside style={{
        width: '260px',
        backgroundColor: 'var(--surface)',
        borderRight: '1px solid var(--border)',
        padding: '1.5rem',
        display: 'flex',
        flexDirection: 'column',
        position: 'fixed',
        height: '100vh',
        zIndex: 40
      }}>
        <div style={{ marginBottom: '3rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
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
          <span style={{ fontSize: '1.25rem', fontWeight: 600, color: 'var(--text-main)' }}>
            Sepse<span style={{ color: 'var(--primary)' }}>Pro</span>
          </span>
        </div>

        <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', flex: 1 }}>
          <Link href="/dashboard" style={{
            padding: '0.75rem 1rem',
            borderRadius: 'var(--border-radius)',
            backgroundColor: !isAntibiotics ? 'var(--primary-light)' : 'transparent',
            color: !isAntibiotics ? 'var(--primary)' : 'var(--text-muted)',
            fontWeight: !isAntibiotics ? 600 : 500,
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem'
          }}>
            <span>📊</span> Visão Geral
          </Link>
          
          <Link href="/dashboard/antibiotics" style={{
            padding: '0.75rem 1rem',
            borderRadius: 'var(--border-radius)',
            backgroundColor: isAntibiotics ? 'var(--primary-light)' : 'transparent',
            color: isAntibiotics ? 'var(--primary)' : 'var(--text-muted)',
            fontWeight: isAntibiotics ? 600 : 500,
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem'
          }}>
            <span>💊</span> Antibióticos
          </Link>

          <Link href="#" style={{
            padding: '0.75rem 1rem',
            borderRadius: 'var(--border-radius)',
            color: 'var(--text-muted)',
            fontWeight: 500,
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem'
          }}>
            <span>⏱️</span> Protocolo 1 Hora
          </Link>
        </nav>

        <div style={{ marginTop: 'auto', paddingTop: '1.5rem', borderTop: '1px solid var(--border)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
            <div style={{ width: '36px', height: '36px', borderRadius: '50%', backgroundColor: 'var(--text-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '0.875rem' }}>
              MD
            </div>
            <div>
              <p style={{ fontSize: '0.875rem', fontWeight: 600, lineHeight: 1 }}>Dr. André</p>
              <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Plantonista</p>
            </div>
          </div>
          <Link href="/" style={{ color: 'var(--danger)', fontSize: '0.875rem', fontWeight: 500, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span>🚪</span> Sair da Conta
          </Link>
        </div>
      </aside>

      {/* Main Content Area */}
      <main style={{ flex: 1, marginLeft: '260px', padding: '2.5rem' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          {children}
        </div>
      </main>
    </div>
  );
}
