'use client';

import React, { useEffect, useRef, useState } from 'react';

const DIRECTIONS = [
  'up-left',
  'up',
  'up-right',
  'left',
  'center',
  'right',
  'down-left',
  'down',
  'down-right',
] as const;

type Direction = (typeof DIRECTIONS)[number];

const REACTIONS = [
  'blink',
  'heart',
  'sparkle',
  'surprised',
  'wink',
  'bashful',
  'sleepy',
  'dizzy',
  'delighted',
] as const;

type Reaction = (typeof REACTIONS)[number];

// All 9 reactions cycled through on click
const ALL_REACTIONS_CYCLE: Reaction[] = [
  'heart',
  'sparkle',
  'surprised',
  'wink',
  'bashful',
  'delighted',
  'sleepy',
  'dizzy',
  'blink',
];

// Clockwise from the right, matching atan2 with y pointing down.
const CLOCKWISE: Direction[] = [
  'right',
  'down-right',
  'down',
  'down-left',
  'left',
  'up-left',
  'up',
  'up-right',
];

const SECTOR = (Math.PI * 2) / CLOCKWISE.length;
const HYSTERESIS = 0.12;
const DEAD_ZONE = 70;
const BOOP_PAYOFF = 90;
const BOOP_END = 800;
const SQUASH_MS = 420;
const DIZZY_AFTER = 4;
const DIZZY_WINDOW = 1500;
const DIZZY_END = 1200;

const SQUASH: Keyframe[] = [
  { transform: 'scale(1, 1)', easing: 'ease-in' },
  { transform: 'scale(1.10, 0.86)', offset: 0.18, easing: 'ease-out' },
  { transform: 'scale(0.95, 1.08)', offset: 0.45, easing: 'ease-in-out' },
  { transform: 'scale(1.03, 0.97)', offset: 0.72, easing: 'ease-in-out' },
  { transform: 'scale(1, 1)' },
];

function cell(index: number) {
  return {
    backgroundPosition: `${(index % 3) * 50}% ${Math.floor(index / 3) * 50}%`,
  };
}

function wrap(angle: number) {
  return Math.atan2(Math.sin(angle), Math.cos(angle));
}

const layerStyle: React.CSSProperties = {
  position: 'absolute',
  inset: 0,
  backgroundSize: '300% 300%',
  backgroundRepeat: 'no-repeat',
};

interface PageMascotProps {
  directions?: string;
  reactions?: string;
  size?: number;
  label?: string;
  className?: string;
}

export default function PageMascot({
  directions = '/mascots/ardhika-directions.webp',
  reactions = '/mascots/ardhika-reactions.webp',
  size = 130,
  label = 'Yanuar Ardhika mascot',
  className = '',
}: PageMascotProps) {
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const squashRef = useRef<HTMLSpanElement | null>(null);
  const timersRef = useRef<number[]>([]);
  const boopsRef = useRef({ count: 0, at: 0 });
  const clickIndexRef = useRef(0);

  const [direction, setDirection] = useState<Direction>('center');
  const [reaction, setReaction] = useState<Reaction | null>(null);

  useEffect(() => {
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
      return;
    }

    let sector = -1;
    let pointer: { x: number; y: number } | null = null;

    const aim = () => {
      const button = buttonRef.current;
      if (!button || !pointer) {
        return;
      }

      const box = button.getBoundingClientRect();
      const dx = pointer.x - (box.left + box.width / 2);
      const dy = pointer.y - (box.top + box.height / 2);

      if (Math.hypot(dx, dy) < DEAD_ZONE) {
        sector = -1;
        setDirection('center');
        return;
      }

      const angle = Math.atan2(dy, dx);
      if (
        sector !== -1 &&
        Math.abs(wrap(angle - sector * SECTOR)) < SECTOR / 2 + HYSTERESIS
      ) {
        return;
      }

      sector =
        (Math.round(angle / SECTOR) + CLOCKWISE.length) % CLOCKWISE.length;
      setDirection(CLOCKWISE[sector]);
    };

    const onPointerMove = (event: PointerEvent) => {
      pointer = { x: event.clientX, y: event.clientY };
      aim();
    };

    window.addEventListener('pointermove', onPointerMove, { passive: true });
    window.addEventListener('scroll', aim, { passive: true });

    return () => {
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('scroll', aim);
    };
  }, []);

  useEffect(() => {
    return () => {
      timersRef.current.forEach(window.clearTimeout);
    };
  }, []);

  const boop = () => {
    timersRef.current.forEach(window.clearTimeout);
    timersRef.current = [];

    const later = (ms: number, next: Reaction | null) => {
      timersRef.current.push(
        window.setTimeout(() => setReaction(next), ms) as unknown as number
      );
    };

    const now = Date.now();
    const boops = boopsRef.current;
    boops.count = now - boops.at < DIZZY_WINDOW ? boops.count + 1 : 1;
    boops.at = now;

    if (boops.count >= DIZZY_AFTER) {
      boops.count = 0;
      setReaction('dizzy');
      later(DIZZY_END, null);
    } else {
      const nextReaction =
        ALL_REACTIONS_CYCLE[
          clickIndexRef.current % ALL_REACTIONS_CYCLE.length
        ];
      clickIndexRef.current += 1;

      setReaction('blink');
      later(BOOP_PAYOFF, nextReaction);
      later(BOOP_END, null);
    }

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    squashRef.current?.animate(SQUASH, {
      duration: SQUASH_MS,
      easing: 'linear',
    });
  };

  const directionIndex = DIRECTIONS.indexOf(direction);
  const reactionIndex = reaction ? REACTIONS.indexOf(reaction) : 0;

  return (
    <div className="flex justify-center items-center">
      <button
        ref={buttonRef}
        type="button"
        onClick={boop}
        aria-label={`Boop the ${label}`}
        className={`!w-[130px] !h-[130px] sm:!w-[165px] sm:!h-[165px] md:!w-[185px] md:!h-[185px] lg:!w-[200px] lg:!h-[200px] transition-transform duration-200 hover:scale-105 active:scale-95 focus:outline-none ${className}`}
        style={{
          position: 'relative',
          display: 'block',
          flexShrink: 0,
          width: size,
          height: size,
          padding: 0,
          border: 0,
          background: 'transparent',
          appearance: 'none',
          cursor: 'pointer',
          userSelect: 'none',
        }}
      >
        <span
          ref={squashRef}
          style={{
            position: 'relative',
            display: 'block',
            width: '100%',
            height: '100%',
            transformOrigin: '50% 78%',
          }}
        >
          {/* Directions Layer (pointer tracking) */}
          <span
            style={{
              ...layerStyle,
              backgroundImage: `url(${directions})`,
              ...cell(directionIndex),
              opacity: reaction ? 0 : 1,
            }}
          />

          {/* Reactions Layer (click payoffs) */}
          <span
            style={{
              ...layerStyle,
              backgroundImage: `url(${reactions})`,
              ...cell(reactionIndex),
              opacity: reaction ? 1 : 0,
            }}
          />
        </span>
      </button>
    </div>
  );
}
