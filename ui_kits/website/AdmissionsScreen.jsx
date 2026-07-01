// NGIS website — Admissions / "Enrollment Guide" (from the NGIS Prospectus + Uniform guide)
function AdmissionsScreen() {
  const { Card, EyebrowLabel, Button, Input, Select, Alert, Badge } = window.NGISDesignSystem_f6dc23;
  const Icon = window.Icon;
  const { PATTERNS, NAVY_GRADIENT, SectionDecor } = window.Decor;
  const [submitted, setSubmitted] = React.useState(false);
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [stage, setStage] = React.useState('');
  const [errors, setErrors] = React.useState({});

  const validate = () => {
    const next = {};
    if (!name.trim()) next.name = 'Parent / guardian name is required.';
    if (!email.trim()) next.email = 'Email address is required.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) next.email = 'Enter a valid email address.';
    if (!stage) next.stage = 'Please select a stage of interest.';
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = () => {
    if (validate()) setSubmitted(true);
  };

  const steps = [
    { n: '01', t: 'Collect Prospectus & Admission Form', icon: 'fileText' },
    { n: '02', t: 'Document Submission', icon: 'check' },
    { n: '03', t: 'Parent Orientation Meeting', icon: 'users' },
    { n: '04', t: 'Written Test & Interview', icon: 'bookOpen' },
    { n: '05', t: 'Health Examination & Lab Tests', icon: 'heartPulse' },
    { n: '06', t: 'Enrollment & Fee Submission', icon: 'shieldCheck' },
  ];

  // School uniform guideline.
  const uniformBoys = ['Cotton blue button-down shirt', 'Navy dress trousers', 'Blue & red striped tie', 'Black belt', 'Black socks with black shoes'];
  const uniformGirls = ['Navy blue tunic (pinafore)', 'White trousers', 'White full-sleeve shirt', 'Blue scarf', 'White shoes'];

  const documents = [
    'Child\u2019s recent passport-size photographs (4 copies)',
    'Child\u2019s B-Form / Birth Certificate (original + photocopy)',
    'Parent / Guardian\u2019s CNIC (photocopy of both sides)',
    'School leaving certificate',
    'Child\u2019s vaccination record / health card',
    'Emergency contact information for two guardians',
    'Completed NGIS Admission Form (signed by parent / guardian)',
  ];

  const safety = [
    { icon: 'smartphone', color: 'navy', t: 'Digital Attendance System', d: 'Seamless attendance tracking that keeps parents instantly informed and connected.' },
    { icon: 'heartPulse', color: 'red', t: 'Health Card', d: 'Healthy students lead to excellent minds — we safeguard the wellbeing of every child.' },
    { icon: 'phone', color: 'navy', t: 'Parent Mobile Application', d: 'Stay updated with academics, notices and progress — anytime, anywhere.' },
    { icon: 'shieldCheck', color: 'red', t: 'Security & Safety', d: 'A secure, well-monitored environment where children learn with confidence.' },
  ];

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
        <SectionDecor tone="navy" />
        <div style={{ position: 'relative', maxWidth: 'var(--container)', margin: '0 auto', padding: 'var(--space-8) var(--space-5)', width: '100%' }}>
          <EyebrowLabel color="gold">Enrollment Guide</EyebrowLabel>
          <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'var(--text-6xl)', fontWeight: 700, color: '#fff', margin: '18px 0 0', lineHeight: 'var(--leading-tight)', letterSpacing: 'var(--tracking-tight)' }}>Begin your child&rsquo;s journey</h1>
          <p style={{ fontSize: 'var(--text-xl)', color: 'rgba(255,255,255,0.82)', margin: '20px 0 0', maxWidth: 660, lineHeight: 'var(--leading-normal)' }}>
            We warmly invite you to be part of Pakistan&rsquo;s first ETM-powered school. Here is everything you need to enrol &mdash; InshaAllah.
          </p>
        </div>
      </section>

      {/* Admission process */}
      <section style={{ background: 'var(--surface-page)' }}>
        <div style={{ maxWidth: 'var(--container)', margin: '0 auto', padding: 'var(--space-9) var(--space-5)' }}>
          <div style={{ textAlign: 'center', marginBottom: 'var(--space-7)' }}>
            <EyebrowLabel color="red">The admission process</EyebrowLabel>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'var(--text-4xl)', fontWeight: 700, color: 'var(--text-strong)', margin: '12px 0 0' }}>Six steps to enrollment</h2>
          </div>
          <div className="ngis-grid-6" style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: 'var(--space-4)' }}>
            {steps.map((s, i) => (
              <div key={s.n} style={{ position: 'relative' }}>
                <div style={{ width: 48, height: 48, borderRadius: 'var(--radius-md)', background: 'var(--red-50)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 14 }}>
                  <Icon name={s.icon} size={24} color="var(--red-600)" />
                </div>
                <div style={{ fontFamily: 'var(--font-serif)', fontSize: 'var(--text-xl)', fontWeight: 700, color: 'var(--red-500)', lineHeight: 1, marginBottom: 6 }}>{s.n}</div>
                <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--text-sm)', fontWeight: 700, color: 'var(--text-strong)', margin: 0, lineHeight: 'var(--leading-snug)' }}>{s.t}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Uniform + documents */}
      <section style={{ background: 'var(--surface-subtle)' }}>
        <div className="ngis-feature-grid" style={{ maxWidth: 'var(--container)', margin: '0 auto', padding: 'var(--space-9) var(--space-5)', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-7)', alignItems: 'start' }}>
          {/* Uniform guideline */}
          <Card accent="navy" padding="var(--space-7)">
            <EyebrowLabel color="navy">Uniform guideline</EyebrowLabel>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'var(--text-3xl)', fontWeight: 700, color: 'var(--text-strong)', margin: '10px 0 20px' }}>What to wear</h2>
            <div className="ngis-grid-2-sm" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-5)' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 9, marginBottom: 14 }}>
                  <span style={{ width: 34, height: 34, borderRadius: 'var(--radius-md)', background: 'var(--navy-500)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-serif)', fontWeight: 700, fontSize: 'var(--text-base)' }}>B</span>
                  <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--text-base)', fontWeight: 700, color: 'var(--text-strong)', margin: 0, textTransform: 'uppercase', letterSpacing: 'var(--tracking-wide)' }}>Boys</h3>
                </div>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 11 }}>
                  {uniformBoys.map(u => (
                    <li key={u} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: 'var(--text-sm)', color: 'var(--text-body)', lineHeight: 'var(--leading-normal)' }}>
                      <Icon name="check" size={16} color="var(--navy-600)" style={{ marginTop: 2, flexShrink: 0 }} />{u}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 9, marginBottom: 14 }}>
                  <span style={{ width: 34, height: 34, borderRadius: 'var(--radius-md)', background: 'var(--red-500)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-serif)', fontWeight: 700, fontSize: 'var(--text-base)' }}>G</span>
                  <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--text-base)', fontWeight: 700, color: 'var(--text-strong)', margin: 0, textTransform: 'uppercase', letterSpacing: 'var(--tracking-wide)' }}>Girls</h3>
                </div>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 11 }}>
                  {uniformGirls.map(u => (
                    <li key={u} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: 'var(--text-sm)', color: 'var(--text-body)', lineHeight: 'var(--leading-normal)' }}>
                      <Icon name="check" size={16} color="var(--red-600)" style={{ marginTop: 2, flexShrink: 0 }} />{u}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <p style={{ fontSize: 'var(--text-xs)', color: 'var(--text-muted)', margin: '18px 0 0', lineHeight: 'var(--leading-normal)' }}>The school crest badge is worn on the shirt pocket. Uniforms are available through the school&rsquo;s approved supplier.</p>
          </Card>

          {/* Required documents */}
          <Card accent="red" padding="var(--space-7)">
            <EyebrowLabel color="red">Required documents</EyebrowLabel>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'var(--text-3xl)', fontWeight: 700, color: 'var(--text-strong)', margin: '10px 0 20px' }}>What to bring</h2>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 14 }}>
              {documents.map(d => (
                <li key={d} style={{ display: 'flex', alignItems: 'flex-start', gap: 12, fontSize: 'var(--text-base)', color: 'var(--text-body)', lineHeight: 'var(--leading-normal)' }}>
                  <Icon name="check" size={18} color="var(--red-600)" style={{ marginTop: 2, flexShrink: 0 }} />{d}
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </section>

      {/* Safety & wellbeing */}
      <section style={{ background: 'var(--surface-page)', position: 'relative', overflow: 'hidden' }}>
        <SectionDecor tone="light" />
        <div style={{ position: 'relative', maxWidth: 'var(--container)', margin: '0 auto', padding: 'var(--space-9) var(--space-5)' }}>
          <div style={{ textAlign: 'center', maxWidth: 680, margin: '0 auto var(--space-7)' }}>
            <EyebrowLabel color="red">Safety & student wellbeing</EyebrowLabel>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'var(--text-4xl)', fontWeight: 700, color: 'var(--text-strong)', margin: '12px 0 0', lineHeight: 'var(--leading-tight)' }}>Intelligent safety, connected learning</h2>
            <p style={{ fontSize: 'var(--text-lg)', color: 'var(--text-body)', margin: '14px 0 0', lineHeight: 'var(--leading-normal)' }}>From the moment students step onto campus to the time they return home, every element is designed to make them feel secure and supported.</p>
          </div>
          <div className="ngis-grid-4" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 'var(--space-5)' }}>
            {safety.map(s => (
              <Card key={s.t} accent={s.color}>
                <div style={{ width: 52, height: 52, borderRadius: 'var(--radius-md)', background: `var(--${s.color}-50)`, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}>
                  <Icon name={s.icon} size={26} color={`var(--${s.color}-600)`} />
                </div>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: 'var(--text-lg)', fontWeight: 600, color: 'var(--text-strong)', margin: '0 0 8px', lineHeight: 'var(--leading-snug)' }}>{s.t}</h3>
                <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-body)', lineHeight: 'var(--leading-normal)', margin: 0 }}>{s.d}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enquiry form + contact */}
      <section style={{ background: 'var(--surface-subtle)', borderTop: '1px solid var(--border)' }}>
        <div className="ngis-feature-grid" style={{ maxWidth: 'var(--container)', margin: '0 auto', padding: 'var(--space-9) var(--space-5)', display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: 'var(--space-7)', alignItems: 'start' }}>
          {/* Form */}
          <Card padding="var(--space-7)">
            <EyebrowLabel color="navy">Enquiry form</EyebrowLabel>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'var(--text-3xl)', fontWeight: 700, color: 'var(--text-strong)', margin: '10px 0 22px' }}>Request a prospectus</h2>
            {submitted ? (
              <Alert tone="success" title={`Thank you${name ? ', ' + name.split(' ')[0] : ''}.`}>
                Your enquiry has been received. Our admissions team will be in touch within three working days with your prospectus and next steps, InshaAllah.
              </Alert>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
                <div className="ngis-grid-2-sm" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-4)' }}>
                  <Input label="Parent / guardian name" placeholder="Full name" required value={name}
                    onChange={e => { setName(e.target.value); if (errors.name) setErrors({ ...errors, name: undefined }); }}
                    error={errors.name} />
                  <Input label="Email address" type="email" placeholder="you@example.com" required value={email}
                    onChange={e => { setEmail(e.target.value); if (errors.email) setErrors({ ...errors, email: undefined }); }}
                    error={errors.email} />
                </div>
                <div className="ngis-grid-2-sm" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-4)' }}>
                  <Input label="Child\u2019s age" placeholder="e.g. 6" />
                  <div>
                    <Select label="Stage of interest" required value={stage}
                      style={errors.stage ? { border: '1px solid var(--danger)' } : undefined}
                      options={[{ value: '', label: 'Select a stage…' }, 'Pre-Primary (2–6)', 'Primary', 'Secondary', 'Sixth Form']}
                      onChange={e => { setStage(e.target.value); if (errors.stage) setErrors({ ...errors, stage: undefined }); }} />
                    {errors.stage && <div style={{ marginTop: 'var(--space-2)', fontSize: 'var(--text-sm)', color: 'var(--danger)' }}>{errors.stage}</div>}
                  </div>
                </div>
                <Input label="Message" placeholder="Tell us a little about your child (optional)" />
                <Button variant="primary" size="lg" fullWidth onClick={handleSubmit}>Submit enquiry</Button>
                <p style={{ fontSize: 'var(--text-xs)', color: 'var(--text-muted)', margin: 0, textAlign: 'center' }}>We respect your privacy. Your details are used only to respond to this enquiry.</p>
              </div>
            )}
          </Card>

          {/* Contact */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-5)' }}>
            <Card accent="navy">
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: 'var(--text-xl)', fontWeight: 600, color: 'var(--text-strong)', margin: '0 0 12px' }}>Speak to admissions</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12, fontSize: 'var(--text-sm)', color: 'var(--text-body)' }}>
                <span style={{ display: 'flex', gap: 8, alignItems: 'center' }}><Icon name="globe" size={16} color="var(--brand-ink)" />www.ngis.pk</span>
                <span style={{ display: 'flex', gap: 8, alignItems: 'center' }}><Icon name="mapPin" size={16} color="var(--brand-ink)" />Karachi, Pakistan</span>
                <span style={{ display: 'flex', gap: 8, alignItems: 'center' }}><Icon name="mail" size={16} color="var(--brand-ink)" />admissions@ngis.pk</span>
              </div>
            </Card>
            <Card accent="gold">
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
                <Icon name="shieldCheck" size={22} color="var(--gold-700)" />
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: 'var(--text-xl)', fontWeight: 600, color: 'var(--text-strong)', margin: 0 }}>Accreditation</h3>
              </div>
              <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-body)', lineHeight: 'var(--leading-normal)', margin: 0 }}>
                A project of Robotmea, accredited by Robotron, South Korea. Built on South Korean educational standards and grounded in Islamic values.
              </p>
            </Card>
          </div>
        </div>
      </section>
    </main>
  );
}
window.AdmissionsScreen = AdmissionsScreen;