import React from 'react';

/**
 * NGIS Input — labelled text field with optional helper / error.
 */
export function Input({
  label, helper, error, id, required = false,
  style, containerStyle, ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const inputId = id || (label ? label.toString().toLowerCase().replace(/\s+/g, '-') : undefined);
  return (
    <div style={{ fontFamily: 'var(--font-sans)', ...containerStyle }}>
      {label && (
        <label htmlFor={inputId} style={{
          display: 'block',
          fontSize: 'var(--text-sm)',
          fontWeight: 'var(--weight-semibold)',
          color: 'var(--text-strong)',
          marginBottom: 'var(--space-2)',
        }}>
          {label}{required && <span style={{ color: 'var(--brand)' }}> *</span>}
        </label>
      )}
      <input
        id={inputId}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        style={{
          width: '100%',
          boxSizing: 'border-box',
          fontFamily: 'var(--font-sans)',
          fontSize: 'var(--text-base)',
          color: 'var(--text-strong)',
          background: 'var(--surface-page)',
          padding: '11px 14px',
          borderRadius: 'var(--radius-md)',
          border: `1px solid ${error ? 'var(--danger)' : focus ? 'var(--focus-ring)' : 'var(--border-strong)'}`,
          boxShadow: focus && !error ? 'var(--shadow-focus)' : 'none',
          outline: 'none',
          transition: 'border-color var(--dur-fast), box-shadow var(--dur-fast)',
          ...style,
        }}
        {...rest}
      />
      {(helper || error) && (
        <div style={{
          marginTop: 'var(--space-2)',
          fontSize: 'var(--text-sm)',
          color: error ? 'var(--danger)' : 'var(--text-muted)',
        }}>
          {error || helper}
        </div>
      )}
    </div>
  );
}
