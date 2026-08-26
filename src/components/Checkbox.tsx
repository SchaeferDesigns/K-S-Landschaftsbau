'use client';

import type { ReactNode } from 'react';
import Icon from './Icon';

type CheckboxProps = {
  id: string;
  name: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  children: ReactNode;
  describedBy?: string;
  required?: boolean;
};

/**
 * Eigenes Kontrollkästchen mit runder Form und weicher Einblendung des Hakens.
 * Das echte Eingabefeld bleibt erhalten, liegt aber unsichtbar darüber.
 * Dadurch funktionieren Tastatur, Vorlesehilfen und Formularübergabe normal.
 */
export default function Checkbox({
  id,
  name,
  checked,
  onChange,
  children,
  describedBy,
  required,
}: CheckboxProps) {
  return (
    <label className="checkbox" htmlFor={id}>
      <input
        id={id}
        name={name}
        type="checkbox"
        checked={checked}
        required={required}
        aria-describedby={describedBy}
        onChange={(event) => onChange(event.target.checked)}
      />
      <span className="checkbox__box" aria-hidden="true">
        <Icon name="Check" size={16} strokeWidth={3} />
      </span>
      <span>{children}</span>
    </label>
  );
}
