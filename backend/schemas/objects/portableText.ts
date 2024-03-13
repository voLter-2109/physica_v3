import {defineField, defineType} from 'sanity'
import textEditorStyle from './textEditorStyle'

export default defineType({
  name: 'portableText',
  title: 'Portable Text',
  type: 'array',
  of: [
    defineField({
      name: 'block',
      type: 'block',
      styles: textEditorStyle,
    }),
    defineField({name: 'image', type: 'image'}),
  ],
})
