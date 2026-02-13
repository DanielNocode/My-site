'use client';

import { useEffect, useState } from 'react';
import { ChevronUp } from 'lucide-react';

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollUp = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <button
      onClick={scrollUp}
      aria-label="Наверх"
      className={`fixed bottom-6 right-6 z-50 w-11 h-11 rounded-xl
        flex items-center justify-center
        bg-dark-900/80 backdrop-blur-md
        border border-neon-blue/25
        text-neon-blue hover:text-white
        hover:border-neon-blue/50 hover:shadow-[0_0_20px_rgba(0,212,255,0.15)]
        transition-all duration-300
        ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}
    >
      <ChevronUp size={20} />
    </button>
  );
}
