// schemas/hero.ts
export const pageTitleType = {
  name: 'pageTitle',
  type: 'document',
  title: 'Page Title',
  fields: [
    {
      name: 'previewTitle',
      description: 'Use this field for Sanity studio preview',
      type: 'string',
      title: 'Preview Title',
    },
    {
      name: 'title',
      description: 'Page title H1',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'subtitle',
      description: 'Page subtitle under the H1',
      type: 'string',
      title: 'Subtitle',
    },
  ],
  preview: {
    select: {
      title: 'previewTitle',
      content: 'content',
    },
  },
}
