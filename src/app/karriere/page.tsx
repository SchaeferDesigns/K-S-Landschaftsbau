import Link from 'next/link';
import type { Metadata } from 'next';

import Contour from '@/components/Contour';
import Icon from '@/components/Icon';
import JsonLd from '@/components/JsonLd';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import { company } from '@/config/company';
import { jobs } from '@/data/jobs';
import { breadcrumbJsonLd } from '@/lib/jsonld';

export const metadata: Metadata = {
  title: 'Karriere und offene Stellen',
  description: `Arbeiten bei ${company.name} in ${company.address.city}: Stellen im Garten- und Landschaftsbau, Ausbildung und Initiativbewerbungen im Ostalbkreis.`,
  alternates: { canonical: '/karriere' },
};

const crumbs = [
  { name: 'Startseite', href: '/' },
  { name: 'Karriere', href: '/karriere' },
];

const vorteile = [
  {
    icon: 'MapPin',
    title: 'Kurze Wege',
    text: 'Die Baustellen liegen in der Region. Keine Wochenendheimfahrten, keine Montagehotels.',
  },
  {
    icon: 'Truck',
    title: 'Ordentliche Ausstattung',
    text: 'Maschinen, Fahrzeuge und Werkzeug, mit denen sich sauber arbeiten lässt.',
  },
  {
    icon: 'Users',
    title: 'Eingespieltes Team',
    text: 'Feste Trupps statt wechselnder Zusammensetzung. Man weiß, mit wem man am Morgen losfährt.',
  },
  {
    icon: 'Sprout',
    title: 'Abwechslung',
    text: 'Pflasterbau, Pflanzung, Pflege, Technik. Kein Tag ist wie der andere.',
  },
];

export default function KarrierePage() {
  const hasJobs = jobs.length > 0;
  const bewerbungHref = company.email
    ? `mailto:${company.email}?subject=${encodeURIComponent('Bewerbung')}`
    : '/kontakt';

  return (
    <>
      <PageHero
        eyebrow="Karriere"
        title="Handwerk mit einem Ergebnis, das man sehen kann"
        lead="Wir suchen Menschen, die gerne draußen arbeiten und Wert auf saubere Ausführung legen. Bei uns zählt, was am Ende steht."
        crumbs={crumbs}
        pattern="b"
      />

      <section className="section" aria-labelledby="stellen-titel">
        <div className="container">
          <Reveal className="section-head">
            <p className="section-index">01 Offene Stellen</p>
            <h2 id="stellen-titel">Aktuelle Ausschreibungen</h2>
          </Reveal>

          {hasJobs ? (
            <div className="grid grid--2">
              {jobs.map((job, index) => (
                <Reveal key={job.slug} delay={index * 80}>
                  <article className="card">
                    <span className="chip chip--accent" style={{ alignSelf: 'start' }}>
                      {job.employmentType}
                    </span>
                    <h3 className="card__title">{job.title}</h3>
                    <p className="card__text">{job.summary}</p>
                    <p className="muted" style={{ fontSize: '0.9rem' }}>
                      <Icon name="MapPin" size={14} style={{ display: 'inline', verticalAlign: '-2px' }} />{' '}
                      {job.location}
                    </p>
                    <Link href={bewerbungHref} className="btn btn--primary btn--sm" style={{ alignSelf: 'start' }}>
                      Jetzt bewerben
                      <Icon name="ArrowRight" size={16} className="btn-arrow" />
                    </Link>
                  </article>
                </Reveal>
              ))}
            </div>
          ) : (
            <Reveal className="reveal--scale">
              <div className="empty-state">
                <span className="empty-state__icon">
                  <Icon name="Briefcase" size={28} strokeWidth={1.6} />
                </span>
                <h3>Derzeit ist keine Stelle ausgeschrieben</h3>
                <p>
                  Gute Leute nehmen wir trotzdem gerne auf. Schicken Sie uns eine Initiativbewerbung mit ein paar
                  Sätzen zu Ihnen und Ihrer Erfahrung. Wir melden uns zurück, sobald etwas passt.
                </p>
                <div className="flex-actions" style={{ justifyContent: 'center' }}>
                  <Link href="/kontakt" className="btn btn--primary">
                    Initiativ bewerben
                    <Icon name="ArrowRight" size={18} className="btn-arrow" />
                  </Link>
                  {company.phoneHref ? (
                    <a href={`tel:${company.phoneHref}`} className="btn btn--secondary">
                      <Icon name="Phone" size={17} />
                      {company.phone}
                    </a>
                  ) : null}
                </div>
              </div>
            </Reveal>
          )}
        </div>
      </section>

      <section className="section section--stone" aria-labelledby="vorteile-titel">
        <Contour variant="a" />
        <div className="container">
          <Reveal className="section-head section-head--center">
            <p className="section-index">02 Arbeiten bei uns</p>
            <h2 id="vorteile-titel">Was Sie erwartet</h2>
          </Reveal>

          <div className="grid grid--4">
            {vorteile.map((vorteil, index) => (
              <Reveal key={vorteil.title} delay={index * 80}>
                <article className="card">
                  <span className="card__icon">
                    <Icon name={vorteil.icon} size={24} strokeWidth={1.7} />
                  </span>
                  <h3 className="card__title">{vorteil.title}</h3>
                  <p className="card__text">{vorteil.text}</p>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-5">
            <div className="notice notice--clay">
              <Icon name="Info" size={18} />
              <span>
                Auch Ausbildungsplätze und Praktika sind ein Thema. Sprechen Sie uns an, wenn Sie den Beruf
                kennenlernen möchten.
              </span>
            </div>
          </Reveal>
        </div>
      </section>

      <JsonLd data={breadcrumbJsonLd(crumbs)} />
    </>
  );
}
