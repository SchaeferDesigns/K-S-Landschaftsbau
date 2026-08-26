import Link from 'next/link';
import BrandMark from './BrandMark';
import Contour from './Contour';
import Icon from './Icon';
import { company, routeUrl } from '@/config/company';
import { footerLegal, mainNav } from '@/config/site';
import { services } from '@/data/services';

export default function Footer() {
  const year = new Date().getFullYear();
  const topServices = services.slice(0, 6);

  return (
    <footer className="footer">
      <Contour variant="a" />
      <div className="container">
        <div className="footer__grid">
          <div className="footer__brand">
            <Link href="/" className="footer__brandmark">
              <span className="footer__wordmark">
                <span className="footer__leaf" aria-hidden="true">
                  <BrandMark size={22} />
                </span>
                {company.name}
              </span>
              <span className="footer__rule" aria-hidden="true" />
              <span className="footer__descriptor">
                {company.descriptor} · {company.address.city}
              </span>
            </Link>
            <p>{company.claim}</p>
            <p style={{ fontSize: '0.92rem' }}>
              Betrieb für Garten- und Landschaftsbau aus {company.address.city} im Ostalbkreis.
            </p>
          </div>

          <div>
            <p className="footer__title">Leistungen</p>
            <ul className="footer__list">
              {topServices.map((service) => (
                <li key={service.slug}>
                  <Link href={`/leistungen/${service.slug}`}>{service.navTitle}</Link>
                </li>
              ))}
              <li>
                <Link href="/leistungen">Alle Leistungen</Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="footer__title">Unternehmen</p>
            <ul className="footer__list">
              <li>
                <Link href="/">Startseite</Link>
              </li>
              {mainNav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
              <li>
                <Link href="/kontakt">Kontakt</Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="footer__title">Kontakt</p>
            <ul className="footer__list">
              <li>
                <a href={routeUrl} target="_blank" rel="noreferrer">
                  {company.address.street}
                  <br />
                  {company.address.zip} {company.address.city}
                </a>
              </li>
              {company.phoneHref ? (
                <li>
                  <a href={`tel:${company.phoneHref}`}>
                    <Icon name="Phone" size={15} style={{ display: 'inline', verticalAlign: '-2px' }} />{' '}
                    {company.phone}
                  </a>
                </li>
              ) : null}
              {company.fax ? <li>Telefax {company.fax}</li> : null}
              {company.email ? (
                <li>
                  <a href={`mailto:${company.email}`}>{company.email}</a>
                </li>
              ) : null}
              {company.openingHours.length ? (
                <li style={{ marginTop: '0.4rem' }}>
                  {company.openingHours.map((hour) => (
                    <span key={hour.label} style={{ display: 'block' }}>
                      {hour.label}: {hour.time}
                    </span>
                  ))}
                </li>
              ) : null}
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <p>
            © {year} {company.legalName}
          </p>
          <nav aria-label="Rechtliche Hinweise">
            {footerLegal.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
            <Link href="/kontakt">Kontakt</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
