'use client'

import ServiceHero from '../../components/sections/ServiceHero'
import WhySection from '../../components/sections/WhySection'
import CTASection from '../../components/sections/CTASection'
import { addOnsHeroData, addOnsWhyData, addOnsPopularData, addOnsHowItWorksData } from '../../data/add-ons'
import { homeCTAData } from '../../data/homepage'
import { motion } from 'framer-motion'

export default function AddOnsPage() {
  return (
    <>
      <ServiceHero {...addOnsHeroData} />
      <WhySection
        title="Why Choose Our Add-Ons"
        subtitle="Flexible, modular features that grow with your business."
        items={addOnsWhyData}
      />
      
      {/* Popular Add-Ons */}
      <section className="section" id="addons">
        <div className="container">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="heading-lg mb-6"
            >
              <span className="gradient-text">Popular Add-Ons</span>
            </motion.h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {addOnsPopularData.map((addon, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className={`card-glass hover:shadow-glow-lg relative ${addon.popular ? 'lg:col-span-1' : ''}`}
              >
                {addon.popular && (
                  <div className="absolute -top-3 -right-3 bg-gradient-to-r from-neon-blue to-neon-purple px-4 py-1 rounded-full text-xs font-bold text-white shadow-glow">
                    Popular
                  </div>
                )}
                <div className="text-5xl mb-4">{addon.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-3">{addon.title}</h3>
                <p className="text-frost/80 mb-6">{addon.description}</p>
                <ul className="space-y-2">
                  {addon.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-frost/70">
                      <svg className="w-5 h-5 text-neon-blue flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-sm bg-gradient-to-b from-transparent to-midnight/50">
        <div className="container">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="heading-lg mb-6"
            >
              <span className="gradient-text">How It Works</span>
            </motion.h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {addOnsHowItWorksData.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-neon-blue to-neon-purple flex items-center justify-center shadow-glow">
                  <span className="text-2xl font-black text-white">{step.number}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                <p className="text-frost/80 text-sm">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection {...homeCTAData} />
    </>
  )
}

