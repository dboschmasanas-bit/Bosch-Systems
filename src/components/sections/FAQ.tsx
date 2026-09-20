import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { Section, SectionLabel, Reveal } from '@/components/ui/Section';
import { useI18n } from '@/i18n';

export function FAQ() {
  const { t } = useI18n();
  const [open, setOpen] = useState<number | null>(0);

  return (
    <Section id="faq" className="border-t border-default">
      <SectionLabel index="11/" label={t('faq.label')} />
      <Reveal>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-[-0.02em] leading-[1.15] max-w-3xl">
          {t('faq.title')}
        </h2>
      </Reveal>

      <Reveal className="mt-12 border-t border-default">
        {[1, 2, 3, 4, 5].map((i) => (
          <div key={i} className="border-b border-default">
            <button
              onClick={() => setOpen(open === i ? null : i)}
              className="w-full flex items-center justify-between gap-4 py-6 text-left group"
            >
              <div className="flex items-center gap-4">
                <span className="font-mono text-[11px] text-dim shrink-0">
                  0{i}
                </span>
                <span className="text-base md:text-lg font-medium tracking-tight group-hover:text-accent transition-colors">
                  {t(`faq.${i}.q`)}
                </span>
              </div>
              {open === i ? (
                <Minus size={18} className="text-accent shrink-0" strokeWidth={1.5} />
              ) : (
                <Plus size={18} className="text-dim shrink-0 group-hover:text-muted transition-colors" strokeWidth={1.5} />
              )}
            </button>
            <div
              className={`overflow-hidden transition-all duration-400 ${
                open === i ? 'max-h-48 pb-6' : 'max-h-0'
              }`}
            >
              <p className="text-sm text-muted leading-relaxed pl-10 pr-4 max-w-2xl">
                {t(`faq.${i}.a`)}
              </p>
            </div>
          </div>
        ))}
      </Reveal>
    </Section>
  );
}
