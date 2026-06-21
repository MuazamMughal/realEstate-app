'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { SectionHeading } from '@/components/ui/section-heading'
import { StaggerGroup } from '@/components/motion/reveal'
import { ServiceCard } from '@/components/services/service-card'
import type { Service } from '@/lib/cms'

export function ServicesOverview({ services }: { services: Service[] }) {
  return (
    <section className="bg-foreground">
      <div className="container-px py-20 lg:py-28">
        <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <SectionHeading
            eyebrow="What We Do"
            title={
              <>
                A complete suite of <span className="text-gold italic">premium</span> services
              </>
            }
            description="From acquisition and sales to construction and investment, we deliver end-to-end solutions under one trusted roof."
          />
          <Link
            href="/services"
            className="group inline-flex shrink-0 items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-semibold text-background transition-all hover:border-gold hover:bg-gold/10 hover:text-gold"
          >
            View all services
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <StaggerGroup className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <ServiceCard key={service._id} service={service} />
          ))}
        </StaggerGroup>
      </div>
    </section>
  )
}
