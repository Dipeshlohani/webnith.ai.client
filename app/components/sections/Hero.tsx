'use client'

import { motion } from 'framer-motion'
import Button from '../ui/Button'

interface HeroProps {
  eyebrow: string
  title: string
  description: string
  ctaButtons: Array<{
    text: string
    href: string
    variant: 'primary' | 'secondary' | 'ghost' | 'outline'
  }>
}

export default function Hero({ eyebrow, title, description, ctaButtons }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-neon-blue/30 rounded-full blur-[120px] animate-float" />
        <div className="absolute top-1/3 -right-20 w-[500px] h-[500px] bg-neon-purple/30 rounded-full blur-[120px] animate-float-delayed" />
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-neon-pink/20 rounded-full blur-[100px] animate-pulse-slow" />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 cyber-grid-bg opacity-20" />
        
        {/* Noise Texture */}
        <div className="absolute inset-0 noise-bg" />
      </div>

      {/* Content */}
      <div className="container relative z-10 py-32 md:py-40">
        <div className="max-w-5xl mx-auto text-center">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 glass px-6 py-3 rounded-full mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon-blue opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-neon-blue" />
            </span>
            <span className="text-sm font-bold text-white tracking-wider uppercase">{eyebrow}</span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="heading-xl mb-8"
          >
            <span className="gradient-text">{title}</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-body max-w-3xl mx-auto mb-12"
          >
            {description}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            {ctaButtons.map((button, index) => (
              <Button
                key={index}
                href={button.href}
                variant={button.variant}
                size="lg"
              >
                {button.text}
                {index === 0 && (
                  <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                )}
              </Button>
            ))}
          </motion.div>

          {/* Floating Cards Preview */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="mt-20 relative"
          >
            <div className="glass-dark rounded-3xl p-8 max-w-4xl mx-auto backdrop-blur-2xl">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { icon: '⚡', label: 'Lightning Fast', value: '< 1s Load' },
                  { icon: '🎨', label: 'Custom Design', value: '100% Unique' },
                  { icon: '📈', label: 'ROI Focused', value: '3x Average' }
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 1.1 + index * 0.1 }}
                    className="text-center"
                  >
                    <div className="text-4xl mb-3">{stat.icon}</div>
                    <div className="text-2xl font-black gradient-text mb-1">{stat.value}</div>
                    <div className="text-sm text-frost/70">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-sm text-frost/60 font-medium">Scroll to explore</span>
          <svg className="w-6 h-6 text-neon-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  )
}

