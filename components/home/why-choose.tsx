'use client'

import { motion } from 'framer-motion'
import {
  ShieldCheck,
  TrendingUp,
  Users,
  Eye,
  Layers,
  Award,
} from 'lucide-react'
import { SectionHeading } from '@/components/ui/section-heading'
import { StaggerGroup, fadeUp } from '@/components/motion/reveal'
import type { Reason } from '@/lib/cms'

const icons = [ShieldCheck, TrendingUp, Users, Eye, Layers, Award]

export function WhyChoose({ reasons }: { reasons: Reason[] }) {
  return (
    <section className="bg-foreground">
      <div className="container-px py-20 lg:py-28">
        <SectionHeading
          eyebrow="Why Choose Us"
          title={
            <>
              Built on trust, driven by <span className="text-gold italic">results</span>
            </>
          }
          description="Clients choose us because we combine deep market expertise with genuine integrity and a relentless commitment to their success."
        />

        <StaggerGroup className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-gold/40 bg-gold/20 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, i) => {
            const Icon = icons[i % icons.length]
            return (
              <motion.div
                key={reason.title}
                variants={fadeUp}
                className="group bg-foreground p-8 transition-all hover:bg-white/10"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-gold/40 text-gold transition-all group-hover:bg-gold group-hover:text-[#0a0a0a]">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-6 font-serif text-xl text-background transition-colors group-hover:text-white">
                  {reason.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground transition-colors group-hover:text-white/60">
                  {reason.description}
                </p>
              </motion.div>
            )
          })}
        </StaggerGroup>
      </div>
    </section>
  )
}
