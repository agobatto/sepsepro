'use client';

import Link from 'next/link';

export default function LoginPage() {
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, we would validate credentials here.
    // For this mockup, we redirect to the dashboard.
    window.location.href = '/dashboard';
  };

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'var(--background)',
      padding: '1.5rem'
    }}>
      <Link href="/" style={{ marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <div style={{
          width: '40px',
          height: '40px',
          backgroundColor: 'var(--primary)',
          borderRadius: '10px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontWeight: 'bold',
          fontSize: '1.25rem'
        }}>S</div>
        <span style={{ fontSize: '1.5rem', fontWeight: 600, color: 'var(--text-main)' }}>
          Sepse<span style={{ color: 'var(--primary)' }}>Pro</span>
        </span>
      </Link>

      <div className="card animate-fade-in" style={{
        width: '100%',
        maxWidth: '400px',
        padding: '2.5rem',
      }}>
        <h1 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '0.5rem', textAlign: 'center' }}>
          Acesso Médico
        </h1>
        <p style={{ color: 'var(--text-muted)', textAlign: 'center', marginBottom: '2rem', fontSize: '0.875rem' }}>
          Faça login para acessar os protocolos e a biblioteca de antibióticos.
        </p>

        <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          <div>
            <label htmlFor="crm" style={{ display: 'block', fontSize: '0.875rem', fontWeight: 500, marginBottom: '0.5rem' }}>
              CRM ou E-mail
            </label>
            <input 
              type="text" 
              id="crm" 
              placeholder="Ex: 123456 ou medico@hospital.com"
              style={{
                width: '100%',
                padding: '0.75rem 1rem',
                borderRadius: 'var(--border-radius)',
                border: '1px solid var(--border)',
                fontSize: '1rem',
                outline: 'none',
                transition: 'border-color 0.2s'
              }}
              required
            />
          </div>

          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
              <label htmlFor="password" style={{ display: 'block', fontSize: '0.875rem', fontWeight: 500 }}>
                Senha
              </label>
              <Link href="#" style={{ fontSize: '0.75rem' }}>Esqueci a senha</Link>
            </div>
            <input 
              type="password" 
              id="password" 
              placeholder="••••••••"
              style={{
                width: '100%',
                padding: '0.75rem 1rem',
                borderRadius: 'var(--border-radius)',
                border: '1px solid var(--border)',
                fontSize: '1rem',
                outline: 'none'
              }}
              required
            />
          </div>

          <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '0.5rem', padding: '0.875rem' }}>
            Entrar
          </button>
        </form>

        <div style={{ marginTop: '1.5rem', textAlign: 'center', fontSize: '0.875rem', color: 'var(--text-muted)' }}>
          Ainda não tem acesso? <Link href="#" style={{ fontWeight: 500 }}>Solicitar convite</Link>
        </div>
      </div>
    </div>
  );
}
