export const partnersBannerType = {
  name: 'partnersBanner',
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
      title: 'Partners Logo',
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
