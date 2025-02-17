export const logoStripType = {
  name: 'logoStrip',
  title: 'Partners Banner',
  type: 'document',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'partnersLogo',
      type: 'array',
      title: 'Logo',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'image',
              type: 'image',
              title: 'Partner logo',
              options: {
                hotspot: true,
              },
            },
          ],
          preview: {
            select: {
              media: 'image',
            },
          },
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
}
