'use client';

import React from 'react';
import { Mascot } from 'page-mascot';

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
  return (
    <div className="flex justify-center items-center">
      <Mascot
        directions={directions}
        reactions={reactions}
        size={size}
        label={label}
        className={`transition-transform duration-200 hover:scale-105 active:scale-95 focus:outline-none ${className}`}
      />
    </div>
  );
}
