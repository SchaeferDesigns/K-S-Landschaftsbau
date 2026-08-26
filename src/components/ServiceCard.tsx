import Link from 'next/link';
import Icon from './Icon';
import type { Service } from '@/data/services';

export default function ServiceCard({ service, index }: { service: Service; index?: number }) {
  return (
    <article className="service-card">
      {typeof index === 'number' ? (
        <span className="service-card__no" aria-hidden="true">
          {String(index + 1).padStart(2, '0')}
        </span>
      ) : null}

      <span className="card__icon">
        <Icon name={service.icon} size={25} strokeWidth={1.7} />
      </span>

      <div>
        <h3 className="card__title">{service.navTitle}</h3>
        <p className="card__text mt-1">{service.teaser}</p>
      </div>

      <span className="service-card__foot" aria-hidden="true">
        Mehr erfahren
        <Icon name="ArrowRight" size={16} />
      </span>

      <Link href={`/leistungen/${service.slug}`} className="card__overlay-link">
        <span className="sr-only">{service.title}: mehr erfahren</span>
      </Link>
    </article>
  );
}
