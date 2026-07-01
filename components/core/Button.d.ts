import * as React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual role of the button. @default "primary" */
  variant?: 'primary' | 'navy' | 'secondary' | 'ghost';
  /** Size on the 8px grid. @default "md" */
  size?: 'sm' | 'md' | 'lg';
  /** Stretch to fill the container width. @default false */
  fullWidth?: boolean;
  /** Disable interaction. @default false */
  disabled?: boolean;
  /** Optional leading icon node. */
  iconLeft?: React.ReactNode;
  /** Optional trailing icon node. */
  iconRight?: React.ReactNode;
  children?: React.ReactNode;
}

/**
 * Primary interactive control for NGIS surfaces.
 * @startingPoint section="Core" subtitle="Button — primary, navy, secondary, ghost" viewport="700x150"
 */
export function Button(props: ButtonProps): JSX.Element;
