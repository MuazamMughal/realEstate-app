import { createClient } from 'next-sanity'
import createImageUrlBuilder from '@sanity/image-url'
import { apiVersion, dataset, projectId, isSanityConfigured } from './env'

export const client = isSanityConfigured
  ? createClient({
      projectId,
      dataset,
      apiVersion,
      useCdn: true,
    })
  : null

const builder = isSanityConfigured
  ? createImageUrlBuilder({ projectId, dataset })
  : null

export function urlForImage(source: unknown): string {
  if (!builder || !source) return ''
  try {
    // @ts-expect-error - source is a Sanity image reference
    return builder.image(source).auto('format').fit('max').url()
  } catch {
    return ''
  }
}
