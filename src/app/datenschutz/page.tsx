import type { Metadata } from 'next';

import LegalHtml from '@/components/LegalHtml';
import PageHero from '@/components/PageHero';
import { company } from '@/config/company';

export const metadata: Metadata = {
  title: 'Datenschutzerklärung',
  description: `Informationen zur Verarbeitung personenbezogener Daten auf der Website von ${company.legalName}.`,
  alternates: { canonical: '/datenschutz' },
  robots: { index: true, follow: true },
};

const crumbs = [
  { name: 'Startseite', href: '/' },
  { name: 'Datenschutz', href: '/datenschutz' },
];

export default function DatenschutzPage() {
  return (
    <>
      <PageHero eyebrow="Rechtliches" title="Datenschutzerklärung" crumbs={crumbs} />

      <section className="section">
        <div className="container container--narrow">
          <LegalHtml file="datenschutz.html" title="Die Datenschutzerklärung" />
        </div>
      </section>
    </>
  );
}
