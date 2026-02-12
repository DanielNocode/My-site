/**
 * Scroll-driven micro-effects for the hero section.
 *
 * 1. Background grid subtle parallax (1–2% of scrollY)
 * 2. Scroll-down arrow fades out over 0–200px scroll
 *
 * Uses passive scroll listener + rAF batching for 60fps.
 */
import { qs } from './shared';

const ARROW_FADE_DISTANCE = 200;  // px
const GRID_PARALLAX_FACTOR = 0.015;
const ENTRANCE_SETTLE_MS = 3_000; // wait for framer-motion entrance

export function initScrollEffects(
  section: HTMLElement,
  signal: AbortSignal,
): void {
  const scrollArrow = qs<HTMLElement>(section, '[data-hero-scroll]');
  const grid = document.querySelector<HTMLElement>('.cyber-grid');

  if (!scrollArrow && !grid) return;

  let ticking = false;
  let rafId = 0;
  const t0 = performance.now();

  function update(): void {
    if (signal.aborted) return;
    const scrollY = window.scrollY;

    // Arrow fade — only after entrance animation settles
    if (scrollArrow && performance.now() - t0 > ENTRANCE_SETTLE_MS) {
      const opacity = Math.max(0, 1 - scrollY / ARROW_FADE_DISTANCE);
      scrollArrow.style.opacity = String(opacity);
    }

    // Grid parallax
    if (grid) {
      const offset = scrollY * GRID_PARALLAX_FACTOR;
      grid.style.transform = `translateY(${offset}px)`;
    }

    ticking = false;
  }

  function onScroll(): void {
    if (ticking || signal.aborted) return;
    ticking = true;
    rafId = requestAnimationFrame(update);
  }

  window.addEventListener('scroll', onScroll, { passive: true, signal });

  signal.addEventListener('abort', () => {
    cancelAnimationFrame(rafId);
    if (scrollArrow) scrollArrow.style.opacity = '';
    if (grid) grid.style.transform = '';
  }, { once: true });
}
