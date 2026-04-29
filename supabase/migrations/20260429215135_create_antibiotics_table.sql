-- Create the antibiotics table
CREATE TABLE antibiotics (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name TEXT NOT NULL,
    class_name TEXT NOT NULL,
    dose_sepsis TEXT NOT NULL,
    renal_adjustment TEXT NOT NULL,
    spectrum TEXT NOT NULL,
    infusion TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Enable Row Level Security (RLS)
ALTER TABLE antibiotics ENABLE ROW LEVEL SECURITY;

-- Allow public read access to antibiotics
CREATE POLICY "Public profiles are viewable by everyone."
ON antibiotics FOR SELECT
TO public
USING (true);

-- Insert initial mock data
INSERT INTO antibiotics (name, class_name, dose_sepsis, renal_adjustment, spectrum, infusion)
VALUES 
(
    'Meropenem', 
    'Carbapenêmico', 
    '1g a 2g IV a cada 8h', 
    'ClCr 26-50: 1g a cada 12h. ClCr 10-25: 500mg a cada 12h. ClCr <10: 500mg a cada 24h.', 
    'Amplo espectro (Gram-positivos, Gram-negativos incluindo Pseudomonas, Anaeróbios).', 
    'Correr em 30 min (ou infusão estendida de 3h para cepas resistentes).'
),
(
    'Piperacilina/Tazobactam', 
    'Penicilina + Inibidor de beta-lactamase', 
    '4.5g IV a cada 6h', 
    'ClCr 20-40: 2.25g a cada 6h. ClCr <20: 2.25g a cada 8h.', 
    'Amplo espectro (Gram-positivos, Gram-negativos incluindo Pseudomonas, Anaeróbios).', 
    'Correr em 30 min (infusão estendida de 4h recomendada para sepse).'
),
(
    'Vancomicina', 
    'Glicopeptídeo', 
    '15-20 mg/kg IV a cada 8-12h (Dose de ataque: 25-30 mg/kg em doentes críticos).', 
    'Baseado na vancocinemia (alvo AUC/MIC > 400 ou nível vale 15-20 mcg/mL).', 
    'Gram-positivos (incluindo MRSA, Enterococcus sensível).', 
    'Máximo de 1g por hora (risco de Síndrome do Homem Vermelho).'
),
(
    'Cefepime', 
    'Cefalosporina de 4ª Geração', 
    '2g IV a cada 8h', 
    'ClCr 30-60: 2g a cada 12h. ClCr 11-29: 2g a cada 24h. ClCr <11: 1g a cada 24h.', 
    'Gram-negativos (incluindo Pseudomonas), Gram-positivos (MSSA, Estreptococos).', 
    'Correr em 30 min (atenção para risco de neurotoxicidade em DRC).'
);
