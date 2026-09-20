'use client';

import { useEffect, useState } from 'react';

export type ScrollDirection = 'up' | 'down' | 'none';

export function useScrollDirection(threshold = 8): {
  scrollDirection: ScrollDirection;
  atTop: boolean;
} {
  const [scrollDirection, setScrollDirection] = useState<ScrollDirection>('none');
  const [atTop, setAtTop] = useState(true);

  useEffect(() => {
    let lastY = Math.max(0, window.scrollY);
    let ticking = false;

    const update = () => {
      const y = Math.max(0, window.scrollY);
      const diff = y - lastY;

      setAtTop(y < threshold);

      if (Math.abs(diff) >= threshold) {
        setScrollDirection(diff > 0 ? 'down' : 'up');
        lastY = y;
      }

      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(update);
        ticking = true;
      }
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [threshold]);

  return { scrollDirection, atTop };
}
