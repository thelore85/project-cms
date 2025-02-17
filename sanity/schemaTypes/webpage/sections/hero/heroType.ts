// schemas/hero.ts
export const heroType = {
  name: 'hero',
  type: 'document',
  title: 'Hero',
  fields: [
    {
      name: 'image',
      type: 'image',
      title: 'Background Image',
      options: {
        hotspot: true,
      },
    },
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
      name: 'subtitle',
      type: 'string',
      title: 'Subtitle',
    },
    {
      name: 'button',
      type: 'object',
      title: 'Button 1',
      fields: [
        {
          name: 'label',
          type: 'string',
          title: 'Button Label',
        },
        {
          name: 'url',
          type: 'string',
          description: 'User relative path, not full URL location. (eg: "/cookie-policy")',
          title: 'Button URL Path',
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'previewTitle', // Seleziona il titolo
      subtitle: 'subtitle', // Seleziona il sottotitolo
      media: 'image', // Seleziona l'immagine per l'anteprima
    },

    prepare({title, subtitle, media}: any) {
      return {
        title: title || 'No Title', // Default se non c'è titolo
        subtitle: subtitle || 'No Subtitle', // Default se non c'è sottotitolo
        media, // Immagine di preview
      }
    },
  },
}
