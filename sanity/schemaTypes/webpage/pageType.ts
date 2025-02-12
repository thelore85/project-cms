export const pageType = {
  name: 'page',
  type: 'document',
  title: 'Page',
  fields: [
    // Campo language definito ma nascosto
    {
      name: 'language',
      type: 'string',
      title: 'Language',
      options: {
        list: [
          {title: 'English', value: 'en'},
          {title: 'Italian', value: 'it'},
          {title: 'Spanish', value: 'es'},
        ],
      },
      hidden: true, // Nasconde il campo dall'interfaccia dell'editor
    },
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
      ],
    },
  ],
}
