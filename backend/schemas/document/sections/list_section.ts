import {defineField} from 'sanity'

export const listSection = {
  name: 'list_section', // _type
  type: 'document',
  title: 'list_section',

  fields: [
    defineField({
      name: 'heading',
      type: 'string',
      description: 'Заголовок сайта',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'sizeChart',
      title: 'Size Chart',
      type: 'table',
    }),

    defineField({
      name: 'list',
      title: 'list',
      type: 'array',
      of: [
        defineField({
          name: 'list_item',
          type: 'object',
          title: 'list_item',
          fields: [
            defineField({
              name: 'title',
              type: 'string',
              title: 'title',
            }),
            defineField({
              name: 'list_items',
              title: 'list_items',
              type: 'array',
              of: [
                defineField({
                  name: 'item',
                  type: 'string',
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  ],
}

export default listSection
