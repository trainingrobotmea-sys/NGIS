// NGIS website — Home screen (content from the NGIS Prospectus + ETM Concept Deck)

// Hero headline — types out the current slogan, then rotates through a short
// list of USPs, always returning to the slogan. Respects prefers-reduced-motion
// by rendering the slogan statically with no animation.

function HeroBackground() {
  const [videoFailed, setVideoFailed] = React.useState(false);
  const videoRef = React.useRef(null);

  React.useEffect(() => {
    const v = videoRef.current;
    if (!v || videoFailed) return;

    v.muted = true;
    v.defaultMuted = true;

    const playPromise = v.play();
    if (playPromise !== undefined) {
      playPromise.catch(err => {
        // AbortError is just a race condition, ignore it
        if (err.name === 'AbortError') return;

        // If it's a NotAllowedError (Autoplay blocked by browser policy) 
        // or any other playback block, force the fallback image
        console.warn('Hero video autoplay blocked by browser:', err.name);
        setVideoFailed(true);
      });
    }
  }, [videoFailed]);

  const handleError = (e) => {
    const mediaError = e.currentTarget.error;
    // Video elements can fire a spurious 'error' event with no MediaError
    // attached (e.g. the browser aborting a fetch it never really started).
    // Only treat it as a genuine failure — and fall back to the still image
    // — when there's an actual error code to act on.
    if (!mediaError) return;
    console.error('Hero video failed to load:', mediaError);
    setVideoFailed(true);
  };

  return (
    <div
      aria-hidden="true"
      style={{
        position: 'absolute', inset: 0, width: '100%', height: '100%',
        backgroundImage: 'url(../../assets/photos/hero-students.png)',
        backgroundSize: 'cover', backgroundPosition: 'center',
        zIndex: 0,
      }}
    >
      {/* Video plays over the image fallback. It stays mounted (just hidden)
          on failure rather than being removed, so a pending play() promise
          can't be aborted by its own element disappearing mid-flight. */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        onError={handleError}
        style={{
          position: 'absolute', inset: 0, width: '100%', height: '100%',
          objectFit: 'cover',
          visibility: videoFailed ? 'hidden' : 'visible',
        }}
      >
        <source src="../../assets/video/hero-campus-fixed.mp4" type="video/mp4" />
      </video>
    </div>
  );
}

function DiffCard({ item }) {
  const [hover, setHover] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        background: '#fff',
        border: `1px solid ${hover ? item.color : 'var(--border)'}`,
        borderRadius: 'var(--radius-lg)',
        padding: 'var(--space-5)',
        display: 'flex', flexDirection: 'column', gap: 14,
        cursor: 'default',
        transform: hover ? 'translateY(-6px)' : 'translateY(0)',
        boxShadow: hover ? `0 16px 32px ${item.color}33` : 'var(--shadow-sm)',
        transition: 'transform 220ms ease, box-shadow 220ms ease, border-color 220ms ease',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, color: 'var(--text-faint)', fontSize: 'var(--text-sm)', fontWeight: 600, textDecoration: 'line-through', textDecorationColor: item.color }}>
        <Icon name="ban" size={16} color={item.color} />{item.no}
      </div>
      <div style={{ height: 1, background: 'var(--border)' }}></div>
      <div style={{
        width: 40, height: 40, borderRadius: 'var(--radius-md)', background: item.color,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        transform: hover ? 'scale(1.1) rotate(-6deg)' : 'scale(1) rotate(0deg)',
        transition: 'transform 220ms ease',
      }}>
        <Icon name={item.icon} size={22} color="#fff" />
      </div>
      <div style={{ fontFamily: 'var(--font-sans)', fontWeight: 700, fontSize: 'var(--text-base)', color: 'var(--text-strong)', lineHeight: 'var(--leading-snug)' }}>
        {item.yes}
      </div>
    </div>
  );
}

// updated data — brand-order colors
const differentiators = [
  { no: 'No Homework', yes: 'Learning happens at school', icon: 'compass', color: '#E41E27' },      // red
  { no: 'No Heavy Bags', yes: 'The One-Book (System) Model', icon: 'layers', color: '#0B1634' },      // navy
  { no: 'No Boring Classes', yes: 'PBIL is the default', icon: 'sparkles', color: '#16A34A' },        // green
  { no: 'No Rote Learning', yes: 'Portfolios over memorisation', icon: 'zap', color: '#0EA5E9' },     // light blue
  { no: 'No Exam Pressure', yes: 'Continuous assessment', icon: 'shieldCheck', color: '#F97316' },    // orange
];


function TypewriterHeading({ phrases, style }) {
  const reducedMotion = React.useMemo(
    () => typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches,
    []
  );
  const [phraseIndex, setPhraseIndex] = React.useState(0);
  const [text, setText] = React.useState(reducedMotion ? phrases[0] : '');
  const [deleting, setDeleting] = React.useState(false);

  React.useEffect(() => {
    if (reducedMotion) return;
    const current = phrases[phraseIndex % phrases.length];
    let delay = 42;
    let next;
    if (!deleting && text.length < current.length) {
      next = () => setText(current.slice(0, text.length + 1));
    } else if (!deleting && text.length === current.length) {
      delay = 2200;
      next = () => setDeleting(true);
    } else if (deleting && text.length > 0) {
      delay = 24;
      next = () => setText(current.slice(0, text.length - 1));
    } else {
      next = () => { setDeleting(false); setPhraseIndex(i => (i + 1) % phrases.length); };
    }
    const timer = setTimeout(next, delay);
    return () => clearTimeout(timer);
  }, [text, deleting, phraseIndex, reducedMotion, phrases]);

  return (
    <h1 style={{ ...style, minHeight: '2.3em' }}>
      <span className="ngis-sr-only">{phrases[0]}</span>
      <span aria-hidden="true">
        {text}
        {!reducedMotion && <span className="ngis-cursor" aria-hidden="true" style={{ display: 'inline-block', width: 3, height: '0.85em', marginLeft: 4, background: 'var(--gold-500)', verticalAlign: '-0.08em' }}></span>}
      </span>
    </h1>
  );
}

function HomeScreen({ onNav }) {
  const { Button, Stat, Card, EyebrowLabel, Badge } = window.NGISDesignSystem_f6dc23;
  const Icon = window.Icon;
  const { PATTERNS, NAVY_GRADIENT, CREST, SectionDecor, PhotoFrame, EduMotifs, WaveDivider } = window.Decor;

  // The four crest quadrants → the ETM education model.
  // pillars data — one crest color per quadrant, in crest reading order
  const pillars = [
    { icon: 'school', color: CREST.green, t: 'South Korean Standards', d: 'A globally benchmarked academic system aligned with South Korean educational excellence and the Pakistan National Curriculum (NCP).' },
    { icon: 'brain', color: CREST.navy, t: 'Emerging Technologies', d: 'Robotics, coding and AI woven through every stage of learning, from Playgroup to Grade 5.' },
    { icon: 'bookOpen', color: CREST.sky, t: 'Islamic Values', d: 'Character grounded in faith through our Friends of Quran and Role Model (SAWW) programmes.' },
    { icon: 'lightbulb', color: CREST.gold, t: 'Innovation & Enterprise', d: 'The ETM Garage: our centre for innovation that turns curious learners into young creators.' },
  ];


  // Proof-band facts (shown as cards below the hero).
  const facts = [
    { value: '1st', label: 'ETM-powered school in Pakistan', color: 'green' },
    { value: 'Play–G5', label: <React.Fragment>Playgroup to Grade 5<br />Ages 3&ndash;11</React.Fragment>, color: 'navy' },
    { value: 'Arabic', label: 'Compulsory language of the Quran', color: 'blue' },
    { value: 'Zero', label: 'Homework · rote learning · exam pressure', color: 'gold' },
  ];

  // The five published ETM standards — the "standards stack".
  // standards data — cycle through all 4 crest colors across 5 items
  const standards = [
    { n: '01', t: 'Friends of Quran & Role Model (SAWW)', icon: 'star', color: CREST.green },
    { n: '02', t: 'STEAM-Integrated Academic Planning', icon: 'layers', color: CREST.navy },
    { n: '03', t: 'Discovery & Innovation Hub', icon: 'compass', color: CREST.sky },
    { n: '04', t: 'The ETM Garage', icon: 'flask', color: CREST.gold },
    { n: '05', t: 'Faculty Development Cell', icon: 'award', color: CREST.green },
  ];

  return (
    <main>
      {/* ===================== Hero ===================== */}
      {/* ===================== Hero ===================== */}
      <section style={{
        position: 'relative',
        overflow: 'hidden',
        minHeight: 'calc(100vh - var(--header-height))',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}>
        {/* Background image (was a video, now a static poster) */}
        <HeroBackground />

        {/* Dark scrim for text readability — reuses your navy gradient as a tint */}
        <div style={{
          position: 'absolute', inset: 0, zIndex: 1,
          background: 'linear-gradient(90deg, rgba(11,22,52,0.92) 0%, rgba(11,22,52,0.78) 45%, rgba(11,22,52,0.55) 100%)',
        }}></div>

        <div style={{ ...PATTERNS.gridNavy, position: 'absolute', inset: 0, opacity: 0.35, zIndex: 1 }}></div>
        <EduMotifs tone="navy" density="light" />
        <SectionDecor tone="navy" />

        <div style={{ position: 'relative', zIndex: 2, maxWidth: 'var(--container)', margin: '0 auto', padding: 'var(--space-6) var(--space-5)', width: '100%' }}>
          <div style={{ maxWidth: 640 }}>
            {/* Pakistan-first ribbon */}
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, background: 'var(--red-500)', color: '#fff', padding: '11px 22px', borderRadius: 'var(--radius-pill)', fontFamily: 'var(--font-sans)', fontWeight: 800, fontSize: 'var(--text-base)', letterSpacing: '0.02em', textTransform: 'uppercase', boxShadow: '0 6px 24px rgba(228,30,39,0.5), 0 0 0 1px rgba(255,255,255,0.18) inset', border: '1px solid rgba(255,255,255,0.3)' }}>
              <Icon name="star" size={18} color="var(--gold-500)" />Pakistan&rsquo;s First ETM-Powered School
            </div>
            <TypewriterHeading
              phrases={[
                'Transforming Education for a Better Tomorrow.',
                'Not just a school, a movement.',
                'Powered by Robotmea.',
                'South Korean accredited school.',
              ]}
              style={{ fontFamily: 'var(--font-serif)', fontSize: 'var(--text-5xl)', fontWeight: 700, lineHeight: 'var(--leading-tight)', letterSpacing: 'var(--tracking-tight)', color: '#fff', margin: '14px 0 0' }}
            />
            <p style={{ fontSize: 'var(--text-base)', lineHeight: 'var(--leading-normal)', color: 'rgba(255,255,255,0.85)', maxWidth: 500, margin: '14px 0 20px' }}>
              A Playgroup&ndash;Grade&nbsp;5 movement combining South Korean academic standards, a STEAM-integrated curriculum and deep-rooted Islamic values.
            </p>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <Button variant="primary" size="lg" onClick={() => onNav('Admissions', 'enquiry-form')}>Apply for admission</Button>
              <Button variant="secondary" size="lg" onClick={() => onNav('Contact')}>Book a tour</Button>
            </div>
          </div>
        </div>

        {/* Accreditation strip */}
        <div style={{ position: 'relative', zIndex: 2, borderTop: '1px solid rgba(255,255,255,0.12)', background: 'rgba(0,0,0,0.32)' }}>
          <div style={{ maxWidth: 'var(--container)', margin: '0 auto', padding: 'var(--space-3) var(--space-5)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 'var(--space-6)', flexWrap: 'wrap', fontSize: 'var(--text-xs)', color: 'rgba(255,255,255,0.78)', textAlign: 'center' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: 8 }}><Icon name="shieldCheck" size={17} color="var(--gold-500)" />An Initiative of Robotmea</span>
            <span style={{ display: 'flex', alignItems: 'center', gap: 8 }}><Icon name="award" size={17} color="var(--gold-500)" />Accredited by Robotron, South Korea</span>
            <span style={{ display: 'flex', alignItems: 'center', gap: 8 }}><Icon name="bookMarked" size={17} color="var(--gold-500)" />Integrated with the Pakistan National Curriculum</span>
          </div>
        </div>
      </section>

      {/* ===================== Facts band ===================== */}
      <section style={{ background: 'var(--surface-subtle)', borderBottom: '1px solid var(--border)' }}>
        <div className="ngis-grid-4" style={{ maxWidth: 'var(--container)', margin: '0 auto', padding: 'var(--space-7) var(--space-5)', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 'var(--space-5)' }}>
          {facts.map(f => (
            <div key={f.value} className="ngis-fact-card" style={{ background: 'var(--surface-card)', border: '1px solid var(--border)', borderTop: `3px solid var(--${f.color}-500)`, borderRadius: 'var(--radius-lg)', padding: 'var(--space-6) var(--space-4)', boxShadow: 'var(--shadow-sm)' }}>
              <Stat value={f.value} label={f.label} color={f.color} />
            </div>
          ))}
        </div>
      </section>

      {/* ===================== Who we are ===================== */}
      {/* ===================== Who we are ===================== */}
      <section style={{ background: 'var(--surface-page)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ ...PATTERNS.dotsLight, position: 'absolute', inset: 0, opacity: 0.5 }}></div>
        <div className="ngis-feature-grid" style={{ position: 'relative', maxWidth: 'var(--container)', margin: '0 auto', padding: 'var(--space-9) var(--space-5)', display: 'grid', gridTemplateColumns: '0.85fr 1.15fr', gap: 'var(--space-8)', alignItems: 'center' }}>

          {/* Left: navy panel with student photo instead of crest */}
          <div style={{
            position: 'relative', borderRadius: 'var(--radius-lg)', overflow: 'hidden',
            minHeight: 420, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
            boxShadow: 'var(--shadow-md)',
          }}>
            <img
              src="../../assets/photos/students-classroom.png"
              alt="NGIS students in class"
              style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
            />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(11,22,52,0.15) 0%, rgba(11,22,52,0.55) 55%, rgba(11,22,52,0.92) 100%)' }}></div>

            <div style={{ position: 'relative', padding: 'var(--space-6)' }}>
              <div style={{ fontFamily: 'var(--font-serif)', fontWeight: 700, fontSize: 'var(--text-xl)', color: '#fff', lineHeight: 1.2 }}>
                NextGen International School
              </div>
              <div style={{ fontFamily: 'var(--font-sans)', fontWeight: 700, fontSize: 'var(--text-xs)', letterSpacing: 'var(--tracking-wide)', textTransform: 'uppercase', color: 'var(--gold-500)', marginTop: 6 }}>
                Karachi, Pakistan
              </div>
              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginTop: 14 }}>
                {['ETM Powered', 'Robotron Certified', 'K-12'].map(b => (
                  <span key={b} style={{
                    fontSize: 'var(--text-xs)', fontWeight: 600, color: '#fff',
                    background: 'rgba(255,255,255,0.14)', border: '1px solid rgba(255,255,255,0.25)',
                    padding: '5px 12px', borderRadius: 'var(--radius-pill)',
                  }}>{b}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Right: copy + 2x2 info grid */}
          <div>
            <EyebrowLabel color="red">Who we are</EyebrowLabel>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'var(--text-4xl)', fontWeight: 700, margin: '12px 0 0', lineHeight: 'var(--leading-tight)' }}>
              <span style={{ color: 'var(--text-strong)' }}>Not just a school. </span><br />
              <span style={{ color: 'var(--red-500)' }}>A movement.</span>
            </h2>
            <p style={{ fontSize: 'var(--text-base)', color: 'var(--text-body)', margin: '16px 0 24px', lineHeight: 'var(--leading-normal)' }}>
              NextGen International School (NGIS) is Pakistan's first ETM-powered K-12 school, proudly based in Karachi and accredited by Robotron, South Korea. As a project of Robotmea, we bring a globally benchmarked educational system that combines South Korean academic excellence with a modern STEAM framework and deep-rooted Islamic values.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
              {[
                { t: 'South Korean Standards', d: 'Globally benchmarked curriculum' },
                { t: 'Islamic Values', d: 'Faith-rooted education' },
                { t: 'STEAM Framework', d: 'Science, Tech, Arts & Math' },
                { t: 'ETM Powered', d: 'Robotron certified system' },
              ].map(c => (
                <div key={c.t} style={{ background: 'var(--surface-card)', border: '1px solid var(--border)', borderRadius: 'var(--radius-md)', padding: 'var(--space-4)' }}>
                  <div style={{ fontWeight: 700, fontSize: 'var(--text-sm)', color: 'var(--text-strong)' }}>{c.t}</div>
                  <div style={{ fontSize: 'var(--text-xs)', color: 'var(--text-muted)', marginTop: 4 }}>{c.d}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===================== Differentiators ===================== */}


      {/* ===================== Differentiators ===================== */}
      <section style={{ background: '#fff', position: 'relative' }}>
        <div style={{ maxWidth: 'var(--container)', margin: '0 auto', padding: 'var(--space-9) var(--space-5)' }}>
          <div style={{ textAlign: 'center', maxWidth: 680, margin: '0 auto var(--space-7)' }}>
            <EyebrowLabel color="red">What ETM refuses to do</EyebrowLabel>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'var(--text-4xl)', fontWeight: 700, color: 'var(--text-strong)', margin: '12px 0 0', lineHeight: 'var(--leading-tight)' }}>
              From transactional to transformational
            </h2>
            <p style={{ fontSize: 'var(--text-lg)', color: 'var(--text-body)', margin: '14px 0 0', lineHeight: 'var(--leading-normal)' }}>
              We replaced the tired conventions of traditional schooling with an ecosystem designed to make every child relevant for tomorrow's world.
            </p>
          </div>
          <div className="ngis-grid-5" style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 'var(--space-4)' }}>
            {differentiators.map(d => <DiffCard key={d.no} item={d} />)}
          </div>
        </div>
      </section>
      {/* ===================== Four pillars (crest) ===================== */}
      {/* ===================== Four pillars (crest) ===================== */}
      <section style={{ background: 'var(--surface-subtle)', position: 'relative', overflow: 'hidden' }}>
        <EduMotifs tone="light" density="light" />
        <SectionDecor tone="light" />
        <div style={{ position: 'relative', maxWidth: 'var(--container)', margin: '0 auto', padding: 'var(--space-9) var(--space-5)' }}>
          <div style={{ textAlign: 'center', maxWidth: 660, margin: '0 auto var(--space-7)' }}>
            <EyebrowLabel color="red">Our learning ecosystem</EyebrowLabel>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'var(--text-4xl)', fontWeight: 700, color: 'var(--text-strong)', margin: '12px 0 0', lineHeight: 'var(--leading-tight)' }}>Four pillars, drawn from our crest</h2>
            <p style={{ fontSize: 'var(--text-lg)', color: 'var(--text-body)', margin: '14px 0 0', lineHeight: 'var(--leading-normal)' }}>Where local values meet global standards, and emerging technology meets enduring character.</p>
          </div>
          <div className="ngis-grid-4" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 'var(--space-5)' }}>
            {pillars.map(p => (
              <div key={p.t} style={{
                background: 'var(--surface-card)', border: '1px solid var(--border)',
                borderTop: `3px solid ${p.color}`, borderRadius: 'var(--radius-lg)',
                padding: 'var(--space-6)', boxShadow: 'var(--shadow-sm)',
              }}>
                <div style={{ width: 52, height: 52, borderRadius: 'var(--radius-md)', background: `${p.color}1a`, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}>
                  <Icon name={p.icon} size={26} color={p.color} />
                </div>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: 'var(--text-xl)', fontWeight: 600, color: 'var(--text-strong)', margin: '0 0 8px' }}>{p.t}</h3>
                <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-body)', lineHeight: 'var(--leading-normal)', margin: 0 }}>{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== Standards stack ===================== */}
      <section style={{ background: 'var(--surface-page)' }}>
        <div style={{ maxWidth: 'var(--container)', margin: '0 auto', padding: 'var(--space-9) var(--space-5)' }}>
          <div className="ngis-feature-grid" style={{ display: 'grid', gridTemplateColumns: '0.8fr 1.2fr', gap: 'var(--space-8)', alignItems: 'center' }}>
            <div>
              <EyebrowLabel color="navy">The standards stack</EyebrowLabel>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'var(--text-4xl)', fontWeight: 700, color: 'var(--text-strong)', margin: '12px 0 0', lineHeight: 'var(--leading-tight)' }}>Five published standards, non-negotiable in every ETM school</h2>
              <p style={{ fontSize: 'var(--text-base)', color: 'var(--text-muted)', margin: '16px 0 0', lineHeight: 'var(--leading-normal)' }}>These are the structural reasons ETM is a movement, not a brand. Every ETM school delivers all five, audited quarterly by Robotron.</p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
              {standards.map(s => (
                <div key={s.n} style={{ display: 'flex', alignItems: 'center', gap: 18, background: 'var(--surface-card)', border: '1px solid var(--border)', borderLeft: `4px solid ${s.color}`, borderRadius: 'var(--radius-lg)', padding: 'var(--space-4) var(--space-5)' }}>
                  <span style={{ fontFamily: 'var(--font-serif)', fontWeight: 700, fontSize: 'var(--text-2xl)', color: s.color, minWidth: 36 }}>{s.n}</span>
                  <div style={{ width: 44, height: 44, flexShrink: 0, borderRadius: 'var(--radius-md)', background: `${s.color}1a`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Icon name={s.icon} size={22} color={s.color} />
                  </div>
                  <span style={{ fontFamily: 'var(--font-sans)', fontWeight: 700, fontSize: 'var(--text-lg)', color: 'var(--text-strong)' }}>{s.t}</span>
                </div>
              ))}
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
              { t: 'Success, Inshallah', icon: 'trophy', solid: true },
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
            ETM is a Robotron-certified system from South Korea, an enabling ecosystem that integrates emerging technologies, a future-ready curriculum and Islamic values to make every learner relevant.
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
          <div className="ngis-grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'var(--space-5)' }}>
            <PhotoFrame src="../../assets/photos/innovate-lab.png" alt="Innovation lab" accent="green" ratio="4 / 3" />
            <PhotoFrame src="../../assets/photos/foq-quran.png" alt="Friends of Quran" accent="blue" ratio="4 / 3" />
            <PhotoFrame src="../../assets/photos/etm-garage.png" alt="ETM Garage" accent="gold" ratio="4 / 3" />
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
          <Button variant="primary" size="lg" iconRight={<Icon name="arrowRight" size={18} />} onClick={() => onNav('Admissions', 'enquiry-form')} style={{ flexShrink: 0 }}>Begin admission</Button>
        </div>
      </section>
    </main>
  );
}
window.HomeScreen = HomeScreen;