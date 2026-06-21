'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Target, Eye } from 'lucide-react'
import { Reveal } from '@/components/motion/reveal'

export function Story() {
  return (
    <section className="bg-foreground">
      <div className="container-px py-20 lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl">
              <Image
                src="/images/about.png"
                alt="Trust Real Estate Marketing office"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
              <div className="absolute bottom-0 left-0 rounded-tr-2xl bg-gold p-6 text-[#0a0a0a]">
                <div className="font-serif text-4xl">18+</div>
                <div className="text-xs uppercase tracking-[0.2em]">Years of Trust</div>
              </div>
            </div>
          </Reveal>

          <div>
            <Reveal>
              <span className="inline-block rounded-full bg-gold/10 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.3em] text-gold">
                Our Story
              </span>
              <h2 className="mt-4 text-balance font-serif text-3xl leading-tight text-background sm:text-4xl">
                Building trust, one landmark at a time
              </h2>
              <p className="mt-6 text-pretty leading-relaxed text-muted-foreground">
                Trust Real Estate Marketing was founded on a simple belief: that buying, selling,
                building and investing in property should be transparent, expert-led and genuinely
                rewarding. Over nearly two decades we have grown into a full-service real estate,
                construction and investment partner trusted by families, investors and institutions
                alike.
              </p>
              <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
                From premium residential sales to landmark commercial developments, our integrated
                approach means every client benefits from expertise across the entire property
                lifecycle — all under one trusted roof.
              </p>
            </Reveal>

            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {[
                {
                  icon: Target,
                  title: 'Our Mission',
                  text: 'To deliver exceptional property and construction solutions built on integrity, expertise and lasting relationships.',
                },
                {
                  icon: Eye,
                  title: 'Our Vision',
                  text: 'To be the most trusted name in real estate, construction and investment across the region.',
                },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="rounded-2xl border border-gold/20 bg-foreground p-6 transition-all hover:shadow-lg hover:shadow-gold/10"
                >
                  <item.icon className="h-6 w-6 text-gold" />
                  <h3 className="mt-4 font-serif text-lg text-background">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
