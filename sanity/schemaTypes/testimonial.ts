import { defineField, defineType } from 'sanity'

export const testimonial = defineType({
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',
  fields: [
    defineField({ name: 'name', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'position', type: 'string' }),
    defineField({ name: 'company', type: 'string' }),
    defineField({ name: 'image', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'review', type: 'text', rows: 4 }),
    defineField({ name: 'rating', type: 'number', initialValue: 5 }),
  ],
})
