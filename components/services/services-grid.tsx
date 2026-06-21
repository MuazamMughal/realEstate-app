'use client'

import { SectionHeading } from '@/components/ui/section-heading'
import { StaggerGroup } from '@/components/motion/reveal'
import { ServiceCard } from '@/components/services/service-card'
import type { Service } from '@/lib/cms'

const categories: { key: Service['category']; label: string; description: string }[] = [
  {
    key: 'Real Estate',
    label: 'Real Estate Services',
    description: 'Buying, selling, rentals and consultancy across premium residential and commercial property.',
  },
  {
    key: 'Construction',
    label: 'Construction Services',
    description: 'Residential and commercial construction, renovation and full building development.',
  },
  {
    key: 'Investment',
    label: 'Investment Services',
    description: 'Property investment, market analysis and portfolio consultation to grow and protect your wealth.',
  },
]

export function ServicesGrid({ services }: { services: Service[] }) {
  return (
    <section className="bg-foreground">
      <div className="container-px space-y-20 py-20 lg:space-y-28 lg:py-28">
        {categories.map((category) => {
          const items = services.filter((s) => s.category === category.key)
          if (items.length === 0) return null
          return (
            <div key={category.key}>
              <SectionHeading
                eyebrow={category.key}
                title={category.label}
                description={category.description}
              />
              <StaggerGroup className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {items.map((service) => (
                  <ServiceCard key={service._id} service={service} />
                ))}
              </StaggerGroup>
            </div>
          )
        })}
      </div>
    </section>
  )
}
