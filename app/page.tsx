import { Hero } from '@/components/home/hero'
import { Stats } from '@/components/home/stats'
import { ServicesOverview } from '@/components/home/services-overview'
import { FeaturedProjects } from '@/components/home/featured-projects'
import { WhyChoose } from '@/components/home/why-choose'
import { Testimonials } from '@/components/home/testimonials'
import { LatestPosts } from '@/components/home/latest-posts'
import { CtaSection } from '@/components/home/cta'
import {
  getServices,
  getProjects,
  getTestimonials,
  getPosts,
  getStats,
  getReasons,
} from '@/lib/cms'

export default async function HomePage() {
  const [services, projects, testimonials, posts] = await Promise.all([
    getServices(),
    getProjects(),
    getTestimonials(),
    getPosts(),
  ])
  const stats = getStats()
  const reasons = getReasons()

  return (
    <>
      <Hero />
      <Stats stats={stats} />
      <ServicesOverview services={services.slice(0, 8)} />
      <FeaturedProjects projects={projects} />
      <WhyChoose reasons={reasons} />
      <Testimonials testimonials={testimonials} />
      <LatestPosts posts={posts} />
      <CtaSection />
    </>
  )
}
