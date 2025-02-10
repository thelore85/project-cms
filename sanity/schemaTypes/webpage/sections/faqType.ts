export const faqType = {
  name: 'faq',
  title: 'Faq Section',
  type: 'document',
  fields: [
    {
      name: 'previewTitle',
      description: 'Use this field for Sanity studio preview',
      type: 'string',
      title: 'Preview Title',
    },
    {
      name: 'title',
      description: 'This is the h1 title renderd in the page',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'faqCards',
      type: 'array',
      title: 'faqCards',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              type: 'text',
              title: 'Card Title',
            },
            {
              name: 'content',
              type: 'text',
              title: 'Card Content',
            },
          ],
          preview: {
            select: {
              title: 'title',
              subtitle: 'content',
            },
          },
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'previewTitle',
    },
  },
}
