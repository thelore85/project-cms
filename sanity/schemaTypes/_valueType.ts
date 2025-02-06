export const valueType = {
  name: 'value',
  title: 'Value',
  type: 'document',
  fields: [
    {
      name: 'sectionTitle',
      type: 'string',
      title: 'Section Title',
    },
    {
      name: 'sectionSubtitle',
      type: 'string',
      title: 'Section Subtitle',
    },
    {
      name: 'valueCards',
      type: 'array',
      title: 'value Cards',
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
      title: 'sectionTitle',
      subtitle: 'sectionSubtitle',
    },
  },
}
