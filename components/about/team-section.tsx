'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { SectionHeading } from '@/components/ui/section-heading'
import { StaggerGroup, fadeUp } from '@/components/motion/reveal'
import type { TeamMember } from '@/lib/cms'

export function TeamSection({ team }: { team: TeamMember[] }) {
  return (
    <section className="bg-foreground">
      <div className="container-px py-20 lg:py-28">
        <SectionHeading
          align="center"
          eyebrow="Our Team"
          title={
            <>
              Meet the people behind <span className="text-gold italic">Trust</span>
            </>
          }
          description="A multidisciplinary team of advisors, builders and investment specialists dedicated to your success."
        />

        <StaggerGroup className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((member) => (
            <motion.article
              key={member._id}
              variants={fadeUp}
              className="group overflow-hidden rounded-2xl border border-gold/20 bg-foreground transition-all hover:shadow-lg hover:shadow-gold/10"
            >
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-t-2xl">
                <Image
                  src={member.image || '/placeholder.svg'}
                  alt={member.name}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/60 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </div>
              <div className="p-6">
                <h3 className="font-serif text-xl text-background">{member.name}</h3>
                <p className="mt-1 text-sm font-medium uppercase tracking-[0.15em] text-gold">
                  {member.position}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {member.description}
                </p>
              </div>
            </motion.article>
          ))}
        </StaggerGroup>
      </div>
    </section>
  )
}
