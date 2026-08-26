# Woher die Inhalte stammen

Stand: 26. August 2026. Diese Datei trennt, was recherchiert ist und was ich
formuliert habe. Alles aus Abschnitt 2 und 3 muss vor dem Livegang mit dem
Betrieb abgestimmt werden.

---

## 1. Recherchiert, aus öffentlichen Quellen

| Angabe | Wert auf der Seite | Verlässlichkeit |
| --- | --- | --- |
| Firmierung | K & S Garten u. Landschaftsbau GmbH | mittel, mehrere Verzeichnisse übereinstimmend, kein Handelsregisterauszug geprüft |
| Marke | K & S Landschaftsbau | hoch |
| Anschrift | Wetzgauer Straße 17, 73557 Mutlangen | hoch, vom Auftraggeber vorgegeben und in Verzeichnissen bestätigt |
| Telefon | 07171 405640 | mittel bis hoch, mehrere Verzeichnisse übereinstimmend |
| Öffnungszeiten | Mo bis Do 08:00 bis 17:00, Fr 08:00 bis 13:00 | mittel |
| Leistungsschwerpunkte | Pflanzungen, Gartenpflege, Gartenplanung, Teichbau, Baumpflege, Fällungen einschließlich Gefahrenfällung, Häckseln, Abfuhr und Entsorgung, Erdarbeiten | mittel |
| Bewertungen | zwei Bewertungen, Durchschnitt 5,0 | niedrig, sehr kleine Zahl, deshalb nicht auf der Seite verwendet |

**Nicht gefunden und deshalb leer gelassen:** Geschäftsführung,
Handelsregisternummer, Registergericht, Umsatzsteuer-Identifikationsnummer,
E-Mail-Adresse, Telefax, Gründungsjahr, eigene Website.

Quellen: Branchenverzeichnisse
[Das Örtliche](https://www.dasoertliche.de/Themen/K-S-Landschaftsbau-GmbH-Mutlangen-Wetzgauer-Str),
[Gelbe Seiten](https://www.gelbeseiten.de/gsbiz/5ed70193-56eb-4088-813f-a90d90abaa5f),
[golocal](https://www.golocal.de/mutlangen/gartenarchitektur-landschaftsarchitektur/k-s-garten-u-landschaftsbau-gmbh-2zuxW/),
[Ortsdienst](https://www.ortsdienst.de/baden-wuerttemberg/ostalbkreis/mutlangen/branchenbuch-landschaftsbau/k-und-s-garten-u-landschaftsbau-gmbh-bid280830/).

---

## 2. Von mir formuliert, fachlich üblich, aber nicht abgestimmt

**Leistungen** (`src/data/services.ts`)
- Die Auswahl der 13 Leistungen
- Alle Kurztexte, Einleitungen, Leistungsumfänge und Vorteile
- Alle Fragen und Antworten je Leistung

**Weitere Inhalte**
- Allgemeine Fragen und Antworten (`src/data/faq.ts`)
- Das Gartenjahr mit vier Jahreszeiten (`src/data/seasons.ts`)
- Der Ablauf in vier Schritten und die vier Argumente (`src/data/process.ts`)
- Die vier Werte auf der Seite Über uns
- Die vier Punkte auf der Karriereseite
- Das Einsatzgebiet mit 20 Orten (`src/data/areas.ts`), geografisch plausibel, aber nicht bestätigt
- Alle Überschriften und Claims, darunter "Wir bauen Gärten, die man nicht mehr verlassen möchte"

**Zusagen, die vertraglich relevant sind**
- "Vor-Ort-Termin kostenfrei und unverbindlich"
- "Angebot mit klaren Positionen und Mengen"
- "Eigenes Team, eigene Technik, eigener Maschinenpark"
- "Feste Ansprechperson", "dokumentierte Einsätze", "Fotodokumentation auf Wunsch"
- "Abtransport und fachgerechte Entsorgung auf Wunsch"

Jede dieser Aussagen steht mehrfach auf der Seite. Wenn eine davon nicht
zutrifft, bitte melden, dann formuliere ich um.

---

## 3. Grafiken

| Datei | Herkunft |
| --- | --- |
| `public/media/hero-garten.jpg` | Startbild, **KI-generiert und vom Auftraggeber beigesteuert**, kein Projekt des Betriebs |
| `public/media/vorher-beispiel.svg` | selbst gezeichnet, Ausgangslage im Vergleichsregler |
| `public/media/nachher-beispiel.svg` | selbst gezeichnet, Ergebnis im Vergleichsregler |
| `public/media/team-platzhalter.svg` | selbst gezeichnet, abstrahiertes Team |
| `public/media/karte-mutlangen.svg` | selbst gezeichnet, stilisierte Standortkarte, keine echte Karte |
| `public/media/og-standard.png` | selbst erzeugt, Vorschaubild beim Teilen |
| `public/media/farbpalette.png` | selbst erzeugt, Farbreferenz, kein Seitenelement |
| `src/components/BrandMark.tsx` | selbst gezeichnete Bildmarke, ein Blatt am Trieb |
| Höhenlinien in `src/components/Contour.tsx` | selbst gezeichnetes Erkennungszeichen |

Die Kundenstimme auf der Startseite ist absichtlich als Platzhalter
gekennzeichnet und enthält keinen erfundenen Namen.

---

## 4. Rechtliche Aussagen im Text

Geprüft und allgemein zutreffend. Im Einzelfall gelten kommunale Regelungen.

| Aussage | Grundlage |
| --- | --- |
| Starker Rückschnitt und Rodung von Hecken sind vom 1. März bis 30. September nicht zulässig, schonende Form- und Pflegeschnitte bleiben erlaubt | § 39 Absatz 5 Bundesnaturschutzgesetz |
| Für Fällungen kann eine Genehmigung nötig sein, abhängig von der Baumschutzsatzung der Gemeinde | kommunales Satzungsrecht |
| Mauern können ab bestimmter Höhe genehmigungspflichtig sein | Landesbauordnung Baden-Württemberg |
| Streusalz ist in vielen Kommunen eingeschränkt | kommunale Satzungen |
| Räum- und Streupflicht liegt bei Eigentümerinnen und Eigentümern | kommunale Satzungen |

Auf der Winterdienstseite steht bewusst "Den Umfang der Haftungsübertragung
regeln wir vertraglich" und nicht "wir übernehmen die Haftung". Eine
vollständige Haftungsübertragung ist rechtlich nicht pauschal möglich.

---

## 5. Herkunft der Vorlage

Die Seite basiert auf einem Entwurf, der zuvor für einen anderen Betrieb im
Ostalbkreis erstellt wurde. Struktur, Designsystem und Komponenten sind
übernommen, alle Inhalte und Stammdaten wurden ersetzt.
