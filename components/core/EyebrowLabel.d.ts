import * as React from 'react';

export interface EyebrowLabelProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Color. @default "red" */
  color?: 'red' | 'navy' | 'blue' | 'green' | 'gold';
  children?: React.ReactNode;
}

/** Small uppercase kicker label placed above a heading. */
export function EyebrowLabel(props: EyebrowLabelProps): JSX.Element;
