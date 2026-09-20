import { useState, useEffect } from 'react';
import {
  CalendarCheck, Mail, Filter, FileText, CheckCircle2,
  Clock, Cog, Send, Database, Bell, ArrowRight,
} from 'lucide-react';
import { Section, SectionLabel, Reveal } from '@/components/ui/Section';
import { useI18n } from '@/i18n';

type Step = {
  icon: typeof CalendarCheck;
  labelKey: string;
  detailKey: string;
  system: boolean;
};

type System = {
  id: string;
  nameKey: string;
  shortKey: string;
  descKey: string;
  steps: Step[];
};

const SYSTEMS: System[] = [
  {
    id: 'booking',
    nameKey: 'sys.booking.name', shortKey: 'sys.booking.short', descKey: 'sys.booking.desc',
    steps: [
      { icon: Mail, labelKey: 'sys.booking.s1', detailKey: 'sys.booking.s1d', system: false },
      { icon: Filter, labelKey: 'sys.booking.s2', detailKey: 'sys.booking.s2d', system: true },
      { icon: CalendarCheck, labelKey: 'sys.booking.s3', detailKey: 'sys.booking.s3d', system: true },
      { icon: CheckCircle2, labelKey: 'sys.booking.s4', detailKey: 'sys.booking.s4d', system: true },
      { icon: Bell, labelKey: 'sys.booking.s5', detailKey: 'sys.booking.s5d', system: true },
      { icon: Database, labelKey: 'sys.booking.s6', detailKey: 'sys.booking.s6d', system: true },
    ],
  },
  {
    id: 'email',
    nameKey: 'sys.email.name', shortKey: 'sys.email.short', descKey: 'sys.email.desc',
    steps: [
      { icon: Mail, labelKey: 'sys.email.s1', detailKey: 'sys.email.s1d', system: false },
      { icon: Filter, labelKey: 'sys.email.s2', detailKey: 'sys.email.s2d', system: true },
      { icon: Cog, labelKey: 'sys.email.s3', detailKey: 'sys.email.s3d', system: true },
      { icon: Send, labelKey: 'sys.email.s4', detailKey: 'sys.email.s4d', system: true },
      { icon: Bell, labelKey: 'sys.email.s5', detailKey: 'sys.email.s5d', system: true },
      { icon: Database, labelKey: 'sys.email.s6', detailKey: 'sys.email.s6d', system: true },
    ],
  },
  {
    id: 'lead',
    nameKey: 'sys.lead.name', shortKey: 'sys.lead.short', descKey: 'sys.lead.desc',
    steps: [
      { icon: Mail, labelKey: 'sys.lead.s1', detailKey: 'sys.lead.s1d', system: false },
      { icon: Database, labelKey: 'sys.lead.s2', detailKey: 'sys.lead.s2d', system: true },
      { icon: Filter, labelKey: 'sys.lead.s3', detailKey: 'sys.lead.s3d', system: true },
      { icon: ArrowRight, labelKey: 'sys.lead.s4', detailKey: 'sys.lead.s4d', system: true },
      { icon: Bell, labelKey: 'sys.lead.s5', detailKey: 'sys.lead.s5d', system: true },
      { icon: CheckCircle2, labelKey: 'sys.lead.s6', detailKey: 'sys.lead.s6d', system: true },
    ],
  },
  {
    id: 'docs',
    nameKey: 'sys.docs.name', shortKey: 'sys.docs.short', descKey: 'sys.docs.desc',
    steps: [
      { icon: FileText, labelKey: 'sys.docs.s1', detailKey: 'sys.docs.s1d', system: false },
      { icon: Cog, labelKey: 'sys.docs.s2', detailKey: 'sys.docs.s2d', system: true },
      { icon: Filter, labelKey: 'sys.docs.s3', detailKey: 'sys.docs.s3d', system: true },
      { icon: Database, labelKey: 'sys.docs.s4', detailKey: 'sys.docs.s4d', system: true },
      { icon: Bell, labelKey: 'sys.docs.s5', detailKey: 'sys.docs.s5d', system: true },
      { icon: CheckCircle2, labelKey: 'sys.docs.s6', detailKey: 'sys.docs.s6d', system: true },
    ],
  },
];

export function SystemDemos() {
  const { t } = useI18n();
  const [activeId, setActiveId] = useState(SYSTEMS[0].id);
  const active = SYSTEMS.find((s) => s.id === activeId)!;
  const [visibleSteps, setVisibleSteps] = useState(0);

  useEffect(() => {
    setVisibleSteps(0);
    const timers: ReturnType<typeof setTimeout>[] = [];
    for (let i = 1; i <= active.steps.length; i++) {
      timers.push(setTimeout(() => setVisibleSteps(i), 300 + i * 350));
    }
    return () => timers.forEach(clearTimeout);
  }, [activeId, active.steps.length]);

  return (
    <Section id="sistemas" className="border-t border-default">
      <SectionLabel index="07/" label={t('sys.label')} />
      <Reveal>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-[-0.02em] leading-[1.15] max-w-3xl">
          {t('sys.title')}
        </h2>
      </Reveal>
      <Reveal>
        <p className="mt-8 text-lg text-muted max-w-2xl leading-relaxed">{t('sys.desc')}</p>
      </Reveal>

      <Reveal className="mt-12">
        <div className="flex flex-wrap gap-2">
          {SYSTEMS.map((s) => (
            <button
              key={s.id}
              onClick={() => setActiveId(s.id)}
              className={`px-4 py-2.5 text-sm rounded-sm border transition-all duration-300 ${
                s.id === activeId
                  ? 'bg-accent text-[var(--text)] border-accent font-medium'
                  : 'bg-[var(--bg-elev)] text-muted border-default hover:border-bright hover:text-[var(--text)]'
              }`}
            >
              {t(s.shortKey)}
            </button>
          ))}
        </div>
      </Reveal>

      <Reveal className="mt-8">
        <div className="grid lg:grid-cols-[320px_1fr] gap-px bg-[var(--border)] border border-default rounded-sm overflow-hidden">
          <div className="bg-[var(--bg)] p-8 lg:p-10">
            <div className="font-mono text-[11px] tracking-[0.2em] uppercase text-accent mb-4">
              {t('sys.active')}
            </div>
            <h3 className="text-xl font-medium tracking-tight leading-tight">{t(active.nameKey)}</h3>
            <p className="mt-3 text-sm text-muted leading-relaxed">{t(active.descKey)}</p>
            <div className="mt-8 pt-6 border-t border-default">
              <div className="flex items-center gap-2 text-xs text-dim">
                <Clock size={14} />
                <span>{active.steps.length} {t('sys.steps')}</span>
              </div>
            </div>
          </div>

          <div className="bg-[var(--bg-elev)] p-8 lg:p-10">
            <div className="space-y-3">
              {active.steps.map((step, i) => {
                const visible = i < visibleSteps;
                return (
                  <div
                    key={i}
                    className={`flex items-center gap-4 transition-all duration-500 ${
                      visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-3'
                    }`}
                    style={{ transitionDelay: `${i * 50}ms` }}
                  >
                    <div
                      className={`relative flex items-center justify-center w-10 h-10 rounded-sm border shrink-0 ${
                        step.system ? 'border-accent/30 bg-accent/5' : 'border-default bg-[var(--bg)]'
                      }`}
                    >
                      <step.icon size={16} strokeWidth={1.5} className={step.system ? 'text-accent' : 'text-dim'} />
                      {visible && i < active.steps.length - 1 && (
                        <div className="absolute top-full left-1/2 -translate-x-1/2 w-px h-3 bg-[var(--border-bright)]" />
                      )}
                    </div>
                    <div className="flex-1 flex items-center justify-between min-w-0">
                      <div>
                        <div className="text-sm font-medium">{t(step.labelKey)}</div>
                        <div className="text-xs text-dim mt-0.5">{t(step.detailKey)}</div>
                      </div>
                      <span
                        className={`font-mono text-[10px] tracking-wider px-2 py-1 rounded-sm shrink-0 ml-3 ${
                          step.system ? 'text-accent bg-accent/10' : 'text-dim bg-[var(--bg)]'
                        }`}
                      >
                        {step.system ? t('sys.auto') : t('sys.input')}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Reveal>

      <Reveal>
        <p className="mt-6 text-sm text-dim">{t('sys.note')}</p>
      </Reveal>
    </Section>
  );
}
