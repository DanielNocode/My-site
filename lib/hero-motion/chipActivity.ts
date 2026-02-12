/**
 * Idle chip micro-animation.
 *
 * Every 20–40s one random chip gets a brief "data pulse" highlight
 * (class toggle → CSS drives the visual). Duration ≈ 1.2s.
 * Subtle enough to feel alive, not distracting.
 */
import { qsa } from './shared';

const MIN_INTERVAL = 20_000; // ms
const MAX_INTERVAL = 40_000;
const PULSE_DURATION = 1_200;
const INITIAL_DELAY = 5_000; // wait for entrance animations

function randomBetween(min: number, max: number): number {
  return min + Math.random() * (max - min);
}

export function initChipActivity(
  section: HTMLElement,
  signal: AbortSignal,
): void {
  const chips = qsa<HTMLElement>(section, '[data-hero-chip]');
  if (chips.length === 0) return;

  let prevIndex = -1;

  function activate(): void {
    if (signal.aborted) return;

    // Pick a chip different from the previous one
    let idx: number;
    do {
      idx = Math.floor(Math.random() * chips.length);
    } while (idx === prevIndex && chips.length > 1);
    prevIndex = idx;

    const chip = chips[idx];
    chip.classList.add('chip-active');

    const removeId = setTimeout(() => {
      chip.classList.remove('chip-active');
    }, PULSE_DURATION);

    signal.addEventListener('abort', () => clearTimeout(removeId), { once: true });

    schedule();
  }

  function schedule(): void {
    if (signal.aborted) return;
    const delay = randomBetween(MIN_INTERVAL, MAX_INTERVAL);
    const tid = setTimeout(activate, delay);
    signal.addEventListener('abort', () => clearTimeout(tid), { once: true });
  }

  // Kick off after entrance animations settle
  const startId = setTimeout(() => {
    if (!signal.aborted) activate();
  }, INITIAL_DELAY);

  signal.addEventListener('abort', () => clearTimeout(startId), { once: true });
}
