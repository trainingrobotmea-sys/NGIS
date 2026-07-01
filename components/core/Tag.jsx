import React from 'react';

/**
 * NGIS Tag — pill-shaped filter / category chip.
 */
export function Tag({ children, color = 'navy', active = false, style, ...rest }) {
  const colors = {
    navy:  'var(--navy-500)',
    red:   'var(--red-500)',
    blue:  'var(--blue-600)',
    green: 'var(--green-600)',
    gold:  'var(--gold-600)',
  };
  const c = colors[color] || colors.navy;
  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        fontFamily: 'var(--font-sans)',
        fontSize: 'var(--text-sm)',
        fontWeight: 'var(--weight-semibold)',
        padding: '6px 14px',
        borderRadius: 'var(--radius-pill)',
        border: `1px solid ${active ? c : 'var(--border-strong)'}`,
        background: active ? c : 'transparent',
        color: active ? '#fff' : 'var(--text-body)',
        cursor: 'pointer',
        transition: 'all var(--dur-fast) var(--ease-standard)',
        ...style,
      }}
      {...rest}
    >
      {children}
    </span>
  );
}
