'use client'

import Image from 'next/image'
import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react'
import { SectionHeading } from '@/components/ui/section-heading'
import type { Testimonial } from '@/lib/cms'

export function Testimonials({ testimonials }: { testimonials: Testimonial[] }) {
  const [index, setIndex] = useState(0)
  const [dir, setDir] = useState(0)

  const paginate = (d: number) => {
    setDir(d)
    setIndex((prev) => (prev + d + testimonials.length) % testimonials.length)
  }

  const active = testimonials[index]

  return (
    <section className="relative overflow-hidden bg-[#0a0a0a] text-white">
      <div className="container-px py-20 lg:py-28">
        <SectionHeading
          light
          align="center"
          eyebrow="Testimonials"
          title={
            <>
              What our <span className="text-gold italic">clients</span> say
            </>
          }
        />

        <div className="relative mx-auto mt-14 max-w-3xl">
          <Quote className="mx-auto h-12 w-12 text-gold/30" />
          <div className="relative min-h-[260px] sm:min-h-[220px]">
            <AnimatePresence mode="wait" custom={dir}>
              <motion.figure
                key={active._id}
                custom={dir}
                initial={{ opacity: 0, x: dir >= 0 ? 60 : -60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: dir >= 0 ? -60 : 60 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0 flex flex-col items-center text-center"
              >
                <div className="mt-6 flex gap-1 text-gold">
                  {Array.from({ length: active.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <blockquote className="mt-5 text-balance font-serif text-xl leading-relaxed text-white/90 sm:text-2xl">
                  &ldquo;{active.review}&rdquo;
                </blockquote>
                <figcaption className="mt-7 flex items-center gap-4">
                  {active.image ? (
                    <Image
                      src={active.image}
                      alt={active.name}
                      width={52}
                      height={52}
                      className="h-13 w-13 rounded-full object-cover grayscale"
                    />
                  ) : null}
                  <div className="text-left">
                    <div className="font-medium text-white">{active.name}</div>
                    <div className="text-sm text-gold-dark">
                      {active.position}
                      {active.company ? `, ${active.company}` : ''}
                    </div>
                  </div>
                </figcaption>
              </motion.figure>
            </AnimatePresence>
          </div>

          <div className="mt-20 flex items-center justify-center gap-6">
            <button
              type="button"
              onClick={() => paginate(-1)}
              aria-label="Previous testimonial"
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/20 text-white transition-all hover:border-gold hover:bg-gold/10 hover:text-gold hover:shadow-lg hover:shadow-gold/10"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((t, i) => (
                <button
                  key={t._id}
                  type="button"
                  aria-label={`Go to testimonial ${i + 1}`}
                  onClick={() => {
                    setDir(i > index ? 1 : -1)
                    setIndex(i)
                  }}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === index ? 'w-8 bg-gold' : 'w-1.5 bg-white/30'
                  }`}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={() => paginate(1)}
              aria-label="Next testimonial"
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/20 text-white transition-all hover:border-gold hover:bg-gold/10 hover:text-gold hover:shadow-lg hover:shadow-gold/10"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
