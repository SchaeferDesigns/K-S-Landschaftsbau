/**
 * Höhenlinien, wie sie in der Geländeplanung verwendet werden.
 * Das ist das grafische Erkennungszeichen der Seite und ersetzt
 * beliebige Verlaufsflächen.
 *
 * Die Linien erben die Farbe aus der CSS-Klasse .contour.
 */
export default function Contour({ variant = 'a' }: { variant?: 'a' | 'b' | 'c' }) {
  return (
    <div className="contour" aria-hidden="true">
      <svg viewBox="0 0 1600 600" preserveAspectRatio="none" fill="none">
        {variant === 'a' ? (
          <g stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
            <path d="M-40 96C180 40 360 150 560 118c220-36 340 60 560 30 200-28 350 42 540 4" />
            <path d="M-40 158C180 102 360 212 560 180c220-36 340 60 560 30 200-28 350 42 540 4" />
            <path d="M-40 226C180 170 360 280 560 248c220-36 340 60 560 30 200-28 350 42 540 4" />
            <path d="M-40 300C180 244 360 354 560 322c220-36 340 60 560 30 200-28 350 42 540 4" />
            <path d="M-40 380C180 324 360 434 560 402c220-36 340 60 560 30 200-28 350 42 540 4" />
            <path d="M-40 466C180 410 360 520 560 488c220-36 340 60 560 30 200-28 350 42 540 4" />
            <path d="M-40 558C180 502 360 612 560 580c220-36 340 60 560 30 200-28 350 42 540 4" />
          </g>
        ) : null}

        {variant === 'b' ? (
          <g stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
            <ellipse cx="400" cy="300" rx="520" ry="210" />
            <ellipse cx="400" cy="300" rx="430" ry="170" />
            <ellipse cx="400" cy="300" rx="340" ry="132" />
            <ellipse cx="400" cy="300" rx="250" ry="96" />
            <ellipse cx="400" cy="300" rx="160" ry="60" />
            <ellipse cx="400" cy="300" rx="76" ry="26" />
            <ellipse cx="1290" cy="180" rx="360" ry="150" />
            <ellipse cx="1290" cy="180" rx="270" ry="112" />
            <ellipse cx="1290" cy="180" rx="180" ry="74" />
            <ellipse cx="1290" cy="180" rx="92" ry="36" />
          </g>
        ) : null}

        {variant === 'c' ? (
          <g stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
            <path d="M-40 520C220 470 420 560 660 520c260-44 420 44 700 6 120-16 200 14 280 0" />
            <path d="M-40 452C220 402 420 492 660 452c260-44 420 44 700 6 120-16 200 14 280 0" />
            <path d="M-40 386C220 336 420 426 660 386c260-44 420 44 700 6 120-16 200 14 280 0" />
            <path d="M-40 322C220 272 420 362 660 322c260-44 420 44 700 6 120-16 200 14 280 0" />
            <ellipse cx="980" cy="180" rx="300" ry="120" />
            <ellipse cx="980" cy="180" rx="215" ry="84" />
            <ellipse cx="980" cy="180" rx="130" ry="48" />
            <ellipse cx="980" cy="180" rx="56" ry="19" />
          </g>
        ) : null}
      </svg>
    </div>
  );
}
