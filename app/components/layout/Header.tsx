'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const services = [
    { name: 'Web Design & Development', href: '/services/web-design', icon: '🎨' },
    { name: 'Chatbots', href: '/services/chatbot', icon: '🤖' },
    { name: 'Content Creation', href: '/services/content-creation', icon: '✍️' },
    { name: 'Business Intelligence', href: '/services/business-intelligence', icon: '📊' },
    { name: 'AI / ML', href: '/services/ai-ml', icon: '🧠' },
    { name: 'Add-Ons', href: '/services/add-ons', icon: '🔧' }
  ]

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass shadow-xl' : 'bg-transparent'
          }`}
      >
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center group">
              <div className="relative w-32 h-auto">
                <img
                  src="/img/logo2.svg"
                  alt="Webnith Logo"
                  className="w-full h-auto transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              <Link href="/" className="text-white/80 hover:text-white transition-colors link-underline">
                Home
              </Link>

              {/* Services Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                <button className="text-white/80 hover:text-white transition-colors flex items-center gap-1">
                  Services
                  <svg className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                <AnimatePresence>
                  {isServicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-72 bg-midnight/95 backdrop-blur-xl rounded-2xl p-4 shadow-2xl border border-white/10"
                    >
                      <div className="space-y-2">
                        {services.map((service, index) => (
                          <Link
                            key={index}
                            href={service.href}
                            className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/10 transition-all group"
                          >
                            <span className="text-2xl">{service.icon}</span>
                            <span className="text-white group-hover:text-neon-blue transition-colors text-sm font-medium">
                              {service.name}
                            </span>
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link href="/podcasts" className="text-white/80 hover:text-white transition-colors link-underline">
                Podcast
              </Link>
              <Link href="/about" className="text-white/80 hover:text-white transition-colors link-underline">
                About
              </Link>
              <Link href="/contact" className="text-white/80 hover:text-white transition-colors link-underline">
                Contact
              </Link>
            </div>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <Link
                href="/get-quote"
                className="btn-neon px-6 py-3 text-sm"
              >
                <span className="relative z-10">Get A Free Quote</span>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden glass p-3 rounded-xl"
              aria-label="Toggle menu"
            >
              <div className="w-6 h-5 flex flex-col justify-between">
                <span className={`block h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                <span className={`block h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
                <span className={`block h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
              </div>
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div className="absolute inset-0 bg-deep-space/95 backdrop-blur-xl">
              <nav className="h-full flex flex-col items-center justify-center gap-8 p-8">
                <Link
                  href="/"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-3xl font-bold text-white/80 hover:text-white transition-colors"
                >
                  Home
                </Link>

                <div className="space-y-4">
                  <p className="text-xl font-bold text-white/60 text-center">Services</p>
                  {services.map((service, index) => (
                    <Link
                      key={index}
                      href={service.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="flex items-center gap-3 justify-center text-xl text-white/80 hover:text-white transition-colors"
                    >
                      <span>{service.icon}</span>
                      <span>{service.name}</span>
                    </Link>
                  ))}
                </div>

                <Link
                  href="/podcasts"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-3xl font-bold text-white/80 hover:text-white transition-colors"
                >
                  Podcast
                </Link>
                <Link
                  href="/about"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-3xl font-bold text-white/80 hover:text-white transition-colors"
                >
                  About
                </Link>
                <Link
                  href="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-3xl font-bold text-white/80 hover:text-white transition-colors"
                >
                  Contact
                </Link>

                <Link
                  href="/get-quote"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="btn-neon px-8 py-4 text-lg mt-4"
                >
                  <span className="relative z-10">Get A Free Quote</span>
                </Link>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

