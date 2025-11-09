'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface FeatureSection {
  title: string
  features: string[]
}

interface Plan {
  id: string
  title: string
  priceNZD: number
  priceUSD: number
  meta: string
  featureSections?: FeatureSection[]
  features?: string[]
  idealFor?: string
  buttonText: string
  buttonLink: string
  isPopular?: boolean
  buttonType: 'primary' | 'ghost'
}

interface PackageGroup {
  id: string
  title: string
  subtitle?: string
  plans: Plan[]
  addOns?: string
  paymentTerms?: string
}

const packageGroups: PackageGroup[] = [
  {
    id: 'web',
    title: 'Website Packages',
    subtitle: 'Basic Launch / Business Growth / Custom Advanced',
    addOns: 'multilingual/i18n, advanced SEO, content production, local SEO pack, A/B testing, dark-mode & accessibility enhancements, automation (Zapier/Make), booking/calendar sync, additional integrations.',
    paymentTerms: '50/50 (kickoff / pre-launch) or 50/40/10 (kickoff / approval / go-live).',
    plans: [
      {
        id: 'basic',
        title: 'Basic — Launch',
        priceNZD: 1999,
        priceUSD: 1200,
        meta: 'Timeline: **2–3 weeks** • Revisions: **2 design + 1 polish**',
        featureSections: [
          {
            title: 'UX & Content',
            features: [
              'Custom responsive UI (no templates)',
              'Professional content writing core pages',
              'Up to 5 licensed stock images',
              'Custom 404 page'
            ]
          },
          {
            title: 'SEO & Performance',
            features: [
              'On-page & technical essentials (titles/meta/alt, XML/robots, SSL)',
              'Social share metadata (Open Graph & Twitter Cards)',
              'Best-practice performance (minify, lazy-load, responsive images)'
            ]
          },
          {
            title: 'Forms & Analytics',
            features: [
              'Contact/enquiry form + spam protection',
              'GA4 + 1 key conversion event'
            ]
          },
          {
            title: 'Trust & Compliance',
            features: [
              'Accessibility baseline (WCAG 2.2 A)',
              'Cookie consent & preference center',
              'Social share buttons'
            ]
          }
        ],
        idealFor: 'Ideal for brochure-style sites and startups ready to launch.',
        buttonText: 'Start Basic — Launch',
        buttonLink: '/get-quote',
        buttonType: 'ghost'
      },
      {
        id: 'growth',
        title: 'Business — Growth',
        priceNZD: 5999,
        priceUSD: 3600,
        meta: 'Timeline: 3–5 weeks • Revisions: 3–5 rounds',
        featureSections: [
          {
            title: 'UX & Content',
            features: [
              'Everything in Basic — Launch',
              '8–15 pages total (set at kickoff)',
              'Full copywriting bundle for all pages',
              'Blog & portfolio templates',
              'Image & video gallery',
              'Slideshow / hero banner',
              'Site search (instant & typo-tolerant)',
              'Lightbox for media'
            ]
          },
          {
            title: 'SEO & Performance',
            features: [
              'Schema markup (Org, Website, Article, LocalBusiness)',
              'Canonicals, redirects, internal linking plan',
              'Performance report (vitals before/after)',
              'Global CDN (HTTP/3, WebP/AVIF, preconnect)'
            ]
          },
          {
            title: 'Conversion & Integrations',
            features: [
              'CRM / email integration (HubSpot/Mailchimp/Zoho)',
              'Lead capture, booking, and chat widget',
              'Multi-step forms + file upload',
              'Tagging plan, funnels/goals, UTMs'
            ]
          },
          {
            title: 'Insights & QA',
            features: [
              'Heatmaps & session replay',
              'Component library starter; wireframes',
              'Staging + production CI/CD',
              '60–90 day support + 2 tune-ups'
            ]
          }
        ],
        idealFor: 'Best for lead-driven sites ready for next-level growth.',
        buttonText: 'Choose Business — Growth',
        buttonLink: '/get-quote',
        isPopular: true,
        buttonType: 'primary'
      },
      {
        id: 'custom',
        title: 'Custom — Advanced',
        priceNZD: 20000,
        priceUSD: 12000,
        meta: 'Timeline: **8–16 weeks** • SLA-backed support',
        featureSections: [
          {
            title: 'Architecture & Security',
            features: [
              'Bespoke UI & solution architecture',
              'Portals / memberships with RBAC & audit logs',
              '2FA for admins & users',
              'WAF/DDoS protection & rate limiting'
            ]
          },
          {
            title: 'Performance & Delivery',
            features: [
              'PWA basics (installable, offline fallbacks)',
              'CI/CD multi-env with observability',
              'Performance budgets & load testing'
            ]
          },
          {
            title: 'Data & Identity',
            features: [
              'Server-side tagging / 1st-party data pipeline',
              'SSO/OAuth (Google/Microsoft/Apple)',
              'CRM/ERP/API integrations & payments'
            ]
          },
          {
            title: 'Compliance & QA',
            features: [
              'Accessibility WCAG 2.2 AA',
              'Automated unit + E2E tests',
              'Support SLAs & admin training'
            ]
          }
        ],
        idealFor: 'For complex workflows, data, and integrations. Discovery required.',
        buttonText: 'Discuss Custom — Advanced',
        buttonLink: '/get-quote',
        buttonType: 'ghost'
      }
    ]
  },
  {
    id: 'ecom',
    title: 'E-Commerce Pricing',
    subtitle: 'Essential / Growth / Custom',
    addOns: 'subscriptions, bundles/kits, loyalty/referrals, advanced search (Algolia/Elastic), personalization engine, product data cleanup/import, translations & localization, advanced SEO & CRO, photography, performance hardening, BI dashboards.',
    paymentTerms: '50/50 (kickoff / pre-launch) or 40/40/20 (kickoff / UAT / go-live).',
    plans: [
      {
        id: 'essential',
        title: 'Essential',
        priceNZD: 5999,
        priceUSD: 3600,
        meta: 'Timeline: **3–5 weeks** • Revisions: **up to 3 rounds**',
        featureSections: [
          {
            title: 'Scope Guardrails',
            features: [
              'Up to 100 SKUs • 1 country • 1 currency',
              '1 payment gateway (e.g., Stripe or PayPal)'
            ]
          },
          {
            title: 'Catalog, Checkout & Ops',
            features: [
              'Category (PLP) & Product (PDP) templates, variants, responsive UI',
              'Keyword search, breadcrumbs, sorting',
              'Guest checkout, promo codes, order confirmation emails',
              'Basic tax & shipping rules; tracking field',
              'Product/inventory admin, order statuses, GA4 purchase funnel'
            ]
          },
          {
            title: 'SEO & Trust',
            features: [
              'Titles/meta/alt, XML sitemap, Open Graph',
              'SSL, cookie notice, WCAG A baseline'
            ]
          }
        ],
        idealFor: 'Excludes subscriptions, reviews/UGC, advanced search, multi-currency, carrier live rates, complex integrations.',
        buttonText: 'Start Essential',
        buttonLink: '/get-quote',
        buttonType: 'ghost'
      },
      {
        id: 'growth-ecom',
        title: 'Growth',
        priceNZD: 12999,
        priceUSD: 7800,
        meta: 'Timeline: **6–9 weeks** • Revisions: **up to 5 rounds**',
        featureSections: [
          {
            title: 'Scope Guardrails',
            features: [
              'Up to 1,500 SKUs • 2–3 regions/currencies',
              'Up to 2 payment gateways'
            ]
          },
          {
            title: 'Discovery & Merchandising',
            features: [
              'Faceted filters, autosuggest, multi-image/video, size guides',
              'Related/upsell/cross-sell, reviews & ratings, wishlists'
            ]
          },
          {
            title: 'Checkout, Payments & Shipping',
            features: [
              'One-page checkout, Apple/Google Pay, BNPL, saved cards',
              'Real-time carrier quotes, rules/thresholds, label printing integration',
              'Abandoned-cart recovery emails'
            ]
          },
          {
            title: 'Content, CRM & Ops',
            features: [
              'Blog/editorial via headless CMS, scheduled campaigns',
              'Advanced promos (BOGO/tiers), gift cards; email/CRM flows',
              'Multi-currency display, localized content basics',
              'Low-stock alerts, backorders, marketplace/social feeds',
              'CDN & caching, role-based admin, dashboards (AOV, CR, LTV, cohorts)'
            ]
          }
        ],
        idealFor: 'Includes 60–90 days post-launch support with two performance tune-ups.',
        buttonText: 'Choose Growth',
        buttonLink: '/get-quote',
        isPopular: true,
        buttonType: 'primary'
      },
      {
        id: 'custom-ecom',
        title: 'Custom',
        priceNZD: 30000,
        priceUSD: 18000,
        meta: 'Timeline: **10–20+ weeks** • Support & SLAs per proposal',
        featureSections: [
          {
            title: 'Architecture & Experience',
            features: [
              'Headless/composable, multi-store/brand, PIM/DAM, CI/CD',
              'Omnichannel (BOPIS/ship-from-store), multi-currency/tax',
              'B2B (company accounts, quotes, PO/net terms), PWA, WCAG 2.2 AA'
            ]
          },
          {
            title: 'Integrations & Operations',
            features: [
              'ERP/OMS/WMS/3PL integrations, multi-warehouse routing',
              'Advanced returns portal, SLAs/runbooks, observability'
            ]
          },
          {
            title: 'Data, Testing & Security',
            features: [
              'Server-side tagging → warehouse/BI, real-time dashboards',
              'A/B testing, ML forecasting/pricing',
              'WAF, rate limiting, fraud scoring/3DS, SSO/MFA, RBAC, audit logs'
            ]
          }
        ],
        idealFor: 'Discovery required to finalize scope, milestones, and SLAs for complex catalogs and global ops.',
        buttonText: 'Discuss Custom',
        buttonLink: '/get-quote',
        buttonType: 'ghost'
      }
    ]
  },
  {
    id: 'care',
    title: 'Maintenance Plans',
    addOns: '',
    paymentTerms: '',
    plans: [
      {
        id: 'starter',
        title: 'Starter',
        priceNZD: 100,
        priceUSD: 60,
        meta: 'Monthly subscription • Cancel anytime',
        features: [
          'Uptime monitoring & automated backups',
          'Security patches for core/CMS/plugins',
          'Basic performance & error logs',
          '30 minutes support per month'
        ],
        buttonText: 'Start Starter',
        buttonLink: '/get-quote',
        buttonType: 'ghost'
      },
      {
        id: 'custom-care',
        title: 'Custom',
        priceNZD: 0,
        priceUSD: 0,
        meta: 'Tailored scope & SLAs',
        features: [
          'Everything in Starter, plus:',
          'Dedicated support hours (design/dev/content)',
          'Proactive performance & SEO audits',
          'Priority response & SLA guarantees',
          'Quarterly roadmap & analytics reviews',
          'Advanced monitoring, alerts, runbooks',
          'Staging environment & rollback procedures',
          'CRO experiments & A/B testing',
          'Custom integrations & workflow automation'
        ],
        buttonText: 'Request Custom Quote',
        buttonLink: '/get-quote',
        isPopular: true,
        buttonType: 'primary'
      }
    ]
  }
]

export default function PricingSection() {
  const [activeTab, setActiveTab] = useState('web')
  const [currency, setCurrency] = useState<'NZD' | 'USD'>('NZD')

  const formatPrice = (price: number, currency: 'NZD' | 'USD') => {
    if (price === 0) {
      return 'Custom quote'
    }
    const symbol = currency === 'USD' ? 'US$' : 'NZ$'
    return `From ${symbol}${price.toLocaleString()}`
  }

  const renderTextWithBold = (text: string) => {
    const parts = text.split(/(\*\*.*?\*\*)/)
    return parts.map((part, index) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={index} className="text-white font-bold">{part.slice(2, -2)}</strong>
      }
      return <span key={index}>{part}</span>
    })
  }

  const activeGroup = packageGroups.find(group => group.id === activeTab)

  return (
    <section id="packages" className="section bg-midnight relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 cyber-grid-bg opacity-30" />
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-primary/10 rounded-full blur-[120px] animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-brand-purple/10 rounded-full blur-[120px] animate-float-delayed" />
      </div>

      <div className="container relative z-10">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="heading-lg gradient-text mb-6"
          >
            Plans that Fit — Launch, Grow, or Go Advanced
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-body mb-4"
          >
            No templates. Fully bespoke, modern-stack builds with clear scope and ongoing support.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-sm text-frost/70"
          >
            <strong className="text-white">Pricing is "From" and excludes GST.</strong> Revisions are <strong className="text-white">unlimited within agreed scope</strong> during design & build.
          </motion.p>
        </div>

        {/* Currency Toggle */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex justify-center gap-2 mb-12"
        >
          <button
            onClick={() => setCurrency('NZD')}
            className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 ${
              currency === 'NZD'
                ? 'bg-gradient-to-r from-primary to-brand-purple text-white shadow-glow'
                : 'bg-white/5 text-frost hover:bg-white/10'
            }`}
            aria-pressed={currency === 'NZD'}
          >
            NZD
          </button>
          <button
            onClick={() => setCurrency('USD')}
            className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 ${
              currency === 'USD'
                ? 'bg-gradient-to-r from-primary to-brand-purple text-white shadow-glow'
                : 'bg-white/5 text-frost hover:bg-white/10'
            }`}
            aria-pressed={currency === 'USD'}
          >
            USD
          </button>
        </motion.div>

        {/* Package Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {packageGroups.map((group) => (
            <button
              key={group.id}
              onClick={() => setActiveTab(group.id)}
              className={`px-8 py-4 rounded-2xl font-bold transition-all duration-300 ${
                activeTab === group.id
                  ? 'glass text-white shadow-glow scale-105'
                  : 'bg-white/5 text-frost/70 hover:bg-white/10 hover:text-frost'
              }`}
              role="tab"
              aria-selected={activeTab === group.id}
            >
              {group.title}
            </button>
          ))}
        </motion.div>

        {/* Plans Grid */}
        <AnimatePresence mode="wait">
          {activeGroup && (
            <motion.div
              key={activeGroup.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
            >
              {activeGroup.plans.map((plan, index) => (
                <motion.article
                  key={plan.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`relative glass-dark rounded-3xl p-8 flex flex-col ${
                    plan.isPopular ? 'ring-2 ring-brand-purple shadow-glow-lg scale-105' : ''
                  }`}
                >
                  {plan.isPopular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-2 bg-gradient-to-r from-brand-purple to-accent rounded-full text-white text-sm font-bold shadow-glow">
                      Most Popular
                    </div>
                  )}

                  <h3 className="text-2xl font-bold text-white mb-4">{plan.title}</h3>
                  <div className="text-4xl font-black gradient-text mb-3">
                    {formatPrice(
                      currency === 'USD' ? plan.priceUSD : plan.priceNZD,
                      currency
                    )}
                  </div>
                  <div className="text-sm text-frost/70 mb-6">{renderTextWithBold(plan.meta)}</div>

                  {plan.featureSections ? (
                    <div className="space-y-6 flex-grow mb-8">
                      {plan.featureSections.map((section, sectionIndex) => (
                        <div key={sectionIndex}>
                          <h4 className="text-lg font-bold text-white mb-3">{section.title}</h4>
                          <ul className="space-y-2">
                            {section.features.map((feature, featureIndex) => (
                              <li key={featureIndex} className="flex items-start gap-3 text-sm text-frost/90">
                                <svg className="w-5 h-5 text-neon-cyan flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <span>{renderTextWithBold(feature)}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  ) : plan.features && (
                    <ul className="space-y-3 flex-grow mb-8">
                      {plan.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-3 text-sm text-frost/90">
                          <svg className="w-5 h-5 text-neon-cyan flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span>{renderTextWithBold(feature)}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {plan.idealFor && (
                    <p className="text-sm text-frost/70 italic mb-6 border-t border-white/10 pt-6">
                      {plan.idealFor}
                    </p>
                  )}

                  <a
                    href={plan.buttonLink}
                    className={`w-full py-4 rounded-xl font-bold text-center transition-all duration-300 ${
                      plan.buttonType === 'primary'
                        ? 'bg-gradient-to-r from-primary to-brand-purple text-white hover:shadow-glow-lg hover:scale-105'
                        : 'bg-white/5 text-white hover:bg-white/10 border border-white/20'
                    }`}
                  >
                    {plan.buttonText}
                  </a>
                </motion.article>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Notes */}
        {activeGroup && (activeGroup.addOns || activeGroup.paymentTerms) && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-dark rounded-2xl p-8 space-y-4 text-sm text-frost/80"
          >
            {activeGroup.addOns && (
              <p className="text-center">
                <strong className="text-white">Add-ons:</strong> {activeGroup.addOns}
              </p>
            )}
            {activeGroup.paymentTerms && (
              <p className="text-center">
                <strong className="text-white">Payment terms:</strong> {activeGroup.paymentTerms}{' '}
                <strong className="text-white">Ownership:</strong> You own the code, design & assets on final payment.{' '}
                <strong className="text-white">Hosting:</strong> Billed separately or provisioned to your account.
              </p>
            )}
          </motion.div>
        )}
      </div>
    </section>
  )
}

