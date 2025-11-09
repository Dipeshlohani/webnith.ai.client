'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function TermsAndConditionsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden pt-24">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 -left-20 w-96 h-96 bg-neon-purple/30 rounded-full blur-[120px] animate-float" />
          <div className="absolute inset-0 cyber-grid-bg opacity-20" />
        </div>

        <div className="container relative z-10 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="heading-xl mb-4"
            >
              <span className="gradient-text">Terms & Conditions</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-frost/80"
            >
              Last updated: 3 October 2025
            </motion.p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section">
        <div className="container">
          <div className="max-w-4xl mx-auto prose prose-invert">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="card-glass space-y-8"
            >
              {/* Introduction */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">1. Agreement to Terms</h2>
                <p className="text-frost/80 leading-relaxed">
                  By accessing and using Webnith's services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                </p>
              </div>

              {/* Services */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">2. Services</h2>
                <p className="text-frost/80 leading-relaxed mb-3">Webnith provides the following services:</p>
                <ul className="list-disc list-inside text-frost/80 space-y-2">
                  <li>Web design and development</li>
                  <li>AI and machine learning solutions</li>
                  <li>Chatbot development</li>
                  <li>Business intelligence and analytics</li>
                  <li>Content creation and SEO</li>
                  <li>Custom software development</li>
                </ul>
                <p className="text-frost/80 leading-relaxed mt-3">
                  All services are provided subject to the terms of individual service agreements and project specifications.
                </p>
              </div>

              {/* Payment Terms */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">3. Payment Terms</h2>
                <ul className="list-disc list-inside text-frost/80 space-y-2">
                  <li>Payment terms will be specified in individual project proposals</li>
                  <li>A deposit may be required before work commences</li>
                  <li>Final payment is due upon project completion</li>
                  <li>Late payments may incur additional fees</li>
                  <li>All prices are in NZD unless otherwise specified</li>
                </ul>
              </div>

              {/* Intellectual Property */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">4. Intellectual Property</h2>
                <p className="text-frost/80 leading-relaxed mb-3">
                  Upon full payment, you will own the custom code and designs created specifically for your project. However:
                </p>
                <ul className="list-disc list-inside text-frost/80 space-y-2">
                  <li>Third-party components and libraries remain under their original licenses</li>
                  <li>Webnith retains rights to reusable components and methodologies</li>
                  <li>Webnith may showcase the work in our portfolio unless otherwise agreed</li>
                  <li>You may not resell or redistribute our proprietary tools or frameworks</li>
                </ul>
              </div>

              {/* Warranties */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">5. Warranties and Support</h2>
                <p className="text-frost/80 leading-relaxed mb-3">
                  We provide a 90-day warranty on all custom development work, which includes:
                </p>
                <ul className="list-disc list-inside text-frost/80 space-y-2">
                  <li>Bug fixes for issues present at launch</li>
                  <li>Resolution of functionality problems</li>
                  <li>Technical support and guidance</li>
                </ul>
                <p className="text-frost/80 leading-relaxed mt-3">
                  The warranty does not cover issues arising from third-party services, hosting problems, or modifications made by other parties.
                </p>
              </div>

              {/* Limitation of Liability */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">6. Limitation of Liability</h2>
                <p className="text-frost/80 leading-relaxed">
                  Webnith shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our services. Our total liability shall not exceed the amount paid for the specific service in question.
                </p>
              </div>

              {/* Termination */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">7. Termination</h2>
                <p className="text-frost/80 leading-relaxed">
                  Either party may terminate a project agreement with written notice. Upon termination, you are responsible for payment of all work completed to date. Refunds will be handled on a case-by-case basis according to the project agreement.
                </p>
              </div>

              {/* Changes to Terms */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">8. Changes to Terms</h2>
                <p className="text-frost/80 leading-relaxed">
                  We reserve the right to modify these terms at any time. We will notify clients of any significant changes. Your continued use of our services after such modifications constitutes acceptance of the updated terms.
                </p>
              </div>

              {/* Contact */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">9. Contact Information</h2>
                <p className="text-frost/80 leading-relaxed mb-3">For questions about these Terms and Conditions, please contact us:</p>
                <div className="space-y-2 text-frost/80">
                  <p><strong>Email:</strong> <a href="mailto:info@webnith.com" className="text-neon-blue hover:underline">info@webnith.com</a></p>
                  <p><strong>Phone:</strong> <a href="tel:+642040874743" className="text-neon-blue hover:underline">+64 2040874743</a></p>
                  <p><strong>Address:</strong> 1/13 James Street, Whakatāne, New Zealand</p>
                </div>
              </div>

              {/* Governing Law */}
              <div className="pt-6 border-t border-white/10">
                <h2 className="text-2xl font-bold text-white mb-4">10. Governing Law</h2>
                <p className="text-frost/80 leading-relaxed">
                  These Terms and Conditions are governed by and construed in accordance with the laws of New Zealand. Any disputes shall be subject to the exclusive jurisdiction of the New Zealand courts.
                </p>
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center mt-12"
            >
              <Link href="/" className="btn-neon px-8 py-4">
                <span className="relative z-10 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                  Back to Home
                </span>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}

