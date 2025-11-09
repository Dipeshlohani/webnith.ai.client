'use client'

import ServiceHero from '../../components/sections/ServiceHero'
import WhySection from '../../components/sections/WhySection'
import ProcessSection from '../../components/sections/ProcessSection'
import CTASection from '../../components/sections/CTASection'
import { contentCreationHeroData, contentCreationWhyData, contentCreationProcessData, contentCreationServicesData } from '../../data/content-creation'
import { homeCTAData } from '../../data/homepage'
import { motion } from 'framer-motion'

export default function ContentCreationPage() {
  return (
    <>
      <ServiceHero {...contentCreationHeroData} />
      <WhySection
        title="Why Choose Our Content Creation Service"
        subtitle="Compelling copy that converts visitors into customers."
        items={contentCreationWhyData}
      />
      
      {/* Services Grid */}
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
              <span className="gradient-text">Content Services We Offer</span>
            </motion.h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {contentCreationServicesData.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="glass-dark rounded-2xl p-6 hover:shadow-glow transition-all duration-300 group"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{service.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                <p className="text-frost/80 text-sm">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ProcessSection
        title="Our Content Creation Process"
        subtitle="From research to published content in 5 clear steps."
        steps={contentCreationProcessData}
      />
      <CTASection {...homeCTAData} />
    </>
  )
}

