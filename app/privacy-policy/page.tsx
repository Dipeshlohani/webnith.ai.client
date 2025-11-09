'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function PrivacyPolicyPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden pt-24">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 -left-20 w-96 h-96 bg-neon-blue/30 rounded-full blur-[120px] animate-float" />
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
              <span className="gradient-text">Privacy Policy</span>
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
                <h2 className="text-2xl font-bold text-white mb-4">1. Introduction</h2>
                <p className="text-frost/80 leading-relaxed">
                  Webnith ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
                </p>
              </div>

              {/* Information We Collect */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">2. Information We Collect</h2>
                
                <h3 className="text-xl font-bold text-white mb-3 mt-6">2.1 Personal Information</h3>
                <p className="text-frost/80 leading-relaxed mb-3">We may collect the following types of personal information:</p>
                <ul className="list-disc list-inside text-frost/80 space-y-2">
                  <li>Name and contact information (email, phone number, address)</li>
                  <li>Company information and job title</li>
                  <li>Project requirements and specifications</li>
                  <li>Payment and billing information</li>
                  <li>Communication preferences</li>
                  <li>Any other information you voluntarily provide</li>
                </ul>

                <h3 className="text-xl font-bold text-white mb-3 mt-6">2.2 Technical Information</h3>
                <p className="text-frost/80 leading-relaxed mb-3">We automatically collect certain technical information when you visit our website:</p>
                <ul className="list-disc list-inside text-frost/80 space-y-2">
                  <li>IP address and location data</li>
                  <li>Browser type and version</li>
                  <li>Operating system</li>
                  <li>Pages visited and time spent on site</li>
                  <li>Referring website</li>
                  <li>Device information</li>
                </ul>
              </div>

              {/* How We Use Information */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">3. How We Use Your Information</h2>
                <p className="text-frost/80 leading-relaxed mb-3">We use your information for the following purposes:</p>
                <ul className="list-disc list-inside text-frost/80 space-y-2">
                  <li>Providing and improving our web development services</li>
                  <li>Communicating with you about projects and services</li>
                  <li>Processing payments and managing billing</li>
                  <li>Responding to inquiries and support requests</li>
                  <li>Customizing content and user experience</li>
                  <li>Analyzing website usage and performance</li>
                  <li>Complying with legal obligations</li>
                  <li>Marketing and promotional communications (with consent)</li>
                </ul>
              </div>

              {/* Data Security */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">4. Data Security</h2>
                <p className="text-frost/80 leading-relaxed mb-3">We implement appropriate technical and organizational measures to protect your personal information:</p>
                <ul className="list-disc list-inside text-frost/80 space-y-2">
                  <li>SSL encryption for data transmission</li>
                  <li>Secure servers and databases</li>
                  <li>Regular security audits and updates</li>
                  <li>Access controls and authentication</li>
                  <li>Employee training on data protection</li>
                  <li>Incident response procedures</li>
                </ul>
              </div>

              {/* Your Rights */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">5. Your Rights</h2>
                <p className="text-frost/80 leading-relaxed mb-3">Under New Zealand privacy law, you have the right to:</p>
                <ul className="list-disc list-inside text-frost/80 space-y-2">
                  <li>Access your personal information</li>
                  <li>Request correction of inaccurate information</li>
                  <li>Request deletion of your information</li>
                  <li>Object to processing of your information</li>
                  <li>Withdraw consent at any time</li>
                  <li>Data portability</li>
                  <li>Lodge a complaint with the Privacy Commissioner</li>
                </ul>
              </div>

              {/* Contact */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">6. Contact Us</h2>
                <p className="text-frost/80 leading-relaxed mb-3">If you have any questions about this Privacy Policy, please contact us:</p>
                <div className="space-y-2 text-frost/80">
                  <p><strong>Email:</strong> <a href="mailto:info@webnith.com" className="text-neon-blue hover:underline">info@webnith.com</a></p>
                  <p><strong>Phone:</strong> <a href="tel:+642040874743" className="text-neon-blue hover:underline">+64 2040874743</a></p>
                  <p><strong>Address:</strong> 1/13 James Street, Whakatāne, New Zealand</p>
                </div>
              </div>

              {/* Updates */}
              <div className="pt-6 border-t border-white/10">
                <p className="text-sm text-frost/60">
                  We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
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

