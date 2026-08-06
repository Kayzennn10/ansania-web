export const metadata = {
  title: "Panduan Ukuran | Ansania"
};

export default function SizeGuidePage() {
  return (
    <>
      <div className="page-header" style={{ padding: '4rem 1.5rem', background: 'var(--color-surface)', borderBottom: '1px solid var(--color-border)' }}>
        <div className="container">
          <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Panduan Ukuran</h1>
          <p style={{ fontSize: '1.2rem', color: 'var(--color-text-light)' }}>Temukan ukuran yang paling pas untuk tampilan paripurna Anda.</p>
        </div>
      </div>

      <section className="section container" style={{ maxWidth: '800px' }}>
        <div style={{ marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '1.8rem', marginBottom: '1.5rem', color: 'var(--color-primary)' }}>Ukuran Pashmina Standar</h2>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', background: 'var(--color-surface)', borderRadius: 'var(--radius-md)', overflow: 'hidden', boxShadow: 'var(--shadow-sm)' }}>
            <thead>
              <tr style={{ background: 'rgba(139, 115, 85, 0.1)' }}>
                <th style={{ padding: '1.2rem', borderBottom: '2px solid var(--color-primary)' }}>Tipe / Style</th>
                <th style={{ padding: '1.2rem', borderBottom: '2px solid var(--color-primary)' }}>Panjang (cm)</th>
                <th style={{ padding: '1.2rem', borderBottom: '2px solid var(--color-primary)' }}>Lebar (cm)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ padding: '1.2rem', borderBottom: '1px solid var(--color-border)' }}>Pashmina Reguler</td>
                <td style={{ padding: '1.2rem', borderBottom: '1px solid var(--color-border)' }}>175</td>
                <td style={{ padding: '1.2rem', borderBottom: '1px solid var(--color-border)' }}>75</td>
              </tr>
              <tr>
                <td style={{ padding: '1.2rem', borderBottom: '1px solid var(--color-border)' }}>Pashmina Syar'i (Lebar)</td>
                <td style={{ padding: '1.2rem', borderBottom: '1px solid var(--color-border)' }}>200</td>
                <td style={{ padding: '1.2rem', borderBottom: '1px solid var(--color-border)' }}>100</td>
              </tr>
              <tr>
                <td style={{ padding: '1.2rem', borderBottom: '1px solid var(--color-border)' }}>Pashmina Silk Premium</td>
                <td style={{ padding: '1.2rem', borderBottom: '1px solid var(--color-border)' }}>180</td>
                <td style={{ padding: '1.2rem', borderBottom: '1px solid var(--color-border)' }}>70</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div>
          <h2 style={{ fontSize: '1.8rem', marginBottom: '1.5rem', color: 'var(--color-primary)' }}>Ukuran Hijab Square (Segi Empat)</h2>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', background: 'var(--color-surface)', borderRadius: 'var(--radius-md)', overflow: 'hidden', boxShadow: 'var(--shadow-sm)' }}>
            <thead>
              <tr style={{ background: 'rgba(139, 115, 85, 0.1)' }}>
                <th style={{ padding: '1.2rem', borderBottom: '2px solid var(--color-primary)' }}>Tipe / Style</th>
                <th style={{ padding: '1.2rem', borderBottom: '2px solid var(--color-primary)' }}>Ukuran (cm x cm)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ padding: '1.2rem', borderBottom: '1px solid var(--color-border)' }}>Standar Paris / Voal</td>
                <td style={{ padding: '1.2rem', borderBottom: '1px solid var(--color-border)' }}>110 x 110</td>
              </tr>
              <tr>
                <td style={{ padding: '1.2rem', borderBottom: '1px solid var(--color-border)' }}>Medium Syar'i</td>
                <td style={{ padding: '1.2rem', borderBottom: '1px solid var(--color-border)' }}>120 x 120</td>
              </tr>
              <tr>
                <td style={{ padding: '1.2rem', borderBottom: '1px solid var(--color-border)' }}>Jumbo Syar'i</td>
                <td style={{ padding: '1.2rem', borderBottom: '1px solid var(--color-border)' }}>140 x 140</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}
