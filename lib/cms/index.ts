import { client } from '@/sanity/client'
import { isSanityConfigured } from '@/sanity/env'
import * as fallback from './fallback'
import * as q from './queries'
import type { Post, Project, Service, Stat, TeamMember, Testimonial } from './types'

export * from './types'

/**
 * Each fetcher queries Sanity when a project is configured, and otherwise
 * returns rich fallback content so the site is fully functional in preview.
 */
async function fetchOrFallback<T>(query: string, params: Record<string, unknown>, fb: T): Promise<T> {
  if (!isSanityConfigured || !client) return fb
  try {
    const data = await client.fetch<T>(query, params)
    if (!data || (Array.isArray(data) && data.length === 0)) return fb
    return data
  } catch {
    return fb
  }
}

export function getStats(): Stat[] {
  return fallback.stats
}

export function getReasons() {
  return fallback.reasons
}

export function getCoreValues() {
  return fallback.coreValues
}

export async function getServices(): Promise<Service[]> {
  return fetchOrFallback(q.servicesQuery, {}, fallback.services)
}

export async function getService(slug: string): Promise<Service | undefined> {
  const data = await fetchOrFallback<Service | null>(q.serviceBySlugQuery, { slug }, null)
  return data ?? fallback.services.find((s) => s.slug === slug)
}

export async function getProjects(): Promise<Project[]> {
  return fetchOrFallback(q.projectsQuery, {}, fallback.projects)
}

export async function getTestimonials(): Promise<Testimonial[]> {
  return fetchOrFallback(q.testimonialsQuery, {}, fallback.testimonials)
}

export async function getTeam(): Promise<TeamMember[]> {
  return fetchOrFallback(q.teamQuery, {}, fallback.team)
}

export async function getPosts(): Promise<Post[]> {
  return fetchOrFallback(q.postsQuery, {}, fallback.posts)
}

export async function getPost(slug: string): Promise<Post | undefined> {
  const data = await fetchOrFallback<Post | null>(q.postBySlugQuery, { slug }, null)
  const fallbackPost = fallback.posts.find((p) => p.slug === slug)
  return data ?? fallbackPost
}
