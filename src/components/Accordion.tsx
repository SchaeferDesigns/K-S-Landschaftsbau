'use client';

import { useId, useState } from 'react';

export type AccordionItem = { q: string; a: string };

/**
 * Aufklappbare Fragen. Das Plus dreht sich beim Öffnen zu einem Minus,
 * die Höhe läuft über grid-template-rows weich auf.
 */
export default function Accordion({ items, initialOpen = 0 }: { items: AccordionItem[]; initialOpen?: number | null }) {
  const [openIndex, setOpenIndex] = useState<number | null>(initialOpen);
  const baseId = useId();

  return (
    <div className="accordion">
      {items.map((item, index) => {
        const open = openIndex === index;
        const triggerId = `${baseId}-trigger-${index}`;
        const panelId = `${baseId}-panel-${index}`;

        return (
          <div className="accordion__item" data-open={open ? 'true' : 'false'} key={item.q}>
            <h3 style={{ margin: 0 }}>
              <button
                type="button"
                id={triggerId}
                className="accordion__trigger"
                aria-expanded={open}
                aria-controls={panelId}
                onClick={() => setOpenIndex(open ? null : index)}
              >
                {item.q}
                <span className="accordion__sign" aria-hidden="true" />
              </button>
            </h3>
            {/* inert statt hidden, damit die Höhenanimation erhalten bleibt
                und geschlossene Inhalte trotzdem nicht vorgelesen werden */}
            <div className="accordion__panel" id={panelId} role="region" aria-labelledby={triggerId} inert={!open}>
              <div>
                <p>{item.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
