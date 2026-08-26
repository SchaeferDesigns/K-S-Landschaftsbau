'use client';

import Icon from './Icon';

export type Choice = { value: string; label: string; icon?: string };

type ChoiceCardsProps = {
  name: string;
  legend: string;
  options: Choice[];
  value: string;
  onChange: (value: string) => void;
  columns?: 'auto' | 'two';
};

/**
 * Auswahlkarten statt runder Schaltflächen.
 * Größere Trefferfläche, klarere Optik und auf dem Handy deutlich
 * angenehmer zu bedienen. Technisch bleiben es normale Optionsfelder.
 */
export default function ChoiceCards({ name, legend, options, value, onChange, columns = 'auto' }: ChoiceCardsProps) {
  return (
    <fieldset style={{ border: 0, padding: 0, margin: 0, display: 'grid', gap: '0.6rem' }}>
      <legend className="field__label" style={{ padding: 0, marginBottom: '0.2rem' }}>
        {legend}
      </legend>
      <div
        className="choice-grid"
        style={columns === 'two' ? { gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 150px), 1fr))' } : undefined}
      >
        {options.map((option) => (
          <label className="choice" key={option.value}>
            <input
              type="radio"
              name={name}
              value={option.value}
              checked={value === option.value}
              onChange={() => onChange(option.value)}
            />
            {option.icon ? (
              <span className="choice__icon" aria-hidden="true">
                <Icon name={option.icon} size={20} strokeWidth={1.8} />
              </span>
            ) : null}
            <span>{option.label}</span>
          </label>
        ))}
      </div>
    </fieldset>
  );
}
