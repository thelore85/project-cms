import {defineType, defineField} from 'sanity'

export const cardParagraphType = defineType({
  name: 'cardParagraph',
  title: 'Card Paragraph',
  type: 'document',
  fields: [
    defineField({
      name: 'previewTitle',
      title: 'Preview Title',
      description: 'Use this field for Sanity studio preview',
      type: 'string',
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'blockContent',
    }),
  ],
  preview: {
    select: {
      title: 'previewTitle',
    },
  },
})
