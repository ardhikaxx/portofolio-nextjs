'use client'

import { useEffect, useState } from 'react'
import LoadingScreen from './components/LoadingScreen'
import Hero from './ui/hero'

let hasShownLoading = false

export default function Home() {
  const [loaded, setLoaded] = useState(true)

  useEffect(() => {
    if (!hasShownLoading) {
      hasShownLoading = true
      setLoaded(false)
    }
  }, [])

  return (
    <main>
      <Hero />
      {!loaded && <LoadingScreen onComplete={() => setLoaded(true)} />}
    </main>
  )
}
