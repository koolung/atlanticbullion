'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

export function LogoAnimation() {
  const [showAnimation, setShowAnimation] = useState(true)
  const [startExit, setStartExit] = useState(false)

  useEffect(() => {
    // After 2 seconds, start the exit animation
    const exitTimer = setTimeout(() => {
      setStartExit(true)
    }, 2000)

    // Remove the component completely after the animation finishes
    const removeTimer = setTimeout(() => {
      setShowAnimation(false)
    }, 3500) // 2 seconds + 1.5 seconds for animation

    return () => {
      clearTimeout(exitTimer)
      clearTimeout(removeTimer)
    }
  }, [])

  return (
    <AnimatePresence>
      {showAnimation && (
        <motion.div
          initial={{ y: 0, opacity: 1 }}
          animate={{ 
            y: startExit ? '-100%' : 0, 
            opacity: startExit ? 0 : 1 
          }}
          exit={{ y: '-100%', opacity: 0 }}
          transition={{ 
            duration: 1.5, 
            ease: [0.4, 0, 0.2, 1]
          }}
          className="fixed inset-0 z-[9999] bg-white flex items-center justify-center"
        >
          <div className="text-center">
            <Image
              src="/images/logo/animation.gif"
              alt="Atlantic Bullion Logo Animation"
              width={300}
              height={300}
              className="mx-auto"
              priority
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}