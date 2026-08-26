import Link from 'next/link';
import type { Metadata } from 'next';

import Accordion from '@/components/Accordion';
import Contour from '@/components/Contour';
import CtaBand from '@/components/CtaBand';
import Icon from '@/components/Icon';
import JsonLd from '@/components/JsonLd';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import { generalFaq } from '@/data/faq';
import { services } from '@/data/services';
import { breadcrumbJsonLd, faqJsonLd } from '@/lib/jsonld';

export const metadata: Metadata = {
  title: 'Häufige Fragen',
  description:
    'Antworten zu Kosten, Ablauf, Terminen und Einsatzgebiet im Garten- und Landschaftsbau. K & S Landschaftsbau aus Mutlangen im Ostalbkreis.',
  alternates: { canonical: '/faq' },
};

const crumbs = [
  { name: 'Startseite', href: '/' },
  { name: 'Fragen', href: '/faq' },
];

export default function FaqPage() {
  const serviceFaq = services.flatMap((service) => service.faq.slice(0, 1).map((item) => ({ ...item })));

  return (
    <>
      <PageHero
        eyebrow="Fragen und Antworten"
        title="Was Sie vor der Beauftragung wissen sollten"
        lead="Wir beantworten hier die Fragen, die uns am häufigsten gestellt werden. Fehlt etwas, rufen Sie einfach an."
        crumbs={crumbs}
        pattern="c"
      />

      <section className="section" aria-labelledby="allgemein-titel">
        <div className="container container--narrow">
          <Reveal className="section-head">
            <p className="section-index">01 Allgemein</p>
            <h2 id="allgemein-titel">Zusammenarbeit, Kosten und Termine</h2>
          </Reveal>
          <Reveal>
            <Accordion items={generalFaq} />
          </Reveal>
        </div>
      </section>

      <section className="section section--stone" aria-labelledby="leistungsfragen-titel">
        <Contour variant="a" />
        <div className="container container--narrow">
          <Reveal className="section-head">
            <p className="section-index">02 Zu den Leistungen</p>
            <h2 id="leistungsfragen-titel">Fragen aus der Praxis</h2>
            <p className="lead">
              Ausführlichere Antworten finden Sie jeweils direkt auf der passenden Leistungsseite.
            </p>
          </Reveal>

          <Reveal>
            <Accordion items={serviceFaq} initialOpen={null} />
          </Reveal>

          <Reveal className="mt-4">
            <Link href="/leistungen" className="link-arrow">
              Zur Leistungsübersicht
              <Icon name="ArrowRight" size={16} />
            </Link>
          </Reveal>
        </div>
      </section>

      <CtaBand
        title="Frage nicht dabei?"
        text="Rufen Sie an oder schreiben Sie uns kurz. Wir antworten so konkret, wie es ohne Blick auf die Fläche möglich ist."
      />

      <JsonLd data={[breadcrumbJsonLd(crumbs), faqJsonLd([...generalFaq, ...serviceFaq])]} />
    </>
  );
}
