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
        className={`!w-[130px] !h-[130px] sm:!w-[165px] sm:!h-[165px] md:!w-[185px] md:!h-[185px] lg:!w-[200px] lg:!h-[200px] transition-transform duration-200 hover:scale-105 active:scale-95 focus:outline-none ${className}`}
      />
    </div>
  );
}
