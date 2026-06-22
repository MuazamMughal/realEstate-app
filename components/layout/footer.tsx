'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FaInstagram, FaLinkedin, FaFacebook } from 'react-icons/fa'
import { X, MapPin, Phone, Mail } from 'lucide-react'
import { navLinks, siteConfig } from '@/lib/site'

const serviceLinks = [
  { label: 'Property Buying', href: '/services/property-buying' },
  { label: 'Property Selling', href: '/services/property-selling' },
  { label: 'Construction Services', href: '/services/construction-services' },
  { label: 'Investment Advisory', href: '/services/investment-advisory' },
  { label: 'Property Marketing', href: '/services/property-marketing' },
]

const socials = [
  { Icon: FaInstagram, href: siteConfig.social.instagram, label: 'Instagram' },
  { Icon: FaLinkedin, href: siteConfig.social.linkedin, label: 'LinkedIn' },
  { Icon: FaFacebook, href: siteConfig.social.facebook, label: 'Facebook' },
  { Icon: X, href: siteConfig.social.twitter, label: 'Twitter' },
]

export function Footer() {
  const pathname = usePathname()
  if (pathname?.startsWith('/studio')) return null

  return (
    <footer className="bg-[#0a0a0a] text-white">
      <div className="container-px py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Link href="/" className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center border border-gold/60 font-serif text-lg text-gold">
                T
              </span>
              <span className="flex flex-col leading-none">
                <span className="font-serif text-base tracking-wide">Trust</span>
                <span className="text-[10px] uppercase tracking-[0.3em] text-gold-dark">
                  Real Estate
                </span>
              </span>
            </Link>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-white/55">
              Your trusted partner in real estate, construction and investment — delivering
              premium properties and end-to-end development solutions.
            </p>
            <div className="mt-6 flex gap-3">
              {socials.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-xl text-white/70 transition-all hover:border-gold hover:bg-gold hover:text-[#0a0a0a] hover:shadow-lg hover:shadow-gold/20"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            <h3 className="font-serif text-sm uppercase tracking-[0.2em] text-gold">Company</h3>
            <ul className="mt-5 space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="font-serif text-sm uppercase tracking-[0.2em] text-gold">Services</h3>
            <ul className="mt-5 space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="font-serif text-sm uppercase tracking-[0.2em] text-gold">Contact</h3>
            <ul className="mt-5 space-y-4 text-sm text-white/60">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <span>{siteConfig.address}</span>
              </li>
              <li>
                <a href={`tel:${siteConfig.phoneHref}`} className="flex gap-3 hover:text-white">
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                  {siteConfig.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${siteConfig.email}`} className="flex gap-3 hover:text-white">
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                  {siteConfig.email}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="flex flex-col items-center justify-between mx-9 gap-3 py-6 sm:flex-row">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <p className="text-xs text-white/40">
            Crafted By <span className="text-gold">Engr. Muazam Mughal</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
