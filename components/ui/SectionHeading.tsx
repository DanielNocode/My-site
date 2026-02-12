'use client';

import { motion } from 'framer-motion';
import { headingReveal, subtitleReveal, viewport } from '@/lib/motion';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
}

export default function SectionHeading({
  title,
  subtitle,
  align = 'center',
}: SectionHeadingProps) {
  const alignment = align === 'center' ? 'text-center' : 'text-left';

  return (
    <div className={`mb-12 md:mb-16 ${alignment}`}>
      <motion.h2
        variants={headingReveal}
        initial="hidden"
        whileInView="visible"
        viewport={viewport.default}
        className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          variants={subtitleReveal}
          initial="hidden"
          whileInView="visible"
          viewport={viewport.default}
          className="text-base md:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
