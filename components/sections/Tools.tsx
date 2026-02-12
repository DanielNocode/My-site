'use client';

import { motion } from 'framer-motion';
import SectionHeading from '@/components/ui/SectionHeading';

const tools = [
  { label: 'n8n', accent: 'blue' },
  { label: 'Telegram', accent: 'blue' },
  { label: 'GetCourse', accent: 'orange' },
  { label: 'CRM', accent: 'blue' },
  { label: 'Webhooks / REST API', accent: 'orange' },
  { label: 'Google Sheets', accent: 'blue' },
  { label: 'Python / JS', accent: 'orange' },
];

export default function Tools() {
  return (
    <section id="tools" className="relative py-14 md:py-20">
      <div className="absolute top-0 left-0 right-0 gradient-line" />

      <div className="section-wrapper">
        <SectionHeading
          title="Инструменты и подход"
          subtitle="Основной стек: n8n, Telegram, CRM, GetCourse, вебхуки и API-интеграции. Для кастомной логики использую скрипты на Python и JavaScript с поддержкой нейросетей — под конкретные задачи, без «видимости экспертизы»."
        />

        <div className="flex flex-wrap justify-center gap-3 md:gap-4 max-w-3xl mx-auto">
          {tools.map((tool, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              whileHover={{ scale: 1.05, y: -2 }}
              className={`
                px-5 py-3 rounded-xl text-sm md:text-base font-medium border backdrop-blur-sm
                transition-all duration-300 cursor-default
                ${
                  tool.accent === 'blue'
                    ? 'border-neon-blue/20 bg-neon-blue/[0.04] text-neon-blue hover:border-neon-blue/40 hover:shadow-[0_0_20px_rgba(0,212,255,0.08)]'
                    : 'border-neon-orange/20 bg-neon-orange/[0.04] text-neon-orange hover:border-neon-orange/40 hover:shadow-[0_0_20px_rgba(255,107,43,0.08)]'
                }
              `}
            >
              {tool.label}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
