import React from 'react';

/**
 * NGIS Card — surface container with optional top accent rule.
 * Use for programme cards, news, feature panels.
 */
export function Card({
  children,
  accent = null,        // null | 'red' | 'navy' | 'blue' | 'green' | 'gold'
  interactive = false,
  padding = 'var(--space-5)',
  style,
  ...rest
}) {
  const accents = {
    red: 'var(--red-500)', navy: 'var(--navy-500)', blue: 'var(--blue-500)',
    green: 'var(--green-500)', gold: 'var(--gold-500)',
  };
  const [hover, setHover] = React.useState(false);
  return (
    <div
      onMouseEnter={() => interactive && setHover(true)}
      onMouseLeave={() => interactive && setHover(false)}
      style={{
        background: 'var(--surface-card)',
        border: '1px solid var(--border)',
        borderRadius: 'var(--radius-lg)',
        borderTop: accent ? `var(--border-accent) solid ${accents[accent]}` : '1px solid var(--border)',
        boxShadow: hover ? 'var(--shadow-md)' : 'var(--shadow-sm)',
        transform: hover ? 'translateY(-2px)' : 'none',
        transition: 'box-shadow var(--dur-base) var(--ease-standard), transform var(--dur-base) var(--ease-standard)',
        padding,
        cursor: interactive ? 'pointer' : 'default',
        ...style,
      }}
      {...rest}
    >
      {children}
    </div>
  );
}
