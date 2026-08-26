# K &amp; S Landschaftsbau, Garten- und Landschaftsbau

Website für die K & S Garten u. Landschaftsbau GmbH aus 73557 Mutlangen.
Next.js 16 (App Router), React 19, TypeScript, eigenes Designsystem ohne Framework.

## Schnellstart

```bash
npm install
npm run dev
```

Die Seite läuft dann auf http://localhost:3100

```bash
npm run build      # Produktionsbuild
npm run start      # Produktionsserver
npm run typecheck  # TypeScript prüfen
```

## Gestaltung

Die Seite ist eigens für diesen Betrieb entworfen, sie basiert auf keiner
Vorlage. Drei Entscheidungen prägen das Bild:

**Höhenlinien.** Das grafische Erkennungszeichen sind Höhenlinien aus der
Geländeplanung. Sie liegen als Inline-SVG hinter den Abschnitten und wechseln
das Muster von Seite zu Seite. Umgesetzt in `src/components/Contour.tsx`.

**Waldgrün und Sandstein.** Tiefes Grün für Flächen und Aussagen, warmer
Sandstein als Untergrund, Ton als sparsamer Akzent für Naturstein und Wärme.
Alle Werte liegen als CSS-Variablen im Kopf von `src/app/globals.css`.

**Alles gerundet.** Karten, Schaltflächen, Eingabefelder, Kontrollkästchen,
Auswahllisten und der Fußbereich haben durchgehend weiche Radien. Die Werte
stehen als `--r-2xs` bis `--r-3xl` in den Gestaltungswerten.

Eigene Bedienelemente statt Systemvorgaben:

| Element | Datei | Besonderheit |
| --- | --- | --- |
| Auswahlliste | `components/CustomSelect.tsx` | Vollständig eigene Darstellung, bedienbar mit Pfeiltasten, Pos1, Ende, Eingabe und Escape |
| Kontrollkästchen | `components/Checkbox.tsx` | Rundes Feld, Haken blendet weich ein |
| Auswahlkarten | `components/ChoiceCards.tsx` | Große Trefferflächen statt kleiner Punkte |
| Anfrage in drei Schritten | `components/QuoteWizard.tsx` | Fortschrittsbalken, Zusammenfassung, Prüfung je Schritt |
| Aufklappbare Fragen | `components/Accordion.tsx` | Plus dreht sich zum Minus, Höhe läuft weich auf |

Bewegung:

- Startbereich mit Bild, das sich beim Scrollen langsamer bewegt (`components/HeroMedia.tsx`)
- Überschriften laufen zeilenweise ein, Abschnitte blenden beim Scrollen auf (`components/Reveal.tsx`)
- Gleitende Markierung in der Navigation, die dem Zeiger folgt
- Kennzahlen zählen beim Sichtwerden hoch (`components/Counter.tsx`)
- Feiner Fortschrittsbalken am oberen Rand (`components/ScrollProgress.tsx`)

Alle Bewegungen laufen über `requestAnimationFrame` oder reine CSS-Übergänge
und schalten sich bei `prefers-reduced-motion: reduce` vollständig ab.

## Aufbau

```
src/
  app/
    page.tsx           Startseite
    leistungen/        Leistungsverzeichnis und Detailseiten
    referenzen/        Projektgalerie
    ueber-uns/
    karriere/
    faq/
    kontakt/           Anfrage in drei Schritten
    impressum/         liest src/content/impressum.html
    datenschutz/       liest src/content/datenschutz.html
    sitemap.ts         erzeugt /sitemap.xml
    robots.ts          erzeugt /robots.txt
    globals.css        Designsystem, alle Stile an einem Ort
  components/          Wiederverwendbare Bausteine
  config/company.ts    Stammdaten des Betriebs
  config/site.ts       Basis-URL, Navigation, Formular-Endpunkt
  content/             Rechtstexte als HTML
  data/                Leistungen, Fragen, Orte, Jahreszeiten, Projekte, Stellen
  fonts/               Selbst gehostete Schriften
  lib/jsonld.ts        Strukturierte Daten für Suchmaschinen
public/media/          Grafiken
scripts/               Erzeugt das Vorschaubild für soziale Netzwerke
```

## Inhalte pflegen

| Was | Wo |
| --- | --- |
| Adresse, Telefon, E-Mail, Öffnungszeiten | `src/config/company.ts` |
| Leistungen, Texte, Fragen je Leistung | `src/data/services.ts` |
| Allgemeine Fragen | `src/data/faq.ts` |
| Gartenjahr | `src/data/seasons.ts` |
| Einsatzgebiet | `src/data/areas.ts` |
| Referenzprojekte | `src/data/projects.ts` |
| Offene Stellen | `src/data/jobs.ts` |
| Impressum | `src/content/impressum.html` |
| Datenschutzerklärung | `src/content/datenschutz.html` |

Leere Felder in `company.ts` werden automatisch ausgeblendet. So entstehen keine
sichtbaren Platzhalter.

### Rechtstexte

Impressum und Datenschutzerklärung liegen als fertig formatiertes HTML in
`src/content/`. Der Text wird beim Rendern auf dem Server eingelesen und im
Bereich `.legal-content` ausgegeben. Überschriften, Absätze, Listen, Tabellen und
Links kommen direkt aus der Datei, eine manuelle Formatierung im Code entfällt.
Solange eine Datei leer ist, zeigt die Seite einen kurzen Hinweis.

### Bilder ersetzen

Alle Grafiken in `public/media/` sind selbst erzeugte SVG-Dateien für den
Entwurf. Zum Austausch die neue Datei ablegen und den Pfad in der jeweiligen
Seite ändern.

| Datei | Verwendung | Empfohlene Größe |
| --- | --- | --- |
| `hero-garten.jpg` | Startbereich | ab 2400 x 1350 px, Querformat |
| `vorher-beispiel.svg` | Vergleichsregler, Ausgangslage | 1600 x 1000 px |
| `nachher-beispiel.svg` | Vergleichsregler, Ergebnis | 1600 x 1000 px |
| `team-platzhalter.svg` | Über uns und Startseite | 1200 x 900 px |
| `karte-mutlangen.svg` | Kontakt und Startseite | 800 x 500 px |
| `og-standard.png` | Vorschau beim Teilen | 1200 x 630 px |
| `farbpalette.png` | Farbreferenz, kein Seitenelement | 1600 x 1150 px |

Der Verlauf `hero__veil` dunkelt die linke Seite ab, damit die Glaskarte lesbar
bleibt. Bei einem helleren Foto dort die Werte anheben.

Vorschaubild und Farbpalette lassen sich neu erzeugen:

```bash
node scripts/make-og-image.mjs
node scripts/make-palette-image.mjs
```

## Anfrageformular

Das Formular arbeitet in zwei Stufen:

1. Ist `NEXT_PUBLIC_FORM_ENDPOINT` gesetzt, wird die Anfrage als JSON per POST an
   diese Adresse gesendet.
2. Ist kein Endpunkt gesetzt, aber eine E-Mail-Adresse in `company.ts`
   hinterlegt, öffnet sich eine vorbereitete E-Mail im Mailprogramm.

Für den Livebetrieb ist Variante 1 die richtige Wahl. Geeignet sind ein kleines
Skript auf dem Webspace oder ein Formulardienst mit Sitz in der EU und
Auftragsverarbeitungsvertrag.

Von einer Leistungsseite aus wird die passende Leistung über
`/kontakt?leistung=slug` automatisch vorausgewählt.

## Datenschutz

- Keine externen Schriften, keine Karten-Einbindung, keine Analysewerkzeuge
- Schriften liegen lokal im Projekt und kommen vom eigenen Server
- Es werden keine Cookies gesetzt, daher ist kein Cookie-Banner nötig
- Kartendienste öffnen sich erst nach einem bewussten Klick in einem neuen Fenster
- Das Anfrageformular verlangt eine ausdrückliche Einwilligung

Wird später ein Dienst ergänzt, der Cookies setzt oder Daten an Dritte überträgt,
sind eine Einwilligungslösung und eine Ergänzung der Datenschutzerklärung nötig.

## Barrierefreiheit

- Sprunglink, sichtbarer Fokus, sinnvolle Überschriftenfolge
- Menü, Auswahlliste, Jahreszeitenleiste und Vergleichsregler sind vollständig mit der Tastatur bedienbar
- Kontraste geprüft, kleinste Textgrößen liegen über 4,5 zu 1
- Alle Bewegungen respektieren `prefers-reduced-motion`
- Trefferflächen mindestens 44 Pixel hoch

## Veröffentlichen

Vor dem Livegang `NEXT_PUBLIC_SITE_URL` in `.env.local` auf die echte Domain
setzen. Danach `npm run build` und `npm run start`.

Weiterführend: `DATEN-EINTRAGEN.md` listet alles auf, was noch fehlt.
`INHALTE-HERKUNFT.md` trennt recherchierte von selbst formulierten Inhalten.
