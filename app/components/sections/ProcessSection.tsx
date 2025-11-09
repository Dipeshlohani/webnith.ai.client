'use client'

import { motion } from 'framer-motion'

interface ProcessStep {
  number: number
  title: string
  description: string
}

interface ProcessSectionProps {
  title?: string
  subtitle?: string
  steps: ProcessStep[]
}

export default function ProcessSection({ title = "Our Process", subtitle, steps }: ProcessSectionProps) {
  return (
    <section className="section relative" id="process">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-neon-pink/20 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-neon-blue/20 rounded-full blur-[150px]" />
      </div>

      <div className="container relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="heading-lg mb-6"
          >
            <span className="gradient-text">{title}</span>
          </motion.h2>
          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-body max-w-3xl mx-auto"
            >
              {subtitle}
            </motion.p>
          )}
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-neon-blue via-neon-purple to-neon-pink" />

            {/* Steps */}
            <div className="space-y-16">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Number Circle */}
                  <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 z-10">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-neon-blue to-neon-purple flex items-center justify-center shadow-glow">
                      <span className="text-2xl font-black text-white">{step.number}</span>
                    </div>
                  </div>

                  {/* Content Card */}
                  <div className={`ml-24 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:mr-auto md:pr-16' : 'md:ml-auto md:pl-16'}`}>
                    <div className="glass-dark rounded-2xl p-6 hover:shadow-glow transition-all duration-300">
                      <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                      <p className="text-frost/80 leading-relaxed" dangerouslySetInnerHTML={{ __html: step.description }} />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

