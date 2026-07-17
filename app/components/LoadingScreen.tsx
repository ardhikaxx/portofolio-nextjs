'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [count, setCount] = useState(0)
  const [exiting, setExiting] = useState(false)

  useEffect(() => {
    let frame: number
    let startTime = performance.now()
    let isPaused = false
    let pauseDuration = 0

    const MIN_DURATION = 1500

    const segments = [
      { from: 0, to: 30, duration: 200 },
      { from: 30, to: 45, duration: 150, pauseAfter: 80 },
      { from: 45, to: 65, duration: 120 },
      { from: 65, to: 80, duration: 130, pauseAfter: 80 },
      { from: 80, to: 92, duration: 100 },
      { from: 92, to: 100, duration: 150, pauseAfter: 100 },
    ]

    let currentSegment = 0
    let segmentStartTime = performance.now()

    function animate(now: number) {
      if (isPaused) {
        if (now - segmentStartTime >= pauseDuration) {
          isPaused = false
          segmentStartTime = now
        }
        frame = requestAnimationFrame(animate)
        return
      }

      const seg = segments[currentSegment]
      const elapsed = now - segmentStartTime
      const progress = Math.min(elapsed / seg.duration, 1)

      const eased = 1 - Math.pow(1 - progress, 3)
      const value = seg.from + (seg.to - seg.from) * eased
      setCount(value)

      if (progress >= 1) {
        setCount(seg.to)
        if (currentSegment < segments.length - 1) {
          currentSegment++
          if (segments[currentSegment].pauseAfter) {
            isPaused = true
            pauseDuration = segments[currentSegment].pauseAfter!
          }
          segmentStartTime = now
        } else {
          setExiting(true)
          const elapsed = now - startTime
          const remaining = Math.max(MIN_DURATION - elapsed, 0)
          setTimeout(onComplete, remaining + 600)
          return
        }
      }

      frame = requestAnimationFrame(animate)
    }

    frame = requestAnimationFrame(animate)

    return () => cancelAnimationFrame(frame)
  }, [onComplete])

  return (
    <motion.div
      className={`fixed inset-0 bg-black flex items-end justify-start p-12 z-50 ${exiting ? 'pointer-events-none' : ''}`}
      animate={exiting ? { opacity: 0 } : { opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
    >
      <div className="text-white font-mono">
        <span className="text-[40vw] sm:text-[300px] font-bold leading-none tabular-nums">
          {Math.floor(count)}
        </span>
        <span className="text-[8vw] sm:text-6xl font-light italic ml-2">%</span>
      </div>
    </motion.div>
  )
}
