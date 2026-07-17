'use client'

import { createContext, useContext, useState, useEffect, useRef, type ReactNode } from 'react'

type LoadingContextType = {
  hasLoaded: boolean
  markLoaded: () => void
}

const LoadingContext = createContext<LoadingContextType>({
  hasLoaded: false,
  markLoaded: () => {},
})

export function LoadingProvider({ children }: { children: ReactNode }) {
  const [hasLoaded, setHasLoaded] = useState(false)

  return (
    <LoadingContext.Provider value={{ hasLoaded, markLoaded: () => setHasLoaded(true) }}>
      {children}
    </LoadingContext.Provider>
  )
}

export function useLoading() {
  return useContext(LoadingContext)
}
