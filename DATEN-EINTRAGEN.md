# Was vor dem Livegang noch fehlt

Stand: 26. August 2026. Alles hier ist entweder unbestätigt oder leer.
Reihenfolge nach Dringlichkeit.

---

## 1. Stammdaten bestätigen

Datei: `src/config/company.ts`

- [ ] Firmierung: `K & S Garten u. Landschaftsbau GmbH` (so steht sie in Branchenverzeichnissen, bitte gegen den Handelsregisterauszug prüfen)
- [ ] Anschrift: `Wetzgauer Straße 17, 73557 Mutlangen`
- [ ] Telefon: `07171 405640`
- [ ] Öffnungszeiten: `Mo bis Do 08:00 bis 17:00 Uhr`, `Fr 08:00 bis 13:00 Uhr`
- [ ] Koordinaten für die Kartenkarte (`lat`, `lng`) auf die genaue Hausnummer setzen

## 2. Fehlende Angaben nachtragen

Datei: `src/config/company.ts`

- [ ] **E-Mail-Adresse.** Solange leer, verlinkt die Seite überall nur das Formular.
- [ ] **Gründungsjahr.** Solange `0`, fehlt die Kennzahl "Jahre im Garten- und Landschaftsbau" auf Startseite und Über uns. Die Kachelreihe schrumpft dann automatisch von vier auf drei, es entsteht keine Lücke.
- [ ] Telefax, falls vorhanden
- [ ] Umsatzsteuer-Identifikationsnummer
- [ ] Geschäftsführung für den Abschnitt "Ansprechpartner" auf Über uns
- [ ] Link zum Google-Unternehmensprofil, Instagram, Facebook

## 3. Rechtstexte

Beide Dateien sind absichtlich leer. Solange sie leer sind, zeigt die Seite
einen kurzen Hinweis statt eines erfundenen Textes.

- [ ] `src/content/impressum.html`
- [ ] `src/content/datenschutz.html`

**Als GmbH sind im Impressum zusätzlich Pflicht:**

- Vertretungsberechtigte Geschäftsführung
- Registergericht und Handelsregisternummer (HRB)
- Umsatzsteuer-Identifikationsnummer nach § 27 a UStG, falls vorhanden
- Bei Mitgliedschaft in einer Kammer: Kammer, Berufsbezeichnung, Verleihungsstaat

Beide Dateien nehmen fertiges HTML auf, also `<h2>`, `<p>`, `<ul>`, `<table>`.
Eine Formatierung im Code ist nicht nötig.

Beispiel für den Anfang des Impressums:

```html
<h2>Angaben gemäß § 5 DDG</h2>
<p>K & S Garten u. Landschaftsbau GmbH<br />Wetzgauer Straße 17<br />73557 Mutlangen</p>

<h2>Vertreten durch</h2>
<p>Geschäftsführer: Vorname Nachname</p>

<h2>Registereintrag</h2>
<p>Handelsregister: HRB 000000<br />Registergericht: Amtsgericht Ulm</p>

<h2>Kontakt</h2>
<p>Telefon: 07171 405640<br />E-Mail: info@example.de</p>
```

Die Datenschutzerklärung muss zum tatsächlichen Betrieb passen. Wichtig sind
Hosting, Server-Logdateien, Kontaktformular und, falls später ergänzt,
Kartendienste oder Analysewerkzeuge.

## 4. Bilder und Nachweise

- [ ] **Echte Projektfotos.** Die Referenzseite ist bewusst leer, bis Fotos vorliegen.
- [ ] Mindestens ein echtes Vorher-Nachher-Bildpaar
- [ ] Foto vom Team oder vom Fuhrpark für die Seite Über uns
- [ ] Startbild in mindestens 2400 px Breite. Das aktuelle Bild ist KI-erzeugt und nur ein Entwurf.
- [ ] Kundenstimmen mit Namen und Ort
- [ ] Nachweise wie Meisterbrief, Mitgliedschaften, Zertifikate

## 5. Fachliche Freigabe der Texte

Welche Inhalte recherchiert und welche formuliert sind, steht vollständig in
`INHALTE-HERKUNFT.md`. Kurz gefasst: alle Leistungstexte, Fragen, das
Gartenjahr, der Ablauf und sämtliche Claims sind branchenüblich formuliert,
aber nicht mit dem Betrieb abgestimmt.

- [ ] Werden alle 13 Leistungen tatsächlich angeboten?
- [ ] Stimmen die Aufgaben im Gartenjahr (`src/data/seasons.ts`)?
- [ ] Stimmt das Einsatzgebiet (`src/data/areas.ts`)?
- [ ] Stimmen die Aussagen zu Ablauf, Entsorgung und Terminen?
- [ ] Ist die Zusage "kostenloser Vor-Ort-Termin" so gewollt? Sie steht an mehreren Stellen und ist ein starkes Verkaufsargument, aber eben auch eine Zusage.
- [ ] Soll der Claim "Wir bauen Gärten, die man nicht mehr verlassen möchte" so bleiben?

## 6. Formularversand einrichten

- [ ] `NEXT_PUBLIC_FORM_ENDPOINT` in `.env.local` setzen

Ohne Endpunkt öffnet das Formular nur das Mailprogramm der Besucher. Für den
Livebetrieb ist ein Endpunkt nötig, entweder ein kleines Skript auf dem
Webspace oder ein Formulardienst mit Sitz in der EU und
Auftragsverarbeitungsvertrag.

## 7. Domain und Livegang

- [ ] Zieldomain festlegen
- [ ] `NEXT_PUBLIC_SITE_URL` in `.env.local` auf die echte Domain setzen
- [ ] Nach dem Livegang Sitemap in der Google Search Console einreichen
- [ ] Google-Unternehmensprofil anlegen oder übernehmen und mit der Website verknüpfen
