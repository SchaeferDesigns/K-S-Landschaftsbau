import Link from 'next/link';
import type { Metadata } from 'next';

import BeforeAfter from '@/components/BeforeAfter';
import Contour from '@/components/Contour';
import CtaBand from '@/components/CtaBand';
import Icon from '@/components/Icon';
import JsonLd from '@/components/JsonLd';
import PageHero from '@/components/PageHero';
import ProjectGallery from '@/components/ProjectGallery';
import Reveal from '@/components/Reveal';
import { projects } from '@/data/projects';
import { asset } from '@/config/site';
import { breadcrumbJsonLd } from '@/lib/jsonld';

export const metadata: Metadata = {
  title: 'Referenzen und Projekte',
  description:
    'Ausgeführte Projekte im Garten- und Landschaftsbau aus dem Ostalbkreis: Gartenanlagen, Terrassen, Pflasterflächen und Außenanlagen von K & S Landschaftsbau.',
  alternates: { canonical: '/referenzen' },
};

const crumbs = [
  { name: 'Startseite', href: '/' },
  { name: 'Referenzen', href: '/referenzen' },
];

export default function ReferenzenPage() {
  const hasProjects = projects.length > 0;

  return (
    <>
      <PageHero
        eyebrow="Referenzen"
        title="Arbeiten, die für sich sprechen"
        lead="Jedes Grundstück ist anders. Diese Beispiele zeigen, wie aus unterschiedlichen Ausgangslagen Außenanlagen werden, die im Alltag funktionieren."
        crumbs={crumbs}
        pattern="c"
      />

      <section className="section" aria-labelledby="projekte-titel">
        <div className="container">
          <Reveal className="section-head">
            <p className="section-index">01 Projekte</p>
            <h2 id="projekte-titel">Ausgeführte Anlagen</h2>
          </Reveal>

          {hasProjects ? (
            <ProjectGallery projects={projects} />
          ) : (
            <Reveal className="reveal--scale">
              <div className="empty-state">
                <span className="empty-state__icon">
                  <Icon name="ImageOff" size={28} strokeWidth={1.6} />
                </span>
                <h3>Die Projektgalerie wird gerade aufgebaut</h3>
                <p>
                  Wir stellen hier in Kürze abgeschlossene Projekte mit Fotos vor. Bis dahin zeigen wir Ihnen gerne
                  Beispiele direkt beim Termin vor Ort oder telefonisch.
                </p>
                <div className="flex-actions" style={{ justifyContent: 'center' }}>
                  <Link href="/kontakt" className="btn btn--primary">
                    Beispiele anfragen
                    <Icon name="ArrowRight" size={18} className="btn-arrow" />
                  </Link>
                  <Link href="/leistungen" className="btn btn--secondary">
                    Leistungen ansehen
                  </Link>
                </div>
              </div>
            </Reveal>
          )}
        </div>
      </section>

      <section className="section section--stone" aria-labelledby="vergleich-referenzen">
        <Contour variant="a" />
        <div className="container">
          <div className="split">
            <Reveal>
              <p className="section-index">02 Vergleich</p>
              <h2 id="vergleich-referenzen" className="mt-2">
                Der Unterschied wird erst im Vergleich sichtbar
              </h2>
              <p className="lead mt-3">
                Ziehen Sie den Regler, um zwischen Ausgangslage und fertiger Anlage zu wechseln. Genau so stellen wir
                künftig auch die echten Projekte vor.
              </p>
              <ul className="check-list mt-4">
                <li>
                  <span>
                    <Icon name="Check" size={15} strokeWidth={2.6} />
                  </span>
                  Bestandsaufnahme und ehrliche Einschätzung vorab
                </li>
                <li>
                  <span>
                    <Icon name="Check" size={15} strokeWidth={2.6} />
                  </span>
                  Umsetzung durch das eigene Team
                </li>
                <li>
                  <span>
                    <Icon name="Check" size={15} strokeWidth={2.6} />
                  </span>
                  Auf Wunsch Pflege nach der Fertigstellung
                </li>
              </ul>
            </Reveal>

            <Reveal className="reveal--scale" delay={90}>
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
          </div>
        </div>
      </section>

      <CtaBand
        title="Ihr Garten könnte der nächste sein"
        text="Schicken Sie uns ein paar Fotos und eine kurze Beschreibung. Wir sagen Ihnen offen, was sinnvoll ist und was es ungefähr kostet."
      />

      <JsonLd data={breadcrumbJsonLd(crumbs)} />
    </>
  );
}
