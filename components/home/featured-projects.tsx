'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { MapPin } from 'lucide-react'
import { SectionHeading } from '@/components/ui/section-heading'
import { StaggerGroup } from '@/components/motion/reveal'
import { fadeUp } from '@/components/motion/reveal'
import type { Project } from '@/lib/cms'

export function FeaturedProjects({ projects }: { projects: Project[] }) {
  return (
    <section className="bg-[#0a0a0a] text-white">
      <div className="container-px py-20 lg:py-28">
        <SectionHeading
          light
          align="center"
          eyebrow="Featured Projects"
          title={
            <>
              Landmark developments we are <span className="text-gold italic">proud</span> of
            </>
          }
          description="A selection of signature residential and commercial projects across the region's most desirable addresses."
        />

        <StaggerGroup className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <motion.article
              key={project._id}
              variants={fadeUp}
              className={`group relative overflow-hidden rounded-2xl ${
                i === 0 ? 'lg:col-span-2 lg:row-span-1' : ''
              }`}
            >
              <div className={`relative ${i === 0 ? 'aspect-[16/10]' : 'aspect-[4/3]'} w-full overflow-hidden rounded-2xl`}>
                <Image
                  src={project.image || '/placeholder.svg'}
                  alt={project.name}
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/20 to-transparent" />
              </div>
              <div className="absolute inset-x-0 bottom-0 p-6 lg:p-8">
                <span className="inline-block rounded-full bg-gold/10 px-3 py-1 text-[10px] uppercase tracking-[0.25em] text-gold">
                  {project.category}
                </span>
                <h3 className="mt-2 font-serif text-2xl text-white">{project.name}</h3>
                <p className="mt-2 max-w-md text-sm leading-relaxed text-white/60 opacity-0 transition-all duration-500 group-hover:opacity-100">
                  {project.description}
                </p>
                <div className="mt-3 flex items-center gap-2 text-xs text-white/50">
                  <MapPin className="h-3.5 w-3.5 text-gold" />
                  {project.location}
                </div>
              </div>
            </motion.article>
          ))}
        </StaggerGroup>
      </div>
    </section>
  )
}
