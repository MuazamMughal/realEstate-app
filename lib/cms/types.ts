export type Stat = {
  label: string
  value: number
  suffix?: string
}

export type Service = {
  _id: string
  title: string
  slug: string
  excerpt: string
  description: string
  image: string
  benefits: string[]
  category: 'Real Estate' | 'Construction' | 'Investment'
}

export type Project = {
  _id: string
  name: string
  slug: string
  description: string
  image: string
  location: string
  category: string
}

export type Testimonial = {
  _id: string
  name: string
  position: string
  company: string
  image?: string
  review: string
  rating: number
}

export type TeamMember = {
  _id: string
  name: string
  position: string
  description: string
  image: string
}

export type Reason = {
  title: string
  description: string
}

export type Post = {
  _id: string
  title: string
  slug: string
  excerpt: string
  author: string
  category: string
  tags: string[]
  coverImage: string
  publishedAt: string
  readingTime: number
  body: { heading?: string; text: string }[]
}

export type CoreValue = {
  title: string
  description: string
}
