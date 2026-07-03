// NGIS website — footer
function Footer({ onNav }) {
  const Icon = window.Icon;
  const cols = [
    { h: 'Academics', items: ['Grade Structure', 'The System Model', 'Discovery & Innovation Hub', 'ETM Garage'] },
    { h: 'Admissions', items: ['Admission Process', 'Uniform Guideline', 'Required Documents'] },
    { h: 'Gallery', items: ['Life at NextGen', 'Classrooms', 'STEAM Projects'] },
  ];

  const socials = [
    { kind: 'instagram', url: 'https://www.instagram.com/ngis_malir' },
    { kind: 'facebook', url: 'https://www.facebook.com/profile.php?id=61575432466967' },
  ];

  return (
    <footer style={{ background: 'var(--navy-700)', color: 'rgba(255,255,255,0.82)' }}>
      <div style={{ maxWidth: 'var(--container)', margin: '0 auto', padding: 'var(--space-6) var(--space-5) var(--space-4)' }}>
        <div className="ngis-footer-grid" style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr 1fr', gap: 'var(--space-6)' }}>

          {/* Brand + contact */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
              <img src="../../assets/ngis-logo-crest.png" alt="NGIS" style={{ width: 36, height: 36, objectFit: 'contain' }} />
              <span style={{ fontFamily: 'var(--font-serif)', fontWeight: 700, fontSize: 16, color: '#fff' }}>NextGen International School</span>
            </div>
            <p style={{ fontSize: 'var(--text-xs)', lineHeight: 'var(--leading-normal)', maxWidth: 300, margin: '0 0 14px', color: 'rgba(255,255,255,0.65)' }}>
              Pakistan&rsquo;s first ETM-powered school, Playgroup&ndash;Grade&nbsp;5.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6, fontSize: 'var(--text-xs)' }}>
              <span style={{ display: 'flex', gap: 7, alignItems: 'center' }}>
                <Icon name="mapPin" size={14} color="var(--gold-500)" />Malir Cantt &amp; Jinnah Avenue, Karachi
              </span>
              <span style={{ display: 'flex', gap: 7, alignItems: 'center' }}>
                <Icon name="mail" size={14} color="var(--gold-500)" />admissions@ngis.pk
              </span>
            </div>
            {/* Social — single row, no campus split */}
            <div style={{ display: 'flex', gap: 8, marginTop: 14 }}>
              {socials.map((s, i) => (
                <a key={i} href={s.url} target="_blank" rel="noopener noreferrer" style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  width: 32, height: 32, borderRadius: '50%',
                  background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.14)',
                }}>
                  <Icon name={s.kind} size={15} color={s.kind === 'instagram' ? '#E1306C' : '#4d8bf0'} />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {cols.map(c => (
            <div key={c.h}>
              <div style={{ fontFamily: 'var(--font-sans)', fontWeight: 700, fontSize: 'var(--text-xs)', textTransform: 'uppercase', letterSpacing: 'var(--tracking-wide)', color: '#fff', marginBottom: 10 }}>{c.h}</div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 7 }}>
                {c.items.map(it => (
                  <li key={it}><a onClick={() => onNav && onNav(c.h)} style={{ fontSize: 'var(--text-xs)', color: 'rgba(255,255,255,0.7)', cursor: 'pointer', textDecoration: 'none' }}>{it}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div style={{ borderTop: '1px solid rgba(255,255,255,0.14)', marginTop: 'var(--space-5)', paddingTop: 'var(--space-3)', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 6, fontSize: 'var(--text-xs)', color: 'rgba(255,255,255,0.55)' }}>
          <span>© 2026 NextGen International School · An Initiative of Robotmea</span>
          <span>Privacy Policy · Terms</span>
        </div>
      </div>
    </footer>
  );
}
window.Footer = Footer;