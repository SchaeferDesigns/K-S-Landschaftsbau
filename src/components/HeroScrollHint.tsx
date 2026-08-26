'use client';

import { useEffect, useRef, useState } from 'react';

/**
 * Scrollhinweis im Startbereich.
 * Blendet aus, sobald ein Stück gescrollt wurde, und kommt zurück,
 * wenn man wieder nach oben scrollt.
 */
export default function HeroScrollHint() {
  const [hidden, setHidden] = useState(false);
  const frame = useRef(0);

  useEffect(() => {
    const update = () => {
      frame.current = 0;
      setHidden(window.scrollY > 60);
    };

    const onScroll = () => {
      if (frame.current) return;
      frame.current = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (frame.current) window.cancelAnimationFrame(frame.current);
    };
  }, []);

  return (
    <div className="hero__scroll-wrap" aria-hidden="true">
      <div className="container">
        <span className="hero__scroll" data-hidden={hidden ? 'true' : 'false'}>
          Scrollen
          <span className="hero__scroll-line" />
        </span>
      </div>
    </div>
  );
}
