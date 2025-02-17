// schemas/hero.ts
export const paragraphType = {
  name: 'paragraph',
  type: 'document',
  title: 'Paragraph Simple',
  fields: [
    {
      name: 'previewTitle',
      description: 'Use this field for Sanity studio preview',
      type: 'string',
      title: 'Preview Title',
    },
    {
      name: 'title',
      description: 'Paragraph Title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'content',
      title: 'Content',
      type: 'text',
    },
  ],
  preview: {
    select: {
      title: 'previewTitle',
      content: 'content',
    },
  },
}
