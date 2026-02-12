'use client';

import { motion } from 'framer-motion';
import SectionHeading from '@/components/ui/SectionHeading';
import GlassCard from '@/components/ui/GlassCard';
import { Quote } from 'lucide-react';
import { spring } from '@/lib/motion';

const testimonials = [
  {
    text: 'До работы с Даниилом у нас была каша из заявок, чатов и ручных переносов. Он сначала разобрался в логике процессов, показал схему, а уже потом начал внедрение. В итоге заявки перестали теряться, а менеджеры наконец работают по понятным статусам.',
    author: 'Руководитель онлайн-проекта',
  },
  {
    text: 'Понравилось, что это не «настроил и пропал». Даниил переработал чат-бота, убрал воду, добавил нормальную логику диалога и передачу контекста менеджеру. Бот стал реально помогать продажам, а не просто отвечать.',
    author: 'Маркетолог онлайн-школы',
  },
  {
    text: 'Делали аудит автоматизаций и процессов. Вместо абстрактных советов получили конкретный список: что ломается, где теряются заявки и что можно улучшить в первую очередь. Очень системный подход и понятные рекомендации.',
    author: 'Владелец онлайн-бизнеса',
  },
  {
    text: 'Работаем с GetCourse, было много ручных действий и путаницы. Даниил помог выстроить процессы и связать всё с CRM и уведомлениями. Стало спокойнее — система работает предсказуемо.',
    author: 'Куратор онлайн-школы',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-14 md:py-20">
      <div className="absolute top-0 left-0 right-0 gradient-line" />

      <div className="absolute bottom-0 left-1/4 w-[500px] h-[300px] bg-neon-orange/[0.02] rounded-full blur-[120px] pointer-events-none" />

      <div className="section-wrapper relative z-10">
        <SectionHeading
          title="Что говорят клиенты"
          subtitle="Коротко и по делу — про результат, логику и стабильность работы."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto perspective-container">
          {testimonials.map((item, i) => (
            <GlassCard
              key={i}
              delay={i * 0.1}
              hoverGlow={i % 2 === 0 ? 'blue' : 'orange'}
              className="p-6 md:p-8"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0, rotate: -15 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ ...spring.bouncy, delay: i * 0.1 + 0.15 }}
              >
                <Quote
                  size={24}
                  className={`mb-4 ${
                    i % 2 === 0 ? 'text-neon-blue/30' : 'text-neon-orange/30'
                  }`}
                />
              </motion.div>
              <p className="text-sm md:text-base text-slate-300 leading-relaxed mb-5 italic">
                &laquo;{item.text}&raquo;
              </p>
              <div className="flex items-center gap-3">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${
                    i % 2 === 0
                      ? 'bg-neon-blue/10 border border-neon-blue/20 text-neon-blue'
                      : 'bg-neon-orange/10 border border-neon-orange/20 text-neon-orange'
                  }`}
                >
                  {item.author.charAt(0)}
                </div>
                <p className="text-sm text-slate-500">
                  {item.author}
                </p>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
