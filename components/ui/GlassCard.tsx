'use client';

import { motion, type Variants } from 'framer-motion';
import { ReactNode, useRef, useState, useCallback } from 'react';
import { ease, duration } from '@/lib/motion';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  hoverGlow?: 'blue' | 'orange' | 'none';
}

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 50,
    rotateX: 10,
    scale: 0.94,
    filter: 'blur(3px)',
  },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    scale: 1,
    filter: 'blur(0px)',
    transition: {
      duration: duration.slow,
      ease: ease.smooth,
    },
  },
};

export default function GlassCard({
  children,
  className = '',
  delay = 0,
  hoverGlow = 'blue',
}: GlassCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [lightPos, setLightPos] = useState({ x: 50, y: 50 });

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    // Subtle 3D tilt: ±4 degrees
    setTilt({
      x: (y - 0.5) * -8,
      y: (x - 0.5) * 8,
    });
    setLightPos({ x: x * 100, y: y * 100 });
  }, []);

  const handleMouseLeave = useCallback(() => {
    setTilt({ x: 0, y: 0 });
    setLightPos({ x: 50, y: 50 });
  }, []);

  const glowColor =
    hoverGlow === 'blue'
      ? 'rgba(0,212,255,0.08)'
      : hoverGlow === 'orange'
        ? 'rgba(255,107,43,0.08)'
        : 'transparent';

  const borderGlow = {
    blue: 'hover:border-neon-blue/20 hover:shadow-[0_0_30px_rgba(0,212,255,0.06)]',
    orange: 'hover:border-neon-orange/20 hover:shadow-[0_0_30px_rgba(255,107,43,0.06)]',
    none: '',
  };

  return (
    <motion.div
      ref={ref}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      transition={{ delay }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{
        rotateX: tilt.x,
        rotateY: tilt.y,
      }}
      style={{
        transformStyle: 'preserve-3d',
        perspective: '1000px',
        background: `radial-gradient(circle at ${lightPos.x}% ${lightPos.y}%, ${glowColor}, transparent 60%), rgba(255,255,255,0.02)`,
      }}
      className={`
        border border-white/[0.06] backdrop-blur-xl rounded-2xl
        transition-[border-color,box-shadow] duration-400 ${borderGlow[hoverGlow]} ${className}
      `}
    >
      {children}
    </motion.div>
  );
}
