import * as React from 'react';

export interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Full name — initials are derived when no image is given. */
  name?: string;
  /** Optional image source. */
  src?: string | null;
  /** Diameter in px. @default 44 */
  size?: number;
  /** Background color when showing initials. @default "navy" */
  color?: 'navy' | 'red' | 'blue' | 'green' | 'gold';
}

/** Circular initials or photo avatar for people. */
export function Avatar(props: AvatarProps): JSX.Element;
