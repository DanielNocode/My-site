/**
 * Pointer-based parallax for the hero portrait card.
 *
 * Card shifts ±5px, image counter-shifts ±2.5px → depth illusion.
 * Uses requestAnimationFrame + lerp easing for 60fps smoothness.
 * Only transform/opacity → no reflow.
 */
import { qs, lerp } from './shared';

const CARD_RANGE = 5;   // px
const IMG_RANGE = 2.5;  // px, opposite direction
const EASE = 0.07;      // lower = smoother lag

interface Vec2 {
  x: number;
  y: number;
}

export function initHeroParallax(
  section: HTMLElement,
  signal: AbortSignal,
): void {
  const maybeCard = qs<HTMLElement>(section, '[data-hero-card]');
  if (!maybeCard) return;

  const card = maybeCard; // narrowed for closures
  const img = qs<HTMLImageElement>(card, 'img');

  const current: Vec2 = { x: 0, y: 0 };
  const target: Vec2 = { x: 0, y: 0 };
  let rafId = 0;

  function tick(): void {
    if (signal.aborted) return;

    current.x = lerp(current.x, target.x, EASE);
    current.y = lerp(current.y, target.y, EASE);

    // Snap when close enough (avoid sub-pixel churn)
    if (Math.abs(current.x - target.x) < 0.05) current.x = target.x;
    if (Math.abs(current.y - target.y) < 0.05) current.y = target.y;

    card.style.transform =
      `translate(${current.x * CARD_RANGE}px, ${current.y * CARD_RANGE}px)`;

    if (img) {
      img.style.transform =
        `scale(1.04) translate(${current.x * -IMG_RANGE}px, ${current.y * -IMG_RANGE}px)`;
    }

    rafId = requestAnimationFrame(tick);
  }

  function onPointerMove(e: PointerEvent): void {
    const rect = section.getBoundingClientRect();
    target.x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    target.y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
  }

  function onPointerLeave(): void {
    target.x = 0;
    target.y = 0;
  }

  section.addEventListener('pointermove', onPointerMove, { signal });
  section.addEventListener('pointerleave', onPointerLeave, { signal });

  rafId = requestAnimationFrame(tick);

  signal.addEventListener('abort', () => {
    cancelAnimationFrame(rafId);
    card.style.transform = '';
    if (img) img.style.transform = '';
  }, { once: true });
}
