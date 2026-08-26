'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useRef } from 'react';

/**
 * Steuert die Scrollposition bei Seitenwechseln.
 *
 * Beim Klick auf einen Link startet die neue Seite immer oben.
 * Beim Zurück und Vorwärts im Browser, also auch bei der Wischgeste
 * auf dem Handy, wird die vorherige Position wiederhergestellt.
 *
 * Beides muss von Hand gemacht werden, weil das weiche Scrollen im
 * Stylesheet die eingebaute Sprungmarke überschreibt.
 */
export default function ScrollManager() {
  const pathname = usePathname();
  const positions = useRef(new Map<string, number>());
  const isHistoryNav = useRef(false);
  const firstRender = useRef(true);

  // Zurück- und Vorwärtsschritte erkennen
  useEffect(() => {
    const onPopState = () => {
      isHistoryNav.current = true;
    };
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  /* Position der Seite laufend merken und beim Verlassen sichern.
     Wichtig: beim Betreten nicht schreiben, sonst überschreibt der
     Startwert die gemerkte Position, bevor sie gelesen wird. */
  useEffect(() => {
    const remember = () => {
      positions.current.set(pathname, window.scrollY);
    };
    window.addEventListener('scroll', remember, { passive: true });
    return () => {
      window.removeEventListener('scroll', remember);
      remember();
    };
  }, [pathname]);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }

    const jump = (top: number) => {
      window.scrollTo({ top, left: 0, behavior: 'instant' as ScrollBehavior });
    };

    if (isHistoryNav.current) {
      isHistoryNav.current = false;
      const saved = positions.current.get(pathname);
      if (typeof saved === 'number') {
        // Zweiter Versuch, sobald die neue Seite ihre volle Höhe hat
        jump(saved);
        const timer = window.setTimeout(() => jump(saved), 60);
        return () => window.clearTimeout(timer);
      }
      return;
    }

    // Sprungmarken in der Adresszeile haben Vorrang
    if (window.location.hash) return;

    jump(0);
  }, [pathname]);

  return null;
}
