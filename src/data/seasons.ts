export type Season = {
  key: string;
  label: string;
  months: string;
  icon: string;
  intro: string;
  tasks: string[];
};

/**
 * Das Gartenjahr. Fachlich üblicher Ablauf im Garten- und Landschaftsbau.
 * Bitte gegen die eigene Praxis prüfen und ergänzen.
 */
export const seasons: Season[] = [
  {
    key: 'fruehjahr',
    label: 'Frühjahr',
    months: 'März bis Mai',
    icon: 'Sprout',
    intro:
      'Die Fläche wird geweckt. Jetzt entscheidet sich, wie der Rasen durch den Sommer kommt und ob die Beete im Juni etwas hermachen.',
    tasks: [
      'Rasen vertikutieren, düngen und nachsäen',
      'Rollrasen verlegen und Neuanlagen fertigstellen',
      'Beete räumen, Stauden zurückschneiden, Mulch ergänzen',
      'Bewässerungsanlage in Betrieb nehmen und einstellen',
      'Pflanzungen von Gehölzen und Stauden',
      'Wege und Flächen reinigen',
    ],
  },
  {
    key: 'sommer',
    label: 'Sommer',
    months: 'Juni bis August',
    icon: 'Umbrella',
    intro:
      'Hauptzeit für Bau und Pflege. Terrassen und Wege lassen sich jetzt gut umsetzen, gleichzeitig braucht der Bestand regelmäßige Betreuung.',
    tasks: [
      'Regelmäßige Mäh- und Pflegeeinsätze',
      'Formschnitt an Hecken, schonend und ohne Brutstörung',
      'Terrassen-, Pflaster- und Mauerarbeiten',
      'Bewässerung nachjustieren, Wasserverbrauch prüfen',
      'Teich- und Wasseranlagen kontrollieren',
      'Unkrautregulierung in Beeten und Fugen',
    ],
  },
  {
    key: 'herbst',
    label: 'Herbst',
    months: 'September bis November',
    icon: 'Leaf',
    intro:
      'Die beste Pflanzzeit des Jahres. Was jetzt gesetzt wird, wächst über den Winter ein und startet im Frühjahr kräftig durch.',
    tasks: [
      'Pflanzzeit für Bäume, Sträucher und Hecken',
      'Laubräumung auf Rasen, Wegen und Stellplätzen',
      'Herbstdüngung für den Rasen',
      'Rückschnitt und Verjüngung von Gehölzen',
      'Bewässerungsanlage fachgerecht entleeren',
      'Neuanlagen und Erdarbeiten vor dem Frost',
    ],
  },
  {
    key: 'winter',
    label: 'Winter',
    months: 'Dezember bis Februar',
    icon: 'Snowflake',
    intro:
      'Ruhige Zeit auf der Fläche, intensive Zeit am Plan. Wer jetzt plant, hat im Frühjahr den Termin, den er möchte.',
    tasks: [
      'Planung und Angebote für die kommende Saison',
      'Baumpflege und Fällungen im unbelaubten Zustand',
      'Winterdienst mit Räumen und Streuen',
      'Pflasterarbeiten bei frostfreier Witterung',
      'Wartung von Technik und Anlagen',
      'Vor-Ort-Termine für Projekte im Frühjahr',
    ],
  },
];
