export type Job = {
  slug: string;
  title: string;
  employmentType: string;
  location: string;
  summary: string;
  tasks: string[];
  profile: string[];
  offer: string[];
};

/**
 * Noch keine offenen Stellen hinterlegt.
 *
 * Sobald eine Stelle ausgeschrieben wird, hier eintragen. Die Karriereseite
 * zeigt dann automatisch die Stellenliste statt des Hinweises auf
 * Initiativbewerbungen. Beispiel:
 *
 * {
 *   slug: 'landschaftsgaertner',
 *   title: 'Landschaftsgärtner (m/w/d)',
 *   employmentType: 'Vollzeit',
 *   location: 'Mutlangen',
 *   summary: 'Verstärkung für unsere Bautrupps im Ostalbkreis.',
 *   tasks: ['Pflasterarbeiten', 'Pflanzarbeiten'],
 *   profile: ['Abgeschlossene Ausbildung', 'Führerschein Klasse B'],
 *   offer: ['Unbefristete Anstellung', 'Moderner Maschinenpark'],
 * }
 */
export const jobs: Job[] = [];
