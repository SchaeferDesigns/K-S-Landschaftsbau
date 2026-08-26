import type { Metadata, Viewport } from 'next';
import localFont from 'next/font/local';
import './globals.css';

import SiteHeader from '@/components/SiteHeader';
import Footer from '@/components/Footer';
import MobileActionBar from '@/components/MobileActionBar';
import ScrollProgress from '@/components/ScrollProgress';
import ScrollManager from '@/components/ScrollManager';
import JsonLd from '@/components/JsonLd';
import { company } from '@/config/company';
import { siteBase } from '@/config/site';
import { localBusinessJsonLd, websiteJsonLd } from '@/lib/jsonld';

/**
 * Schriften liegen lokal im Projekt und werden vom eigenen Server ausgeliefert.
 * Es entsteht keine Verbindung zu Google Fonts, das ist datenschutzrechtlich
 * die saubere Loesung.
 */
const sans = localFont({
  src: '../fonts/Inter-Variable-latin.woff2',
  weight: '400 700',
  style: 'normal',
  display: 'swap',
  variable: '--font-sans',
  fallback: ['system-ui', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
});

const display = localFont({
  src: '../fonts/Manrope-Variable-latin.woff2',
  weight: '400 800',
  style: 'normal',
  display: 'swap',
  variable: '--font-display',
  fallback: ['Segoe UI', 'system-ui', 'Helvetica', 'Arial', 'sans-serif'],
});

const defaultDescription = `Garten- und Landschaftsbau aus ${company.address.city}: Gartenplanung, Terrassen, Pflasterarbeiten, Zaunbau und Gartenpflege für Privat, Gewerbe und Kommunen im Ostalbkreis. Kostenlose Beratung vor Ort.`;

export const metadata: Metadata = {
  metadataBase: new URL(siteBase),
  title: {
    default: `${company.name} | ${company.descriptor} in ${company.address.city}`,
    template: `%s | ${company.name}`,
  },
  description: defaultDescription,
  applicationName: company.name,
  authors: [{ name: company.legalName }],
  generator: 'Next.js',
  keywords: [
    'Garten- und Landschaftsbau',
    'Galabau Mutlangen',
    'Gartenpflege Ostalbkreis',
    'Gartengestaltung Schwäbisch Gmünd',
    'Pflasterarbeiten Ostalbkreis',
    'Terrassenbau',
    'Zaunbau',
    company.name,
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    url: siteBase,
    siteName: `${company.name} ${company.descriptor}`,
    title: `${company.name} | ${company.descriptor} in ${company.address.city}`,
    description: defaultDescription,
    images: [
      {
        url: '/media/og-standard.png',
        width: 1200,
        height: 630,
        alt: `${company.name}, ${company.descriptor} in ${company.address.city}`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${company.name} | ${company.descriptor}`,
    description: defaultDescription,
    images: ['/media/og-standard.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  formatDetection: { telephone: true, address: true, email: true },
};

export const viewport: Viewport = {
  themeColor: '#0e2e20',
  colorScheme: 'light',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className={`${sans.variable} ${display.variable}`}>
      <body>
        <a className="skip-link" href="#inhalt">
          Direkt zum Inhalt
        </a>
        <ScrollProgress />
        <ScrollManager />
        <SiteHeader />
        <main id="inhalt" className="main-content">
          {children}
        </main>
        <Footer />
        <MobileActionBar />
        <JsonLd data={[localBusinessJsonLd(), websiteJsonLd()]} />
      </body>
    </html>
  );
}
