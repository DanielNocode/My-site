'use client';

import SectionHeading from '@/components/ui/SectionHeading';
import GlassCard from '@/components/ui/GlassCard';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { School, TrendingUp, MessageSquareMore } from 'lucide-react';

const cards = [
  {
    icon: School,
    title: 'Онлайн-школы / инфобизнес',
    items: [
      'заявки, оплаты, доступы, напоминания, контроль статусов',
      'автоматизация работы менеджеров и кураторов',
    ],
  },
  {
    icon: TrendingUp,
    title: 'Отдел продаж / маркетинг',
    items: [
      'CRM-воронки, триггеры, сегментация, отчёты',
      'корректная аналитика событий и конверсий',
    ],
  },
  {
    icon: MessageSquareMore,
    title: 'Проекты с поддержкой и консультациями',
    items: [
      'AI-боты и чат-боты: ответы, сбор данных, маршрутизация, передача менеджеру',
    ],
  },
];

export default function Audience() {
  return (
    <section id="audience" className="relative py-24 md:py-32">
      <div className="section-wrapper">
        <SectionHeading
          title="Кому я полезен"
          subtitle="Я больше всего полезен там, где нужно связать сервисы в единую систему и сделать так, чтобы она работала стабильно: без ручных переносов, дублей, потерь заявок и «почему снова не отправилось»."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <GlassCard key={i} delay={i * 0.1} className="p-6 md:p-8">
              <div className="w-12 h-12 rounded-xl bg-neon-blue/10 border border-neon-blue/20 flex items-center justify-center mb-5">
                <card.icon size={22} className="text-neon-blue" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-4">
                {card.title}
              </h3>
              <ul className="space-y-2">
                {card.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-2 text-sm text-slate-400 leading-relaxed">
                    <span className="mt-1.5 w-1 h-1 rounded-full bg-neon-blue/50 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </GlassCard>
          ))}
        </div>

        <AnimatedSection delay={0.3} className="mt-10">
          <p className="text-center text-sm text-slate-500 max-w-2xl mx-auto">
            Могу делать и лендинги, но сильнее всего раскрываюсь, когда задача — построить систему и процессы, а не просто страницу.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
