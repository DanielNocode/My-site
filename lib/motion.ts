/**
 * Centralized motion system — cinematic timing, easing, and reusable variants.
 * Inspired by Apple / Stripe / Linear motion design.
 */
import type { Variants, Transition } from 'framer-motion';

/* ─── Easing curves ─── */
export const ease = {
  /** Confident deceleration — default for entrances */
  out: [0.16, 1, 0.3, 1] as const,
  /** Smooth entrance with subtle overshoot feel */
  smooth: [0.22, 1, 0.36, 1] as const,
  /** Cinematic slow reveal */
  cinematic: [0.25, 0.46, 0.45, 0.94] as const,
  /** Snappy for micro-interactions */
  snap: [0.68, -0.6, 0.32, 1.6] as const,
};

/* ─── Duration tokens ─── */
export const duration = {
  fast: 0.3,
  normal: 0.6,
  slow: 0.8,
  cinematic: 1.0,
  dramatic: 1.4,
};

/* ─── Spring configs ─── */
export const spring = {
  gentle: { type: 'spring' as const, stiffness: 100, damping: 20, mass: 1 },
  bouncy: { type: 'spring' as const, stiffness: 200, damping: 15, mass: 0.8 },
  stiff: { type: 'spring' as const, stiffness: 300, damping: 25, mass: 0.5 },
};

/* ─── Default transitions ─── */
export const transition = {
  section: { duration: duration.slow, ease: ease.out } as Transition,
  card: { duration: duration.normal, ease: ease.smooth } as Transition,
  fast: { duration: duration.fast, ease: ease.out } as Transition,
  cinematic: { duration: duration.cinematic, ease: ease.cinematic } as Transition,
};

/* ─── Viewport config ─── */
export const viewport = {
  default: { once: true, margin: '-100px' },
  tight: { once: true, margin: '-60px' },
  loose: { once: true, margin: '-150px' },
};

/* ─── Section entrance — scale + y + opacity ─── */
export const sectionReveal: Variants = {
  hidden: {
    opacity: 0,
    y: 50,
    scale: 0.97,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: duration.slow,
      ease: ease.out,
    },
  },
};

/* ─── Stagger container ─── */
export const staggerContainer = (staggerDelay = 0.1): Variants => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren: staggerDelay,
      delayChildren: 0.1,
    },
  },
});

/* ─── Card — 3D perspective entrance ─── */
export const card3D: Variants = {
  hidden: {
    opacity: 0,
    y: 60,
    rotateX: 12,
    scale: 0.92,
    filter: 'blur(4px)',
  },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    scale: 1,
    filter: 'blur(0px)',
    transition: {
      duration: duration.slow,
      ease: ease.smooth,
    },
  },
};

/* ─── Slide up with opacity ─── */
export const slideUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: duration.normal, ease: ease.out },
  },
};

/* ─── Slide from left ─── */
export const slideLeft: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: duration.normal, ease: ease.out },
  },
};

/* ─── Slide from right ─── */
export const slideRight: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: duration.normal, ease: ease.out },
  },
};

/* ─── Scale in with spring ─── */
export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.6 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: spring.gentle,
  },
};

/* ─── Icon spin-in ─── */
export const iconReveal: Variants = {
  hidden: { opacity: 0, rotate: -90, scale: 0 },
  visible: {
    opacity: 1,
    rotate: 0,
    scale: 1,
    transition: {
      ...spring.bouncy,
      delay: 0.15,
    },
  },
};

/* ─── Staggered list items ─── */
export const listItem: Variants = {
  hidden: { opacity: 0, x: -16 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4,
      delay: 0.25 + i * 0.06,
      ease: ease.out,
    },
  }),
};

/* ─── Heading mask reveal (clip-path) ─── */
export const headingReveal: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
    filter: 'blur(8px)',
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: duration.slow,
      ease: ease.cinematic,
    },
  },
};

/* ─── Subtitle fade ─── */
export const subtitleReveal: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: duration.normal,
      delay: 0.2,
      ease: ease.out,
    },
  },
};

/* ─── Draw-on line for SVG paths ─── */
export const drawLine: Variants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: {
      pathLength: { duration: duration.cinematic, ease: ease.cinematic },
      opacity: { duration: duration.fast },
    },
  },
};

/* ─── Node pulse (for diagram nodes) ─── */
export const nodePulse: Variants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      ...spring.gentle,
      delay: i * 0.12,
    },
  }),
};

/* ─── Hero word-by-word stagger ─── */
export const heroWordContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.3,
    },
  },
};

export const heroWord: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
    filter: 'blur(6px)',
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.5,
      ease: ease.out,
    },
  },
};
