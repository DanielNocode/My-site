import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Даниил — AI-агенты, чат-боты и автоматизации для онлайн-бизнеса';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          background: '#06060a',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Grid overlay */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage:
              'linear-gradient(rgba(0,212,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.05) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />

        {/* Blue glow */}
        <div
          style={{
            position: 'absolute',
            top: -100,
            left: -100,
            width: 500,
            height: 500,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(0,212,255,0.15) 0%, transparent 70%)',
          }}
        />

        {/* Orange glow */}
        <div
          style={{
            position: 'absolute',
            bottom: -100,
            right: -100,
            width: 500,
            height: 500,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(255,107,43,0.12) 0%, transparent 70%)',
          }}
        />

        {/* Content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 20,
            zIndex: 10,
            padding: '0 80px',
          }}
        >
          {/* Logo badge */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 12,
              marginBottom: 8,
            }}
          >
            <div
              style={{
                width: 48,
                height: 48,
                borderRadius: 12,
                background: 'linear-gradient(135deg, rgba(0,212,255,0.3), rgba(255,107,43,0.3))',
                border: '1px solid rgba(0,212,255,0.3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 24,
                fontWeight: 800,
                color: 'white',
              }}
            >
              D
            </div>
            <span style={{ fontSize: 28, fontWeight: 700, color: 'white' }}>
              Даниил
            </span>
          </div>

          {/* Title */}
          <div
            style={{
              fontSize: 52,
              fontWeight: 800,
              color: 'white',
              textAlign: 'center',
              lineHeight: 1.15,
              maxWidth: 900,
            }}
          >
            AI-агенты, чат-боты и автоматизации
          </div>

          {/* Subtitle */}
          <div
            style={{
              fontSize: 22,
              color: 'rgba(148,163,184,1)',
              textAlign: 'center',
              lineHeight: 1.5,
              maxWidth: 700,
            }}
          >
            Строю системы для онлайн-бизнеса: от заявки до отчёта
          </div>

          {/* Tech badges row */}
          <div style={{ display: 'flex', gap: 10, marginTop: 12 }}>
            {['n8n', 'Telegram', 'CRM', 'GetCourse', 'API'].map((t) => (
              <div
                key={t}
                style={{
                  padding: '8px 16px',
                  borderRadius: 10,
                  border: '1px solid rgba(0,212,255,0.25)',
                  background: 'rgba(0,212,255,0.06)',
                  color: '#00d4ff',
                  fontSize: 16,
                  fontWeight: 600,
                }}
              >
                {t}
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
