'use client'

import { motion } from 'framer-motion'
import Button from '../ui/Button'
import { ReactNode } from 'react'

interface ServiceHeroProps {
  eyebrow: string
  title: string
  description: string
  services?: string[]
  ctaButtons: Array<{
    text: string
    href: string
    variant: 'primary' | 'secondary' | 'ghost' | 'outline'
  }>
  icon?: ReactNode
  image?: string
}

export default function ServiceHero({ eyebrow, title, description, services, ctaButtons, icon, image }: ServiceHeroProps) {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden pt-24">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-neon-purple/30 rounded-full blur-[120px] animate-float" />
        <div className="absolute top-1/3 -right-20 w-[500px] h-[500px] bg-neon-blue/30 rounded-full blur-[120px] animate-float-delayed" />
        <div className="absolute inset-0 cyber-grid-bg opacity-20" />
      </div>

      <div className="container relative z-10 py-20">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 glass px-6 py-3 rounded-full mb-6"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon-purple opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-neon-purple" />
                </span>
                <span className="text-sm font-bold text-white tracking-wide">{eyebrow}</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="heading-lg mb-6"
              >
                <span className="gradient-text">{title}</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-body mb-8"
              >
                {description}
              </motion.p>

              {services && (
                <motion.ul
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="space-y-3 mb-8"
                >
                  {services.map((service, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <svg className="w-6 h-6 text-neon-blue flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-white">{service}</span>
                    </li>
                  ))}
                </motion.ul>
              )}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-col sm:flex-row items-start gap-4"
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
            </div>

            {/* Right Visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              {/* Ambient glow effects */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-brand-purple/10 to-accent/10 rounded-3xl blur-3xl" />
              
              {/* Main glass container */}
              <div className="relative glass-dark rounded-3xl p-8 backdrop-blur-2xl border border-white/5 shadow-2xl">
                {/* Inner glow border */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/20 via-transparent to-accent/20 opacity-50" />
                
                {/* Icon/Image container */}
                <div className="relative aspect-square rounded-2xl bg-gradient-to-br from-midnight via-midnight to-deep-space flex items-center justify-center overflow-hidden">
                  {image ? (
                    <>
                      {/* Image display */}
                      <div className="absolute inset-0 flex items-center justify-center p-8">
                        <img 
                          src={image} 
                          alt={title}
                          className="w-full h-full object-contain relative z-10"
                        />
                      </div>
                      {/* Subtle glow behind image */}
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-brand-purple/10 to-accent/10 blur-2xl" />
                    </>
                  ) : (
                    <>
                      {/* Animated background pattern */}
                      <div className="absolute inset-0 opacity-10">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary via-brand-purple to-accent animate-pulse" 
                             style={{ animationDuration: '4s' }} />
                      </div>
                      
                      {/* Radial gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-midnight/80" />
                      
                      {/* Icon */}
                      <div className="relative z-10">
                        {icon || <div className="text-8xl">⚡</div>}
                      </div>
                    </>
                  )}
                </div>
              </div>

              {/* Corner accent indicators - subtle and professional */}
              <div className="absolute -top-2 -right-2 w-4 h-4">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-primary to-brand-purple shadow-[0_0_20px_rgba(36,70,230,0.6)] animate-pulse" />
              </div>
              <div className="absolute -bottom-2 -left-2 w-4 h-4">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-brand-purple to-accent shadow-[0_0_20px_rgba(123,61,255,0.6)] animate-pulse" 
                     style={{ animationDelay: '1s' }} />
              </div>
              <div className="absolute -top-2 -left-2 w-3 h-3">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-accent to-brand-teal shadow-[0_0_15px_rgba(255,145,77,0.6)] animate-pulse" 
                     style={{ animationDelay: '0.5s' }} />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

