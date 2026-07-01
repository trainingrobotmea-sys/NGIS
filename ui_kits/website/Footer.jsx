// NGIS website — footer
function Footer({ onNav }) {
  const Icon = window.Icon;
  const cols = [
    { h: 'Academics', items: ['Grade Structure', 'The System Model', 'Discovery & Innovation Hub', 'ETM Garage'] },
    { h: 'Faculty', items: ['Faculty Development Cell', 'Robotron Certification', 'International L&D', 'Continuous PD'] },
    { h: 'Admissions', items: ['Admission Process', 'Uniform Guideline', 'Required Documents', 'Safety & Wellbeing'] },
    { h: 'Gallery', items: ['Life at NextGen', 'Classrooms', 'STEAM Projects', 'Events'] },
  ];
  return (
    <footer style={{ background: 'var(--navy-700)', color: 'rgba(255,255,255,0.82)' }}>
      <div style={{ maxWidth: 'var(--container)', margin: '0 auto', padding: 'var(--space-8) var(--space-5) var(--space-6)' }}>
        <div className="ngis-footer-grid" style={{ display: 'grid', gridTemplateColumns: '1.6fr 1fr 1fr 1fr 1fr', gap: 'var(--space-6)' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
              <img src="../../assets/ngis-logo-crest.png" alt="NGIS" style={{ width: 48, height: 48, objectFit: 'contain' }} />
              <span style={{ fontFamily: 'var(--font-serif)', fontWeight: 700, fontSize: 18, color: '#fff' }}>NextGen International School</span>
            </div>
            <p style={{ fontSize: 'var(--text-sm)', lineHeight: 'var(--leading-normal)', maxWidth: 320, margin: '0 0 16px' }}>
              Pakistan&rsquo;s first ETM-powered school (Playgroup&ndash;Grade&nbsp;5) — transforming education for a better tomorrow, on South Korean standards and grounded in Islamic values.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12, fontSize: 'var(--text-sm)' }}>
              <div style={{ display: 'flex', gap: 8, alignItems: 'flex-start' }}>
                <Icon name="mapPin" size={16} color="var(--gold-500)" style={{ marginTop: 2, flexShrink: 0 }} />
                <span><strong style={{ color: '#fff', fontWeight: 700 }}>Malir Campus</strong><br />Malir Cantt, Karachi</span>
              </div>
              <div style={{ display: 'flex', gap: 8, alignItems: 'flex-start' }}>
                <Icon name="mapPin" size={16} color="var(--gold-500)" style={{ marginTop: 2, flexShrink: 0 }} />
                <span><strong style={{ color: '#fff', fontWeight: 700 }}>Jinnah Avenue Campus</strong><br />Jinnah Avenue, Karachi</span>
              </div>
              <span style={{ display: 'flex', gap: 8, alignItems: 'center' }}><Icon name="mail" size={16} color="var(--gold-500)" />admissions@ngis.pk</span>
            </div>
            {/* Social — both campuses */}
            <div style={{ marginTop: 18 }}>
              <div style={{ fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: 'var(--tracking-wide)', color: 'rgba(255,255,255,0.6)', marginBottom: 10 }}>Follow our campuses</div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {[
                  { kind: 'instagram', label: 'Malir', url: 'https://www.instagram.com/ngis_malir' },
                  { kind: 'facebook', label: 'Malir', url: 'https://www.facebook.com/profile.php?id=61575432466967' },
                  { kind: 'instagram', label: 'Jinnah Ave', url: 'https://www.instagram.com/ngis_jinnahavenue_official' },
                  { kind: 'facebook', label: 'Jinnah Ave', url: 'https://www.facebook.com/profile.php?id=61575391815391' },
                ].map((s, i) => (
                  <a key={i} href={s.url} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: 7, textDecoration: 'none', background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.14)', borderRadius: 'var(--radius-pill)', padding: '6px 12px', fontSize: 'var(--text-xs)', fontWeight: 600, color: 'rgba(255,255,255,0.9)' }}>
                    <Icon name={s.kind} size={15} color={s.kind === 'instagram' ? '#E1306C' : '#4d8bf0'} />{s.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
          {cols.map(c => (
            <div key={c.h}>
              <div style={{ fontFamily: 'var(--font-sans)', fontWeight: 700, fontSize: 'var(--text-sm)', textTransform: 'uppercase', letterSpacing: 'var(--tracking-wide)', color: '#fff', marginBottom: 14 }}>{c.h}</div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
                {c.items.map(it => (
                  <li key={it}><a onClick={() => onNav && onNav(c.h)} style={{ fontSize: 'var(--text-sm)', color: 'rgba(255,255,255,0.78)', cursor: 'pointer', textDecoration: 'none' }}>{it}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.14)', marginTop: 'var(--space-6)', paddingTop: 'var(--space-4)', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 8, fontSize: 'var(--text-xs)', color: 'rgba(255,255,255,0.6)' }}>
          <span>© 2026 NextGen International School. A project of Robotmea · Accredited by Robotron, South Korea.</span>
          <span>Privacy Policy · Terms · Safeguarding</span>
        </div>
      </div>
    </footer>
  );
}
window.Footer = Footer;
