import Link from 'next/link';
import Icon from './Icon';
import { company } from '@/config/company';

/**
 * Feste Aktionsleiste auf Mobilgeraeten.
 * Anrufen und Anfrage sind die beiden Wege, die Kundinnen und Kunden
 * im Handwerk am haeufigsten nutzen.
 */
export default function MobileActionBar() {
  const hasPhone = Boolean(company.phoneHref);

  return (
    <div className={`action-bar${hasPhone ? '' : ' action-bar--single'}`}>
      {hasPhone ? (
        <a href={`tel:${company.phoneHref}`} className="btn btn--secondary">
          <Icon name="Phone" size={18} />
          Anrufen
        </a>
      ) : null}
      <Link href="/kontakt" className="btn btn--primary">
        <Icon name="MessageSquare" size={18} />
        Anfrage senden
      </Link>
    </div>
  );
}
