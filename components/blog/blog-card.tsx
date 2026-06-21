'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Clock } from 'lucide-react'
import { fadeUp } from '@/components/motion/reveal'
import { formatDate } from '@/lib/utils'
import type { Post } from '@/lib/cms'

export function BlogCard({ post }: { post: Post }) {
  return (
    <motion.article variants={fadeUp} className="group flex h-full flex-col">
      <Link href={`/blog/${post.slug}`} className="flex h-full flex-col">
        <div className="relative aspect-[16/10] overflow-hidden rounded-2xl">
          <Image
            src={post.coverImage || '/placeholder.svg'}
            alt={post.title}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
          <span className="absolute left-4 top-4 rounded-lg bg-gold px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-[#0a0a0a]">
            {post.category}
          </span>
        </div>
        <div className="flex flex-1 flex-col pt-5">
          <div className="flex items-center gap-3 text-xs text-muted-foreground">
            <span>{formatDate(post.publishedAt)}</span>
            <span className="h-1 w-1 rounded-full bg-gold" />
            <span className="flex items-center gap-1">
              <Clock className="h-3 w-3" />
              {post.readingTime} min read
            </span>
          </div>
          <h3 className="mt-3 text-balance font-serif text-xl leading-snug text-background transition-colors group-hover:text-gold-dark">
            {post.title}
          </h3>
          <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
            {post.excerpt}
          </p>
          <span className="mt-4 text-xs font-medium uppercase tracking-[0.15em] text-background">
            By {post.author}
          </span>
        </div>
      </Link>
    </motion.article>
  )
}
