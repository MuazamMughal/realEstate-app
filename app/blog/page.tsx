import type { Metadata } from 'next'
import { Suspense } from 'react'
import { PageHero } from '@/components/layout/page-hero'
import { BlogCard } from '@/components/blog/blog-card'
import { StaggerGroup } from '@/components/motion/reveal'
import { getPosts } from '@/lib/cms'
import type { Post } from '@/lib/cms'
import { BlogFilters } from '@/components/blog/blog-filters'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Stay informed with the latest real estate trends, market insights, and expert advice from our team.',
}

export default async function BlogPage({
  searchParams,
}: {
  searchParams: { search?: string; category?: string; tag?: string }
}) {
  const posts = await getPosts()
  const searchQuery = searchParams.search || ''
  const selectedCategory = searchParams.category || 'All'
  const selectedTag = searchParams.tag || 'All'

  const categories = Array.from(new Set(posts.map((p) => p.category)))
  const tags = Array.from(new Set(posts.flatMap((p) => p.tags || [])))

  const filteredPosts = posts.filter((post) => {
    const matchesSearch =
      searchQuery === '' ||
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory
    const matchesTag = selectedTag === 'All' || (post.tags || []).includes(selectedTag)
    return matchesSearch && matchesCategory && matchesTag
  })

  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="Insights & Updates"
        description="Stay informed with the latest real estate trends, market insights, and expert advice from our team."
        image="/images/cta.png"
        crumbs={[{ label: 'Blog' }]}
      />

      <section className="bg-foreground">
        <div className="container-px py-16 lg:py-20">
          <Suspense fallback={<div className="h-20" />}>
            <BlogFilters
              categories={categories}
              tags={tags}
              searchQuery={searchQuery}
              selectedCategory={selectedCategory}
              selectedTag={selectedTag}
            />
          </Suspense>

          {filteredPosts.length > 0 ? (
            <StaggerGroup className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredPosts.map((post) => (
                <BlogCard key={post._id} post={post} />
              ))}
            </StaggerGroup>
          ) : (
            <div className="py-20 text-center">
              <p className="text-lg text-white/60">No articles found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
