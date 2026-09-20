import { type ReactNode } from 'react';
import { useInView } from '@/hooks/useInView';

/** Monospaced section index, e.g. "00/EL PROBLEMA" */
export function SectionLabel({ index, label }: { index: string; label: string }) {
  return (
    <div className="flex items-center gap-3 font-mono text-[11px] tracking-[0.2em] uppercase text-dim mb-12">
      <span className="text-accent">{index}</span>
      <span className="h-px w-8 bg-[var(--border-bright)]" />
      <span>{label}</span>
    </div>
  );
}

/** Full section wrapper with consistent padding and optional grid background */
export function Section({
  id,
  children,
  className = '',
  grid = false,
}: {
  id?: string;
  children: ReactNode;
  className?: string;
  grid?: boolean;
}) {
  return (
    <section
      id={id}
      className={`relative px-6 md:px-10 lg:px-16 py-24 md:py-32 ${className}`}
    >
      {grid && (
        <div className="absolute inset-0 grid-lines grid-lines-fade pointer-events-none opacity-30" />
      )}
      <div className="relative max-w-7xl mx-auto">{children}</div>
    </section>
  );
}

/** Reveal wrapper — fades children up on scroll */
export function Reveal({
  children,
  className = '',
  stagger = false,
}: {
  children: ReactNode;
  className?: string;
  stagger?: boolean;
}) {
  const { ref, inView } = useInView();
  return (
    <div
      ref={ref}
      className={`${stagger ? 'stagger' : 'reveal'} ${inView ? 'in-view' : ''} ${className}`}
    >
      {children}
    </div>
  );
}
