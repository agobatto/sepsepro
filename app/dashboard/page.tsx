export default function DashboardOverview() {
  return (
    <div className="animate-fade-in">
      <header style={{ marginBottom: '2.5rem' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '0.5rem' }}>
          Visão Geral
        </h1>
        <p style={{ color: 'var(--text-muted)' }}>
          Resumo das principais atualizações e protocolos da Surviving Sepsis Campaign 2026.
        </p>
      </header>

      {/* Highlights / Quick Stats */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
        <div className="card" style={{ padding: '1.5rem', borderLeft: '4px solid var(--danger)' }}>
          <h3 style={{ fontSize: '0.875rem', color: 'var(--text-muted)', fontWeight: 600, textTransform: 'uppercase', marginBottom: '0.5rem' }}>
            Alerta de Protocolo
          </h3>
          <p style={{ fontSize: '1.25rem', fontWeight: 600, color: 'var(--text-main)' }}>
            Meta de PAM revisada: ≥ 65 mmHg
          </p>
          <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', marginTop: '0.5rem' }}>
            Atualização SSC 2026 sobre vasopressores.
          </p>
        </div>

        <div className="card" style={{ padding: '1.5rem', borderLeft: '4px solid var(--primary)' }}>
          <h3 style={{ fontSize: '0.875rem', color: 'var(--text-muted)', fontWeight: 600, textTransform: 'uppercase', marginBottom: '0.5rem' }}>
            Biblioteca de Antimicrobianos
          </h3>
          <p style={{ fontSize: '1.25rem', fontWeight: 600, color: 'var(--text-main)' }}>
            45 Fármacos Atualizados
          </p>
          <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', marginTop: '0.5rem' }}>
            Ajustes renais e doses otimizadas.
          </p>
        </div>
      </div>

      {/* What's New Section */}
      <section className="card" style={{ padding: '2rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
          <div style={{ fontSize: '1.5rem' }}>📰</div>
          <h2 style={{ fontSize: '1.25rem', fontWeight: 600 }}>O que há de novo no SSC 2026?</h2>
        </div>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div style={{ paddingBottom: '1rem', borderBottom: '1px solid var(--border)' }}>
            <h4 style={{ fontWeight: 600, color: 'var(--text-main)', marginBottom: '0.25rem' }}>
              1. Antimicrobianos em até 1 hora
            </h4>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.5 }}>
              Para pacientes com choque séptico ou alta probabilidade de sepse, a administração de antimicrobianos intravenosos deve ocorrer preferencialmente dentro de 1 hora após o reconhecimento.
            </p>
          </div>
          
          <div style={{ paddingBottom: '1rem', borderBottom: '1px solid var(--border)' }}>
            <h4 style={{ fontWeight: 600, color: 'var(--text-main)', marginBottom: '0.25rem' }}>
              2. Ressuscitação Fluídica
            </h4>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.5 }}>
              Sugere-se o uso de cristaloides balanceados em vez de soro fisiológico (0,9% NaCl) para a ressuscitação inicial. A dose inicial recomendada mantém-se em 30 mL/kg, porém com avaliação hemodinâmica dinâmica precoce.
            </p>
          </div>

          <div>
            <h4 style={{ fontWeight: 600, color: 'var(--text-main)', marginBottom: '0.25rem' }}>
              3. Avaliação de Responsividade
            </h4>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.5 }}>
              Maior ênfase no uso de variáveis dinâmicas (como elevação passiva das pernas ou variação da pressão de pulso) sobre variáveis estáticas para guiar a administração de fluidos.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
