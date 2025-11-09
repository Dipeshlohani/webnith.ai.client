'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

export default function GetQuotePage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    contactNumber: '',
    country: 'New Zealand',
    projectDescription: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const countries = [
    'New Zealand', 'Australia', 'United States', 'United Kingdom', 'Canada',
    'India', 'Singapore', 'Germany', 'France', 'Japan', 'Other'
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const hubspotData = {
        fields: [
          { name: 'firstname', value: formData.firstName },
          { name: 'lastname', value: formData.lastName },
          { name: 'email', value: formData.email },
          { name: 'contact_number', value: formData.contactNumber },
          { name: 'country', value: formData.country },
          { name: 'project_description', value: formData.projectDescription }
        ],
        context: {
          pageUri: window.location.href,
          pageName: document.title
        }
      }

      const portalId = '442113087'
      const formId = 'b977bfaf-9d7a-48cf-982b-43b6cd93d028'

      const response = await fetch(
        `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formId}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(hubspotData)
        }
      )

      if (response.ok) {
        setIsSubmitted(true)
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          contactNumber: '',
          country: 'New Zealand',
          projectDescription: '',
        })
      } else {
        throw new Error('Form submission failed')
      }
    } catch (error) {
      console.error('Form submission error:', error)
      alert('Failed to submit quote request. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-24">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 -left-20 w-96 h-96 bg-neon-blue/30 rounded-full blur-[120px] animate-float" />
          <div className="absolute top-1/3 -right-20 w-[500px] h-[500px] bg-neon-purple/30 rounded-full blur-[120px] animate-float-delayed" />
          <div className="absolute inset-0 cyber-grid-bg opacity-20" />
        </div>

        <div className="container relative z-10 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="heading-xl mb-8"
            >
              <span className="gradient-text">Get Your Free Quote</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-body"
            >
              Ready to bring your vision to life? Tell us about your project and we'll provide a detailed estimate tailored to your needs.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="section">
        <div className="container">
          <div className="grid lg:grid-cols-5 gap-12 max-w-7xl mx-auto">
            {/* Left: Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-3 card-glass"
            >
              <h2 className="heading-sm mb-6">Request Your Free Quote</h2>
              <p className="text-frost/80 mb-8">Fill out the form below with your project details and we'll get back to you within 24 hours.</p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-semibold text-white mb-2">
                      First Name <span className="text-neon-pink">*</span>
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-neon-blue focus:border-transparent text-white placeholder-frost/50 transition-all"
                      placeholder="John"
                    />
                  </div>

                  <div>
                    <label htmlFor="lastName" className="block text-sm font-semibold text-white mb-2">
                      Last Name <span className="text-neon-pink">*</span>
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-neon-blue focus:border-transparent text-white placeholder-frost/50 transition-all"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-white mb-2">
                      Email Address <span className="text-neon-pink">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-neon-blue focus:border-transparent text-white placeholder-frost/50 transition-all"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="contactNumber" className="block text-sm font-semibold text-white mb-2">
                      Contact Number <span className="text-neon-pink">*</span>
                    </label>
                    <input
                      type="tel"
                      id="contactNumber"
                      name="contactNumber"
                      value={formData.contactNumber}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-neon-blue focus:border-transparent text-white placeholder-frost/50 transition-all"
                      placeholder="+64 21 234 5678"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="country" className="block text-sm font-semibold text-white mb-2">
                    Country/Region <span className="text-neon-pink">*</span>
                  </label>
                  <select
                    id="country"
                    name="country"
                    value={formData.country}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-neon-blue focus:border-transparent text-white transition-all"
                  >
                    {countries.map(country => (
                      <option key={country} value={country} className="bg-midnight">
                        {country}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="projectDescription" className="block text-sm font-semibold text-white mb-2">
                    Project Description <span className="text-neon-pink">*</span>
                  </label>
                  <textarea
                    id="projectDescription"
                    name="projectDescription"
                    value={formData.projectDescription}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-neon-blue focus:border-transparent text-white placeholder-frost/50 transition-all resize-none"
                    placeholder="Please describe your project requirements, goals, timeline, and any specific features or functionality you need..."
                  />
                  <p className="text-xs text-frost/50 mt-2">Include details about your target audience, key features, and timeline</p>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-neon w-full py-4"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    {isSubmitting ? 'Submitting...' : 'Get My Free Quote'}
                    {!isSubmitting && (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    )}
                  </span>
                </button>

                {isSubmitted && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-green-500/10 border border-green-500/30 rounded-xl"
                  >
                    <div className="flex items-center gap-3">
                      <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <div>
                        <h4 className="font-bold text-white">Quote Request Submitted!</h4>
                        <p className="text-sm text-frost/80">Thank you! We'll review your project details and get back to you within 24 hours with a detailed estimate.</p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </form>
            </motion.div>

            {/* Right: Process Steps */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2 space-y-6"
            >
              <div className="card-glass">
                <h3 className="text-xl font-bold text-white mb-6">What Happens Next?</h3>
                <p className="text-frost/80 mb-6">Your journey to an amazing project starts here.</p>

                <div className="space-y-4">
                  {[
                    {
                      step: '1', title: 'Quick Response', desc: "We'll review your project details and respond within 24 hours"
                    },
                    { step: '2', title: 'Detailed Estimate', desc: 'Receive a comprehensive quote with timeline and pricing' },
                    { step: '3', title: 'Project Discussion', desc: 'Schedule a call to discuss your requirements in detail' },
                    { step: '4', title: 'Custom Proposal', desc: 'Get a tailored project proposal based on our discussion' },
                    { step: '5', title: 'Project Kickoff', desc: 'Begin your project with clear milestones and deliverables' }
                  ].map((item, index) => (
                    <div key={index} className="flex gap-4 p-4 bg-white/5 rounded-xl border border-white/10">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-neon-blue to-neon-purple flex items-center justify-center flex-shrink-0 font-black text-white">
                        {item.step}
                      </div>
                      <div>
                        <h4 className="font-semibold text-white mb-1">{item.title}</h4>
                        <p className="text-sm text-frost/70">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="card-glass bg-gradient-to-br from-green-500/10 to-neon-blue/10">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Quality Guarantee</h4>
                    <p className="text-lg font-black gradient-text">90-Day Warranty</p>
                    <p className="text-frost/70 text-sm">Full support and bug fixes included</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}

