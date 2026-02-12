'use client';

import { motion } from 'framer-motion';
import SectionHeading from '@/components/ui/SectionHeading';
import { Bot, Workflow, GraduationCap, Layout, Search } from 'lucide-react';

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

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 60,
    rotateX: 15,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const iconVariants = {
  hidden: { opacity: 0, rotate: -180, scale: 0 },
  visible: {
    opacity: 1,
    rotate: 0,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 200,
      damping: 15,
      delay: 0.2,
    },
  },
};

const listItemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4,
      delay: 0.3 + i * 0.08,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export default function Services() {
  return (
    <section id="services" className="relative py-14 md:py-20">
      {/* Subtle background accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-neon-blue/[0.03] rounded-full blur-[150px] pointer-events-none" />

      <div className="section-wrapper relative z-10" style={{ perspective: '1200px' }}>
        <SectionHeading
          title="Что я делаю"
          subtitle={'Не «настраиваю сервисы», а связываю их в работающую систему с понятной логикой.'}
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              whileHover={{
                y: -8,
                rotateY: 3,
                boxShadow: service.accent === 'blue'
                  ? '0 0 40px rgba(0,212,255,0.12), 0 20px 60px rgba(0,0,0,0.4)'
                  : '0 0 40px rgba(255,107,43,0.12), 0 20px 60px rgba(0,0,0,0.4)',
              }}
              transition={{ duration: 0.3 }}
              className={`
                bg-white/[0.02] border border-white/[0.06] backdrop-blur-xl rounded-2xl
                transition-colors duration-300 p-6 md:p-8
                hover:border-${service.accent === 'blue' ? 'neon-blue' : 'neon-orange'}/20
                ${i >= 3 ? 'lg:col-span-1' : ''}
              `}
            >
              <motion.div
                variants={iconVariants}
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
                    variants={listItemVariants}
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
