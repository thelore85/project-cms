export const pageType = {
  name: 'page',
  type: 'document',
  title: 'Page',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Page Title',
    },
    {
      name: 'description',
      type: 'text',
      title: 'Page Description',
    },
    {
      name: 'sections',
      type: 'array',
      title: 'Page Sections',
      of: [
        {
          type: 'reference',
          to: [{type: 'hero'}, {type: 'heroForm'}, {type: 'service'}, {type: 'value'}, {type: 'howTo'}, {type: 'partnersBanner'}, {type: 'testimonial'}, {type: 'faq'}, {type: 'bigCardLeft'}],
        },
        // Aggiungi altri componenti come 'menu', 'team', ecc.
      ],
    },
  ],
}
