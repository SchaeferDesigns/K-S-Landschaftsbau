export type ProcessStep = {
  number: string;
  title: string;
  text: string;
  icon: string;
};

/** Vier Schritte von der Anfrage bis zur fertigen Anlage. */
export const processSteps: ProcessStep[] = [
  {
    number: '01',
    title: 'Anfrage',
    text: 'Sie schildern uns Ihr Vorhaben, telefonisch oder über das Formular. Wir melden uns kurzfristig zurück.',
    icon: 'ClipboardList',
  },
  {
    number: '02',
    title: 'Termin vor Ort',
    text: 'Wir sehen uns die Fläche an, klären Wünsche, Budget und Randbedingungen. Kostenfrei und unverbindlich.',
    icon: 'MapPin',
  },
  {
    number: '03',
    title: 'Angebot',
    text: 'Sie erhalten ein schriftliches Angebot mit Positionen und Mengen sowie einen realistischen Zeitraum.',
    icon: 'Handshake',
  },
  {
    number: '04',
    title: 'Umsetzung und Pflege',
    text: 'Wir führen die Arbeiten mit eigenem Team und eigener Technik aus. Auf Wunsch übernehmen wir danach die Pflege.',
    icon: 'HardHat',
  },
];

export type ValueItem = { title: string; text: string; icon: string };

/** Argumente, die typische Unsicherheiten vor der Beauftragung aufloesen. */
export const reasons: ValueItem[] = [
  {
    title: 'Ein Ansprechpartner',
    text: 'Planung, Bau und Pflege kommen aus einem Haus. Sie koordinieren keine Gewerke und haben eine feste Kontaktperson.',
    icon: 'Users',
  },
  {
    title: 'Eigenes Team, eigene Technik',
    text: 'Wir arbeiten mit eigenem Personal und eigenem Maschinenpark. Das macht Termine planbar und die Ausführung nachvollziehbar.',
    icon: 'Truck',
  },
  {
    title: 'Aus der Region, für die Region',
    text: 'Der Betrieb sitzt in Mutlangen. Kurze Wege bedeuten schnelle Rückmeldung, auch nach der Fertigstellung.',
    icon: 'MapPin',
  },
  {
    title: 'Sauber kalkuliert',
    text: 'Sie bekommen ein Angebot mit klaren Positionen. Unvorhersehbares sprechen wir an, bevor es abgerechnet wird.',
    icon: 'ShieldCheck',
  },
];
