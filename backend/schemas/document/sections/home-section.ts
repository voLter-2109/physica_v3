import {defineField} from 'sanity'

export const homeSection = {
  name: 'home_section', // _type
  type: 'document',
  title: 'Home-section',
  fields: [
    defineField({
      name: 'heading',
      type: 'string',
      description: 'Заголовок сайта',
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: 'sub_title',
      type: 'array',
      description: 'макет расчитан на две строки',
      validation: (rule) => rule.required().min(2),
      of: [
        {
          type: 'text',
        },
      ],
    }),
    defineField({
      name: 'arrayImage',
      title: 'arrayImage',
      description: 'backgroud home page, 2 image - black|light',
      validation: (rule) => rule.required().min(2).max(2),
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
              validation: (rule) => rule.required(),
            },
            {
              name: 'theme',
              type: 'string',
              title: 'image theme website',
              validation: (rule) => rule.required(),
              options: {
                list: [
                  {title: 'dark', value: 'dark'},
                  {title: 'light', value: 'light'},
                ],
              },
            },
          ],
        },
      ],
    }),
    // defineField({
    //   name: 'language',
    //   type: 'string',
    //   group: 'group_required',
    //   options: {
    //     list: [
    //       ...supportedLanguages.map((value) => {
    //         return {title: value.id, value: value.title}
    //       }),
    //     ],
    //   },
    //   validation: (Rule) => Rule.required(),
    // }),
    // defineField({
    //   name: 'year',
    //   type: 'string',
    //   group: 'group_required',
    //   options: {
    //     list: [
    //       ...supportedYears.map((value) => {
    //         return {title: value.title, value: value.title}
    //       }),
    //     ],
    //   },
    //   validation: (rule) => rule.required(),
    // }),
  ],

  // preview: {
  //   select: {
  //     year: 'year',
  //     language: 'language',
  //   },
  //   prepare({language, year}: any) {
  //     return {
  //       title: language + ' ' + year,
  //       media: SlChemistry,
  //     }
  //   },
  // },
}

export default homeSection
