'use client';

import { motion } from 'framer-motion';
import { ease, duration } from '@/lib/motion';

/* ─── Data ─── */
const hudLines = [
  {
    marker: 'СИСТЕМА / ОБЗОР',
    text: 'Строю системы, которые снимают ручной хаос',
    highlight: true,
  },
  {
    marker: 'PIPELINE / ПОТОК',
    text: 'заявки → квалификация → CRM → сообщения → задачи → отчёты',
    highlight: false,
  },
  {
    marker: 'РЕЖИМ / ОПЕРАТОР',
    text: 'Работаю на стыке маркетинга, процессов и техчасти — от логики до внедрения',
    highlight: false,
  },
] as const;

/* ─── Animation variants ─── */
const panelVariants = {
  hidden: { opacity: 0, x: -20, filter: 'blur(6px)' },
  visible: {
    opacity: 1,
    x: 0,
    filter: 'blur(0px)',
    transition: { duration: duration.slow, ease: ease.out },
  },
};

const lineVariants = {
  hidden: { opacity: 0, x: -12 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: ease.out },
  },
};

const connectorVariants = {
  hidden: { scaleX: 0, originX: 1 },
  visible: {
    scaleX: 1,
    transition: { duration: 0.6, ease: ease.cinematic },
  },
};

const bracketVariants = {
  hidden: { opacity: 0, scale: 0.3 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, ease: ease.out },
  },
};

/* ─── Typewriter text component ─── */
function TypewriterText({
  text,
  highlight,
  delay,
}: {
  text: string;
  highlight: boolean;
  delay: number;
}) {
  const chars = text.split('');

  return (
    <motion.span
      initial="hidden"
      animate="visible"
      transition={{ staggerChildren: 0.018, delayChildren: delay }}
      aria-label={text}
      className={
        highlight
          ? 'text-sm sm:text-base text-slate-200 leading-snug'
          : 'text-xs sm:text-sm text-slate-400/90 leading-snug'
      }
    >
      {chars.map((char, i) => (
        <motion.span
          key={i}
          variants={{
            hidden: { opacity: 0, filter: 'blur(4px)' },
            visible: { opacity: 1, filter: 'blur(0px)', transition: { duration: 0.06 } },
          }}
          aria-hidden="true"
        >
          {char}
        </motion.span>
      ))}
    </motion.span>
  );
}

/* ─── Main HeroHud component ─── */
export default function HeroHud() {
  const baseDelay = 0.9;

  return (
    <div className="relative flex items-start gap-0 lg:gap-0" role="region" aria-label="Обзор системы оператора">
      {/* ─── Connector line (desktop only) ─── */}
      <div className="hidden lg:flex items-center self-stretch relative">
        <motion.div
          variants={connectorVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: baseDelay + 0.3 }}
          className="hud-connector-h"
          aria-hidden="true"
        />
        {/* Data pulse on the connector */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: baseDelay + 0.9 }}
          className="hud-pulse-dot"
          aria-hidden="true"
        />
      </div>

      {/* ─── HUD Panel ─── */}
      <motion.div
        variants={panelVariants}
        initial="hidden"
        animate="visible"
        transition={{ delay: baseDelay }}
        className="hud-panel relative w-full max-w-xl"
        data-hud-panel
      >
        {/* Corner brackets */}
        <motion.span
          variants={bracketVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: baseDelay + 0.2 }}
          className="hud-bracket hud-bracket--tl"
          aria-hidden="true"
        />
        <motion.span
          variants={bracketVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: baseDelay + 0.25 }}
          className="hud-bracket hud-bracket--tr"
          aria-hidden="true"
        />
        <motion.span
          variants={bracketVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: baseDelay + 0.3 }}
          className="hud-bracket hud-bracket--bl"
          aria-hidden="true"
        />
        <motion.span
          variants={bracketVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: baseDelay + 0.35 }}
          className="hud-bracket hud-bracket--br"
          aria-hidden="true"
        />

        {/* Subtle grid noise overlay */}
        <div className="hud-grid-overlay" aria-hidden="true" />

        {/* HUD content rows */}
        <motion.div
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.2, delayChildren: baseDelay + 0.4 }}
          className="relative z-10 flex flex-col gap-3 sm:gap-3.5"
        >
          {hudLines.map((line, i) => (
            <motion.div key={i} variants={lineVariants} className="hud-row">
              {/* System marker */}
              <motion.span
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: 'auto' }}
                transition={{ delay: baseDelay + 0.5 + i * 0.2, duration: 0.4, ease: ease.out }}
                className="hud-marker"
              >
                <span className="system-status-dot system-status-dot--sm" aria-hidden="true" />
                {line.marker}
              </motion.span>

              {/* Typewriter text */}
              <TypewriterText
                text={line.text}
                highlight={line.highlight}
                delay={baseDelay + 0.7 + i * 0.25}
              />

              {/* Divider line between rows */}
              {i < hudLines.length - 1 && (
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: baseDelay + 1.0 + i * 0.2, duration: 0.5, ease: ease.out }}
                  className="hud-divider"
                  style={{ transformOrigin: 'left' }}
                  aria-hidden="true"
                />
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Status footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: baseDelay + 1.8, duration: 0.6 }}
          className="hud-footer"
        >
          <span className="hud-footer-tag">SYS.v3.2</span>
          <span className="hud-footer-sep" aria-hidden="true" />
          <span className="hud-footer-tag">STATUS: ACTIVE</span>
        </motion.div>
      </motion.div>
    </div>
  );
}
