'use client'

import ServiceHero from '../../components/sections/ServiceHero'
import WhySection from '../../components/sections/WhySection'
import ProcessSection from '../../components/sections/ProcessSection'
import CTASection from '../../components/sections/CTASection'
import { chatbotHeroData, chatbotWhyData, chatbotProcessData, chatbotTypesData } from '../../data/chatbot'
import { homeCTAData } from '../../data/homepage'
import { motion } from 'framer-motion'

export default function ChatbotPage() {
  return (
    <>
      <ServiceHero {...chatbotHeroData} />
      <WhySection
        title="Why Choose Our Chatbot Solutions"
        subtitle="Intelligent automation that works 24/7 to grow your business."
        items={chatbotWhyData}
      />
      
      {/* Chatbot Types Section */}
      <section className="section-sm">
        <div className="container">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="heading-lg mb-6"
            >
              <span className="gradient-text">Choose Your Chatbot Type</span>
            </motion.h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {chatbotTypesData.map((type, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card-glass hover:shadow-glow-lg"
              >
                <div className="text-5xl mb-4">{type.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-3">{type.title}</h3>
                <p className="text-frost/80 mb-6">{type.description}</p>
                <ul className="space-y-2">
                  {type.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-frost/70">
                      <svg className="w-5 h-5 text-neon-blue flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
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

      <ProcessSection
        title="Our Chatbot Development Process"
        subtitle="From concept to deployment in 5 clear steps."
        steps={chatbotProcessData}
      />
      <CTASection {...homeCTAData} />
    </>
  )
}

