import * as React from 'react';

export interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Accent color of the chip. @default "navy" */
  color?: 'navy' | 'red' | 'blue' | 'green' | 'gold';
  /** Selected / filled state. @default false */
  active?: boolean;
  children?: React.ReactNode;
}

/** Pill-shaped filter or category chip. */
export function Tag(props: TagProps): JSX.Element;
