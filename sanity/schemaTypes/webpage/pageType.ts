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
      description: 'Give it a name to save the page in CMS',
      type: 'string',
      title: 'Page Title',
      fieldset: 'content',
    },

    {
      name: 'pageSlug',
      description: 'this will be the URL path name.',
      type: 'string',
      title: 'Page Slug',
      fieldset: 'content',
      validation: (Rule: any) =>
        Rule.required()
          .error('You must select a layout')
          .regex(/^[a-z]+$/, {
            name: 'lowercaseOnly',
            message: 'Il campo deve contenere solo lettere minuscole senza spazi',
          }),
    },

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
      description: 'SEO description - metadata',
      type: 'string',
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
          name: 'heroSections',
          type: 'reference',
          title: 'Hero Sections',
          fieldset: 'hero',
          to: [{type: 'hero'}, {type: 'heroForm'}, {type: 'heroBig'}],
        },
        {
          name: 'serviceSections',
          type: 'reference',
          title: 'Service Sections',
          fieldset: 'services',
          to: [{type: 'service'}, {type: 'value'}, {type: 'howTo'}, {type: 'faq'}],
        },
        {
          name: 'utilitySections',
          type: 'reference',
          title: 'Utility Sections',
          fieldset: 'utility',
          to: [{type: 'logoStrip'}, {type: 'testimonial'}, {type: 'bigCardLeft'}],
        },
      ],
      fieldsets: [
        {name: 'hero', title: 'Hero Sections'},
        {name: 'services', title: 'Services'},
        {name: 'utility', title: 'Utility'},
      ],
    },
  ],
}
