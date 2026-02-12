'use client';

import { useEffect, type RefObject } from 'react';
import {
  isMotionReduced,
  initHeroParallax,
  initChipActivity,
  initScrollEffects,
} from '@/lib/hero-motion';

/**
 * Initialises all hero micro-animations.
 *
 * - Checks prefers-reduced-motion and .motion-off before starting.
 * - Watches for dynamic .motion-off toggle via MutationObserver.
 * - Single AbortController cleans up every listener, rAF, and timer.
 */
export function useHeroMotion(
  sectionRef: RefObject<HTMLElement | null>,
): void {
  useEffect(() => {
    const el = sectionRef.current;
    if (!el || isMotionReduced()) return;

    const ac = new AbortController();

    initHeroParallax(el, ac.signal);
    initChipActivity(el, ac.signal);
    initScrollEffects(el, ac.signal);

    // React to dynamic .motion-off toggle
    const observer = new MutationObserver(() => {
      if (document.documentElement.classList.contains('motion-off')) {
        ac.abort();
      }
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });

    return () => {
      ac.abort();
      observer.disconnect();
    };
  }, [sectionRef]);
}
