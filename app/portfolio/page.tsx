'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import CTASection from '../components/sections/CTASection'
import { homeCTAData } from '../data/homepage'

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState('all')

  const portfolioItems = [
    {
      title: 'TurboCar Garage',
      description: 'High-performance automotive website with booking system, service gallery, and real-time availability. Built with Next.js for blazing-fast load times.',
      tag: 'Automotive',
      category: 'web-design',
      image: '/img/turbo-car-garage.png',
      link: 'https://turbo-car-garage.webnith.com',
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Booking API'],
      metrics: {
        speed: '95',
        conversion: '+45%',
        traffic: '+120%'
      }
    },
    {
      title: 'Wellness Wagon',
      description: 'Meal delivery platform with subscription management, product cards, and CRM integration. Seamless checkout experience with Stripe.',
      tag: 'Health & Wellness',
      category: 'web-design',
      image: '/img/wellness-wagon.png',
      link: 'https://wellness-wagon.webnith.com/',
      technologies: ['React', 'Node.js', 'Stripe', 'HubSpot CRM'],
      metrics: {
        speed: '92',
        conversion: '+67%',
        traffic: '+85%'
      }
    },
    {
      title: 'City Clean Services',
      description: 'Professional cleaning services website with instant quote forms, trust elements, and service area mapping. Mobile-first design for on-the-go bookings.',
      tag: 'Services',
      category: 'web-design',
      image: '/img/City-Clean.png',
      link: 'https://city-clean.webnith.com',
      technologies: ['Next.js', 'Tailwind CSS', 'Google Maps API', 'Forms'],
      metrics: {
        speed: '94',
        conversion: '+52%',
        traffic: '+95%'
      }
    }
  ]

  const categories = [
    { id: 'all', name: 'All Projects', icon: '🎯' },
    { id: 'web-design', name: 'Web Design', icon: '🎨' },
    { id: 'chatbot', name: 'Chatbots', icon: '🤖' },
    { id: 'bi', name: 'Business Intelligence', icon: '📊' },
    { id: 'ai-ml', name: 'AI / ML', icon: '🧠' }
  ]

  const filteredItems = activeFilter === 'all'
    ? portfolioItems
    : portfolioItems.filter(item => item.category === activeFilter)

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
              <span className="text-sm font-bold text-white tracking-wider uppercase">Our Work</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="heading-xl mb-8"
            >
              Crafting Digital <span className="gradient-text">Experiences</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-body mb-8"
            >
              Custom, conversion-ready websites and intelligent automation solutions for businesses around the world. Every project is built with performance, accessibility, and growth in mind.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center justify-center gap-6"
            >
              {[
                { icon: '🚀', label: '50+ Projects Delivered' },
                { icon: '⭐', label: '98% Client Satisfaction' },
                { icon: '🌍', label: 'Global Reach' }
              ].map((stat, index) => (
                <div key={index} className="flex items-center gap-2 text-frost/80">
                  <span className="text-2xl">{stat.icon}</span>
                  <span className="font-semibold">{stat.label}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Filter */}
      <section className="section-sm">
        <div className="container">
          <div className="flex flex-wrap items-center justify-center gap-3 mb-16">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`px-6 py-3 rounded-xl font-bold text-sm transition-all duration-300 ${
                  activeFilter === category.id
                    ? 'bg-gradient-to-r from-neon-blue to-neon-purple text-white shadow-glow'
                    : 'glass text-white hover:shadow-glow'
                }`}
              >
                <span className="flex items-center gap-2">
                  <span className="text-lg">{category.icon}</span>
                  {category.name}
                </span>
              </button>
            ))}
          </div>

          {/* Portfolio Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group card-glass hover:shadow-glow-lg overflow-hidden"
              >
                {/* Image */}
                <div className="relative aspect-video overflow-hidden rounded-t-3xl">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-4 py-2 glass backdrop-blur-xl border border-white/30 rounded-full text-xs font-bold text-white">
                      {item.tag}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-black text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-neon-blue group-hover:to-neon-purple transition-all duration-300">
                    {item.title}
                  </h3>
                  <p className="text-frost/80 leading-relaxed mb-6">
                    {item.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {item.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-xs font-semibold text-frost/70"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/10 mb-6">
                    <div className="text-center">
                      <div className="text-2xl font-black gradient-text mb-1">
                        {item.metrics.speed}
                      </div>
                      <div className="text-xs text-frost/70">Speed Score</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-black gradient-text mb-1">
                        {item.metrics.conversion}
                      </div>
                      <div className="text-xs text-frost/70">Conversion</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-black gradient-text mb-1">
                        {item.metrics.traffic}
                      </div>
                      <div className="text-xs text-frost/70">Traffic</div>
                    </div>
                  </div>

                  {/* Button */}
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-neon w-full text-center"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      View Live Site
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </span>
                  </a>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <CTASection {...homeCTAData} />
    </>
  )
}

