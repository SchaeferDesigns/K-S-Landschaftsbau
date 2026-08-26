import Image from 'next/image';
import type { Metadata } from 'next';

import Contour from '@/components/Contour';
import Icon from '@/components/Icon';
import JsonLd from '@/components/JsonLd';
import PageHero from '@/components/PageHero';
import QuoteWizard from '@/components/QuoteWizard';
import Reveal from '@/components/Reveal';
import { company, mapsUrl, routeUrl } from '@/config/company';
import { areaHeadline } from '@/data/areas';
import { processSteps } from '@/data/process';
import { asset } from '@/config/site';
import { breadcrumbJsonLd } from '@/lib/jsonld';

export const metadata: Metadata = {
  title: 'Kontakt und Anfahrt',
  description: `Kontakt zu ${company.name}, Garten- und Landschaftsbau in ${company.address.city}. Anfrage in drei Schritten stellen oder direkt anrufen.`,
  alternates: { canonical: '/kontakt' },
};

const crumbs = [
  { name: 'Startseite', href: '/' },
  { name: 'Kontakt', href: '/kontakt' },
];

export default function KontaktPage() {
  return (
    <>
      <PageHero
        eyebrow="Kontakt"
        title="Erzählen Sie uns von Ihrem Vorhaben"
        lead="Drei kurze Schritte, danach melden wir uns zurück und vereinbaren einen Termin vor Ort. Kostenfrei und unverbindlich."
        crumbs={crumbs}
        pattern="b"
      />

      <section className="section" aria-labelledby="anfrage-titel">
        <div className="container">
          <div className="split split--wide-left split--top">
            <Reveal>
              <p className="section-index">01 Anfrage</p>
              <h2 id="anfrage-titel" className="mt-2">
                Anfrage stellen
              </h2>
              <p className="lead mt-3">
                Je mehr wir vorab wissen, desto genauer können wir einschätzen, was möglich ist. Alles außer den
                Kontaktdaten ist freiwillig.
              </p>
              <div className="mt-4">
                <QuoteWizard />
              </div>
            </Reveal>

            <Reveal className="reveal--right" delay={90}>
              <div style={{ display: 'grid', gap: 'clamp(1rem, 2vw, 1.5rem)' }}>
                <div className="card">
                  <h2 style={{ fontSize: 'clamp(1.35rem, 1.15rem + 0.8vw, 1.7rem)' }}>Direkt erreichen</h2>

                  <dl className="info-list mt-2">
                    <div className="info-item">
                      <span className="info-item__icon">
                        <Icon name="MapPin" size={20} />
                      </span>
                      <div>
                        <dt>Adresse</dt>
                        <dd>
                          {company.legalName}
                          <br />
                          {company.address.street}
                          <br />
                          {company.address.zip} {company.address.city}
                        </dd>
                      </div>
                    </div>

                    {company.phoneHref ? (
                      <div className="info-item">
                        <span className="info-item__icon">
                          <Icon name="Phone" size={20} />
                        </span>
                        <div>
                          <dt>Telefon</dt>
                          <dd>
                            <a href={`tel:${company.phoneHref}`}>{company.phone}</a>
                          </dd>
                        </div>
                      </div>
                    ) : null}

                    {company.fax ? (
                      <div className="info-item">
                        <span className="info-item__icon">
                          <Icon name="Printer" size={20} />
                        </span>
                        <div>
                          <dt>Telefax</dt>
                          <dd>{company.fax}</dd>
                        </div>
                      </div>
                    ) : null}

                    {company.email ? (
                      <div className="info-item">
                        <span className="info-item__icon">
                          <Icon name="Mail" size={20} />
                        </span>
                        <div>
                          <dt>E-Mail</dt>
                          <dd>
                            <a href={`mailto:${company.email}`}>{company.email}</a>
                          </dd>
                        </div>
                      </div>
                    ) : null}

                    {company.openingHours.length ? (
                      <div className="info-item">
                        <span className="info-item__icon">
                          <Icon name="Clock" size={20} />
                        </span>
                        <div>
                          <dt>Erreichbarkeit</dt>
                          <dd>
                            {company.openingHours.map((hour) => (
                              <span key={hour.label} style={{ display: 'block', fontWeight: 500 }}>
                                {hour.label}: {hour.time}
                              </span>
                            ))}
                          </dd>
                        </div>
                      </div>
                    ) : null}

                    <div className="info-item">
                      <span className="info-item__icon">
                        <Icon name="Route" size={20} />
                      </span>
                      <div>
                        <dt>Einsatzgebiet</dt>
                        <dd style={{ fontWeight: 500 }}>{areaHeadline}</dd>
                      </div>
                    </div>
                  </dl>
                </div>

                <div className="map-card">
                  <div className="map-card__bg">
                    <Image
                      src={asset('/media/karte-mutlangen.svg')}
                      alt="Stilisierte Karte mit dem Standort in Mutlangen"
                      width={800}
                      height={500}
                    />
                  </div>
                  <div className="map-card__content">
                    <p className="map-card__address">
                      {company.address.street}
                      <br />
                      {company.address.zip} {company.address.city}
                    </p>
                    <a href={routeUrl} target="_blank" rel="noreferrer" className="btn btn--glass btn--sm">
                      <Icon name="Navigation" size={16} />
                      Route planen
                      <Icon name="ExternalLink" size={14} />
                    </a>
                  </div>
                </div>

                <div className="notice">
                  <Icon name="ShieldCheck" size={18} />
                  <span>
                    Wir binden keine Karten von Drittanbietern ein. Die Route öffnet sich erst nach Ihrem Klick in
                    einem neuen Fenster beim jeweiligen Anbieter. Alternativ finden Sie den Standort bei{' '}
                    <a href={mapsUrl} target="_blank" rel="noreferrer">
                      OpenStreetMap
                    </a>
                    .
                  </span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section section--dark section--tight" aria-labelledby="danach-titel">
        <Contour variant="a" />
        <div className="container">
          <Reveal className="section-head section-head--center">
            <p className="section-index">02 Danach</p>
            <h2 id="danach-titel">Was nach Ihrer Anfrage passiert</h2>
          </Reveal>

          <div className="steps">
            {processSteps.map((step, index) => (
              <Reveal key={step.number} delay={index * 90}>
                <article className="step">
                  <span className="step__badge">
                    <span className="step__dot">
                      <Icon name={step.icon} size={16} strokeWidth={1.9} />
                    </span>
                    Schritt {step.number}
                  </span>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <JsonLd data={breadcrumbJsonLd(crumbs)} />
    </>
  );
}
