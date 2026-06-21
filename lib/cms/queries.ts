import { groq } from 'next-sanity'

export const servicesQuery = groq`*[_type == "service"] | order(orderRank asc){
  "_id": _id, title, "slug": slug.current, excerpt, description,
  "image": coalesce(image.asset->url, ""), benefits, category
}`

export const serviceBySlugQuery = groq`*[_type == "service" && slug.current == $slug][0]{
  "_id": _id, title, "slug": slug.current, excerpt, description,
  "image": coalesce(image.asset->url, ""), benefits, category
}`

export const projectsQuery = groq`*[_type == "project"] | order(_createdAt desc){
  "_id": _id, name, "slug": slug.current, description,
  "image": coalesce(images[0].asset->url, ""), location, category
}`

export const testimonialsQuery = groq`*[_type == "testimonial"]{
  "_id": _id, name, position, company,
  "image": coalesce(image.asset->url, ""), review, rating
}`

export const teamQuery = groq`*[_type == "teamMember"] | order(orderRank asc){
  "_id": _id, name, position, description,
  "image": coalesce(image.asset->url, "")
}`

export const postsQuery = groq`*[_type == "post"] | order(publishedAt desc){
  "_id": _id, title, "slug": slug.current, excerpt, author, category, tags,
  "coverImage": coalesce(coverImage.asset->url, ""), publishedAt, readingTime, body
}`

export const postBySlugQuery = groq`*[_type == "post" && slug.current == $slug][0]{
  "_id": _id, title, "slug": slug.current, excerpt, author, category, tags,
  "coverImage": coalesce(coverImage.asset->url, ""), publishedAt, readingTime, body
}`

export const statsQuery = groq`*[_type == "homePage"][0].stats`
