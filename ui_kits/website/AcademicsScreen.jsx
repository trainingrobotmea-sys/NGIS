// NGIS website — Academics / "Our Learning Ecosystem"
// Content from the NGIS Prospectus, the Grade Structure sheet and the
// Robotmea ETM Concept Deck.
function AcademicsScreen({ onNav }) {
  const { Card, Badge, EyebrowLabel, Button } = window.NGISDesignSystem_f6dc23;
  const Icon = window.Icon;
  const { PATTERNS, NAVY_GRADIENT, SectionDecor, PhotoFrame, EduMotifs, ClassNameStack } = window.Decor;

  // Grade structure — Playgroup to Grade 5 (the school's full range).
  const grades = [
    { stage: 'Playgroup', age: '3–4', en: 'Explorers', ko: '탐험가 (Tam-hum-ga)', ar: 'المستكشفون', insp: 'Where little hands discover big wonders, sparking imagination, curiosity and the joy of learning through play.' },
    { stage: 'Foundation 1', age: '4–5', en: 'Dreamers', ko: '꿈나무 (Kkoom-na-moo)', ar: 'الحالمون', insp: 'Where stories come alive and dreams take shape, building confidence, creativity and a first friendship with technology.' },
    { stage: 'Foundation 2', age: '5–6', en: 'Seekers', ko: '새싹 (Saessak)', ar: 'الباحثون', insp: 'Where young minds think like problem-solvers, introducing computational thinking and the magic of making technology respond.' },
    { stage: 'Grade 1', age: '6–7', en: 'Little Champs', ko: '새싹 챔프 (Saessak Champ)', ar: 'الأبطال الصغار', insp: 'Where curiosity meets creation, exploring STEAM principles, mechanical wonders and the science of how things move.' },
    { stage: 'Grade 2', age: '7–8', en: 'Bright Innovators', ko: '빛나는 혁신가', ar: 'المبتكرون النابهون', insp: 'Where ideas become inventions, mastering controllers, modules and mechanical assembly to bring imagination to life.' },
    { stage: 'Grade 3', age: '8–9', en: 'Curious Thinkers', ko: '호기심 사상가', ar: 'المفكرون الفضوليون', insp: 'Where robots learn to think and children learn to lead, stepping into autonomous machines, sensors and AI.' },
    { stage: 'Grade 4', age: '9–10', en: 'Young Visionaries', ko: '젊은 선구자', ar: 'أصحاب الرؤية', insp: 'Where logic meets innovation, programming intelligent systems and solving real-world problems.' },
    { stage: 'Grade 5', age: '10–11', en: 'Junior Leaders', ko: '주니어 리더', ar: 'القادة الناشئون', insp: "Where tomorrow's engineers take charge, designing advanced robots and leading missions that shape the future." },
  ];

  // Two frameworks, one journey.
  const games = [
    { l: 'G', t: 'General Knowledge' }, { l: 'A', t: 'Arts' }, { l: 'M', t: 'Mathematics' },
    { l: 'E', t: 'English' }, { l: 'S', t: 'Science' },
  ];
  const steam = [
    { l: 'S', t: 'Science' }, { l: 'T', t: 'Technology' }, { l: 'E', t: 'Engineering' },
    { l: 'A', t: 'Arts' }, { l: 'M', t: 'Mathematics' },
  ];

  // The Single Book domains (Pre-Primary System Model).
  const singleBook = [
    'Personal, Social & Emotional Development', 'Language & Literacy', 'Basic Mathematical Concepts',
    'The World Around Us', 'Physical Development', 'Health, Hygiene & Safety', 'Creative Arts',
  ];

  // Pedagogies inside the Discovery & Innovation Hub.
  const pedagogies = [
    { t: "Bloom's Taxonomy", d: 'Questioning and tasks designed across all six levels of thinking.', icon: 'layers' },
    { t: 'SOLO Taxonomy', d: 'Tracking depth of understanding from surface to extended abstract.', icon: 'compass' },
    { t: 'Universal Design for Learning', d: 'Inclusive, flexible learning that reaches every child (UDL).', icon: 'users' },
    { t: 'Project-Based Inquiry Learning', d: 'PBIL: learning through real projects, not worksheets.', icon: 'flask' },
    { t: 'The 4 C\u2019s', d: 'Critical thinking, Creativity, Collaboration & Communication.', icon: 'brain' },
    { t: 'NCC · SNC Aligned', d: 'Mapped to the National & Single National Curriculum standards.', icon: 'bookMarked' },
  ];

  // ETM Garage technologies.
  const garage = [
    { t: '3D Printers', d: 'Turning digital designs into real, holdable prototypes.', icon: 'printer' },
    { t: 'VR Headsets', d: 'Immersive worlds for exploration and spatial learning.', icon: 'headset' },
    { t: 'Quadcopters', d: 'Flight, control and physics, learned hands-on.', icon: 'drone' },
    { t: 'RC Flying Planes', d: 'Aerodynamics and engineering brought to the sky.', icon: 'plane' },
    { t: 'Tool Kits', d: 'The building blocks of every young maker\u2019s project.', icon: 'wrench' },
    { t: 'Soldering Station', d: 'Real circuits, assembled by real young engineers.', icon: 'iron' },
    { t: 'Woodworking Station', d: 'Designing and crafting with traditional materials.', icon: 'hammer' },
  ];

  // Reimagined roles.
  const roles = [
    { who: 'Principal', as: 'Mentor', icon: 'compass' },
    { who: 'Teachers', as: 'Coaches & Instructors', icon: 'graduationCap' },
    { who: 'Students', as: 'Active Learners', icon: 'sparkles' },
    { who: 'Classrooms', as: 'Discovery & Innovation Hubs', icon: 'lightbulb' },
  ];

  // Framework column renderer (the GAMES / STEAM diagram).
  const FrameworkColumn = ({ stageLabel, ages, name, items, accent, icon }) => (
    <div className="ngis-minw-280" style={{ flex: 1, minWidth: 280, background: 'var(--surface-card)', border: '1px solid var(--border)', borderTop: `4px solid var(--${accent}-500)`, borderRadius: 'var(--radius-xl)', padding: 'var(--space-7)', boxShadow: 'var(--shadow-sm)' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 'var(--space-5)' }}>
        <div style={{ width: 52, height: 52, flexShrink: 0, borderRadius: 'var(--radius-lg)', background: `var(--${accent}-50)`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Icon name={icon} size={26} color={`var(--${accent}-600)`} />
        </div>
        <div>
          <div style={{ fontFamily: 'var(--font-sans)', fontWeight: 700, fontSize: 'var(--text-xs)', textTransform: 'uppercase', letterSpacing: 'var(--tracking-wide)', color: `var(--${accent}-600)` }}>{stageLabel}</div>
          <div style={{ fontSize: 'var(--text-sm)', color: 'var(--text-muted)', fontWeight: 600 }}>{ages}</div>
        </div>

      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        {items.map((it, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 14, background: 'var(--surface-subtle)', borderRadius: 'var(--radius-md)', padding: '10px 14px' }}>
            <span style={{ width: 36, height: 36, flexShrink: 0, borderRadius: 'var(--radius-sm)', background: `var(--${accent}-500)`, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-serif)', fontWeight: 700, fontSize: 'var(--text-lg)' }}>{it.l}</span>
            <span style={{ fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: 'var(--text-base)', color: 'var(--text-strong)' }}>{it.t}</span>
          </div>
        ))}
      </div>
      <div style={{ marginTop: 'var(--space-5)', textAlign: 'center', fontFamily: 'var(--font-serif)', fontWeight: 700, fontSize: 'var(--text-2xl)', letterSpacing: 'var(--tracking-wide)', color: `var(--${accent}-600)` }}>
        {name}
      </div>
    </div>
  );

  return (
    <main>
      {/* ===================== Header ===================== */}
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
        <div className="ngis-feature-grid" style={{ position: 'relative', maxWidth: 'var(--container)', margin: '0 auto', padding: 'var(--space-9) var(--space-5)', display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: 'var(--space-8)', alignItems: 'center' }}>
          <div style={{ position: 'relative', maxWidth: 'var(--container)', margin: '0 auto', padding: 'var(--space-8) var(--space-5)', width: '100%' }}>
            <EyebrowLabel color="gold">Educational Transformation Movement</EyebrowLabel>
            <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'var(--text-6xl)', fontWeight: 700, color: '#fff', margin: '18px 0 0', lineHeight: 'var(--leading-tight)', letterSpacing: 'var(--tracking-tight)' }}>Our learning ecosystem</h1>
            <p style={{ fontSize: 'var(--text-xl)', color: 'rgba(255,255,255,0.82)', margin: '20px 0 0', maxWidth: 700, lineHeight: 'var(--leading-normal)' }}>
              An enabling ecosystem to make every child relevant, integrating emerging technologies, a STEAM curriculum and Islamic values, benchmarked to South Korean standards and aligned with the Pakistan National Curriculum.
            </p>
          </div>
          <PhotoFrame src="../../assets/photos/academics.png" alt="Academics session at NGIS" accent="red" ratio="4 / 3" caption="Fostering excellence" />
        </div>
      </section>

      {/* ===================== Grade structure ===================== */}
      <section style={{ background: 'var(--surface-page)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ ...PATTERNS.dotsLight, position: 'absolute', inset: 0, opacity: 0.5 }}></div>
        <div style={{ position: 'relative', maxWidth: 'var(--container)', margin: '0 auto', padding: 'var(--space-9) var(--space-5)' }}>
          <div style={{ textAlign: 'center', maxWidth: 700, margin: '0 auto var(--space-7)' }}>
            <EyebrowLabel color="red">From Playgroup to Grade 5</EyebrowLabel>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'var(--text-4xl)', fontWeight: 700, color: 'var(--text-strong)', margin: '12px 0 0', lineHeight: 'var(--leading-tight)' }}>One continuous journey, ages 3 to 11</h2>
            <p style={{ fontSize: 'var(--text-lg)', color: 'var(--text-body)', margin: '14px 0 0', lineHeight: 'var(--leading-normal)' }}>Every class carries an English, Korean and Arabic name, a signature of our trilingual identity and global outlook.</p>
          </div>
          <div className="ngis-grid-2" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 'var(--space-4)' }}>
            {grades.map((g, i) => {
              const accent = i % 2 === 0 ? 'navy' : 'red';
              return (
                <div key={g.stage} style={{ display: 'flex', gap: 18, alignItems: 'flex-start', background: 'var(--surface-card)', border: '1px solid var(--border)', borderTop: `3px solid var(--${accent}-500)`, borderRadius: 'var(--radius-lg)', padding: 'var(--space-5)', boxShadow: 'var(--shadow-sm)' }}>
                  <div style={{ flexShrink: 0, textAlign: 'center' }}>
                    <div style={{ width: 64, height: 64, borderRadius: 'var(--radius-lg)', background: `var(--${accent}-50)`, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                      <span style={{ fontFamily: 'var(--font-sans)', fontWeight: 700, fontSize: '10px', textTransform: 'uppercase', letterSpacing: 'var(--tracking-wide)', color: `var(--${accent}-600)` }}>Ages</span>
                      <span style={{ fontFamily: 'var(--font-serif)', fontWeight: 700, fontSize: 'var(--text-xl)', color: `var(--${accent}-700)` }}>{g.age}</span>
                    </div>
                    <div style={{ marginTop: 8, fontSize: '11px', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: 'var(--tracking-wide)', maxWidth: 72, lineHeight: 1.3 }}>{g.stage}</div>
                  </div>
                  <div style={{ flex: 1 }}>
                    <ClassNameStack en={g.en} ko={g.ko} ar={g.ar} accent={accent} />
                    <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-body)', lineHeight: 'var(--leading-normal)', margin: '12px 0 0' }}>{g.insp}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===================== Two frameworks (GAMES vs STEAM) ===================== */}
      <section style={{ background: 'var(--surface-subtle)', position: 'relative', overflow: 'hidden', borderTop: '1px solid var(--border)' }}>
        <EduMotifs tone="light" density="light" />
        <div style={{ position: 'relative', maxWidth: 'var(--container)', margin: '0 auto', padding: 'var(--space-9) var(--space-5)' }}>
          <div style={{ textAlign: 'center', maxWidth: 720, margin: '0 auto var(--space-7)' }}>
            <EyebrowLabel color="navy">Two frameworks, one journey</EyebrowLabel>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'var(--text-4xl)', fontWeight: 700, color: 'var(--text-strong)', margin: '12px 0 0', lineHeight: 'var(--leading-tight)' }}>G.A.M.E.S in Pre-Primary, S.T.E.A.M in Primary</h2>
            <p style={{ fontSize: 'var(--text-lg)', color: 'var(--text-body)', margin: '14px 0 0', lineHeight: 'var(--leading-normal)' }}>Foundations are laid through G.A.M.E.S in the early years, then deepened into the S.T.E.A.M disciplines as learners move into primary.</p>
          </div>
          <div style={{ display: 'flex', alignItems: 'stretch', justifyContent: 'center', gap: 'var(--space-5)', flexWrap: 'wrap' }}>
            <FrameworkColumn stageLabel="Pre-Primary" ages="Playgroup–FS2 · Ages 3–6" name="G.A.M.E.S" items={games} accent="navy" icon="star" />
            {/* arrow */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minWidth: 56 }}>
              <div style={{ width: 48, height: 48, borderRadius: '50%', background: 'var(--gold-500)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: 'var(--shadow-md)' }}>
                <Icon name="arrowRight" size={24} color="var(--navy-700)" />
              </div>
              <span style={{ marginTop: 10, fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: 'var(--tracking-wide)', color: 'var(--text-muted)', textAlign: 'center', maxWidth: 80 }}>Progression</span>
            </div>
            <FrameworkColumn stageLabel="Primary" ages="Grade 1–5 · Ages 6–11" name="S.T.E.A.M" items={steam} accent="red" icon="rocket" />
          </div>
        </div>
      </section>

      {/* ===================== The System (One-Book) Model ===================== */}
      <section style={{ background: 'var(--surface-page)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ ...PATTERNS.dotsLight, position: 'absolute', inset: 0, opacity: 0.4 }}></div>
        <div style={{ position: 'relative', maxWidth: 'var(--container)', margin: '0 auto', padding: 'var(--space-9) var(--space-5)' }}>
          <div className="ngis-feature-grid" style={{ display: 'grid', gridTemplateColumns: '1.05fr 0.95fr', gap: 'var(--space-8)', alignItems: 'center' }}>
            <div>
              <EyebrowLabel color="navy">The One-Book “System Model”</EyebrowLabel>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'var(--text-4xl)', fontWeight: 700, color: 'var(--text-strong)', margin: '12px 0 0', lineHeight: 'var(--leading-tight)' }}>One book. Every subject. Zero heavy bags.</h2>
              <p style={{ fontSize: 'var(--text-lg)', color: 'var(--text-body)', margin: '16px 0 20px', lineHeight: 'var(--leading-normal)' }}>
                Our Single Book model integrates every early-years domain into one coherent resource, STEAM-integrated, aligned to the NCP and benchmarked to South Korean standards. No heavy bags, no fragmented subjects, just connected learning.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
                {singleBook.map(s => (
                  <span key={s} style={{ display: 'inline-flex', alignItems: 'center', gap: 7, background: 'var(--surface-card)', border: '1px solid var(--border)', borderRadius: 'var(--radius-pill)', padding: '7px 13px', fontSize: 'var(--text-sm)', fontWeight: 600, color: 'var(--text-strong)' }}>
                    <Icon name="check" size={14} color="var(--red-600)" />{s}
                  </span>
                ))}
              </div>
            </div>
            <PhotoFrame src="../../assets/photos/steam-classroom.png" alt="STEAM classroom" label="Single Book model" icon="bookMarked" accent="red" ratio="16 / 11" caption="Pre-Primary · One Book" />
          </div>
        </div>
      </section>

      {/* ===================== Discovery & Innovation Hub pedagogies ===================== */}
      <section style={{ background: NAVY_GRADIENT, position: 'relative', overflow: 'hidden' }}>
        <div style={{ ...PATTERNS.dotsNavy, position: 'absolute', inset: 0, opacity: 0.7 }}></div>
        <EduMotifs tone="navy" density="light" />
        <div style={{ position: 'relative', maxWidth: 'var(--container)', margin: '0 auto', padding: 'var(--space-9) var(--space-5)' }}>
          <div style={{ textAlign: 'center', maxWidth: 700, margin: '0 auto var(--space-7)' }}>
            <EyebrowLabel color="gold">Discovery &amp; Innovation Hub</EyebrowLabel>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'var(--text-4xl)', fontWeight: 700, color: '#fff', margin: '12px 0 0', lineHeight: 'var(--leading-tight)' }}>Research-backed pedagogy, built into every lesson</h2>
            <p style={{ fontSize: 'var(--text-lg)', color: 'rgba(255,255,255,0.82)', margin: '14px 0 0', lineHeight: 'var(--leading-normal)' }}>Our classrooms are not lecture halls. They are hubs where established learning science shapes how every child thinks, questions and creates.</p>
          </div>
          <div className="ngis-grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'var(--space-4)' }}>
            {pedagogies.map(p => (
              <div key={p.t} style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: 'var(--radius-lg)', padding: 'var(--space-5)' }}>
                <div style={{ width: 46, height: 46, borderRadius: 'var(--radius-md)', background: 'var(--red-500)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 14 }}>
                  <Icon name={p.icon} size={24} color="#fff" />
                </div>
                <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--text-lg)', fontWeight: 700, color: '#fff', margin: '0 0 6px' }}>{p.t}</h3>
                <p style={{ fontSize: 'var(--text-sm)', color: 'rgba(255,255,255,0.72)', lineHeight: 'var(--leading-normal)', margin: 0 }}>{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== ETM Garage ===================== */}
      <section style={{ background: 'var(--surface-page)', position: 'relative', overflow: 'hidden' }}>
        <EduMotifs tone="light" density="light" />
        <SectionDecor tone="light" />
        <div style={{ position: 'relative', maxWidth: 'var(--container)', margin: '0 auto', padding: 'var(--space-9) var(--space-5)' }}>
          <div className="ngis-feature-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-8)', alignItems: 'center', marginBottom: 'var(--space-7)' }}>
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 9, background: 'var(--gold-500)', color: 'var(--navy-700)', padding: '7px 15px', borderRadius: 'var(--radius-pill)', fontWeight: 700, fontSize: 'var(--text-sm)', marginBottom: 16 }}>
                <Icon name="flask" size={16} color="var(--navy-700)" />Centre for Innovation &amp; Entrepreneurship
              </div>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'var(--text-4xl)', fontWeight: 700, color: 'var(--text-strong)', margin: '0 0 0', lineHeight: 'var(--leading-tight)' }}>The ETM Garage</h2>
              <p style={{ fontSize: 'var(--text-lg)', color: 'var(--text-body)', margin: '16px 0 0', lineHeight: 'var(--leading-normal)' }}>A real workshop where curious learners become young creators, equipped with the same emerging technologies that power industry. A step towards an innovative Pakistan.</p>
            </div>
            <PhotoFrame src="../../assets/photos/etm-garage.png" alt="The ETM Garage" label="The ETM Garage" icon="flask" accent="navy" ratio="16 / 10" />
          </div>
          <div className="ngis-grid-4" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 'var(--space-4)' }}>
            {garage.map((g, i) => {
              const accent = i % 2 === 0 ? 'navy' : 'red';
              return (
                <div key={g.t} style={{ background: 'var(--surface-card)', border: '1px solid var(--border)', borderRadius: 'var(--radius-lg)', padding: 'var(--space-5)', boxShadow: 'var(--shadow-sm)' }}>
                  <div style={{ width: 52, height: 52, borderRadius: 'var(--radius-md)', background: `var(--${accent}-50)`, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 14 }}>
                    <Icon name={g.icon} size={26} color={`var(--${accent}-600)`} />
                  </div>
                  <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--text-base)', fontWeight: 700, color: 'var(--text-strong)', margin: '0 0 6px' }}>{g.t}</h3>
                  <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-body)', lineHeight: 'var(--leading-normal)', margin: 0 }}>{g.d}</p>
                </div>
              );
            })}
            <div style={{ background: NAVY_GRADIENT, borderRadius: 'var(--radius-lg)', padding: 'var(--space-5)', display: 'flex', flexDirection: 'column', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
              <div style={{ ...PATTERNS.dotsNavy, position: 'absolute', inset: 0, opacity: 0.5 }}></div>
              <div style={{ position: 'relative' }}>
                <div style={{ fontFamily: 'var(--font-serif)', fontSize: 'var(--text-2xl)', fontWeight: 700, color: 'var(--gold-500)', lineHeight: 1.1 }}>7+</div>
                <div style={{ fontSize: 'var(--text-sm)', color: 'rgba(255,255,255,0.85)', fontWeight: 600, marginTop: 4 }}>technologies in every Garage</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== Friends of Quran & Role Model ===================== */}
      <section style={{ background: 'var(--surface-subtle)', position: 'relative', overflow: 'hidden', borderTop: '1px solid var(--border)' }}>
        <EduMotifs tone="light" density="light" />
        <div style={{ position: 'relative', maxWidth: 'var(--container)', margin: '0 auto', padding: 'var(--space-9) var(--space-5)' }}>
          <div style={{ textAlign: 'center', maxWidth: 720, margin: '0 auto var(--space-7)' }}>
            <EyebrowLabel color="red">Standard 01 · Islamic values at the core</EyebrowLabel>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'var(--text-4xl)', fontWeight: 700, color: 'var(--text-strong)', margin: '12px 0 0', lineHeight: 'var(--leading-tight)' }}>Friends of Quran &amp; the Role Model Programme</h2>
            <p style={{ fontSize: 'var(--text-lg)', color: 'var(--text-body)', margin: '14px 0 0', lineHeight: 'var(--leading-normal)' }}>The first published ETM standard. It is non-negotiable in every ETM school, with faith and character woven through everyday learning, not taught apart from it.</p>
          </div>
          <div style={{ maxWidth: 880, margin: '0 auto var(--space-7)' }}>
            <PhotoFrame src="../../assets/photos/foq-quran.png" alt="Friends of Quran programme" accent="navy" ratio="16 / 9" caption="The best of you are those who learn the Quran and teach it" />
          </div>
          <div className="ngis-grid-2" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 'var(--space-5)' }}>
            <div style={{ background: 'var(--surface-card)', border: '1px solid var(--border)', borderTop: '4px solid var(--navy-500)', borderRadius: 'var(--radius-xl)', padding: 'var(--space-7)', boxShadow: 'var(--shadow-sm)' }}>
              <div style={{ width: 60, height: 60, borderRadius: 'var(--radius-lg)', background: 'var(--navy-50)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 18 }}>
                <Icon name="bookOpen" size={30} color="var(--navy-600)" />
              </div>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: 'var(--text-2xl)', fontWeight: 700, color: 'var(--text-strong)', margin: '0 0 10px' }}>Friends of Quran</h3>
              <p style={{ fontSize: 'var(--text-base)', color: 'var(--text-body)', lineHeight: 'var(--leading-normal)', margin: 0 }}>
                A daily companionship with the Holy Quran, building a lasting relationship with its words, meaning and guidance. Supported by compulsory Arabic, students grow in recitation, understanding and love for their faith.
              </p>
            </div>
            <div style={{ background: 'var(--surface-card)', border: '1px solid var(--border)', borderTop: '4px solid var(--red-500)', borderRadius: 'var(--radius-xl)', padding: 'var(--space-7)', boxShadow: 'var(--shadow-sm)' }}>
              <div style={{ width: 60, height: 60, borderRadius: 'var(--radius-lg)', background: 'var(--red-50)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 18 }}>
                <Icon name="star" size={30} color="var(--red-600)" />
              </div>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: 'var(--text-2xl)', fontWeight: 700, color: 'var(--text-strong)', margin: '0 0 10px' }}>Prophet Muhammad ﷺ as our Role Model</h3>
              <p style={{ fontSize: 'var(--text-base)', color: 'var(--text-body)', lineHeight: 'var(--leading-normal)', margin: 0 }}>
                The Role Model (SAWW) Programme places the character of the Prophet Muhammad ﷺ at the heart of school life, guiding how students speak, share, lead and treat one another, so values are lived every day.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== Compulsory Arabic ===================== */}
      <section style={{ background: 'var(--surface-page)' }}>
        <div style={{ maxWidth: 'var(--container)', margin: '0 auto', padding: 'var(--space-9) var(--space-5)' }}>
          <div style={{ display: 'flex', gap: 'var(--space-6)', alignItems: 'center', background: 'var(--surface-subtle)', border: '1px solid var(--border)', borderRadius: 'var(--radius-xl)', padding: 'var(--space-7)', flexWrap: 'wrap' }}>
            <div style={{ width: 72, height: 72, flexShrink: 0, borderRadius: 'var(--radius-lg)', background: 'var(--navy-50)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Icon name="languages" size={36} color="var(--navy-600)" />
            </div>
            <div className="ngis-minw-280" style={{ flex: 1, minWidth: 280 }}>
              <EyebrowLabel color="navy">Compulsory Arabic</EyebrowLabel>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'var(--text-3xl)', fontWeight: 700, color: 'var(--text-strong)', margin: '10px 0 8px', lineHeight: 'var(--leading-tight)' }}>The language of the Quran, for every learner</h2>
              <p style={{ fontSize: 'var(--text-base)', color: 'var(--text-body)', margin: 0, lineHeight: 'var(--leading-normal)', maxWidth: 640 }}>Arabic is taught as a compulsory subject across all grades, connecting our students to their faith and to one of the world&rsquo;s great languages, as part of our Islamic-values foundation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== Reimagined roles ===================== */}
      <section style={{ background: 'var(--surface-subtle)', position: 'relative', overflow: 'hidden', borderTop: '1px solid var(--border)' }}>
        <EduMotifs tone="light" density="light" />
        <div style={{ position: 'relative', maxWidth: 'var(--container)', margin: '0 auto', padding: 'var(--space-9) var(--space-5)' }}>
          <div style={{ textAlign: 'center', maxWidth: 620, margin: '0 auto var(--space-7)' }}>
            <EyebrowLabel color="red">Reimagined roles</EyebrowLabel>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'var(--text-4xl)', fontWeight: 700, color: 'var(--text-strong)', margin: '12px 0 0', lineHeight: 'var(--leading-tight)' }}>Everyone in the building is a mentor</h2>
          </div>
          <div className="ngis-grid-4" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 'var(--space-5)' }}>
            {roles.map((r, i) => {
              const accent = i % 2 === 0 ? 'navy' : 'red';
              return (
                <Card key={r.who} accent={accent}>
                  <div style={{ width: 52, height: 52, borderRadius: 'var(--radius-md)', background: `var(--${accent}-50)`, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 14 }}>
                    <Icon name={r.icon} size={26} color={`var(--${accent}-600)`} />
                  </div>
                  <div style={{ fontSize: 'var(--text-sm)', color: 'var(--text-muted)', fontWeight: 600 }}>{r.who} as</div>
                  <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: 'var(--text-xl)', fontWeight: 600, color: 'var(--text-strong)', margin: '4px 0 0', lineHeight: 'var(--leading-snug)' }}>{r.as}</h3>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===================== CTA ===================== */}
      <section style={{ background: NAVY_GRADIENT, position: 'relative', overflow: 'hidden' }}>
        <div style={{ ...PATTERNS.gridNavy, position: 'absolute', inset: 0, opacity: 0.6 }}></div>
        <EduMotifs tone="navy" density="light" />
        <div style={{ position: 'relative', maxWidth: 'var(--container)', margin: '0 auto', padding: 'var(--space-8) var(--space-5)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 'var(--space-6)', flexWrap: 'wrap' }}>
          <div>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'var(--text-4xl)', fontWeight: 700, color: '#fff', margin: 0, lineHeight: 'var(--leading-tight)' }}>Ready to begin the journey?</h2>
            <p style={{ fontSize: 'var(--text-lg)', color: 'rgba(255,255,255,0.82)', margin: '12px 0 0' }}>Enroll your child in Pakistan&rsquo;s first ETM-powered school.</p>
          </div>
          <Button variant="primary" size="lg" iconRight={<Icon name="arrowRight" size={18} />} onClick={() => onNav('Admissions')} style={{ flexShrink: 0 }}>Begin admission</Button>
        </div>
      </section>
    </main>
  );
}
window.AcademicsScreen = AcademicsScreen;