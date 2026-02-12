'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { Send, ArrowDown, Terminal } from 'lucide-react';
import Image from 'next/image';
import { useRef } from 'react';
import { ease, duration } from '@/lib/motion';
import { useHeroMotion } from '@/hooks/useHeroMotion';

const badges = [
  'n8n / Telegram / CRM / GetCourse',
  'Интеграции через API и вебхуки',
  'Сценарии ботов + логика продаж/поддержки',
  'Контроль ошибок, ретраи, логирование',
];

/* Staged headline words — each word fades in sequentially */
const headlineWords = ['AI-агенты,', 'чат-боты', 'и'];
const accentWord = 'автоматизации';
const trailingWords = ['для', 'онлайн-бизнеса'];

const wordVariants = {
  hidden: { opacity: 0, y: 24, filter: 'blur(6px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.55, ease: ease.out },
  },
};

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  useHeroMotion(sectionRef);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  const bgY1 = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const bgY2 = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const bgY3 = useTransform(scrollYProgress, [0, 1], [0, 160]);
  const portraitY = useTransform(scrollYProgress, [0, 1], [0, 50]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex flex-col overflow-hidden pt-20"
    >
      {/* ─── Parallax background blobs ─── */}
      <div className="absolute inset-0">
        <motion.div
          style={{ y: bgY1 }}
          animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.25, 0.15] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/4 -left-32 w-96 h-96 bg-neon-blue/20 rounded-full blur-[120px]"
        />
        <motion.div
          style={{ y: bgY2 }}
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-1/4 -right-32 w-96 h-96 bg-neon-orange/15 rounded-full blur-[120px]"
        />
        <motion.div
          style={{ y: bgY3 }}
          animate={{ scale: [1, 1.15, 1], opacity: [0.08, 0.15, 0.08] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-neon-blue/10 rounded-full blur-[150px]"
        />
      </div>

      {/* ═══ System Status Bar ═══ */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.15, ease: ease.out }}
        className="relative z-10 section-wrapper"
      >
        <div className="flex items-center justify-between py-3 px-4 border-b border-white/[0.06]">
          <div className="flex items-center gap-2 text-xs text-slate-500 font-mono tracking-wider">
            <span className="system-status-dot" />
            <span>SYSTEM STATUS: <span className="text-neon-blue/70">ONLINE</span></span>
          </div>
          <a
            href="https://t.me/techprod_ai"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-slate-500 hover:text-neon-blue/70 transition-colors duration-200 font-mono tracking-wider"
          >
            → OPEN CHANNEL
          </a>
        </div>
      </motion.div>

      {/* ═══ Main content ═══ */}
      <div className="relative z-10 section-wrapper flex-1 flex items-center">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 w-full">
          {/* ─── Left: System output ─── */}
          <div className="flex-1 text-center lg:text-left">
            {/* Headline with engineering prefix */}
            <motion.h1
              initial="hidden"
              animate="visible"
              transition={{ staggerChildren: 0.07, delayChildren: 0.3 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-[3.5rem] font-extrabold text-white leading-[1.1] mb-6"
            >
              <motion.span variants={wordVariants} className="inline-block mr-[0.3em] text-neon-blue/30 font-mono font-light">&gt;</motion.span>
              {headlineWords.map((word, i) => (
                <motion.span key={i} variants={wordVariants} className="inline-block mr-[0.3em]">
                  {word}
                </motion.span>
              ))}
              {/* Accent word with glitch */}
              <motion.span variants={wordVariants} data-hero-accent-wrap className="inline-block mr-[0.3em]">
                <span className="relative inline-block glitch-wrapper">
                  <span data-hero-accent className="relative z-10 bg-gradient-to-r from-neon-blue to-neon-blue/70 bg-clip-text text-transparent">
                    {accentWord}
                  </span>
                  <span className="glitch-layer glitch-blue" aria-hidden="true">{accentWord}</span>
                  <span className="glitch-layer glitch-orange" aria-hidden="true">{accentWord}</span>
                </span>
              </motion.span>
              <br className="hidden lg:block" />
              <motion.span variants={wordVariants} className="hidden lg:inline-block mr-[0.3em] text-neon-blue/30 font-mono font-light">&gt;</motion.span>
              {trailingWords.map((word, i) => (
                <motion.span key={i} variants={wordVariants} className="inline-block mr-[0.3em]">
                  {word}
                </motion.span>
              ))}
            </motion.h1>

            {/* Description as structured log lines */}
            <motion.div
              initial={{ opacity: 0, y: 20, filter: 'blur(4px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: duration.slow, delay: 0.7, ease: ease.out }}
              className="mb-8 max-w-2xl mx-auto lg:mx-0 space-y-2"
            >
              <p className="text-lg md:text-xl text-slate-400 leading-relaxed">
                <span className="text-slate-600 font-mono text-sm mr-2">process</span>
                заявки → квалификация → CRM → сообщения → задачи → отчёты
              </p>
              <p className="text-lg md:text-xl text-slate-400 leading-relaxed">
                <span className="text-slate-600 font-mono text-sm mr-2">scope</span>
                маркетинг × процессы × техчасть — от логики до внедрения
              </p>
            </motion.div>

            {/* Capability chips */}
            <motion.div
              initial="hidden"
              animate="visible"
              transition={{ staggerChildren: 0.06, delayChildren: 0.9 }}
              className="flex flex-wrap gap-2 mb-10 justify-center lg:justify-start"
            >
              {badges.map((badge, i) => (
                <motion.span
                  key={i}
                  variants={{
                    hidden: { opacity: 0, scale: 0.85, y: 10 },
                    visible: {
                      opacity: 1,
                      scale: 1,
                      y: 0,
                      transition: { duration: 0.5, ease: ease.out },
                    },
                  }}
                  data-hero-chip
                  className="px-3 py-1.5 text-xs md:text-sm text-slate-300 bg-white/[0.04] border border-white/[0.08] rounded-lg"
                >
                  {badge}
                </motion.span>
              ))}
            </motion.div>

            {/* CTA — system actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: duration.slow, delay: 1.1, ease: ease.out }}
              className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-4"
            >
              <motion.a
                data-hero-cta
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                href="https://t.me/techprod_ai"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-neon-orange text-base px-8 py-4 gap-2.5"
              >
                <Send size={18} />
                <span>Обсудить задачу</span>
                <span className="text-xs opacity-50 font-mono ml-1">RUN</span>
              </motion.a>
              <motion.a
                data-hero-cta
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                href="#cases"
                className="btn-neon-blue text-base px-8 py-4 gap-2.5"
              >
                <Terminal size={18} />
                <span>Смотреть кейсы</span>
                <span className="text-xs opacity-50 font-mono ml-1">VIEW</span>
              </motion.a>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: duration.slow, delay: 1.3 }}
              className="text-sm text-slate-500 max-w-lg mx-auto lg:mx-0"
            >
              Можно начать с короткого аудита и плана: что сделать сейчас, что позже и какие риски закрыть.
            </motion.p>
          </div>

          {/* ─── Right: Process window (portrait) ─── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.88, filter: 'blur(8px)' }}
            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            transition={{ duration: duration.cinematic, delay: 0.5, ease: ease.cinematic }}
            style={{ y: portraitY }}
            className="relative flex-shrink-0"
          >
            <div data-hero-card className="relative w-64 h-80 sm:w-72 sm:h-[22rem] lg:w-80 lg:h-[26rem]">
              {/* Glow behind */}
              <motion.div
                animate={{
                  scale: [1.1, 1.15, 1.1],
                  opacity: [0.5, 0.7, 0.5],
                }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute inset-0 rounded-2xl bg-gradient-to-br from-neon-blue/20 to-neon-orange/15 blur-2xl"
              />

              {/* Process window frame */}
              <div data-hero-glass className="process-window relative w-full h-full rounded-2xl overflow-hidden border border-white/[0.08] bg-dark-800">
                {/* Window title bar */}
                <div className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-3 py-1.5 bg-dark-950/80 backdrop-blur-sm border-b border-white/[0.06]">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-neon-blue/40" />
                    <span className="text-[10px] text-slate-600 font-mono tracking-wider">operator.view</span>
                  </div>
                  <span className="text-[10px] text-slate-600 font-mono">pid:1024</span>
                </div>

                {/* Photo */}
                <Image
                  src="/images/my_photo_hero.png"
                  alt="Данил — AI-агенты и автоматизации"
                  fill
                  className="object-cover object-top"
                  priority
                />

                {/* Bottom overlay — process info */}
                <div className="absolute bottom-0 left-0 right-0 z-20 px-3 py-2 bg-gradient-to-t from-dark-950/90 via-dark-950/60 to-transparent">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] text-slate-500 font-mono">operator: <span className="text-slate-400">danil</span></span>
                    <span className="text-[10px] text-neon-blue/50 font-mono flex items-center gap-1">
                      <span className="system-status-dot system-status-dot--sm" />
                      analyzing
                    </span>
                  </div>
                </div>
              </div>

              {/* Corner accents */}
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.0, duration: 0.5, ease: ease.out }}
                className="absolute -top-1.5 -left-1.5 w-5 h-5 border-t border-l border-neon-blue/30 rounded-tl-md"
              />
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.1, duration: 0.5, ease: ease.out }}
                className="absolute -bottom-1.5 -right-1.5 w-5 h-5 border-b border-r border-neon-orange/30 rounded-br-md"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* ─── Scroll indicator ─── */}
      <motion.div
        data-hero-scroll
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.0, duration: duration.slow }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown size={20} className="text-slate-500" />
        </motion.div>
      </motion.div>
    </section>
  );
}
