// schemas/hero.ts
export const bigCardLeftType = {
  name: 'bigCardLeft',
  type: 'document',
  title: 'Big Card Left',
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
      description: 'Full title in the section',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'subtitle',
      description: 'Title inside the card',
      type: 'string',
      title: 'Subtitle',
    },
    {
      name: 'content',
      type: 'string',
      title: 'Content',
    },
  ],
  preview: {
    select: {
      title: 'previewTitle',
      media: 'image',
      content: 'content', // Aggiunto content
    },

    prepare({title, content, media}: any) {
      return {
        title: title || 'No Title', // Default se non c'è titolo
        content: content || 'No Subtitle', // Default se non c'è sottotitolo
        media, // Immagine di preview
      }
    },
  },
}
