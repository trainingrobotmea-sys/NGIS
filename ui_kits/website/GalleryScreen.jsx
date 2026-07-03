// NGIS website — Gallery / "Life at NextGen" (school updates)
function GalleryScreen({ onNav }) {
  const { EyebrowLabel, Button, Badge } = window.NGISDesignSystem_f6dc23;
  const Icon = window.Icon;
  const { PATTERNS, NAVY_GRADIENT, SectionDecor, PhotoFrame, EduMotifs } = window.Decor;

  // Gallery items — real NGIS photography mapped to school themes.
  const items = [
    { src: '../../assets/photos/etm-garage.png', tag: 'ETM Garage', accent: 'red', caption: 'Young innovators at work', ratio: '4 / 3' },
    { src: '../../assets/photos/foq-quran.png', tag: 'Faith', accent: 'navy', caption: 'Friends of Quran', ratio: '4 / 5' },
    { src: '../../assets/photos/steam-classroom.png', tag: 'STEAM', accent: 'navy', caption: 'STEAM in the classroom', ratio: '16 / 11' },
    { src: '../../assets/photos/innovate-lab.png', tag: 'Classrooms', accent: 'red', caption: 'Discovery & Innovation Hub', ratio: '4 / 3' },
    { src: '../../assets/photos/students-classroom.png', tag: 'Student Life', accent: 'red', caption: 'Learning together', ratio: '16 / 10' },
    { src: '../../assets/photos/faculty-development.png', tag: 'Faculty', accent: 'navy', caption: 'Faculty Development Cell', ratio: '4 / 3' },
    { src: '../../assets/photos/hero-students.png', tag: 'Campus', accent: 'navy', caption: 'A day at NextGen', ratio: '16 / 11' },
    { tag: 'Events', accent: 'red', label: 'Competitions & showcases', icon: 'trophy', ratio: '4 / 5' },
  ];

  // split into 3 columns for a masonry feel
  const cols = [[], [], []];
  items.forEach((it, i) => cols[i % 3].push(it));

  return (
    <main>
      {/* Header */}
      <section style={{
        background: NAVY_GRADIENT,
        position: 'relative',
        overflow: 'hidden',
        minHeight: 'calc(100vh - 72px)',
        display: 'flex',
        alignItems: 'center',
      }}>
        <div style={{ ...PATTERNS.gridNavy, position: 'absolute', inset: 0, opacity: 0.6 }}></div>
        <EduMotifs tone="navy" density="light" />
        <SectionDecor tone="navy" />
        <div style={{ position: 'relative', maxWidth: 'var(--container)', margin: '0 auto', padding: 'var(--space-8) var(--space-5)', width: '100%' }}>
          <EyebrowLabel color="gold">From our classrooms</EyebrowLabel>
          <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'var(--text-6xl)', fontWeight: 700, color: '#fff', margin: '18px 0 0', lineHeight: 'var(--leading-tight)', letterSpacing: 'var(--tracking-tight)' }}>Life at NextGen</h1>
          <p style={{ fontSize: 'var(--text-xl)', color: 'rgba(255,255,255,0.82)', margin: '20px 0 0', maxWidth: 640, lineHeight: 'var(--leading-normal)' }}>
            A window into everyday learning: projects, hubs, competitions and the moments that make our school a movement.
          </p>
        </div>
      </section>

      {/* Filter chips (decorative) */}
      <section style={{ background: 'var(--surface-page)', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: 'var(--container)', margin: '0 auto', padding: 'var(--space-5)', display: 'flex', gap: 10, flexWrap: 'wrap' }}>
          {['All updates', 'Curriculum', 'Classrooms', 'STEAM', 'ETM Garage', 'Events', 'Faith'].map((c, i) => (
            <span key={c} style={{
              padding: '8px 16px', borderRadius: 'var(--radius-pill)', fontSize: 'var(--text-sm)', fontWeight: 600, cursor: 'default',
              background: i === 0 ? 'var(--navy-600)' : 'var(--surface-subtle)',
              color: i === 0 ? '#fff' : 'var(--text-body)',
              border: i === 0 ? 'none' : '1px solid var(--border)',
            }}>{c}</span>
          ))}
        </div>
      </section>

      {/* Masonry grid */}
      <section style={{ background: 'var(--surface-page)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ ...PATTERNS.dotsLight, position: 'absolute', inset: 0, opacity: 0.4 }}></div>
        <div className="ngis-grid-3" style={{ position: 'relative', maxWidth: 'var(--container)', margin: '0 auto', padding: 'var(--space-9) var(--space-5)', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'var(--space-6)' }}>
          {cols.map((col, ci) => (
            <div key={ci} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-6) ' }}>
              {col.map((it, ii) => (
                <div key={ii} style={{ position: 'relative' }}>
                  <div style={{ position: 'absolute', top: 18, left: 18, zIndex: 3 }}>
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: 'rgba(255,255,255,0.92)', backdropFilter: 'blur(4px)', borderRadius: 'var(--radius-pill)', padding: '5px 12px', fontSize: 'var(--text-xs)', fontWeight: 700, color: `var(--${it.accent}-700)`, textTransform: 'uppercase', letterSpacing: 'var(--tracking-wide)' }}>
                      <span style={{ width: 7, height: 7, borderRadius: '50%', background: `var(--${it.accent}-500)` }}></span>{it.tag}
                    </span>
                  </div>
                  <PhotoFrame src={it.src} alt={it.caption || it.label} accent={it.accent} ratio={it.ratio} caption={it.caption} label={it.label} icon={it.icon} />
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: 'var(--surface-subtle)', borderTop: '1px solid var(--border)' }}>
        <div style={{ maxWidth: 'var(--container)', margin: '0 auto', padding: 'var(--space-8) var(--space-5)', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'var(--text-3xl)', fontWeight: 700, color: 'var(--text-strong)', margin: '0 0 8px' }}>Want to see it in person?</h2>
          <p style={{ fontSize: 'var(--text-lg)', color: 'var(--text-body)', margin: '0 0 22px' }}>Book a campus tour and experience the ETM ecosystem first-hand.</p>
          <Button variant="primary" size="lg" iconRight={<Icon name="arrowRight" size={18} />} onClick={() => onNav('Admissions')}>Book a tour</Button>
        </div>
      </section>
    </main>
  );
}
window.GalleryScreen = GalleryScreen;