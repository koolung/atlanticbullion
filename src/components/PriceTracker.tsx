'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

interface PriceData {
  gold: number
  silver: number
  goldCAD: number
  silverCAD: number
  timestamp: string
  lastUpdated: string
}

interface MassiveApiResponse {
  results?: Array<{
    T: string // Ticker
    c: number // Close price
    h: number // High price
    l: number // Low price
    o: number // Open price
    t: number // Timestamp
    v: number // Volume
    vw: number // Volume weighted average price
  }>
  status: string
  count?: number
}

export function PriceTracker() {
  const [prices, setPrices] = useState<PriceData>({
    gold: 0,
    silver: 0,
    goldCAD: 0,
    silverCAD: 0,
    timestamp: '',
    lastUpdated: ''
  })
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const API_KEY = 'zQIw9bBF_fOxB3nFTMbwtt9q7bMGxbml'

  // Get USD to CAD exchange rate
  const getUSDToCAD = async (date: string): Promise<number> => {
    try {
      const response = await fetch(`/api/metals-price?symbol=C:USDCAD&date=${date}`)
      if (response.ok) {
        const data: MassiveApiResponse = await response.json()
        if (data.status === 'OK' && data.results?.[0]?.c) {
          return data.results[0].c
        }
      }
    } catch (error) {
      console.warn('Failed to get USD/CAD rate:', error)
    }
    // Fallback exchange rate (approximate)
    return 1.35
  }

  const fetchPrices = async () => {
    try {
      setLoading(true)
      setError(null)

      // Get current date for API call (use last business day for better data availability)
      const today = new Date()
      let lookbackDate = new Date(today)
      
      // Go back up to 5 days to find data (handles weekends and holidays)
      for (let i = 1; i <= 5; i++) {
        lookbackDate = new Date(today)
        lookbackDate.setDate(today.getDate() - i)
        
        // Skip weekends (Saturday = 6, Sunday = 0)
        if (lookbackDate.getDay() !== 0 && lookbackDate.getDay() !== 6) {
          break
        }
      }
      
      const dateStr = lookbackDate.toISOString().split('T')[0]
      console.log('Fetching prices for date:', dateStr)

      // Fetch Gold (XAU/USD) and Silver (XAG/USD) prices
      const [goldResponse, silverResponse] = await Promise.all([
        fetch(`/api/metals-price?symbol=C:XAUUSD&date=${dateStr}`),
        fetch(`/api/metals-price?symbol=C:XAGUSD&date=${dateStr}`)
      ])

      if (!goldResponse.ok || !silverResponse.ok) {
        throw new Error('Failed to fetch price data')
      }

      const goldData: MassiveApiResponse = await goldResponse.json()
      const silverData: MassiveApiResponse = await silverResponse.json()

      if (goldData.status !== 'OK' || silverData.status !== 'OK') {
        console.warn('API returned non-OK status:', { goldData, silverData })
        throw new Error('API returned error status')
      }

      // Extract prices with fallback to 0
      const goldPrice = goldData.results?.[0]?.c ?? 0
      const silverPrice = silverData.results?.[0]?.c ?? 0
      
      // Get USD to CAD exchange rate
      const usdToCAD = await getUSDToCAD(dateStr)
      
      // Calculate CAD prices
      const goldCAD = goldPrice * usdToCAD
      const silverCAD = silverPrice * usdToCAD
      
      console.log('Fetched prices:', { gold: goldPrice, silver: silverPrice, usdToCAD, goldCAD, silverCAD })

      const now = new Date()
      setPrices({
        gold: goldPrice,
        silver: silverPrice,
        goldCAD: goldCAD,
        silverCAD: silverCAD,
        timestamp: now.toISOString(),
        lastUpdated: now.toLocaleTimeString('en-US', {
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit'
        })
      })

    } catch (err) {
      console.error('Error fetching prices:', err)
      const errorMessage = err instanceof Error ? err.message : 'Unknown error'
      setError(`Unable to fetch prices: ${errorMessage}`)
      
      // Set fallback prices to $0 as requested
      const now = new Date()
      setPrices({
        gold: 0,
        silver: 0,
        goldCAD: 0,
        silverCAD: 0,
        timestamp: now.toISOString(),
        lastUpdated: 'Fallback prices'
      })
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchPrices()
    
    // Update prices every 60 seconds
    const interval = setInterval(fetchPrices, 60000)
    
    return () => clearInterval(interval)
  }, [])

  const formatPrice = (price: number) => {
    if (price === 0) return '$0.00'
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(price)
  }

  const formatPriceCAD = (price: number) => {
    if (price === 0) return 'C$0.00'
    return new Intl.NumberFormat('en-CA', {
      style: 'currency',
      currency: 'CAD',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(price)
  }

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.8,
        staggerChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-red-900 py-16 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Live Precious Metals Prices
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Real-time market data powered by professional trading platforms
            </p>
          </motion.div>

          {/* Price Display */}
          <motion.div variants={itemVariants} className="mb-12">
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              
              {/* Gold Price Card */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-600 to-yellow-500 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
                <div className="relative bg-slate-900/90 backdrop-blur-sm border border-yellow-500/30 rounded-2xl p-8 hover:border-yellow-400/50 transition-all duration-300">
                  <div className="flex items-center justify-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center shadow-lg">
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2l2.09 6.26L22 9l-7.91.74L12 16l-2.09-6.26L2 9l7.91-.74L12 2z"/>
                      </svg>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-yellow-400 mb-2">Gold (XAU/USD)</h3>
                  
                  <div className="mb-4">
                    {loading ? (
                      <div className="animate-pulse">
                        <div className="h-12 bg-slate-700 rounded mb-2"></div>
                        <div className="h-12 bg-slate-700 rounded mb-2"></div>
                        <div className="h-4 bg-slate-700 rounded w-3/4 mx-auto"></div>
                      </div>
                    ) : (
                      <>
                        <div className="text-5xl md:text-6xl font-bold text-white mb-2 flex items-end gap-2">
                          {formatPrice(prices.gold)}
                          <span className="text-sm font-normal text-gray-300 mb-2">USD</span>
                        </div>
                        <div className="text-5xl md:text-6xl font-bold text-yellow-200 mb-2 flex items-end gap-2">
                          {formatPriceCAD(prices.goldCAD)}
                          <span className="text-sm font-normal text-gray-300 mb-2">CAD</span>
                        </div>
                        <p className="text-yellow-300 text-lg">per troy ounce</p>
                      </>
                    )}
                  </div>
                  
                  <div className="pt-4 border-t border-yellow-500/20">
                    <div className="flex justify-between text-sm text-yellow-200">
                      <span>Spot Price</span>
                      <span>USD</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Silver Price Card */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-slate-400 to-slate-300 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
                <div className="relative bg-slate-900/90 backdrop-blur-sm border border-slate-500/30 rounded-2xl p-8 hover:border-slate-400/50 transition-all duration-300">
                  <div className="flex items-center justify-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-slate-300 to-slate-500 rounded-full flex items-center justify-center shadow-lg">
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2l2.09 6.26L22 9l-7.91.74L12 16l-2.09-6.26L2 9l7.91-.74L12 2z"/>
                      </svg>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-slate-300 mb-2">Silver (XAG/USD)</h3>
                  
                  <div className="mb-4">
                    {loading ? (
                      <div className="animate-pulse">
                        <div className="h-12 bg-slate-700 rounded mb-2"></div>
                        <div className="h-12 bg-slate-700 rounded mb-2"></div>
                        <div className="h-4 bg-slate-700 rounded w-3/4 mx-auto"></div>
                      </div>
                    ) : (
                      <>
                        <div className="text-5xl md:text-6xl font-bold text-white mb-2 flex items-end gap-2">
                          {formatPrice(prices.silver)}
                          <span className="text-sm font-normal text-gray-300 mb-2">USD</span>
                        </div>
                        <div className="text-5xl md:text-6xl font-bold text-gray-200 mb-2 flex items-end gap-2">
                          {formatPriceCAD(prices.silverCAD)}
                          <span className="text-sm font-normal text-gray-300 mb-2">CAD</span>
                        </div>
                        <p className="text-gray-300 text-lg">per troy ounce</p>
                      </>
                    )}
                  </div>
                  
                  <div className="pt-4 border-t border-slate-500/20">
                    <div className="flex justify-between text-sm text-slate-300">
                      <span>Spot Price</span>
                      <span>USD</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Update Status */}
          <motion.div variants={itemVariants} className="mb-8">
            <div className="inline-flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
              {error ? (
                <>
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <span className="text-red-300 text-sm font-medium">{error}</span>
                </>
              ) : (
                <>
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-slate-300 text-sm">
                    Last updated: {prices.lastUpdated}
                  </span>
                </>
              )}
              
              <button
                onClick={fetchPrices}
                disabled={loading}
                className="ml-3 text-red-400 hover:text-red-300 disabled:opacity-50 transition-colors p-1 hover:bg-white/10 rounded"
                title="Refresh prices"
              >
                <svg className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </button>
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div variants={itemVariants}>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 max-w-2xl mx-auto">
              <h3 className="text-xl font-semibold text-white mb-2">
                Ready to Trade?
              </h3>
              <p className="text-slate-300 text-sm mb-4">
                Contact Atlantic Bullion for current buy/sell spreads and personalized investment guidance.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Get Quote
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </motion.div>

          {/* Disclaimer */}
          <motion.div variants={itemVariants} className="mt-8">
            <p className="text-slate-400 text-sm max-w-3xl mx-auto">
              Prices are for informational purposes only and may not reflect current market conditions. 
              Actual trading prices may vary. Data provided by Massive.com (formerly Polygon.io).
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}