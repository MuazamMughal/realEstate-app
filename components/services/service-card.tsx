'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import type { Service } from '@/lib/cms'
import { fadeUp } from '@/components/motion/reveal'

export function ServiceCard({ service }: { service: Service }) {
  return (
    <motion.div variants={fadeUp}>
      <Link
        href={`/services/${service.slug}`}
        className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-gold/20 bg-foreground transition-all hover:border-gold hover:shadow-lg hover:shadow-gold/10"
      >
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={service.image || '/placeholder.svg'}
            alt={service.title}
            fill
            sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/60 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          <span className="absolute left-4 top-4 rounded-lg bg-[#0a0a0a]/70 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-gold backdrop-blur-sm">
            {service.category}
          </span>
        </div>
        <div className="flex flex-1 flex-col p-6">
          <h3 className="flex items-start justify-between gap-3 font-serif text-xl text-background">
            {service.title}
            <ArrowUpRight className="mt-1 h-5 w-5 shrink-0 text-muted-foreground transition-all duration-300 group-hover:text-gold group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </h3>
          <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
            {service.excerpt}
          </p>
          <span className="mt-5 h-px w-20 bg-gold transition-all duration-500 group-hover:w-40" />
        </div>
      </Link>
    </motion.div>
  )
}
