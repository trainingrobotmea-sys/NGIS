import * as React from 'react';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /** Field label. */
  label?: string;
  /** Helper text shown beneath the field. */
  helper?: string;
  /** Error message — overrides helper and turns the field red. */
  error?: string;
  /** Mark as required (adds red asterisk). @default false */
  required?: boolean;
  /** Style for the outer wrapper. */
  containerStyle?: React.CSSProperties;
}

/** Labelled text field with helper and error states. */
export function Input(props: InputProps): JSX.Element;
