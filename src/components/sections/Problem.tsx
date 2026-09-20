import { X, Check } from 'lucide-react';
import { Section, SectionLabel, Reveal } from '@/components/ui/Section';
import { useI18n } from '@/i18n';

export function Problem() {
  const { t } = useI18n();

  return (
    <Section id="problema" grid>
      <SectionLabel index="00/" label={t('problem.label')} />
      <Reveal>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-[-0.02em] leading-[1.15] max-w-3xl">
          {t('problem.title')}
        </h2>
      </Reveal>
      <Reveal>
        <p className="mt-8 text-lg text-muted max-w-2xl leading-relaxed">
          {t('problem.desc')}
        </p>
      </Reveal>

      <div className="mt-16 grid md:grid-cols-2 gap-6">
        {/* Before card */}
        <Reveal>
          <div className="relative bg-[var(--bg-elev)] border border-default rounded-lg p-8 md:p-10 h-full overflow-hidden hover:border-bright transition-colors duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-full border border-default flex items-center justify-center">
                <X size={14} className="text-dim" strokeWidth={2} />
              </div>
              <div className="font-mono text-[11px] tracking-[0.2em] uppercase text-dim">
                {t('problem.before.label')}
              </div>
            </div>
            <p className="text-2xl md:text-3xl font-light leading-tight text-muted mb-8">
              {t('problem.before.text')}
            </p>
            <div className="space-y-3">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="flex items-center gap-3 text-sm text-dim py-2 px-3 rounded bg-[var(--bg)]/50">
                  <span className="w-1 h-1 rounded-full bg-[var(--border-bright)]" />
                  {t(`problem.before.${i}`)}
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* After card */}
        <Reveal>
          <div className="relative bg-[var(--bg-elev)] border border-accent/20 rounded-lg p-8 md:p-10 h-full overflow-hidden hover:border-accent/40 transition-colors duration-300">
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-accent to-transparent" />
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-accent/5 blur-[60px] rounded-full pointer-events-none" />
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-full border border-accent/30 bg-accent/10 flex items-center justify-center">
                <Check size={14} className="text-accent" strokeWidth={2} />
              </div>
              <div className="font-mono text-[11px] tracking-[0.2em] uppercase text-accent">
                {t('problem.after.label')}
              </div>
            </div>
            <p className="text-2xl md:text-3xl font-light leading-tight mb-8">
              {t('problem.after.text')}
            </p>
            <div className="space-y-3">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="flex items-center gap-3 text-sm text-muted py-2 px-3 rounded bg-accent/5">
                  <span className="w-1 h-1 rounded-full bg-accent" />
                  {t(`problem.after.${i}`)}
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
