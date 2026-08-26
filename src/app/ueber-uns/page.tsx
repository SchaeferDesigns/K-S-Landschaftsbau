import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';

import Contour from '@/components/Contour';
import CtaBand from '@/components/CtaBand';
import Icon from '@/components/Icon';
import JsonLd from '@/components/JsonLd';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import Stats from '@/components/Stats';
import { company } from '@/config/company';
import { areaHeadline, areas } from '@/data/areas';
import { asset } from '@/config/site';
import { breadcrumbJsonLd } from '@/lib/jsonld';

export const metadata: Metadata = {
  title: 'Über den Betrieb',
  description: `${company.legalName} ist ein Betrieb für Garten- und Landschaftsbau aus ${company.address.city}. Eigenes Team, eigene Technik, Planung, Bau und Pflege aus einer Hand.`,
  alternates: { canonical: '/ueber-uns' },
};

const crumbs = [
  { name: 'Startseite', href: '/' },
  { name: 'Über uns', href: '/ueber-uns' },
];

const werte = [
  {
    icon: 'Handshake',
    title: 'Verbindlich',
    text: 'Was besprochen ist, gilt. Termine, Preise und Leistungen halten wir schriftlich fest, damit sich beide Seiten darauf verlassen können.',
  },
  {
    icon: 'Wrench',
    title: 'Handwerklich sauber',
    text: 'Der Unterbau entscheidet über die Lebensdauer. Wir arbeiten nach den fachlichen Regeln, auch wenn man das Ergebnis später nicht sieht.',
  },
  {
    icon: 'Recycle',
    title: 'Standortgerecht',
    text: 'Pflanzen und Materialien wählen wir nach Boden, Licht und Nutzung. Das spart Pflege, Wasser und spätere Nachbesserungen.',
  },
  {
    icon: 'Users',
    title: 'Langfristig',
    text: 'Viele Anlagen betreuen wir über Jahre. Wer den Garten gebaut hat, weiß am besten, wie er zu pflegen ist.',
  },
];

export default function UeberUnsPage() {
  return (
    <>
      <PageHero
        eyebrow="Über uns"
        title={`Garten- und Landschaftsbau aus ${company.address.city}`}
        lead={`Die ${company.legalName} steht für Außenanlagen im Raum Schwäbisch Gmünd. Planung, Bau und Pflege übernehmen wir mit eigenem Team und eigener Technik.`}
        crumbs={crumbs}
        pattern="a"
      />

      <section className="section section--top-tight" aria-label="Der Betrieb in Zahlen">
        <div className="container">
          <Stats />
        </div>
      </section>

      <section className="section" aria-labelledby="betrieb-titel">
        <div className="container">
          <div className="split split--top">
            <Reveal>
              <p className="section-index">01 Der Betrieb</p>
              <h2 id="betrieb-titel" className="mt-2">
                Aus der Region gewachsen
              </h2>
              <p className="lead mt-3">
                Wir arbeiten dort, wo wir zu Hause sind. Das prägt, wie wir mit Kundinnen und Kunden umgehen: Wer im
                Ort seinen Namen an die Arbeit hängt, liefert anders ab.
              </p>
              <p className="muted mt-3">
                Aufgaben und Technik verändern sich, der Anspruch nicht. Vom einzelnen Pflegeeinsatz bis zur
                kompletten Außenanlage betreuen wir Projekte in unterschiedlicher Größe, für Privatleute ebenso wie
                für Verwaltungen, Betriebe und Kommunen.
              </p>

              <ul className="check-list mt-4">
                <li>
                  <span>
                    <Icon name="Check" size={15} strokeWidth={2.6} />
                  </span>
                  Sitz in {company.address.zip} {company.address.city}
                </li>
                <li>
                  <span>
                    <Icon name="Check" size={15} strokeWidth={2.6} />
                  </span>
                  Einsatzgebiet: {areaHeadline}
                </li>
                <li>
                  <span>
                    <Icon name="Check" size={15} strokeWidth={2.6} />
                  </span>
                  Planung, Ausführung und Pflege aus einer Hand
                </li>
              </ul>

              {company.partners.length ? (
                <div className="mt-5">
                  <h3>Ansprechpartner</h3>
                  <ul className="check-list mt-3">
                    {company.partners.map((partner) => (
                      <li key={partner.name}>
                        <span>
                          <Icon name="Check" size={15} strokeWidth={2.6} />
                        </span>
                        <span>
                          <strong>{partner.name}</strong>, {partner.role}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </Reveal>

            <Reveal className="reveal--right" delay={90}>
              <div>
                <div className="media-frame">
                  <Image
                    src={asset('/media/team-platzhalter.svg')}
                    alt="Team im Garten- und Landschaftsbau bei der Arbeit an einer Außenanlage"
                    width={1200}
                    height={900}
                  />
                </div>
                <p className="media-note">
                  Platzhaltergrafik. Ein Foto des echten Teams wirkt an dieser Stelle deutlich stärker.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section section--stone" aria-labelledby="werte-titel">
        <Contour variant="c" />
        <div className="container">
          <Reveal className="section-head section-head--center">
            <p className="section-index">02 Haltung</p>
            <h2 id="werte-titel">Woran Sie uns messen können</h2>
          </Reveal>

          <div className="grid grid--4">
            {werte.map((wert, index) => (
              <Reveal key={wert.title} delay={index * 80}>
                <article className="card">
                  <span className="card__icon">
                    <Icon name={wert.icon} size={24} strokeWidth={1.7} />
                  </span>
                  <h3 className="card__title">{wert.title}</h3>
                  <p className="card__text">{wert.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--dark" aria-labelledby="region-titel">
        <Contour variant="b" />
        <span className="blob blob--a" aria-hidden="true" />

        <div className="container">
          <Reveal className="section-head">
            <p className="section-index">03 Region</p>
            <h2 id="region-titel">Wo wir arbeiten</h2>
            <p className="lead">
              Von {company.address.city} aus erreichen wir unsere Baustellen in kurzer Zeit. Das macht Termine
              planbarer und Rückfragen unkompliziert.
            </p>
          </Reveal>

          <Reveal>
            <ul className="chip-row">
              {areas.map((area) => (
                <li key={area} className="chip">
                  {area}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal className="mt-6">
            <div className="flex-actions">
              <Link href="/karriere" className="btn btn--light">
                Arbeiten bei uns
                <Icon name="ArrowRight" size={18} className="btn-arrow" />
              </Link>
              <Link href="/leistungen" className="btn btn--secondary">
                Leistungen ansehen
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
