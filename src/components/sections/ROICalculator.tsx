import { useState, useMemo } from 'react';
import { Section, SectionLabel, Reveal } from '@/components/ui/Section';
import { useI18n } from '@/i18n';

export function ROICalculator() {
  const { t, lang } = useI18n();
  const [hours, setHours] = useState(10);
  const [rate, setRate] = useState(25);
  const [days, setDays] = useState(5);

  const { weekly, monthly, yearly } = useMemo(() => {
    const daily = hours * rate * days;
    return {
      weekly: daily,
      monthly: daily * 4.33,
      yearly: daily * 52,
    };
  }, [hours, rate, days]);

  const locale = lang === 'en' ? 'en-US' : lang === 'ca' ? 'ca-ES' : 'es-ES';
  const fmt = (n: number) =>
    new Intl.NumberFormat(locale, { maximumFractionDigits: 0 }).format(n);

  return (
    <Section id="roi" className="border-t border-default">
      <SectionLabel index="06/" label={t('roi.label')} />
      <Reveal>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-[-0.02em] leading-[1.15] max-w-3xl">
          {t('roi.title')}
        </h2>
      </Reveal>
      <Reveal>
        <p className="mt-8 text-lg text-muted max-w-2xl leading-relaxed">
          {t('roi.desc')}
        </p>
      </Reveal>

      <Reveal className="mt-14">
        <div className="grid lg:grid-cols-[1fr_1fr] gap-px bg-[var(--border)] border border-default rounded-sm overflow-hidden">
          <div className="bg-[var(--bg)] p-8 md:p-10 space-y-8">
            <div>
              <div className="flex items-baseline justify-between mb-3">
                <label className="text-sm text-muted">{t('roi.hours')}</label>
                <span className="font-mono text-lg text-accent">{hours}h</span>
              </div>
              <input
                type="range" min="1" max="24" value={hours}
                onChange={(e) => setHours(Number(e.target.value))}
                className="w-full accent-[var(--accent)] cursor-pointer"
              />
            </div>
            <div>
              <div className="flex items-baseline justify-between mb-3">
                <label className="text-sm text-muted">{t('roi.rate')}</label>
                <span className="font-mono text-lg text-accent">{rate}€</span>
              </div>
              <input
                type="range" min="10" max="100" step="5" value={rate}
                onChange={(e) => setRate(Number(e.target.value))}
                className="w-full accent-[var(--accent)] cursor-pointer"
              />
            </div>
            <div>
              <div className="flex items-baseline justify-between mb-3">
                <label className="text-sm text-muted">{t('roi.days')}</label>
                <span className="font-mono text-lg text-accent">{days}</span>
              </div>
              <input
                type="range" min="1" max="7" value={days}
                onChange={(e) => setDays(Number(e.target.value))}
                className="w-full accent-[var(--accent)] cursor-pointer"
              />
            </div>
          </div>

          <div className="bg-[var(--bg-elev)] p-8 md:p-10 flex flex-col justify-center">
            <div className="font-mono text-[11px] tracking-[0.2em] uppercase text-dim mb-6">
              {t('roi.result')}
            </div>
            <div className="space-y-6">
              <div>
                <div className="text-sm text-dim mb-1">{t('roi.weekly')}</div>
                <div className="text-2xl font-light font-mono">{fmt(weekly)}€</div>
              </div>
              <div>
                <div className="text-sm text-dim mb-1">{t('roi.monthly')}</div>
                <div className="text-3xl font-light font-mono text-accent">{fmt(monthly)}€</div>
              </div>
              <div>
                <div className="text-sm text-dim mb-1">{t('roi.yearly')}</div>
                <div className="text-2xl font-light font-mono">{fmt(yearly)}€</div>
              </div>
            </div>
            <p className="mt-8 text-xs text-dim leading-relaxed">{t('roi.disclaimer')}</p>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
