// NGIS website — Home screen (content from the NGIS Prospectus + ETM Concept Deck)
function HomeScreen({ onNav }) {
  const { Button, Stat, Card, EyebrowLabel, Badge } = window.NGISDesignSystem_f6dc23;
  const Icon = window.Icon;
  const { PATTERNS, NAVY_GRADIENT, SectionDecor, PhotoFrame, EduMotifs, WaveDivider } = window.Decor;

  // The four crest quadrants → the ETM education model.
  const pillars = [
    { icon: 'school', accent: 'navy', t: 'South Korean Standards', d: 'A globally benchmarked academic system aligned with South Korean educational excellence and the Pakistan National Curriculum (NCP).' },
    { icon: 'brain', accent: 'red', t: 'Emerging Technologies', d: 'Robotics, coding and AI woven through every stage of learning — from Playgroup to Grade 5.' },
    { icon: 'bookOpen', accent: 'navy', t: 'Islamic Values', d: 'Character grounded in faith through our Friends of Quran and Role Model (SAWW) programmes.' },
    { icon: 'lightbulb', accent: 'red', t: 'Innovation & Enterprise', d: 'The ETM Garage — our centre for innovation that turns curious learners into young creators.' },
  ];

  // What ETM refuses to do (from the Concept Deck).
  const differentiators = [
    { no: 'No Homework', yes: 'Learning happens at school', icon: 'compass' },
    { no: 'No Heavy Bags', yes: 'The One-Book (System) Model', icon: 'layers' },
    { no: 'No Boring Classes', yes: 'PBIL is the default', icon: 'sparkles' },
    { no: 'No Rote Learning', yes: 'Portfolios over memorisation', icon: 'zap' },
    { no: 'No Exam Pressure', yes: 'Continuous assessment', icon: 'shieldCheck' },
  ];

  // The five published ETM standards — the "standards stack".
  const standards = [
    { n: '01', t: 'Friends of Quran & Role Model (SAWW)', icon: 'star' },
    { n: '02', t: 'STEAM-Integrated Academic Planning', icon: 'layers' },
    { n: '03', t: 'Discovery & Innovation Hub', icon: 'compass' },
    { n: '04', t: 'The ETM Garage', icon: 'flask' },
    { n: '05', t: 'Faculty Development Cell', icon: 'award' },
  ];

  return (
    <main>
      {/* ===================== Hero ===================== */}
      <section style={{ background: NAVY_GRADIENT, position: 'relative', overflow: 'hidden' }}>
        <div style={{ ...PATTERNS.gridNavy, position: 'absolute', inset: 0, opacity: 0.7 }}></div>
        <EduMotifs tone="navy" density="light" />
        <SectionDecor tone="navy" />
        <div style={{ position: 'relative', maxWidth: 'var(--container)', margin: '0 auto', padding: 'var(--space-9) var(--space-5)', display: 'grid', gridTemplateColumns: '1.12fr 0.88fr', gap: 'var(--space-8)', alignItems: 'center' }}>
          <div>
            {/* Pakistan-first ribbon */}
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 9, background: 'var(--red-500)', color: '#fff', padding: '8px 16px', borderRadius: 'var(--radius-pill)', fontFamily: 'var(--font-sans)', fontWeight: 700, fontSize: 'var(--text-sm)', letterSpacing: '0.01em', boxShadow: 'var(--shadow-md)' }}>
              <Icon name="star" size={16} color="var(--gold-500)" />Pakistan&rsquo;s First ETM-Powered School
            </div>
            <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'var(--text-6xl)', fontWeight: 700, lineHeight: 'var(--leading-tight)', letterSpacing: 'var(--tracking-tight)', color: '#fff', margin: '18px 0 0' }}>
              Transforming education<br />for a <span style={{ color: 'var(--gold-500)' }}>better tomorrow.</span>
            </h1>
            <p style={{ fontSize: 'var(--text-lg)', lineHeight: 'var(--leading-normal)', color: 'rgba(255,255,255,0.82)', maxWidth: 530, margin: '20px 0 28px' }}>
              A Playgroup&ndash;to&ndash;Grade&nbsp;5 movement combining South Korean academic standards, a STEAM-integrated curriculum and deep-rooted Islamic values. We are not just another school &mdash; we are a movement toward transformational education.
            </p>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <Button variant="primary" size="lg" onClick={() => onNav('Admissions')}>Apply for admission</Button>
            </div>
          </div>
          <PhotoFrame src="../../assets/photos/hero-students.png" alt="NGIS students outside the school" accent="red" ratio="4 / 3" caption="Karachi, Pakistan" />
        </div>
        {/* Accreditation strip */}
        <div style={{ position: 'relative', borderTop: '1px solid rgba(255,255,255,0.12)', background: 'rgba(0,0,0,0.18)' }}>
          <div style={{ maxWidth: 'var(--container)', margin: '0 auto', padding: 'var(--space-4) var(--space-5)', display: 'flex', alignItems: 'center', gap: 'var(--space-6)', flexWrap: 'wrap', fontSize: 'var(--text-sm)', color: 'rgba(255,255,255,0.78)' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: 8 }}><Icon name="shieldCheck" size={17} color="var(--gold-500)" />A project of Robotmea</span>
            <span style={{ display: 'flex', alignItems: 'center', gap: 8 }}><Icon name="award" size={17} color="var(--gold-500)" />Accredited by Robotron, South Korea</span>
            <span style={{ display: 'flex', alignItems: 'center', gap: 8 }}><Icon name="bookMarked" size={17} color="var(--gold-500)" />Integrated with the Pakistan National Curriculum</span>
          </div>
        </div>
      </section>

      {/* ===================== Facts band ===================== */}
      <section style={{ background: 'var(--surface-page)', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: 'var(--container)', margin: '0 auto', padding: 'var(--space-7) var(--space-5)', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 'var(--space-5)' }}>
          <Stat value="1st" label="ETM-powered school in Pakistan" color="red" />
          <Stat value="Play–G5" label="Playgroup to Grade 5 · ages 3–11" color="navy" />
          <Stat value="Arabic" label="Compulsory language of the Quran" color="red" />
          <Stat value="0" label="Homework · rote learning · exam pressure" color="navy" />
        </div>
      </section>

      {/* ===================== Who we are ===================== */}
      <section style={{ background: 'var(--surface-page)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ ...PATTERNS.dotsLight, position: 'absolute', inset: 0, opacity: 0.5 }}></div>
        <div style={{ position: 'relative', maxWidth: 'var(--container)', margin: '0 auto', padding: 'var(--space-9) var(--space-5)', display: 'grid', gridTemplateColumns: '0.9fr 1.1fr', gap: 'var(--space-8)', alignItems: 'center' }}>
          <PhotoFrame src="../../assets/photos/students-classroom.png" alt="NGIS students in class" accent="navy" ratio="5 / 4" caption="Our commitment to your child" />
          <div>
            <EyebrowLabel color="red">Who we are</EyebrowLabel>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'var(--text-4xl)', fontWeight: 700, color: 'var(--text-strong)', margin: '12px 0 0', lineHeight: 'var(--leading-tight)' }}>Where local values meet global standards</h2>
            <p style={{ fontSize: 'var(--text-lg)', color: 'var(--text-body)', margin: '18px 0 0', lineHeight: 'var(--leading-normal)' }}>
              NextGen International School brings a globally benchmarked educational system to Karachi — combining South Korean academic excellence with a STEAM-integrated curriculum and deep-rooted Islamic values, for learners from Playgroup through Grade 5.
            </p>
            {/* Vision callout */}
            <div style={{ marginTop: 'var(--space-5)', display: 'flex', gap: 16, alignItems: 'center', background: 'var(--navy-50)', border: '1px solid var(--navy-100)', borderLeft: '4px solid var(--red-500)', borderRadius: 'var(--radius-lg)', padding: 'var(--space-5)' }}>
              <div style={{ width: 48, height: 48, flexShrink: 0, borderRadius: 'var(--radius-md)', background: 'var(--surface-card)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: 'var(--shadow-sm)' }}>
                <Icon name="compass" size={24} color="var(--navy-600)" />
              </div>
              <div>
                <div style={{ fontSize: 'var(--text-xs)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: 'var(--tracking-wide)', color: 'var(--text-muted)' }}>Our vision</div>
                <div style={{ fontFamily: 'var(--font-serif)', fontSize: 'var(--text-2xl)', fontWeight: 700, color: 'var(--brand-ink)', lineHeight: 'var(--leading-snug)', marginTop: 2 }}>Transforming Education for a Better Tomorrow</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== Differentiators ===================== */}
      <section style={{ background: NAVY_GRADIENT, position: 'relative', overflow: 'hidden' }}>
        <div style={{ ...PATTERNS.dotsNavy, position: 'absolute', inset: 0, opacity: 0.8 }}></div>
        <div style={{ position: 'relative', maxWidth: 'var(--container)', margin: '0 auto', padding: 'var(--space-9) var(--space-5)' }}>
          <div style={{ textAlign: 'center', maxWidth: 680, margin: '0 auto var(--space-7)' }}>
            <EyebrowLabel color="gold">What ETM refuses to do</EyebrowLabel>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'var(--text-4xl)', fontWeight: 700, color: '#fff', margin: '12px 0 0', lineHeight: 'var(--leading-tight)' }}>From transactional to transformational</h2>
            <p style={{ fontSize: 'var(--text-lg)', color: 'rgba(255,255,255,0.82)', margin: '14px 0 0', lineHeight: 'var(--leading-normal)' }}>We replaced the tired conventions of traditional schooling with an ecosystem designed to make every child relevant for tomorrow&rsquo;s world.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 'var(--space-4)' }}>
            {differentiators.map(d => (
              <div key={d.no} style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: 'var(--radius-lg)', padding: 'var(--space-5)', display: 'flex', flexDirection: 'column', gap: 14 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, color: 'rgba(255,255,255,0.55)', fontSize: 'var(--text-sm)', fontWeight: 600, textDecoration: 'line-through', textDecorationColor: 'var(--red-500)' }}>
                  <Icon name="ban" size={16} color="var(--red-500)" />{d.no}
                </div>
                <div style={{ height: 1, background: 'rgba(255,255,255,0.12)' }}></div>
                <div style={{ width: 40, height: 40, borderRadius: 'var(--radius-md)', background: 'var(--red-500)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Icon name={d.icon} size={22} color="#fff" />
                </div>
                <div style={{ fontFamily: 'var(--font-sans)', fontWeight: 700, fontSize: 'var(--text-base)', color: '#fff', lineHeight: 'var(--leading-snug)' }}>{d.yes}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== Four pillars (crest) ===================== */}
      <section style={{ background: 'var(--surface-subtle)', position: 'relative', overflow: 'hidden' }}>
        <EduMotifs tone="light" density="light" />
        <SectionDecor tone="light" />
        <div style={{ position: 'relative', maxWidth: 'var(--container)', margin: '0 auto', padding: 'var(--space-9) var(--space-5)' }}>
          <div style={{ textAlign: 'center', maxWidth: 660, margin: '0 auto var(--space-7)' }}>
            <EyebrowLabel color="red">Our learning ecosystem</EyebrowLabel>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'var(--text-4xl)', fontWeight: 700, color: 'var(--text-strong)', margin: '12px 0 0', lineHeight: 'var(--leading-tight)' }}>Four pillars, drawn from our crest</h2>
            <p style={{ fontSize: 'var(--text-lg)', color: 'var(--text-body)', margin: '14px 0 0', lineHeight: 'var(--leading-normal)' }}>Where local values meet global standards &mdash; and emerging technology meets enduring character.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 'var(--space-5)' }}>
            {pillars.map(p => (
              <Card key={p.t} accent={p.accent} interactive>
                <div style={{ width: 52, height: 52, borderRadius: 'var(--radius-md)', background: `var(--${p.accent}-50)`, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}>
                  <Icon name={p.icon} size={26} color={`var(--${p.accent}-600)`} />
                </div>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: 'var(--text-xl)', fontWeight: 600, color: 'var(--text-strong)', margin: '0 0 8px' }}>{p.t}</h3>
                <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-body)', lineHeight: 'var(--leading-normal)', margin: 0 }}>{p.d}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== Standards stack ===================== */}
      <section style={{ background: 'var(--surface-page)' }}>
        <div style={{ maxWidth: 'var(--container)', margin: '0 auto', padding: 'var(--space-9) var(--space-5)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '0.8fr 1.2fr', gap: 'var(--space-8)', alignItems: 'center' }}>
            <div>
              <EyebrowLabel color="navy">The standards stack</EyebrowLabel>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'var(--text-4xl)', fontWeight: 700, color: 'var(--text-strong)', margin: '12px 0 0', lineHeight: 'var(--leading-tight)' }}>Five published standards, non-negotiable in every ETM school</h2>
              <p style={{ fontSize: 'var(--text-base)', color: 'var(--text-muted)', margin: '16px 0 0', lineHeight: 'var(--leading-normal)' }}>These are the structural reasons ETM is a movement, not a brand. Every ETM school delivers all five — audited quarterly by Robotron.</p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
              {standards.map((s, i) => {
                const accent = i % 2 === 0 ? 'navy' : 'red';
                return (
                  <div key={s.n} style={{ display: 'flex', alignItems: 'center', gap: 18, background: 'var(--surface-card)', border: '1px solid var(--border)', borderLeft: `4px solid var(--${accent}-500)`, borderRadius: 'var(--radius-lg)', padding: 'var(--space-4) var(--space-5)' }}>
                    <span style={{ fontFamily: 'var(--font-serif)', fontWeight: 700, fontSize: 'var(--text-2xl)', color: `var(--${accent}-500)`, minWidth: 36 }}>{s.n}</span>
                    <div style={{ width: 44, height: 44, flexShrink: 0, borderRadius: 'var(--radius-md)', background: `var(--${accent}-50)`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Icon name={s.icon} size={22} color={`var(--${accent}-600)`} />
                    </div>
                    <span style={{ fontFamily: 'var(--font-sans)', fontWeight: 700, fontSize: 'var(--text-lg)', color: 'var(--text-strong)' }}>{s.t}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ===================== ETM equation ===================== */}
      <section style={{ background: 'var(--surface-subtle)', position: 'relative', overflow: 'hidden', borderTop: '1px solid var(--border)' }}>
        <EduMotifs tone="light" density="light" />
        <div style={{ position: 'relative', maxWidth: 'var(--container)', margin: '0 auto', padding: 'var(--space-9) var(--space-5)' }}>
          <div style={{ textAlign: 'center', marginBottom: 'var(--space-7)' }}>
            <EyebrowLabel color="navy">The ETM equation</EyebrowLabel>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'var(--text-4xl)', fontWeight: 700, color: 'var(--text-strong)', margin: '12px 0 0', lineHeight: 'var(--leading-tight)' }}>The Educational Transformation Movement</h2>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 'var(--space-4)', flexWrap: 'wrap' }}>
            {[
              { t: 'Emerging Technologies', icon: 'brain' },
              { op: '+' },
              { t: 'Progressive Curriculum', icon: 'bookMarked' },
              { op: '+' },
              { t: 'Islamic Values', icon: 'star' },
              { op: '=' },
              { t: 'Success — Inshallah', icon: 'trophy', solid: true },
            ].map((c, i) => c.op ? (
              <span key={i} style={{ fontFamily: 'var(--font-serif)', fontSize: 'var(--text-4xl)', fontWeight: 700, color: 'var(--text-faint)' }}>{c.op}</span>
            ) : (
              <div key={i} style={{
                display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10, padding: 'var(--space-5) var(--space-4)', borderRadius: 'var(--radius-lg)', minWidth: 150,
                background: c.solid ? 'var(--red-500)' : 'var(--surface-card)',
                border: c.solid ? 'none' : '1px solid var(--navy-100)',
                boxShadow: c.solid ? 'var(--shadow-md)' : 'var(--shadow-sm)',
              }}>
                <Icon name={c.icon} size={30} color={c.solid ? '#fff' : 'var(--navy-600)'} />
                <span style={{ fontFamily: 'var(--font-sans)', fontWeight: 700, fontSize: 'var(--text-base)', textAlign: 'center', lineHeight: 'var(--leading-snug)', color: c.solid ? '#fff' : 'var(--text-strong)' }}>{c.t}</span>
              </div>
            ))}
          </div>
          <p style={{ textAlign: 'center', fontSize: 'var(--text-base)', color: 'var(--text-muted)', margin: 'var(--space-6) auto 0', maxWidth: 620, lineHeight: 'var(--leading-normal)' }}>
            ETM is a Robotron-certified system from South Korea &mdash; an enabling ecosystem that integrates emerging technologies, a future-ready curriculum and Islamic values to make every learner relevant.
          </p>
        </div>
      </section>

      {/* ===================== Gallery teaser ===================== */}
      <section style={{ background: 'var(--surface-page)' }}>
        <div style={{ maxWidth: 'var(--container)', margin: '0 auto', padding: 'var(--space-9) var(--space-5)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 'var(--space-6)', flexWrap: 'wrap', gap: 'var(--space-4)' }}>
            <div>
              <EyebrowLabel color="red">From our classrooms</EyebrowLabel>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'var(--text-4xl)', fontWeight: 700, color: 'var(--text-strong)', margin: '12px 0 0', lineHeight: 'var(--leading-tight)' }}>Life at NextGen</h2>
            </div>
            <Button variant="ghost" iconRight={<Icon name="arrowRight" size={17} />} onClick={() => onNav('Gallery')}>View the gallery</Button>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'var(--space-5)' }}>
            <PhotoFrame src="../../assets/photos/innovate-lab.png" alt="Innovation lab" accent="red" ratio="4 / 3" />
            <PhotoFrame src="../../assets/photos/foq-quran.png" alt="Friends of Quran" accent="navy" ratio="4 / 3" />
            <PhotoFrame src="../../assets/photos/etm-garage.png" alt="ETM Garage" accent="red" ratio="4 / 3" />
          </div>
        </div>
      </section>

      {/* ===================== Campuses ===================== */}
      <Campuses />

      {/* ===================== CTA ===================== */}
      <section style={{ background: NAVY_GRADIENT, position: 'relative', overflow: 'hidden' }}>
        <div style={{ ...PATTERNS.gridNavy, position: 'absolute', inset: 0, opacity: 0.6 }}></div>
        <EduMotifs tone="navy" density="light" />
        <div style={{ position: 'relative', maxWidth: 'var(--container)', margin: '0 auto', padding: 'var(--space-8) var(--space-5)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 'var(--space-6)', flexWrap: 'wrap' }}>
          <div>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'var(--text-4xl)', fontWeight: 700, color: '#fff', margin: 0, lineHeight: 'var(--leading-tight)' }}>Join the ETM Movement</h2>
            <p style={{ fontSize: 'var(--text-lg)', color: 'rgba(255,255,255,0.82)', margin: '12px 0 0' }}>Make your child relevant for tomorrow&rsquo;s world. Book a tour or begin your application today.</p>
          </div>
          <Button variant="primary" size="lg" iconRight={<Icon name="arrowRight" size={18} />} onClick={() => onNav('Admissions')} style={{ flexShrink: 0 }}>Begin admission</Button>
        </div>
      </section>
    </main>
  );
}
window.HomeScreen = HomeScreen;
