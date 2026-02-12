'use client';

import { motion } from 'framer-motion';
import { Send, ArrowDown } from 'lucide-react';
import Image from 'next/image';

const badges = [
  'n8n / Telegram / CRM / GetCourse',
  'Интеграции через API и вебхуки',
  'Сценарии ботов + логика продаж/поддержки',
  'Стабильность: контроль ошибок, ретраи, логирование',
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background effects */}
      <div className="absolute inset-0">
        {/* Neon blobs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/4 -left-32 w-96 h-96 bg-neon-blue/20 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-1/4 -right-32 w-96 h-96 bg-neon-orange/15 rounded-full blur-[120px]"
        />
        <motion.div
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
          {/* Left: Text content */}
          <div className="flex-1 text-center lg:text-left">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-[3.5rem] font-extrabold text-white leading-[1.1] mb-6"
            >
              AI-агенты, чат-боты и{' '}
              <span className="relative inline-block glitch-wrapper">
                <span className="relative z-10 bg-gradient-to-r from-neon-blue to-neon-blue/70 bg-clip-text text-transparent">
                  автоматизации
                </span>
                <span className="glitch-layer glitch-blue" aria-hidden="true">автоматизации</span>
                <span className="glitch-layer glitch-orange" aria-hidden="true">автоматизации</span>
              </span>{' '}
              для онлайн-бизнеса
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg md:text-xl text-slate-400 leading-relaxed mb-8 max-w-2xl mx-auto lg:mx-0"
            >
              Строю системы, которые снимают ручной хаос: заявки → квалификация → CRM → сообщения → задачи → отчёты.
              <br className="hidden md:block" />
              Работаю на стыке маркетинга, процессов и техчасти — от логики до внедрения.
            </motion.p>

            {/* Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap gap-2 mb-10 justify-center lg:justify-start"
            >
              {badges.map((badge, i) => (
                <span
                  key={i}
                  className="px-3 py-1.5 text-xs md:text-sm text-slate-300 bg-white/[0.04] border border-white/[0.08] rounded-lg"
                >
                  {badge}
                </span>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-4"
            >
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                href="https://t.me/techprod_ai"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-neon-orange text-base px-8 py-4"
              >
                <Send size={18} />
                Обсудить задачу в Telegram
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
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
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-sm text-slate-500 max-w-lg mx-auto lg:mx-0"
            >
              Можно начать с короткого аудита и плана: что сделать сейчас, что позже и какие риски закрыть.
            </motion.p>
          </div>

          {/* Right: Portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex-shrink-0"
          >
            <div className="relative w-64 h-80 sm:w-72 sm:h-[22rem] lg:w-80 lg:h-[26rem]">
              {/* Glow behind portrait */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-neon-blue/20 to-neon-orange/20 blur-2xl scale-110" />
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
              <div className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-neon-blue/40 rounded-tl-lg" />
              <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 border-neon-orange/40 rounded-br-lg" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown size={20} className="text-slate-500" />
        </motion.div>
      </motion.div>
    </section>
  );
}
