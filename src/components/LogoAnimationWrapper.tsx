'use client'

import { useEffect, useState } from 'react'
import { LogoAnimation } from './LogoAnimation'

export function LogoAnimationWrapper() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="fixed inset-0 z-[9999] bg-white flex items-center justify-center">
        <div className="w-[300px] h-[300px] bg-gray-100 rounded-lg animate-pulse" />
      </div>
    )
  }

  return <LogoAnimation />
}