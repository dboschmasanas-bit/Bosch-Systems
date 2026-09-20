import { MapPin, Mail, Phone } from 'lucide-react';
import { Section, SectionLabel, Reveal } from '@/components/ui/Section';
import { useI18n } from '@/i18n';

export function About() {
  const { t } = useI18n();

  return (
    <Section id="nosotros" className="border-t border-default">
      <SectionLabel index="09/" label={t('about.label')} />
      <Reveal>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-[-0.03em] leading-[1.1]">
          {t('about.title')}
        </h2>
      </Reveal>
      <Reveal>
        <p className="mt-8 text-lg text-muted max-w-2xl leading-relaxed">
          {t('about.desc')}
        </p>
      </Reveal>

      <div className="mt-14 grid md:grid-cols-2 gap-px bg-[var(--border)] border border-default rounded-sm overflow-hidden">
        <Reveal>
          <div className="bg-[var(--bg)] p-8 md:p-10 h-full">
            <div className="font-mono text-[11px] tracking-[0.2em] uppercase text-dim mb-6">
              {t('about.founder')}
            </div>
            <h3 className="text-2xl font-light tracking-tight">{t('about.founderName')}</h3>
            <p className="mt-2 text-sm text-muted">{t('about.founderRole')}</p>

            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-3 text-sm">
                <MapPin size={16} className="text-dim shrink-0" strokeWidth={1.5} />
                <span className="text-muted">{t('about.location')}</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Mail size={16} className="text-dim shrink-0" strokeWidth={1.5} />
                <a href="mailto:dboschmasanas@gmail.com" className="text-muted hover:text-accent transition-colors">
                  dboschmasanas@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Phone size={16} className="text-dim shrink-0" strokeWidth={1.5} />
                <a href="tel:+34621237118" className="text-muted hover:text-accent transition-colors">
                  +34 621 237 118
                </a>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal>
          <div className="bg-[var(--bg-elev)] p-8 md:p-10 h-full flex flex-col justify-center">
            <div className="font-mono text-[11px] tracking-[0.2em] uppercase text-accent mb-6">
              {t('about.how.label')}
            </div>
            <p className="text-lg text-muted leading-relaxed">{t('about.how.1')}</p>
            <p className="mt-4 text-lg text-muted leading-relaxed">{t('about.how.2')}</p>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
