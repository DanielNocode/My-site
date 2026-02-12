'use client';

import { motion } from 'framer-motion';
import SectionHeading from '@/components/ui/SectionHeading';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { Search, PenTool, Wrench, FlaskConical, FileText } from 'lucide-react';
import { ease, duration, spring } from '@/lib/motion';

const steps = [
  {
    icon: Search,
    num: '01',
    title: 'Диагностика',
    desc: 'Собираю картину: источники заявок/данных, CRM, текущие интеграции, роли и ответственность, узкие места.',
  },
  {
    icon: PenTool,
    num: '02',
    title: 'Проектирование',
    desc: 'Рисую схему: события, статусы, поля, маршруты. Фиксирую риски и точки контроля.',
  },
  {
    icon: Wrench,
    num: '03',
    title: 'Внедрение',
    desc: 'Собираю автоматизации/ботов, подключаю сервисы, настраиваю обработку ошибок и логи.',
  },
  {
    icon: FlaskConical,
    num: '04',
    title: 'Тест и запуск',
    desc: 'Прогоняю сценарии: нормальные, пограничные и «сломанные». Довожу до стабильного запуска.',
  },
  {
    icon: FileText,
    num: '05',
    title: 'Документация и поддержка',
    desc: 'Оставляю описание логики и рекомендации, чтобы система жила без шаманства.',
  },
];

/* Timeline line draws on from top to bottom */
const timelineVariants = {
  hidden: { scaleY: 0, originY: 0 },
  visible: {
    scaleY: 1,
    transition: {
      duration: duration.dramatic,
      ease: ease.cinematic,
    },
  },
};

/* Step content slides in from side with blur */
const stepVariants = (isLeft: boolean) => ({
  hidden: {
    opacity: 0,
    x: isLeft ? -50 : 50,
    filter: 'blur(4px)',
  },
  visible: {
    opacity: 1,
    x: 0,
    filter: 'blur(0px)',
    transition: {
      duration: duration.slow,
      ease: ease.out,
    },
  },
});

/* Center icon scales in with spring */
const iconVariants = {
  hidden: { opacity: 0, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: spring.bouncy,
  },
};

export default function Process() {
  return (
    <section id="process" className="relative py-14 md:py-20">
      <div className="absolute top-0 left-0 right-0 gradient-line" />

      <div className="section-wrapper">
        <SectionHeading title="Как я работаю" />

        <div className="relative">
          {/* Animated vertical line (desktop) — draws on with scroll */}
          <motion.div
            variants={timelineVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-neon-blue/20 via-neon-orange/20 to-transparent"
          />

          <div className="space-y-8 md:space-y-0">
            {steps.map((step, i) => {
              const isLeft = i % 2 === 0;
              return (
                <motion.div
                  key={i}
                  variants={stepVariants(isLeft)}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ delay: i * 0.12 }}
                  className="relative md:flex md:items-center md:min-h-[140px]"
                >
                  {/* Left content (desktop) */}
                  <div className={`hidden md:block md:w-1/2 ${isLeft ? 'pr-12 text-right' : 'pr-12'}`}>
                    {isLeft && (
                      <div className="inline-block">
                        <div className="flex items-center gap-3 justify-end mb-2">
                          <h3 className="text-lg font-semibold text-white">{step.title}</h3>
                          <span className="text-2xl font-bold text-neon-blue/30">{step.num}</span>
                        </div>
                        <p className="text-sm text-slate-400 leading-relaxed">{step.desc}</p>
                      </div>
                    )}
                  </div>

                  {/* Center icon — spring scale */}
                  <motion.div
                    variants={iconVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.12 + 0.1 }}
                    className="hidden md:flex absolute left-1/2 -translate-x-1/2 z-10"
                  >
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center border ${
                      i % 2 === 0
                        ? 'bg-neon-blue/10 border-neon-blue/30'
                        : 'bg-neon-orange/10 border-neon-orange/30'
                    }`}>
                      <step.icon size={18} className={i % 2 === 0 ? 'text-neon-blue' : 'text-neon-orange'} />
                    </div>
                  </motion.div>

                  {/* Right content (desktop) */}
                  <div className={`hidden md:block md:w-1/2 ${!isLeft ? 'pl-12' : 'pl-12'}`}>
                    {!isLeft && (
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-2xl font-bold text-neon-orange/30">{step.num}</span>
                          <h3 className="text-lg font-semibold text-white">{step.title}</h3>
                        </div>
                        <p className="text-sm text-slate-400 leading-relaxed">{step.desc}</p>
                      </div>
                    )}
                  </div>

                  {/* Mobile layout */}
                  <div className="md:hidden flex gap-4">
                    <div className="flex flex-col items-center">
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={spring.bouncy}
                        className={`w-10 h-10 rounded-xl flex items-center justify-center border flex-shrink-0 ${
                          i % 2 === 0
                            ? 'bg-neon-blue/10 border-neon-blue/30'
                            : 'bg-neon-orange/10 border-neon-orange/30'
                        }`}
                      >
                        <step.icon size={18} className={i % 2 === 0 ? 'text-neon-blue' : 'text-neon-orange'} />
                      </motion.div>
                      {i < steps.length - 1 && (
                        <motion.div
                          initial={{ scaleY: 0 }}
                          whileInView={{ scaleY: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.6, delay: 0.2 }}
                          className="w-px flex-1 bg-gradient-to-b from-white/10 to-transparent mt-2 origin-top"
                        />
                      )}
                    </div>
                    <div className="pb-8">
                      <div className="flex items-center gap-2 mb-1">
                        <span className={`text-lg font-bold ${i % 2 === 0 ? 'text-neon-blue/40' : 'text-neon-orange/40'}`}>
                          {step.num}
                        </span>
                        <h3 className="text-base font-semibold text-white">{step.title}</h3>
                      </div>
                      <p className="text-sm text-slate-400 leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom quote */}
        <AnimatedSection delay={0.3} className="mt-16">
          <div className="max-w-2xl mx-auto text-center">
            <div className="inline-block px-6 py-4 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
              <p className="text-base text-slate-300 italic leading-relaxed">
                Я делаю системы, которые можно объяснить, поддерживать и масштабировать — без магии и случайностей.
              </p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
