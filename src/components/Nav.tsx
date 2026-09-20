import { useEffect, useState } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { useI18n, type Lang } from '@/i18n';

export function Nav() {
  const { t, lang, setLang } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  const navLinks = [
    { href: '#que-construimos', label: t('nav.capabilities') },
    { href: '#casos-de-uso', label: t('nav.useCases') },
    { href: '#sistemas', label: t('nav.systems') },
    { href: '#nosotros', label: t('nav.about') },
    { href: '#faq', label: t('nav.faq') },
    { href: '#auditoria', label: t('nav.audit') },
  ];

  const langs: { code: Lang; label: string }[] = [
    { code: 'es', label: 'Español' },
    { code: 'en', label: 'English' },
    { code: 'ca', label: 'Català' },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-[var(--bg)]/85 backdrop-blur-xl border-b border-default'
            : 'bg-transparent border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-20 h-16 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-3 group">
            <img
              src={`${import.meta.env.BASE_URL}favicon.png`}
              alt=""
              className="w-10 h-10 object-contain group-hover:opacity-80 transition-opacity"
            />
            <span className="h-3 w-px bg-[var(--border-bright)]" />
            <span className="text-[17px] font-semibold tracking-tight">Bosch Systems</span>
          </a>

          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-[13px] text-muted hover:text-[var(--text)] transition-colors"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            {/* Language selector */}
            <div className="relative hidden md:block">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center gap-1.5 text-[12px] font-mono tracking-wider text-muted hover:text-[var(--text)] transition-colors px-2 py-1"
                aria-label="Language"
              >
                <Globe size={14} strokeWidth={1.5} />
                {t(`lang.${lang}`)}
              </button>
              {langOpen && (
                <div
                  className="absolute right-0 top-full mt-1 bg-[var(--bg-elev)] border border-default rounded-sm overflow-hidden min-w-[100px]"
                  onMouseLeave={() => setLangOpen(false)}
                >
                  {langs.map((l) => (
                    <button
                      key={l.code}
                      onClick={() => { setLang(l.code); setLangOpen(false); }}
                      className={`block w-full text-left px-3 py-2 text-[13px] transition-colors ${
                        l.code === lang
                          ? 'text-accent bg-accent/10'
                          : 'text-muted hover:text-[var(--text)] hover:bg-[var(--bg)]'
                      }`}
                    >
                      {l.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <a
              href="#auditoria"
              className="hidden md:inline-flex items-center gap-2 text-[13px] font-medium text-[var(--text)] bg-accent px-4 py-2 rounded-sm hover:opacity-90 transition-opacity"
            >
              {t('nav.requestAudit')}
            </a>

            <button
              onClick={() => setOpen(true)}
              className="md:hidden text-muted hover:text-[var(--text)] transition-colors"
              aria-label={t('nav.openMenu')}
            >
              <Menu size={20} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-[60] md:hidden transition-opacity duration-300 ${
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="absolute inset-0 bg-[var(--bg)]" />
        <div className="relative h-full flex flex-col">
          <div className="h-16 flex items-center justify-between px-6 border-b border-default">
            <span className="text-[17px] font-semibold tracking-tight">Bosch Systems</span>
            <button
              onClick={() => setOpen(false)}
              className="text-muted hover:text-[var(--text)] transition-colors"
              aria-label={t('nav.closeMenu')}
            >
              <X size={20} />
            </button>
          </div>
          <nav className="flex-1 flex flex-col justify-center px-6 gap-1">
            {navLinks.map((l, i) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-2xl font-light text-muted hover:text-[var(--text)] transition-colors py-3 border-b border-[var(--border)]/50"
              >
                <span className="font-mono text-[11px] text-dim mr-3">
                  0{i + 1}
                </span>
                {l.label}
              </a>
            ))}
          </nav>
          <div className="px-6 py-4 border-t border-default">
            <div className="flex gap-3 mb-4">
              {langs.map((l) => (
                <button
                  key={l.code}
                  onClick={() => setLang(l.code)}
                  className={`text-[13px] font-mono tracking-wider px-3 py-1.5 rounded-sm transition-colors ${
                    l.code === lang
                      ? 'text-accent border border-accent/40 bg-accent/10'
                      : 'text-muted border border-default'
                  }`}
                >
                  {t(`lang.${l.code}`)}
                </button>
              ))}
            </div>
            <a
              href="#auditoria"
              onClick={() => setOpen(false)}
              className="block text-center text-sm font-medium text-[var(--text)] bg-accent px-4 py-3 rounded-sm"
            >
              {t('nav.requestAudit')}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
