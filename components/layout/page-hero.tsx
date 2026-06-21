'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ChevronRight } from 'lucide-react'

type Crumb = { label: string; href?: string }

export function PageHero({
  eyebrow,
  title,
  description,
  image,
  crumbs = [],
}: {
  eyebrow: string
  title: React.ReactNode
  description?: string
  image: string
  crumbs?: Crumb[]
}) {
  return (
    <section className="relative flex min-h-[52vh] items-end overflow-hidden bg-[#0a0a0a] pt-24">
      <Image
        src={image || '/placeholder.svg'}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover opacity-40"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/70 to-[#0a0a0a]/40" />
      <div className="container-px relative w-full pb-14 lg:pb-20">
        <motion.nav
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          aria-label="Breadcrumb"
          className="mb-6 flex items-center gap-2 text-xs text-white/50"
        >
          <Link href="/" className="rounded-full px-3 py-1 transition-colors hover:bg-white/10 hover:text-gold">
            Home
          </Link>
          {crumbs.map((c) => (
            <span key={c.label} className="flex items-center gap-2">
              <ChevronRight className="h-3 w-3" />
              {c.href ? (
                <Link href={c.href} className="rounded-full px-3 py-1 transition-colors hover:bg-white/10 hover:text-gold">
                  {c.label}
                </Link>
              ) : (
                <span className="rounded-full bg-gold/10 px-3 py-1 text-gold">{c.label}</span>
              )}
            </span>
          ))}
        </motion.nav>
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="inline-block rounded-full bg-gold/10 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.3em] text-gold"
        >
          {eyebrow}
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          className="mt-4 max-w-3xl text-balance font-serif text-4xl leading-tight text-white sm:text-5xl lg:text-6xl"
        >
          {title}
        </motion.h1>
        {description ? (
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="mt-5 max-w-xl text-pretty text-lg leading-relaxed text-white/65"
          >
            {description}
          </motion.p>
        ) : null}
      </div>
    </section>
  )
}
