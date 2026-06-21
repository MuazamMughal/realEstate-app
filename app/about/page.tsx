import type { Metadata } from 'next'
import { PageHero } from '@/components/layout/page-hero'
import { Story } from '@/components/about/story'
import { CoreValues } from '@/components/about/core-values'
import { TeamSection } from '@/components/about/team-section'
import { Stats } from '@/components/home/stats'
import { CtaSection } from '@/components/home/cta'
import { getTeam, getCoreValues, getStats } from '@/lib/cms'

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn about Trust Real Estate Marketing — a full-service real estate, construction and investment partner built on integrity and expertise.',
}

export default async function AboutPage() {
  const team = await getTeam()
  const values = getCoreValues()
  const stats = getStats()

  return (
    <>
      <PageHero
        eyebrow="About Us"
        title={
          <>
            Your trusted partner in <span className="text-gold italic">property & beyond</span>
          </>
        }
        description="Nearly two decades of expertise across real estate, construction and investment."
        image="/images/about.png"
        crumbs={[{ label: 'About Us' }]}
      />
      <Story />
      <Stats stats={stats} />
      <CoreValues values={values} />
      <TeamSection team={team} />
      <CtaSection />
    </>
  )
}
