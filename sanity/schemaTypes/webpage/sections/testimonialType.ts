export const testimonialType = {
  name: 'testimonial',
  title: 'Testimonial Section',
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
      name: 'testimonialCards',
      type: 'array',
      title: 'testimonial Cards',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'description',
              type: 'text',
              title: 'Card Description',
            },
            {
              name: 'image',
              type: 'image',
              title: 'Card Image',
              options: {
                hotspot: true, // Permette di selezionare una parte specifica dell'immagine
              },
            },
          ],
          preview: {
            select: {
              title: 'title',
              subtitle: 'description',
              media: 'image',
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
