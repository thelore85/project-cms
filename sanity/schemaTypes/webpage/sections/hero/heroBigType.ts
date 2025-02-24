// schemas/hero.ts
export const heroBigType = {
  name: 'heroBig',
  type: 'document',
  title: 'Hero Big',
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
      name: 'title',
      description: 'Use this field for Sanity studio preview',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'sectionTitle',
      description: 'This is the h1 title renderd in the page',
      type: 'string',
      title: 'Section Title',
    },
    {
      name: 'subtitle',
      type: 'string',
      title: 'Subtitle',
    },
  ],
  preview: {
    select: {
      title: 'title', // Seleziona il titolo
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
