import {defineType, defineField} from 'sanity'

export const paragraphImageRight = defineType({
  name: 'paragraphImageRight',
  type: 'document',
  title: 'Paragraph Image Right',
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
      type: 'blockContent', // Usa blockContent per il testo formattato
    }),
    defineField({
      name: 'image',
      title: 'Image Right',
      description: 'Recommended size: 400x400',
      type: 'image',
    }),
  ],
  preview: {
    select: {
      title: 'previewTitle',
      image: 'image',
      content: 'content',
    },
  },
})
