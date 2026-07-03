// NGIS website — Faculty Development Cell
// Content from the school's Faculty Development reference + Robotmea ETM brief.
function FacultyScreen({ onNav }) {
  const { Card, EyebrowLabel, Button, Badge } = window.NGISDesignSystem_f6dc23;
  const Icon = window.Icon;
  const { PATTERNS, NAVY_GRADIENT, SectionDecor, PhotoFrame, EduMotifs } = window.Decor;

  const programmes = [
    { t: 'Teacher Training & PD', d: 'Structured professional development that brings an entire faculty up to a modern teaching standard.', icon: 'graduationCap', accent: 'red' },
    { t: 'Educational Leadership', d: 'Leadership programmes for principals and heads of department driving whole-school change.', icon: 'users', accent: 'navy' },
    { t: 'AI, Robotics & STEAM', d: 'Deep capability-building in AI, robotics, STEAM education and emerging technologies.', icon: 'brain', accent: 'red' },
    { t: 'Curriculum & Assessment', d: 'Innovation in curriculum design and assessment, moving beyond rote learning toward evidence of real understanding.', icon: 'bookMarked', accent: 'navy' },
    { t: 'International Certification', d: 'Internationally recognised certifications and recognition for participating educators.', icon: 'award', accent: 'red' },
    { t: 'Continuous PD (CPD)', d: 'Ongoing CPD cycles that keep the standard alive long after the initial training ends.', icon: 'refresh', accent: 'navy' },
    { t: 'International L&D', d: 'Access to international learning-and-development programmes, courses and exchange opportunities.', icon: 'globe', accent: 'red' },
  ];

  const credentials = [
    { icon: 'award', t: 'Robotron Certification', d: 'Educators who complete the programme earn certificates issued by Robotron, South Korea.' },
    { icon: 'globe', t: 'International Standards', d: 'Training is benchmarked to global teaching standards, not local minimums.' },
    { icon: 'users', t: 'Open to Outsiders', d: 'The Cell is open to educators beyond NGIS, a resource for the wider teaching community.' },
    { icon: 'shieldCheck', t: 'An Initiative of Robotmea', d: 'An initiative of Robotmea, accredited by Robotron, the same authority behind ETM.' },
  ];

  return (
    <main>
      {/* ===================== Header ===================== */}
      <section style={{ background: NAVY_GRADIENT, position: 'relative', overflow: 'hidden' }}>
        <div style={{ ...PATTERNS.gridNavy, position: 'absolute', inset: 0, opacity: 0.6 }}></div>
        <EduMotifs tone="navy" density="light" />
        <SectionDecor tone="navy" />
        <div className="ngis-feature-grid" style={{ position: 'relative', maxWidth: 'var(--container)', margin: '0 auto', padding: 'var(--space-9) var(--space-5)', display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: 'var(--space-8)', alignItems: 'center' }}>
          <div>
            <EyebrowLabel color="gold">An Initiative of Robotmea · Accredited by Robotron</EyebrowLabel>
            <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'var(--text-6xl)', fontWeight: 700, color: '#fff', margin: '14px 0 0', lineHeight: 'var(--leading-tight)', letterSpacing: 'var(--tracking-tight)' }}>Faculty Development Cell</h1>
            <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: 'var(--text-2xl)', color: 'var(--gold-500)', margin: '12px 0 0' }}>Teachers first. Always.</p>
            <p style={{ fontSize: 'var(--text-lg)', color: 'rgba(255,255,255,0.82)', margin: '18px 0 0', maxWidth: 540, lineHeight: 'var(--leading-normal)' }}>
              The single most reliable predictor of a programme&rsquo;s outcome is the teacher standing next to the technology. The Cell empowers educators and school leaders with 21st-century teaching skills, from emerging-technology pedagogy to international certification and continuous professional development.
            </p>
          </div>
          <PhotoFrame src="../../assets/photos/faculty-development.png" alt="Faculty Development session at NGIS" accent="red" ratio="4 / 3" caption="Empowering educators" />
        </div>
      </section>

      {/* ===================== Why teachers first ===================== */}
      <section style={{ background: 'var(--surface-page)', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: 'var(--container)', margin: '0 auto', padding: 'var(--space-7) var(--space-5)' }}>
          <div style={{ display: 'flex', gap: 'var(--space-6)', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center', textAlign: 'center' }}>
            <p style={{ fontFamily: 'var(--font-serif)', fontSize: 'var(--text-3xl)', fontWeight: 500, color: 'var(--text-strong)', lineHeight: 'var(--leading-snug)', margin: 0, maxWidth: 900, textWrap: 'balance' }}>
              Technology changes a classroom only as much as the teacher beside it. So we invest in teachers first: <span style={{ color: 'var(--red-600)' }}>better teachers, stronger learners, a brighter tomorrow.</span>
            </p>
          </div>
        </div>
      </section>

      {/* ===================== Programmes ===================== */}
      <section style={{ background: 'var(--surface-subtle)', position: 'relative', overflow: 'hidden' }}>
        <EduMotifs tone="light" density="light" />
        <SectionDecor tone="light" />
        <div style={{ position: 'relative', maxWidth: 'var(--container)', margin: '0 auto', padding: 'var(--space-9) var(--space-5)' }}>
          <div style={{ textAlign: 'center', maxWidth: 680, margin: '0 auto var(--space-7)' }}>
            <EyebrowLabel color="red">What the Cell delivers</EyebrowLabel>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'var(--text-4xl)', fontWeight: 700, color: 'var(--text-strong)', margin: '12px 0 0', lineHeight: 'var(--leading-tight)' }}>Seven programmes for educator growth</h2>
          </div>
          <div className="ngis-grid-4" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 'var(--space-5)' }}>
            {programmes.map(p => (
              <Card key={p.t} accent={p.accent} interactive>
                <div style={{ width: 52, height: 52, borderRadius: 'var(--radius-md)', background: `var(--${p.accent}-50)`, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}>
                  <Icon name={p.icon} size={26} color={`var(--${p.accent}-600)`} />
                </div>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: 'var(--text-xl)', fontWeight: 600, color: 'var(--text-strong)', margin: '0 0 8px', lineHeight: 'var(--leading-snug)' }}>{p.t}</h3>
                <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-body)', lineHeight: 'var(--leading-normal)', margin: 0 }}>{p.d}</p>
              </Card>
            ))}
            {/* CTA tile */}
            <div style={{ background: NAVY_GRADIENT, borderRadius: 'var(--radius-lg)', padding: 'var(--space-6)', display: 'flex', flexDirection: 'column', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
              <div style={{ ...PATTERNS.dotsNavy, position: 'absolute', inset: 0, opacity: 0.5 }}></div>
              <div style={{ position: 'relative' }}>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: 'var(--text-xl)', fontWeight: 700, color: '#fff', margin: '0 0 10px', lineHeight: 'var(--leading-snug)' }}>Train with us</h3>
                <p style={{ fontSize: 'var(--text-sm)', color: 'rgba(255,255,255,0.78)', margin: '0 0 16px', lineHeight: 'var(--leading-normal)' }}>Open to educators from every school.</p>
                <Button variant="primary" size="sm" iconRight={<Icon name="arrowRight" size={15} />} onClick={() => onNav('Admissions')}>Enquire</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== Credentials ===================== */}
      <section style={{ background: 'var(--surface-page)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ ...PATTERNS.dotsLight, position: 'absolute', inset: 0, opacity: 0.4 }}></div>
        <div style={{ position: 'relative', maxWidth: 'var(--container)', margin: '0 auto', padding: 'var(--space-9) var(--space-5)' }}>
          <div className="ngis-feature-grid" style={{ display: 'grid', gridTemplateColumns: '0.85fr 1.15fr', gap: 'var(--space-8)', alignItems: 'center' }}>
            <PhotoFrame src="../../assets/photos/students-classroom.png" alt="NGIS learners" accent="navy" ratio="5 / 4" caption="Trained for global standards" />
            <div>
              <EyebrowLabel color="navy">Recognition that travels</EyebrowLabel>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'var(--text-4xl)', fontWeight: 700, color: 'var(--text-strong)', margin: '12px 0 22px', lineHeight: 'var(--leading-tight)' }}>Certified by Robotron. Open to all.</h2>
              <div className="ngis-grid-2" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 'var(--space-4)' }}>
                {credentials.map((c, i) => {
                  const accent = i % 2 === 0 ? 'navy' : 'red';
                  return (
                    <div key={c.t} style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                      <div style={{ width: 46, height: 46, flexShrink: 0, borderRadius: 'var(--radius-md)', background: `var(--${accent}-50)`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Icon name={c.icon} size={23} color={`var(--${accent}-600)`} />
                      </div>
                      <div>
                        <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--text-base)', fontWeight: 700, color: 'var(--text-strong)', margin: '0 0 4px' }}>{c.t}</h3>
                        <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-body)', lineHeight: 'var(--leading-normal)', margin: 0 }}>{c.d}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== CTA ===================== */}
      <section style={{ background: NAVY_GRADIENT, position: 'relative', overflow: 'hidden' }}>
        <div style={{ ...PATTERNS.gridNavy, position: 'absolute', inset: 0, opacity: 0.6 }}></div>
        <EduMotifs tone="navy" density="light" />
        <div style={{ position: 'relative', maxWidth: 'var(--container)', margin: '0 auto', padding: 'var(--space-8) var(--space-5)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 'var(--space-6)', flexWrap: 'wrap' }}>
          <div>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'var(--text-4xl)', fontWeight: 700, color: '#fff', margin: 0, lineHeight: 'var(--leading-tight)' }}>Grow with the Faculty Development Cell</h2>
            <p style={{ fontSize: 'var(--text-lg)', color: 'rgba(255,255,255,0.82)', margin: '12px 0 0' }}>For NGIS faculty and educators everywhere. Earn Robotron-certified credentials.</p>
          </div>
          <Button variant="primary" size="lg" iconRight={<Icon name="arrowRight" size={18} />} onClick={() => onNav('Admissions')} style={{ flexShrink: 0 }}>Get in touch</Button>
        </div>
      </section>
    </main>
  );
}
window.FacultyScreen = FacultyScreen;
