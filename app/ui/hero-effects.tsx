'use client';

import dynamic from 'next/dynamic';
import { useEffect, useMemo, useState } from 'react';
import Sticker from '../../public/img/sticker.webp';

const Dither = dynamic(() => import('../components/Dither'), {
  ssr: false,
  loading: () => null,
});

const StickerPeel = dynamic(() => import('../components/StickerPeel'), {
  ssr: false,
  loading: () => null,
});

export default function HeroEffects() {
  const [enabled, setEnabled] = useState(false);
  const [stickerSize, setStickerSize] = useState(150);
  const [stickerPosition, setStickerPosition] = useState({ x: 40, y: -140 });

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

  useEffect(() => {
    if (!enabled) return;
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setStickerSize(240);
        setStickerPosition({ x: 20, y: -225 });
      } else {
        setStickerSize(150);
        setStickerPosition({ x: 10, y: -230 });
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [enabled]);

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
    <>
      <StickerPeel
        imageSrc={Sticker.src}
        width={stickerSize}
        rotate={0}
        peelBackHoverPct={10}
        peelBackActivePct={20}
        shadowIntensity={0.3}
        lightingIntensity={0.1}
        initialPosition={stickerPosition}
        className="z-50"
      />
      <div className="absolute inset-0 z-0">
        <Dither {...ditherProps} />
        <div className="absolute inset-0 bg-black/30 backdrop-blur-[1px] z-10"></div>
      </div>
    </>
  );
}
