import { useState } from 'react';
import { CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { Section, SectionLabel, Reveal } from '@/components/ui/Section';
import { useI18n } from '@/i18n';

type Status = 'idle' | 'submitting' | 'success' | 'error';

const EDGE_FUNCTION_URL = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/send-audit-email`;
const ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY as string;

export function AuditForm() {
  const { t } = useI18n();
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '' });
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const update = (key: keyof typeof form, value: string) => {
    setForm((f) => ({ ...f, [key]: value }));
    if (status === 'error') setStatus('idle');
  };

  const validate = (): string | null => {
    if (!form.name.trim()) return t('audit.err.name');
    if (!form.email.trim()) return t('audit.err.email');
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) return t('audit.err.emailFormat');
    if (!form.message.trim() || form.message.trim().length < 10) return t('audit.err.message');
    return null;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const error = validate();
    if (error) {
      setStatus('error');
      setErrorMsg(error);
      return;
    }

    setStatus('submitting');
    setErrorMsg('');

    try {
      const response = await fetch(EDGE_FUNCTION_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${ANON_KEY}`,
        },
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim(),
          company: form.company.trim(),
          message: form.message.trim(),
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }

      const data = await response.json();
      if (data.error) {
        throw new Error(data.error);
      }

      setStatus('success');
      setForm({ name: '', email: '', company: '', message: '' });
    } catch (err) {
      setStatus('error');
      const detail = err instanceof Error ? err.message : String(err);
      setErrorMsg(
        detail.includes('Email sending failed')
          ? t('audit.err.service')
          : t('audit.err.submit')
      );
    }
  };

  const altText = t('audit.alt', { email: 'dboschmasanas@gmail.com', phone: '+34 621 237 118' });

  return (
    <Section id="auditoria" className="border-t border-default">
      <SectionLabel index="12/" label={t('audit.label')} />
      <Reveal>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-[-0.02em] leading-[1.15] max-w-3xl">
          {t('audit.title')}
        </h2>
      </Reveal>
      <Reveal>
        <p className="mt-8 text-lg text-muted max-w-2xl leading-relaxed">
          {t('audit.desc')}
        </p>
      </Reveal>

      <Reveal className="mt-12">
        <div className="max-w-2xl">
          {status === 'success' ? (
            <div className="border border-accent/30 bg-accent/5 rounded-sm p-8 md:p-10 text-center">
              <CheckCircle2 size={32} className="text-accent mx-auto mb-4" strokeWidth={1.5} />
              <h3 className="text-xl font-medium tracking-tight">
                {t('audit.success.title')}
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed max-w-md mx-auto">
                {t('audit.success.desc')}
              </p>
              <button
                onClick={() => setStatus('idle')}
                className="mt-6 text-sm text-accent hover:underline"
              >
                {t('audit.sendAnother')}
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5" noValidate>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs text-dim mb-2 font-mono tracking-wider uppercase">
                    {t('audit.name')} *
                  </label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => update('name', e.target.value)}
                    disabled={status === 'submitting'}
                    className="w-full bg-[var(--bg-elev)] border border-default rounded-sm px-4 py-3 text-sm text-[var(--text)] placeholder:text-dim focus:border-accent focus:outline-none transition-colors disabled:opacity-50"
                    placeholder={t('audit.name.placeholder')}
                  />
                </div>
                <div>
                  <label className="block text-xs text-dim mb-2 font-mono tracking-wider uppercase">
                    {t('audit.email')} *
                  </label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => update('email', e.target.value)}
                    disabled={status === 'submitting'}
                    className="w-full bg-[var(--bg-elev)] border border-default rounded-sm px-4 py-3 text-sm text-[var(--text)] placeholder:text-dim focus:border-accent focus:outline-none transition-colors disabled:opacity-50"
                    placeholder={t('audit.email.placeholder')}
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs text-dim mb-2 font-mono tracking-wider uppercase">
                  {t('audit.company')}
                </label>
                <input
                  type="text"
                  value={form.company}
                  onChange={(e) => update('company', e.target.value)}
                  disabled={status === 'submitting'}
                  className="w-full bg-[var(--bg-elev)] border border-default rounded-sm px-4 py-3 text-sm text-[var(--text)] placeholder:text-dim focus:border-accent focus:outline-none transition-colors disabled:opacity-50"
                  placeholder={t('audit.company.placeholder')}
                />
              </div>
              <div>
                <label className="block text-xs text-dim mb-2 font-mono tracking-wider uppercase">
                  {t('audit.message')} *
                </label>
                <textarea
                  value={form.message}
                  onChange={(e) => update('message', e.target.value)}
                  disabled={status === 'submitting'}
                  rows={5}
                  className="w-full bg-[var(--bg-elev)] border border-default rounded-sm px-4 py-3 text-sm text-[var(--text)] placeholder:text-dim focus:border-accent focus:outline-none transition-colors disabled:opacity-50 resize-none"
                  placeholder={t('audit.message.placeholder')}
                />
              </div>

              {status === 'error' && (
                <div className="flex items-start gap-2.5 text-sm text-[#ff6b6b]">
                  <AlertCircle size={16} className="shrink-0 mt-0.5" strokeWidth={1.5} />
                  <span>{errorMsg}</span>
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="inline-flex items-center gap-2 text-sm font-medium text-[var(--text)] bg-accent px-6 py-3.5 rounded-sm hover:opacity-90 transition-opacity disabled:opacity-50 glow-accent"
              >
                {status === 'submitting' ? (
                  <>
                    <Loader2 size={16} className="animate-spin" />
                    {t('audit.submitting')}
                  </>
                ) : (
                  t('audit.submit')
                )}
              </button>

              <p className="text-xs text-dim leading-relaxed pt-2">
                {altText}
              </p>
            </form>
          )}
        </div>
      </Reveal>
    </Section>
  );
}
