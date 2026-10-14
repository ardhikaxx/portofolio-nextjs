'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<{ scrollTo: (target: number, opts?: { immediate?: boolean }) => void; destroy: () => void } | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    // Only import and initialize Lenis on desktop devices with a precision mouse/pointer
    if (typeof window === 'undefined' || !window.matchMedia('(pointer: fine)').matches) {
      return;
    }

    let animationFrameId: number;
    let isCancelled = false;

    // Dynamically import Lenis to prevent shipping 30+ KiB of unused JS to mobile devices
    import('lenis').then(({ default: Lenis }) => {
      if (isCancelled) return;

      const lenis = new Lenis({
        duration: 1.0,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
        wheelMultiplier: 1,
        syncTouch: false,
      });

      lenisRef.current = lenis;

      function raf(time: number) {
        lenis.raf(time);
        animationFrameId = requestAnimationFrame(raf);
      }

      animationFrameId = requestAnimationFrame(raf);
    });

    return () => {
      isCancelled = true;
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
      if (lenisRef.current) {
        lenisRef.current.destroy();
        lenisRef.current = null;
      }
    };
  }, []);

  // Reset scroll to top cleanly when route changes
  useEffect(() => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { immediate: true });
    }
  }, [pathname]);

  return <>{children}</>;
}
