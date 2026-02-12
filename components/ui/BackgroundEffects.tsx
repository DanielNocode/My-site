'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  color: 'blue' | 'orange';
}

function generateParticles(count: number): Particle[] {
  const particles: Particle[] = [];
  for (let i = 0; i < count; i++) {
    particles.push({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      duration: Math.random() * 20 + 15,
      delay: Math.random() * 10,
      color: Math.random() > 0.6 ? 'orange' : 'blue',
    });
  }
  return particles;
}

export default function BackgroundEffects() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    setParticles(generateParticles(25));
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Tech grid */}
      <div className="absolute inset-0 cyber-grid" />

      {/* Slow scan line — cinematic feel */}
      <motion.div
        animate={{ y: ['0vh', '100vh'] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'linear' }}
        className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-blue/8 to-transparent"
      />

      {/* Second scan line — offset, orange tint */}
      <motion.div
        animate={{ y: ['100vh', '0vh'] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'linear', delay: 5 }}
        className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-orange/5 to-transparent"
      />

      {/* Floating particles */}
      {particles.map((p) => (
        <motion.div
          key={p.id}
          initial={{
            x: `${p.x}vw`,
            y: `${p.y}vh`,
            opacity: 0,
          }}
          animate={{
            y: [`${p.y}vh`, `${p.y - 12}vh`, `${p.y}vh`],
            x: [`${p.x}vw`, `${p.x + (p.id % 2 === 0 ? 2 : -2)}vw`, `${p.x}vw`],
            opacity: [0, 0.5, 0],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{ width: p.size, height: p.size }}
          className={`absolute rounded-full ${
            p.color === 'blue'
              ? 'bg-neon-blue/40 shadow-[0_0_6px_rgba(0,212,255,0.25)]'
              : 'bg-neon-orange/40 shadow-[0_0_6px_rgba(255,107,43,0.25)]'
          }`}
        />
      ))}

      {/* Corner accent lines */}
      <svg className="absolute top-0 left-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="lineGradBlue" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(0,212,255,0.15)" />
            <stop offset="100%" stopColor="rgba(0,212,255,0)" />
          </linearGradient>
          <linearGradient id="lineGradOrange" x1="100%" y1="0%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="rgba(255,107,43,0.1)" />
            <stop offset="100%" stopColor="rgba(255,107,43,0)" />
          </linearGradient>
        </defs>
        <line x1="0" y1="120" x2="300" y2="120" stroke="url(#lineGradBlue)" strokeWidth="0.5" />
        <line x1="120" y1="0" x2="120" y2="300" stroke="url(#lineGradBlue)" strokeWidth="0.5" />
        <line x1="100%" y1="85%" x2="70%" y2="85%" stroke="url(#lineGradOrange)" strokeWidth="0.5" />
      </svg>
    </div>
  );
}
