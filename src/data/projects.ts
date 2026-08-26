export type Project = {
  slug: string;
  title: string;
  /** Kategorie fuer den Filter, z. B. "Gartenanlage" */
  category: string;
  location: string;
  year: number;
  summary: string;
  /** Pfad zu einem Bild in /public/media/referenzen/... */
  image: string;
  imageAlt: string;
  /** Optionales Vorher-Bild fuer den Vergleichsregler */
  beforeImage?: string;
  beforeAlt?: string;
  scope?: string[];
};

/**
 * Noch keine Referenzprojekte hinterlegt.
 *
 * Sobald echte Projektfotos vorliegen, hier eintragen. Die Galerie,
 * der Filter und der Vorher-Nachher-Regler funktionieren dann automatisch.
 * Beispiel:
 *
 * {
 *   slug: 'hausgarten-mutlangen',
 *   title: 'Hausgarten mit Natursteinterrasse',
 *   category: 'Gartenanlage',
 *   location: 'Mutlangen',
 *   year: 2025,
 *   summary: 'Neue Terrasse, Sitzmauer und pflegeleichte Bepflanzung.',
 *   image: '/media/referenzen/hausgarten-mutlangen.jpg',
 *   imageAlt: 'Hausgarten mit Natursteinterrasse und Sitzmauer',
 *   scope: ['Terrassenbau', 'Pflasterarbeiten', 'Bepflanzung'],
 * }
 */
export const projects: Project[] = [];

export const projectCategories = Array.from(new Set(projects.map((p) => p.category)));
