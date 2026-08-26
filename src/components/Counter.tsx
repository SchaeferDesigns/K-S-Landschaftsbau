'use client';

import { useEffect, useRef, useState } from 'react';

type CounterProps = {
  to: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
};

/**
 * Zahl, die beim Sichtbarwerden hochzählt.
 * Ohne Animation, wenn das System reduzierte Bewegung verlangt.
 */
export default function Counter({ to, prefix = '', suffix = '', duration = 1400 }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [value, setValue] = useState(0);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setValue(to);
      return;
    }

    let frame = 0;
    let start = 0;

    const run = (time: number) => {
      if (!start) start = time;
      const progress = Math.min(1, (time - start) / duration);
      // weiches Auslaufen
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(to * eased));
      if (progress < 1) frame = window.requestAnimationFrame(run);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            frame = window.requestAnimationFrame(run);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.4 },
    );

    observer.observe(node);
    return () => {
      observer.disconnect();
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [to, duration]);

  return (
    <span ref={ref}>
      {prefix}
      {value}
      {suffix}
    </span>
  );
}
