export const cardFeatureType = {
  name: 'cardFeature',
  title: 'Card Feture',
  type: 'document',
  fields: [
    {
      name: 'previewTitle',
      description: 'Use this field for Sanity studio preview',
      type: 'string',
      title: 'Preview Title',
    },
    {
      name: 'sectionTitle',
      description: 'This is the h1 title renderd in the page',
      type: 'string',
      title: 'Section Title',
    },
    {
      name: 'cardFeature',
      type: 'array',
      title: 'Service Cards',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              type: 'string',
              title: 'Card Title',
            },
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
      subtitle: 'sectionSubtitle',
    },
  },
}
