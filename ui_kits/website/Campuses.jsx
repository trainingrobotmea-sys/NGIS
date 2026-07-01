// NGIS website — "Two campuses" section with social handles
function Campuses({ heading = true }) {
  const Icon = window.Icon;
  const { PATTERNS, SectionDecor, PhotoFrame } = window.Decor;

  const campuses = [
    {
      name: 'Malir Campus',
      area: 'Malir Cantt, Karachi',
      accent: 'navy',
      photo: '../../assets/photos/campus-building.jpeg',
      instagram: { handle: '@ngis_malir', url: 'https://www.instagram.com/ngis_malir' },
      facebook: { handle: 'NGIS Malir', url: 'https://www.facebook.com/profile.php?id=61575432466967' },
    },
    {
      name: 'Jinnah Avenue Campus',
      area: 'Jinnah Avenue, Karachi',
      accent: 'red',
      photo: '../../assets/photos/campus-jinnah-avenue.png',
      instagram: { handle: '@ngis_jinnahavenue_official', url: 'https://www.instagram.com/ngis_jinnahavenue_official' },
      facebook: { handle: 'NGIS Jinnah Avenue', url: 'https://www.facebook.com/profile.php?id=61575391815391' },
    },
  ];

  const Social = ({ kind, handle, url }) => {
    const isIg = kind === 'instagram';
    return (
      <a href={url} target="_blank" rel="noopener noreferrer" style={{
        display: 'flex', alignItems: 'center', gap: 11, textDecoration: 'none',
        background: 'var(--surface-card)', border: '1px solid var(--border)',
        borderRadius: 'var(--radius-md)', padding: '10px 14px', flex: 1, minWidth: 0,
        transition: 'box-shadow var(--dur-fast), transform var(--dur-fast)',
      }}
        onMouseEnter={e => { e.currentTarget.style.boxShadow = 'var(--shadow-md)'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
        onMouseLeave={e => { e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.transform = 'none'; }}
      >
        <span style={{
          width: 36, height: 36, flexShrink: 0, borderRadius: 'var(--radius-sm)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          background: isIg
            ? 'linear-gradient(45deg, #F58529 0%, #DD2A7B 50%, #8134AF 100%)'
            : '#1877F2',
        }}>
          <Icon name={kind} size={19} color="#fff" />
        </span>
        <span style={{ minWidth: 0 }}>
          <span style={{ display: 'block', fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: 'var(--tracking-wide)', color: 'var(--text-muted)', lineHeight: 1.2 }}>{isIg ? 'Instagram' : 'Facebook'}</span>
          <span style={{ display: 'block', fontSize: 'var(--text-sm)', fontWeight: 600, color: 'var(--text-strong)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{handle}</span>
        </span>
      </a>
    );
  };

  return (
    <section style={{ background: 'var(--surface-subtle)', position: 'relative', overflow: 'hidden', borderTop: '1px solid var(--border)' }}>
      <SectionDecor tone="light" />
      <div style={{ position: 'relative', maxWidth: 'var(--container)', margin: '0 auto', padding: 'var(--space-9) var(--space-5)' }}>
        {heading && (
          <div style={{ textAlign: 'center', maxWidth: 640, margin: '0 auto var(--space-7)' }}>
            <div style={{ fontFamily: 'var(--font-sans)', fontWeight: 700, fontSize: 'var(--text-sm)', textTransform: 'uppercase', letterSpacing: 'var(--tracking-wider)', color: 'var(--red-600)', marginBottom: 10 }}>Visit us in Karachi</div>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'var(--text-4xl)', fontWeight: 700, color: 'var(--text-strong)', margin: 0, lineHeight: 'var(--leading-tight)' }}>Two campuses, one movement</h2>
            <p style={{ fontSize: 'var(--text-lg)', color: 'var(--text-body)', margin: '14px 0 0', lineHeight: 'var(--leading-normal)' }}>The NGIS ETM experience, now at two locations across the city. Follow each campus for news, events and student life.</p>
          </div>
        )}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 'var(--space-7)' }}>
          {campuses.map(c => (
            <div key={c.name} style={{ background: 'var(--surface-card)', border: '1px solid var(--border)', borderTop: `4px solid var(--${c.accent}-500)`, borderRadius: 'var(--radius-xl)', overflow: 'hidden', boxShadow: 'var(--shadow-sm)' }}>
              {/* photo */}
              <div style={{ position: 'relative', aspectRatio: '16 / 10', overflow: 'hidden', background: 'var(--surface-subtle)' }}>
                <img src={c.photo} alt={c.name} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(13,31,61,0.55), transparent 55%)' }}></div>
                <div style={{ position: 'absolute', left: 18, bottom: 16, display: 'flex', alignItems: 'center', gap: 8 }}>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: 7, background: 'rgba(255,255,255,0.95)', borderRadius: 'var(--radius-pill)', padding: '6px 13px', fontSize: 'var(--text-sm)', fontWeight: 700, color: `var(--${c.accent}-700)` }}>
                    <Icon name="mapPin" size={15} color={`var(--${c.accent}-600)`} />{c.area}
                  </span>
                </div>
              </div>
              {/* body */}
              <div style={{ padding: 'var(--space-6)' }}>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: 'var(--text-2xl)', fontWeight: 700, color: 'var(--text-strong)', margin: '0 0 4px' }}>{c.name}</h3>
                <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-muted)', margin: '0 0 18px' }}>NextGen International School · Karachi</p>
                <div style={{ display: 'flex', gap: 'var(--space-3)', flexWrap: 'wrap' }}>
                  <Social kind="instagram" handle={c.instagram.handle} url={c.instagram.url} />
                  <Social kind="facebook" handle={c.facebook.handle} url={c.facebook.url} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
window.Campuses = Campuses;
