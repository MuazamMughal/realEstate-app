import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { PageHero } from '@/components/layout/page-hero'
import { getPost, getPosts } from '@/lib/cms'
import { siteConfig } from '@/lib/site'
import { formatDate } from '@/lib/utils'
import { Clock, Calendar, User, Share2, ArrowLeft } from 'lucide-react'
import { Reveal } from '@/components/motion/reveal'

// Temporarily disabled to test dynamic routing
// export async function generateStaticParams() {
//   const posts = await getPosts()
//   console.log('generateStaticParams posts:', posts)
//   const params = posts.map((post) => ({ slug: post.slug }))
//   console.log('generateStaticParams params:', params)
//   return params
// }

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = await getPost(slug)
  if (!post) return {}

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: post.coverImage ? [{ url: post.coverImage }] : [],
      type: 'article',
      publishedTime: post.publishedAt,
      authors: [post.author],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: post.coverImage ? [post.coverImage] : [],
    },
  }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = await getPost(slug)
  if (!post) notFound()

  const allPosts = await getPosts()
  const relatedPosts = allPosts
    .filter((p) => p._id !== post._id && (p.category === post.category || p.tags?.some((t) => post.tags?.includes(t))))
    .slice(0, 3)

  return (
    <>
      <PageHero
        eyebrow={post.category}
        title={post.title}
        description={post.excerpt}
        image={post.coverImage || '/images/cta.png'}
        crumbs={[
          { label: 'Blog', href: '/blog' },
          { label: post.title },
        ]}
      />

      <article className="bg-background">
        <div className="container-px py-16 lg:py-20">
          <div className="mx-auto max-w-3xl">
            {/* Post Meta */}
            <Reveal className="mb-8 flex flex-wrap items-center gap-6 text-sm text-black/60">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4 text-gold" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-gold" />
                <span>{formatDate(post.publishedAt)}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-gold" />
                <span>{post.readingTime} min read</span>
              </div>
            </Reveal>

            {/* Cover Image */}
            {post.coverImage && (
              <Reveal className="mb-12 aspect-[16/9] overflow-hidden">
                <Image
                  src={post.coverImage}
                  alt={post.title}
                  width={1200}
                  height={675}
                  className="h-full w-full object-cover"
                  priority
                />
              </Reveal>
            )}

            {/* Content */}
            <Reveal className="prose prose-invert prose-lg max-w-none">
              <div className="space-y-6">
                {post.body.map((block, index) => (
                  <div key={index}>
                    {block.heading && (
                      <h2 className="mb-3 font-serif text-2xl text-gold lg:text-3xl">
                        {block.heading}
                      </h2>
                    )}
                    <p className="text-lg leading-relaxed text-black/80">{block.text}</p>
                  </div>
                ))}
              </div>
            </Reveal>

            {/* Tags */}
            {post.tags && post.tags.length > 0 && (
              <Reveal className="mt-16">
                <h3 className="mb-4 font-serif text-xl font-semibold text-gold">Tags</h3>
                <div className="flex flex-wrap gap-3">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-lg border border-black/20 bg-black/5 px-4 py-2 text-sm font-medium text-black transition-all hover:border-gold hover:bg-gold/10"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </Reveal>
            )}

            {/* Share */}
            <Reveal className="mt-16 rounded-2xl border border-black/10 bg-gradient-to-br from-black/5 to-transparent p-8">
              <h3 className="mb-6 font-serif text-2xl font-semibold text-gold">Share this article</h3>
              <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-black/70">Help others discover this content</p>
                <div className="flex gap-3">
                  <a
                    href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(`${siteConfig.url}/blog/${post.slug}`)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="flex h-12 w-12 items-center justify-center rounded-xl border border-black/20 bg-black/5 text-black/70 transition-all hover:border-gold hover:bg-gold hover:text-white"
                    aria-label="Share on Twitter"
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </a>
                  <a
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`${siteConfig.url}/blog/${post.slug}`)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="flex h-12 w-12 items-center justify-center rounded-xl border border-black/20 bg-black/5 text-black/70 transition-all hover:border-gold hover:bg-gold hover:text-white"
                    aria-label="Share on LinkedIn"
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                  <a
                    href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(`${siteConfig.url}/blog/${post.slug}`)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="flex h-12 w-12 items-center justify-center rounded-xl border border-black/20 bg-black/5 text-black/70 transition-all hover:border-gold hover:bg-gold hover:text-white"
                    aria-label="Share on Facebook"
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </a>
                </div>
              </div>
            </Reveal>

            {/* Back to Blog */}
            <Reveal className="mt-12">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 rounded-lg border border-black/20 bg-black/5 px-6 py-3 text-sm font-medium text-black/70 transition-all hover:border-gold hover:bg-gold hover:text-white"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to Blog
              </Link>
            </Reveal>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="bg-gradient-to-b from-[#0a0a0a] to-[#050505]">
          <div className="container-px py-20 lg:py-24">
            <div className="mb-12">
              <h2 className="font-serif text-3xl font-semibold text-gold lg:text-4xl">
                Related Articles
              </h2>
              <p className="mt-3 text-black/70">Explore more insights from our experts</p>
            </div>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {relatedPosts.map((relatedPost) => (
                <Link
                  key={relatedPost._id}
                  href={`/blog/${relatedPost.slug}`}
                  className="group flex flex-col overflow-hidden rounded-2xl border border-black/10 bg-white/5 transition-all hover:border-gold/30 hover:bg-white/10"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={relatedPost.coverImage || '/placeholder.svg'}
                      alt={relatedPost.title}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                  </div>
                  <div className="p-6">
                    <span className="inline-block rounded-full border border-gold/30 bg-gold/10 px-3 py-1 text-xs font-medium text-gold">
                      {relatedPost.category}
                    </span>
                    <h3 className="mt-4 font-serif text-xl font-semibold text-black transition-colors group-hover:text-gold">
                      {relatedPost.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}
