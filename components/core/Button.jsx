import React from 'react';

/**
 * NGIS Button — the primary interactive control.
 * Variants map to brand roles; sizes follow the 8px grid.
 */
export function Button({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  disabled = false,
  iconLeft = null,
  iconRight = null,
  type = 'button',
  onClick,
  style,
  ...rest
}) {
  const sizes = {
    sm: { padding: '8px 14px', fontSize: 'var(--text-sm)', gap: '6px' },
    md: { padding: '11px 20px', fontSize: 'var(--text-base)', gap: '8px' },
    lg: { padding: '14px 28px', fontSize: 'var(--text-lg)', gap: '10px' },
  };

  const variants = {
    primary: {
      background: 'var(--brand)',
      color: 'var(--text-on-brand)',
      border: '1px solid var(--brand)',
    },
    navy: {
      background: 'var(--brand-ink)',
      color: 'var(--text-on-navy)',
      border: '1px solid var(--brand-ink)',
    },
    secondary: {
      background: 'var(--surface-page)',
      color: 'var(--brand-ink)',
      border: '1px solid var(--border-strong)',
    },
    ghost: {
      background: 'transparent',
      color: 'var(--brand-ink)',
      border: '1px solid transparent',
    },
  };

  const [hover, setHover] = React.useState(false);

  const hoverStyle = !disabled && hover ? {
    primary:   { background: 'var(--brand-hover)', borderColor: 'var(--brand-hover)' },
    navy:      { background: 'var(--brand-ink-hover)', borderColor: 'var(--brand-ink-hover)' },
    secondary: { background: 'var(--surface-subtle)', borderColor: 'var(--ink-400)' },
    ghost:     { background: 'var(--surface-subtle)' },
  }[variant] : {};

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: fullWidth ? '100%' : 'auto',
        fontFamily: 'var(--font-sans)',
        fontWeight: 'var(--weight-bold)',
        lineHeight: 1,
        letterSpacing: '0.01em',
        borderRadius: 'var(--radius-md)',
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.45 : 1,
        transition: 'background var(--dur-base) var(--ease-standard), border-color var(--dur-base) var(--ease-standard)',
        ...sizes[size],
        ...variants[variant],
        ...hoverStyle,
        ...style,
      }}
      {...rest}
    >
      {iconLeft}
      {children}
      {iconRight}
    </button>
  );
}
