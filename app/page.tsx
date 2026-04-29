import Navbar from '@/components/Navbar';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section style={{
          padding: '6rem 0',
          background: 'linear-gradient(to bottom, var(--primary-light), var(--background))',
          textAlign: 'center',
          overflow: 'hidden'
        }}>
          <div className="container animate-fade-in">
            <h1 style={{
              fontSize: '3.5rem',
              fontWeight: 700,
              color: 'var(--primary)',
              marginBottom: '1.5rem',
              lineHeight: 1.1
            }}>
              Manejo da Sepse,<br/>
              <span style={{ color: 'var(--text-main)' }}>Simplificado e Atualizado.</span>
            </h1>
            <p style={{
              fontSize: '1.25rem',
              color: 'var(--text-muted)',
              maxWidth: '800px',
              margin: '0 auto 2.5rem auto',
              lineHeight: 1.6
            }}>
              A primeira plataforma baseada nas diretrizes da <strong>Surviving Sepsis Campaign 2026</strong>. 
              Acesse protocolos rápidos, calculadoras e a biblioteca mais completa de antibióticos para a sua prática clínica.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
              <Link href="/login" className="btn btn-primary" style={{ padding: '0.875rem 2rem', fontSize: '1rem' }}>
                Acessar Área Médica
              </Link>
              <Link href="#features" className="btn btn-outline" style={{ padding: '0.875rem 2rem', fontSize: '1rem' }}>
                Conhecer Recursos
              </Link>
            </div>
            
            {/* Hero Image / Mockup Placeholder */}
            <div style={{
              marginTop: '4rem',
              position: 'relative',
              maxWidth: '1000px',
              margin: '4rem auto 0 auto',
              borderRadius: 'var(--border-radius-lg)',
              overflow: 'hidden',
              boxShadow: 'var(--shadow-lg)',
              border: '1px solid var(--border)',
              backgroundColor: 'white',
              height: '400px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
               {/* This is a placeholder for a dashboard screenshot */}
               <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📊</div>
                  <h3 style={{ color: 'var(--text-muted)' }}>Dashboard Interativo SepsePro</h3>
               </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" style={{ padding: '5rem 0', backgroundColor: 'var(--surface)' }}>
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
              <h2 style={{ fontSize: '2.25rem', fontWeight: 700, marginBottom: '1rem' }}>Recursos Essenciais para Plantonistas</h2>
              <p style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto' }}>
                Ferramentas criadas por médicos, para médicos. Focadas em agilidade e precisão no momento crítico.
              </p>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '2rem'
            }}>
              
              {/* Feature 1 */}
              <div className="card" style={{ padding: '2rem' }}>
                <div style={{
                  width: '48px', height: '48px', borderRadius: '12px', backgroundColor: 'var(--primary-light)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem',
                  fontSize: '1.5rem', color: 'var(--primary)'
                }}>
                  💊
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '0.75rem' }}>Biblioteca de Antibióticos</h3>
                <p style={{ color: 'var(--text-muted)', lineHeight: 1.6 }}>
                  Consulte doses, ajustes renais, espectro de ação e diluições rapidamente. Focado na terapia empírica e guiada.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="card" style={{ padding: '2rem' }}>
                <div style={{
                  width: '48px', height: '48px', borderRadius: '12px', backgroundColor: 'var(--secondary-light)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem',
                  fontSize: '1.5rem', color: 'var(--secondary)'
                }}>
                  ⏱️
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '0.75rem' }}>Pacote de 1 Hora (SSC 2026)</h3>
                <p style={{ color: 'var(--text-muted)', lineHeight: 1.6 }}>
                  Fluxograma interativo com cronômetro para garantir que as intervenções críticas sejam feitas no tempo certo.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="card" style={{ padding: '2rem' }}>
                <div style={{
                  width: '48px', height: '48px', borderRadius: '12px', backgroundColor: '#FEF3C7',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem',
                  fontSize: '1.5rem', color: '#D97706'
                }}>
                  📉
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '0.75rem' }}>Acompanhamento Hemodinâmico</h3>
                <p style={{ color: 'var(--text-muted)', lineHeight: 1.6 }}>
                  Dicas e protocolos para uso de vasopressores, metas de PAM e avaliação de responsividade a fluidos.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* Footer */}
        <footer style={{ backgroundColor: 'var(--text-main)', color: 'white', padding: '3rem 0', textAlign: 'center' }}>
          <div className="container">
            <h2 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '1rem' }}>SepsePro</h2>
            <p style={{ color: 'var(--text-light)', fontSize: '0.875rem' }}>
              Criado para médicos. Baseado nas evidências mais recentes da Surviving Sepsis Campaign.
            </p>
          </div>
        </footer>
      </main>
    </>
  );
}
