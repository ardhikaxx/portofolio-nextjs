'use client'

import { useEffect, useState } from 'react'
import LoadingScreen from './components/LoadingScreen'
import Hero from './ui/hero'

export default function Home() {
  const [loaded, setLoaded] = useState(true)

  useEffect(() => {
    const shown = sessionStorage.getItem('loaded')
    if (!shown) {
      setLoaded(false)
    }
  }, [])

  return (
    <main>
      <Hero />
      {!loaded && <LoadingScreen onComplete={() => {
        sessionStorage.setItem('loaded', '1')
        setLoaded(true)
      }} />}
    </main>
  )
}
