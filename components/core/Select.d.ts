import * as React from 'react';

export interface SelectOption { value: string; label: string; }

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  /** Field label. */
  label?: string;
  /** Helper text beneath the field. */
  helper?: string;
  /** Options — strings or {value,label} objects. */
  options?: (string | SelectOption)[];
  /** Mark as required. @default false */
  required?: boolean;
  /** Wrapper style. */
  containerStyle?: React.CSSProperties;
}

/** Labelled native dropdown matching Input styling. */
export function Select(props: SelectProps): JSX.Element;
