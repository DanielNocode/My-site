'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { ease, duration } from '@/lib/motion';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export default function AnimatedSection({
  children,
  className = '',
  delay = 0,
}: AnimatedSectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{
        duration: duration.slow,
        delay,
        ease: ease.out,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
