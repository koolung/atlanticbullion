'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#services', label: 'Services' },
    { href: '#products', label: 'Products' },
    { href: '/bullion-terms', label: 'Bullion Terms' },
    { href: '#contact', label: 'Contact' },
  ]

  // Animation variants based on AppleTextLoader pattern
  const container = {
    hidden: {
      opacity: 0
    },
    visible: (i = 1) => ({
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.05 * i
      }
    })
  }

  const childContainer = {
    hidden: {
      opacity: 0,
      y: 30,
      transition: { type: "spring" as const }
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.2, type: "spring" as const }
    }
  }

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/" className="relative block">
                {/* Default logo (3.svg) */}
                <img 
                    src="/images/logo/horizontal/3.svg" 
                    alt="Atlantic Bullion"
                    className={`w-36 h-auto transition-opacity duration-500 ${
                        isScrolled ? 'opacity-0' : 'opacity-100'
                    }`}
                />
                {/* Scrolled logo (2.svg) */}
                <img 
                  src="/images/logo/horizontal/2.svg" 
                  alt="Atlantic Bullion"
                  className={`absolute top-0 left-0 w-36 h-auto transition-opacity duration-500 ${
                    isScrolled ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {navItems.map((item) => (
                  item.href.startsWith('/') ? (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="text-gray-700 hover:text-red-600 px-3 py-2 text-sm font-medium transition-colors duration-200"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <a
                      key={item.href}
                      href={item.href}
                      className="text-gray-700 hover:text-red-600 px-3 py-2 text-sm font-medium transition-colors duration-200"
                    >
                      {item.label}
                    </a>
                  )
                ))}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-red-600  focus:outline-none focus:ring-inset focus:ring-red-500 transition-colors duration-200"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {/* Animated Hamburger/X icon */}
                <div className="relative w-6 h-6">
                  <span className={`absolute top-1.5 left-0 w-6 h-0.5 bg-current transform transition-all duration-300 ${
                    isMenuOpen ? 'rotate-45 translate-y-1.5' : ''
                  }`}></span>
                  <span className={`absolute top-3 left-0 w-6 h-0.5 bg-current transform transition-all duration-300 ${
                    isMenuOpen ? 'opacity-0' : 'opacity-100'
                  }`}></span>
                  <span className={`absolute top-4.5 left-0 w-6 h-0.5 bg-current transform transition-all duration-300 ${
                    isMenuOpen ? '-rotate-45 translate-y-[0.675rem]' : ''
                  }`}></span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile menu panel */}
      <div className={`fixed inset-0 z-40 md:hidden transition-opacity duration-300 ${
        isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}>
        {/* Background overlay */}
        <div 
          className={`fixed inset-0 bg-black transition-opacity duration-300 ${
            isMenuOpen ? 'bg-opacity-50' : 'bg-opacity-0'
          }`}
          onClick={toggleMenu}
        ></div>
        
        {/* Menu panel - slides from right to left with glass effect */}
        <div className={`fixed right-0 top-0 h-full w-80 glass-nav transform transition-transform duration-300 ease-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          <div className="pt-24 pb-6 px-6">
            <motion.div
              variants={container}
              initial="hidden"
              animate={isMenuOpen ? "visible" : "hidden"}
              className="space-y-1"
            >
              {navItems.map((item, index) => (
                <div key={index} className="h-fit overflow-hidden">
                  <motion.div variants={childContainer}>
                    {item.href.startsWith('/') ? (
                      <Link
                        href={item.href}
                        className="block px-3 py-4 text-3xl font-bold hover:bg-gray-100/50 rounded-md transition-colors duration-200"
                        onClick={toggleMenu}
                      >
                        {item.label.split(" ").map((word, wordIndex) => (
                          <motion.span
                            variants={childContainer}
                            className="mr-2 text-gray-900 hover:text-red-600"
                            key={wordIndex}
                          >
                            {word}
                          </motion.span>
                        ))}
                      </Link>
                    ) : (
                      <a
                        href={item.href}
                        className="block px-3 py-4 text-3xl font-bold hover:bg-gray-100/50 rounded-md transition-colors duration-200"
                        onClick={toggleMenu}
                      >
                        {item.label.split(" ").map((word, wordIndex) => (
                          <motion.span
                            variants={childContainer}
                            className="mr-2 text-gray-900 hover:text-red-600"
                            key={wordIndex}
                          >
                            {word}
                          </motion.span>
                        ))}
                      </a>
                    )}
                  </motion.div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </>
  )
}