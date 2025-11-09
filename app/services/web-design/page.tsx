'use client'

import ServiceHero from '../../components/sections/ServiceHero'
import WhySection from '../../components/sections/WhySection'
import PricingSection from '../../components/sections/PricingSection'
import ProcessSection from '../../components/sections/ProcessSection'
import CTASection from '../../components/sections/CTASection'
import FAQSection from '../../components/ui/FAQSection'
import { webDesignHeroData, webDesignWhyData, webDesignProcessData, webDesignFAQData, webDesignCTAData } from '../../data/web-design'

export default function WebDesignPage() {
  return (
    <>
      <ServiceHero {...webDesignHeroData} />
      <WhySection
        title="Why Choose Webnith for Web Design & Development"
        subtitle="Get the upside of a truly custom site—brand-first visuals, UX mapped to your buyer journey, reusable components, and integrations that fit your stack—without template bloat or lock-in."
        items={webDesignWhyData}
      />
      <PricingSection />
      <ProcessSection
        title="Our Web Design Process"
        subtitle="A proven, transparent approach from discovery to launch."
        steps={webDesignProcessData}
      />
      <FAQSection
        title="Web Design & Development — Frequently Asked Questions"
        subtitle="Everything clients ask us most—from scope and timelines to SEO, performance, and handover."
        faqs={webDesignFAQData}
      />
      <CTASection {...webDesignCTAData} />
    </>
  )
}

