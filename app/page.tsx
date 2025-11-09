'use client'

import Hero from './components/sections/Hero'
import WhySection from './components/sections/WhySection'
import FAQSection from './components/ui/FAQSection'
import CTASection from './components/sections/CTASection'
import { homeHeroData, homeWhyData, homeFAQData, homeCTAData } from './data/homepage'

export default function HomePage() {
  return (
    <>
      <Hero {...homeHeroData} />
      <WhySection
        title="Why Choose Webnith"
        subtitle="Six fundamentals that make projects smooth—and results measurable."
        items={homeWhyData}
      />
      <FAQSection
        title="Frequently Asked Questions"
        subtitle="Your most important questions—answered clearly. Whether you're just starting or scaling fast, here's what you should know about how Webnith works, collaborates, and supports your growth."
        faqs={homeFAQData}
      />
      <CTASection {...homeCTAData} />
    </>
  )
}

