'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export function CtaSection() {
  return (
    <section className="relative overflow-hidden bg-[#0a0a0a]">
      <Image
        src="/images/cta.png"
        alt=""
        fill
        sizes="100vw"
        className="object-cover opacity-25"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/80 to-[#0a0a0a]/60" />
      <div className="container-px relative py-24 lg:py-32">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-block rounded-full bg-gold/10 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.3em] text-gold">
            Let&apos;s Work Together
          </span>
          <h2 className="mt-6 text-balance font-serif text-4xl leading-tight text-white sm:text-5xl lg:text-6xl">
            Ready to make your next move in{' '}
            <span className="text-gold italic">real estate?</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-pretty text-lg leading-relaxed text-white/65">
            Speak with our advisors today and discover how we can help you buy, sell, build or
            invest with complete confidence.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gold px-8 py-4 text-sm font-semibold text-[#0a0a0a] transition-all hover:bg-gold-dark hover:shadow-lg hover:shadow-gold/20"
            >
              Book a Consultation
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/25 px-8 py-4 text-sm font-semibold text-white transition-all hover:border-gold hover:bg-gold/10 hover:text-gold hover:shadow-lg hover:shadow-gold/10"
            >
              Explore Services
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
