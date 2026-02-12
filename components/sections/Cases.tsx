'use client';

import { motion } from 'framer-motion';
import SectionHeading from '@/components/ui/SectionHeading';
import GlassCard from '@/components/ui/GlassCard';
import NeonButton from '@/components/ui/NeonButton';
import { Send } from 'lucide-react';
import { nodePulse, ease, duration, viewport } from '@/lib/motion';

interface DiagramNode {
  label: string;
  accent?: 'blue' | 'orange';
}

interface CaseData {
  title: string;
  context: string;
  task: string;
  solution: string;
  result: string;
  diagram: DiagramNode[];
}

const cases: CaseData[] = [
  {
    title: 'AI-чат-бот: консультации, квалификация и передача в CRM',
    context: 'Большой поток однотипных вопросов и перегруженные менеджеры.',
    task: 'Снять первичную консультацию с менеджеров и не терять заявки.',
    solution:
      'Спроектировал сценарий бота: ответы на частые вопросы, сбор ключевых данных, определение готовности клиента, передача в CRM/менеджеру с полным контекстом диалога и статусом.',
    result:
      'Менеджеры подключаются к «тёплым» обращениям, скорость ответа выросла, пропуски заявок снизились.',
    diagram: [
      { label: 'Telegram', accent: 'blue' },
      { label: 'Чат-бот', accent: 'blue' },
      { label: 'Сбор данных / квалификация', accent: 'orange' },
      { label: 'CRM', accent: 'blue' },
      { label: 'Менеджер', accent: 'orange' },
    ],
  },
  {
    title: 'Автоматизация: заявка → CRM → уведомления → задачи → контроль статусов',
    context: 'Заявки приходили в разные места, часть терялась, данные дублировались.',
    task: 'Собрать единый процесс обработки заявок и исключить ручные переносы.',
    solution:
      'Настроил цепочку: вход заявки, запись в CRM, назначение ответственного, уведомления, автозадачи, проверка «зависших» лидов и напоминания.',
    result:
      'Заявки перестали теряться, появилось понятное управление статусами и дисциплина обработки.',
    diagram: [
      { label: 'Форма / мессенджер', accent: 'blue' },
      { label: 'n8n', accent: 'orange' },
      { label: 'CRM', accent: 'blue' },
      { label: 'Уведомления', accent: 'orange' },
      { label: 'Задачи', accent: 'blue' },
      { label: 'Контроль SLA', accent: 'orange' },
    ],
  },
  {
    title: 'GetCourse: поддержка процессов и связка с CRM/Telegram',
    context: 'Школе нужно было стабильно вести поток: регистрации, оплаты, доступы, коммуникации, отчёты.',
    task: 'Настроить и поддерживать систему на GetCourse, чтобы процесс работал без ручного хаоса.',
    solution:
      'Настроил ключевые процессы в GetCourse и связки с внешними сервисами: уведомления, сегменты, триггеры, передача данных в CRM, контроль статусов.',
    result:
      'Процессы стали предсказуемыми, меньше ручных действий, выше прозрачность по ученикам и оплатам.',
    diagram: [
      { label: 'Трафик', accent: 'blue' },
      { label: 'Лендинг / форма', accent: 'blue' },
      { label: 'GetCourse', accent: 'orange' },
      { label: 'Оплата / доступ', accent: 'blue' },
      { label: 'Коммуникации', accent: 'orange' },
      { label: 'CRM / отчёты', accent: 'blue' },
    ],
  },
  {
    title: 'Аудит и переработка чат-бота: меньше воды, больше конверсии',
    context: 'Бот отвечал слишком общо, терял структуру диалога и не доводил до целевого действия.',
    task: 'Сделать ответы точнее, диалог — управляемым, а передачу в менеджера — информативной.',
    solution:
      'Провёл аудит сценариев, переработал логику: уточняющие вопросы, ветвление, сбор данных, контроль качества ответов, правила передачи в менеджера и фиксация контекста.',
    result:
      'Бот стал «вести» пользователя, уменьшились тупики в диалоге, повысилась эффективность обработки обращений.',
    diagram: [
      { label: 'Пользователь', accent: 'blue' },
      { label: 'Бот (ветки/правила)', accent: 'orange' },
      { label: 'Сбор данных', accent: 'blue' },
      { label: 'Решение / CTA', accent: 'orange' },
      { label: 'Менеджер / CRM', accent: 'blue' },
    ],
  },
  {
    title: 'Аудит процессов и автоматизаций: где теряются деньги и время',
    context: 'Проект рос, интеграции «обрастали костылями», появились расхождения данных и ручная рутина.',
    task: 'Найти узкие места и дать план улучшений с приоритетами.',
    solution:
      'Разобрал текущую схему, нашёл точки потерь (заявки, статусы, ручные шаги, дубли), предложил улучшения: быстрые победы + системные изменения, описал риски и порядок внедрения.',
    result:
      'Появилась карта работ, снизилась рутина, данные стали чище, процессы — стабильнее.',
    diagram: [
      { label: 'Текущее состояние', accent: 'orange' },
      { label: 'Анализ', accent: 'blue' },
      { label: 'План улучшений', accent: 'orange' },
      { label: 'Новая схема', accent: 'blue' },
      { label: 'Метрики контроля', accent: 'orange' },
    ],
  },
];

/* Animated diagram with CSS connectors and pulsing nodes */
function CaseDiagram({ nodes }: { nodes: DiagramNode[] }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-40px' }}
      className="flex flex-col items-center py-4"
    >
      {nodes.map((node, i) => (
        <div key={i} className="flex flex-col items-center">
          <motion.div
            variants={nodePulse}
            custom={i}
            className={`
              relative px-4 py-2.5 rounded-xl text-xs md:text-sm font-medium text-center
              min-w-[140px] max-w-[200px] border backdrop-blur-sm
              ${node.accent === 'orange'
                ? 'border-neon-orange/30 bg-neon-orange/[0.06] text-neon-orange node-pulse-orange'
                : 'border-neon-blue/30 bg-neon-blue/[0.06] text-neon-blue node-pulse'
              }
            `}
          >
            {node.label}
          </motion.div>
          {i < nodes.length - 1 && (
            <motion.div
              className="flex flex-col items-center"
              initial={{ opacity: 0, scaleY: 0 }}
              whileInView={{ opacity: 1, scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.12 + 0.2, ease: ease.out }}
              style={{ originY: 0 }}
            >
              <div className="w-px h-5 bg-gradient-to-b from-white/20 to-white/5" />
              <div className="w-0 h-0 border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent border-t-[5px] border-t-white/20" />
            </motion.div>
          )}
        </div>
      ))}
    </motion.div>
  );
}

export default function Cases() {
  return (
    <section id="cases" className="relative py-14 md:py-20">
      <div className="absolute top-0 left-0 right-0 gradient-line" />

      <div className="section-wrapper">
        <SectionHeading
          title="Кейсы"
          subtitle="Показываю суть задач и архитектуру решений. Визуал — схемы процессов и связок (без лишних данных и NDA-рисков)."
        />

        <div className="space-y-8">
          {cases.map((caseItem, i) => (
            <GlassCard
              key={i}
              delay={i * 0.08}
              hoverGlow={i % 2 === 0 ? 'blue' : 'orange'}
              className="p-6 md:p-8 overflow-hidden"
            >
              <div className="flex flex-col lg:flex-row gap-8">
                <div className="lg:w-[260px] flex-shrink-0 flex items-center justify-center">
                  <CaseDiagram nodes={caseItem.diagram} />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg md:text-xl font-semibold text-white mb-5">
                    {caseItem.title}
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-neon-blue/70 mb-1.5">
                        Контекст
                      </p>
                      <p className="text-sm text-slate-400 leading-relaxed">
                        {caseItem.context}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-neon-blue/70 mb-1.5">
                        Задача
                      </p>
                      <p className="text-sm text-slate-400 leading-relaxed">
                        {caseItem.task}
                      </p>
                    </div>
                    <div className="sm:col-span-2">
                      <p className="text-xs font-semibold uppercase tracking-wider text-neon-orange/70 mb-1.5">
                        Решение
                      </p>
                      <p className="text-sm text-slate-400 leading-relaxed">
                        {caseItem.solution}
                      </p>
                    </div>
                    <div className="sm:col-span-2">
                      <p className="text-xs font-semibold uppercase tracking-wider text-green-400/70 mb-1.5">
                        Результат
                      </p>
                      <p className="text-sm text-slate-300 leading-relaxed">
                        {caseItem.result}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>

        {/* CTA under cases */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={viewport.default}
          transition={{ duration: duration.slow, delay: 0.2, ease: ease.out }}
          className="mt-12 text-center"
        >
          <p className="text-slate-400 mb-5">
            Хочешь — разберу твою схему и дам план улучшений. Напиши в Telegram.
          </p>
          <NeonButton href="https://t.me/techprod_ai" variant="orange">
            <Send size={16} />
            Написать в Telegram
          </NeonButton>
        </motion.div>
      </div>
    </section>
  );
}
