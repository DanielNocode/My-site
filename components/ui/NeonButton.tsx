'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface NeonButtonProps {
  children: ReactNode;
  href?: string;
  variant?: 'blue' | 'orange' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
}

export default function NeonButton({
  children,
  href,
  variant = 'blue',
  size = 'md',
  className = '',
  onClick,
}: NeonButtonProps) {
  const variants = {
    blue: 'bg-gradient-to-r from-neon-blue/20 to-neon-blue/5 border-neon-blue/30 hover:border-neon-blue/60 hover:shadow-[0_0_30px_rgba(0,212,255,0.15)]',
    orange: 'bg-gradient-to-r from-neon-orange/20 to-neon-orange/5 border-neon-orange/30 hover:border-neon-orange/60 hover:shadow-[0_0_30px_rgba(255,107,43,0.15)]',
    ghost: 'bg-transparent border-white/10 hover:border-white/25 hover:bg-white/5',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const baseClasses = `
    relative inline-flex items-center justify-center gap-2
    font-semibold text-white rounded-xl border
    transition-all duration-300
    ${variants[variant]} ${sizes[size]} ${className}
  `;

  const Component = href ? 'a' : 'button';

  return (
    <motion.div
      whileHover={{ scale: 1.03, y: -2 }}
      whileTap={{ scale: 0.96 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      <Component
        href={href}
        target={href?.startsWith('http') ? '_blank' : undefined}
        rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
        onClick={onClick}
        className={baseClasses}
      >
        {children}
      </Component>
    </motion.div>
  );
}
