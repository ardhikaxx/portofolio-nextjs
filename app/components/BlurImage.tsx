'use client'

import Image from 'next/image'
import { useState } from 'react'

type Props = {
  src: string
  alt: string
  priority?: boolean
  fill?: boolean
  sizes?: string
  className?: string
}

export default function BlurImage({ src, alt, priority, fill, sizes, className }: Props) {
  const [loaded, setLoaded] = useState(false)

  return (
    <div className="relative overflow-hidden bg-white/5 w-full h-full">
      <div
        className={`absolute inset-0 transition-opacity duration-700 ${loaded ? 'opacity-0' : 'opacity-100'}`}
        style={{
          background: 'linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.08) 50%, rgba(255,255,255,0.03) 100%)',
          backdropFilter: 'blur(24px)',
          WebkitBackdropFilter: 'blur(24px)',
        }}
      />
      <Image
        src={src}
        alt={alt}
        priority={priority}
        fill={fill}
        sizes={sizes}
        onLoad={() => setLoaded(true)}
        className={`transition-all duration-700 ${loaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'} ${className ?? ''}`}
      />
    </div>
  )
}