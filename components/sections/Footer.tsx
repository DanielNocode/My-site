'use client';

import { Send, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative py-12 border-t border-white/[0.06]">
      <div className="section-wrapper">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left: brand */}
          <div className="text-center md:text-left">
            <div className="flex items-center gap-2 justify-center md:justify-start mb-2">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-neon-blue/30 to-neon-orange/30 border border-neon-blue/20 flex items-center justify-center">
                <span className="text-xs font-bold text-white">D</span>
              </div>
              <span className="text-sm font-semibold text-white">
                Данил — AI-агенты, чат-боты и автоматизации
              </span>
            </div>
            <p className="text-xs text-slate-500">
              Системы, которые работают. Процессы, которые не разваливаются.
            </p>
          </div>

          {/* Right: links */}
          <div className="flex items-center gap-4">
            <a
              href="https://t.me/techprod_ai"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm text-slate-400 hover:text-neon-blue transition-colors duration-200"
            >
              <Send size={14} />
              Telegram
            </a>
            <a
              href="mailto:dss.techspec@gmail.com"
              className="flex items-center gap-1.5 text-sm text-slate-400 hover:text-neon-orange transition-colors duration-200"
            >
              <Mail size={14} />
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
