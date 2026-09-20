import {
  TrendingUp,
  Mail,
  CalendarCheck,
  RefreshCw,
  FileText,
  Headphones,
  BarChart3,
  PenTool,
  Boxes,
} from 'lucide-react';
import { Section, SectionLabel, Reveal } from '@/components/ui/Section';
import { useI18n } from '@/i18n';

const ICONS = [TrendingUp, Mail, CalendarCheck, RefreshCw, FileText, Headphones, BarChart3, PenTool];

export function Capabilities() {
  const { t } = useI18n();

  return (
    <Section id="que-construimos">
      <SectionLabel index="01—09/" label={t('cap.label')} />
      <Reveal>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-[-0.02em] leading-[1.15] max-w-3xl">
          {t('cap.title')}
        </h2>
      </Reveal>
      <Reveal>
        <p className="mt-8 text-lg text-muted max-w-2xl leading-relaxed">
          {t('cap.desc')}
        </p>
      </Reveal>

      <Reveal stagger className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[var(--border)] border border-default rounded-sm overflow-hidden">
        {ICONS.map((Icon, i) => (
          <div
            key={i}
            className="bg-[var(--bg)] p-7 hover:bg-[var(--bg-elev)] transition-colors duration-300 group"
          >
            <Icon
              size={22}
              className="text-dim group-hover:text-accent transition-colors duration-300"
              strokeWidth={1.5}
            />
            <h3 className="mt-5 text-base font-medium tracking-tight">{t(`cap.${i + 1}.title`)}</h3>
            <p className="mt-2 text-sm text-muted leading-relaxed">{t(`cap.${i + 1}.desc`)}</p>
          </div>
        ))}
      </Reveal>

      <Reveal className="mt-px">
        <div className="relative bg-[var(--bg-elev)] border border-default border-t-0 rounded-sm overflow-hidden group">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent opacity-50" />
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6 p-8 md:p-10">
            <div className="flex items-center gap-4 flex-1">
              <div className="shrink-0 w-12 h-12 border border-bright rounded-sm flex items-center justify-center group-hover:border-accent transition-colors duration-300">
                <Boxes size={22} strokeWidth={1.5} className="text-accent" />
              </div>
              <div>
                <h3 className="text-lg font-medium tracking-tight">{t('cap.custom.title')}</h3>
                <p className="mt-1 text-sm text-muted leading-relaxed max-w-xl">
                  {t('cap.custom.desc')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
