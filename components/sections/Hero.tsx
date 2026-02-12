'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { Send, ArrowDown } from 'lucide-react';
import Image from 'next/image';
import { useRef } from 'react';
import { ease, duration } from '@/lib/motion';

const badges = [
  'n8n / Telegram / CRM / GetCourse',
  'Интеграции через API и вебхуки',
  'Сценарии ботов + логика продаж/поддержки',
  'Стабильность: контроль ошибок, ретраи, логирование',
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
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  // Parallax: background blobs move slower than scroll
  const bgY1 = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const bgY2 = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const bgY3 = useTransform(scrollYProgress, [0, 1], [0, 160]);
  // Portrait moves slightly slower for depth
  const portraitY = useTransform(scrollYProgress, [0, 1], [0, 50]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* ─── Parallax background blobs ─── */}
      <div className="absolute inset-0">
        <motion.div
          style={{ y: bgY1 }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/4 -left-32 w-96 h-96 bg-neon-blue/20 rounded-full blur-[120px]"
        />
        <motion.div
          style={{ y: bgY2 }}
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-1/4 -right-32 w-96 h-96 bg-neon-orange/15 rounded-full blur-[120px]"
        />
        <motion.div
          style={{ y: bgY3 }}
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.08, 0.15, 0.08],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-neon-blue/10 rounded-full blur-[150px]"
        />
      </div>

      <div className="relative z-10 section-wrapper">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* ─── Left: Text content ─── */}
          <div className="flex-1 text-center lg:text-left">
            {/* Staged headline reveal: word by word */}
            <motion.h1
              initial="hidden"
              animate="visible"
              transition={{ staggerChildren: 0.07, delayChildren: 0.3 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-[3.5rem] font-extrabold text-white leading-[1.1] mb-6"
            >
              {headlineWords.map((word, i) => (
                <motion.span key={i} variants={wordVariants} className="inline-block mr-[0.3em]">
                  {word}
                </motion.span>
              ))}
              {/* Accent word with glitch + glow sweep */}
              <motion.span variants={wordVariants} className="inline-block mr-[0.3em]">
                <span className="relative inline-block glitch-wrapper glow-sweep">
                  <span className="relative z-10 bg-gradient-to-r from-neon-blue to-neon-blue/70 bg-clip-text text-transparent">
                    {accentWord}
                  </span>
                  <span className="glitch-layer glitch-blue" aria-hidden="true">{accentWord}</span>
                  <span className="glitch-layer glitch-orange" aria-hidden="true">{accentWord}</span>
                </span>
              </motion.span>
              {trailingWords.map((word, i) => (
                <motion.span key={i} variants={wordVariants} className="inline-block mr-[0.3em]">
                  {word}
                </motion.span>
              ))}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20, filter: 'blur(4px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: duration.slow, delay: 0.7, ease: ease.out }}
              className="text-lg md:text-xl text-slate-400 leading-relaxed mb-8 max-w-2xl mx-auto lg:mx-0"
            >
              Строю системы, которые снимают ручной хаос: заявки → квалификация → CRM → сообщения → задачи → отчёты.
              <br className="hidden md:block" />
              Работаю на стыке маркетинга, процессов и техчасти — от логики до внедрения.
            </motion.p>

            {/* Badges — staggered fade */}
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
                  className="px-3 py-1.5 text-xs md:text-sm text-slate-300 bg-white/[0.04] border border-white/[0.08] rounded-lg"
                >
                  {badge}
                </motion.span>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: duration.slow, delay: 1.1, ease: ease.out }}
              className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-4"
            >
              <motion.a
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                href="https://t.me/techprod_ai"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-neon-orange text-base px-8 py-4"
              >
                <Send size={18} />
                Обсудить задачу в Telegram
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                href="#cases"
                className="btn-neon-blue text-base px-8 py-4"
              >
                <ArrowDown size={18} />
                Смотреть кейсы
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

          {/* ─── Right: Portrait with parallax ─── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.88, filter: 'blur(8px)' }}
            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            transition={{ duration: duration.cinematic, delay: 0.5, ease: ease.cinematic }}
            style={{ y: portraitY }}
            className="relative flex-shrink-0"
          >
            <div className="relative w-64 h-80 sm:w-72 sm:h-[22rem] lg:w-80 lg:h-[26rem]">
              {/* Pulsing glow behind portrait */}
              <motion.div
                animate={{
                  scale: [1.1, 1.15, 1.1],
                  opacity: [0.6, 0.8, 0.6],
                }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute inset-0 rounded-3xl bg-gradient-to-br from-neon-blue/20 to-neon-orange/20 blur-2xl"
              />
              <div className="relative w-full h-full rounded-3xl overflow-hidden border border-white/10 bg-dark-800">
                <Image
                  src="/images/my_photo_hero.png"
                  alt="Данил — AI-агенты и автоматизации"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>
              {/* Decorative corner accents */}
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.0, duration: 0.5, ease: ease.out }}
                className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-neon-blue/40 rounded-tl-lg"
              />
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.1, duration: 0.5, ease: ease.out }}
                className="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 border-neon-orange/40 rounded-br-lg"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* ─── Scroll indicator ─── */}
      <motion.div
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
