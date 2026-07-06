// NGIS website — Why NGIS (unique features, vision & mission, affiliations)
function AffiliationCard({ a }) {
  const [hover, setHover] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center',
        background: 'var(--surface-card)', border: '1px solid var(--border)', borderRadius: 'var(--radius-xl)',
        padding: 'var(--space-7) var(--space-6)',
        boxShadow: hover ? 'var(--shadow-md)' : 'var(--shadow-sm)',
        transform: hover ? 'translateY(-4px)' : 'translateY(0)',
        transition: 'transform var(--dur-base) var(--ease-standard), box-shadow var(--dur-base) var(--ease-standard)',
      }}
    >
      <div style={{ fontFamily: 'var(--font-sans)', fontWeight: 700, fontSize: 'var(--text-xs)', textTransform: 'uppercase', letterSpacing: 'var(--tracking-wide)', color: 'var(--text-muted)', marginBottom: 18 }}>{a.role}</div>
      <div style={{ height: 96, width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <img src={a.logo} alt={a.name} style={{ maxHeight: '100%', maxWidth: '85%', objectFit: 'contain' }} />
      </div>
      <div style={{ height: 1, background: 'var(--border)', width: '100%', margin: '20px 0 16px' }}></div>
      <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-body)', lineHeight: 'var(--leading-normal)', margin: 0 }}>{a.d}</p>
    </div>
  );
}

function WhyNgisScreen({ onNav }) {
  const { Card, EyebrowLabel, Button } = window.NGISDesignSystem_f6dc23;
  const Icon = window.Icon;
  const { PATTERNS, NAVY_GRADIENT, SectionDecor, PhotoFrame, EduMotifs } = window.Decor;
  const crestAccents = ['green', 'navy', 'blue', 'gold'];

  const features = [
    { icon: 'star', t: 'Faith-Centered Learning', d: 'Friends of Quran programme, Prophet Muhammad ﷺ as our role model — Islamic values woven into every school day.' },
    { icon: 'flask', t: 'ETM Garage', d: "Pakistan's first Centre for Innovation & Entrepreneurship — where students build, code and invent with real technology." },
    { icon: 'languages', t: 'Trilingual by Design', d: 'Arabic, Korean & Chinese languages taught alongside the core curriculum — preparing students for a global stage.' },
    { icon: 'award', t: 'Korea Certified', d: 'Accredited by Robotron, South Korea — a Robotron Certified System regularly audited to maintain international standards.' },
    { icon: 'lightbulb', t: 'Discovery Hubs', d: 'Traditional classrooms replaced with Discovery & Innovation Hubs — every space is designed for curiosity, not compliance.' },
    { icon: 'trophy', t: 'Talent Feeder Program', d: "Pakistan's first Talent Feeder Program — identifying and nurturing exceptional students for national and international competitions." },
  ];

  const affiliations = [
    { name: 'Educational Transformation Movement', logo: '../../assets/photos/Logos (2).png', role: 'The movement', d: "NGIS is proudly powered by ETM — Pakistan's first ETM-powered school." },
    { name: 'Robotron', logo: '../../assets/photos/Logos (1).png', role: 'Certification body', d: 'Our systems are certified and regularly audited by Robotron, South Korea.' },
    { name: 'Robotmea', logo: '../../assets/photos/Logos (4).png', role: 'Parent organisation', d: 'NGIS is an initiative of Robotmea.' },
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
        <EduMotifs tone="navy" density="light" />
        <SectionDecor tone="navy" />
        <div className="ngis-feature-grid" style={{ position: 'relative', maxWidth: 'var(--container)', margin: '0 auto', padding: 'var(--space-9) var(--space-5)', display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: 'var(--space-8)', alignItems: 'center' }}>
          <div>
            <EyebrowLabel color="gold">Why NGIS</EyebrowLabel>
            <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'var(--text-6xl)', fontWeight: 700, color: '#fff', margin: '18px 0 0', lineHeight: 'var(--leading-tight)', letterSpacing: 'var(--tracking-tight)' }}>Why choose NextGen International School</h1>
            <p style={{ fontSize: 'var(--text-xl)', color: 'rgba(255,255,255,0.82)', margin: '20px 0 0', maxWidth: 640, lineHeight: 'var(--leading-normal)' }}>
              Pakistan&rsquo;s first ETM-powered school brings together South Korean academic standards, an emerging-technology curriculum and deep-rooted Islamic values &mdash; an education you won&rsquo;t find anywhere else.
            </p>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 24 }}>
              <Button variant="primary" size="lg" iconRight={<Icon name="arrowRight" size={18} />} onClick={() => onNav('Admissions', 'enquiry-form')}>Begin admission</Button>
              <Button variant="secondary" size="lg" onClick={() => onNav('Contact')}>Contact us</Button>
            </div>
          </div>
          <PhotoFrame src="../../assets/photos/innovate-lab.png" alt="Students at NextGen International School" accent="gold" ratio="4 / 3" caption="Why NGIS" />
        </div>
      </section>

      {/* ===================== Unique features ===================== */}
      <section style={{ background: 'var(--surface-page)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ ...PATTERNS.dotsLight, position: 'absolute', inset: 0, opacity: 0.5 }}></div>
        <div style={{ position: 'relative', maxWidth: 'var(--container)', margin: '0 auto', padding: 'var(--space-9) var(--space-5)' }}>
          <div style={{ textAlign: 'center', maxWidth: 680, margin: '0 auto var(--space-7)' }}>
            <EyebrowLabel color="red">Why choose NGIS</EyebrowLabel>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontWeight: 700, color: 'var(--text-strong)', margin: '12px 0 0', lineHeight: 'var(--leading-tight)' }}>Unique features you won&rsquo;t find elsewhere</h2>
          </div>
          <div className="ngis-grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'var(--space-5)' }}>
            {features.map((f, i) => {
              const accent = crestAccents[i % 4];
              return (
                <div key={f.t} style={{ background: 'var(--surface-card)', border: '1px solid var(--border)', borderTop: `3px solid var(--${accent}-500)`, borderRadius: 'var(--radius-lg)', padding: 'var(--space-6)', boxShadow: 'var(--shadow-sm)' }}>
                  <div style={{ width: 52, height: 52, borderRadius: 'var(--radius-md)', background: `var(--${accent}-50)`, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}>
                    <Icon name={f.icon} size={26} color={`var(--${accent}-600)`} />
                  </div>
                  <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: 'var(--text-xl)', fontWeight: 600, color: 'var(--text-strong)', margin: '0 0 8px' }}>{f.t}</h3>
                  <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-body)', lineHeight: 'var(--leading-normal)', margin: 0 }}>{f.d}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===================== Vision & Mission ===================== */}
      <section style={{ background: 'var(--surface-subtle)', position: 'relative', overflow: 'hidden', borderTop: '1px solid var(--border)' }}>
        <EduMotifs tone="light" density="light" />
        <div style={{ position: 'relative', maxWidth: 'var(--container)', margin: '0 auto', padding: 'var(--space-9) var(--space-5)' }}>
          <div style={{ textAlign: 'center', maxWidth: 680, margin: '0 auto var(--space-7)' }}>
            <EyebrowLabel color="navy">Vision &amp; mission</EyebrowLabel>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontWeight: 700, color: 'var(--text-strong)', margin: '12px 0 0', lineHeight: 'var(--leading-tight)' }}>What drives everything we do</h2>
          </div>
          <div className="ngis-grid-2" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 'var(--space-5)' }}>
            <div style={{ background: 'var(--surface-card)', border: '1px solid var(--border)', borderTop: '4px solid var(--navy-500)', borderRadius: 'var(--radius-xl)', padding: 'var(--space-7)', boxShadow: 'var(--shadow-sm)' }}>
              <EyebrowLabel color="navy">Our vision</EyebrowLabel>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: 'var(--text-xl)', fontWeight: 700, color: 'var(--text-strong)', margin: '12px 0 14px', lineHeight: 'var(--leading-snug)' }}>&ldquo;Transforming Education for Better Tomorrow.&rdquo;</h3>
              <p style={{ fontSize: 'var(--text-base)', color: 'var(--text-body)', lineHeight: 'var(--leading-normal)', margin: 0 }}>
                We envision a Pakistan where every child has access to a world-class, faith-rooted education that prepares them not just for exams, but for life &mdash; and for leadership in a rapidly changing world.
              </p>
            </div>
            <div style={{ background: 'var(--surface-card)', border: '1px solid var(--border)', borderTop: '4px solid var(--gold-500)', borderRadius: 'var(--radius-xl)', padding: 'var(--space-7)', boxShadow: 'var(--shadow-sm)' }}>
              <EyebrowLabel color="gold">Our mission</EyebrowLabel>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: 'var(--text-xl)', fontWeight: 700, color: 'var(--text-strong)', margin: '12px 0 14px', lineHeight: 'var(--leading-snug)' }}>&ldquo;Empowering every child to become a confident tech entrepreneur, compassionate thought leader, and ambassador of Islam.&rdquo;</h3>
              <p style={{ fontSize: 'var(--text-base)', color: 'var(--text-body)', lineHeight: 'var(--leading-normal)', margin: 0 }}>
                To deliver a world-class, ETM-powered educational system aligned with Islamic values, emerging technologies, South Korean academic standards, and a 21st-century STEAM framework.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== Affiliation ===================== */}
      <section style={{ background: 'var(--surface-page)', position: 'relative', overflow: 'hidden' }}>
        <SectionDecor tone="light" />
        <div style={{ position: 'relative', maxWidth: 'var(--container)', margin: '0 auto', padding: 'var(--space-9) var(--space-5)' }}>
          <div style={{ textAlign: 'center', maxWidth: 680, margin: '0 auto var(--space-7)' }}>
            <EyebrowLabel color="blue">Backed by</EyebrowLabel>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontWeight: 700, color: 'var(--text-strong)', margin: '12px 0 0', lineHeight: 'var(--leading-tight)' }}>Our affiliations</h2>
            <p style={{ fontSize: 'var(--text-lg)', color: 'var(--text-body)', margin: '14px 0 0', lineHeight: 'var(--leading-normal)' }}>NGIS is a project of the Educational Transformation Movement, an initiative of Robotmea, accredited by Robotron, South Korea.</p>
          </div>
          <div className="ngis-grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'var(--space-5)' }}>
            {affiliations.map(a => <AffiliationCard key={a.name} a={a} />)}
          </div>
        </div>
      </section>

      {/* ===================== CTA ===================== */}
      <section style={{ background: NAVY_GRADIENT, position: 'relative', overflow: 'hidden' }}>
        <div style={{ ...PATTERNS.gridNavy, position: 'absolute', inset: 0, opacity: 0.6 }}></div>
        <EduMotifs tone="navy" density="light" />
        <div style={{ position: 'relative', maxWidth: 'var(--container)', margin: '0 auto', padding: 'var(--space-8) var(--space-5)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 'var(--space-6)', flexWrap: 'wrap' }}>
          <div>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontWeight: 700, color: '#fff', margin: 0, lineHeight: 'var(--leading-tight)' }}>See it for yourself</h2>
            <p style={{ fontSize: 'var(--text-lg)', color: 'rgba(255,255,255,0.82)', margin: '12px 0 0' }}>Book a tour or begin your child&rsquo;s application today.</p>
          </div>
          <Button variant="primary" size="lg" iconRight={<Icon name="arrowRight" size={18} />} onClick={() => onNav('Admissions', 'enquiry-form')} style={{ flexShrink: 0 }}>Begin admission</Button>
        </div>
      </section>
    </main>
  );
}
window.WhyNgisScreen = WhyNgisScreen;
