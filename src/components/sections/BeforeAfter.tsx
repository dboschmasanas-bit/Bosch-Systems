import { Section, SectionLabel, Reveal } from '@/components/ui/Section';
import { User, Cog, AlertTriangle, Clock, ArrowRight, Workflow, CheckCircle2, Eye } from 'lucide-react';
import { useI18n } from '@/i18n';

const BEFORE_ICONS = [User, Clock, User, AlertTriangle];
const AFTER_ICONS = [Workflow, Cog, CheckCircle2, Eye];

export function BeforeAfter() {
  const { t } = useI18n();

  return (
    <Section id="antes-despues" className="border-t border-default">
      <SectionLabel index="05.1/" label={t('ba.label')} />
      <Reveal>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-[-0.02em] leading-[1.15] max-w-3xl">
          {t('ba.title')}
        </h2>
      </Reveal>

      <div className="mt-14 grid md:grid-cols-2 gap-6">
        <Reveal>
          <div className="bg-[var(--bg-elev)] border border-default rounded-sm p-8 h-full">
            <div className="font-mono text-[11px] tracking-[0.2em] uppercase text-dim mb-8">
              {t('ba.before.label')}
            </div>
            <div className="space-y-5">
              {BEFORE_ICONS.map((Icon, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="flex items-center justify-center w-9 h-9 rounded-sm border border-default shrink-0">
                    <Icon size={16} className="text-dim" strokeWidth={1.5} />
                  </div>
                  <span className="text-sm text-muted">{t(`ba.before.${i + 1}`)}</span>
                  {i < BEFORE_ICONS.length - 1 && (
                    <span className="text-dim text-xs ml-auto">↓</span>
                  )}
                </div>
              ))}
            </div>
            <div className="mt-8 pt-6 border-t border-default">
              <p className="text-sm text-dim">{t('ba.before.foot')}</p>
            </div>
          </div>
        </Reveal>

        <Reveal>
          <div className="bg-[var(--bg-elev)] border border-default rounded-sm p-8 h-full relative">
            <div className="absolute top-0 left-0 right-0 h-px bg-accent" />
            <div className="font-mono text-[11px] tracking-[0.2em] uppercase text-accent mb-8">
              {t('ba.after.label')}
            </div>
            <div className="space-y-5">
              {AFTER_ICONS.map((Icon, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="flex items-center justify-center w-9 h-9 rounded-sm border border-accent/30 bg-accent/5 shrink-0">
                    <Icon size={16} className="text-accent" strokeWidth={1.5} />
                  </div>
                  <span className="text-sm">{t(`ba.after.${i + 1}`)}</span>
                  {i < AFTER_ICONS.length - 1 && (
                    <ArrowRight size={12} className="text-accent/40 ml-auto" />
                  )}
                </div>
              ))}
            </div>
            <div className="mt-8 pt-6 border-t border-default">
              <p className="text-sm text-muted">{t('ba.after.foot')}</p>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
