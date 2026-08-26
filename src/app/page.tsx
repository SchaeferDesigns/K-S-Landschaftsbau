import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';

import Accordion from '@/components/Accordion';
import BeforeAfter from '@/components/BeforeAfter';
import Contour from '@/components/Contour';
import CtaBand from '@/components/CtaBand';
import HeroMedia from '@/components/HeroMedia';
import HeroScrollHint from '@/components/HeroScrollHint';
import Icon from '@/components/Icon';
import JsonLd from '@/components/JsonLd';
import Reveal from '@/components/Reveal';
import SeasonBand from '@/components/SeasonBand';
import ServiceCard from '@/components/ServiceCard';
import Stats from '@/components/Stats';

import { company } from '@/config/company';
import { areaHeadline, areas } from '@/data/areas';
import { generalFaq } from '@/data/faq';
import { processSteps, reasons } from '@/data/process';
import { featuredServices, services } from '@/data/services';
import { asset } from '@/config/site';
import { faqJsonLd } from '@/lib/jsonld';

export const metadata: Metadata = {
  title: `${company.descriptor} in ${company.address.city} | ${company.name}`,
  description: `Garten- und Landschaftsbau aus ${company.address.city}: Planung, Bau und Pflege von Gärten und Außenanlagen im Ostalbkreis. Kostenlose Beratung vor Ort, Angebot mit klaren Positionen.`,
  alternates: { canonical: '/' },
  openGraph: {
    title: `${company.name} | ${company.descriptor} in ${company.address.city}`,
    description: 'Planung, Bau und Pflege von Gärten und Außenanlagen im Ostalbkreis. Kostenlose Beratung vor Ort.',
    url: '/',
    // muss mit angegeben werden, sonst entfaellt das Vorschaubild
    images: ['/media/og-standard.png'],
  },
};

export default function HomePage() {
  return (
    <>
      {/* Startbereich mit gestaffelten Ebenen */}
      <section className="hero">
        <HeroMedia />
        <div className="hero__veil" />

        <div className="hero__inner">
          <div className="hero__card">
            <span className="hero__badge fade-up">
              <Icon name="MapPin" size={14} />
              {company.address.city}, Ostalbkreis
            </span>

            <h1>
              <span className="line-mask">
                <span style={{ ['--d' as never]: '120ms' }}>Wir bauen Gärten,</span>
              </span>
              <span className="line-mask">
                <span style={{ ['--d' as never]: '240ms' }}>die man nicht mehr</span>
              </span>
              <span className="line-mask">
                <span style={{ ['--d' as never]: '360ms' }}>verlassen möchte.</span>
              </span>
            </h1>

            <p className="hero__sub fade-up" style={{ ['--d' as never]: '540ms' }}>
              Planung, Bau und Pflege aus einer Hand. Für Privatgärten, Gewerbe und Kommunen im Ostalbkreis.
            </p>

            <div className="hero__actions fade-up" style={{ ['--d' as never]: '660ms' }}>
              <Link href="/kontakt" className="btn btn--primary btn--lg">
                Angebot anfordern
                <Icon name="ArrowRight" size={19} className="btn-arrow" />
              </Link>
              <Link href="/leistungen" className="btn btn--glass btn--lg">
                Leistungen ansehen
              </Link>
            </div>

            <div className="hero__points fade-up" style={{ ['--d' as never]: '780ms' }}>
              <span className="hero__point">
                <Icon name="Check" size={17} strokeWidth={2.4} />
                Vor-Ort-Termin kostenfrei
              </span>
              <span className="hero__point">
                <Icon name="Check" size={17} strokeWidth={2.4} />
                Eigenes Team, eigene Technik
              </span>
              <span className="hero__point">
                <Icon name="Check" size={17} strokeWidth={2.4} />
                Angebot mit klaren Positionen
              </span>
            </div>
          </div>
        </div>

        <HeroScrollHint />
      </section>

      {/* Kennzahlen */}
      <section className="section section--top-tight" aria-label="Der Betrieb in Zahlen">
        <div className="container">
          <Stats />
        </div>
      </section>

      {/* Leistungen */}
      <section className="section section--stone-top" aria-labelledby="leistungen-titel">
        <Contour variant="a" />
        <div className="container">
          <Reveal className="section-head section-head--row">
            <div>
              <p className="section-index">01 Leistungen</p>
              <h2 id="leistungen-titel">Alles rund um Garten und Außenanlage</h2>
              <p className="lead">
                Ob neuer Garten, einzelne Baumaßnahme oder laufende Pflege: Wir übernehmen die Arbeiten mit eigenem
                Team und stimmen jeden Schritt vorher mit Ihnen ab.
              </p>
            </div>
            <Link href="/leistungen" className="btn btn--secondary">
              Alle {services.length} Leistungen
              <Icon name="ArrowRight" size={17} className="btn-arrow" />
            </Link>
          </Reveal>

          <div className="grid grid--3">
            {featuredServices.map((service, index) => (
              <Reveal key={service.slug} delay={(index % 3) * 90}>
                <ServiceCard service={service} index={index} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Warum wir */}
      <section className="section" aria-labelledby="gruende-titel">
        <div className="container">
          <div className="split split--wide-left split--top">
            <div>
              <Reveal>
                <p className="section-index">02 Warum wir</p>
                <h2 id="gruende-titel" className="mt-2">
                  Ein Betrieb, der bleibt, wenn die Baustelle fertig ist
                </h2>
                <p className="lead mt-3">
                  Wir arbeiten dort, wo wir zu Hause sind. Viele Anlagen begleiten wir über Jahre, vom ersten
                  Entwurf bis zur laufenden Pflege. Das prägt, wie wir bauen: so, dass wir später gerne
                  wiederkommen.
                </p>
                <div className="flex-actions mt-4">
                  <Link href="/ueber-uns" className="btn btn--secondary">
                    Über den Betrieb
                    <Icon name="ArrowRight" size={17} className="btn-arrow" />
                  </Link>
                </div>
              </Reveal>

              <div className="grid grid--2 mt-6">
                {reasons.map((reason, index) => (
                  <Reveal key={reason.title} delay={index * 80}>
                    <article className="card">
                      <span className="card__icon">
                        <Icon name={reason.icon} size={24} strokeWidth={1.7} />
                      </span>
                      <h3 className="card__title">{reason.title}</h3>
                      <p className="card__text">{reason.text}</p>
                    </article>
                  </Reveal>
                ))}
              </div>
            </div>

            <Reveal className="reveal--right">
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

                <div className="card mt-3">
                  <span className="card__icon">
                    <Icon name="Quote" size={22} strokeWidth={1.7} />
                  </span>
                  <p className="card__text" style={{ fontSize: '1.04rem' }}>
                    Hier steht später eine echte Kundenstimme mit Name und Ort. Bewertungen aus dem
                    Google-Unternehmensprofil lassen sich ebenfalls einbinden.
                  </p>
                  <p className="muted" style={{ fontSize: '0.86rem' }}>
                    Platzhalter, bitte durch eine freigegebene Rückmeldung ersetzen.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Vorher und nachher */}
      <section className="section section--stone" aria-labelledby="vergleich-titel">
        <Contour variant="c" />
        <div className="container">
          <div className="split split--reverse">
            <Reveal className="reveal--scale">
              <div>
                <BeforeAfter
                  beforeSrc={asset('/media/vorher-beispiel.svg')}
                  beforeAlt="Ungestalteter Garten mit lückigem Rasen und altem Zaunrest"
                  afterSrc={asset('/media/nachher-beispiel.svg')}
                  afterAlt="Der gleiche Garten nach der Umgestaltung mit Terrasse, Weg, Sitzmauer und Bepflanzung"
                />
                <p className="media-note">
                  Beispielgrafik zur Veranschaulichung. Sie wird durch echte Projektfotos ersetzt.
                </p>
              </div>
            </Reveal>

            <Reveal delay={90}>
              <p className="section-index">03 Vorher und nachher</p>
              <h2 id="vergleich-titel" className="mt-2">
                Aus einer Restfläche wird ein Ort, an dem Sie Zeit verbringen
              </h2>
              <p className="lead mt-3">
                Die meisten Grundstücke haben mehr Potenzial, als man auf den ersten Blick sieht. Wir zeigen Ihnen
                vorab, wie die Fläche später aussieht, und setzen die Planung mit dem eigenen Team um.
              </p>
              <ul className="check-list mt-4">
                <li>
                  <span>
                    <Icon name="Check" size={15} strokeWidth={2.6} />
                  </span>
                  Aufmaß und Bestandsaufnahme direkt vor Ort
                </li>
                <li>
                  <span>
                    <Icon name="Check" size={15} strokeWidth={2.6} />
                  </span>
                  Entwurf mit Materialien, Pflanzen und Kostenrahmen
                </li>
                <li>
                  <span>
                    <Icon name="Check" size={15} strokeWidth={2.6} />
                  </span>
                  Umsetzung in einem Zug oder in Bauabschnitten
                </li>
              </ul>
              <div className="flex-actions mt-4">
                <Link href="/referenzen" className="btn btn--secondary">
                  Referenzen ansehen
                  <Icon name="ArrowRight" size={17} className="btn-arrow" />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Gartenjahr */}
      <section className="section" aria-labelledby="gartenjahr-titel">
        <div className="container">
          <Reveal className="section-head">
            <p className="section-index">04 Gartenjahr</p>
            <h2 id="gartenjahr-titel">Was gerade ansteht</h2>
            <p className="lead">
              Im Garten- und Landschaftsbau entscheidet der Zeitpunkt über das Ergebnis. Hier sehen Sie, welche
              Arbeiten in welcher Jahreszeit sinnvoll sind.
            </p>
          </Reveal>

          <Reveal>
            <SeasonBand />
          </Reveal>
        </div>
      </section>

      {/* Ablauf */}
      <section className="section section--dark" aria-labelledby="ablauf-titel">
        <Contour variant="a" />
        <span className="blob blob--a" aria-hidden="true" />
        <span className="blob blob--b" aria-hidden="true" />

        <div className="container">
          <Reveal className="section-head section-head--center">
            <p className="section-index">05 Ablauf</p>
            <h2 id="ablauf-titel">In vier Schritten zum fertigen Garten</h2>
            <p className="lead">
              Sie wissen von Anfang an, was wann passiert und was es kostet. Keine Überraschungen auf der Rechnung.
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
                Vor-Ort-Termin vereinbaren
                <Icon name="ArrowRight" size={19} className="btn-arrow" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Einsatzgebiet */}
      <section className="section" aria-labelledby="gebiet-titel">
        <div className="container">
          <div className="split">
            <Reveal>
              <p className="section-index">06 Einsatzgebiet</p>
              <h2 id="gebiet-titel" className="mt-2">
                Zu Hause im {areaHeadline}
              </h2>
              <p className="lead mt-3">
                Unser Betrieb sitzt in {company.address.city}. Kurze Wege bedeuten schnelle Rückmeldung, verlässliche
                Termine und einen Ansprechpartner, der auch nach der Fertigstellung erreichbar bleibt.
              </p>
              <ul className="chip-row mt-4">
                {areas.map((area) => (
                  <li key={area} className="chip">
                    {area}
                  </li>
                ))}
              </ul>
              <p className="muted mt-3" style={{ fontSize: '0.92rem' }}>
                Ihr Ort ist nicht dabei? Fragen Sie einfach an, wir prüfen das gerne.
              </p>
            </Reveal>

            <Reveal className="reveal--right" delay={90}>
              <div className="map-card">
                <div className="map-card__bg">
                  <Image
                    src={asset('/media/karte-mutlangen.svg')}
                    alt="Stilisierte Karte mit dem Standort des Betriebs in Mutlangen"
                    width={800}
                    height={500}
                  />
                </div>
                <div className="map-card__content">
                  <p className="map-card__address">
                    <strong>{company.name}</strong>
                    <br />
                    {company.address.street}
                    <br />
                    {company.address.zip} {company.address.city}
                  </p>
                  <Link href="/kontakt" className="btn btn--glass btn--sm">
                    <Icon name="Navigation" size={16} />
                    Kontakt und Anfahrt
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Fragen */}
      <section className="section section--stone" aria-labelledby="faq-titel">
        <Contour variant="b" />
        <div className="container container--narrow">
          <Reveal className="section-head section-head--center">
            <p className="section-index">07 Fragen</p>
            <h2 id="faq-titel">Das werden wir am häufigsten gefragt</h2>
          </Reveal>

          <Reveal>
            <Accordion items={generalFaq.slice(0, 5)} />
          </Reveal>

          <Reveal className="mt-4">
            <div className="text-center">
              <Link href="/faq" className="link-arrow">
                Alle Fragen und Antworten
                <Icon name="ArrowRight" size={16} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand />

      <JsonLd data={faqJsonLd(generalFaq.slice(0, 5))} />
    </>
  );
}
