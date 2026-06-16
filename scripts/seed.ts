import dotenv from 'dotenv'
import path from 'path'
import { createClient } from 'next-sanity'

// Load .env.local explicitly BEFORE any other imports
dotenv.config({ path: path.resolve(process.cwd(), '.env.local') })

// Debug: Log environment variables
console.log('NEXT_PUBLIC_SANITY_PROJECT_ID:', process.env.NEXT_PUBLIC_SANITY_PROJECT_ID)
console.log('NEXT_PUBLIC_SANITY_DATASET:', process.env.NEXT_PUBLIC_SANITY_DATASET)
console.log('NEXT_PUBLIC_SANITY_API_VERSION:', process.env.NEXT_PUBLIC_SANITY_API_VERSION)

// Create client directly after loading env
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || ''
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-10-01'
const token = process.env.SANITY_API_TOKEN || ''

if (!projectId) {
  console.error('Sanity client not configured. Please set NEXT_PUBLIC_SANITY_PROJECT_ID')
  process.exit(1)
}

if (!token) {
  console.error('Sanity API token not configured. Please set SANITY_API_TOKEN')
  process.exit(1)
}

const client = createClient({
  projectId,
  dataset,
  apiVersion,
  token,
  useCdn: false, // Disable CDN for write operations
})

import {
  stats,
  services,
  projects,
  testimonials,
  team,
  reasons,
  coreValues,
  posts,
} from '../lib/cms/fallback'

async function seed() {
  if (!client) {
    console.error('Sanity client not configured. Please set NEXT_PUBLIC_SANITY_PROJECT_ID')
    return
  }

  console.log('🌱 Starting seed...')

  try {
    // Seed Home Page
    console.log('Seeding home page...')
    const homePage = await client.createOrReplace({
      _type: 'homePage',
      _id: 'homePage',
      hero: {
        headline: 'Your Trusted Partner in Premium Real Estate',
        subheading: 'From acquisition to construction to investment — we deliver excellence across the full property lifecycle.',
      },
      stats: stats.map((stat) => ({
        label: stat.label,
        value: stat.value,
        suffix: stat.suffix,
      })),
      cta: {
        heading: 'Ready to Start Your Journey?',
        text: 'Contact our team today to discuss how we can help you achieve your property goals.',
      },
    })
    console.log('✅ Home page seeded')

    // Seed About Page
    console.log('Seeding about page...')
    const aboutPage = await client.createOrReplace({
      _type: 'aboutPage',
      _id: 'aboutPage',
      story: 'Founded with a vision to transform the real estate experience, Trust has grown from a small advisory firm into a full-service property powerhouse. Over two decades, we have guided thousands of clients through landmark transactions, delivered exceptional construction projects, and built lasting relationships based on integrity and results.',
      mission: 'To deliver exceptional value through expert guidance, transparent processes, and unwavering commitment to our clients success.',
      vision: 'To be the most trusted name in premium real estate, known for excellence, innovation, and lasting client relationships.',
      coreValues: coreValues.map((value) => ({
        title: value.title,
        description: value.description,
      })),
    })
    console.log('✅ About page seeded')

    // Seed Services
    console.log('Seeding services...')
    for (const service of services) {
      await client.createOrReplace({
        _type: 'service',
        _id: service._id,
        title: service.title,
        slug: { _type: 'slug', current: service.slug },
        category: service.category,
        excerpt: service.excerpt,
        description: service.description,
        benefits: service.benefits,
        orderRank: services.indexOf(service),
      })
    }
    console.log(`✅ ${services.length} services seeded`)

    // Seed Projects
    console.log('Seeding projects...')
    for (const project of projects) {
      await client.createOrReplace({
        _type: 'project',
        _id: project._id,
        name: project.name,
        slug: { _type: 'slug', current: project.slug },
        description: project.description,
        location: project.location,
        category: project.category,
      })
    }
    console.log(`✅ ${projects.length} projects seeded`)

    // Seed Testimonials
    console.log('Seeding testimonials...')
    for (const testimonial of testimonials) {
      await client.createOrReplace({
        _type: 'testimonial',
        _id: testimonial._id,
        name: testimonial.name,
        position: testimonial.position,
        company: testimonial.company,
        review: testimonial.review,
        rating: testimonial.rating,
      })
    }
    console.log(`✅ ${testimonials.length} testimonials seeded`)

    // Seed Team Members
    console.log('Seeding team members...')
    for (const member of team) {
      await client.createOrReplace({
        _type: 'teamMember',
        _id: member._id,
        name: member.name,
        position: member.position,
        description: member.description,
        orderRank: team.indexOf(member),
      })
    }
    console.log(`✅ ${team.length} team members seeded`)

    // Seed Blog Posts
    console.log('Seeding blog posts...')
    for (const post of posts) {
      await client.createOrReplace({
        _type: 'post',
        _id: post._id,
        title: post.title,
        slug: { _type: 'slug', current: post.slug },
        author: post.author,
        category: post.category,
        tags: post.tags,
        excerpt: post.excerpt,
        publishedAt: new Date(post.publishedAt).toISOString(),
        readingTime: post.readingTime,
        body: post.body.map((block) => ({
          heading: block.heading || undefined,
          text: block.text,
        })),
        seo: {
          metaTitle: post.title,
          metaDescription: post.excerpt,
        },
      })
    }
    console.log(`✅ ${posts.length} blog posts seeded`)

    console.log('\n🎉 Seed completed successfully!')
  } catch (error) {
    console.error('❌ Error seeding data:', error)
    throw error
  }
}

seed()
