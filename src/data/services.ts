export type ServiceFaq = { q: string; a: string };

export type Service = {
  slug: string;
  title: string;
  navTitle: string;
  icon: string;
  teaser: string;
  intro: string;
  bullets: string[];
  highlights: { title: string; text: string }[];
  faq: ServiceFaq[];
  seoTitle: string;
  seoDescription: string;
  featured?: boolean;
};

/**
 * Leistungsinhalte fuer den ersten Entwurf.
 * Fachlich ueblich fuer den Garten- und Landschaftsbau, aber noch nicht mit
 * K & S Landschaftsbau abgestimmt. Bitte pruefen, kuerzen oder ergaenzen.
 */
const serviceList: Service[] = [
  {
    slug: 'gartenplanung',
    title: 'Gartenplanung und Gartengestaltung',
    navTitle: 'Gartenplanung',
    icon: 'PencilRuler',
    featured: true,
    teaser:
      'Vom ersten Entwurf bis zum fertigen Garten: Wir planen Ihre Freifläche so, dass sie zu Grundstück, Haus und Alltag passt.',
    intro:
      'Ein guter Garten entsteht nicht zufällig. Wir schauen uns Ihr Grundstück vor Ort an, klären Wünsche, Budget und Pflegeaufwand und entwickeln daraus einen Entwurf, der im Alltag funktioniert. Sie sehen vorab, was entsteht, und wissen, was es kostet.',
    bullets: [
      'Beratung und Aufmaß direkt bei Ihnen vor Ort',
      'Entwurf mit Wegeführung, Aufenthaltsbereichen und Pflanzkonzept',
      'Auswahl standortgerechter Pflanzen für Sonne, Schatten und Boden',
      'Abstimmung von Materialien, Farben und Oberflächen',
      'Kostenschätzung und transparentes Angebot',
      'Umsetzung in Bauabschnitten, wenn das Budget es erfordert',
    ],
    highlights: [
      {
        title: 'Alles aus einer Hand',
        text: 'Planung, Bau und spätere Pflege bleiben bei einem Ansprechpartner. Das spart Abstimmung und verhindert Schnittstellenprobleme.',
      },
      {
        title: 'Pflegeaufwand mitgedacht',
        text: 'Wir planen so, dass der Garten zu Ihrer verfügbaren Zeit passt. Pflegeleicht ist eine Entscheidung, die früh getroffen wird.',
      },
      {
        title: 'Klare Kosten',
        text: 'Sie erhalten ein nachvollziehbares Angebot mit Positionen und Mengen, kein grobes Pauschalgefühl.',
      },
    ],
    faq: [
      {
        q: 'Was kostet eine Gartenplanung?',
        a: 'Das hängt von Größe und Tiefe der Planung ab. Das Erstgespräch vor Ort ist bei uns kostenfrei und unverbindlich. Erst danach besprechen wir, welcher Planungsumfang sinnvoll ist.',
      },
      {
        q: 'Wie lange dauert es vom Entwurf bis zur Umsetzung?',
        a: 'Nach dem Vor-Ort-Termin erhalten Sie in der Regel innerhalb weniger Tage eine Rückmeldung. Der Umsetzungstermin richtet sich nach Umfang, Jahreszeit und aktueller Auslastung.',
      },
      {
        q: 'Können wir den Garten in Etappen bauen?',
        a: 'Ja. Wir planen das Gesamtbild und setzen es in sinnvollen Bauabschnitten um, damit spätere Etappen keine fertigen Bereiche wieder aufreißen.',
      },
    ],
    seoTitle: 'Gartenplanung und Gartengestaltung im Ostalbkreis',
    seoDescription:
      'Gartenplanung von K & S Landschaftsbau aus Mutlangen: Entwurf, Pflanzkonzept und Umsetzung für Privatgärten im Ostalbkreis. Kostenlose Erstberatung vor Ort.',
  },
  {
    slug: 'gartenpflege',
    title: 'Gartenpflege',
    navTitle: 'Gartenpflege',
    icon: 'Leaf',
    featured: true,
    teaser:
      'Regelmäßig oder einmalig: Rasen, Beete, Hecken und Gehölze bleiben in Form, ohne dass Sie sich kümmern müssen.',
    intro:
      'Ein gepflegter Garten braucht Kontinuität. Wir übernehmen die Pflege ganzjährig nach festem Turnus oder punktuell, wenn Sie Unterstützung brauchen. Auf Wunsch mit fester Ansprechperson und wiederkehrenden Terminen, die Sie nicht jedes Mal neu vereinbaren müssen.',
    bullets: [
      'Rasenpflege inklusive Mähen, Vertikutieren, Düngen und Nachsaat',
      'Beetpflege, Rückschnitt von Stauden und Bodendeckern',
      'Heckenschnitt in Form und auf Zielhöhe',
      'Gehölzschnitt und Verjüngung',
      'Laubräumung und Sauberhaltung von Wegen und Flächen',
      'Fachgerechte Entsorgung des Grünschnitts',
    ],
    highlights: [
      {
        title: 'Feste Pflegeintervalle',
        text: 'Sie legen den Rhythmus fest, wir kommen automatisch. Kein Nachtelefonieren, keine vergessenen Termine.',
      },
      {
        title: 'Richtiger Zeitpunkt',
        text: 'Schnitt und Düngung erfolgen zum fachlich richtigen Zeitpunkt im Jahresverlauf, nicht dann, wenn gerade Zeit ist.',
      },
      {
        title: 'Auch für Verwaltungen',
        text: 'Wohnanlagen, Gewerbeflächen und Kommunen betreuen wir mit abgestimmten Leistungsverzeichnissen.',
      },
    ],
    faq: [
      {
        q: 'Kann ich die Pflege auch nur einmal im Jahr beauftragen?',
        a: 'Ja. Viele Kundinnen und Kunden starten mit einem einmaligen Frühjahrs- oder Herbsteinsatz und entscheiden danach, ob ein regelmäßiger Turnus sinnvoll ist.',
      },
      {
        q: 'Muss ich beim Termin zu Hause sein?',
        a: 'Nein. Sobald wir die Flächen und Ihre Wünsche kennen, arbeiten wir eigenständig. Sie erhalten eine Rückmeldung nach dem Einsatz.',
      },
      {
        q: 'Wird der Grünschnitt mitgenommen?',
        a: 'Auf Wunsch übernehmen wir Abtransport und fachgerechte Entsorgung. Alternativ bleibt das Material bei Ihnen zur Kompostierung.',
      },
    ],
    seoTitle: 'Gartenpflege in Mutlangen und Umgebung',
    seoDescription:
      'Gartenpflege vom Fachbetrieb: Rasen, Hecken, Beete und Gehölze, regelmäßig oder einmalig. K & S Landschaftsbau aus Mutlangen, Ostalbkreis.',
  },
  {
    slug: 'pflaster-und-wegebau',
    title: 'Pflaster- und Wegebau',
    navTitle: 'Pflaster und Wege',
    icon: 'Grid2x2',
    featured: true,
    teaser:
      'Einfahrten, Zugänge und Hofflächen, die dauerhaft eben bleiben. Fachgerechter Unterbau statt schneller Optik.',
    intro:
      'Ob Zufahrt, Hofeinfahrt oder Gartenweg: Die Haltbarkeit entscheidet sich unter der Oberfläche. Wir bauen Tragschichten nach Belastung auf, planen die Entwässerung mit und setzen das Pflaster maßhaltig. So bleiben Flächen auch nach Jahren eben und tragfähig.',
    bullets: [
      'Aushub, Tragschichtaufbau und Verdichtung nach Belastungsklasse',
      'Betonpflaster, Natursteinpflaster und Plattenbeläge',
      'Rand- und Bordsteine, Rinnen und Übergänge',
      'Entwässerung, Gefälleplanung und Versickerung',
      'Treppen und Podeste im Außenbereich',
      'Sanierung abgesackter oder gerissener Bestandsflächen',
    ],
    highlights: [
      {
        title: 'Tragfähig geplant',
        text: 'Der Aufbau richtet sich nach der tatsächlichen Nutzung. Eine Pkw-Zufahrt braucht mehr als ein Gartenweg.',
      },
      {
        title: 'Wasser richtig geführt',
        text: 'Gefälle und Versickerung werden von Anfang an mitgeplant, damit kein Wasser Richtung Haus läuft.',
      },
      {
        title: 'Saubere Baustelle',
        text: 'Wir arbeiten in klaren Abschnitten und halten Ihr Grundstück auch während der Bauzeit begehbar.',
      },
    ],
    faq: [
      {
        q: 'Wie lange dauert eine neue Einfahrt?',
        a: 'Für eine typische Hofeinfahrt planen wir je nach Größe und Untergrund mehrere Arbeitstage ein. Den genauen Ablauf legen wir vor Baubeginn mit Ihnen fest.',
      },
      {
        q: 'Kann die Fläche während der Arbeiten genutzt werden?',
        a: 'In der Regel arbeiten wir so, dass ein Zugang zum Haus jederzeit möglich bleibt. Die Zufahrt ist während der Bauzeit zeitweise gesperrt.',
      },
      {
        q: 'Muss die alte Fläche komplett entfernt werden?',
        a: 'Das entscheidet der Zustand des Unterbaus. Wir prüfen vor Ort, ob eine Sanierung ausreicht oder ein Neuaufbau die wirtschaftlichere Lösung ist.',
      },
    ],
    seoTitle: 'Pflasterarbeiten und Wegebau im Ostalbkreis',
    seoDescription:
      'Pflasterarbeiten für Einfahrt, Hof und Gartenweg mit fachgerechtem Unterbau und geplanter Entwässerung. K & S Landschaftsbau, Mutlangen.',
  },
  {
    slug: 'terrassenbau',
    title: 'Terrassenbau',
    navTitle: 'Terrassen',
    icon: 'Umbrella',
    featured: true,
    teaser:
      'Der meistgenutzte Platz im Garten. Wir bauen Terrassen aus Naturstein, Keramik, Beton oder Holz, passend zum Haus.',
    intro:
      'Eine Terrasse ist der Übergang zwischen Haus und Garten. Wir stimmen Belag, Höhenlage und Anschlüsse so ab, dass die Fläche im Alltag funktioniert: schwellenarm, richtig entwässert und in einer Größe, die zu Ihrem Möblierungswunsch passt.',
    bullets: [
      'Beläge aus Naturstein, Keramik, Betonwerkstein oder Holz',
      'Fachgerechter Unterbau, Drainage und Gefälle',
      'Barrierearme Anschlüsse an Türen und Übergänge',
      'Stufen, Podeste und Sitzmauern',
      'Randeinfassungen und Anschluss an Rasen oder Beet',
      'Sanierung bestehender Terrassenflächen',
    ],
    highlights: [
      {
        title: 'Passend dimensioniert',
        text: 'Wir planen die Fläche anhand Ihrer Möbel und Ihres Nutzungsverhaltens, nicht nach Standardmaß.',
      },
      {
        title: 'Materialberatung',
        text: 'Rutschfestigkeit, Aufheizverhalten, Pflegeaufwand und Preis unterscheiden sich deutlich. Wir zeigen Ihnen Muster.',
      },
      {
        title: 'Sauberer Anschluss',
        text: 'Türschwellen, Lichtschächte und Fassade werden fachgerecht angeschlossen, damit keine Feuchtigkeit ins Haus zieht.',
      },
    ],
    faq: [
      {
        q: 'Welcher Belag ist am pflegeleichtesten?',
        a: 'Keramik und dichte Natursteine nehmen wenig Schmutz auf und sind einfach zu reinigen. Holz wirkt wärmer, braucht aber regelmäßige Pflege. Wir vergleichen die Optionen im Gespräch.',
      },
      {
        q: 'Kann eine bestehende Terrasse erneuert werden?',
        a: 'Häufig ja. Wir prüfen Unterbau und Entwässerung und sagen Ihnen offen, ob ein Belagswechsel ausreicht.',
      },
      {
        q: 'Wann ist die beste Bauzeit?',
        a: 'Terrassen lassen sich fast ganzjährig bauen. Nur bei dauerhaftem Frost pausieren einzelne Arbeitsschritte.',
      },
    ],
    seoTitle: 'Terrassenbau in Mutlangen, Schwäbisch Gmünd und Umgebung',
    seoDescription:
      'Terrassenbau aus Naturstein, Keramik, Beton oder Holz mit fachgerechtem Unterbau. K & S Landschaftsbau, Garten- und Landschaftsbau aus Mutlangen.',
  },
  {
    slug: 'zaun-und-sichtschutz',
    title: 'Zaun und Sichtschutz',
    navTitle: 'Zaun und Sichtschutz',
    icon: 'Fence',
    featured: true,
    teaser:
      'Grundstücksgrenzen, die sauber stehen: Zäune, Tore, Sichtschutzelemente und Hecken als grüne Alternative.',
    intro:
      'Ein Zaun muss lotrecht stehen, sicher gegründet sein und zum Haus passen. Wir setzen Pfosten frostsicher, richten die Linie sauber aus und berücksichtigen Geländesprünge. Auf Wunsch kombinieren wir bauliche Elemente mit Pflanzungen.',
    bullets: [
      'Doppelstabmatten, Holzzäune, Metallzäune und Gabionen',
      'Sichtschutzelemente aus Holz, WPC und Aluminium',
      'Hof- und Gartentore, auch mit Antrieb vorbereitet',
      'Frostsichere Pfostengründung und Höhenausgleich am Hang',
      'Heckenpflanzung als grüner Sichtschutz',
      'Reparatur und Austausch bestehender Anlagen',
    ],
    highlights: [
      {
        title: 'Grenzen im Blick',
        text: 'Wir sprechen Grenzverlauf und Abstände vorab mit Ihnen durch, damit es später keine Diskussion mit den Nachbarn gibt.',
      },
      {
        title: 'Langlebig gegründet',
        text: 'Punktfundamente in ausreichender Tiefe verhindern, dass Pfosten nach einem Winter schief stehen.',
      },
      {
        title: 'Grün oder baulich',
        text: 'Hecke, Zaun oder Kombination: Wir zeigen Ihnen, was in Pflege, Wirkung und Kosten den Unterschied macht.',
      },
    ],
    faq: [
      {
        q: 'Wie hoch darf mein Zaun sein?',
        a: 'Das regeln Bebauungsplan und Nachbarrecht der Gemeinde. Wir weisen Sie auf die üblichen Grenzen hin, die verbindliche Auskunft gibt Ihre Gemeinde.',
      },
      {
        q: 'Was ist günstiger, Hecke oder Zaun?',
        a: 'In der Anschaffung meist die Hecke, dafür braucht sie Jahre bis zur vollen Wirkung und dauerhaft Pflege. Ein Zaun wirkt sofort und ist wartungsarm.',
      },
      {
        q: 'Können Sie einen bestehenden Zaun ergänzen?',
        a: 'Ja, sofern System und Maße noch verfügbar sind. Wir prüfen das anhand von Fotos oder vor Ort.',
      },
    ],
    seoTitle: 'Zaunbau und Sichtschutz im Ostalbkreis',
    seoDescription:
      'Zäune, Tore, Sichtschutz und Hecken vom Fachbetrieb K & S Landschaftsbau in Mutlangen. Frostsichere Gründung, saubere Ausführung.',
  },
  {
    slug: 'baum-und-heckenpflege',
    title: 'Baum- und Heckenpflege',
    navTitle: 'Baum und Hecke',
    icon: 'TreeDeciduous',
    featured: true,
    teaser:
      'Schnitt zum richtigen Zeitpunkt, sichere Arbeit in der Höhe und fachgerechte Entsorgung des Schnittguts.',
    intro:
      'Bäume und Hecken reagieren empfindlich auf falschen Schnitt. Wir arbeiten nach fachlichen Regeln, achten auf Schnittzeitpunkt und Vogelschutz und sichern die Arbeitsbereiche ab. Auch schwierige Standorte an Gebäuden oder Leitungen sind kein Problem.',
    bullets: [
      'Formschnitt und Zielhöhenschnitt bei Hecken',
      'Kronenpflege, Auslichtung und Totholzentnahme',
      'Rückschnitt von Obstgehölzen',
      'Fällungen und Gefahrenfällungen mit Absicherung',
      'Wurzelstockfräsung nach der Fällung',
      'Häckseln vor Ort, Abfuhr und fachgerechte Entsorgung',
    ],
    highlights: [
      {
        title: 'Schnittzeitpunkt beachtet',
        text: 'Zwischen 1. März und 30. September gelten für Hecken und Gehölze gesetzliche Einschränkungen. Schonende Form- und Pflegeschnitte bleiben zulässig.',
      },
      {
        title: 'Sicher gearbeitet',
        text: 'Absicherung, geeignete Technik und geschultes Personal, gerade bei Arbeiten in der Nähe von Gebäuden und Wegen.',
      },
      {
        title: 'Sauber hinterlassen',
        text: 'Nach dem Einsatz sind Flächen und Wege gereinigt und das Schnittgut abgefahren.',
      },
    ],
    faq: [
      {
        q: 'Wann darf eine Hecke geschnitten werden?',
        a: 'Starker Rückschnitt und Rodung sind nach Bundesnaturschutzgesetz vom 1. März bis 30. September nicht zulässig. Schonende Form- und Pflegeschnitte sind in diesem Zeitraum erlaubt, sofern keine Vögel brüten.',
      },
      {
        q: 'Brauche ich für eine Fällung eine Genehmigung?',
        a: 'Das hängt von der Baumschutzsatzung Ihrer Gemeinde und von Art und Stammumfang ab. Wir sagen Ihnen, worauf zu achten ist. Die Genehmigung erteilt die Gemeinde.',
      },
      {
        q: 'Wird der Wurzelstock mit entfernt?',
        a: 'Auf Wunsch fräsen wir den Stock nach der Fällung aus, sodass die Fläche wieder nutzbar oder bepflanzbar ist.',
      },
    ],
    seoTitle: 'Baumpflege, Heckenschnitt und Fällungen im Ostalbkreis',
    seoDescription:
      'Baum- und Heckenpflege vom Fachbetrieb: Formschnitt, Kronenpflege, Fällung und Wurzelstockfräsung. K & S Landschaftsbau aus Mutlangen.',
  },
  {
    slug: 'rasen-und-rollrasen',
    title: 'Rasen und Rollrasen',
    navTitle: 'Rasen',
    icon: 'Sprout',
    teaser:
      'Neuanlage, Rollrasen oder Sanierung: Eine gute Rasenfläche beginnt beim Bodenaufbau, nicht beim Saatgut.',
    intro:
      'Ob Saat oder Rollrasen, entscheidend ist die Vorarbeit. Wir lockern den Boden, bringen bei Bedarf Rasentragschicht ein, modellieren die Fläche und sorgen für den richtigen Abzug. Danach steht Ihnen eine belastbare, ebene Fläche zur Verfügung.',
    bullets: [
      'Bodenbearbeitung, Feinplanie und Bodenverbesserung',
      'Ansaat mit standortgerechten Saatgutmischungen',
      'Verlegung von Rollrasen für sofortige Nutzbarkeit',
      'Sanierung verfilzter oder lückiger Bestandsflächen',
      'Vertikutieren, Aerifizieren und Nachsaat',
      'Düngeplan für das erste Jahr',
    ],
    highlights: [
      {
        title: 'Sofort grün',
        text: 'Rollrasen ist nach kurzer Anwachszeit begehbar. Das lohnt sich besonders dort, wo schnell Ordnung einkehren soll.',
      },
      {
        title: 'Richtig vorbereitet',
        text: 'Ohne tragfähigen, unkrautfreien Untergrund hält keine Rasenfläche. Der Aufwand steckt in der Vorarbeit.',
      },
      {
        title: 'Pflegeplan inklusive',
        text: 'Sie erhalten eine kurze Anleitung für Bewässerung, Schnitt und Düngung in den ersten Wochen.',
      },
    ],
    faq: [
      {
        q: 'Rollrasen oder Ansaat, was ist besser?',
        a: 'Rollrasen ist schneller nutzbar und unkrautärmer, kostet aber mehr. Eine Ansaat ist günstiger, braucht jedoch mehrere Wochen und konsequente Pflege in der Anwachsphase.',
      },
      {
        q: 'Wie oft muss neuer Rasen gewässert werden?',
        a: 'In den ersten zwei bis drei Wochen täglich und durchdringend. Wir geben Ihnen zum Termin genaue Mengen und Zeiten mit.',
      },
      {
        q: 'Kann ein alter Rasen gerettet werden?',
        a: 'Oft ja. Vertikutieren, Aerifizieren, Nachsaat und ein passender Düngeplan bringen viele Flächen wieder in Form.',
      },
    ],
    seoTitle: 'Rollrasen und Rasenneuanlage in Mutlangen und Umgebung',
    seoDescription:
      'Rasenneuanlage, Rollrasen und Rasensanierung mit fachgerechter Bodenvorbereitung. K & S Landschaftsbau, Garten- und Landschaftsbau, Ostalbkreis.',
  },
  {
    slug: 'mauern-und-natursteinarbeiten',
    title: 'Mauern und Natursteinarbeiten',
    navTitle: 'Mauern und Naturstein',
    icon: 'BrickWall',
    teaser:
      'Hangsicherung, Sitzmauern und Trockenmauern. Statisch durchdacht und optisch passend zum Grundstück.',
    intro:
      'Mauern gliedern Grundstücke, fangen Höhen ab und schaffen nutzbare Ebenen. Wir bauen sie mit tragfähiger Gründung und funktionierender Hinterfüllung, damit Wasserdruck und Frost der Konstruktion nichts anhaben.',
    bullets: [
      'Trockenmauern aus Naturstein',
      'Stützmauern und Winkelstützelemente zur Hangsicherung',
      'Sitz- und Gliederungsmauern im Garten',
      'Gabionen als robuste Alternative',
      'Fundament, Drainage und fachgerechte Hinterfüllung',
      'Treppenanlagen im Gelände',
    ],
    highlights: [
      {
        title: 'Auf Dauer standsicher',
        text: 'Frostsichere Gründung und Drainage sind Pflicht, nicht Kür. Genau hier entscheidet sich die Lebensdauer.',
      },
      {
        title: 'Lebensraum inklusive',
        text: 'Eine Trockenmauer bietet Insekten und Eidechsen Lebensraum und wirkt gleichzeitig sehr natürlich.',
      },
      {
        title: 'Material zur Umgebung',
        text: 'Wir wählen Steinart und Format so, dass die Mauer zu Haus und Landschaft passt.',
      },
    ],
    faq: [
      {
        q: 'Ab welcher Höhe braucht eine Mauer eine Genehmigung?',
        a: 'Das richtet sich nach Landesbauordnung und örtlichen Vorgaben, häufig ab etwa zwei Metern oder an Grenzen. Wir weisen Sie auf den Prüfbedarf hin, die Auskunft erteilt die Baurechtsbehörde.',
      },
      {
        q: 'Was kostet ein Quadratmeter Trockenmauer?',
        a: 'Das hängt stark von Steinart, Höhe und Zugänglichkeit ab. Nach dem Vor-Ort-Termin erhalten Sie eine belastbare Kalkulation.',
      },
      {
        q: 'Können Sie eine bestehende Mauer sanieren?',
        a: 'Ja. Wir prüfen Gründung und Hinterfüllung und sagen Ihnen ehrlich, ob Reparatur oder Neubau sinnvoller ist.',
      },
    ],
    seoTitle: 'Natursteinmauern und Hangsicherung im Ostalbkreis',
    seoDescription:
      'Trockenmauern, Stützmauern und Gabionen mit fachgerechter Gründung und Drainage. K & S Landschaftsbau, Garten- und Landschaftsbau in Mutlangen.',
  },
  {
    slug: 'teich-und-wasser',
    title: 'Teich und Wasser im Garten',
    navTitle: 'Teich und Wasser',
    icon: 'WavesHorizontal',
    teaser:
      'Teiche, Wasserläufe und Wasserbecken. Geplant so, dass Technik und Bepflanzung dauerhaft im Gleichgewicht bleiben.',
    intro:
      'Wasser verändert einen Garten wie kein anderes Element. Damit es dauerhaft Freude macht, müssen Tiefenzonen, Bepflanzung und Technik zusammenpassen. Wir planen die Anlage von Anfang an so, dass der Pflegeaufwand überschaubar bleibt.',
    bullets: [
      'Schwimm- und Naturteiche',
      'Zierteiche mit Bepflanzung und Tiefenzonen',
      'Wasserläufe, Quellsteine und Wasserbecken',
      'Abdichtung, Filtertechnik und Pumpenauslegung',
      'Uferbereiche und Randgestaltung',
      'Sanierung und Reinigung bestehender Teiche',
    ],
    highlights: [
      {
        title: 'Technik richtig ausgelegt',
        text: 'Filter und Pumpe werden auf Volumen und Besatz abgestimmt. Unterdimensionierte Technik ist die häufigste Ursache für Probleme.',
      },
      {
        title: 'Sicherheit mitgedacht',
        text: 'Bei Familien mit kleinen Kindern besprechen wir Tiefen, Randgestaltung und Absicherung vorab.',
      },
      {
        title: 'Bepflanzung als Filter',
        text: 'Eine durchdachte Pflanzenauswahl senkt Nährstoffe im Wasser und reduziert Algen ganz ohne Chemie.',
      },
    ],
    faq: [
      {
        q: 'Wie viel Pflege braucht ein Teich?',
        a: 'Ein gut geplanter Teich braucht wenige Einsätze im Jahr, vor allem im Frühjahr und Herbst. Auf Wunsch übernehmen wir das im Rahmen der Gartenpflege.',
      },
      {
        q: 'Kann ein alter Teich saniert werden?',
        a: 'In vielen Fällen ja. Wir prüfen Abdichtung, Technik und Bepflanzung und schlagen die wirtschaftlichste Lösung vor.',
      },
      {
        q: 'Braucht ein Gartenteich eine Genehmigung?',
        a: 'Kleine Gartenteiche sind in der Regel genehmigungsfrei. Bei größeren Anlagen oder Eingriffen in den Wasserhaushalt klären wir den Bedarf vorab.',
      },
    ],
    seoTitle: 'Teichbau und Wasseranlagen im Garten, Ostalbkreis',
    seoDescription:
      'Schwimmteich, Zierteich, Wasserlauf oder Quellstein vom Fachbetrieb. Planung, Bau und Sanierung durch K & S Landschaftsbau aus Mutlangen.',
  },
  {
    slug: 'bewaesserung',
    title: 'Bewässerungsanlagen',
    navTitle: 'Bewässerung',
    icon: 'Droplets',
    teaser:
      'Automatische Bewässerung für Rasen und Beete. Wassersparend gesteuert, im Winter fachgerecht entleert.',
    intro:
      'Eine automatische Bewässerung nimmt Ihnen im Sommer die tägliche Arbeit ab und versorgt Pflanzen gleichmäßiger als der Gartenschlauch. Wir planen Regner und Tropfleitungen nach Fläche und Wasserdruck und richten die Steuerung so ein, dass kein Wasser verschwendet wird.',
    bullets: [
      'Planung nach Flächenzuschnitt, Druck und Durchfluss',
      'Versenkregner für Rasenflächen',
      'Tropfbewässerung für Beete, Hecken und Kübel',
      'Steuerung mit Zeitprogramm und Regensensor',
      'Anbindung an Zisterne oder Hauswasseranschluss',
      'Winterfeste Entleerung und Frühjahrsinbetriebnahme',
    ],
    highlights: [
      {
        title: 'Wasser sparen',
        text: 'Gezielte Gaben zur richtigen Tageszeit verbrauchen deutlich weniger als manuelles Gießen.',
      },
      {
        title: 'Nachrüstbar',
        text: 'Auch in bestehenden Gärten lässt sich eine Anlage einbauen. Wir arbeiten dabei so, dass Rasenflächen schnell wieder zuwachsen.',
      },
      {
        title: 'Service im Jahresverlauf',
        text: 'Auf Wunsch übernehmen wir Einwinterung und Inbetriebnahme, damit keine Leitung einfriert.',
      },
    ],
    faq: [
      {
        q: 'Lässt sich eine Anlage in einen fertigen Garten einbauen?',
        a: 'Ja. Die Leitungen werden mit schmalen Schlitzen verlegt, die nach kurzer Zeit kaum noch zu sehen sind.',
      },
      {
        q: 'Kann Regenwasser genutzt werden?',
        a: 'Wenn eine Zisterne vorhanden ist und Druck sowie Fördermenge passen, binden wir sie ein. Wir prüfen das im Vorfeld.',
      },
      {
        q: 'Was passiert im Winter?',
        a: 'Die Anlage wird entleert und abgesperrt. Ohne diesen Schritt drohen Frostschäden an Leitungen und Ventilen.',
      },
    ],
    seoTitle: 'Automatische Gartenbewässerung im Ostalbkreis',
    seoDescription:
      'Bewässerungsanlagen für Rasen und Beete: Planung, Einbau, Steuerung und Wartung. K & S Landschaftsbau, Garten- und Landschaftsbau, Mutlangen.',
  },
  {
    slug: 'erdarbeiten',
    title: 'Erdarbeiten und Geländemodellierung',
    navTitle: 'Erdarbeiten',
    icon: 'Shovel',
    teaser:
      'Aushub, Modellierung und Baustellenlogistik mit eigener Technik. Die Grundlage für jedes Außenprojekt.',
    intro:
      'Bevor gestaltet wird, muss das Gelände stimmen. Wir übernehmen Aushub, Auffüllung und Modellierung, richten Höhen ein und schaffen die Voraussetzungen für Wege, Terrassen und Pflanzflächen.',
    bullets: [
      'Aushub für Terrassen, Wege, Fundamente und Teiche',
      'Geländemodellierung und Höhenausgleich',
      'Bodenaustausch und Bodenverbesserung',
      'Abtransport und Entsorgung von Aushub',
      'Anlieferung von Substraten, Schotter und Splitt',
      'Baustellenzufahrten und Zwischenlagerung',
    ],
    highlights: [
      {
        title: 'Eigene Maschinen',
        text: 'Kurze Wege und flexible Termine, weil Technik und Personal aus dem eigenen Betrieb kommen.',
      },
      {
        title: 'Rücksicht auf den Bestand',
        text: 'Wir schützen Bäume, Leitungen und angrenzende Flächen und arbeiten mit passender Maschinengröße.',
      },
      {
        title: 'Sauber dokumentiert',
        text: 'Massen und Entsorgungswege werden nachvollziehbar abgerechnet.',
      },
    ],
    faq: [
      {
        q: 'Kommen Sie auch auf schmale Grundstücke?',
        a: 'Ja. Wir wählen die Maschinengröße nach Zufahrt und Platzverhältnissen. Häufig lässt sich mehr realisieren als gedacht.',
      },
      {
        q: 'Wer entsorgt den Aushub?',
        a: 'Auf Wunsch übernehmen wir Abtransport und Entsorgung komplett, inklusive Nachweis.',
      },
      {
        q: 'Werden Leitungen vorher geprüft?',
        a: 'Vor Aushubarbeiten klären wir bekannte Leitungsverläufe. Bitte halten Sie vorhandene Pläne bereit.',
      },
    ],
    seoTitle: 'Erdarbeiten und Geländemodellierung im Ostalbkreis',
    seoDescription:
      'Aushub, Modellierung, Bodenaustausch und Entsorgung mit eigener Technik. K & S Landschaftsbau, Garten- und Landschaftsbau aus Mutlangen.',
  },
  {
    slug: 'gruenflaechenpflege',
    title: 'Grünflächenpflege für Gewerbe und Kommunen',
    navTitle: 'Grünflächenpflege',
    icon: 'Building2',
    teaser:
      'Dauerhaft gepflegte Außenanlagen für Wohnanlagen, Betriebe und öffentliche Flächen. Nach festem Leistungsverzeichnis.',
    intro:
      'Außenanlagen sind die Visitenkarte eines Objekts. Wir betreuen Wohnanlagen, Gewerbeobjekte und öffentliche Flächen mit klar definierten Leistungen, festen Turnussen und nachvollziehbarer Abrechnung.',
    bullets: [
      'Pflege von Rasen, Beeten, Hecken und Gehölzen',
      'Sauberhaltung von Wegen, Stellplätzen und Zufahrten',
      'Laubräumung und Grünschnittentsorgung',
      'Verkehrssicherheitskontrolle an Gehölzen',
      'Pflege nach abgestimmtem Leistungsverzeichnis',
      'Feste Ansprechperson und dokumentierte Einsätze',
    ],
    highlights: [
      {
        title: 'Kalkulierbar',
        text: 'Jahrespreise auf Basis eines abgestimmten Leistungsverzeichnisses statt Einzelabrechnung nach Aufwand.',
      },
      {
        title: 'Verlässliche Turnusse',
        text: 'Geplante Einsatztermine über das Jahr, damit Flächen nie länger ungepflegt bleiben.',
      },
      {
        title: 'Ein Ansprechpartner',
        text: 'Verwaltung, Hausmeisterdienst und Eigentümer haben denselben Kontakt für alle Grünflächenthemen.',
      },
    ],
    faq: [
      {
        q: 'Erstellen Sie Angebote nach Leistungsverzeichnis?',
        a: 'Ja. Wir kalkulieren auf Basis Ihres Leistungsverzeichnisses oder erstellen gemeinsam mit Ihnen eines.',
      },
      {
        q: 'Übernehmen Sie auch die Verkehrssicherheit von Bäumen?',
        a: 'Sichtkontrollen und daraus abgeleitete Pflegemaßnahmen können Teil des Vertrags sein. Sprechen Sie uns darauf an.',
      },
      {
        q: 'Wie werden Einsätze dokumentiert?',
        a: 'Sie erhalten eine Rückmeldung zu den ausgeführten Arbeiten, auf Wunsch mit Fotodokumentation.',
      },
    ],
    seoTitle: 'Grünflächenpflege für Gewerbe und Kommunen, Ostalbkreis',
    seoDescription:
      'Professionelle Grünflächenpflege für Wohnanlagen, Betriebe und Kommunen nach Leistungsverzeichnis. K & S Landschaftsbau aus Mutlangen.',
  },
  {
    slug: 'winterdienst',
    title: 'Winterdienst',
    navTitle: 'Winterdienst',
    icon: 'Snowflake',
    teaser: 'Räumen und Streuen im Turnus. Damit Ihre Räum- und Streupflicht zuverlässig erfüllt ist.',
    intro:
      'Als Eigentümerin oder Eigentümer haften Sie für sichere Wege auf und an Ihrem Grundstück. Wir übernehmen diese Pflicht mit festen Einsatzzeiten, dokumentierten Einsätzen und abgestimmten Streumitteln.',
    bullets: [
      'Räumen von Gehwegen, Zufahrten und Stellplätzen',
      'Streuen mit abgestimmten Streumitteln',
      'Einsätze nach vereinbarten Zeitfenstern',
      'Dokumentation der Einsätze',
      'Saisonverträge für Gewerbe und Wohnanlagen',
      'Abtransport von Schnee bei Bedarf',
    ],
    highlights: [
      {
        title: 'Pflicht abgesichert',
        text: 'Ein Winterdienstvertrag entlastet Sie organisatorisch. Den Umfang der Haftungsübertragung regeln wir vertraglich.',
      },
      {
        title: 'Früh am Objekt',
        text: 'Einsatzzeiten richten sich nach den örtlichen Satzungen, in der Regel ab dem frühen Morgen.',
      },
      {
        title: 'Nachweisbar',
        text: 'Dokumentierte Einsätze helfen Ihnen im Schadensfall gegenüber Versicherung und Dritten.',
      },
    ],
    faq: [
      {
        q: 'Ab wann wird geräumt?',
        a: 'Die Zeitfenster ergeben sich aus der Satzung Ihrer Gemeinde. Wir stimmen sie im Vertrag konkret mit Ihnen ab.',
      },
      {
        q: 'Ist Streusalz erlaubt?',
        a: 'Viele Kommunen schränken Streusalz ein. Wir setzen abgestimmte Streumittel ein und halten die örtlichen Vorgaben ein.',
      },
      {
        q: 'Gibt es Verträge nur für eine Saison?',
        a: 'Ja, Saisonverträge sind der Regelfall. Umfang und Objekte legen wir vorab schriftlich fest.',
      },
    ],
    seoTitle: 'Winterdienst für Mutlangen und den Ostalbkreis',
    seoDescription:
      'Winterdienst mit festen Einsatzzeiten und dokumentierten Räum- und Streueinsätzen für Privat, Gewerbe und Wohnanlagen. K & S Landschaftsbau, Mutlangen.',
  },
];

/**
 * Reihenfolge im Leistungsverzeichnis, gruppiert nach Anlass.
 * Sie bestimmt die Nummerierung auf der ganzen Seite, damit die
 * Nummern von oben nach unten durchlaufen und ueberall gleich sind.
 *
 * Die Gruppen auf /leistungen folgen genau dieser Reihenfolge.
 */
export const serviceOrder = [
  // Planen und gestalten
  'gartenplanung',
  'terrassenbau',
  'teich-und-wasser',
  'rasen-und-rollrasen',
  // Bauen und befestigen
  'pflaster-und-wegebau',
  'mauern-und-natursteinarbeiten',
  'zaun-und-sichtschutz',
  'erdarbeiten',
  // Pflegen und erhalten
  'gartenpflege',
  'baum-und-heckenpflege',
  'bewaesserung',
  'gruenflaechenpflege',
  'winterdienst',
];

/** Nicht gelistete Leistungen landen hinten, damit nie eine verschwindet. */
const position = (slug: string) => {
  const index = serviceOrder.indexOf(slug);
  return index === -1 ? serviceOrder.length : index;
};

export const services: Service[] = [...serviceList].sort(
  (a, b) => position(a.slug) - position(b.slug),
);

/** Einstellige Position im Verzeichnis, 1-basiert */
export const serviceNumber = (slug: string) => services.findIndex((s) => s.slug === slug) + 1;

export const featuredServices = services.filter((s) => s.featured);

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}
