'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  hoverGlow?: 'blue' | 'orange' | 'none';
}

export default function GlassCard({
  children,
  className = '',
  delay = 0,
  hoverGlow = 'blue',
}: GlassCardProps) {
  const glowStyles = {
    blue: 'hover:border-neon-blue/20 hover:shadow-[0_0_30px_rgba(0,212,255,0.06)]',
    orange: 'hover:border-neon-orange/20 hover:shadow-[0_0_30px_rgba(255,107,43,0.06)]',
    none: '',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -3 }}
      className={`
        bg-white/[0.02] border border-white/[0.06] backdrop-blur-xl rounded-2xl
        transition-all duration-300 ${glowStyles[hoverGlow]} ${className}
      `}
    >
      {children}
    </motion.div>
  );
}
