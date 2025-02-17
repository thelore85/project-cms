// schemas/hero.ts
export const paragraphImageRight = {
  name: 'paragraphImageRight',
  type: 'document',
  title: 'Paragraph Image Right',
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
      name: 'columnLeft',
      title: 'Column Left',
      type: 'text',
    },
    {
      name: 'image',
      title: 'Image Right',
      description: 'Recommended size: 400x400',
      type: 'image',
    },
  ],
  preview: {
    select: {
      title: 'previewTitle',
      image: 'image',
      content: 'columnLeft',
    },
  },
}
