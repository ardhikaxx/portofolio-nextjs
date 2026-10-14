'use client';

import React, { useRef, useEffect } from 'react';

export interface LetterGlitchProps {
  glitchColors?: string[];
  className?: string;
  glitchSpeed?: number;
  centerVignette?: boolean;
  outerVignette?: boolean;
  smooth?: boolean;
  lightMode?: boolean;
  backgroundColor?: string;
  characters?: string;
}

interface LetterItem {
  char: string;
  rgb: { r: number; g: number; b: number };
}

const FALLBACK_RGB = { r: 212, g: 212, b: 216 };

export default function LetterGlitch({
  glitchColors = ['#ffffff', '#d4d4d8', '#71717a', '#3f3f46'],
  className = '',
  glitchSpeed = 75,
  centerVignette = false,
  outerVignette = true,
  lightMode = false,
  backgroundColor,
  characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$&*()-_+=/[]{};:<>.,0123456789',
}: LetterGlitchProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const animationRef = useRef<number | null>(null);
  const letters = useRef<LetterItem[]>([]);
  const grid = useRef({ columns: 0, rows: 0 });
  const context = useRef<CanvasRenderingContext2D | null>(null);
  const lastGlitchTime = useRef(0);

  const lettersAndSymbols = Array.from(characters);

  // Optimized spacing to reduce total grid cells by ~75%
  const fontSize = 16;
  const charWidth = 20;
  const charHeight = 28;

  const getRandomChar = () => {
    return lettersAndSymbols[Math.floor(Math.random() * lettersAndSymbols.length)];
  };

  const getRandomColor = () => {
    return glitchColors[Math.floor(Math.random() * glitchColors.length)];
  };

  const hexToRgb = (hex: string) => {
    const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    const formatted = hex.replace(shorthandRegex, (_m, r, g, b) => r + r + g + g + b + b);
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(formatted);
    return result
      ? {
          r: parseInt(result[1], 16),
          g: parseInt(result[2], 16),
          b: parseInt(result[3], 16),
        }
      : null;
  };

  const rgbToCss = ({ r, g, b }: { r: number; g: number; b: number }) => `rgb(${r},${g},${b})`;

  const getRandomRgb = () => hexToRgb(getRandomColor()) || FALLBACK_RGB;

  const calculateGrid = (width: number, height: number) => {
    const columns = Math.ceil(width / charWidth);
    const rows = Math.ceil(height / charHeight);
    return { columns, rows };
  };

  const initializeLetters = (columns: number, rows: number) => {
    grid.current = { columns, rows };
    const totalLetters = columns * rows;
    letters.current = Array.from({ length: totalLetters }, () => ({
      char: getRandomChar(),
      rgb: getRandomRgb(),
    }));
  };

  const drawLetters = () => {
    if (!context.current || !canvasRef.current || letters.current.length === 0) return;
    const ctx = context.current;
    const rect = canvasRef.current.getBoundingClientRect();
    ctx.clearRect(0, 0, rect.width, rect.height);
    ctx.font = `${fontSize}px monospace`;
    ctx.textBaseline = 'top';

    const cols = grid.current.columns;
    const list = letters.current;
    const len = list.length;

    for (let index = 0; index < len; index++) {
      const item = list[index];
      const x = (index % cols) * charWidth;
      const y = Math.floor(index / cols) * charHeight;
      ctx.fillStyle = rgbToCss(item.rgb);
      ctx.fillText(item.char, x, y);
    }
  };

  const resizeCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const parent = canvas.parentElement;
    if (!parent) return;

    // Cap DPR to 1.25 to prevent massive 4K canvas allocation on retina/mobile
    const dpr = typeof window !== 'undefined' ? Math.min(window.devicePixelRatio || 1, 1.25) : 1;
    const rect = parent.getBoundingClientRect();

    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;

    canvas.style.width = `${rect.width}px`;
    canvas.style.height = `${rect.height}px`;

    if (context.current) {
      context.current.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    const { columns, rows } = calculateGrid(rect.width, rect.height);
    initializeLetters(columns, rows);
    drawLetters();
  };

  const updateLetters = () => {
    const list = letters.current;
    const len = list.length;
    if (len === 0) return;

    // Glitch a small, subtle 3% subset of letters
    const updateCount = Math.max(1, Math.floor(len * 0.03));
    for (let i = 0; i < updateCount; i++) {
      const index = Math.floor(Math.random() * len);
      list[index].char = getRandomChar();
      list[index].rgb = getRandomRgb();
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    context.current = canvas.getContext('2d');
    resizeCanvas();

    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
    // On mobile devices, draw static grid once and DO NOT run continuous animation loop (saves 100% CPU & battery)
    if (isMobile) {
      return;
    }

    let animationRunning = false;
    const animate = (timestamp: number) => {
      if (!animationRunning) return;

      if (timestamp - lastGlitchTime.current >= glitchSpeed) {
        updateLetters();
        drawLetters();
        lastGlitchTime.current = timestamp;
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    // Defer animation loop start until 1500ms after mount to ensure 0ms TBT during initial page load
    let startTimeout: NodeJS.Timeout | null = setTimeout(() => {
      animationRunning = true;
      animationRef.current = requestAnimationFrame(animate);
    }, 1500);

    let resizeTimeout: NodeJS.Timeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        if (animationRef.current) cancelAnimationFrame(animationRef.current);
        resizeCanvas();
        if (typeof window !== 'undefined' && window.innerWidth >= 768) {
          animationRunning = true;
          animationRef.current = requestAnimationFrame(animate);
        }
      }, 150);
    };

    const handleVisibility = () => {
      if (document.hidden) {
        animationRunning = false;
        if (animationRef.current) cancelAnimationFrame(animationRef.current);
      } else if (typeof window !== 'undefined' && window.innerWidth >= 768) {
        animationRunning = true;
        animationRef.current = requestAnimationFrame(animate);
      }
    };

    window.addEventListener('resize', handleResize, { passive: true });
    document.addEventListener('visibilitychange', handleVisibility);

    return () => {
      animationRunning = false;
      if (startTimeout) clearTimeout(startTimeout);
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
      clearTimeout(resizeTimeout);
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('visibilitychange', handleVisibility);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [glitchSpeed]);

  const containerStyle: React.CSSProperties = {
    position: 'relative',
    width: '100%',
    height: '100%',
    backgroundColor: backgroundColor || (lightMode ? '#ffffff' : '#000000'),
    overflow: 'hidden',
  };

  const canvasStyle: React.CSSProperties = {
    display: 'block',
    width: '100%',
    height: '100%',
  };

  const outerVignetteStyle: React.CSSProperties = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    pointerEvents: 'none',
    background: lightMode
      ? 'radial-gradient(circle, rgba(255,255,255,0) 58%, rgba(255,255,255,0.96) 100%)'
      : 'radial-gradient(circle, rgba(0,0,0,0) 55%, rgba(0,0,0,0.95) 100%)',
  };

  const centerVignetteStyle: React.CSSProperties = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    pointerEvents: 'none',
    background: lightMode
      ? 'radial-gradient(circle, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0) 60%)'
      : 'radial-gradient(circle, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 60%)',
  };

  return (
    <div style={containerStyle} className={className}>
      <canvas ref={canvasRef} style={canvasStyle} />
      {outerVignette && <div style={outerVignetteStyle} />}
      {centerVignette && <div style={centerVignetteStyle} />}
    </div>
  );
}
