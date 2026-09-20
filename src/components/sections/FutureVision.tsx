import { Section, SectionLabel, Reveal } from '@/components/ui/Section';
import { Rocket, Layers, Bot, Server } from 'lucide-react';
import { useI18n } from '@/i18n';

const ICONS = [Rocket, Bot, Layers, Server];

export function FutureVision() {
  const { t } = useI18n();

  return (
    <Section id="futuro" className="border-t border-default" grid>
      <SectionLabel index="10/" label={t('future.label')} />
      <Reveal>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-[-0.02em] leading-[1.15] max-w-3xl">
          {t('future.title')}
        </h2>
      </Reveal>
      <Reveal>
        <p className="mt-8 text-lg text-muted max-w-2xl leading-relaxed">
          {t('future.desc')}
        </p>
      </Reveal>

      <Reveal stagger className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {ICONS.map((Icon, i) => (
          <div
            key={i}
            className="p-6 bg-[var(--bg-elev)] border border-default rounded-sm hover:border-bright transition-colors duration-300"
          >
            <Icon size={20} strokeWidth={1.5} className="text-accent mb-4" />
            <h3 className="text-sm font-medium tracking-tight">{t(`future.${i + 1}.title`)}</h3>
            <p className="mt-1.5 text-xs text-muted leading-relaxed">{t(`future.${i + 1}.desc`)}</p>
          </div>
        ))}
      </Reveal>
    </Section>
  );
}
