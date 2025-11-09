'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import CTASection from '../components/sections/CTASection'
import { homeCTAData } from '../data/homepage'

export default function AboutPage() {
  const values = [
    {
      icon: '🤝',
      title: 'Transparency First',
      description: 'Clear communication, honest timelines, and no hidden costs. You always know what\'s happening and why.'
    },
    {
      icon: '🎯',
      title: 'Results-Driven',
      description: 'Every decision is backed by data and focused on measurable outcomes that matter to your business.'
    },
    {
      icon: '🚀',
      title: 'Innovation Ready',
      description: 'We stay ahead of the curve, bringing you the latest tools and techniques without the hype.'
    },
    {
      icon: '🛡️',
      title: 'Quality Obsessed',
      description: 'From code to design to content—we sweat the details so you don\'t have to.'
    },
    {
      icon: '🌱',
      title: 'Growth Focused',
      description: 'We build solutions that scale with you, from MVP to enterprise without starting over.'
    },
    {
      icon: '💡',
      title: 'Education Minded',
      description: 'We don\'t just build—we teach. You\'ll understand how everything works and how to use it.'
    }
  ]

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-24">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 -left-20 w-96 h-96 bg-neon-blue/30 rounded-full blur-[120px] animate-float" />
          <div className="absolute top-1/3 -right-20 w-[500px] h-[500px] bg-neon-purple/30 rounded-full blur-[120px] animate-float-delayed" />
          <div className="absolute inset-0 cyber-grid-bg opacity-20" />
        </div>

        <div className="container relative z-10 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 glass px-6 py-3 rounded-full mb-8"
            >
              <span className="text-sm font-bold text-white tracking-wider uppercase">About Webnith</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="heading-xl mb-8"
            >
              Building Digital Solutions That <span className="gradient-text">Drive Growth</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-body"
            >
              We're a digital innovation studio based in Whakatāne, New Zealand, combining design, automation, and AI to help businesses grow smarter and faster.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="card-glass"
            >
              <div className="text-6xl mb-6">🎯</div>
              <h2 className="heading-sm mb-4">Our Mission</h2>
              <p className="text-frost/80 leading-relaxed">
                To empower businesses with intelligent, scalable digital solutions that deliver measurable results—without the complexity or lock-in.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="card-glass"
            >
              <div className="text-6xl mb-6">👁️</div>
              <h2 className="heading-sm mb-4">Our Vision</h2>
              <p className="text-frost/80 leading-relaxed">
                A world where every business—regardless of size—has access to world-class technology that drives growth, efficiency, and innovation.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="section-sm">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="heading-lg text-center mb-12"
            >
              <span className="gradient-text">Our Story</span>
            </motion.h2>
            <div className="space-y-6 text-body">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                Webnith started with a simple observation: too many businesses were stuck with slow, outdated websites and manual processes that held them back. We knew there was a better way.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                Founded in Whakatāne, New Zealand, we set out to bridge the gap between cutting-edge technology and practical business needs. Our team combines expertise in web design, AI automation, business intelligence, and content strategy to deliver solutions that actually work.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Today, we work with businesses locally and globally—from startups building their first digital presence to established companies modernizing their operations. Every project is guided by the same principles: transparency, quality, and measurable impact.
              </motion.p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="heading-lg mb-6"
            >
              <span className="gradient-text">Our Core Values</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-body max-w-3xl mx-auto"
            >
              The principles that guide every decision we make and every project we deliver.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card-glass group hover:shadow-glow-lg"
              >
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">{value.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                <p className="text-frost/80 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section-sm bg-gradient-to-r from-neon-blue/20 via-neon-purple/20 to-neon-pink/20">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center max-w-5xl mx-auto">
            {[
              { number: '50+', label: 'Projects Delivered', icon: '🚀' },
              { number: '98%', label: 'Client Satisfaction', icon: '⭐' },
              { number: '15+', label: 'Countries Served', icon: '🌍' },
              { number: '24/7', label: 'Support Available', icon: '💬' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="text-3xl mb-3">{stat.icon}</div>
                <div className="text-4xl font-black gradient-text mb-2">{stat.number}</div>
                <div className="text-sm text-frost/70">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="section-sm">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-6xl mb-6"
            >
              🇳🇿
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="heading-md mb-6"
            >
              Based in New Zealand, Working Globally
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-body mb-8"
            >
              We're proudly based in Whakatāne, New Zealand, but our work spans the globe. Thanks to modern collaboration tools and our remote-first approach, we deliver world-class solutions to businesses anywhere in the world.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="inline-flex items-center gap-3 glass px-6 py-4 rounded-xl"
            >
              <svg className="w-6 h-6 text-neon-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="font-semibold text-white">Whakatāne, Bay of Plenty, New Zealand</span>
            </motion.div>
          </div>
        </div>
      </section>

      <CTASection {...homeCTAData} />
    </>
  )
}

