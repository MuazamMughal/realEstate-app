export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-10-01'

export const dataset =
  process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || ''

/**
 * Whether a real Sanity project is configured. When false, the site renders
 * from the typed fallback content in `lib/cms/fallback.ts` so previews work
 * immediately. Add NEXT_PUBLIC_SANITY_PROJECT_ID to go live.
 */
export const isSanityConfigured = projectId.length > 0
