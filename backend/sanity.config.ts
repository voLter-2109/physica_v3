import {table} from '@sanity/table'
import {visionTool} from '@sanity/vision'
import {PiDetectiveLight} from 'react-icons/pi'
import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {schemaTypes} from './schemaTypes'
import {Customstructure} from './structure'

export default defineConfig({
  name: 'admin_panel_physicA',
  title: 'admin_panel_physicA',

  projectId: 'zkh5lbnm',
  dataset: 'phisica',
  icon: PiDetectiveLight,
  plugins: [structureTool({structure: Customstructure}), visionTool(), table()],

  schema: {
    types: schemaTypes,
  },
})
