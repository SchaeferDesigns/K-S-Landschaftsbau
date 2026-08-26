import Link from 'next/link';
import Icon from '@/components/Icon';
import PageHero from '@/components/PageHero';
import { services } from '@/data/services';

export const metadata = {
  title: 'Seite nicht gefunden',
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <>
      <PageHero
        eyebrow="Fehler 404"
        title="Diese Seite gibt es nicht mehr"
        lead="Vielleicht hat sich die Adresse geändert. Über die folgenden Wege finden Sie schnell weiter."
      />

      <section className="section">
        <div className="container container--narrow">
          <div className="flex-actions">
            <Link href="/" className="btn btn--primary">
              Zur Startseite
              <Icon name="ArrowRight" size={18} className="btn-arrow" />
            </Link>
            <Link href="/leistungen" className="btn btn--secondary">
              Leistungen ansehen
            </Link>
            <Link href="/kontakt" className="btn btn--secondary">
              Kontakt aufnehmen
            </Link>
          </div>

          <h2 className="mt-6" style={{ fontSize: '1.4rem' }}>
            Häufig gesucht
          </h2>
          <ul className="chip-row mt-2">
            {services.slice(0, 8).map((service) => (
              <li key={service.slug}>
                <Link href={`/leistungen/${service.slug}`} className="chip">
                  {service.navTitle}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
