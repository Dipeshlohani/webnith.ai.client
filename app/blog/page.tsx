'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function BlogPage() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-neon-blue/30 rounded-full blur-[120px] animate-float" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-neon-purple/30 rounded-full blur-[120px] animate-float-delayed" />
        <div className="absolute inset-0 cyber-grid-bg opacity-20" />
      </div>

      <div className="container relative z-10 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="mb-8 flex justify-center"
          >
            <div className="relative">
              <div className="w-32 h-32 bg-gradient-to-br from-neon-blue via-neon-purple to-neon-pink rounded-3xl flex items-center justify-center shadow-glow animate-float">
                <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-cyber-yellow rounded-full flex items-center justify-center shadow-lg animate-pulse">
                <span className="text-deep-space text-xs font-bold">✨</span>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-2 glass px-6 py-3 rounded-full mb-8"
          >
            <span className="text-sm font-bold text-white tracking-wider uppercase">Coming Soon</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="heading-xl mb-8"
          >
            Our Blog is in the <span className="gradient-text">Making</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-body mb-12"
          >
            We're crafting something special—a space for insights on web design, AI automation, business intelligence, and the strategies that drive digital growth.
          </motion.p>

          {/* Features Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
          >
            {[
              { icon: '🎨', title: 'Design Insights', description: 'UX patterns & visual trends' },
              { icon: '🤖', title: 'AI & Automation', description: 'Practical ML applications' },
              { icon: '📊', title: 'Data & Analytics', description: 'BI strategies that work' },
              { icon: '🚀', title: 'Growth Tactics', description: 'Marketing & conversion tips' }
            ].map((item, index) => (
              <div key={index} className="card-glass hover:shadow-glow transition-all duration-300">
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="font-bold text-white mb-2 text-sm">{item.title}</h3>
                <p className="text-xs text-frost/70">{item.description}</p>
              </div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link href="/" className="btn-neon px-8 py-4">
              <span className="relative z-10 flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Back to Home
              </span>
            </Link>

            <Link href="/services" className="glass px-8 py-4 rounded-2xl font-bold text-white hover:shadow-glow transition-all duration-300">
              <span className="flex items-center gap-2">
                Explore Services
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

