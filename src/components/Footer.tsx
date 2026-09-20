import { Mail, Phone, MapPin } from 'lucide-react';
import { Reveal } from '@/components/ui/Section';
import { useI18n } from '@/i18n';

export function Footer() {
  const { t } = useI18n();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-default">
      <div className="relative px-6 md:px-10 lg:px-20 py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 grid-lines grid-lines-fade opacity-20" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-accent/5 blur-[100px] rounded-full pointer-events-none" />
        <div className="relative max-w-4xl mx-auto text-center">
          <Reveal>
            <div className="font-mono text-[11px] tracking-[0.2em] uppercase text-dim mb-6">
              {t('footer.cta.label')}
            </div>
          </Reveal>
          <Reveal>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-light tracking-[-0.03em] leading-[1.1]">
              {t('footer.cta.title1')}
              <br />
              <span className="text-accent">{t('footer.cta.title2')}</span>
            </h2>
          </Reveal>
          <Reveal>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#auditoria"
                className="inline-flex items-center justify-center text-sm font-medium text-[var(--text)] bg-accent px-6 py-3.5 rounded-sm hover:opacity-90 transition-opacity glow-accent"
              >
                {t('footer.cta.button1')}
              </a>
              <a
                href="mailto:dboschmasanas@gmail.com?subject=Bosch%20Systems%20%E2%80%94%20Consulta"
                className="inline-flex items-center justify-center text-sm font-medium text-[var(--text)] border border-bright px-6 py-3.5 rounded-sm hover:bg-[var(--bg-elev)] transition-colors"
              >
                {t('footer.cta.button2')}
              </a>
            </div>
          </Reveal>
        </div>
      </div>

      <div className="border-t border-default px-6 md:px-10 lg:px-20 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-[1fr_auto] gap-8 items-start">
            <div>
              <div className="flex items-center gap-2.5 mb-4">
                <span className="font-mono text-[11px] tracking-[0.15em] text-dim">BS</span>
                <span className="h-3 w-px bg-[var(--border-bright)]" />
                <span className="text-[15px] font-semibold tracking-tight">Bosch Systems</span>
              </div>
              <p className="text-sm text-dim max-w-sm leading-relaxed uppercase tracking-[0.05em] font-mono text-[11px]">
                {t('footer.slogan')} <span className="italic text-muted">{t('footer.slogan.work')}.</span>
              </p>
            </div>

            <div className="space-y-3">
              <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-dim mb-3">
                {t('footer.contact')}
              </div>
              <div className="flex items-center gap-2.5 text-sm">
                <Mail size={14} className="text-dim shrink-0" strokeWidth={1.5} />
                <a href="mailto:dboschmasanas@gmail.com" className="text-muted hover:text-accent transition-colors">
                  dboschmasanas@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2.5 text-sm">
                <Phone size={14} className="text-dim shrink-0" strokeWidth={1.5} />
                <a href="tel:+34621237118" className="text-muted hover:text-accent transition-colors">
                  +34 621 237 118
                </a>
              </div>
              <div className="flex items-center gap-2.5 text-sm">
                <MapPin size={14} className="text-dim shrink-0" strokeWidth={1.5} />
                <span className="text-muted">Banyoles, Girona, Catalunya</span>
              </div>
            </div>
          </div>

          <div className="mt-10 pt-6 border-t border-default flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
            <span className="font-mono text-[10px] tracking-wider text-dim">
              {t('footer.copyright', { year: String(year) })}
            </span>
            <span className="font-mono text-[10px] tracking-wider text-dim">
              {t('footer.founder')}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
