import { ArrowDown } from 'lucide-react';
import { useI18n } from '@/i18n';

export function Hero() {
  const { t } = useI18n();

  return (
    <section id="top" className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      <div className="absolute inset-0 grid-lines grid-lines-fade opacity-20" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-accent/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto w-full px-6 md:px-10 lg:px-20 pt-20">
        <div className="flex items-center gap-3 mb-8 animate-fade-in" style={{ animationDelay: '0.1s', opacity: 0 }}>
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse-dot" />
          <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-dim">
            {t('hero.tagline')}
          </span>
        </div>

        <h1
          className="text-[2.75rem] sm:text-5xl md:text-6xl lg:text-[5.25rem] font-light tracking-[-0.03em] leading-[1.05] max-w-4xl animate-fade-up uppercase"
          style={{ animationDelay: '0.2s', opacity: 0 }}
        >
          {t('hero.title1')}
          <br />
          <span className="text-accent text-glow">
            {t('hero.title2Prefix')} <span className="italic">{t('hero.title2Work')}</span>.
          </span>
        </h1>

        <p
          className="mt-8 text-lg md:text-xl text-muted max-w-2xl leading-relaxed animate-fade-up"
          style={{ animationDelay: '0.35s', opacity: 0 }}
        >
          {t('hero.subtitle')}
        </p>

        <div
          className="mt-10 flex flex-col sm:flex-row gap-4 animate-fade-up"
          style={{ animationDelay: '0.5s', opacity: 0 }}
        >
          <a
            href="#auditoria"
            className="inline-flex items-center justify-center gap-2 text-sm font-medium text-[var(--text)] bg-accent px-6 py-3.5 rounded-sm hover:opacity-90 transition-opacity glow-accent"
          >
            {t('hero.cta1')}
          </a>
          <a
            href="#sistemas"
            className="inline-flex items-center justify-center gap-2 text-sm font-medium text-[var(--text)] border border-bright px-6 py-3.5 rounded-sm hover:bg-[var(--bg-elev)] transition-colors"
          >
            {t('hero.cta2')}
          </a>
        </div>

        <div
          className="mt-20 flex items-center gap-2 font-mono text-[11px] tracking-[0.15em] text-dim animate-fade-in"
          style={{ animationDelay: '0.8s', opacity: 0 }}
        >
          <ArrowDown size={14} className="animate-bounce" />
          <span>{t('hero.scroll')}</span>
        </div>
      </div>
    </section>
  );
}
