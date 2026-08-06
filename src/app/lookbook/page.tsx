export const metadata = {
  title: "Lookbook | Ansania"
};

export default function LookbookPage() {
  return (
    <>
      <div className="page-header" style={{ padding: '5rem 1.5rem', background: 'var(--color-surface)', borderBottom: '1px solid var(--color-border)' }}>
        <div className="container">
          <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Lookbook Musim Ini</h1>
          <p style={{ fontSize: '1.2rem', color: 'var(--color-text-light)' }}>Inspirasi gaya memukau dengan balutan koleksi terbaru Ansania.</p>
        </div>
      </div>

      <section className="section container">
        <div style={{ columns: '3 250px', gap: '1.5rem' }}>
          {/* Pinterest style masonry layout skeleton */}
          <div style={{ marginBottom: '1.5rem', breakInside: 'avoid' }}>
            <img src="https://images.unsplash.com/photo-1596455607563-ad6193f76b17?q=80&w=600&auto=format&fit=crop" style={{ width: '100%', borderRadius: 'var(--radius-md)' }} alt="Look 1" loading="lazy" />
          </div>
          <div style={{ marginBottom: '1.5rem', breakInside: 'avoid' }}>
            <img src="https://images.unsplash.com/photo-1584042898744-84631379dbda?q=80&w=600&auto=format&fit=crop" style={{ width: '100%', borderRadius: 'var(--radius-md)' }} alt="Look 2" loading="lazy" />
          </div>
          <div style={{ marginBottom: '1.5rem', breakInside: 'avoid' }}>
            <img src="https://images.unsplash.com/photo-1589718471691-1ec8dc524f22?q=80&w=600&auto=format&fit=crop" style={{ width: '100%', borderRadius: 'var(--radius-md)' }} alt="Look 3" loading="lazy" />
          </div>
          <div style={{ marginBottom: '1.5rem', breakInside: 'avoid' }}>
            <img src="https://plus.unsplash.com/premium_photo-1675129654153-f7256191b248?q=80&w=600&auto=format&fit=crop" style={{ width: '100%', borderRadius: 'var(--radius-md)' }} alt="Look 4" loading="lazy" />
          </div>
          <div style={{ marginBottom: '1.5rem', breakInside: 'avoid' }}>
            <img src="https://images.unsplash.com/photo-1607527632617-640a2bb1de6b?q=80&w=600&auto=format&fit=crop" style={{ width: '100%', borderRadius: 'var(--radius-md)' }} alt="Look 5" loading="lazy" />
          </div>
          <div style={{ marginBottom: '1.5rem', breakInside: 'avoid' }}>
            <img src="https://images.unsplash.com/photo-1605364850989-10e3001dd3bd?q=80&w=600&auto=format&fit=crop" style={{ width: '100%', borderRadius: 'var(--radius-md)' }} alt="Look 6" loading="lazy" />
          </div>
        </div>
      </section>
    </>
  );
}
