import { defineField, defineType } from 'sanity'

export const homePage = defineType({
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  fields: [
    defineField({
      name: 'hero',
      title: 'Hero',
      type: 'object',
      fields: [
        { name: 'headline', type: 'string' },
        { name: 'subheading', type: 'text', rows: 2 },
        { name: 'backgroundImage', type: 'image' },
      ],
    }),
    defineField({
      name: 'stats',
      title: 'Statistics',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'label', type: 'string' },
            { name: 'value', type: 'number' },
            { name: 'suffix', type: 'string' },
          ],
        },
      ],
    }),
    defineField({
      name: 'cta',
      title: 'Call To Action',
      type: 'object',
      fields: [
        { name: 'heading', type: 'string' },
        { name: 'text', type: 'text', rows: 2 },
      ],
    }),
  ],
})
