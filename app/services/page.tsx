'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import CTASection from '../components/sections/CTASection'
import { homeCTAData } from '../data/homepage'

export default function ServicesPage() {
  const services = [
    {
      title: 'Web Design & Development',
      description: 'Custom websites that load fast, rank well, and convert visitors into customers.',
      icon: '🎨',
      href: '/services/web-design',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Chatbot Development',
      description: 'Intelligent chatbots that automate conversations and qualify leads 24/7.',
      icon: '🤖',
      href: '/services/chatbot',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      title: 'AI & Machine Learning',
      description: 'Custom AI solutions that automate complex tasks and unlock new opportunities.',
      icon: '🧠',
      href: '/services/ai-ml',
      gradient: 'from-indigo-500 to-purple-500'
    },
    {
      title: 'Business Intelligence',
      description: 'Transform data into actionable insights with custom dashboards and analytics.',
      icon: '📊',
      href: '/services/business-intelligence',
      gradient: 'from-green-500 to-teal-500'
    },
    {
      title: 'Content Creation',
      description: 'SEO-optimized content that attracts, engages, and converts your audience.',
      icon: '✍️',
      href: '/services/content-creation',
      gradient: 'from-orange-500 to-red-500'
    },
    {
      title: 'Add-Ons & Features',
      description: 'Flexible add-ons to enhance your digital presence and extend functionality.',
      icon: '🔧',
      href: '/services/add-ons',
      gradient: 'from-yellow-500 to-orange-500'
    }
  ]

  return (
    <>
      {/* Hero Section */}
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
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon-blue opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-neon-blue" />
              </span>
              <span className="text-sm font-bold text-white tracking-wider uppercase">Our Services</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="heading-xl mb-8"
            >
              <span className="gradient-text">Digital Solutions That Drive Growth</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-body"
            >
              From stunning websites to intelligent automation, we offer comprehensive digital services that help your business thrive in the modern landscape.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link href={service.href}>
                  <div className="group h-full card-glass hover:shadow-glow-lg transition-all duration-300 relative overflow-hidden">
                    {/* Gradient overlay on hover */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                    
                    <div className="relative z-10">
                      <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
                        {service.icon}
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-neon-blue group-hover:to-neon-purple transition-all duration-300">
                        {service.title}
                      </h3>
                      <p className="text-frost/80 leading-relaxed mb-6">
                        {service.description}
                      </p>
                      <div className="flex items-center gap-2 text-neon-blue font-semibold group-hover:gap-4 transition-all duration-300">
                        <span>Learn More</span>
                        <svg className="w-5 h-5 transition-transform group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection {...homeCTAData} />
    </>
  )
}

