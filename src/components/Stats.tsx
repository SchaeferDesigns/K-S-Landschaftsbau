import Counter from './Counter';
import Icon from './Icon';
import Reveal from './Reveal';
import { company, yearsInBusiness } from '@/config/company';
import { areas } from '@/data/areas';
import { services } from '@/data/services';

type StatItem = {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  icon: string;
  /** Feste Anzeige statt Zähler */
  text?: string;
};

/**
 * Kennzahlen, die sich vollständig aus den hinterlegten Stammdaten ergeben.
 * Es wird nichts behauptet, was nicht in der Konfiguration steht.
 */
export default function Stats() {
  const items: StatItem[] = [
    // Erscheint nur, wenn in company.ts ein Gruendungsjahr hinterlegt ist
    ...(yearsInBusiness > 0
      ? [{ value: yearsInBusiness, label: 'Jahre im Garten- und Landschaftsbau', icon: 'Trees' }]
      : []),
    { value: services.length, label: 'Leistungsbereiche rund um die Außenanlage', icon: 'Leaf' },
    { value: areas.length, suffix: '+', label: 'Orte im Einsatzgebiet rund um Mutlangen', icon: 'MapPin' },
    { value: 0, text: 'Aus einer Hand', label: 'Planung, Bau und Pflege ohne Schnittstellen', icon: 'Handshake' },
  ];

  return (
    <div className="stats" data-count={items.length}>
      {items.map((item, index) => (
        <Reveal key={item.label} delay={index * 80}>
          <div className="stat">
            <span className="stat__mark" aria-hidden="true">
              <Icon name={item.icon} size={82} strokeWidth={1} />
            </span>
            <span className="stat__value">
              {item.text ? item.text : <Counter to={item.value} suffix={item.suffix} prefix={item.prefix} />}
            </span>
            <span className="stat__label">{item.label}</span>
          </div>
        </Reveal>
      ))}
    </div>
  );
}

export const foundedYear = company.foundedYear;
