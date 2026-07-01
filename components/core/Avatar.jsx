import React from 'react';

/**
 * NGIS Avatar — circular initials or photo, for faculty / student profiles.
 */
export function Avatar({ name = '', src = null, size = 44, color = 'navy', style, ...rest }) {
  const colors = {
    navy: 'var(--navy-500)', red: 'var(--red-500)', blue: 'var(--blue-600)',
    green: 'var(--green-600)', gold: 'var(--gold-600)',
  };
  const initials = name.split(' ').filter(Boolean).slice(0, 2).map(w => w[0].toUpperCase()).join('');
  return (
    <div
      style={{
        width: size, height: size,
        borderRadius: 'var(--radius-pill)',
        background: src ? 'var(--ink-200)' : (colors[color] || colors.navy),
        color: '#fff',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'var(--font-sans)',
        fontWeight: 'var(--weight-bold)',
        fontSize: size * 0.4,
        overflow: 'hidden',
        flexShrink: 0,
        ...style,
      }}
      {...rest}
    >
      {src
        ? <img src={src} alt={name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        : initials}
    </div>
  );
}
