import {defineField} from 'sanity'

export default defineField({
  name: 'arrayImage',
  title: 'arrayImage',
  type: 'array',
  of: [
    {
      name: 'image',
      type: 'image',
      title: 'Image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
        },
      ],
    },
  ],
})
