/**
 * Zentrale Stammdaten des Unternehmens.
 *
 * WICHTIG: Nur hier pflegen. Alle Seiten, das Impressum-Fallback, die
 * strukturierten Daten (JSON-LD) und die Kontaktflaechen lesen aus dieser Datei.
 *
 * Felder mit leerem String ('') werden auf der Website automatisch ausgeblendet.
 * So entstehen keine Platzhalter-Texte im Frontend.
 *
 * PRUEFEN (aus oeffentlichen Branchenverzeichnissen uebernommen, bitte bestaetigen):
 * Firmierung, Telefon, Oeffnungszeiten.
 */

export type OpeningHour = {
  /** Kurzform fuer die Anzeige, z. B. "Mo bis Do" */
  label: string;
  /** Anzeige-Zeit, z. B. "08:00 bis 17:00 Uhr" oder "Geschlossen" */
  time: string;
  /** Schema.org-Tage, z. B. ['Monday','Tuesday'] - leer lassen wenn geschlossen */
  days: string[];
  opens?: string;
  closes?: string;
};

export const company = {
  /** Vollstaendiger Firmenname laut Handelsregister. PRUEFEN */
  legalName: 'K & S Garten u. Landschaftsbau GmbH',
  /** Marken-/Kurzname fuer Logo, Navigation und Titel */
  name: 'K & S Landschaftsbau',
  /** Zusatz unter dem Namen */
  descriptor: 'Garten- und Landschaftsbau',
  /** Kurzclaim, erscheint u. a. im Footer */
  claim: 'Planung, Bau und Pflege aus einer Hand.',

  /**
   * BITTE EINTRAGEN. Solange 0, erscheint weder ein Gruendungsjahr
   * noch die Kennzahl "Jahre im Garten- und Landschaftsbau".
   */
  foundedYear: 0,

  address: {
    street: 'Wetzgauer Straße 17',
    zip: '73557',
    city: 'Mutlangen',
    region: 'Baden-Württemberg',
    country: 'DE',
    /** PRUEFEN: grobe Lage in Mutlangen, fuer die Hausnummer nachmessen */
    lat: 48.8232,
    lng: 9.801,
  },

  /** Telefonnummer in Anzeigeform. PRUEFEN */
  phone: '07171 405640',
  /** Telefonnummer in E.164 fuer tel:-Links */
  phoneHref: '+497171405640',
  /** BITTE EINTRAGEN */
  fax: '',

  /** BITTE EINTRAGEN - solange leer, wird ueberall das Kontaktformular verlinkt */
  email: '',

  /** PRUEFEN: aus Branchenverzeichnissen uebernommen */
  openingHours: [
    {
      label: 'Mo bis Do',
      time: '08:00 bis 17:00 Uhr',
      days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday'],
      opens: '08:00',
      closes: '17:00',
    },
    {
      label: 'Freitag',
      time: '08:00 bis 13:00 Uhr',
      days: ['Friday'],
      opens: '08:00',
      closes: '13:00',
    },
  ] as OpeningHour[],

  /**
   * BITTE EINTRAGEN - Angaben fuer das Impressum werden ausschliesslich
   * aus src/content/impressum.html gelesen (siehe README).
   * Als GmbH gehoeren dort zusaetzlich Geschaeftsfuehrung, Registergericht
   * und Handelsregisternummer hinein.
   */
  vatId: '',

  /** Social-Profile (leer lassen, wenn nicht vorhanden) */
  social: {
    instagram: '',
    facebook: '',
    google: '', // Link zum Google-Unternehmensprofil (fuer Bewertungen)
  },

  /** Geschaeftsfuehrung - erscheint auf "Über uns", wenn gefuellt */
  partners: [] as { name: string; role: string }[],
} as const;

/** 0, solange kein Gruendungsjahr hinterlegt ist */
export const yearsInBusiness = company.foundedYear
  ? new Date().getFullYear() - company.foundedYear
  : 0;

export const fullAddress = `${company.address.street}, ${company.address.zip} ${company.address.city}`;

export const mapsUrl = `https://www.openstreetmap.org/?mlat=${company.address.lat}&mlon=${company.address.lng}#map=17/${company.address.lat}/${company.address.lng}`;

export const routeUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
  `${company.address.street}, ${company.address.zip} ${company.address.city}`,
)}`;
