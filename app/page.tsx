'use client'

import { useState } from 'react'
import LoadingScreen from './components/LoadingScreen'
import Hero from './ui/hero'

export default function Home() {
  const [loaded, setLoaded] = useState(false)

  return (
    <main>
      <Hero />
      {!loaded && <LoadingScreen onComplete={() => setLoaded(true)} />}
    </main>
  )
}
