// NGIS website — top navigation header
function Header({ active, onNav }) {
  const { Button } = window.NGISDesignSystem_f6dc23;
  const Icon = window.Icon;
  const links = ['Home', 'Academics', 'Faculty', 'Admissions', 'Gallery'];
  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 50, background: 'var(--surface-navy)',
      borderBottom: '3px solid var(--brand)',
    }}>
      <div style={{
        maxWidth: 'var(--container)', margin: '0 auto', padding: '0 var(--space-5)',
        height: 'var(--header-height)', display: 'flex', alignItems: 'center', gap: 'var(--space-6)',
      }}>
        <a onClick={() => onNav('Home')} style={{ display: 'flex', alignItems: 'center', gap: 12, cursor: 'pointer', textDecoration: 'none' }}>
          <img src="../../assets/ngis-logo-crest.png" alt="NGIS"
            style={{ width: 44, height: 44, objectFit: 'contain' }} />
          <span style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.1, whiteSpace: 'nowrap' }}>
            <span style={{ fontFamily: 'var(--font-serif)', fontWeight: 700, fontSize: 17, color: '#fff', letterSpacing: '0.01em' }}>NextGen International</span>
            <span style={{ fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: 10.5, color: 'var(--gold-500)', letterSpacing: 'var(--tracking-wider)', textTransform: 'uppercase' }}>School</span>
          </span>
        </a>
        <nav style={{ display: 'flex', gap: 4, marginLeft: 'auto' }} className="ngis-nav">
          {links.map(l => (
            <a key={l} onClick={() => onNav(l)} style={{
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
        <Button variant="primary" size="sm" iconRight={<Icon name="arrowRight" size={15} />} onClick={() => onNav('Admissions')}>Apply</Button>
      </div>
    </header>
  );
}
window.Header = Header;
