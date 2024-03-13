import {FiType} from 'react-icons/fi'
import {SlChemistry} from 'react-icons/sl'
import {defineField, defineType} from 'sanity'
import {supportedLanguages, supportedYears} from '../../constants/constant'
import group, {TypeGroup} from '../objects/group'

export default defineType({
  name: 'page_tree',
  title: 'Page tree',
  icon: FiType,
  type: 'document',
  groups: group,
  fields: [
    defineField({
      name: 'language',
      type: 'string',
      description: 'select language',
      group: TypeGroup.GROUP_REQUIRED,
      options: {
        list: [
          ...supportedLanguages.map((value) => {
            return {title: value.title, value: value.id}
          }),
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'year',
      type: 'string',
      description: 'select year',
      group: TypeGroup.GROUP_REQUIRED,
      initialValue: String(new Date().getFullYear()),
      options: {
        list: [
          ...supportedYears.map((value) => {
            return {title: value.title, value: value.title}
          }),
        ],
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'page_content',
      title: 'page content',
      type: 'object',
      group: TypeGroup.GROUP_CONTENT,
      fields: [
        defineField({
          name: 'home_section',
          type: 'home_section',
        }),
        defineField({
          name: 'aboutUs_section',
          type: 'aboutUs_section',
        }),
        defineField({
          name: 'list_section',
          type: 'list_section',
        }),
      ],
    }),
  ],
  preview: {
    select: {
      year: 'year',
      language: 'language',
    },
    prepare({language, year}: any) {
      const lang = supportedLanguages.find((l) => l.id === language)
      return {
        title: language ? lang?.title : 'Select language',
        subtitle: year ? year : 'Select year',
        media: SlChemistry,
      }
    },
  },
})
