// NGIS website — Contact Us (phone/address/email for both campuses)
function ContactScreen({ onNav }) {
  const { Card, EyebrowLabel, Button } = window.NGISDesignSystem_f6dc23;
  const Icon = window.Icon;
  const { PATTERNS, NAVY_GRADIENT, SectionDecor } = window.Decor;

  const campuses = [
    {
      accent: 'navy',
      chapter: 'Malir City Main Chapter',
      address: 'Plot 20/423, Kala Board, Malir, Karachi',
      phone: '0371 7423151',
      email: 'info@ngis.pk',
    },
    {
      accent: 'gold',
      chapter: 'Jinnah Avenue Chapter',
      address: 'E-7/4, Block A, Kazimabad, Model Colony, Karachi',
      phone: '0371 7423151',
      email: 'info@ngis.pk',
    },
  ];

  return (
    <main>
      {/* ===================== Header ===================== */}
      <section style={{
        background: NAVY_GRADIENT,
        position: 'relative',
        overflow: 'hidden',
        minHeight: 'calc(100vh - var(--header-height))',
        display: 'flex',
        alignItems: 'center',
      }}>
        <div style={{ ...PATTERNS.gridNavy, position: 'absolute', inset: 0, opacity: 0.6 }}></div>
        <SectionDecor tone="navy" />
        <div style={{ position: 'relative', maxWidth: 'var(--container)', margin: '0 auto', padding: 'var(--space-9) var(--space-5)', width: '100%' }}>
          <EyebrowLabel color="gold">Get in touch</EyebrowLabel>
          <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'var(--text-6xl)', fontWeight: 700, color: '#fff', margin: '18px 0 0', lineHeight: 'var(--leading-tight)', letterSpacing: 'var(--tracking-tight)' }}>Contact NextGen International School</h1>
          <p style={{ fontSize: 'var(--text-xl)', color: 'rgba(255,255,255,0.82)', margin: '20px 0 0', maxWidth: 660, lineHeight: 'var(--leading-normal)' }}>
            Speak to our admissions team, book a campus tour, or simply say hello. We welcome you at either of our two Karachi campuses.
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 24 }}>
            <Button variant="primary" size="lg" iconRight={<Icon name="arrowRight" size={18} />} onClick={() => onNav('Admissions', 'enquiry-form')}>Send an enquiry</Button>
            <Button variant="secondary" size="lg" onClick={() => onNav('Contact', 'campus-contacts')}>Call us now</Button>
          </div>
        </div>
      </section>

      {/* ===================== Contact details ===================== */}
      <section id="campus-contacts" style={{ background: 'var(--surface-page)', position: 'relative', overflow: 'hidden', scrollMarginTop: 'var(--header-height)' }}>
        <div style={{ ...PATTERNS.dotsLight, position: 'absolute', inset: 0, opacity: 0.5 }}></div>
        <div style={{ position: 'relative', maxWidth: 'var(--container)', margin: '0 auto', padding: 'var(--space-9) var(--space-5)' }}>
          <div style={{ textAlign: 'center', maxWidth: 640, margin: '0 auto var(--space-7)' }}>
            <EyebrowLabel color="navy">Two campuses in Karachi</EyebrowLabel>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontWeight: 700, color: 'var(--text-strong)', margin: '12px 0 0', lineHeight: 'var(--leading-tight)' }}>Reach out to either chapter</h2>
          </div>
          <div className="ngis-grid-2" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 'var(--space-6)' }}>
            {campuses.map(c => (
              <Card key={c.chapter} accent={c.accent} padding="var(--space-7)">
                <div style={{ fontFamily: 'var(--font-sans)', fontWeight: 700, fontSize: 'var(--text-xs)', textTransform: 'uppercase', letterSpacing: 'var(--tracking-wide)', color: `var(--${c.accent}-600)`, marginBottom: 6 }}>NextGen International School</div>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontWeight: 700, color: 'var(--text-strong)', margin: '0 0 20px' }}>{c.chapter}</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: 14 }}>
                    <div style={{ width: 40, height: 40, flexShrink: 0, borderRadius: '50%', background: `var(--${c.accent}-50)`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Icon name="phone" size={18} color={`var(--${c.accent}-600)`} />
                    </div>
                    <div>
                      <div style={{ fontSize: 'var(--text-xs)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: 'var(--tracking-wide)', color: 'var(--text-muted)' }}>Call us now</div>
                      <a href={`tel:+92${c.phone.replace(/\D/g, '').replace(/^0/, '')}`} style={{ fontSize: 'var(--text-base)', fontWeight: 700, color: 'var(--text-strong)', textDecoration: 'none' }}>{c.phone}</a>
                    </div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: 14 }}>
                    <div style={{ width: 40, height: 40, flexShrink: 0, borderRadius: '50%', background: `var(--${c.accent}-50)`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Icon name="mapPin" size={18} color={`var(--${c.accent}-600)`} />
                    </div>
                    <div>
                      <div style={{ fontSize: 'var(--text-xs)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: 'var(--tracking-wide)', color: 'var(--text-muted)' }}>Visit us</div>
                      <div style={{ fontSize: 'var(--text-base)', fontWeight: 600, color: 'var(--text-strong)', lineHeight: 'var(--leading-snug)' }}>{c.address}</div>
                    </div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: 14 }}>
                    <div style={{ width: 40, height: 40, flexShrink: 0, borderRadius: '50%', background: `var(--${c.accent}-50)`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Icon name="mail" size={18} color={`var(--${c.accent}-600)`} />
                    </div>
                    <div>
                      <div style={{ fontSize: 'var(--text-xs)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: 'var(--tracking-wide)', color: 'var(--text-muted)' }}>Email</div>
                      <a href={`mailto:${c.email}`} style={{ fontSize: 'var(--text-base)', fontWeight: 700, color: 'var(--text-strong)', textDecoration: 'none' }}>{c.email}</a>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== Photos + social ===================== */}
      <Campuses heading={false} />

      {/* ===================== CTA ===================== */}
      <section style={{ background: NAVY_GRADIENT, position: 'relative', overflow: 'hidden' }}>
        <div style={{ ...PATTERNS.gridNavy, position: 'absolute', inset: 0, opacity: 0.6 }}></div>
        <div style={{ position: 'relative', maxWidth: 'var(--container)', margin: '0 auto', padding: 'var(--space-8) var(--space-5)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 'var(--space-6)', flexWrap: 'wrap' }}>
          <div>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontWeight: 700, color: '#fff', margin: 0, lineHeight: 'var(--leading-tight)' }}>Ready to visit or enquire?</h2>
            <p style={{ fontSize: 'var(--text-lg)', color: 'rgba(255,255,255,0.82)', margin: '12px 0 0' }}>Our admissions team is ready to answer your questions.</p>
          </div>
          <Button variant="primary" size="lg" iconRight={<Icon name="arrowRight" size={18} />} onClick={() => onNav('Admissions', 'enquiry-form')} style={{ flexShrink: 0 }}>Send an enquiry</Button>
        </div>
      </section>
    </main>
  );
}
window.ContactScreen = ContactScreen;
