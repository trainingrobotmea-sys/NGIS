import * as React from 'react';

export interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Optional bold title line. */
  title?: string;
  /** Status tone. @default "info" */
  tone?: 'info' | 'success' | 'warning' | 'danger';
  children?: React.ReactNode;
}

/** Inline message banner with a colored accent bar. */
export function Alert(props: AlertProps): JSX.Element;
