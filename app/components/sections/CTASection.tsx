'use client'

import { motion } from 'framer-motion'
import Button from '../ui/Button'

interface CTASectionProps {
  title: string
  description: string
  buttons: Array<{
    text: string
    href: string
    variant: 'primary' | 'secondary' | 'ghost' | 'outline'
  }>
}

export default function CTASection({ title, description, buttons }: CTASectionProps) {
  return (
    <section className="section-sm relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-neon-blue/20 via-neon-purple/20 to-neon-pink/20" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-neon-blue/30 rounded-full blur-[120px] animate-pulse-slow" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-neon-purple/30 rounded-full blur-[120px] animate-pulse-slow delay-300" />
      </div>

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass-dark rounded-[40px] p-12 md:p-16 text-center max-w-4xl mx-auto"
        >
          {/* Decorative Elements */}
          <div className="absolute top-8 left-8 w-20 h-20 border-2 border-neon-blue/30 rounded-full" />
          <div className="absolute bottom-8 right-8 w-16 h-16 border-2 border-neon-purple/30 rounded-full" />
          
          <div className="relative z-10">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="heading-lg mb-6"
            >
              <span className="gradient-text">{title}</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-body mb-10"
            >
              {description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              {buttons.map((button, index) => (
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
          </div>
        </motion.div>
      </div>
    </section>
  )
}

