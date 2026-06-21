import { isSanityConfigured } from '@/sanity/env'
import { StudioClient } from './studio-client'

export const dynamic = 'force-static'

export default function StudioPage() {
  if (!isSanityConfigured) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#0a0a0a] px-6 text-center">
        <div className="max-w-md">
          <h1 className="font-serif text-2xl text-[#d4af37]">Sanity Studio</h1>
          <p className="mt-4 text-sm leading-relaxed text-white/70">
            Add your{' '}
            <code className="rounded bg-white/10 px-1.5 py-0.5 text-[#d4af37]">
              NEXT_PUBLIC_SANITY_PROJECT_ID
            </code>{' '}
            environment variable to enable the embedded Studio. The site is
            currently running on built-in fallback content.
          </p>
        </div>
      </main>
    )
  }

  return <StudioClient />
}
