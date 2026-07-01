// NGIS website — shared decorative system
// Disciplined to the brand's primary pair (red + navy) with gold as a sparing
// metallic accent. Provides background patterns, ring motifs (echoing the crest
// ring) and layered photo frames (the prospectus's stacked-rectangle look).

// ---- Background patterns (pure CSS, no asset loading) --------------------
const PATTERNS = {
  // faint dot grid for light surfaces
  dotsLight: {
    backgroundImage: 'radial-gradient(var(--ink-200) 1.1px, transparent 1.2px)',
    backgroundSize: '24px 24px',
  },
  // dot grid for navy surfaces
  dotsNavy: {
    backgroundImage: 'radial-gradient(rgba(255,255,255,0.09) 1.1px, transparent 1.2px)',
    backgroundSize: '24px 24px',
  },
  // fine engineering grid for navy surfaces
  gridNavy: {
    backgroundImage:
      'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
    backgroundSize: '40px 40px',
  },
};

// Deep navy gradient used on all dark sections.
const NAVY_GRADIENT = 'linear-gradient(150deg, var(--navy-700) 0%, var(--navy-500) 60%, var(--navy-600) 100%)';

// ---- Ring motif ----------------------------------------------------------
// Concentric outline rings echoing the crest ring. Decorative only.
function Rings({ size = 320, tone = 'light', style = {} }) {
  const stroke = tone === 'navy' ? 'rgba(255,255,255,0.14)' : 'var(--ink-200)';
  const accent = tone === 'navy' ? 'rgba(253,204,14,0.5)' : 'var(--red-200)';
  return (
    <svg width={size} height={size} viewBox="0 0 320 320" fill="none"
      style={{ position: 'absolute', pointerEvents: 'none', ...style }} aria-hidden="true">
      <circle cx="160" cy="160" r="158" stroke={stroke} strokeWidth="1.5" />
      <circle cx="160" cy="160" r="118" stroke={stroke} strokeWidth="1.5" />
      <circle cx="160" cy="160" r="78" stroke={accent} strokeWidth="1.5" strokeDasharray="3 7" />
    </svg>
  );
}

// ---- Section decoration layer -------------------------------------------
// Drops faint rings + a dot cluster behind a section. Parent must be
// position:relative with overflow:hidden.
function SectionDecor({ tone = 'light' }) {
  return (
    <React.Fragment>
      <Rings tone={tone} size={360} style={{ top: -120, right: -110 }} />
      <Rings tone={tone} size={240} style={{ bottom: -100, left: -90 }} />
    </React.Fragment>
  );
}

// ---- Layered picture holder ----------------------------------------------
// A clean, light placeholder frame with an offset accent rectangle behind it
// (the catalogue's stacked-rectangle look). Reads clearly as "photo goes here";
// drop a real photo in later via the `src` prop.
function PhotoFrame({
  src, alt = '', label = 'Photo', caption,
  accent = 'red', ratio = '4 / 3', icon = 'image', style = {},
}) {
  const Icon = window.Icon;
  const accentVar = `var(--${accent}-500)`;
  return (
    <div style={{ position: 'relative', ...style }}>
      {/* offset accent rectangle behind */}
      <div style={{
        position: 'absolute', inset: 0, transform: 'translate(14px, 14px)',
        borderRadius: 'var(--radius-xl)', background: accentVar, opacity: 0.14,
      }} aria-hidden="true"></div>
      {/* thin accent rule top-left corner */}
      <div style={{
        position: 'absolute', top: -6, left: -6, width: 48, height: 48,
        borderTop: `3px solid ${accentVar}`, borderLeft: `3px solid ${accentVar}`,
        borderTopLeftRadius: 'var(--radius-lg)', zIndex: 2,
      }} aria-hidden="true"></div>
      {/* the frame (white mat) */}
      <div style={{
        position: 'relative', zIndex: 1, background: '#fff',
        border: '1px solid var(--border)', borderRadius: 'var(--radius-xl)',
        padding: 8, boxShadow: 'var(--shadow-md)',
      }}>
        <div style={{
          position: 'relative', aspectRatio: ratio, borderRadius: 'var(--radius-md)',
          overflow: 'hidden', background: 'var(--surface-subtle)',
          border: '1.5px dashed var(--border-strong, var(--ink-200))',
          display: 'flex', flexDirection: 'column', alignItems: 'center',
          justifyContent: 'center', gap: 10,
        }}>
          {src ? (
            <img src={src} alt={alt} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
          ) : (
            <React.Fragment>
              <div style={{ ...PATTERNS.dotsLight, position: 'absolute', inset: 0, opacity: 0.5 }}></div>
              <div style={{ width: 52, height: 52, borderRadius: '50%', background: `var(--${accent}-50)`, display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
                <Icon name={icon} size={24} color={accentVar} />
              </div>
              <span style={{ position: 'relative', fontSize: 'var(--text-xs)', fontWeight: 600, letterSpacing: 'var(--tracking-wide)', textTransform: 'uppercase', color: 'var(--text-muted)' }}>{label}</span>
            </React.Fragment>
          )}
        </div>
      </div>
      {caption && (
        <div style={{
          position: 'absolute', zIndex: 2, bottom: 16, left: -10,
          background: '#fff', borderLeft: `3px solid ${accentVar}`,
          padding: '7px 13px', borderRadius: '0 var(--radius-sm) var(--radius-sm) 0',
          boxShadow: 'var(--shadow-md)', fontFamily: 'var(--font-sans)',
          fontWeight: 700, fontSize: 'var(--text-sm)', color: 'var(--brand-ink)',
        }}>{caption}</div>
      )}
    </div>
  );
}

// ---- Floating education motifs -------------------------------------------
// Scatters faint subject icons behind a section for warmth (book, compass,
// rocket, star, flask, etc). Parent must be position:relative; overflow:hidden.
function EduMotifs({ tone = 'light', density = 'normal' }) {
  const Icon = window.Icon;
  const color = tone === 'navy' ? 'rgba(255,255,255,0.07)' : 'var(--ink-100)';
  const base = [
    { name: 'bookOpen', size: 64, top: '8%', left: '4%', rot: -12 },
    { name: 'compass', size: 52, top: '64%', left: '8%', rot: 10 },
    { name: 'rocket', size: 58, top: '14%', left: '88%', rot: 14 },
    { name: 'flask', size: 48, top: '72%', left: '82%', rot: -8 },
    { name: 'star', size: 40, top: '40%', left: '50%', rot: 0 },
    { name: 'graduationCap', size: 50, top: '82%', left: '46%', rot: 6 },
    { name: 'lightbulb', size: 44, top: '26%', left: '30%', rot: -6 },
    { name: 'brain', size: 46, top: '54%', left: '72%', rot: 12 },
  ];
  const motifs = density === 'light' ? base.filter((_, i) => i % 2 === 0) : base;
  return (
    <React.Fragment>
      {motifs.map((m, i) => (
        <span key={i} aria-hidden="true" style={{ position: 'absolute', top: m.top, left: m.left, transform: `rotate(${m.rot}deg)`, pointerEvents: 'none', lineHeight: 0 }}>
          <Icon name={m.name} size={m.size} color={color} strokeWidth={1.5} />
        </span>
      ))}
    </React.Fragment>
  );
}

// ---- Soft wave divider ---------------------------------------------------
// A friendly curved transition between sections. Place at the very top or
// bottom of a section; `fill` should match the ADJACENT section's background.
function WaveDivider({ fill = 'var(--surface-page)', flip = false, height = 56 }) {
  return (
    <div aria-hidden="true" style={{ position: 'absolute', left: 0, right: 0, [flip ? 'bottom' : 'top']: -1, lineHeight: 0, transform: flip ? 'scaleY(-1)' : 'none', zIndex: 1 }}>
      <svg viewBox="0 0 1440 56" width="100%" height={height} preserveAspectRatio="none" style={{ display: 'block' }}>
        <path d="M0,32 C240,64 480,0 720,16 C960,32 1200,64 1440,24 L1440,0 L0,0 Z" fill={fill} />
      </svg>
    </div>
  );
}

// ---- Multilingual class-name badge --------------------------------------
// Shows a class's English / Korean / Arabic names — the school's signature
// trilingual identity system.
function ClassNameStack({ en, ko, ar, accent = 'navy' }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <span style={{ fontFamily: 'var(--font-serif)', fontWeight: 700, fontSize: 'var(--text-xl)', color: 'var(--text-strong)' }}>{en}</span>
      <span style={{ fontSize: 'var(--text-sm)', color: `var(--${accent}-600)`, fontWeight: 600 }}>{ko}</span>
      <span dir="rtl" style={{ fontSize: 'var(--text-base)', color: 'var(--text-muted)' }}>{ar}</span>
    </div>
  );
}

window.Decor = { PATTERNS, NAVY_GRADIENT, Rings, SectionDecor, PhotoFrame, EduMotifs, WaveDivider, ClassNameStack };
