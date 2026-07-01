import React from 'react';

/**
 * NGIS Select — labelled native dropdown matching Input styling.
 */
export function Select({ label, helper, id, options = [], required = false, style, containerStyle, ...rest }) {
  const [focus, setFocus] = React.useState(false);
  const selId = id || (label ? label.toString().toLowerCase().replace(/\s+/g, '-') : undefined);
  return (
    <div style={{ fontFamily: 'var(--font-sans)', ...containerStyle }}>
      {label && (
        <label htmlFor={selId} style={{
          display: 'block', fontSize: 'var(--text-sm)', fontWeight: 'var(--weight-semibold)',
          color: 'var(--text-strong)', marginBottom: 'var(--space-2)',
        }}>
          {label}{required && <span style={{ color: 'var(--brand)' }}> *</span>}
        </label>
      )}
      <select
        id={selId}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        style={{
          width: '100%', boxSizing: 'border-box', appearance: 'none',
          fontFamily: 'var(--font-sans)', fontSize: 'var(--text-base)',
          color: 'var(--text-strong)', background: 'var(--surface-page)',
          padding: '11px 38px 11px 14px', borderRadius: 'var(--radius-md)',
          border: `1px solid ${focus ? 'var(--focus-ring)' : 'var(--border-strong)'}`,
          boxShadow: focus ? 'var(--shadow-focus)' : 'none', outline: 'none', cursor: 'pointer',
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%2364748b' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E\")",
          backgroundRepeat: 'no-repeat', backgroundPosition: 'right 12px center',
          ...style,
        }}
        {...rest}
      >
        {options.map((o, i) => {
          const val = typeof o === 'string' ? o : o.value;
          const lab = typeof o === 'string' ? o : o.label;
          return <option key={i} value={val}>{lab}</option>;
        })}
      </select>
      {helper && (
        <div style={{ marginTop: 'var(--space-2)', fontSize: 'var(--text-sm)', color: 'var(--text-muted)' }}>{helper}</div>
      )}
    </div>
  );
}
