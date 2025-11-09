'use client'

import { motion } from 'framer-motion'
import CTASection from '../components/sections/CTASection'
import { podcastsData, podcastCTAData } from '../data/podcast'

export default function PodcastsPage() {
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
              <span className="text-sm font-bold text-white tracking-wider uppercase">Webnith Talks Podcast</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="heading-xl mb-8"
            >
              <span className="gradient-text">Expert Insights</span> on Web Development
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-body"
            >
              Deep dives into web development, hosting, SEO, and the complete process of building digital experiences.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Podcasts Grid */}
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
              <span className="gradient-text">Latest Episodes</span>
            </motion.h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {podcastsData.map((podcast, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group card-glass hover:shadow-glow-lg h-full flex flex-col"
              >
                {/* Gradient Banner */}
                <div className="h-32 rounded-t-3xl bg-gradient-to-br from-neon-blue/20 via-neon-purple/20 to-neon-pink/20 flex items-center justify-center">
                  <div className="text-6xl">🎙️</div>
                </div>

                {/* Content */}
                <div className="flex-1 flex flex-col p-6">
                  <div className="flex items-center gap-3 text-sm text-frost/70 mb-4">
                    <span className="px-3 py-1 bg-neon-blue/10 border border-neon-blue/30 rounded-full text-neon-blue font-semibold">
                      {podcast.category}
                    </span>
                    <span>•</span>
                    <span>{podcast.duration}</span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-neon-blue group-hover:to-neon-purple transition-all duration-300">
                    {podcast.title}
                  </h3>

                  <p className="text-frost/80 leading-relaxed mb-6 flex-1">
                    {podcast.description}
                  </p>

                  {/* Buttons */}
                  <div className="flex gap-3">
                    <a
                      href={podcast.playlistUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 btn-neon px-4 py-3 text-sm text-center"
                    >
                      <span className="relative z-10 flex items-center justify-center gap-2">
                        Listen Now
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                        </svg>
                      </span>
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <CTASection {...podcastCTAData} />
    </>
  )
}

