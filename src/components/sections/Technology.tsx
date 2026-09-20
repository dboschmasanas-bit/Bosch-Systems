import { Layers, Cloud, Plug, Database, Brain, Code2 } from 'lucide-react';
import { Section, SectionLabel, Reveal } from '@/components/ui/Section';
import { useI18n } from '@/i18n';

const ICONS = [Layers, Brain, Plug, Database, Cloud, Code2];

export function Technology() {
  const { t } = useI18n();

  return (
    <Section id="tecnologia" className="border-t border-default">
      <SectionLabel index="08/" label={t('tech.label')} />
      <Reveal>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-[-0.02em] leading-[1.15] max-w-3xl">
          {t('tech.title')}
        </h2>
      </Reveal>
      <Reveal>
        <p className="mt-8 text-lg text-muted max-w-2xl leading-relaxed">
          {t('tech.desc')}
        </p>
      </Reveal>

      <Reveal stagger className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[var(--border)] border border-default rounded-sm overflow-hidden">
        {ICONS.map((Icon, i) => (
          <div key={i} className="bg-[var(--bg)] p-7 hover:bg-[var(--bg-elev)] transition-colors duration-300">
            <div className="flex items-center gap-3">
              <Icon size={18} strokeWidth={1.5} className="text-accent" />
              <span className="text-sm font-medium tracking-tight">{t(`tech.${i + 1}.title`)}</span>
            </div>
            <p className="mt-3 text-sm text-muted leading-relaxed">{t(`tech.${i + 1}.desc`)}</p>
          </div>
        ))}
      </Reveal>
    </Section>
  );
}
