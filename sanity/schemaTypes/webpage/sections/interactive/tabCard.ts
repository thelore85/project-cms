import {defineType, defineField} from 'sanity'

export const tabCardType = defineType({
  name: 'tabCard',
  title: 'Tab Card',
  type: 'document',
  fields: [
    defineField({
      name: 'previewTitle',
      title: 'Preview Title',
      description: 'Use this field for Sanity studio preview',
      type: 'string',
    }),
    defineField({
      name: 'title',
      title: 'Title',
      description: 'Use this field for H1 section',
      type: 'string',
    }),
    defineField({
      name: 'tabs',
      title: 'Tabs',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'Tab Title',
              type: 'string',
            }),
            defineField({
              name: 'image',
              type: 'image',
              title: 'Tab Image',
              options: {
                hotspot: true,
              },
            }),
            defineField({
              name: 'content',
              title: 'Tab Content',
              type: 'blockContent',
            }),
          ],
        },
      ],
      validation: Rule => Rule.min(2).error('Min 2 tabs are required'),
    }),
  ],
  preview: {
    select: {
      title: 'previewTitle',
    },
  },
})
