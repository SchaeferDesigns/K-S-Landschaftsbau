import { company, fullAddress } from '@/config/company';
import { siteBase } from '@/config/site';
import { areas } from '@/data/areas';
import type { FaqItem } from '@/data/faq';

/** Strukturierte Daten des Betriebs. Basis fuer die lokale Sichtbarkeit. */
export function localBusinessJsonLd() {
  const data: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'HomeAndConstructionBusiness'],
    '@id': `${siteBase}/#organisation`,
    name: `${company.name} ${company.descriptor}`,
    legalName: company.legalName,
    url: siteBase,
    image: `${siteBase}/media/og-standard.png`,
    logo: `${siteBase}/icon.svg`,
    address: {
      '@type': 'PostalAddress',
      streetAddress: company.address.street,
      postalCode: company.address.zip,
      addressLocality: company.address.city,
      addressRegion: company.address.region,
      addressCountry: company.address.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: company.address.lat,
      longitude: company.address.lng,
    },
    areaServed: areas.map((name) => ({ '@type': 'City', name })),
    knowsLanguage: 'de-DE',
    description: `${company.name} ist ein Betrieb für Garten- und Landschaftsbau aus ${company.address.city} im Ostalbkreis. Planung, Bau und Pflege von Gärten und Außenanlagen aus einer Hand.`,
  };

  if (company.foundedYear) data.foundingDate = String(company.foundedYear);
  if (company.phone) data.telephone = company.phoneHref || company.phone;
  if (company.fax) data.faxNumber = company.fax;
  if (company.email) data.email = company.email;
  if (company.vatId) data.vatID = company.vatId;

  const sameAs = Object.values(company.social).filter(Boolean);
  if (sameAs.length) data.sameAs = sameAs;

  if (company.openingHours.length) {
    data.openingHoursSpecification = company.openingHours
      .filter((h) => h.days.length && h.opens && h.closes)
      .map((h) => ({
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: h.days,
        opens: h.opens,
        closes: h.closes,
      }));
  }

  return data;
}

export function websiteJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${siteBase}/#website`,
    url: siteBase,
    name: `${company.name} ${company.descriptor}`,
    inLanguage: 'de-DE',
    publisher: { '@id': `${siteBase}/#organisation` },
  };
}

export function breadcrumbJsonLd(items: { name: string; href: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${siteBase}${item.href}`,
    })),
  };
}

export function serviceJsonLd(params: {
  name: string;
  description: string;
  slug: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: params.name,
    description: params.description,
    serviceType: params.name,
    url: `${siteBase}/leistungen/${params.slug}`,
    provider: { '@id': `${siteBase}/#organisation` },
    areaServed: areas.map((name) => ({ '@type': 'City', name })),
  };
}

export function faqJsonLd(items: FaqItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  };
}

export const postalSummary = fullAddress;
