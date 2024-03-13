import {defineField} from 'sanity'

export const aboutUsSection = {
  name: 'aboutUs_section', // _type
  type: 'document',
  title: 'aboutUs_section',

  fields: [
    defineField({
      name: 'heading',
      type: 'string',
      description: 'Заголовок сайта',
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: 'body',
      type: 'portableText',
    }),
  ],
}

export default aboutUsSection
