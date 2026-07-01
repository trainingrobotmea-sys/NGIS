import React from 'react';

/**
 * NGIS Badge — compact status/category label.
 * Tones map to the academic palette; use sparingly.
 */
export function Badge({ children, tone = 'neutral', style, ...rest }) {
  const tones = {
    neutral: { background: 'var(--ink-100)',  color: 'var(--ink-700)' },
    brand:   { background: 'var(--red-50)',   color: 'var(--red-700)' },
    navy:    { background: 'var(--navy-50)',  color: 'var(--navy-600)' },
    success: { background: 'var(--green-50)', color: 'var(--green-700)' },
    info:    { background: 'var(--blue-50)',  color: 'var(--blue-700)' },
    warning: { background: 'var(--gold-50)',  color: 'var(--gold-700)' },
  };
  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '5px',
        fontFamily: 'var(--font-sans)',
        fontSize: 'var(--text-xs)',
        fontWeight: 'var(--weight-bold)',
        letterSpacing: 'var(--tracking-wide)',
        textTransform: 'uppercase',
        padding: '4px 9px',
        borderRadius: 'var(--radius-sm)',
        ...tones[tone],
        ...style,
      }}
      {...rest}
    >
      {children}
    </span>
  );
}
