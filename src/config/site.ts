export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || 'https://www.ks-landschaftsbau.de').replace(
  /\/$/,
  '',
);

export const formEndpoint = process.env.NEXT_PUBLIC_FORM_ENDPOINT || '';

/**
 * Unterpfad, unter dem die Seite ausgeliefert wird.
 * Leer bei eigener Domain, bei GitHub Pages der Repository-Name.
 */
export const basePath = (process.env.NEXT_PUBLIC_BASE_PATH || '').replace(/\/$/, '');

/**
 * Pfad zu einer Datei aus /public.
 *
 * Next setzt den basePath nur bei eigenen Bundles automatisch davor,
 * nicht bei Dateien aus /public. Deshalb laufen alle Medien hier durch.
 */
export const asset = (pfad: string) => `${basePath}${pfad}`;

/**
 * Vollstaendige Basis-Adresse der Seite einschliesslich Unterpfad.
 * Fuer Canonical-Tags, Sitemap, robots.txt und strukturierte Daten.
 */
export const siteBase = `${siteUrl}${basePath}`;

export type NavItem = {
  href: string;
  label: string;
  /** Untermenue fuer die Desktop-Navigation */
  children?: { href: string; label: string }[];
};

export const mainNav: NavItem[] = [
  { href: '/leistungen', label: 'Leistungen' },
  { href: '/referenzen', label: 'Referenzen' },
  { href: '/ueber-uns', label: 'Über uns' },
  { href: '/karriere', label: 'Karriere' },
  { href: '/faq', label: 'Fragen' },
];

export const footerLegal = [
  { href: '/impressum', label: 'Impressum' },
  { href: '/datenschutz', label: 'Datenschutz' },
];
