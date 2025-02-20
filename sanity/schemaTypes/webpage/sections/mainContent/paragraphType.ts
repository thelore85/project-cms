import {defineType, defineField} from 'sanity'

export const paragraphType = defineType({
  name: 'paragraph',
  type: 'document',
  title: 'Paragraph Simple',
  fields: [
    defineField({
      name: 'previewTitle',
      description: 'Use this field for Sanity studio preview',
      type: 'string',
      title: 'Preview Title',
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'blockContent', // Usa il riferimento corretto a blockContent
    }),
  ],
  preview: {
    select: {
      title: 'previewTitle',
      content: 'content',
    },
  },
})
