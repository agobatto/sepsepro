'use client';

import { useState, useEffect } from 'react';
import { createClient } from '@/utils/supabase/client';

export default function AntibioticsLibrary() {
  const [searchTerm, setSearchTerm] = useState('');
  const [antibiotics, setAntibiotics] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchAntibiotics() {
      const supabase = createClient();
      const { data, error } = await supabase
        .from('antibiotics')
        .select('*')
        .order('name');
      
      if (data) {
        setAntibiotics(data);
      } else if (error) {
        console.error('Erro ao buscar antibióticos:', error);
      }
      setLoading(false);
    }

    fetchAntibiotics();
  }, []);

  const filteredAntibiotics = antibiotics.filter(ab => 
    ab.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    ab.class_name.toLowerCase().includes(searchTerm.toLowerCase())
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

      {/* Loading State */}
      {loading && (
        <div style={{ textAlign: 'center', padding: '3rem', color: 'var(--text-muted)' }}>
          <p>Carregando banco de dados...</p>
        </div>
      )}

      {/* Antibiotics List */}
      {!loading && (
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
                      {ab.class_name}
                    </span>
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1rem', marginTop: '0.5rem' }}>
                  <div style={{ backgroundColor: 'var(--primary-light)', padding: '1rem', borderRadius: 'var(--border-radius)' }}>
                    <h3 style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--primary)', marginBottom: '0.25rem' }}>Dose na Sepse</h3>
                    <p style={{ color: 'var(--text-main)', fontWeight: 500 }}>{ab.dose_sepsis}</p>
                  </div>
                  
                  <div style={{ borderLeft: '3px solid var(--secondary)', paddingLeft: '1rem' }}>
                    <h3 style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-muted)', marginBottom: '0.25rem' }}>Espectro de Ação</h3>
                    <p style={{ color: 'var(--text-main)', fontSize: '0.9rem' }}>{ab.spectrum}</p>
                  </div>

                  <div style={{ borderLeft: '3px solid var(--accent)', paddingLeft: '1rem' }}>
                    <h3 style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-muted)', marginBottom: '0.25rem' }}>Ajuste Renal</h3>
                    <p style={{ color: 'var(--text-main)', fontSize: '0.9rem' }}>{ab.renal_adjustment}</p>
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
      )}
    </div>
  );
}
