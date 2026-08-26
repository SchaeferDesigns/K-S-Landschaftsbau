'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { asset } from '@/config/site';

/**
 * Bild im Startbereich.
 *
 * Es bewegt sich beim Scrollen langsamer als die Seite, dadurch entsteht
 * Tiefe. Die Berechnung läuft in requestAnimationFrame und schreibt nur
 * eine CSS-Variable, deshalb bleibt das Scrollen flüssig.
 */
export default function HeroMedia() {
  const layerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = layerRef.current;
    if (!node) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let frame = 0;

    const update = () => {
      frame = 0;
      const offset = window.scrollY;
      if (offset > window.innerHeight * 1.3) return;
      node.style.setProperty('--ly', `${offset * 0.22}px`);
    };

    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div className="hero__layers" aria-hidden="true">
      <div className="hero__layer" ref={layerRef}>
        <Image
          src={asset('/media/hero-garten.jpg')}
          alt=""
          fill
          priority
          quality={88}
          sizes="100vw"
        />
      </div>
    </div>
  );
}
