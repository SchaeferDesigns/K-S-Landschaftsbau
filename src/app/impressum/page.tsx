import type { Metadata } from 'next';

import LegalHtml from '@/components/LegalHtml';
import PageHero from '@/components/PageHero';
import { company } from '@/config/company';

export const metadata: Metadata = {
  title: 'Impressum',
  description: `Impressum und Anbieterkennzeichnung von ${company.legalName}, ${company.address.zip} ${company.address.city}.`,
  alternates: { canonical: '/impressum' },
  robots: { index: true, follow: true },
};

const crumbs = [
  { name: 'Startseite', href: '/' },
  { name: 'Impressum', href: '/impressum' },
];

export default function ImpressumPage() {
  return (
    <>
      <PageHero eyebrow="Rechtliches" title="Impressum" crumbs={crumbs} />

      <section className="section">
        <div className="container container--narrow">
          <LegalHtml file="impressum.html" title="Das Impressum" />
        </div>
      </section>
    </>
  );
}
