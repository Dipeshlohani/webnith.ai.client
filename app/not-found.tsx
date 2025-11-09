'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function NotFound() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-neon-blue/30 rounded-full blur-[120px] animate-float" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-neon-purple/30 rounded-full blur-[120px] animate-float-delayed" />
        <div className="absolute inset-0 cyber-grid-bg opacity-20" />
      </div>

      <div className="container relative z-10 py-20">
        <div className="max-w-3xl mx-auto text-center">
          {/* 404 Number */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <h1 className="text-[200px] font-black leading-none gradient-text">
              404
            </h1>
          </motion.div>

          {/* Message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="heading-lg mb-6">
              Page Not Found
            </h2>
            <p className="text-body mb-12">
              Oops! The page you're looking for doesn't exist. It might have been moved or deleted.
            </p>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link href="/" className="btn-neon px-8 py-4">
              <span className="relative z-10 flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                Go Home
              </span>
            </Link>

            <Link href="/services" className="glass px-8 py-4 rounded-2xl font-bold text-white hover:shadow-glow transition-all duration-300">
              <span className="flex items-center gap-2">
                View Services
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
            </Link>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-16 pt-16 border-t border-white/10"
          >
            <h3 className="text-xl font-bold text-white mb-6">Quick Links</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { name: 'About Us', href: '/about', icon: '👋' },
                { name: 'Contact', href: '/contact', icon: '✉️' },
                { name: 'Portfolio', href: '/portfolio', icon: '🎨' },
                { name: 'Get Quote', href: '/get-quote', icon: '💬' }
              ].map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="glass p-4 rounded-xl hover:shadow-glow transition-all duration-300 group"
                >
                  <div className="text-3xl mb-2">{link.icon}</div>
                  <div className="text-sm font-semibold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-neon-blue group-hover:to-neon-purple transition-all duration-300">
                    {link.name}
                  </div>
                </Link>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

