/**
 * Shared utilities for hero micro-motion system.
 * Tree-shakable, zero side-effects.
 */

/** Check if motion should be suppressed (reduced-motion or .motion-off). */
export function isMotionReduced(): boolean {
  if (typeof window === 'undefined') return true;
  if (document.documentElement.classList.contains('motion-off')) return true;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

/** Typed querySelector — returns T | null. */
export function qs<T extends Element>(
  root: Element | Document,
  selector: string,
): T | null {
  return root.querySelector<T>(selector);
}

/** Typed querySelectorAll — returns T[]. */
export function qsa<T extends Element>(
  root: Element | Document,
  selector: string,
): T[] {
  return Array.from(root.querySelectorAll<T>(selector));
}

/** Linear interpolation. */
export function lerp(a: number, b: number, t: number): number {
  return a + (b - a) * t;
}
