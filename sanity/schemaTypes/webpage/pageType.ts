export const pageType = {
  name: 'page',
  type: 'document',
  title: 'Page',
  fieldsets: [
    {name: 'content', title: 'Content'},
    {name: 'layout', title: 'Layout Settings'},
  ],
  fields: [
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
      hidden: true,
    },

    {
      name: 'title',
      type: 'string',
      title: 'Page Title',
      fieldset: 'content',
    },

    // Divider usando un fieldset
    {
      name: 'layout',
      type: 'string',
      title: 'Page Layout',
      fieldset: 'layout',
      options: {
        list: [
          {title: 'Main', value: 'main'},
          {title: 'Business', value: 'business'},
        ],
      },
      validation: (Rule: any) => Rule.required().error('You must select a layout'),
    },

    {
      name: 'description',
      type: 'text',
      title: 'Page Description',
      fieldset: 'layout',
    },

    {
      name: 'sections',
      type: 'array',
      title: 'Page Sections',
      fieldset: 'layout',
      of: [
        {
          type: 'reference',
          to: [{type: 'hero'}, {type: 'heroForm'}, {type: 'service'}, {type: 'value'}, {type: 'howTo'}, {type: 'partnersBanner'}, {type: 'testimonial'}, {type: 'faq'}, {type: 'bigCardLeft'}],
        },
      ],
    },
  ],
}
