'use client';

import { motion } from 'framer-motion';
import SectionHeading from '@/components/ui/SectionHeading';
import NeonButton from '@/components/ui/NeonButton';
import { Send, Mail } from 'lucide-react';
import { ease, duration, viewport } from '@/lib/motion';

export default function Contacts() {
  return (
    <section id="contacts" className="relative py-14 md:py-20">
      <div className="absolute top-0 left-0 right-0 gradient-line" />

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-neon-blue/[0.04] rounded-full blur-[150px] pointer-events-none" />

      <div className="section-wrapper relative z-10">
        <SectionHeading title="Обсудим задачу" />

        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={viewport.default}
          transition={{ duration: duration.slow, ease: ease.out }}
          className="max-w-xl mx-auto text-center"
        >
          <p className="text-base md:text-lg text-slate-400 leading-relaxed mb-8">
            Напиши в Telegram. Коротко опиши, что сейчас происходит и какой результат нужен.
            Я задам несколько уточняющих вопросов и предложу лучший вариант реализации.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: duration.normal, delay: 0.2, ease: ease.out }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-6"
          >
            <NeonButton href="https://t.me/techprod_ai" variant="orange" size="lg">
              <Send size={18} />
              Написать в Telegram
            </NeonButton>
            <NeonButton href="mailto:dss.techspec@gmail.com" variant="ghost" size="lg">
              <Mail size={18} />
              dss.techspec@gmail.com
            </NeonButton>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: duration.normal, delay: 0.4 }}
            className="text-sm text-slate-500"
          >
            Если нужно — начнём с аудита и плана. Если важно — можем работать по NDA.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
