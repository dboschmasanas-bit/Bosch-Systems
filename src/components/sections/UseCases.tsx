import { Section, SectionLabel, Reveal } from '@/components/ui/Section';
import { useI18n } from '@/i18n';

export function UseCases() {
  const { t } = useI18n();

  return (
    <Section id="casos-de-uso" className="border-t border-default">
      <SectionLabel index="05/" label={t('uc.label')} />
      <Reveal>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-[-0.02em] leading-[1.15] max-w-3xl">
          {t('uc.title')}
        </h2>
      </Reveal>
      <Reveal>
        <p className="mt-8 text-lg text-muted max-w-2xl leading-relaxed">
          {t('uc.desc')}
        </p>
      </Reveal>

      <Reveal stagger className="mt-12 flex flex-wrap gap-3">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
          <div
            key={i}
            className="inline-flex items-center gap-2.5 px-4 py-2.5 bg-[var(--bg-elev)] border border-default rounded-sm text-sm text-muted hover:text-[var(--text)] hover:border-bright transition-all duration-300"
          >
            <span className="w-1 h-1 rounded-full bg-accent" />
            {t(`uc.${i}`)}
          </div>
        ))}
      </Reveal>
    </Section>
  );
}
