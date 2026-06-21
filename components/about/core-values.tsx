'use client'

import { motion } from 'framer-motion'
import { Gem, Star, Eye, Lightbulb } from 'lucide-react'
import { SectionHeading } from '@/components/ui/section-heading'
import { StaggerGroup, fadeUp } from '@/components/motion/reveal'
import type { CoreValue } from '@/lib/cms'

const icons = [Gem, Star, Eye, Lightbulb]

export function CoreValues({ values }: { values: CoreValue[] }) {
  return (
    <section className="bg-[#0a0a0a] text-white">
      <div className="container-px py-20 lg:py-28">
        <SectionHeading
          light
          align="center"
          eyebrow="Core Values"
          title={
            <>
              The principles that <span className="text-gold italic">guide us</span>
            </>
          }
        />
        <StaggerGroup className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value, i) => {
            const Icon = icons[i % icons.length]
            return (
              <motion.div
                key={value.title}
                variants={fadeUp}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 text-center transition-all hover:border-gold/40 hover:shadow-lg hover:shadow-gold/10"
              >
                <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-gold/40 text-gold">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="mt-6 font-serif text-xl text-white">{value.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/55">{value.description}</p>
              </motion.div>
            )
          })}
        </StaggerGroup>
      </div>
    </section>
  )
}
