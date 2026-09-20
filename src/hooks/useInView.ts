import { useEffect, useRef, useState } from 'react';

/**
 * Reveal-on-scroll hook. Attach the returned ref to a container; when it
 * enters the viewport, `inView` flips true and stays true. Pairs with the
 * `.reveal` / `.stagger` CSS classes.
 */
export function useInView<T extends HTMLElement = HTMLDivElement>(
  options?: IntersectionObserverInit
) {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -10% 0px', ...options }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [options]);

  return { ref, inView } as const;
}
