import React from 'react';

/**
 * NGIS Stat — large figure with a supporting label.
 * Used in proof bands ("98% university placement", "1:8 ratio").
 */
export function Stat({ value, label, color = 'red', align = 'center', style, ...rest }) {
  const colors = {
    red: 'var(--red-500)', navy: 'var(--navy-500)', blue: 'var(--blue-600)',
    green: 'var(--green-600)', gold: 'var(--gold-600)',
  };
  return (
    <div style={{ textAlign: align, fontFamily: 'var(--font-sans)', ...style }} {...rest}>
      <div style={{
        fontFamily: 'var(--font-serif)',
        fontSize: 'var(--text-5xl)',
        fontWeight: 'var(--weight-bold)',
        lineHeight: 1,
        letterSpacing: 'var(--tracking-tight)',
        color: colors[color] || colors.red,
      }}>
        {value}
      </div>
      <div style={{
        marginTop: 'var(--space-2)',
        fontSize: 'var(--text-sm)',
        fontWeight: 'var(--weight-semibold)',
        color: 'var(--text-muted)',
        textTransform: 'uppercase',
        letterSpacing: 'var(--tracking-wide)',
      }}>
        {label}
      </div>
    </div>
  );
}
