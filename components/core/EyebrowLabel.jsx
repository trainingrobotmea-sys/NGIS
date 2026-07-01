import React from 'react';

/**
 * NGIS EyebrowLabel — small uppercase kicker above headings.
 */
export function EyebrowLabel({ children, color = 'red', style, ...rest }) {
  const colors = {
    red: 'var(--brand)', navy: 'var(--brand-ink)', blue: 'var(--blue-600)',
    green: 'var(--green-600)', gold: 'var(--gold-700)',
  };
  return (
    <span
      style={{
        display: 'inline-block',
        fontFamily: 'var(--font-sans)',
        fontSize: 'var(--text-sm)',
        fontWeight: 'var(--weight-bold)',
        textTransform: 'uppercase',
        letterSpacing: 'var(--tracking-wide)',
        color: colors[color] || colors.red,
        ...style,
      }}
      {...rest}
    >
      {children}
    </span>
  );
}
