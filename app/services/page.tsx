import type { Metadata } from 'next'
import { PageHero } from '@/components/layout/page-hero'
import { ServicesGrid } from '@/components/services/services-grid'
import { CtaSection } from '@/components/home/cta'
import { getServices } from '@/lib/cms'

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Explore our full suite of real estate, construction and investment services — from property buying and selling to development and portfolio consultation.',
}

export default async function ServicesPage() {
  const services = await getServices()

  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title={
          <>
            End-to-end solutions across <span className="text-gold italic">property</span>
          </>
        }
        description="Everything you need to buy, sell, rent, build and invest — delivered by specialists under one trusted roof."
        image="/images/cta.png"
        crumbs={[{ label: 'Services' }]}
      />
      <ServicesGrid services={services} />
      <CtaSection />
    </>
  )
}
