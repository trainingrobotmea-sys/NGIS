// NGIS website — top navigation header
function Header({ active, onNav }) {
  const { Button } = window.NGISDesignSystem_f6dc23;
  const Icon = window.Icon;
  const links = ['Home', 'Academics', 'Faculty', 'Admissions', 'Gallery'];
  const [open, setOpen] = React.useState(false);
  const go = (r) => { setOpen(false); onNav(r); };
  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 50, background: 'var(--surface-navy)',
      borderBottom: '3px solid var(--brand)',
    }}>
      <div className="ngis-header-row" style={{
        maxWidth: 'var(--container)', margin: '0 auto', padding: '0 var(--space-5)',
        height: 'var(--header-height)', display: 'flex', alignItems: 'center', gap: 'var(--space-6)',
      }}>
        <a onClick={() => go('Home')} style={{ display: 'flex', alignItems: 'center', gap: 12, cursor: 'pointer', textDecoration: 'none' }}>
          <img src="../../assets/ngis-logo-crest.png" alt="NGIS"
            style={{ width: 44, height: 44, objectFit: 'contain', flexShrink: 0 }} />
          <span style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.1, gap: 1 }} className="ngis-header-title">
            <span style={{ fontFamily: 'var(--font-sans)', fontWeight: 800, fontSize: 17, color: '#fff', letterSpacing: '0.01em', textTransform: 'uppercase', whiteSpace: 'nowrap' }}>NextGen</span>
            <span style={{ fontFamily: 'var(--font-sans)', fontWeight: 800, fontSize: 17, color: '#fff', letterSpacing: '0.01em', textTransform: 'uppercase', whiteSpace: 'nowrap' }}>International School</span>
            <span style={{ fontFamily: 'var(--font-sans)', fontWeight: 700, fontSize: 9, color: '#fff', letterSpacing: 'var(--tracking-wider)', textTransform: 'uppercase', whiteSpace: 'nowrap', marginTop: 2 }}>Transforming education for better tomorrow</span>
          </span>
        </a>
        <nav style={{ display: 'flex', gap: 4, marginLeft: 'auto' }} className="ngis-nav">
          {links.map(l => (
            <a key={l} onClick={() => go(l)} style={{
              padding: '8px 14px', borderRadius: 'var(--radius-md)', cursor: 'pointer',
              fontFamily: 'var(--font-sans)', fontSize: 'var(--text-sm)', fontWeight: 600,
              color: active === l ? '#fff' : 'rgba(255,255,255,0.78)',
              background: active === l ? 'rgba(255,255,255,0.12)' : 'transparent',
              transition: 'background var(--dur-fast), color var(--dur-fast)',
            }}
              onMouseEnter={e => { if (active !== l) e.currentTarget.style.color = '#fff'; }}
              onMouseLeave={e => { if (active !== l) e.currentTarget.style.color = 'rgba(255,255,255,0.78)'; }}
            >{l}</a>
          ))}
        </nav>
        <Button className="ngis-header-cta" variant="primary" size="sm" iconRight={<Icon name="arrowRight" size={15} />} onClick={() => go('Admissions')}>Apply</Button>
        <button
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen(o => !o)}
          className="ngis-nav-toggle"
          style={{
            display: 'none', marginLeft: 'auto', background: 'transparent', border: 'none',
            padding: 8, cursor: 'pointer', alignItems: 'center', justifyContent: 'center',
          }}
        >
          <Icon name={open ? 'x' : 'menu'} size={24} color="#fff" />
        </button>
      </div>
      {open && (
        <nav className="ngis-nav-mobile" style={{
          display: 'flex', flexDirection: 'column', padding: 'var(--space-3) var(--space-5) var(--space-5)',
          background: 'var(--surface-navy)', borderTop: '1px solid rgba(255,255,255,0.12)', gap: 2,
        }}>
          {links.map(l => (
            <a key={l} onClick={() => go(l)} style={{
              padding: '12px 14px', borderRadius: 'var(--radius-md)', cursor: 'pointer',
              fontFamily: 'var(--font-sans)', fontSize: 'var(--text-base)', fontWeight: 600,
              color: active === l ? '#fff' : 'rgba(255,255,255,0.78)',
              background: active === l ? 'rgba(255,255,255,0.12)' : 'transparent',
            }}>{l}</a>
          ))}
        </nav>
      )}
    </header>
  );
}
window.Header = Header;
