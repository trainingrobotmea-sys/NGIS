import React from 'react';

/**
 * NGIS IconButton — square button for a single icon (close, menu, social).
 */
export function IconButton({ children, variant = 'ghost', size = 40, label, style, ...rest }) {
  const [hover, setHover] = React.useState(false);
  const variants = {
    ghost:   { background: hover ? 'var(--surface-subtle)' : 'transparent', color: 'var(--brand-ink)', border: '1px solid transparent' },
    outline: { background: hover ? 'var(--surface-subtle)' : 'var(--surface-page)', color: 'var(--brand-ink)', border: '1px solid var(--border-strong)' },
    solid:   { background: hover ? 'var(--brand-hover)' : 'var(--brand)', color: '#fff', border: '1px solid transparent' },
    navy:    { background: hover ? 'var(--brand-ink-hover)' : 'var(--brand-ink)', color: '#fff', border: '1px solid transparent' },
  };
  return (
    <button
      type="button"
      aria-label={label}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        width: size, height: size,
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        borderRadius: 'var(--radius-md)', cursor: 'pointer',
        transition: 'background var(--dur-fast) var(--ease-standard)',
        ...variants[variant],
        ...style,
      }}
      {...rest}
    >
      {children}
    </button>
  );
}
