'use client';

import Image from 'next/image';
import { useId, useState, type CSSProperties } from 'react';
import Icon from './Icon';

type BeforeAfterProps = {
  beforeSrc: string;
  beforeAlt: string;
  afterSrc: string;
  afterAlt: string;
  label?: string;
};

/**
 * Vergleichsregler fuer Vorher-Nachher-Bilder.
 * Bedienbar per Maus, Touch und Tastatur (Pfeiltasten, Pos1, Ende).
 */
export default function BeforeAfter({
  beforeSrc,
  beforeAlt,
  afterSrc,
  afterAlt,
  label = 'Vergleich vorher und nachher',
}: BeforeAfterProps) {
  const [position, setPosition] = useState(50);
  const id = useId();

  return (
    <figure style={{ margin: 0 }}>
      <div className="compare" style={{ '--pos': `${position}%` } as CSSProperties}>
        <div className="compare__frame">
          <Image
            className="compare__img"
            src={beforeSrc}
            alt={beforeAlt}
            fill
            sizes="(max-width: 900px) 100vw, 640px"
          />
          <Image
            className="compare__img compare__after"
            src={afterSrc}
            alt={afterAlt}
            fill
            sizes="(max-width: 900px) 100vw, 640px"
          />

          <span className="compare__tag compare__tag--before">Vorher</span>
          <span className="compare__tag compare__tag--after">Nachher</span>

          <label className="sr-only" htmlFor={id}>
            {label}
          </label>
          <input
            id={id}
            className="compare__range"
            type="range"
            min={0}
            max={100}
            step={1}
            value={position}
            onChange={(event) => setPosition(Number(event.target.value))}
            aria-valuetext={`${position} Prozent Nachher sichtbar`}
          />
          <span className="compare__handle" aria-hidden="true">
            <span className="compare__grip">
              <Icon name="MoveHorizontal" size={20} />
            </span>
          </span>
        </div>
      </div>
    </figure>
  );
}
