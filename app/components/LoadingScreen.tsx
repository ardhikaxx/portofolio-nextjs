'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [count, setCount] = useState(0)
  const [exiting, setExiting] = useState(false)

  useEffect(() => {
    let frame: number
    let startTime = performance.now()
    let previousPause = 0
    let totalPause = 0
    let isPaused = false
    let pauseDuration = 0

    const segments = [
      { from: 0, to: 45, duration: 100 },
      { from: 45, to: 55, duration: 100, pauseAfter: 50 },
      { from: 55, to: 78, duration: 80 },
      { from: 78, to: 85, duration: 100, pauseAfter: 50 },
      { from: 85, to: 93, duration: 70 },
      { from: 93, to: 100, duration: 100, pauseAfter: 50 },
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
          setTimeout(onComplete, 600)
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
