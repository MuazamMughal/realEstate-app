'use client'

import { CountUp } from '@/components/motion/count-up'
import { StaggerGroup, StaggerItem } from '@/components/motion/reveal'
import { SectionHeading } from '@/components/ui/section-heading'
import { Building2, Users, TrendingUp, Award } from 'lucide-react'
import type { Stat } from '@/lib/cms'

const icons = [Building2, Users, TrendingUp, Award]

export function Stats({ stats }: { stats: Stat[] }) {
  return (
    <section className="bg-[#0a0a0a] text-white">
      <div className="container-px py-20 lg:py-28">
        <SectionHeading
          light
          align="center"
          eyebrow="Our Impact"
          title={
            <>
              Numbers that <span className="text-gold italic">speak</span>
            </>
          }
          description="Two decades of excellence measured in successful projects, satisfied clients and lasting relationships."
        />
        
        <StaggerGroup className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, i) => {
            const Icon = icons[i % icons.length]
            return (
              <StaggerItem
                key={stat.label}
                variant="fadeIn"
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-6 text-center transition-all hover:border-gold/30 hover:shadow-lg hover:shadow-gold/10 lg:p-8"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="relative">
                  <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl border border-gold/30 bg-gold/5 text-gold transition-all group-hover:border-gold group-hover:bg-gold group-hover:text-[#0a0a0a]">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="mt-4 block font-serif text-4xl text-gold sm:text-5xl lg:text-6xl">
                    <CountUp value={stat.value} suffix={stat.suffix} />
                  </span>
                  <span className="mt-3 block text-xs font-medium uppercase tracking-[0.2em] text-white/55">
                    {stat.label}
                  </span>
                </div>
              </StaggerItem>
            )
          })}
        </StaggerGroup>
      </div>
    </section>
  )
}
