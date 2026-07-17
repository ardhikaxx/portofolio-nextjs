'use client'

import { useEffect, useState } from 'react'
import LoadingScreen from './LoadingScreen'
import { useLoading } from './LoadingContext'

export default function LoadingWrapper() {
  const [loaded, setLoaded] = useState(true)
  const { hasLoaded, markLoaded } = useLoading()

  useEffect(() => {
    if (!hasLoaded) {
      setLoaded(false)
    }
  }, [hasLoaded])

  if (loaded) return null

  return <LoadingScreen onComplete={() => { markLoaded(); setLoaded(true) }} />
}