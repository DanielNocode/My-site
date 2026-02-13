import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://danil.vercel.app'),
  title: 'Даниил — AI-агенты, чат-боты и автоматизации для онлайн-бизнеса',
  description:
    'Строю системы, которые снимают ручной хаос: заявки, квалификация, CRM, сообщения, задачи, отчёты. Работаю на стыке маркетинга, процессов и техчасти — от логики до внедрения.',
  keywords: [
    'AI-агенты',
    'чат-боты',
    'автоматизация',
    'n8n',
    'CRM',
    'GetCourse',
    'онлайн-школы',
    'Telegram бот',
    'автоматизация бизнеса',
  ],
  authors: [{ name: 'Даниил' }],
  openGraph: {
    title: 'Даниил — AI-агенты, чат-боты и автоматизации',
    description:
      'Строю системы для онлайн-бизнеса: от заявки до отчёта. n8n, Telegram, CRM, GetCourse.',
    type: 'website',
    locale: 'ru_RU',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="noise-overlay">{children}</body>
    </html>
  );
}
