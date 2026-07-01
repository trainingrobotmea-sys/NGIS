import React from 'react';

/**
 * NGIS Alert — inline message banner mapped to status colors.
 */
export function Alert({ children, title, tone = 'info', style, ...rest }) {
  const tones = {
    info:    { bg: 'var(--info-bg)',    bar: 'var(--info)',    fg: 'var(--blue-700)' },
    success: { bg: 'var(--success-bg)', bar: 'var(--success)', fg: 'var(--green-700)' },
    warning: { bg: 'var(--warning-bg)', bar: 'var(--warning)', fg: 'var(--gold-700)' },
    danger:  { bg: 'var(--danger-bg)',  bar: 'var(--danger)',  fg: 'var(--red-700)' },
  };
  const t = tones[tone] || tones.info;
  return (
    <div
      role="status"
      style={{
        fontFamily: 'var(--font-sans)',
        background: t.bg,
        borderLeft: `var(--border-accent) solid ${t.bar}`,
        borderRadius: 'var(--radius-md)',
        padding: 'var(--space-4) var(--space-5)',
        color: 'var(--text-body)',
        ...style,
      }}
      {...rest}
    >
      {title && (
        <div style={{
          fontWeight: 'var(--weight-bold)',
          fontSize: 'var(--text-base)',
          color: t.fg,
          marginBottom: 'var(--space-1)',
        }}>
          {title}
        </div>
      )}
      <div style={{ fontSize: 'var(--text-sm)', lineHeight: 'var(--leading-normal)' }}>
        {children}
      </div>
    </div>
  );
}
