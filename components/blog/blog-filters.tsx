'use client'

import { useSearchParams, useRouter } from 'next/navigation'
import { Search } from 'lucide-react'

export function BlogFilters({
  categories,
  tags,
  searchQuery,
  selectedCategory,
  selectedTag,
}: {
  categories: string[]
  tags: string[]
  searchQuery: string
  selectedCategory: string
  selectedTag: string
}) {
  const searchParams = useSearchParams()
  const router = useRouter()

  const updateFilter = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString())
    if (value === 'All' || value === '') {
      params.delete(key)
    } else {
      params.set(key, value)
    }
    router.push(`?${params.toString()}`)
  }

  return (
    <div className="space-y-6">
      <div className="relative">
        <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
        <input
          type="text"
          placeholder="Search articles..."
          value={searchQuery}
          onChange={(e) => updateFilter('search', e.target.value)}
          className="w-full rounded-xl border border-white/10 bg-[#0a0a0a]/50 px-12 py-4 text-white placeholder:text-white/40 transition-all focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20"
        />
      </div>

      <div className="flex flex-wrap gap-4">
        <div className="flex flex-wrap gap-2">
          <span className="text-sm text-white/60">Category:</span>
          <button
            onClick={() => updateFilter('category', 'All')}
            className={`rounded-full px-3 py-1 text-sm transition-all ${
              selectedCategory === 'All'
                ? 'bg-gold text-[#0a0a0a] shadow-lg shadow-gold/20'
                : 'bg-white/10 text-white/80 hover:bg-white/20'
            }`}
          >
            All
          </button>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => updateFilter('category', cat)}
              className={`rounded-full px-3 py-1 text-sm transition-all ${
                selectedCategory === cat
                  ? 'bg-gold text-[#0a0a0a] shadow-lg shadow-gold/20'
                  : 'bg-white/10 text-white/80 hover:bg-white/20'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="flex flex-wrap gap-2">
          <span className="text-sm text-white/60">Tags:</span>
          <button
            onClick={() => updateFilter('tag', 'All')}
            className={`rounded-full px-3 py-1 text-sm transition-all ${
              selectedTag === 'All'
                ? 'bg-gold text-[#0a0a0a] shadow-lg shadow-gold/20'
                : 'bg-white/10 text-white/80 hover:bg-white/20'
            }`}
          >
            All
          </button>
          {tags.slice(0, 8).map((tag) => (
            <button
              key={tag}
              onClick={() => updateFilter('tag', tag)}
              className={`rounded-full px-3 py-1 text-sm transition-all ${
                selectedTag === tag
                  ? 'bg-gold text-[#0a0a0a] shadow-lg shadow-gold/20'
                  : 'bg-white/10 text-white/80 hover:bg-white/20'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
