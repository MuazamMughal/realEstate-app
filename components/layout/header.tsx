'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X, Phone } from 'lucide-react'
import { cn } from '@/lib/utils'
import { navLinks, siteConfig } from '@/lib/site'

export function Header() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  // Studio route renders its own chrome
  if (pathname?.startsWith('/studio')) return null

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-500',
        scrolled
          ? 'border-b border-white/10 bg-[#0a0a0a]/80 backdrop-blur-xl'
          : 'border-b border-transparent bg-transparent',
      )}
    >
      <nav className="container-px flex h-20 items-center justify-between">
        <Link href="/" className="group flex items-center gap-3" aria-label={siteConfig.name}>
          <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-gold/60 font-serif text-lg text-gold transition-all group-hover:bg-gold group-hover:text-[#0a0a0a]">
            T
          </span>
          <span className="hidden flex-col leading-none sm:flex">
            <span className="font-serif text-base tracking-wide text-white">Trust</span>
            <span className="text-[10px] uppercase tracking-[0.3em] text-gold-dark">Real Estate</span>
          </span>
        </Link>

        <ul className="hidden items-center gap-9 lg:flex">
          {navLinks.map((link) => {
            const active = pathname === link.href
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    'group relative text-sm font-medium tracking-wide text-white/80 transition-colors hover:text-white',
                    active && 'text-white',
                  )}
                >
                  {link.label}
                  <span
                    className={cn(
                      'absolute -bottom-1.5 left-0 h-px bg-gold transition-all duration-300',
                      active ? 'w-full' : 'w-0 group-hover:w-full',
                    )}
                  />
                </Link>
              </li>
            )
          })}
        </ul>

        <div className="hidden items-center gap-4 lg:flex">
          <a
            href={`tel:${siteConfig.phoneHref}`}
            className="flex items-center gap-2 text-sm text-white/80 transition-colors hover:text-gold"
          >
            <Phone className="h-4 w-4" />
            {siteConfig.phone}
          </a>
          <Link
            href="/contact"
            className="rounded-xl bg-gold px-5 py-2.5 text-sm font-semibold text-[#0a0a0a] transition-all hover:bg-gold-dark hover:shadow-lg hover:shadow-gold/20"
          >
            Get in Touch
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-xl text-white transition-colors hover:bg-white/10 lg:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 top-20 z-40 bg-[#0a0a0a] lg:hidden"
          >
            <motion.ul
              initial="hidden"
              animate="visible"
              className="container-px flex flex-col gap-2 pt-8"
            >
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.08 * i, duration: 0.4 }}
                  className="border-b border-white/10"
                >
                  <Link
                    href={link.href}
                    className="block py-5 font-serif text-2xl text-white"
                  >
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
            <div className="container-px mt-8 flex flex-col gap-4">
              <a href={`tel:${siteConfig.phoneHref}`} className="flex items-center gap-2 text-white/80">
                <Phone className="h-4 w-4 text-gold" />
                {siteConfig.phone}
              </a>
              <Link
                href="/contact"
                className="rounded-xl bg-gold px-5 py-3 text-center text-sm font-semibold text-[#0a0a0a] transition-all hover:bg-gold-dark hover:shadow-lg hover:shadow-gold/20"
              >
                Get in Touch
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
