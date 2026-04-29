'use client';

import { useState } from 'react';

// Mock data for antibiotics
const antibioticsData = [
  {
    id: 'meropenem',
    name: 'Meropenem',
    class: 'Carbapenêmico',
    doseSepsis: '1g a 2g IV a cada 8h',
    renalAdjustment: 'ClCr 26-50: 1g a cada 12h. ClCr 10-25: 500mg a cada 12h. ClCr <10: 500mg a cada 24h.',
    spectrum: 'Amplo espectro (Gram-positivos, Gram-negativos incluindo Pseudomonas, Anaeróbios).',
    infusion: 'Correr em 30 min (ou infusão estendida de 3h para cepas resistentes).'
  },
  {
    id: 'tazocin',
    name: 'Piperacilina/Tazobactam',
    class: 'Penicilina + Inibidor de beta-lactamase',
    doseSepsis: '4.5g IV a cada 6h',
    renalAdjustment: 'ClCr 20-40: 2.25g a cada 6h. ClCr <20: 2.25g a cada 8h.',
    spectrum: 'Amplo espectro (Gram-positivos, Gram-negativos incluindo Pseudomonas, Anaeróbios).',
    infusion: 'Correr em 30 min (infusão estendida de 4h recomendada para sepse).'
  },
  {
    id: 'vancomycin',
    name: 'Vancomicina',
    class: 'Glicopeptídeo',
    doseSepsis: '15-20 mg/kg IV a cada 8-12h (Dose de ataque: 25-30 mg/kg em doentes críticos).',
    renalAdjustment: 'Baseado na vancocinemia (alvo AUC/MIC > 400 ou nível vale 15-20 mcg/mL).',
    spectrum: 'Gram-positivos (incluindo MRSA, Enterococcus sensível).',
    infusion: 'Máximo de 1g por hora (risco de Síndrome do Homem Vermelho).'
  },
  {
    id: 'cefepime',
    name: 'Cefepime',
    class: 'Cefalosporina de 4ª Geração',
    doseSepsis: '2g IV a cada 8h',
    renalAdjustment: 'ClCr 30-60: 2g a cada 12h. ClCr 11-29: 2g a cada 24h. ClCr <11: 1g a cada 24h.',
    spectrum: 'Gram-negativos (incluindo Pseudomonas), Gram-positivos (MSSA, Estreptococos).',
    infusion: 'Correr em 30 min (atenção para risco de neurotoxicidade em DRC).'
  }
];

export default function AntibioticsLibrary() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredAntibiotics = antibioticsData.filter(ab => 
    ab.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    ab.class.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="animate-fade-in">
      <header style={{ marginBottom: '2.5rem' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '0.5rem' }}>
          Biblioteca de Antibióticos
        </h1>
        <p style={{ color: 'var(--text-muted)' }}>
          Consulte rapidamente as doses, ajustes renais e espectro de ação recomendados na sepse.
        </p>
      </header>

      {/* Search Bar */}
      <div style={{ marginBottom: '2rem' }}>
        <input 
          type="text" 
          placeholder="Buscar por nome do antibiótico ou classe..." 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            width: '100%',
            padding: '1rem 1.5rem',
            fontSize: '1rem',
            borderRadius: 'var(--border-radius-lg)',
            border: '1px solid var(--border)',
            boxShadow: 'var(--shadow-sm)',
            outline: 'none'
          }}
        />
      </div>

      {/* Antibiotics List */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        {filteredAntibiotics.length > 0 ? (
          filteredAntibiotics.map((ab) => (
            <div key={ab.id} className="card" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div>
                  <h2 style={{ fontSize: '1.5rem', fontWeight: 600, color: 'var(--primary)' }}>{ab.name}</h2>
                  <span style={{ 
                    display: 'inline-block', 
                    padding: '0.25rem 0.75rem', 
                    backgroundColor: 'var(--surface-hover)', 
                    borderRadius: '100px', 
                    fontSize: '0.75rem', 
                    fontWeight: 500,
                    color: 'var(--text-muted)',
                    marginTop: '0.5rem'
                  }}>
                    {ab.class}
                  </span>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1rem', marginTop: '0.5rem' }}>
                <div style={{ backgroundColor: 'var(--primary-light)', padding: '1rem', borderRadius: 'var(--border-radius)' }}>
                  <h3 style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--primary)', marginBottom: '0.25rem' }}>Dose na Sepse</h3>
                  <p style={{ color: 'var(--text-main)', fontWeight: 500 }}>{ab.doseSepsis}</p>
                </div>
                
                <div style={{ borderLeft: '3px solid var(--secondary)', paddingLeft: '1rem' }}>
                  <h3 style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-muted)', marginBottom: '0.25rem' }}>Espectro de Ação</h3>
                  <p style={{ color: 'var(--text-main)', fontSize: '0.9rem' }}>{ab.spectrum}</p>
                </div>

                <div style={{ borderLeft: '3px solid var(--accent)', paddingLeft: '1rem' }}>
                  <h3 style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-muted)', marginBottom: '0.25rem' }}>Ajuste Renal</h3>
                  <p style={{ color: 'var(--text-main)', fontSize: '0.9rem' }}>{ab.renalAdjustment}</p>
                </div>

                <div style={{ borderLeft: '3px solid var(--text-light)', paddingLeft: '1rem' }}>
                  <h3 style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-muted)', marginBottom: '0.25rem' }}>Infusão e Dicas</h3>
                  <p style={{ color: 'var(--text-main)', fontSize: '0.9rem' }}>{ab.infusion}</p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div style={{ textAlign: 'center', padding: '3rem', color: 'var(--text-muted)' }}>
            <p>Nenhum antibiótico encontrado com "{searchTerm}".</p>
          </div>
        )}
      </div>
    </div>
  );
}
