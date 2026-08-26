import Link from 'next/link';
import type { Metadata } from 'next';

import Contour from '@/components/Contour';
import CtaBand from '@/components/CtaBand';
import Icon from '@/components/Icon';
import JsonLd from '@/components/JsonLd';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import ServiceRow from '@/components/ServiceRow';
import { processSteps } from '@/data/process';
import { services } from '@/data/services';
import { breadcrumbJsonLd } from '@/lib/jsonld';

export const metadata: Metadata = {
  title: 'Leistungen im Garten- und Landschaftsbau',
  description:
    'Gartenplanung, Terrassenbau, Pflasterarbeiten, Zaunbau, Baum- und Heckenpflege, Bewässerung, Grünflächenpflege und Winterdienst im Ostalbkreis.',
  alternates: { canonical: '/leistungen' },
};

const crumbs = [
  { name: 'Startseite', href: '/' },
  { name: 'Leistungen', href: '/leistungen' },
];

/** Gliederung der Leistungen nach Anlass, das entspricht der Denkweise der Kundschaft. */
const gruppen = [
  {
    key: 'gestalten',
    title: 'Planen und gestalten',
    text: 'Wenn aus einer Fläche ein Garten werden soll.',
    slugs: ['gartenplanung', 'terrassenbau', 'teich-und-wasser', 'rasen-und-rollrasen'],
  },
  {
    key: 'bauen',
    title: 'Bauen und befestigen',
    text: 'Alles, was tragen, stehen und Wasser führen muss.',
    slugs: ['pflaster-und-wegebau', 'mauern-und-natursteinarbeiten', 'zaun-und-sichtschutz', 'erdarbeiten'],
  },
  {
    key: 'pflegen',
    title: 'Pflegen und erhalten',
    text: 'Damit die Anlage über Jahre in Form bleibt.',
    slugs: ['gartenpflege', 'baum-und-heckenpflege', 'bewaesserung', 'gruenflaechenpflege', 'winterdienst'],
  },
];

export default function LeistungenPage() {
  /* Die Nummern laufen von oben nach unten durch, ueber die Gruppen hinweg.
     Deshalb vorab den Startwert je Gruppe bestimmen. */
  let laufend = 0;
  const gruppenMitStart = gruppen.map((gruppe) => {
    const eintraege = gruppe.slugs
      .map((slug) => services.find((service) => service.slug === slug))
      .filter((service): service is (typeof services)[number] => Boolean(service));
    const start = laufend;
    laufend += eintraege.length;
    return { ...gruppe, eintraege, start };
  });

  return (
    <>
      <PageHero
        eyebrow="Leistungen"
        title="Von der ersten Idee bis zur letzten Pflanze"
        lead="Wir übernehmen alle Arbeiten rund um Garten und Außenanlage. Für Privatgärten, Gewerbeobjekte und kommunale Flächen im Ostalbkreis."
        crumbs={crumbs}
        pattern="a"
      >
        <ul className="chip-row mt-4 fade-up" style={{ ['--d' as never]: '340ms' }}>
          {gruppen.map((gruppe) => (
            <li key={gruppe.key}>
              <a className="chip" href={`#${gruppe.key}`}>
                {gruppe.title}
              </a>
            </li>
          ))}
        </ul>
      </PageHero>

      {gruppenMitStart.map((gruppe, gruppeIndex) => {
        return (
          <section
            key={gruppe.key}
            id={gruppe.key}
            className={`section${gruppeIndex % 2 === 1 ? ' section--stone' : ''}`}
            aria-labelledby={`${gruppe.key}-titel`}
            style={{ scrollMarginTop: 'calc(var(--nav-h) + 40px)' }}
          >
            {gruppeIndex % 2 === 1 ? <Contour variant="c" /> : null}
            <div className="container">
              <Reveal className="section-head">
                <p className="section-index">{String(gruppeIndex + 1).padStart(2, '0')} Bereich</p>
                <h2 id={`${gruppe.key}-titel`}>{gruppe.title}</h2>
                <p className="lead">{gruppe.text}</p>
              </Reveal>

              <div className="service-list">
                {gruppe.eintraege.map((service, index) => (
                  <Reveal key={service.slug} delay={index * 70}>
                    <ServiceRow service={service} index={gruppe.start + index} />
                  </Reveal>
                ))}
              </div>
            </div>
          </section>
        );
      })}

      <section className="section section--dark" aria-labelledby="ablauf-leistungen">
        <Contour variant="a" />
        <span className="blob blob--a" aria-hidden="true" />

        <div className="container">
          <Reveal className="section-head section-head--center">
            <p className="section-index">04 Zusammenarbeit</p>
            <h2 id="ablauf-leistungen">So läuft ein Auftrag bei uns ab</h2>
            <p className="lead">
              Egal ob einzelne Maßnahme oder kompletter Garten: Der Weg von der Anfrage bis zur Abnahme ist immer der
              gleiche und für Sie jederzeit nachvollziehbar.
            </p>
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

          <Reveal className="mt-6">
            <div className="text-center">
              <Link href="/kontakt" className="btn btn--light btn--lg">
                Vorhaben beschreiben
                <Icon name="ArrowRight" size={19} className="btn-arrow" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand />

      <JsonLd data={breadcrumbJsonLd(crumbs)} />
    </>
  );
}
