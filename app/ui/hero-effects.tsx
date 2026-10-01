'use client';

import dynamic from 'next/dynamic';
import { useEffect, useMemo, useState } from 'react';
const Dither = dynamic(() => import('../components/Dither'), {
  ssr: false,
  loading: () => null,
});

export default function HeroEffects() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const connection = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection;
    const saveData = Boolean(connection?.saveData);
    const lowEndCpu = typeof navigator.hardwareConcurrency === 'number' && navigator.hardwareConcurrency <= 4;
    const lowMemory = typeof (navigator as Navigator & { deviceMemory?: number }).deviceMemory === 'number'
      && (navigator as Navigator & { deviceMemory?: number }).deviceMemory! <= 4;

    if (prefersReducedMotion || saveData || lowEndCpu || lowMemory) {
      return;
    }

    const enable = () => {
      setEnabled(true);
      cleanup();
    };

    const cleanup = () => {
      window.removeEventListener('pointerdown', enable);
      window.removeEventListener('pointermove', enable);
      window.removeEventListener('touchstart', enable);
      window.removeEventListener('scroll', enable);
      window.removeEventListener('keydown', enable);
    };

    window.addEventListener('pointerdown', enable, { passive: true });
    window.addEventListener('pointermove', enable, { passive: true });
    window.addEventListener('touchstart', enable, { passive: true });
    window.addEventListener('scroll', enable, { passive: true });
    window.addEventListener('keydown', enable);

    return cleanup;
  }, []);

  const ditherProps = useMemo(
    () => ({
      waveColor: [0.5, 0.5, 0.5] as [number, number, number],
      disableAnimation: false,
      enableMouseInteraction: false,
      mouseRadius: 0.3,
      colorNum: 4,
      waveAmplitude: 0.3,
      waveFrequency: 3,
      waveSpeed: 0.05,
    }),
    []
  );

  if (!enabled) return null;

  return (
    <div className="absolute inset-0 z-0">
      <Dither {...ditherProps} />
      <div className="absolute inset-0 bg-black/30 backdrop-blur-[1px] z-10"></div>
    </div>
  );
}
