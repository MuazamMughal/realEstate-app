'use client'

import { useState } from 'react'
import { PageHero } from '@/components/layout/page-hero'
import { Reveal } from '@/components/motion/reveal'
import { siteConfig } from '@/lib/site'
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.name.trim()) newErrors.name = 'Name is required'
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email address'
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone is required'
    } else if (!/^[+]?[\d\s-()]+$/.test(formData.phone)) {
      newErrors.phone = 'Invalid phone number'
    }
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required'
    if (!formData.message.trim()) newErrors.message = 'Message is required'

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validateForm()) return

    setIsSubmitting(true)
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message')
      }

      setSubmitted(true)
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
    } catch (error) {
      console.error('Form submission error:', error)
      alert('Failed to send message. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }))
    }
  }

  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="Get in Touch"
        description="Ready to discuss your property goals? Our team is here to help you buy, sell, build or invest with confidence."
        image="/images/cta.png"
        crumbs={[{ label: 'Contact Us' }]}
      />

      <section className="bg-foreground">
        <div className="container-px py-16 lg:py-20">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact Information */}
            <Reveal>
              <div className="space-y-8">
                <div>
                  <h2 className="mb-4 font-serif text-3xl text-white lg:text-4xl">Contact Information</h2>
                  <p className="text-lg text-white/60">
                    Reach out to our team for expert guidance on your real estate, construction or investment needs.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md border border-gold/30 bg-gold/5">
                      <MapPin className="h-5 w-5 text-gold" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">Address</h3>
                      <p className="mt-1 text-white/60">{siteConfig.address}</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md border border-gold/30 bg-gold/5">
                      <Phone className="h-5 w-5 text-gold" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">Phone</h3>
                      <a
                        href={`tel:${siteConfig.phoneHref}`}
                        className="mt-1 block text-white/60 transition-colors hover:text-gold"
                      >
                        {siteConfig.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md border border-gold/30 bg-gold/5">
                      <Mail className="h-5 w-5 text-gold" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">Email</h3>
                      <a
                        href={`mailto:${siteConfig.email}`}
                        className="mt-1 block text-white/60 transition-colors hover:text-gold"
                      >
                        {siteConfig.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md border border-gold/30 bg-gold/5">
                      <Clock className="h-5 w-5 text-gold" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">Office Hours</h3>
                      <p className="mt-1 text-white/60">{siteConfig.hours}</p>
                    </div>
                  </div>
                </div>

                {/* Google Map */}
                <div className="aspect-video overflow-hidden rounded-lg border border-white/10">
                  <iframe
                    src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.123456789!2d67.0011!3d24.8607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDUxJzM4LjUiTiA2N8KwMDAnMDMuOSJF!5e0!3m2!1sen!2s!4v1234567890`}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Trust Real Estate Marketing Location"
                  />
                </div>
              </div>
            </Reveal>

            {/* Contact Form */}
            <Reveal className="delay-100">
              <div className="rounded-lg border border-white/10 bg-[#0a0a0a]/50 p-8">
                <h2 className="mb-6 font-serif text-2xl text-white">Send us a Message</h2>

                {submitted ? (
                  <div className="rounded-md bg-green-500/10 border border-green-500/30 p-6 text-center">
                    <p className="text-green-400">Thank you for your message! We'll get back to you shortly.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid gap-6 sm:grid-cols-2">
                      <div>
                        <label htmlFor="name" className="mb-2 block text-sm font-medium text-white">
                          Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className={`w-full rounded-xl border bg-white/5 px-4 py-3 text-white placeholder:text-white/40 transition-all focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20 ${
                            errors.name ? 'border-red-500' : 'border-white/10'
                          }`}
                          placeholder="Your name"
                        />
                        {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
                      </div>

                      <div>
                        <label htmlFor="email" className="mb-2 block text-sm font-medium text-white">
                          Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className={`w-full rounded-xl border bg-white/5 px-4 py-3 text-white placeholder:text-white/40 transition-all focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20 ${
                            errors.email ? 'border-red-500' : 'border-white/10'
                          }`}
                          placeholder="your@email.com"
                        />
                        {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
                      </div>
                    </div>

                    <div>
                      <label htmlFor="phone" className="mb-2 block text-sm font-medium text-white">
                        Phone *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className={`w-full rounded-xl border bg-white/5 px-4 py-3 text-white placeholder:text-white/40 transition-all focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20 ${
                          errors.phone ? 'border-red-500' : 'border-white/10'
                        }`}
                        placeholder="+92 21 1234 5678"
                      />
                      {errors.phone && <p className="mt-1 text-xs text-red-500">{errors.phone}</p>}
                    </div>

                    <div>
                      <label htmlFor="subject" className="mb-2 block text-sm font-medium text-white">
                        Subject *
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className={`w-full rounded-xl border bg-white/5 px-4 py-3 text-white transition-all focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20 ${
                          errors.subject ? 'border-red-500' : 'border-white/10'
                        }`}
                      >
                        <option value="">Select a subject</option>
                        <option value="Property Buying">Property Buying</option>
                        <option value="Property Selling">Property Selling</option>
                        <option value="Property Rentals">Property Rentals</option>
                        <option value="Construction Services">Construction Services</option>
                        <option value="Investment Advisory">Investment Advisory</option>
                        <option value="General Inquiry">General Inquiry</option>
                      </select>
                      {errors.subject && <p className="mt-1 text-xs text-red-500">{errors.subject}</p>}
                    </div>

                    <div>
                      <label htmlFor="message" className="mb-2 block text-sm font-medium text-white">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        className={`w-full rounded-xl border bg-white/5 px-4 py-3 text-white placeholder:text-white/40 transition-all focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20 resize-none ${
                          errors.message ? 'border-red-500' : 'border-white/10'
                        }`}
                        placeholder="Tell us about your requirements..."
                      />
                      {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message}</p>}
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex w-full items-center justify-center gap-2 rounded-xl bg-gold px-6 py-4 font-semibold text-[#0a0a0a] transition-all hover:bg-gold-dark hover:shadow-lg hover:shadow-gold/20 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        'Sending...'
                      ) : (
                        <>
                          <Send className="h-4 w-4" />
                          Send Message
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  )
}
