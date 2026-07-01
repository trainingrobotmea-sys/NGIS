import * as React from 'react';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Optional colored top accent rule. @default null */
  accent?: 'red' | 'navy' | 'blue' | 'green' | 'gold' | null;
  /** Enable hover lift for clickable cards. @default false */
  interactive?: boolean;
  /** Inner padding (CSS value). @default "var(--space-5)" */
  padding?: string;
  children?: React.ReactNode;
}

/**
 * Surface container for programmes, news, and feature panels.
 * @startingPoint section="Core" subtitle="Card — accent rule + hover lift" viewport="700x220"
 */
export function Card(props: CardProps): JSX.Element;
