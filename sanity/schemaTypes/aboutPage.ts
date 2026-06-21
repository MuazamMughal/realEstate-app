import { defineField, defineType } from 'sanity'

export const aboutPage = defineType({
  name: 'aboutPage',
  title: 'About Page',
  type: 'document',
  fields: [
    defineField({ name: 'story', title: 'Company Story', type: 'text', rows: 6 }),
    defineField({ name: 'mission', type: 'text', rows: 3 }),
    defineField({ name: 'vision', type: 'text', rows: 3 }),
    defineField({
      name: 'coreValues',
      title: 'Core Values',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', type: 'string' },
            { name: 'description', type: 'text', rows: 2 },
          ],
        },
      ],
    }),
  ],
})
