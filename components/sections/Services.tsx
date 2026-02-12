'use client';

import { motion } from 'framer-motion';
import SectionHeading from '@/components/ui/SectionHeading';
import { Bot, Workflow, GraduationCap, Layout, Search } from 'lucide-react';
import { staggerContainer, card3D, iconReveal, listItem, ease } from '@/lib/motion';

const services = [
  {
    icon: Bot,
    title: 'AI-агенты и чат-боты',
    subtitle: 'консультации / продажи / поддержка',
    items: [
      'сценарии диалога и сбор данных',
      'квалификация клиента и маршрутизация',
      'передача в CRM/менеджеру с контекстом',
      'интеграции с Telegram, формами, CRM и базой знаний',
    ],
    accent: 'blue' as const,
  },
  {
    icon: Workflow,
    title: 'Автоматизации на n8n',
    subtitle: '',
    items: [
      'заявки → CRM → уведомления → задачи → отчёты',
      'синхронизация данных между сервисами',
      'обработка ошибок, повторные попытки, мониторинг',
    ],
    accent: 'orange' as const,
  },
  {
    icon: GraduationCap,
    title: 'Ведение онлайн-школ на GetCourse',
    subtitle: '',
    items: [
      'настройка процессов: заявки, оплаты, доступы, рассылки',
      'формы, воронки, триггеры, сегменты',
      'связка GetCourse ↔ CRM ↔ Telegram ↔ таблицы/отчёты',
      'поддержка и улучшение текущей архитектуры',
    ],
    accent: 'blue' as const,
  },
  {
    icon: Layout,
    title: 'Лендинги под продукты и воронки',
    subtitle: '',
    items: [
      'структура и смысловые блоки, которые ведут к заявке',
      'интеграция с формами, CRM, аналитикой и событиями',
      'адаптация под трафик и цели (лиды / заявки / регистрации)',
    ],
    accent: 'orange' as const,
  },
  {
    icon: Search,
    title: 'Аудит процессов и системы автоматизаций',
    subtitle: '',
    items: [
      'разбор текущей схемы и узких мест',
      'где теряются заявки/деньги/время',
      'план улучшений: быстрые победы + системные доработки',
      'рекомендации по внедрению и приоритетам',
    ],
    accent: 'blue' as const,
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-14 md:py-20">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-neon-blue/[0.03] rounded-full blur-[150px] pointer-events-none" />

      <div className="section-wrapper relative z-10 perspective-container">
        <SectionHeading
          title="Что я делаю"
          subtitle={'Не «настраиваю сервисы», а связываю их в работающую систему с понятной логикой.'}
        />

        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, i) => (
            <motion.div
              key={i}
              variants={card3D}
              whileHover={{
                y: -6,
                rotateY: 2,
                boxShadow: service.accent === 'blue'
                  ? '0 0 40px rgba(0,212,255,0.1), 0 20px 50px rgba(0,0,0,0.3)'
                  : '0 0 40px rgba(255,107,43,0.1), 0 20px 50px rgba(0,0,0,0.3)',
                transition: { duration: 0.35, ease: ease.out },
              }}
              className={`
                bg-white/[0.02] border border-white/[0.06] backdrop-blur-xl rounded-2xl
                p-6 md:p-8
                ${service.accent === 'blue'
                  ? 'hover:border-neon-blue/20'
                  : 'hover:border-neon-orange/20'
                }
                ${i >= 3 ? 'lg:col-span-1' : ''}
              `}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <motion.div
                variants={iconReveal}
                className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${
                  service.accent === 'blue'
                    ? 'bg-neon-blue/10 border border-neon-blue/20'
                    : 'bg-neon-orange/10 border border-neon-orange/20'
                }`}
              >
                <service.icon
                  size={22}
                  className={
                    service.accent === 'blue' ? 'text-neon-blue' : 'text-neon-orange'
                  }
                />
              </motion.div>
              <h3 className="text-lg font-semibold text-white mb-1">
                {service.title}
              </h3>
              {service.subtitle && (
                <p className="text-sm text-slate-500 mb-4">{service.subtitle}</p>
              )}
              <ul className={`space-y-2 ${!service.subtitle ? 'mt-3' : ''}`}>
                {service.items.map((item, j) => (
                  <motion.li
                    key={j}
                    variants={listItem}
                    custom={j}
                    className="flex items-start gap-2 text-sm text-slate-400 leading-relaxed"
                  >
                    <span
                      className={`mt-1.5 w-1 h-1 rounded-full flex-shrink-0 ${
                        service.accent === 'blue' ? 'bg-neon-blue/50' : 'bg-neon-orange/50'
                      }`}
                    />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
