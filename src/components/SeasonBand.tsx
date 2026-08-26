'use client';

import { useId, useState } from 'react';
import Icon from './Icon';
import { seasons } from '@/data/seasons';

/**
 * Das Gartenjahr im Überblick.
 *
 * Für einen Garten- und Landschaftsbaubetrieb ist die Jahreszeit das
 * wichtigste Ordnungsprinzip. Der Abschnitt beantwortet die Frage,
 * die Kundinnen und Kunden im Kopf haben: Ist jetzt der richtige Zeitpunkt?
 */
function currentSeasonIndex() {
  const month = new Date().getMonth();
  if (month >= 2 && month <= 4) return 0;
  if (month >= 5 && month <= 7) return 1;
  if (month >= 8 && month <= 10) return 2;
  return 3;
}

export default function SeasonBand() {
  const [active, setActive] = useState(currentSeasonIndex);
  const baseId = useId();
  const season = seasons[active];

  return (
    <div className="season">
      <div className="season__tabs" role="tablist" aria-label="Jahreszeit wählen">
        {seasons.map((item, index) => (
          <button
            key={item.key}
            type="button"
            role="tab"
            id={`${baseId}-tab-${index}`}
            aria-selected={index === active}
            aria-controls={`${baseId}-panel-${index}`}
            tabIndex={index === active ? 0 : -1}
            className="season__tab"
            onClick={() => setActive(index)}
            onKeyDown={(event) => {
              if (event.key === 'ArrowRight') {
                event.preventDefault();
                const next = (index + 1) % seasons.length;
                setActive(next);
                document.getElementById(`${baseId}-tab-${next}`)?.focus();
              }
              if (event.key === 'ArrowLeft') {
                event.preventDefault();
                const prev = (index - 1 + seasons.length) % seasons.length;
                setActive(prev);
                document.getElementById(`${baseId}-tab-${prev}`)?.focus();
              }
            }}
          >
            <Icon name={item.icon} size={17} strokeWidth={1.9} />
            {item.label}
          </button>
        ))}
      </div>

      <div
        className="season__panel"
        key={season.key}
        role="tabpanel"
        id={`${baseId}-panel-${active}`}
        aria-labelledby={`${baseId}-tab-${active}`}
        tabIndex={0}
      >
        <div>
          <p className="eyebrow eyebrow--clay">{season.months}</p>
          <h3 className="mt-1" style={{ fontSize: 'clamp(1.35rem, 1.1rem + 1.1vw, 1.9rem)' }}>
            {season.intro}
          </h3>
        </div>

        <div className="season__grid">
          {season.tasks.map((task) => (
            <div className="season__item" key={task}>
              <Icon name="Check" size={17} strokeWidth={2.4} />
              <span>{task}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
