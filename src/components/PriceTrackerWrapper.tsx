'use client'

import { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'

// Dynamically import PriceTracker with no SSR to prevent hydration issues
const PriceTrackerComponent = dynamic(
  () => import('./PriceTracker').then((mod) => ({ default: mod.PriceTracker })),
  {
    ssr: false,
    loading: () => (
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-red-900 py-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            {/* Header */}
            <div className="mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Live Precious Metals Prices
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                Real-time market data powered by professional trading platforms
              </p>
            </div>

            {/* Loading Cards */}
            <div className="mb-12">
              <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {/* Gold Loading Card */}
                <div className="bg-slate-900/90 backdrop-blur-sm border border-yellow-500/30 rounded-2xl p-8">
                  <div className="flex items-center justify-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center shadow-lg">
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2l2.09 6.26L22 9l-7.91.74L12 16l-2.09-6.26L2 9l7.91-.74L12 2z"/>
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-yellow-400 mb-2">Gold (XAU/USD)</h3>
                  <div className="animate-pulse mb-4">
                    <div className="h-16 bg-slate-700 rounded mb-2"></div>
                    <div className="h-6 bg-slate-700 rounded w-3/4 mx-auto mb-2"></div>
                    <div className="h-6 bg-slate-700 rounded w-2/3 mx-auto"></div>
                  </div>
                </div>

                {/* Silver Loading Card */}
                <div className="bg-slate-900/90 backdrop-blur-sm border border-slate-500/30 rounded-2xl p-8">
                  <div className="flex items-center justify-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-slate-300 to-slate-500 rounded-full flex items-center justify-center shadow-lg">
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2l2.09 6.26L22 9l-7.91.74L12 16l-2.09-6.26L2 9l7.91-.74L12 2z"/>
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-300 mb-2">Silver (XAG/USD)</h3>
                  <div className="animate-pulse mb-4">
                    <div className="h-16 bg-slate-700 rounded mb-2"></div>
                    <div className="h-6 bg-slate-700 rounded w-3/4 mx-auto mb-2"></div>
                    <div className="h-6 bg-slate-700 rounded w-2/3 mx-auto"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Loading Status */}
            <div className="mb-8">
              <div className="inline-flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
                <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                <span className="text-slate-300 text-sm">Loading current prices...</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
)

export function PriceTrackerWrapper() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-red-900 py-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Live Precious Metals Prices
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                Loading market data...
              </p>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return <PriceTrackerComponent />
}