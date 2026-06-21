'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { SectionHeading } from '@/components/ui/section-heading'
import { StaggerGroup } from '@/components/motion/reveal'
import { BlogCard } from '@/components/blog/blog-card'
import type { Post } from '@/lib/cms'

export function LatestPosts({ posts }: { posts: Post[] }) {
  return (
    <section className="bg-foreground">
      <div className="container-px py-20 lg:py-28">
        <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <SectionHeading
            eyebrow="Insights"
            title={
              <>
                Latest from our <span className="text-gold italic">journal</span>
              </>
            }
            description="Market intelligence, guides and perspectives from our team of advisors and experts."
          />
          <Link
            href="/blog"
            className="group inline-flex shrink-0 items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-semibold text-background transition-all hover:border-gold hover:bg-gold/10 hover:text-gold"
          >
            Read all articles
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <StaggerGroup className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {posts.slice(0, 3).map((post) => (
            <BlogCard key={post._id} post={post} />
          ))}
        </StaggerGroup>
      </div>
    </section>
  )
}
