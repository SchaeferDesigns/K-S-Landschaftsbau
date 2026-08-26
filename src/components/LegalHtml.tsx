import fs from 'node:fs';
import path from 'node:path';
import Icon from './Icon';

/**
 * Rechtstext-Renderer.
 *
 * Der Text liegt als fertig formatierte HTML-Datei in src/content/.
 * Eine manuelle Formatierung im Code entfaellt dadurch komplett:
 * Ueberschriften, Absaetze, Listen und Links kommen direkt aus der Datei.
 *
 * Der Inhalt stammt ausschliesslich aus dem eigenen Projektordner und wird
 * beim Rendern auf dem Server eingelesen.
 */
export default function LegalHtml({ file, title }: { file: string; title: string }) {
  const filePath = path.join(process.cwd(), 'src', 'content', file);

  let html = '';
  try {
    html = fs.readFileSync(filePath, 'utf8').trim();
  } catch {
    html = '';
  }

  if (!html) {
    return (
      <div className="empty-state">
        <span className="empty-state__icon">
          <Icon name="FileText" size={26} />
        </span>
        <h2 style={{ fontSize: '1.25rem' }}>{title} folgt in Kürze</h2>
        <p>
          Der rechtsverbindliche Text wird derzeit erstellt und anschließend hier veröffentlicht. Bei Fragen erreichen
          Sie uns jederzeit über die Kontaktseite.
        </p>
      </div>
    );
  }

  return <div className="legal-content" dangerouslySetInnerHTML={{ __html: html }} />;
}
