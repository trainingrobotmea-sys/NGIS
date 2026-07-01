import * as React from 'react';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Color tone from the academic palette. @default "neutral" */
  tone?: 'neutral' | 'brand' | 'navy' | 'success' | 'info' | 'warning';
  children?: React.ReactNode;
}

/** Compact uppercase status or category label. */
export function Badge(props: BadgeProps): JSX.Element;
