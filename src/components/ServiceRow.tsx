import Link from 'next/link';
import Icon from './Icon';
import type { Service } from '@/data/services';

/**
 * Eine Zeile im Leistungsverzeichnis.
 * Die ganze Zeile ist anklickbar, der Link bleibt für die Tastatur erreichbar.
 */
export default function ServiceRow({ service, index }: { service: Service; index: number }) {
  return (
    <article className="service-row">
      <span className="service-row__icon" aria-hidden="true">
        <Icon name={service.icon} size={23} strokeWidth={1.7} />
      </span>

      <div className="service-row__body">
        <span className="service-row__title">
          <span className="service-row__no" aria-hidden="true">
            {String(index + 1).padStart(2, '0')}
          </span>
          <h3>{service.navTitle}</h3>
        </span>
        <p>{service.teaser}</p>
      </div>

      <span className="service-row__arrow" aria-hidden="true">
        <Icon name="ArrowRight" size={19} />
      </span>

      <Link href={`/leistungen/${service.slug}`} className="card__overlay-link">
        <span className="sr-only">{service.title}: mehr erfahren</span>
      </Link>
    </article>
  );
}
