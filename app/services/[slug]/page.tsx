import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { PageHero } from '@/components/layout/page-hero'
import { getService, getServices } from '@/lib/cms'
import { Reveal, StaggerGroup } from '@/components/motion/reveal'
import { ArrowRight, CheckCircle2, ArrowLeft } from 'lucide-react'
import { urlFor } from '@/sanity/lib/image'

export async function generateStaticParams() {
  const services = await getServices()
  return services.map((service) => ({ slug: service.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const service = await getService(slug)
  if (!service) return {}

  return {
    title: service.title,
    description: service.excerpt,
  }
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const service = await getService(slug)
  if (!service) notFound()

  const allServices = await getServices()
  const relatedServices = allServices
    .filter((s) => s._id !== service._id && s.category === service.category)
    .slice(0, 3)

  return (
    <>
      <PageHero
        eyebrow={service.category}
        title={service.title}
        description={service.excerpt}
        image={service.image ? urlFor(service.image).url() : undefined}
        crumbs={[
          { label: 'Services', href: '/services' },
          { label: service.title },
        ]}
      />

      <section className="bg-foreground">
        <div className="container-px py-16 lg:py-20">
          <div className="mx-auto max-w-4xl">
            {/* Service Image */}
            {service.image && (
              <Reveal className="mb-12 aspect-[16/9] overflow-hidden">
                <Image
                  src={urlFor(service.image).url()}
                  alt={service.title}
                  width={1200}
                  height={675}
                  className="h-full w-full object-cover"
                  priority
                />
              </Reveal>
            )}

            {/* Description */}
            <Reveal className="prose prose-invert prose-lg max-w-none">
              <p className="text-xl leading-relaxed text-white/80">{service.description}</p>
            </Reveal>

            {/* Benefits */}
            {service.benefits && service.benefits.length > 0 && (
              <Reveal className="mt-12">
                <h2 className="mb-6 font-serif text-2xl text-white lg:text-3xl">Key Benefits</h2>
                <StaggerGroup className="grid gap-4 sm:grid-cols-2">
                  {service.benefits.map((benefit, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 rounded-lg border border-white/10 bg-white/5 p-4"
                    >
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                      <span className="text-white/80">{benefit}</span>
                    </div>
                  ))}
                </StaggerGroup>
              </Reveal>
            )}

            {/* CTA */}
            <Reveal className="mt-12">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl bg-gold px-6 py-4 font-semibold text-[#0a0a0a] transition-all hover:bg-gold-dark hover:shadow-lg hover:shadow-gold/20"
              >
                Get Started
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Reveal>

            {/* Back to Services */}
            <Reveal className="mt-12">
              <Link
                href="/services"
                className="inline-flex items-center gap-2 text-sm text-white/60 transition-colors hover:text-gold"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to Services
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Related Services */}
      {relatedServices.length > 0 && (
        <section className="bg-[#0a0a0a]">
          <div className="container-px py-16 lg:py-20">
            <h2 className="mb-8 font-serif text-2xl text-white lg:text-3xl">Related Services</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {relatedServices.map((relatedService) => (
                <Link
                  key={relatedService._id}
                  href={`/services/${relatedService.slug}`}
                  className="group flex flex-col"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={relatedService.image ? urlFor(relatedService.image).url() : '/placeholder.svg'}
                      alt={relatedService.title}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                  </div>
                  <div className="pt-4">
                    <span className="text-xs text-gold">{relatedService.category}</span>
                    <h3 className="mt-2 font-serif text-lg text-white transition-colors group-hover:text-gold-dark">
                      {relatedService.title}
                    </h3>
                    <p className="mt-2 text-sm text-white/60">{relatedService.excerpt}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}
