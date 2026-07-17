'use client'

import { useEffect, useState } from 'react'
import LoadingScreen from './LoadingScreen'

let hasShownLoading = false

export default function LoadingWrapper() {
  const [loaded, setLoaded] = useState(true)

  useEffect(() => {
    const navEntry = performance.getEntriesByType?.('navigation')?.[0] as PerformanceNavigationTiming
    const isReload = navEntry?.type === 'reload'

    if (isReload || !hasShownLoading) {
      hasShownLoading = true
      setLoaded(false)
    }
  }, [])

  if (loaded) return null

  return <LoadingScreen onComplete={() => setLoaded(true)} />
}
