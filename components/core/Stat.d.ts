import * as React from 'react';

export interface StatProps extends React.HTMLAttributes<HTMLDivElement> {
  /** The headline figure, e.g. "98%". */
  value: React.ReactNode;
  /** Supporting label beneath the figure. */
  label: React.ReactNode;
  /** Figure color. @default "red" */
  color?: 'red' | 'navy' | 'blue' | 'green' | 'gold';
  /** Text alignment. @default "center" */
  align?: 'left' | 'center';
}

/** Large statistic with supporting label for proof bands. */
export function Stat(props: StatProps): JSX.Element;
