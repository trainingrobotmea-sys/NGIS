import * as React from 'react';

export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual style. @default "ghost" */
  variant?: 'ghost' | 'outline' | 'solid' | 'navy';
  /** Square size in px. @default 40 */
  size?: number;
  /** Accessible label (sets aria-label). */
  label?: string;
  children?: React.ReactNode;
}

/** Square single-icon button (close, menu, social). */
export function IconButton(props: IconButtonProps): JSX.Element;
