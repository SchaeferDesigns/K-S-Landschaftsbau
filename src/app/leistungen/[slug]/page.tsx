import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

import Accordion from '@/components/Accordion';
import Contour from '@/components/Contour';
import CtaBand from '@/components/CtaBand';
import Icon from '@/components/Icon';
import JsonLd from '@/components/JsonLd';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import ServiceCard from '@/components/ServiceCard';
import { company } from '@/config/company';
import { areaHeadline } from '@/data/areas';
import { getService, services } from '@/data/services';
import { breadcrumbJsonLd, faqJsonLd, serviceJsonLd } from '@/lib/jsonld';

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return { title: 'Leistung nicht gefunden' };

  return {
    title: service.seoTitle,
    description: service.seoDescription,
    alternates: { canonical: `/leistungen/${service.slug}` },
    openGraph: {
      title: service.seoTitle,
      description: service.seoDescription,
      url: `/leistungen/${service.slug}`,
      // muss mit angegeben werden, sonst entfaellt das Vorschaubild
      images: ['/media/og-standard.png'],
    },
  };
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const index = services.findIndex((item) => item.slug === service.slug);
  const related = services.filter((item) => item.slug !== service.slug).slice(0, 3);

  const crumbs = [
    { name: 'Startseite', href: '/' },
    { name: 'Leistungen', href: '/leistungen' },
    { name: service.navTitle, href: `/leistungen/${service.slug}` },
  ];

  return (
    <>
      <PageHero
        eyebrow={`Leistung ${String(index + 1).padStart(2, '0')}`}
        title={service.title}
        lead={service.teaser}
        crumbs={crumbs}
        pattern="b"
      >
        <div className="flex-actions mt-4 fade-up" style={{ ['--d' as never]: '340ms' }}>
          <Link href={`/kontakt?leistung=${service.slug}`} className="btn btn--light">
            Angebot anfordern
            <Icon name="ArrowRight" size={18} className="btn-arrow" />
          </Link>
          {company.phoneHref ? (
            <a href={`tel:${company.phoneHref}`} className="btn btn--glass">
              <Icon name="Phone" size={18} />
              {company.phone}
            </a>
          ) : null}
        </div>
      </PageHero>

      <section className="section" aria-labelledby="umfang-titel">
        <div className="container">
          <div className="split split--top">
            <Reveal>
              <p className="section-index">01 Umfang</p>
              <h2 id="umfang-titel" className="mt-2">
                Das übernehmen wir für Sie
              </h2>
              <p className="lead mt-3">{service.intro}</p>
              <ul className="check-list mt-4">
                {service.bullets.map((bullet) => (
                  <li key={bullet}>
                    <span>
                      <Icon name="Check" size={15} strokeWidth={2.6} />
                    </span>
                    {bullet}
                  </li>
                ))}
              </ul>
              <div className="flex-actions mt-5">
                <Link href={`/kontakt?leistung=${service.slug}`} className="btn btn--primary">
                  Angebot anfordern
                  <Icon name="ArrowRight" size={18} className="btn-arrow" />
                </Link>
              </div>
            </Reveal>

            <div className="grid">
              {service.highlights.map((highlight, highlightIndex) => (
                <Reveal key={highlight.title} delay={highlightIndex * 90} className="reveal--right">
                  <article className="card">
                    <span className="card__icon">
                      <Icon name={service.icon} size={23} strokeWidth={1.7} />
                    </span>
                    <h3 className="card__title">{highlight.title}</h3>
                    <p className="card__text">{highlight.text}</p>
                  </article>
                </Reveal>
              ))}

              <Reveal delay={280} className="reveal--right">
                <div className="notice notice--clay">
                  <Icon name="MapPin" size={18} />
                  <span>
                    Wir führen diese Arbeiten im {areaHeadline} aus, mit Schwerpunkt rund um {company.address.city} und
                    Schwäbisch Gmünd.
                  </span>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--stone" aria-labelledby="fragen-leistung">
        <Contour variant="c" />
        <div className="container container--narrow">
          <Reveal className="section-head section-head--center">
            <p className="section-index">02 Gut zu wissen</p>
            <h2 id="fragen-leistung">Fragen zu {service.navTitle}</h2>
          </Reveal>
          <Reveal>
            <Accordion items={service.faq} />
          </Reveal>
        </div>
      </section>

      <section className="section" aria-labelledby="weitere-leistungen">
        <div className="container">
          <Reveal className="section-head section-head--row">
            <div>
              <p className="section-index">03 Passt dazu</p>
              <h2 id="weitere-leistungen">Weitere Leistungen</h2>
            </div>
            <Link href="/leistungen" className="btn btn--secondary">
              Zur Übersicht
              <Icon name="ArrowRight" size={17} className="btn-arrow" />
            </Link>
          </Reveal>

          <div className="grid grid--3">
            {related.map((item, relatedIndex) => (
              <Reveal key={item.slug} delay={relatedIndex * 90}>
                <ServiceCard service={item} index={services.indexOf(item)} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title={`${service.navTitle} geplant?`}
        text="Schildern Sie uns kurz Ihr Vorhaben. Wir sehen uns die Fläche an und erstellen Ihnen ein Angebot mit klaren Positionen."
        primaryHref={`/kontakt?leistung=${service.slug}`}
      />

      <JsonLd
        data={[
          breadcrumbJsonLd(crumbs),
          serviceJsonLd({ name: service.title, description: service.seoDescription, slug: service.slug }),
          faqJsonLd(service.faq),
        ]}
      />
    </>
  );
}
