'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, ChevronDown } from 'lucide-react'

const words = ['Your', 'Trusted', 'Partner', 'in', 'Real', 'Estate,']
const words2 = ['Construction', '&', 'Investment']

export function Hero() {
  return (
    <section className="relative h-screen min-h-[640px] w-full overflow-hidden bg-[#0a0a0a]">
      <div className="absolute inset-0">
        <Image
          src="/images/hero.png"
          alt="Luxury Karachi skyline at golden hour"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/80 via-[#0a0a0a]/55 to-[#0a0a0a]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/70 to-transparent" />
      </div>

      <div className="container-px relative flex h-full flex-col justify-center pt-20">
        <div className="mb-6 flex items-center gap-3">
          <span className="h-px w-10 bg-gold" />
          <span className="text-xs font-medium uppercase tracking-[0.3em] text-gold">
            Real Estate · Construction · Investment
          </span>
        </div>

        <h1 className="max-w-4xl font-serif text-4xl leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl">
          <span className="sr-only">
            Your Trusted Partner in Real Estate, Construction &amp; Investment
          </span>
          <span aria-hidden className="flex flex-wrap gap-x-3">
            {words.map((w, i) => (
              <span key={`${w}-${i}`} className="inline-block">
                {w}
              </span>
            ))}
          </span>
          <span aria-hidden className="mt-1 flex flex-wrap gap-x-3 text-gold">
            {words2.map((w, i) => (
              <span key={`${w}-${i}`} className="inline-block italic">
                {w}
              </span>
            ))}
          </span>
        </h1>

        <p className="mt-7 max-w-xl text-pretty text-base leading-relaxed text-white/70 sm:text-lg">
          We help clients buy, sell, rent and invest in premium properties while delivering
          expert construction and development solutions.
        </p>

        <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
          <Link
            href="/services"
            className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gold px-7 py-4 text-sm font-semibold text-[#0a0a0a] transition-all hover:bg-gold-dark hover:shadow-lg hover:shadow-gold/20"
          >
            Explore Properties
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/25 px-7 py-4 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:border-gold hover:bg-gold/10 hover:text-gold hover:shadow-lg hover:shadow-gold/10"
          >
            Contact Us
          </Link>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="flex flex-col items-center gap-2 text-white/50">
          <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
          <ChevronDown className="h-4 w-4" />
        </div>
      </div>
    </section>
  )
}
