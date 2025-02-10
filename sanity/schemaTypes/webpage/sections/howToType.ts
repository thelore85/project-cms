export const howToType = {
  name: 'howTo',
  title: 'How To',
  type: 'document',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Section Title',
    },
    {
      name: 'step1',
      type: 'object',
      title: 'Step 1',
      fields: [
        {name: 'title', type: 'string', title: 'Step 1 Title'},
        {name: 'description', type: 'text', title: 'Step 1 Description'},
        {name: 'image', type: 'image', title: 'Step 1 Image', options: {hotspot: true}},
      ],
    },
    {
      name: 'step2',
      type: 'object',
      title: 'Step 2',
      fields: [
        {name: 'title', type: 'string', title: 'Step 2 Title'},
        {name: 'description', type: 'text', title: 'Step 2 Description'},
        {name: 'image', type: 'image', title: 'Step 2 Image', options: {hotspot: true}},
      ],
    },
    {
      name: 'step3',
      type: 'object',
      title: 'Step 3',
      fields: [
        {name: 'title', type: 'string', title: 'Step 3 Title'},
        {name: 'description', type: 'text', title: 'Step 3 Description'},
        {name: 'image', type: 'image', title: 'Step 3 Image', options: {hotspot: true}},
      ],
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
}
